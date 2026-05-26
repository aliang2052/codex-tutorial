#!/usr/bin/env node
// 构建 Codex 教程站：读 data/sections.mjs → 生成 index.html + tutorial/*.html
import { sections } from '../data/sections.mjs';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const ROOT = path.resolve(path.dirname(__filename), '..');
const TUTORIAL_DIR = path.join(ROOT, 'tutorial');

const SITE_TITLE = 'Codex 深度教程';
const SITE_SUBTITLE = '从入门到精通';
const HERO_TITLE_TOP = 'Codex';
const HERO_TITLE_BOTTOM = '从入门到精通';
const HERO_DESC = '面向中文开发者的 OpenAI Codex 完整教程。覆盖桌面端 App、CLI、IDE、Web/Cloud 全场景，AGENTS.md、Skills、MCP、插件、Permissions、Rules、Hooks、企业治理一站打通。';

// 把 id 转成文件名（保留 ASCII，便于 URL/Git/CI 友好）
function slugifyId(id) { return id; }

// 给每个 page 算一个全局编号、文件名、URL（编号从 1 开始，按 sections 顺序）
function buildPageIndex() {
  const flat = [];
  let idx = 1;
  for (const section of sections) {
    for (const page of section.pages) {
      const file = `${idx}-${slugifyId(page.id)}.html`;
      flat.push({
        ...page,
        section: section.title,
        sectionPart: sections.indexOf(section) + 1,
        idx,
        file,
        href: `tutorial/${file}`,
      });
      idx += 1;
    }
  }
  return flat;
}

const flatPages = buildPageIndex();
const pageById = new Map(flatPages.map((p) => [p.id, p]));

// ---------- HTML 片段 ----------

const themeBootstrap = `<script>(function(){try{var t=localStorage.getItem('__codex_tutorial_theme');if(!t){t=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}if(t==='dark')document.documentElement.classList.add('dark');}catch(e){}})();</script>`;

const themeToggleSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<circle cx="12" cy="12" r="4"></circle>
<path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
</svg>`;

function navbar({ basePath = '', activeNav = 'home' }) {
  return `<nav class="navbar">
<a href="${basePath}index.html" class="navbar-brand">
  <div class="logo">Cx</div>
  <span>${SITE_TITLE}</span>
</a>
<div class="navbar-nav">
  <a href="${basePath}index.html"${activeNav === 'home' ? ' class="active"' : ''}>首页</a>
  <a href="${basePath}tutorial/${flatPages[0].file}"${activeNav === 'tutorial' ? ' class="active"' : ''}>教程</a>
  <a href="https://developers.openai.com/codex" target="_blank" rel="noopener">官方文档</a>
  <a href="https://github.com/openai/codex" target="_blank" rel="noopener">GitHub</a>
</div>
<div class="navbar-right">
  <button class="theme-toggle" aria-label="切换主题">${themeToggleSvg}</button>
  <a href="https://github.com/openai/codex" target="_blank" rel="noopener" class="btn-outline" style="padding:7px 14px;font-size:0.85rem;">GitHub</a>
</div>
</nav>`;
}

function footer() {
  return `<footer class="footer">
  <div class="footer-links">
    <a href="https://developers.openai.com/codex" target="_blank" rel="noopener">官方文档</a>
    <a href="https://github.com/openai/codex" target="_blank" rel="noopener">GitHub</a>
    <a href="https://www.runoob.com/codex/codex-tutorial.html" target="_blank" rel="noopener">菜鸟教程</a>
  </div>
  <p>Codex 中文教程 · 内容参考 OpenAI 官方文档、菜鸟教程与社区实践 · ${new Date().getFullYear()}</p>
</footer>`;
}

// ---------- Index Page ----------

function indexHtml() {
  const partsHtml = sections.map((section, i) => {
    const items = section.pages.map((page) => {
      const fp = pageById.get(page.id);
      return `<li><a href="${fp.href}">${escapeHtml(page.title)}</a></li>`;
    }).join('\n        ');
    return `<div class="part-card">
      <span class="part-num">第 ${i + 1} 部分</span>
      <h2>${escapeHtml(section.title)}</h2>
      <ul class="doc-list">
        ${items}
      </ul>
    </div>`;
  }).join('\n    ');

  const totalPages = flatPages.length;
  const totalSections = sections.length;

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${SITE_TITLE} - ${SITE_SUBTITLE}</title>
<meta name="description" content="${escapeHtml(HERO_DESC)}">
<meta name="keywords" content="Codex, OpenAI, AI编程, CLI, AGENTS.md, MCP, Skills, 插件, 教程">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/shared.css?v=4">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%238B5CF6'/%3E%3Cstop offset='1' stop-color='%233B82F6'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='64' height='64' rx='14' fill='url(%23g)'/%3E%3Ctext x='32' y='40' text-anchor='middle' font-family='Arial,sans-serif' font-size='24' font-weight='700' fill='white'%3ECx%3C/text%3E%3C/svg%3E">
${themeBootstrap}
<script src="assets/sidebar.js" defer></script>
</head>
<body>
${navbar({ basePath: '', activeNav: 'home' })}

<main style="margin-top: 60px;">

<!-- Hero -->
<section class="hero">
  <div class="hero-content">
    <div class="hero-badge"><span class="badge-dot"></span>跟着阿亮学AI</div>
    <h1 class="hero-title">
      <span class="title-highlight">${HERO_TITLE_TOP}</span>
      <span class="title-dark">${HERO_TITLE_BOTTOM}</span>
    </h1>
    <p class="hero-description">${escapeHtml(HERO_DESC)}</p>
    <div class="hero-buttons">
      <a href="${flatPages[0].href}" class="btn-primary">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        开始学习
      </a>
      <a href="#parts" class="btn-outline">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
        浏览目录
      </a>
    </div>
    <div class="hero-stats">
      <div class="hero-stat"><div class="stat-num">${totalPages}</div><div class="stat-label">小节</div></div>
      <div class="hero-stat"><div class="stat-num">${totalSections}</div><div class="stat-label">大部分</div></div>
      <div class="hero-stat"><div class="stat-num">App</div><div class="stat-label">主线</div></div>
      <div class="hero-stat"><div class="stat-num">CLI / Web</div><div class="stat-label">补充</div></div>
    </div>
  </div>

  <div class="hero-right">
    <div class="hero-qr-section">
      <div class="hero-qr-card">
        <div class="hero-qr-image">
          <img src="assets/images/wechat-qr.jpg" alt="微信交流群" loading="lazy">
        </div>
        <div class="hero-qr-info">
          <div class="qr-label">微信交流群</div>
          <div class="qr-text">扫码加入学习社群<br>获取最新教程更新</div>
        </div>
      </div>
      <div class="hero-qr-card">
        <div class="hero-qr-image">
          <img src="assets/images/xhs-qr.png" alt="小红书">
        </div>
        <div class="hero-qr-info">
          <div class="qr-label">小红书</div>
          <div class="qr-text">关注「跟着阿亮学AI」<br>获取更多 AI 教程</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Features -->
<section class="features">
  <h2 class="features-title">为什么选 Codex</h2>
  <p class="features-subtitle">OpenAI 出品的 coding agent，桌面端、CLI、IDE、Cloud 一套到底</p>
  <div class="features-grid">
    <div class="feature-card">
      <div class="feature-icon">🖥️</div>
      <div class="feature-title">桌面端主线</div>
      <div class="feature-description">Codex App 把项目、线程、Git diff、终端、浏览器、插件和云端任务放在同一个工作台</div>
    </div>
    <div class="feature-card">
      <div class="feature-icon">🧠</div>
      <div class="feature-title">真正执行</div>
      <div class="feature-description">读取、修改、运行代码，直到任务完成或需要你审批。不只是补全，不只是聊天</div>
    </div>
    <div class="feature-card">
      <div class="feature-icon">🔌</div>
      <div class="feature-title">MCP 协议</div>
      <div class="feature-description">通过 Model Context Protocol 连接浏览器、数据库、文档平台、内部知识库</div>
    </div>
    <div class="feature-card">
      <div class="feature-icon">⚡</div>
      <div class="feature-title">Skills 与插件</div>
      <div class="feature-description">把重复工作流固化成 Skills；通过插件接入 GitHub、Slack、Figma、Computer Use</div>
    </div>
    <div class="feature-card">
      <div class="feature-icon">🛡️</div>
      <div class="feature-title">权限可控</div>
      <div class="feature-description">Sandbox、Approval、Rules、Hooks、Managed config，企业治理一应俱全</div>
    </div>
    <div class="feature-card">
      <div class="feature-icon">☁️</div>
      <div class="feature-title">可自动化</div>
      <div class="feature-description">codex exec、SDK、App Server、GitHub Action、MCP Server，把 Codex 接进 CI 与内部平台</div>
    </div>
  </div>
</section>

<!-- Parts Grid -->
<section class="parts-section" id="parts">
  <div class="parts-section-header">
    <h2>完整目录</h2>
    <p>${totalSections} 大部分 · ${totalPages} 小节</p>
  </div>
  <div class="parts-grid">
    ${partsHtml}
  </div>
</section>

${footer()}

</main>
</body>
</html>`;
}

// ---------- Tutorial Page ----------

function sidebarHtml(activeId) {
  return sections.map((section) => {
    const items = section.pages.map((page) => {
      const fp = pageById.get(page.id);
      const isActive = page.id === activeId;
      return `<a href="${fp.file}" class="nav-item sub${isActive ? ' active' : ''}">${escapeHtml(page.title)}</a>`;
    }).join('');
    return `<div class="nav-section"><div class="nav-section-title">${escapeHtml(section.title)}</div>${items}</div>`;
  }).join('');
}

function pageNavHtml(idx) {
  const prev = flatPages[idx - 1];
  const next = flatPages[idx + 1];
  const prevHtml = prev
    ? `<a href="${prev.file}" class="prev"><span class="label">上一篇</span>${escapeHtml(prev.title)}</a>`
    : `<div class="nav-placeholder"></div>`;
  const nextHtml = next
    ? `<a href="${next.file}" class="next"><span class="label">下一篇</span>${escapeHtml(next.title)}</a>`
    : `<div class="nav-placeholder"></div>`;
  return `<nav class="page-nav" aria-label="上下篇">${prevHtml}${nextHtml}</nav>`;
}

function tutorialPageHtml(page) {
  const idx = page.idx - 1;
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(page.title)} | ${SITE_TITLE}</title>
<meta name="description" content="${escapeHtml(page.lead)}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../assets/shared.css?v=4">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%238B5CF6'/%3E%3Cstop offset='1' stop-color='%233B82F6'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='64' height='64' rx='14' fill='url(%23g)'/%3E%3Ctext x='32' y='40' text-anchor='middle' font-family='Arial,sans-serif' font-size='24' font-weight='700' fill='white'%3ECx%3C/text%3E%3C/svg%3E">
${themeBootstrap}
<script src="../assets/sidebar.js" defer></script>
</head>
<body>
${navbar({ basePath: '../', activeNav: 'tutorial' })}
<button class="menu-toggle" onclick="document.querySelector('.sidebar').classList.toggle('open')">☰</button>
<div class="container">
<aside class="sidebar"><nav class="sidebar-nav">${sidebarHtml(page.id)}</nav></aside>
<main class="main-content">
<div class="breadcrumb"><a href="../index.html">首页</a> <span style="color:var(--text-muted)">/</span> ${escapeHtml(page.section)} <span style="color:var(--text-muted)">/</span> ${escapeHtml(page.title)}</div>
<article class="markdown-body">
<p class="lead">${escapeHtml(page.lead)}</p>
${page.body}
${pageNavHtml(idx)}
</article>
</main>
</div>
</body>
</html>`;
}

// ---------- Utils ----------

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ---------- Run ----------

async function main() {
  // 清空 tutorial 目录
  await fs.rm(TUTORIAL_DIR, { recursive: true, force: true });
  await fs.mkdir(TUTORIAL_DIR, { recursive: true });

  // 写 index.html
  const indexPath = path.join(ROOT, 'index.html');
  await fs.writeFile(indexPath, indexHtml(), 'utf8');
  console.log(`✓ wrote ${path.relative(ROOT, indexPath)}`);

  // 写 tutorial/*.html
  for (const page of flatPages) {
    const outPath = path.join(TUTORIAL_DIR, page.file);
    await fs.writeFile(outPath, tutorialPageHtml(page), 'utf8');
  }
  console.log(`✓ wrote ${flatPages.length} files in tutorial/`);

  console.log('\nBuild complete.');
  console.log(`  sections: ${sections.length}`);
  console.log(`  pages:    ${flatPages.length}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
