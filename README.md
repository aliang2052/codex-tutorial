# Codex 深度教程 · 从入门到精通

> 面向中文开发者的 **OpenAI Codex** 完整教程。覆盖桌面端 App、CLI、IDE、Web / Cloud 全场景，把 AGENTS.md、Skills、MCP、插件、Permissions、Rules、Hooks、企业治理一站打通。

这是一个纯静态教程站点：内容全部写在 `data/sections.mjs` 里，通过 `scripts/build.mjs` 一键生成首页与全部教程页，部署在 Vercel 上。共 **12 个部分、60 个小节**，以 **Codex 桌面端 App** 为主线，CLI / IDE / Cloud 作为补充。

---

## ✨ 特性

- **以官方文档为事实基准**：内容主要来源于 [OpenAI Codex 官方文档](https://developers.openai.com/codex) 与 [openai/codex 仓库](https://github.com/openai/codex)，第三方资料只用于教学视角。
- **桌面端主线**：先学会用 Codex App 管理多项目、多线程、Local / Worktree / Cloud，再延伸到 CLI、IDE 和云端。
- **工程化视角**：不只是讲命令，更讲 Agent Loop、Sandbox、Approval、权限、审计、团队治理这些真正影响落地的部分。
- **数据驱动构建**：一份 `sections.mjs` 数据源 → 自动生成 60 个页面 + 首页，结构统一、易维护。
- **深色 / 浅色主题**、响应式布局、自动跟随系统主题。
- **零运行时依赖**：纯 HTML / CSS / 原生 JS，静态托管即可。

---

## 📚 内容大纲

| # | 部分 | 小节数 | 重点 |
|---|------|:---:|------|
| 1 | 基础入门 | 7 | Codex 是什么、四种使用形态、与 Claude Code / Cursor / Copilot 的异同、账号认证、第一条任务、接入国产模型 |
| 2 | 桌面端入门 | 8 | 安装登录、App 界面、Local / Worktree / Cloud、多线程并行、设置、命令与快捷键 |
| 3 | 工程工作流 | 5 | Git diff、Worktree 流程、内置浏览器预览、Chrome 插件、Computer Use |
| 4 | CLI 与终端 | 6 | 安装、基础用法、Flags、Slash 命令、会话管理、`exec` 自动化 |
| 5 | IDE 与 Cloud | 5 | IDE 扩展与工作流、Web / Cloud、云端任务、GitHub 集成 |
| 6 | 核心概念 | 4 | Agent Loop、线程上下文、Sandbox 与 Approval、模型与推理 |
| 7 | 配置与定制 | 4 | `config.toml`、Permissions Profile、Rules、Hooks |
| 8 | 扩展能力 | 5 | AGENTS.md、Skills、MCP、插件、插件管理 |
| 9 | 实战工作流 | 7 | 读代码库、做功能、修 Bug、补测试、代码审查、重构、前端 |
| 10 | 集成与自动化 | 3 | Slack 集成、CI 自动化、SDK |
| 11 | 安全与治理 | 2 | 个人安全、企业治理 |
| 12 | 速查与附录 | 4 | CLI 速查表、Slash 速查表、FAQ、术语表 |

> 在线阅读建议从「基础入门 → 桌面端入门」开始，完成约 10 个真实任务后，再按需深入 CLI、Cloud、配置与扩展章节。

---

## 🗂 项目结构

```
codex-tutorial/
├── index.html              # 首页（由 build 脚本生成）
├── tutorial/               # 60 个教程页（由 build 脚本生成）
│   ├── 1-codex-intro.html
│   ├── 2-codex-forms.html
│   └── ...
├── data/
│   └── sections.mjs        # ⭐ 唯一内容数据源（章节 + 页面正文）
├── scripts/
│   └── build.mjs           # 构建脚本：sections.mjs → index.html + tutorial/*.html
├── content/                # 内容整理稿、选题与素材
├── assets/
│   ├── shared.css          # 全站样式
│   ├── sidebar.js          # 侧边栏 / 主题切换
│   └── images/             # 二维码、配图等
└── favicon.ico
```

---

## 🚀 本地运行与构建

仓库提交的是构建产物（`index.html` + `tutorial/*.html`），直接用任意静态服务器即可预览。

**预览：**

```bash
# 任选其一
npx serve .
# 或
python3 -m http.server 8000
```

然后打开 `http://localhost:8000`。

**修改内容后重新生成页面：**

所有正文都集中在 `data/sections.mjs`。改完数据后执行构建脚本，会重新生成首页与全部教程页：

```bash
node scripts/build.mjs
```

> 脚本无第三方依赖，需要 Node.js（建议 18+，支持 ESM）。

---

## 🌐 部署

站点托管在 [Vercel](https://vercel.com/)（纯静态，无需特殊配置）。推送到 `main` 分支后自动部署。

---

## 🤝 贡献

- 内容勘误、补充新章节：编辑 `data/sections.mjs`，运行 `node scripts/build.mjs`，提交生成后的页面。
- 命令、模型名、权限名、价格等以 **OpenAI 官方文档为准**，不写死易变信息。
- 欢迎通过 Issue / PR 反馈问题与建议。

---

## 👋 关于作者

**跟着阿亮学 AI** — 专注把 AI 编程工具讲清楚、讲到能上手。

- 📕 小红书：**跟着阿亮学AI**
- 💬 更多 AI 教程与交流群，请扫描站点首页的二维码

如果这个教程帮到了你，欢迎在小红书关注「跟着阿亮学AI」，也欢迎给本仓库点个 ⭐。

---

## 📄 许可与免责声明

本教程为学习交流用途整理，Codex 为 OpenAI 的产品，相关商标归各自所有者所有。文中涉及的功能、命令、价格可能随官方更新而变化，请以 [OpenAI 官方文档](https://developers.openai.com/codex) 为准。
