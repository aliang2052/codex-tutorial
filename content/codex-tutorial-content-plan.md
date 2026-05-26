# Codex 教程网站内容整理稿

整理日期：2026-05-25

目标：参考 `claudecode-tutorial` 的组织方式，先把 Codex 教程网站的内容体系整理出来。内容重点改为 **Codex 桌面端 App**，CLI、IDE、Web 作为对照和补充。后续建站时可把本文拆成 `data/toc.json`、逐页 Markdown/HTML、速查表和首页介绍文案。

## 1. 内容来源与取舍

### 1.1 主要来源

1. OpenAI 官方 Codex 文档
   - https://developers.openai.com/codex
   - https://developers.openai.com/codex/quickstart
   - https://developers.openai.com/codex/app
   - https://developers.openai.com/codex/app/features
   - https://developers.openai.com/codex/app/settings
   - https://developers.openai.com/codex/app/computer-use
   - https://developers.openai.com/codex/app/chrome-extension
   - https://developers.openai.com/codex/app/commands
   - https://developers.openai.com/codex/plugins
   - https://developers.openai.com/codex/cli
   - https://developers.openai.com/codex/cli/reference
   - https://developers.openai.com/codex/cli/slash-commands
   - https://developers.openai.com/codex/config-basic
   - https://developers.openai.com/codex/concepts/sandboxing
   - https://developers.openai.com/codex/permissions
   - https://developers.openai.com/codex/guides/agents-md
   - https://developers.openai.com/codex/mcp
   - https://developers.openai.com/codex/skills
   - https://developers.openai.com/codex/rules
   - https://developers.openai.com/codex/hooks
   - https://developers.openai.com/codex/cloud

2. OpenAI Codex GitHub 仓库
   - https://github.com/openai/codex
   - 用于校正 CLI 安装方式、开源状态、最新 Release、源码和文档跳转。

3. 菜鸟教程 Codex 系列
   - https://www.runoob.com/codex/codex-tutorial.html
   - https://www.runoob.com/codex/codex-commands.html
   - https://www.runoob.com/codex/codex-install.html
   - https://www.runoob.com/codex/codex-cli.html
   - https://www.runoob.com/codex/codex-config.html
   - https://www.runoob.com/codex/codex-mcp.html
   - 用于中文读者的章节视角、速查表和术语表达；具体命令、模型名、权限名要以 OpenAI 官方为准。

4. OpenAI 官方博客与工程文章
   - https://openai.com/index/unrolling-the-codex-agent-loop/
   - https://openai.com/index/running-codex-safely/
   - 用于解释 Codex agent loop、安全边界、组织治理、日志审计和真实工程实践。

5. 其他公开资料
   - 搜索到的第三方教程、PDF、社区帖、博客，多数可作为选题灵感，不建议作为最终事实源。
   - 可采纳方向：AGENTS.md 写法、团队治理、工作流模板、常见误区。
   - 不建议直接采纳：未经官方确认的版本号、价格、模型名、快捷键、内部实现猜测。

### 1.2 内容取舍原则

- 以 OpenAI 官方文档为事实基准。
- 菜鸟教程适合作为中文教程目录参考，但需要剔除或校正过时写法。
- 第三方资料只吸收「教学角度」和「实践经验」，不把它作为命令或配置的权威来源。
- 教程要面向中文开发者，但避免写成新闻汇总；重点放在能直接上手、能长期查阅、能指导团队落地。

## 2. 网站定位

站点标题建议：

Codex 桌面端深度教程 - 从入门到工程化实践

一句话介绍：

面向中文开发者的 OpenAI Codex 桌面端完整教程，重点讲 App 安装、项目管理、多线程、Local / Worktree / Cloud、Computer Use、Chrome 插件、插件目录、自动化、Git 工作流和安全权限；CLI、IDE、Web 云端作为补充章节。

目标读者：

- 会使用命令行和 Git 的初中级开发者。
- 想主要通过 Codex 桌面端提升日常开发效率的独立开发者。
- 想把 Codex 引入团队流程的技术负责人。
- 已经用过 Claude Code、Cursor、Copilot，想系统理解 Codex 差异的人。
- 需要在桌面端安装和管理插件、Skills、MCP、Computer Use 的高阶用户。

不适合的读者：

- 完全没有编程基础的人。
- 只想看模型新闻、不准备动手实践的人。
- 希望 AI 完全替代工程判断的人。

## 3. 推荐课程结构

参考 `claudecode-tutorial` 的大纲风格，建议分为 10 个部分、36 章、约 120-150 个小节。Codex 官方文档还在快速变化，不建议一次写成 200+ 节，先保持高密度、可维护。**排序上把桌面端 App 放到最前面，CLI 不再作为主线，只作为高级和自动化补充。**

### 桌面端主线内容

网站第一阶段先围绕 Codex App 写作，读者打开站点后应先学会桌面端，而不是先学 CLI：

1. 下载、安装、登录和选择项目。
2. App 界面：项目列表、线程、输入框、diff、终端、侧边栏、设置。
3. 三种线程模式：Local、Worktree、Cloud。
4. 多项目、多线程和并行任务。
5. App 设置：通用、通知、Agent 配置、外观、Git。
6. App 命令和快捷键：命令菜单、设置、打开文件夹、新线程、查找、听写、diff、终端。
7. Computer Use：安装插件、macOS 权限、何时使用、何时不要用。
8. Chrome 插件：什么时候用 Chrome、什么时候用内置浏览器、网站 allowlist / blocklist。
9. 插件目录：如何浏览、安装、启用、卸载、用 `@插件名` 调用。
10. 桌面端安全：权限提示、网站内容不可信、外部服务数据政策、最小权限。

### 第 1 部分：基础入门

#### 第 1 章：Codex 概述

1.1 Codex 是什么
- Codex 是 OpenAI 的软件开发 coding agent。
- 能读取、修改、运行代码，并通过多轮工具调用完成任务。
- 不是单纯代码补全，也不是只回答问题的聊天机器人。

1.2 Codex 的四种主要使用形态
- App：桌面应用，适合多项目、多线程、本地操作。
- IDE Extension：在 VS Code、Cursor、Windsurf 等编辑器中使用。
- CLI：终端里的本地 coding agent，适合终端用户和自动化。
- Web / Cloud：在云端环境中异步处理任务，可连接 GitHub 并创建 PR。

1.3 Codex 与 ChatGPT、Copilot、Claude Code 的区别
- ChatGPT 偏对话与知识辅助。
- Copilot 偏编辑器内补全和代码建议。
- Claude Code 与 Codex 都属于 agentic coding 工具，但配置、权限、生态、模型和工作流不同。
- Codex 的重点是「一个 agent，贯穿 App、CLI、IDE、Web、GitHub、Slack 等开发场景」。

1.4 Codex 适合做什么
- 理解陌生代码库。
- 生成新功能。
- 修复 bug。
- 重构和迁移。
- 写测试。
- 代码审查。
- 文档维护。
- 自动化重复工程流程。

1.5 Codex 不适合直接做什么
- 不应在无审查情况下直接改生产环境。
- 不应接触无限制密钥、生产数据库、敏感数据。
- 不适合用模糊需求直接做大规模重构。
- 不适合完全替代代码 review、测试和发布审批。

#### 第 2 章：账号、计划与认证

2.1 哪些账号可以使用 Codex
- 官网写法：ChatGPT Plus、Pro、Business、Edu、Enterprise 等计划包含 Codex；也可通过 OpenAI API key 使用。
- 具体计划权益、额度和价格变化很快，建站时只放官方链接，不写死价格。

2.2 ChatGPT 登录与 API Key 登录
- ChatGPT 登录适合大多数用户。
- API Key 登录适合 API 计费、自动化或自定义环境。
- 企业场景应优先使用组织级登录策略和合规日志。

2.3 本地凭据与安全
- CLI 和 MCP OAuth 凭据可以放入系统 keyring。
- 不要把 API key 写进仓库、AGENTS.md、共享配置或截图。
- 教程应提供 `.env`、Secrets、keyring 的区别说明。

#### 第 3 章：第一个 Codex 任务

3.1 选择一个练习项目
- 推荐：小型前端项目、Node/Python 示例、已有测试的 demo repo。
- 不建议第一步就在生产仓库用高权限模式。

3.2 让 Codex 理解项目
- 示例 Prompt：`请先阅读这个项目，说明目录结构、运行方式、测试命令和主要模块。暂时不要修改文件。`

3.3 让 Codex 做一个小改动
- 示例任务：修复一个文案、增加一个按钮、补一个单元测试。
- 重点：让读者看到 diff、测试、回滚。

3.4 检查结果
- 看 `git diff`。
- 跑测试。
- 手动体验。
- 要求 Codex 解释改动动机。

### 第 2 部分：安装与环境准备

#### 第 4 章：安装 Codex App

4.1 macOS / Windows 桌面应用
- 官方 Quickstart 显示 Codex app 支持 macOS 和 Windows。
- App 适合 GUI 工作流、多项目切换、语音输入、本地/云端任务切换。

4.2 App 首次启动
- 登录。
- 选择项目文件夹。
- 选择 Local 工作方式。
- 发送第一条任务。

4.3 使用 Git checkpoints
- App / IDE / CLI 都可能修改代码。
- 第一次使用前建议先 `git status`，保证工作区干净或知道当前改动归属。

#### 第 5 章：安装 Codex CLI

5.1 npm 安装
```bash
npm i -g @openai/codex
codex
```

5.2 Homebrew 安装
```bash
brew install codex
```

说明：GitHub README 同时出现过 `brew install --cask codex` 的写法，最终发布时需要以当时官方文档和 README 校验。

5.3 官方安装脚本
```bash
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

Windows PowerShell：
```powershell
powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"
```

5.4 GitHub Release 二进制安装
- 适合离线环境、固定版本、CI 镜像。
- macOS arm64、macOS x86_64、Linux x86_64、Linux arm64 包名不同。

5.5 更新 CLI
```bash
npm i -g @openai/codex@latest
codex --version
```

5.6 常见安装问题
- PATH 未配置。
- Node/npm 权限问题。
- Homebrew tap/cask 差异。
- Windows 原生与 WSL2 的取舍。
- 公司网络代理。

#### 第 6 章：安装 IDE Extension

6.1 支持的编辑器
- VS Code。
- Cursor。
- Windsurf。
- VS Code Insiders。

6.2 打开 Codex 面板
- 安装扩展。
- 登录。
- 在项目中开启 Agent mode。

6.3 IDE 上下文
- 当前打开文件、选区、诊断信息可作为上下文。
- 与 CLI 相比，IDE Extension 更适合小范围编辑和即刻验证。

#### 第 7 章：使用 Codex Web / Cloud

7.1 打开 Codex Web
- 入口：`chatgpt.com/codex`。
- 连接 GitHub。
- 选择仓库和任务。

7.2 Cloud 环境
- 每个任务在独立云端环境中执行。
- 可配置安装依赖、启动脚本、环境变量、网络访问。

7.3 适合云端的任务
- 并行修复多个 issue。
- 生成 PR。
- 后台跑长任务。
- 从 GitHub issue / PR / Slack 触发任务。

7.4 不适合云端的任务
- 必须访问本机私有文件。
- 必须依赖本机登录状态或本机 GUI。
- 涉及敏感未授权数据。

### 第 3 部分：核心概念

#### 第 8 章：Agent Loop

8.1 什么是 agent loop
- 用户输入任务。
- 模型推理。
- 模型请求工具调用。
- Codex 执行工具。
- 把结果放回上下文。
- 循环直到产出最终消息或需要用户介入。

8.2 Thread、Turn、Context
- Thread：一段持续会话。
- Turn：一次用户消息到 Codex 回复之间的完整循环。
- Context：系统/开发者/用户指令、项目文件、工具结果、历史消息、AGENTS.md、Skills 等组合。

8.3 工具调用
- Shell。
- 文件读写。
- apply_patch。
- MCP 工具。
- 浏览器、Figma、文档等插件工具。

8.4 为什么上下文管理重要
- 长会话会消耗上下文窗口。
- `/compact` 用于压缩。
- AGENTS.md 和 Skills 用于把常用规则变成稳定上下文。

#### 第 9 章：本地、云端与沙箱

9.1 Local 与 Cloud 的区别
- Local：在你的机器上读写和运行命令。
- Cloud：在 OpenAI 云端环境中跑任务。

9.2 Sandbox 的意义
- 限制命令和文件访问范围。
- 降低误操作风险。
- 减少低风险操作的审批打断。

9.3 Approval 与 Sandbox 的区别
- Sandbox 是技术边界。
- Approval 是人类审批策略。
- Codex 需要越界时会触发审批。

9.4 权限画像
- `:read-only`：只读。
- `:workspace`：允许当前工作区写入。
- `:danger-full-access`：取消本地沙箱限制，仅用于明确受控环境。

#### 第 10 章：模型与推理强度

10.1 模型选择原则
- 简单小改动：低推理、更快模型。
- 大型重构、疑难 bug：高推理。
- 需要保持以官方当前模型页为准，避免写死过时模型名。

10.2 Reasoning Effort
- low：快速、明确、小范围任务。
- medium/high：复杂变更、调试、架构分析。
- extra high：长链路、深度推理、高风险任务。

10.3 Fast 模式
- 用于速度优先的场景。
- 是否可用取决于当前模型和服务。

### 第 4 部分：Codex CLI

#### 第 11 章：CLI 基础

11.1 启动交互式 TUI
```bash
codex
```

11.2 带任务启动
```bash
codex "解释这个项目结构"
```

11.3 指定目录
```bash
codex -C /path/to/project "找出测试失败原因"
```

11.4 附加图片
```bash
codex -i screenshot.png "按这个截图还原页面"
```

11.5 一次性配置覆盖
```bash
codex -c key=value
```

#### 第 12 章：常用全局参数

12.1 `--model` / `-m`
- 指定本次会话模型。

12.2 `--ask-for-approval` / `-a`
- 官方 CLI reference 中的值包括 `untrusted`、`on-request`、`never`。
- `on-failure` 已被标记为 deprecated，教程不要再推荐。

12.3 `--config` / `-c`
- 一次性覆盖 TOML 配置。

12.4 `--add-dir`
- 给主工作区之外的目录授权。

12.5 危险参数
```bash
codex --dangerously-bypass-approvals-and-sandbox
```
- 只应在外部已经隔离的环境中使用。
- 教程中要明确风险，不作为常规推荐。

#### 第 13 章：Slash Commands

13.1 控制权限
- `/permissions`：调整 Codex 能做什么。
- `/approve`：批准最近被拒的操作重试。

13.2 控制模型和速度
- `/model`：切换模型和推理强度。
- `/fast`：切换 Fast tier。

13.3 规划和执行
- `/plan`：先做计划再实现。
- `/goal`：设置长期目标。

13.4 管理上下文
- `/compact`：压缩长会话。
- `/clear`：清屏并开始新对话。
- `/mention`：把文件附加到对话。

13.5 管理会话
- `/status`：查看当前状态。
- `/agent`：切换 subagent thread。
- `/diff`：查看 Git diff。
- `/copy`：复制最后输出。
- `/exit` / `/quit`：退出。

13.6 扩展能力
- `/mcp`：查看 MCP 工具。
- `/skills`：浏览和选择技能。
- `/plugins`：浏览插件。
- `/hooks`：检查生命周期 hooks。

#### 第 14 章：会话管理

14.1 恢复会话
```bash
codex resume --last
codex resume <SESSION_ID>
```

14.2 Fork 会话
```bash
codex fork --last
codex fork <SESSION_ID>
```

14.3 历史与上下文清理
- 什么时候应该 compact。
- 什么时候应该新开会话。
- 如何写交接摘要。

#### 第 15 章：非交互模式

15.1 `codex exec`
- 用于脚本、CI、批处理。

15.2 输出文件
- 可配合 `-o <file>` 保存结果，具体参数以官方 CLI reference 为准。

15.3 自动化边界
- 非交互模式通常要配合 `--ask-for-approval never` 或受控权限配置。
- 必须让任务可重复、可验证、可失败退出。

### 第 5 部分：配置与定制

#### 第 16 章：配置文件

16.1 配置文件位置
- 用户级：`~/.codex/config.toml`
- 项目级：`.codex/config.toml`
- 系统级：`/etc/codex/config.toml`

16.2 配置优先级
从高到低：
- CLI flags 和 `--config`。
- Profile。
- 项目 `.codex/config.toml`。
- 用户 `~/.codex/config.toml`。
- 系统 `/etc/codex/config.toml`。
- 内置默认值。

16.3 trusted project
- 项目 `.codex/` 配置只有在信任项目后才加载。
- 不信任项目时，项目级 hooks、rules、config 不加载。

#### 第 17 章：AGENTS.md

17.1 AGENTS.md 的作用
- 给 Codex 持久化项目说明、规范和验收标准。
- 类似给 agent 看的 README。

17.2 发现顺序
- 全局 `~/.codex/AGENTS.override.md` 或 `~/.codex/AGENTS.md`。
- 从项目根到当前目录逐层查找 `AGENTS.override.md`、`AGENTS.md`、配置里的 fallback 文件名。
- 越靠近当前目录的规则越后出现，优先级更高。

17.3 推荐内容
- 项目结构。
- 运行方式。
- 测试、lint、build 命令。
- 编码规范。
- PR 和 review 要求。
- 禁止事项。
- Done 的定义。

17.4 `/init`
- 用于生成初始 AGENTS.md。
- 生成后必须人工修订，不能把模板当成最终规范。

17.5 AGENTS.md 模板
```markdown
# 项目说明

## 目录结构

## 常用命令
- 安装依赖：
- 启动开发：
- 运行测试：
- 运行 lint：

## 工程规范

## 安全边界

## 完成标准
```

#### 第 18 章：Permissions 与 Sandbox

18.1 旧 sandbox 配置与新 permission profiles
- 官方说明：permission profiles 仍处于 beta，不能和旧 sandbox 设置混用。

18.2 内置 profile
- `:read-only`
- `:workspace`
- `:danger-full-access`

18.3 自定义 profile
- 文件系统规则。
- 网络规则。
- 默认 profile。

18.4 最小权限实践
- 默认从只读开始。
- 对普通开发使用 workspace。
- 对危险任务使用隔离环境。

#### 第 19 章：Rules

19.1 Rules 的作用
- 控制哪些命令可以在沙箱外运行。
- 可 allow、prompt、deny。

19.2 rules 文件位置
- `~/.codex/rules/default.rules`
- `<repo>/.codex/rules/*.rules`

19.3 prefix_rule
- 匹配命令前缀。
- 可写 justification。
- 可写 match / not_match 作为规则测试样例。

19.4 常见规则
- 允许 `git status`、`git diff` 等只读命令。
- prompt `gh pr view`。
- deny `rm -rf`、生产数据库命令、未授权上传命令。

#### 第 20 章：Hooks

20.1 Hooks 的作用
- 在 Codex 生命周期里运行确定性脚本。
- 可做日志、合规扫描、提示词检查、停止时验证。

20.2 Hooks 位置
- `~/.codex/hooks.json`
- `~/.codex/config.toml`
- `<repo>/.codex/hooks.json`
- `<repo>/.codex/config.toml`

20.3 常见事件
- `SessionStart`
- `UserPromptSubmit`
- `PreToolUse`
- `PostToolUse`
- `PreCompact`
- `PostCompact`
- `Stop`
- `SubagentStart`
- `SubagentStop`

20.4 信任与治理
- 非 managed hooks 需要被审查和信任后运行。
- 企业可通过 requirements 管理。

### 第 6 部分：MCP、Skills 与 Plugins

#### 第 21 章：MCP

21.1 MCP 是什么
- Model Context Protocol 用于连接模型、工具和上下文。
- Codex CLI 与 IDE Extension 都支持 MCP。

21.2 支持的 MCP 类型
- STDIO。
- Streamable HTTP。
- Bearer token。
- OAuth。

21.3 配置位置
- `~/.codex/config.toml`
- 受信任项目的 `.codex/config.toml`

21.4 CLI 管理
```bash
codex mcp
codex mcp login <server-name>
```

21.5 常用 MCP 场景
- 官方文档。
- 浏览器自动化。
- Figma。
- 数据库只读查询。
- 项目管理工具。
- 内部知识库。

21.6 MCP 安全
- MCP 工具不一定被 Codex 本地 sandbox 约束。
- 每个 MCP server 必须自己提供权限控制。
- 只给必要工具、必要 scope、必要环境变量。

#### 第 22 章：Skills

22.1 Skills 是什么
- 可复用工作流。
- 包含 `SKILL.md`、脚本、参考资料、模板资源。
- Codex 用渐进式披露管理上下文。

22.2 Skill 目录结构
```text
my-skill/
  SKILL.md
  scripts/
  references/
  assets/
```

22.3 SKILL.md 元数据
```markdown
---
name: example-skill
description: Use when ...
---
```

22.4 什么时候该写 skill
- 重复任务。
- 有固定流程。
- 需要脚本或模板。
- 团队成员需要复用。

22.5 什么时候不该写 skill
- 一次性任务。
- 普通代码问题。
- 还没有稳定流程的探索。

#### 第 23 章：Plugins

23.1 Plugin 与 Skill 的关系
- Skill 是工作流格式。
- Plugin 是可安装分发单元。

23.2 插件适用场景
- 团队内部工具包。
- 一组 MCP + Skills + hooks 的组合。
- 跨项目复用。

23.3 插件治理
- 版本固定。
- 来源可信。
- 权限说明。
- 更新审查。

### 第 7 部分：实战工作流

#### 第 24 章：理解陌生代码库

24.1 推荐 Prompt
```text
请先只读分析这个项目。输出：
1. 技术栈
2. 目录结构
3. 启动方式
4. 测试方式
5. 核心模块
6. 风险点
不要修改文件。
```

24.2 让 Codex 画调用链
- 从路由到 service。
- 从 UI 到 API。
- 从测试失败到根因。

24.3 产出架构文档
- 适合让 Codex 更新 `docs/architecture.md`。

#### 第 25 章：实现新功能

25.1 需求拆解
- Goal。
- Context。
- Constraints。
- Done when。

25.2 Plan first
- 复杂任务先 `/plan`。
- 先确认方案再实现。

25.3 小步提交
- 一个任务一个 diff。
- 先测试再扩展。

#### 第 26 章：修 Bug

26.1 给 Codex 错误上下文
- 错误日志。
- 复现步骤。
- 相关文件。
- 期望行为。

26.2 最小修复
- 要求 Codex 做最小、高置信修复。
- 不允许顺手重构。

26.3 验证修复
- 重跑失败测试。
- 增加回归测试。

#### 第 27 章：写测试

27.1 让 Codex 先找测试框架
- Jest、Vitest、Pytest、Go test、JUnit 等。

27.2 增加单元测试
- 聚焦纯函数、边界条件。

27.3 增加集成测试
- API、数据库、UI。

27.4 修测试而不是删测试
- 明确禁止为了通过测试而降低断言质量。

#### 第 28 章：代码审查

28.1 本地 review
- 让 Codex 看 `git diff`。

28.2 GitHub PR review
- Codex 可连接 GitHub。
- 可通过 GitHub 触发任务和建议修复。

28.3 审查清单
- 行为回归。
- 安全。
- 性能。
- 错误处理。
- 测试缺口。

#### 第 29 章：重构与迁移

29.1 重构原则
- 不改变行为。
- 先加测试。
- 分阶段。

29.2 依赖升级
- 先读 changelog。
- 先跑现有测试。
- 改完给迁移说明。

29.3 大规模替换
- 使用脚本或 codemod。
- Codex 负责生成和验证，人工负责边界审查。

#### 第 30 章：前端 UI 开发

30.1 从截图生成 UI
- 使用图片输入。
- 让 Codex 做 responsive 检查。

30.2 视觉验收
- 开发服务器。
- 浏览器截图。
- 多 viewport。

30.3 常见提示词
- 指定设计系统。
- 指定组件库。
- 指定不要做营销页，要做真实可用界面。

### 第 8 部分：云端、集成与自动化

#### 第 31 章：GitHub 集成

31.1 连接仓库
- 用 Codex Web 连接 GitHub。

31.2 从 issue 生成 PR
- 选择 issue。
- 指定验收条件。
- 让 Codex 提交分支和 PR。

31.3 PR 审查
- 自动 review。
- `@codex` 触发。

#### 第 32 章：Slack / Linear 等集成

32.1 适合的场景
- 把 Slack 线程变成任务。
- 把 Linear issue 转成实现计划。

32.2 输入质量
- 任务来源越清晰，Codex 越能独立完成。

#### 第 33 章：CI/CD 与 GitHub Action

33.1 非交互任务
- `codex exec`。
- 固定权限。
- 固定输出。

33.2 Secrets
- 不把密钥写入 prompt。
- 使用 CI secret。

33.3 失败处理
- 失败时输出日志和建议。
- 不自动重试危险操作。

#### 第 34 章：App Server 与 Codex SDK

34.1 什么时候需要 SDK
- 把 Codex 能力嵌入内部平台。
- 统一任务入口。
- 记录审批与结果。

34.2 App Server
- 面向更深度的自动化和集成。
- 内容需以官方文档为准，后续建站时单独补详细示例。

### 第 9 部分：安全、治理与企业落地

#### 第 35 章：个人使用安全

35.1 默认从低权限开始
- 先读再写。
- 先小任务再大任务。

35.2 敏感文件
- `.env`
- 私钥。
- 生产配置。
- 客户数据。

35.3 危险命令
- 删除。
- 上传。
- 修改权限。
- 生产数据库。

#### 第 36 章：企业治理

36.1 Managed configuration
- 统一配置。
- 不允许用户绕过关键安全策略。

36.2 网络策略
- 限制外连域名。
- 允许本地服务。
- 禁止粘贴站、未知上传端点。

36.3 审计日志
- 用户 prompt。
- 工具调用。
- 审批决策。
- MCP 使用。
- 网络允许/拒绝。

36.4 组织级上线路径
- 先试点。
- 选低风险仓库。
- 定义权限基线。
- 建 AGENTS.md 模板。
- 配置日志和审计。
- 扩展到核心团队。

### 第 10 部分：速查、FAQ 与附录

#### 第 37 章：命令速查

CLI 基础：
```bash
codex
codex "任务"
codex -C /path/to/repo "任务"
codex resume --last
codex fork --last
codex --version
codex --help
```

安装更新：
```bash
npm i -g @openai/codex
npm i -g @openai/codex@latest
brew install codex
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

权限与配置：
```bash
codex --ask-for-approval on-request
codex --ask-for-approval never
codex --add-dir ../shared
codex -c key=value
```

MCP：
```bash
codex mcp
codex mcp login <server-name>
codex mcp-server
```

#### 第 38 章：Slash Command 速查

常用：
- `/plan`
- `/model`
- `/fast`
- `/permissions`
- `/status`
- `/diff`
- `/compact`
- `/mention`
- `/mcp`
- `/skills`
- `/plugins`
- `/hooks`
- `/copy`
- `/exit`

#### 第 39 章：FAQ

39.1 Codex 会不会上传我的全部代码？
- 本地模式会把任务所需上下文发送给模型；具体内容取决于工具读取和上下文构建。敏感仓库应使用最小权限、审查上下文、企业合规设置。

39.2 CLI 和 App 用哪个？
- 终端重度用户用 CLI。
- 需要 GUI、多项目、语音、远程控制用 App。
- 编辑器中小步协作用 IDE Extension。
- 异步并行任务用 Web / Cloud。

39.3 为什么 Codex 没按我的规则做？
- AGENTS.md 位置不对。
- 项目未被 trust。
- 规则写得不具体。
- 上下文被压缩后信息丢失。
- 任务提示和项目规则冲突。

39.4 `danger-full-access` 能不能日常用？
- 不建议。除非在隔离容器、临时 VM、可回滚环境中。

39.5 如何让 Codex 更稳定？
- 写 AGENTS.md。
- 给清晰上下文。
- 复杂任务先 plan。
- 要求测试和 diff。
- 小步执行。
- 用 rules/hooks 固化边界。

#### 第 40 章：术语表

- Agent：能通过工具和环境完成任务的智能体。
- Agent loop：模型推理、工具调用、观察结果、继续推理的循环。
- TUI：终端用户界面。
- Sandbox：限制命令和文件访问的执行边界。
- Approval：越界或敏感操作前的人类审批。
- AGENTS.md：Codex 自动读取的项目指令文件。
- MCP：Model Context Protocol，连接外部工具和上下文的协议。
- Skill：可复用的任务工作流包。
- Plugin：可安装分发的技能、工具、配置集合。
- Hook：Codex 生命周期里的确定性脚本。
- Rule：控制命令是否允许、提示或拒绝的规则。
- Worktree：Git 工作树，用于隔离多任务改动。

## 4. 首页文案草案

### Hero

标题：

Codex 桌面端从入门到工程化实践

副标题：

OpenAI 官方 coding agent 的桌面端中文教程。重点讲 Codex App 的项目管理、线程模式、Worktree、Computer Use、Chrome 插件、插件目录、自动化、Git 工作流与安全权限；CLI、IDE、Web 作为补充。

按钮：

- 开始学习
- 浏览目录
- 官方文档
- GitHub

统计项：

- 10 大部分
- 40 章
- 约 120+ 小节
- 桌面端 App 主线，CLI / IDE / Web 补充

### 特性卡片

1. 桌面端主控台
- 用 Codex App 管理项目、线程、Git diff、终端、设置和插件。

2. 真正执行
- 读取、修改、运行代码，直到任务完成或需要你审批。

3. 插件可扩展
- 通过 Plugins、Skills、Apps、MCP 连接 GitHub、Slack、Google Drive、Chrome、Computer Use 等能力。

4. 权限可控
- Sandbox、Approval、Rules、Hooks、Managed config。

5. 适合团队
- 统一规范、审计日志、自动 review、云端任务。

6. 可自动化
- exec、SDK、App Server、GitHub Action、MCP Server。

## 5. 需要重点校正的内容

以下内容变化快，正式建站前必须重新核对官方文档：

- 当前支持的 ChatGPT 计划和额度。
- 当前推荐模型、模型名、reasoning effort 可选项。
- Homebrew 安装命令到底使用 `brew install codex` 还是 `brew install --cask codex`。
- CLI flags 的最新名称，尤其是 approval/sandbox/permissions 相关参数。
- Windows 原生支持状态。
- App / IDE / Web 的功能成熟度。
- GitHub / Slack / Linear 集成入口。
- Hooks、Rules、Permissions 是否仍标记 beta / experimental。

## 6. 后续建站数据结构建议

可复用 `claudecode-tutorial` 的静态结构：

```text
codex-tutorial/
  index.html
  tutorial/
    1-1.1-Codex是什么.html
    2-1.2-Codex的四种使用形态.html
  assets/
    shared.css
    sidebar.js
    images/
  data/
    toc.json
    sources.json
    crawled/
  scripts/
    build.mjs
    build-toc.mjs
    test.mjs
```

建议新增：

```text
content/
  codex-tutorial-content-plan.md
  sources.md
  chapters/
    01-intro.md
    02-install.md
```

这样先写 Markdown，再构建 HTML，比直接写 HTML 更好维护。

## 7. 第一批最值得先写的页面

优先做 21 个核心页面，全部围绕桌面端体验展开：

1. Codex 桌面端是什么
2. Codex、Claude Code、Cursor、Copilot 的相同点和区别
3. 下载、安装和登录 Codex App
4. App 界面总览：项目、线程、diff、终端、设置
5. 选择项目与发送第一条任务
6. Codex 接入国产模型（codex-switch / DeepSeek 示例）
7. Local / Worktree / Cloud 三种线程模式
8. 多项目与多线程并行工作
9. Codex App 设置详解
10. App 快捷键与命令菜单
11. App Slash Commands：`/plan`、`/goal`、`/review`、`/status`
12. Git diff、分支、提交信息和 PR 描述
13. Worktree 隔离开发流程
14. 内置浏览器与本地 Web 预览
15. Chrome 插件：登录态网页和网站权限
16. Computer Use：控制桌面应用
17. 插件目录：浏览、安装、启用、卸载
18. 插件中文速查表
19. AGENTS.md：让桌面端理解项目规范
20. Skills / MCP：桌面端复用工作流和连接外部工具
21. 桌面端安全与最小权限实践

先完成这 21 页，站点就具备核心价值；再逐步扩展到完整 40 章。
