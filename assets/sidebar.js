// Codex 教程站点 - 侧边栏 + 主题切换 + SPA 无刷新切换
(function () {
  const SCROLL_KEY = '__codex_tutorial_sidebar_scroll';
  const THEME_KEY = '__codex_tutorial_theme';

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
  function initTheme() {
    let saved = localStorage.getItem(THEME_KEY);
    if (!saved) {
      saved = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    applyTheme(saved);
    const btn = document.querySelector('.theme-toggle');
    if (btn) {
      btn.addEventListener('click', () => {
        const cur = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
        const next = cur === 'dark' ? 'light' : 'dark';
        localStorage.setItem(THEME_KEY, next);
        applyTheme(next);
      });
    }
  }

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.from((root || document).querySelectorAll(sel)); }

  function restoreSidebarScroll() {
    const sidebar = $('.sidebar');
    if (!sidebar) return;
    const saved = sessionStorage.getItem(SCROLL_KEY);
    if (saved !== null) {
      sidebar.scrollTop = parseInt(saved, 10) || 0;
      return;
    }
    const active = $('.nav-item.active', sidebar);
    if (active) {
      const target = active.offsetTop - sidebar.clientHeight / 2 + active.clientHeight / 2;
      sidebar.scrollTop = Math.max(0, target);
    }
  }

  function trackSidebarScroll() {
    const sidebar = $('.sidebar');
    if (!sidebar) return;
    let throttleTimer = null;
    sidebar.addEventListener('scroll', () => {
      if (throttleTimer) return;
      throttleTimer = setTimeout(() => {
        sessionStorage.setItem(SCROLL_KEY, String(sidebar.scrollTop));
        throttleTimer = null;
      }, 80);
    }, { passive: true });
    sidebar.addEventListener('click', (e) => {
      if (e.target.closest('a')) {
        sessionStorage.setItem(SCROLL_KEY, String(sidebar.scrollTop));
      }
    }, { capture: true });
  }

  function initSPA() {
    if (!$('.sidebar')) return;
    document.addEventListener('click', function (e) {
      const link = e.target.closest('.sidebar a, .page-nav a');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('//')) return;
      if (!href.endsWith('.html')) return;

      const url = new URL(href, window.location.href);
      if (url.pathname === window.location.pathname) {
        e.preventDefault();
        return;
      }

      e.preventDefault();
      navigateTo(url.href);
    });

    window.addEventListener('popstate', function () {
      navigateTo(window.location.href, true);
    });
  }

  async function navigateTo(url, isPopState) {
    const sidebar = $('.sidebar');
    const savedScroll = sidebar ? sidebar.scrollTop : 0;
    try {
      const res = await fetch(url);
      if (!res.ok) {
        window.location.href = url;
        return;
      }
      const html = await res.text();
      const doc = new DOMParser().parseFromString(html, 'text/html');

      const newMain = doc.querySelector('main.main-content');
      const oldMain = $('main.main-content');
      if (newMain && oldMain) {
        oldMain.innerHTML = newMain.innerHTML;
      }

      document.title = doc.title;
      if (!isPopState) {
        history.pushState(null, '', url);
      }
      window.scrollTo(0, 0);

      const currentSlug = decodeURIComponent(url.split('/').pop().replace(/\.html$/, ''));
      $$('.sidebar a').forEach(a => {
        const aSlug = decodeURIComponent(a.getAttribute('href').replace(/\.html$/, ''));
        a.classList.toggle('active', aSlug === currentSlug);
      });

      if (sidebar) sidebar.scrollTop = savedScroll;

      // 给插件页重新挂载交互
      if (typeof window.__codexInitPluginPage === 'function') {
        window.__codexInitPluginPage();
      }
    } catch (err) {
      window.location.href = url;
    }
  }

  // ---------- 插件页：搜索 + 分类 ----------
  async function loadPlugins() {
    try {
      const response = await fetch('../content/插件');
      const text = await response.text();
      return parsePlugins(text);
    } catch (error) {
      return [{ name: '无法读取插件文件', category: '错误', desc: '请通过本地 HTTP 服务打开站点，例如 python3 -m http.server 8765。' }];
    }
  }

  function parsePlugins(text) {
    const result = [];
    let category = '未分类';
    text.split(/\r?\n/).forEach((line) => {
      const heading = line.match(/^##\s+(.+)/);
      if (heading) {
        category = heading[1].trim();
        return;
      }
      const item = line.match(/^-\s+(.+?)\s+-\s+(.+)/);
      if (item) {
        result.push({ name: item[1].trim(), desc: item[2].trim(), category });
      }
    });
    return result;
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  async function setupPluginPage() {
    const list = document.getElementById('pluginList');
    const search = document.getElementById('pluginSearch');
    const select = document.getElementById('pluginCategory');
    if (!list || !search || !select) return;
    const plugins = await loadPlugins();
    const categories = Array.from(new Set(plugins.map((plugin) => plugin.category)));
    select.innerHTML = `<option value="">全部分类</option>` + categories.map((c) => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join('');
    const render = () => {
      const query = search.value.trim().toLowerCase();
      const category = select.value;
      const filtered = plugins.filter((plugin) => {
        const matchQuery = !query || `${plugin.name} ${plugin.desc} ${plugin.category}`.toLowerCase().includes(query);
        const matchCategory = !category || plugin.category === category;
        return matchQuery && matchCategory;
      });
      list.innerHTML = filtered.map((plugin) => `<div class="plugin-item"><div><div class="plugin-name">${escapeHtml(plugin.name)}</div><div class="plugin-category">${escapeHtml(plugin.category)}</div></div><div class="plugin-desc">${escapeHtml(plugin.desc)}</div></div>`).join('') || `<div class="note"><strong>没有匹配结果。</strong>换个关键词或分类再试。</div>`;
    };
    search.addEventListener('input', render);
    select.addEventListener('change', render);
    render();
  }
  window.__codexInitPluginPage = setupPluginPage;

  function init() {
    initTheme();
    restoreSidebarScroll();
    trackSidebarScroll();
    initSPA();
    if (document.getElementById('pluginList')) setupPluginPage();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
