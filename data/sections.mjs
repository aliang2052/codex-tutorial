export const sections = [
  {
    "title": "基础入门",
    "pages": [
      {
        "id": "codex-intro",
        "title": "Codex 是什么",
        "lead": "Codex 是 OpenAI 面向软件开发的 coding agent。它会读取文件、执行命令、修改代码，并通过多轮工具调用完成任务。",
        "body": "\n<div class=\"doc-hero\">\n  <div>\n    <div class=\"eyebrow\">从这里开始</div>\n    <h1>Codex 是什么</h1>\n    <p class=\"lead\">Codex 是 OpenAI 把模型、工具、环境和审批策略组合起来，让 AI 直接完成软件开发任务的产品。本教程把桌面端 App 作为主线。</p>\n    <div class=\"hero-actions\">\n      <a class=\"primary-link\" href=\"#install-login\"><i data-lucide=\"download\"></i>开始安装</a>\n      <a class=\"secondary-link\" href=\"https://developers.openai.com/codex\" target=\"_blank\" rel=\"noopener\"><i data-lucide=\"external-link\"></i>官方文档</a>\n    </div>\n  </div>\n  <div class=\"desktop-map\" aria-label=\"Codex 桌面端界面示意\">\n    <div class=\"desktop-titlebar\"><span class=\"desktop-dot\"></span><span class=\"desktop-dot\"></span><span class=\"desktop-dot\"></span></div>\n    <div class=\"desktop-body\">\n      <div class=\"desktop-rail\">\n        <div class=\"rail-item active\"></div>\n        <div class=\"rail-item\"></div>\n        <div class=\"rail-item\"></div>\n        <div class=\"rail-item\"></div>\n      </div>\n      <div class=\"desktop-thread\">\n        <div class=\"thread-chip-row\"><span class=\"thread-chip\">Local</span><span class=\"thread-chip\">Worktree</span><span class=\"thread-chip\">Cloud</span></div>\n        <div class=\"thread-line\"></div>\n        <div class=\"thread-line short\"></div>\n        <div class=\"diff-block\">\n          <div class=\"diff-row\"><div class=\"diff-sign\">1</div><div class=\"diff-code\">app/pages/dashboard.tsx</div></div>\n          <div class=\"diff-row add\"><div class=\"diff-sign\">+</div><div class=\"diff-code\">renderCodexDesktopGuide()</div></div>\n          <div class=\"diff-row add\"><div class=\"diff-sign\">+</div><div class=\"diff-code\">runVisualCheck()</div></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<section class=\"doc-section\">\n  <h2>Codex 不是什么</h2>\n  <p>把 Codex 当成「会自动做事的同事」比当成「智能补全」更接近事实。它和以下工具有本质区别：</p>\n  <div class=\"section-grid\">\n    <div class=\"info-card\"><h3>不是补全工具</h3><p>它不只在光标处给建议，而是会自己拆解任务、运行测试、回滚错误。</p></div>\n    <div class=\"info-card\"><h3>不是聊天机器人</h3><p>它会真实读写文件、执行命令、调用浏览器，而不是只输出文字。</p></div>\n    <div class=\"info-card\"><h3>不是远程黑盒</h3><p>桌面端默认在本机执行，你能看到每一次 diff、命令和审批节点。</p></div>\n  </div>\n</section>\n<section class=\"doc-section\">\n  <h2>Codex 能做的事</h2>\n  <ul>\n    <li>理解陌生代码库，输出架构与启动方式。</li>\n    <li>实现一个完整功能并补测试。</li>\n    <li>修复 Bug，给出最小修复和回归测试。</li>\n    <li>跑前端开发服务器并截图自检。</li>\n    <li>把 GitHub Issue 自动变成 PR。</li>\n    <li>把 Slack 讨论 / Linear 工单转成实现计划。</li>\n    <li>定期跑代码审查、文档维护、依赖升级。</li>\n  </ul>\n</section>\n<section class=\"doc-section\">\n  <h2>本站学习路径</h2>\n  <ol>\n    <li>先建立基础概念：本章。</li>\n    <li>桌面端入门：安装、界面、线程、设置。</li>\n    <li>工程工作流：Git diff、Worktree、浏览器、Computer Use。</li>\n    <li>CLI、IDE、Cloud：补充使用场景。</li>\n    <li>核心概念：Agent Loop、Sandbox、Approval、模型。</li>\n    <li>配置与扩展：AGENTS.md、Skills、MCP、插件、Hooks。</li>\n    <li>实战与集成：常见工作流、GitHub、CI、企业治理。</li>\n    <li>最后查速查表与 FAQ。</li>\n  </ol>\n</section>"
      },
      {
        "id": "codex-forms",
        "title": "Codex 的四种使用形态",
        "lead": "App、IDE、CLI、Web 是同一个 agent 在不同场景的入口。先看清差异，再决定首选形态。",
        "body": "\n<section class=\"doc-section\"><h1>Codex 的四种使用形态</h1><p class=\"lead\">不要把 Codex 当成单一工具。它是一个 agent，可以通过桌面 App、IDE 扩展、CLI 和 Web/Cloud 进入。</p></section>\n<section class=\"doc-section\">\n  <h2>四种形态的差异</h2>\n  <div class=\"section-grid\">\n    <div class=\"info-card\"><h3>桌面 App</h3><p>多项目、多线程、Local/Worktree/Cloud 切换、内置浏览器和 Computer Use。日常主力。</p></div>\n    <div class=\"info-card\"><h3>IDE 扩展</h3><p>在 VS Code、Cursor、Windsurf 内使用，更适合小范围编辑与即时验证。</p></div>\n    <div class=\"info-card\"><h3>CLI</h3><p>终端 TUI 与自动化入口，适合脚本、CI、远程开发机、SSH。</p></div>\n    <div class=\"info-card\"><h3>Web / Cloud</h3><p>云端环境异步执行任务，可连接 GitHub 直接产 PR，适合并行长任务。</p></div>\n  </div>\n</section>\n<section class=\"doc-section\">\n  <h2>怎么选</h2>\n  <ul>\n    <li>日常开发 → 桌面 App。</li>\n    <li>盯着具体文件改 → IDE 扩展。</li>\n    <li>SSH 上服务器 / 自动化 / CI → CLI。</li>\n    <li>批量修 issue / 后台跑长任务 → Web。</li>\n  </ul>\n  <div class=\"note\"><strong>建议：</strong>先用桌面 App 完成 10 个左右的真实任务，再决定要不要切换到 CLI 或 Web。</div>\n</section>"
      },
      {
        "id": "codex-vs",
        "title": "Codex、Claude Code、Cursor、Copilot 的异同",
        "lead": "Codex、Claude Code、Cursor、Copilot、Windsurf、Gemini CLI 都能辅助写代码，但入口、执行方式、隔离能力和团队治理完全不同。",
        "body": "\n<section class=\"doc-section\"><h1>Codex、Claude Code、Cursor、Copilot 的异同</h1><p class=\"lead\">同样是 AI 编程，定位完全不同。Codex 桌面端的重点是把多个 coding agents 作为一个可监督的工作台来管理；Claude Code 更偏终端 agent；Cursor / Windsurf 更偏 AI IDE；GitHub Copilot 更偏 IDE 内体验和 GitHub 工作流。</p></section>\n<section class=\"doc-section\">\n  <h2>共同点</h2>\n  <div class=\"section-grid\">\n    <div class=\"info-card\"><h3>都能理解代码库</h3><p>它们都能读取项目上下文，回答架构、调用链、Bug 原因和改动影响。</p></div>\n    <div class=\"info-card\"><h3>都能跨文件改代码</h3><p>现代 AI 编程工具已经不只是补全单行代码，而是能修改多个文件并生成 diff。</p></div>\n    <div class=\"info-card\"><h3>都需要人审查</h3><p>无论哪个工具，最终都要看 diff、跑测试、做 code review，不能跳过工程验证。</p></div>\n  </div>\n</section>\n<section class=\"doc-section\">\n  <h2>核心差异</h2>\n  <div class=\"compare-table-wrap\">\n    <table class=\"compare-table\">\n      <thead><tr><th>工具</th><th>主入口</th><th>最强场景</th><th>关键差异</th></tr></thead>\n      <tbody>\n        <tr><td><strong>Codex</strong></td><td>桌面 App、CLI、IDE、Web / Cloud</td><td>多线程 agent 工作台、Worktree、Cloud PR、插件、Computer Use、Chrome</td><td>适合把任务分派给多个 agent，并监督 diff、命令、权限和结果。</td></tr>\n        <tr><td><strong>Claude Code</strong></td><td>终端、IDE、Web / App</td><td>终端内 agentic coding、MCP、子代理、长上下文代码理解</td><td>和 Codex 最像，但 Claude Code 的主心智仍偏 CLI-first；配置、Skills、Hooks 和权限体系不同。</td></tr>\n        <tr><td><strong>Cursor</strong></td><td>AI code editor</td><td>编辑器内阅读、生成、重构、Agent 改多文件</td><td>主战场是 IDE。适合边看文件边写代码；桌面 agent 调度和云端任务不是它的核心心智。</td></tr>\n        <tr><td><strong>GitHub Copilot</strong></td><td>IDE、GitHub、GitHub Actions</td><td>补全、Chat、Agent mode、Issue 到 PR</td><td>和 GitHub 生态绑定最深。Coding agent 偏 GitHub issue/PR 异步执行。</td></tr>\n        <tr><td><strong>Windsurf</strong></td><td>AI IDE</td><td>IDE 内 agent、上下文编辑、项目级协作</td><td>和 Cursor 类似，重点是把 AI 深度嵌进编辑器。</td></tr>\n        <tr><td><strong>Gemini CLI</strong></td><td>终端 CLI</td><td>命令行 agent、Google 模型生态、脚本化任务</td><td>更偏终端工具和开放命令行工作流，不是桌面端多 agent 工作台。</td></tr>\n        <tr><td><strong>ChatGPT</strong></td><td>聊天界面</td><td>解释、设计方案、代码片段、学习和问答</td><td>默认不是项目工作台；适合讨论问题，不适合直接管理本地代码改动。</td></tr>\n      </tbody>\n    </table>\n  </div>\n</section>\n<section class=\"doc-section\">\n  <h2>怎么选</h2>\n  <div class=\"section-grid\">\n    <div class=\"info-card\"><h3>你想用桌面端管多个任务</h3><p>选 Codex App。它更像 agent command center，适合多项目、多线程、Worktree、Cloud 和插件协作。</p></div>\n    <div class=\"info-card\"><h3>你每天都在终端里工作</h3><p>Codex CLI 和 Claude Code 都合适。Claude Code 的社区教程和 CLI 工作流更成熟，Codex CLI 和桌面端联动更自然。</p></div>\n    <div class=\"info-card\"><h3>你主要在编辑器里写代码</h3><p>Cursor、Windsurf、Copilot 更顺手。Codex 可以作为长任务、云端 PR 和插件自动化补充。</p></div>\n    <div class=\"info-card\"><h3>你所有流程都在 GitHub</h3><p>Copilot coding agent 很自然。Codex 也能做 GitHub 任务，但它的优势是跨 GitHub、桌面、浏览器和外部工具。</p></div>\n    <div class=\"info-card\"><h3>你要团队治理</h3><p>优先看权限、审计、Rules、Hooks、Managed config、插件白名单，而不是只看模型聪不聪明。</p></div>\n    <div class=\"info-card\"><h3>你只是问问题</h3><p>ChatGPT 足够。不要为了简单问答打开完整 agent 权限。</p></div>\n  </div>\n</section>\n<section class=\"doc-section\">\n  <h2>Codex 与 Claude Code 的重点对照</h2>\n  <ul>\n    <li>相同点：都属于 agentic coding 工具，都能读写文件、执行命令、接 MCP、做多步骤任务。</li>\n    <li>入口差异：Codex 当前教程主线是桌面端 App；Claude Code 传统强项是终端 CLI。</li>\n    <li>组织方式：Codex App 更强调多线程、多 agent、Worktree / Cloud 任务调度；Claude Code 更强调在终端里和当前代码库持续协作。</li>\n    <li>扩展差异：Codex 桌面端有插件目录、Computer Use、Chrome 等入口；Claude Code 有自己的 Skills、MCP、Hooks、Subagents 和企业配置体系。</li>\n    <li>学习迁移：会 Claude Code 的人学 Codex 很快，但不能照搬命令、配置文件和权限模式。</li>\n  </ul>\n</section>\n<section class=\"doc-section\">\n  <h2>资料来源</h2>\n  <ul>\n    <li><a href=\"https://openai.com/index/introducing-the-codex-app/\" target=\"_blank\" rel=\"noopener\">OpenAI：Introducing the Codex app</a></li>\n    <li><a href=\"https://developers.openai.com/codex\" target=\"_blank\" rel=\"noopener\">OpenAI Codex developer docs</a></li>\n    <li><a href=\"https://docs.anthropic.com/en/docs/claude-code/overview\" target=\"_blank\" rel=\"noopener\">Anthropic：Claude Code overview</a></li>\n    <li><a href=\"https://docs.github.com/en/copilot/concepts/about-copilot-coding-agent\" target=\"_blank\" rel=\"noopener\">GitHub Docs：About Copilot coding agent</a></li>\n    <li><a href=\"https://docs.cursor.com/\" target=\"_blank\" rel=\"noopener\">Cursor Docs</a></li>\n  </ul>\n</section>"
      },
      {
        "id": "codex-when",
        "title": "Codex 适合做什么，不适合做什么",
        "lead": "Codex 不是越用越对。明确边界后效率提升才稳定。",
        "body": "\n<section class=\"doc-section\"><h1>Codex 适合做什么，不适合做什么</h1><p class=\"lead\">把 Codex 当工具，不要当神。第一周内最容易踩的坑就是「用模糊需求做大事」。</p></section>\n<section class=\"doc-section\"><h2>适合直接交给 Codex</h2><ul><li>理解一个陌生项目并产出技术摘要。</li><li>修一个有清晰复现的 Bug。</li><li>给已有代码补单元测试。</li><li>重构一个明确的模块。</li><li>升级依赖并跑测试。</li><li>写或更新文档、README、CHANGELOG。</li><li>从 GitHub Issue 自动生成 PR。</li></ul></section>\n<section class=\"doc-section\"><h2>必须谨慎</h2><ul><li>生产数据库改动。</li><li>外发邮件、Slack 通知、客户消息。</li><li>支付、订阅、权限变更。</li><li>不可回滚的 GitHub 操作（force push / 强删分支）。</li><li>跨账号 / 跨租户的数据迁移。</li></ul><div class=\"warning\"><strong>边界：</strong>这类操作要么放在沙箱里，要么明确写 Approval，要么干脆不让 Codex 做。</div></section>\n<section class=\"doc-section\"><h2>不适合直接做</h2><ul><li>用一句话「优化整个项目」做大重构。</li><li>跨多人协作、需要业务判断的长决策。</li><li>替代代码 Review、测试、发布审批。</li><li>替代产品经理决定优先级。</li></ul></section>"
      },
      {
        "id": "account-auth",
        "title": "账号、计划与认证",
        "lead": "Codex 可以用 ChatGPT 账号登录，也可以用 API Key。企业场景应优先组织级身份。",
        "body": "\n<section class=\"doc-section\"><h1>账号、计划与认证</h1><p class=\"lead\">不同账号类型决定能用哪些功能、跑多少任务、有没有审计日志。开始之前先确认账号。</p></section>\n<section class=\"doc-section\">\n  <h2>支持的账号类型</h2>\n  <div class=\"section-grid\">\n    <div class=\"info-card\"><h3>ChatGPT 个人</h3><p>Plus、Pro 计划通常包含 Codex 的使用额度。最容易上手。</p></div>\n    <div class=\"info-card\"><h3>ChatGPT Team / Edu / Enterprise</h3><p>组织级账号，可统一管理用户、审计、模型偏好。</p></div>\n    <div class=\"info-card\"><h3>OpenAI API Key</h3><p>适合自动化、CI、自建平台。按 API 计费。</p></div>\n  </div>\n  <div class=\"note\"><strong>提醒：</strong>具体计划权益、额度和价格会变化。本教程不写死价格，请以官方计费页为准。</div>\n</section>\n<section class=\"doc-section\"><h2>本地凭据怎么放</h2><ul><li>CLI 与桌面 App 的会话凭据会写入系统 keyring。</li><li>MCP OAuth 凭据也走系统 keyring。</li><li>不要把 API key 写进仓库、AGENTS.md、Hooks 脚本或公开截图。</li><li>团队场景使用环境变量或 Secret 管理工具。</li></ul></section>\n<section class=\"doc-section\"><h2>切换账号</h2><p>桌面 App 在设置里切换账号；CLI 使用 <code>codex login</code> / <code>codex logout</code>；切换组织通常需要重新登录。</p></section>"
      },
      {
        "id": "first-task",
        "title": "选择项目与第一条任务",
        "lead": "第一条任务要足够小、可验证、可回滚。不要一开始就让 Codex 重构整个项目。",
        "body": "\n<section class=\"doc-section\"><h1>选择项目与第一条任务</h1><p class=\"lead\">好的第一条任务不是「帮我优化项目」，而是「在明确文件附近做一个小改动并跑对应测试」。</p></section>\n<section class=\"doc-section\"><h2>练习项目标准</h2><ul><li>能用 Git 管理，有清晰 diff。</li><li>能本地启动，最好有测试。</li><li>没有敏感数据和生产密钥。</li><li>规模适中，Codex 能在几分钟内读懂。</li></ul></section>\n<section class=\"doc-section\"><h2>推荐第一条任务</h2><div class=\"code-block\"><pre><code>请在保持现有风格的前提下，把设置页里的\"保存\"按钮文案改成\"保存设置\"。改完后运行相关测试或说明为什么没有可运行测试。只改必要文件。</code></pre></div><p>这类任务边界明确，适合观察 Codex 的文件定位、修改、验证和最终说明质量。</p></section>\n<section class=\"doc-section\"><h2>第二条任务</h2><div class=\"code-block\"><pre><code>请阅读这个项目并输出：技术栈、目录结构、启动方式、测试命令、核心模块、风险点。先不要修改文件。</code></pre></div><p>让 Codex 自己写一份「项目说明书」，对你判断它的理解力非常有用。</p></section>"
      },
      {
        "id": "codex-switch-cn-models",
        "title": "Codex 接入国产模型",
        "lead": "Codex 官方不建议通过直接改配置文件来切换第三方模型。这里整理 codex-switch 的接入流程，用 DeepSeek 作为示例。",
        "body": "\n<section class=\"doc-section\"><h1>Codex 接入国产模型</h1><p class=\"lead\">这一节来自飞书文档《codex接入国产模型》的整理稿。核心思路是使用 <code>codex-switch</code> 工具在启动 Codex 前切换模型服务，例如切到 DeepSeek，再在需要时一键切回官方 GPT 模型。</p></section>\n<section class=\"doc-section\"><h2>为什么需要 codex-switch</h2><p>Codex 和 Claude Code 的模型切换方式不完全一样。Claude Code 常见做法是改配置或走代理，而这篇流程强调：Codex 不适合直接通过修改配置文件来切换模型。为了降低操作门槛，可以用专门的 <code>codex-switch</code> 工具完成模型服务切换。</p><div class=\"warning\"><strong>风险说明：</strong><code>codex-switch</code> 是第三方工具，不是 OpenAI 官方组件。下载、授权和填写 API Key 前，要确认来源、版本和权限边界。不要把生产密钥或高权限 Key 填入不可信工具。</div></section>\n<section class=\"doc-section\"><h2>准备工作</h2><ul><li>已经安装并能正常打开 Codex。</li><li>准备一个要接入的国产模型平台账号，例如 DeepSeek。</li><li>确认你能创建 API Key，并知道该平台的计费、额度和模型名称。</li><li>下载 <a href=\"https://github.com/jujishou/codex-switch/releases\" target=\"_blank\" rel=\"noopener\">codex-switch Releases</a> 中与你电脑系统匹配的安装包。</li></ul></section>\n<section class=\"doc-section\"><h2>以 DeepSeek 为例的接入步骤</h2><ol><li>打开 <code>codex-switch</code>，在模型列表中选择 DeepSeek。</li><li>点击工具里的 DeepSeek 官网入口，进入 DeepSeek 开放平台。</li><li>登录 DeepSeek 后，进入 <code>API keys</code> 页面。</li><li>创建新的 API Key。</li><li>复制 API Key，粘贴到 <code>codex-switch</code> 对应输入框。</li><li>点击蓝色切换按钮，完成模型切换。</li><li>重启 Codex，让新的模型配置生效。</li><li>在 Codex 中发送一条简单消息，确认当前模型已经变为 DeepSeek 并能正常回复。</li></ol><div class=\"figure-grid\"><figure class=\"doc-figure\"><img src=\"../assets/images/codex-switch/step-02.png\" alt=\"DeepSeek 开放平台 API keys 页面\"><figcaption>进入 DeepSeek 开放平台，打开 API keys 页面。</figcaption></figure><figure class=\"doc-figure\"><img src=\"../assets/images/codex-switch/step-03.png\" alt=\"创建 DeepSeek API Key\"><figcaption>创建新的 API Key。</figcaption></figure><figure class=\"doc-figure\"><img src=\"../assets/images/codex-switch/step-04.png\" alt=\"把 DeepSeek API Key 填入 codex-switch\"><figcaption>把拿到的 Key 填入 codex-switch。</figcaption></figure><figure class=\"doc-figure\"><img src=\"../assets/images/codex-switch/step-05.png\" alt=\"切换 DeepSeek 后在 Codex 中测试\"><figcaption>重启 Codex 后发送消息测试。</figcaption></figure></div></section>\n<section class=\"doc-section\"><h2>切回官方 GPT 模型</h2><p>如果要恢复 OpenAI 官方模型，在 <code>codex-switch</code> 中点击红色按钮即可切回。切换后同样需要重启 Codex，否则当前进程可能仍在使用旧配置。</p><div class=\"note\"><strong>记住：</strong>每次切换模型后都重启 Codex，这是这篇流程里最容易漏掉的一步。</div></section>\n<section class=\"doc-section\"><h2>支持自定义模型</h2><p>原文提到，<code>codex-switch</code> 当前支持主流国产模型，也可以配置自定义模型。自定义时要准备模型服务的 API Base、API Key、模型名和必要的兼容参数。正式录教程时，可以补一张「模型申请链接表」，把 DeepSeek、通义、智谱、月之暗面、豆包等平台的申请入口统一列出。</p></section>\n<section class=\"doc-section\"><h2>来源</h2><ul><li>飞书文档：<a href=\"https://xcnmq99c29tx.feishu.cn/docx/Qw4FdX9zbomOn0xvzOHcmC0MnzL?from=from_copylink\" target=\"_blank\" rel=\"noopener\">codex接入国产模型</a></li><li>工具下载：<a href=\"https://github.com/jujishou/codex-switch/releases\" target=\"_blank\" rel=\"noopener\">codex-switch Releases</a></li></ul></section>"
      }
    ]
  },
  {
    "title": "桌面端入门",
    "pages": [
      {
        "id": "desktop-overview",
        "title": "Codex 桌面端是什么",
        "lead": "Codex App 是 OpenAI 面向软件开发的桌面端 coding agent。它把项目、线程、Git diff、终端、浏览器、插件和云端任务放在同一个工作台里。",
        "body": "\n<section class=\"doc-section\"><h1>Codex 桌面端总览</h1><p class=\"lead\">桌面端的核心价值是让 agent 直接在你的项目环境里完成任务，并把关键节点放回你能审查的界面里。</p></section>\n<section class=\"doc-section\">\n  <h2>你应该怎么理解 Codex App</h2>\n  <p>它不是单纯的代码补全工具，也不是只会回答问题的聊天窗口。把它当作一个工作台。</p>\n  <div class=\"section-grid\">\n    <div class=\"info-card\"><h3>项目工作台</h3><p>选择项目后，Codex 围绕当前代码库读取文件、修改代码、运行命令并展示 diff。</p></div>\n    <div class=\"info-card\"><h3>线程并行</h3><p>每个线程对应一个任务上下文。小问题用 Local，大任务可用 Worktree 或 Cloud 隔离。</p></div>\n    <div class=\"info-card\"><h3>插件扩展</h3><p>通过插件连接 Chrome、Computer Use、GitHub、Slack、Figma、Google Drive 等外部工具。</p></div>\n  </div>\n</section>\n<section class=\"doc-section\">\n  <h2>桌面端的典型一天</h2>\n  <ol>\n    <li>早上打开 App，恢复昨晚的 Worktree 线程。</li>\n    <li>新建一个 Local 线程，让 Codex 解释昨晚 PR review 里的疑问。</li>\n    <li>开三个 Worktree 同时跑「修 Bug」「补测试」「升级依赖」。</li>\n    <li>下午用 Computer Use 看一下桌面客户端的 UI 问题。</li>\n    <li>晚上把长任务丢给 Cloud，第二天看结果。</li>\n  </ol>\n</section>"
      },
      {
        "id": "install-login",
        "title": "下载、安装和登录 Codex App",
        "lead": "桌面端入门的第一步是安装 App、登录账号、选择项目，并确认 Codex 能安全地访问当前工作区。",
        "body": "\n<section class=\"doc-section\"><h1>下载、安装和登录 Codex App</h1><p class=\"lead\">桌面端教程不从 CLI 开始，而是从 App 开始。安装完成后，你应该先用一个低风险项目做练习。</p></section>\n<section class=\"doc-section\"><h2>安装前准备</h2><ul><li>准备一个可回滚的 Git 项目。</li><li>确认本机已经能正常运行项目测试或开发服务器。</li><li>不要用生产密钥、客户数据或不可回滚目录做第一轮练习。</li></ul></section>\n<section class=\"doc-section\"><h2>下载入口</h2><p>从 <a href=\"https://developers.openai.com/codex/app\" target=\"_blank\" rel=\"noopener\">官方 Codex App</a> 页面下载对应平台安装包。macOS 与 Windows 均提供桌面端。</p></section>\n<section class=\"doc-section\"><h2>登录方式</h2><p>桌面端通常使用 ChatGPT 账号登录。部分场景也可能使用 API key 或组织级配置，具体取决于账号计划和企业策略。</p><div class=\"note\"><strong>建议：</strong>不要把 API key 写进仓库、AGENTS.md、截图或共享文档。企业场景优先使用组织级身份和审计策略。</div></section>\n<section class=\"doc-section\"><h2>第一次打开项目</h2><ol><li>打开 Codex App。</li><li>选择一个练习项目文件夹。</li><li>让 Codex 先只读分析项目结构。</li><li>确认它能说清楚技术栈、启动命令、测试命令和核心目录。</li></ol><div class=\"code-block\"><pre><code>请先只读分析这个项目。输出技术栈、目录结构、启动方式、测试方式和核心模块。暂时不要修改任何文件。</code></pre></div></section>"
      },
      {
        "id": "app-interface",
        "title": "App 界面总览",
        "lead": "熟悉项目列表、线程、输入框、diff、终端和设置区域，才能判断 Codex 当前在做什么、改了什么、还缺什么验证。",
        "body": "\n<section class=\"doc-section\"><h1>App 界面总览</h1><p class=\"lead\">Codex App 的界面应当被当作开发工作台，而不是聊天窗口。重点看任务、改动、命令和验证结果。</p></section>\n<section class=\"doc-section\"><h2>核心区域</h2><div class=\"section-grid\"><div class=\"info-card\"><h3>项目列表</h3><p>管理最近打开的代码库，适合在多个项目之间切换。</p></div><div class=\"info-card\"><h3>线程列表</h3><p>每个线程承载一个任务上下文，避免把无关任务混在一个长对话里。</p></div><div class=\"info-card\"><h3>主对话区</h3><p>查看 Codex 的计划、工具调用、结果和需要你确认的问题。</p></div><div class=\"info-card\"><h3>Diff 区</h3><p>审查文件改动。任何生成代码都要回到 diff 里确认。</p></div><div class=\"info-card\"><h3>终端输出</h3><p>查看测试、构建、lint、脚本执行结果。</p></div><div class=\"info-card\"><h3>设置区</h3><p>管理模型、权限、通知、Git、插件和 agent 配置。</p></div></div></section>\n<section class=\"doc-section\"><h2>新手最应该盯住的两件事</h2><ul><li>Codex 是否真的跑了验证命令，而不是只说它改好了。</li><li>diff 是否只包含你要求的改动，是否混入无关重构。</li></ul></section>"
      },
      {
        "id": "thread-modes",
        "title": "Local / Worktree / Cloud",
        "lead": "桌面端最重要的决策之一，是给任务选择正确的执行模式。不同模式影响隔离、速度、并行和风险。",
        "body": "\n<section class=\"doc-section\"><h1>Local / Worktree / Cloud 三种线程模式</h1><p class=\"lead\">模式选错，轻则打乱工作区，重则把长任务和本地状态混在一起。桌面端使用要先理解隔离边界。</p></section>\n<section class=\"doc-section\"><div class=\"section-grid\"><div class=\"info-card\"><h3>Local</h3><p>直接在当前项目目录工作，适合小改动、只读分析、快速验证。</p></div><div class=\"info-card\"><h3>Worktree</h3><p>用 Git worktree 隔离任务，适合并行开发、较大改动、需要独立分支的任务。</p></div><div class=\"info-card\"><h3>Cloud</h3><p>在云端环境执行，适合后台长任务、GitHub Issue 到 PR、并行处理多个任务。</p></div></div></section>\n<section class=\"doc-section\"><h2>选择建议</h2><ul><li>只读理解项目：Local。</li><li>改一个小 bug：Local 或 Worktree。</li><li>实现新功能：Worktree。</li><li>多个独立任务并行：多个 Worktree 或 Cloud。</li><li>需要本机登录态或 GUI：Local 配合 Chrome / Computer Use。</li></ul></section>\n<section class=\"doc-section\"><h2>隔离边界</h2><ul><li><strong>Local</strong>：同一目录，没有额外隔离。任何文件改动直接影响主工作区。</li><li><strong>Worktree</strong>：独立目录，独立 Git 分支，但共享系统资源（端口、数据库、缓存）。</li><li><strong>Cloud</strong>：完全独立的远程容器，看不到本机文件和服务。</li></ul></section>"
      },
      {
        "id": "parallel-threads",
        "title": "多项目与多线程并行",
        "lead": "桌面端适合同时管理多个项目和多个任务，但每个线程都应该有清晰目标和完成标准。",
        "body": "\n<section class=\"doc-section\"><h1>多项目与多线程并行</h1><p class=\"lead\">并行不是把所有任务塞进一个对话，而是让每个线程承担一个独立目标。</p></section>\n<section class=\"doc-section\"><h2>并行原则</h2><ul><li>每个线程只做一个任务。</li><li>会修改同一批文件的任务不要并行。</li><li>先让 Codex 报告计划和写入范围。</li><li>合并前逐个审查 diff 和测试结果。</li></ul></section>\n<section class=\"doc-section\"><h2>适合并行的任务</h2><div class=\"card-grid\"><div class=\"info-card\"><h3>文档更新</h3><p>更新 README、FAQ、迁移说明，通常和代码改动冲突少。</p></div><div class=\"info-card\"><h3>测试补充</h3><p>在不同模块分别补测试，但要避免共享 fixtures 冲突。</p></div><div class=\"info-card\"><h3>Issue 初筛</h3><p>让多个线程分别复现和定位不同问题。</p></div></div></section>"
      },
      {
        "id": "settings",
        "title": "Codex App 设置详解",
        "lead": "设置决定 Codex 的默认行为，包括权限、通知、Git、插件、模型和 agent 偏好。",
        "body": "\n<section class=\"doc-section\"><h1>Codex App 设置详解</h1><p class=\"lead\">设置不是一次性填完就不用管。团队落地时，设置就是桌面端治理的一部分。</p></section>\n<section class=\"doc-section\"><h2>建议重点检查</h2><ul><li>账号和组织：确认当前使用的是个人账号还是团队账号。</li><li>项目权限：确认 Codex 能访问哪些目录。</li><li>通知：长任务完成、等待审批、失败时是否提醒。</li><li>Git：分支、worktree、diff 展示和提交偏好。</li><li>插件：哪些插件已启用，是否需要额外授权。</li><li>模型：默认模型与推理强度。</li></ul></section>\n<div class=\"warning\"><strong>安全提醒：</strong>启用插件前先看它要访问什么数据。外部服务插件通常有自己的数据和权限策略。</div>"
      },
      {
        "id": "shortcuts",
        "title": "快捷键与命令菜单",
        "lead": "桌面端高频操作应该通过命令菜单和快捷键完成，包括新线程、打开项目、搜索、设置、diff 和终端。",
        "body": "\n<section class=\"doc-section\"><h1>快捷键与命令菜单</h1><p class=\"lead\">熟悉命令菜单后，桌面端会更像 IDE 工作台，而不是普通聊天应用。</p></section>\n<section class=\"doc-section\"><h2>高频操作</h2><ul><li>新建线程。</li><li>打开最近项目。</li><li>搜索线程和文件。</li><li>打开设置。</li><li>查看当前 diff。</li><li>打开终端或测试输出。</li><li>切换模型和推理强度。</li></ul></section>\n<section class=\"doc-section\"><h2>教学写法建议</h2><p>正式写页面时不要写死所有快捷键。不同系统和版本可能变化，应以 App 内命令菜单显示为准。</p></section>"
      },
      {
        "id": "app-commands",
        "title": "App Slash Commands",
        "lead": "Slash Commands 用于控制桌面端任务的节奏。最常用的是计划、目标、审查、状态和上下文管理。",
        "body": "\n<section class=\"doc-section\"><h1>App Slash Commands</h1><p class=\"lead\">在桌面端，Slash Commands 是控制 agent 行为的轻量入口。复杂任务先计划，关键节点看状态和 diff。</p></section>\n<section class=\"doc-section\"><h2>建议优先掌握</h2><ul><li><code>/plan</code>：先要求 Codex 出方案。</li><li><code>/goal</code>：声明长期目标，避免上下文漂移。</li><li><code>/review</code>：让 Codex 以代码审查方式检查当前改动。</li><li><code>/status</code>：查看当前任务、权限和环境状态。</li><li><code>/compact</code>：长会话压缩上下文。</li></ul></section>\n<section class=\"doc-section\"><h2>示例</h2><div class=\"code-block\"><pre><code>/plan\n目标：给设置页增加搜索框。\n约束：不要改动路由结构，不引入新依赖。\n完成标准：现有测试通过，并补一个搜索过滤测试。</code></pre></div></section>"
      }
    ]
  },
  {
    "title": "工程工作流",
    "pages": [
      {
        "id": "git-diff",
        "title": "Git diff、分支和 PR 描述",
        "lead": "Codex 生成的结果必须回到 Git diff 里审查。桌面端适合把实现、验证和 PR 描述连成一条工作流。",
        "body": "\n<section class=\"doc-section\"><h1>Git diff、分支和 PR 描述</h1><p class=\"lead\">不要用「看起来能跑」代替 diff 审查。Codex 改完后，先看文件范围，再看行为，再看测试。</p></section>\n<section class=\"doc-section\"><h2>推荐流程</h2><ol><li>让 Codex 总结改了哪些文件。</li><li>自己查看 diff。</li><li>要求 Codex 解释关键改动的取舍。</li><li>运行测试、lint 或手动验收。</li><li>让 Codex 生成 PR 描述和测试记录。</li></ol><div class=\"code-block\"><pre><code>请基于当前 diff 写一份 PR 描述，包含：背景、改动点、测试方式、风险和回滚方式。</code></pre></div></section>"
      },
      {
        "id": "worktree-flow",
        "title": "Worktree 隔离开发流程",
        "lead": "Worktree 是桌面端并行任务的关键能力。它让每个任务有独立目录和分支，减少互相覆盖。",
        "body": "\n<section class=\"doc-section\"><h1>Worktree 隔离开发流程</h1><p class=\"lead\">当任务可能超过几分钟，或会改多个文件时，优先考虑 Worktree。</p></section>\n<section class=\"doc-section\"><h2>适用场景</h2><ul><li>实现一个完整功能。</li><li>升级依赖或迁移框架。</li><li>并行处理多个 Issue。</li><li>需要保留主工作区继续开发。</li></ul></section>\n<section class=\"doc-section\"><h2>验收重点</h2><p>Worktree 合并前，要确认目标分支、变更范围、测试结果和冲突情况。不要把多个 Worktree 的结果一次性无审查合并。</p></section>"
      },
      {
        "id": "browser-preview",
        "title": "内置浏览器与本地 Web 预览",
        "lead": "前端任务不能只看代码。桌面端应配合本地开发服务器、浏览器截图和多视口检查。",
        "body": "\n<section class=\"doc-section\"><h1>内置浏览器与本地 Web 预览</h1><p class=\"lead\">让 Codex 做前端时，必须让它跑起来看。视觉问题通常不会从代码静态阅读里完全暴露。</p></section>\n<section class=\"doc-section\"><h2>推荐提示词</h2><div class=\"code-block\"><pre><code>请启动本地开发服务器，打开页面检查桌面和移动端视口。确认没有空白、错位、文字溢出和交互遮挡。最后告诉我访问 URL 和检查结果。</code></pre></div></section>\n<section class=\"doc-section\"><h2>验收点</h2><ul><li>页面是否能启动。</li><li>核心交互是否可用。</li><li>移动端是否拥挤或重叠。</li><li>按钮文字是否溢出。</li><li>图片和图表是否加载。</li></ul></section>"
      },
      {
        "id": "chrome-plugin",
        "title": "Chrome 插件",
        "lead": "Chrome 插件适合需要真实浏览器登录态、扩展、Cookie 或复杂网页交互的任务。",
        "body": "\n<section class=\"doc-section\"><h1>Chrome 插件：登录态网页和网站权限</h1><p class=\"lead\">当任务依赖你当前 Chrome 里的登录状态或网站后台，Chrome 插件比无状态浏览器更合适。</p></section>\n<section class=\"doc-section\"><h2>适合使用</h2><ul><li>登录后的管理后台。</li><li>需要 Cookie 或企业 SSO 的网页。</li><li>需要检查真实浏览器扩展影响的页面。</li><li>复杂表单、数据后台、网页 QA。</li></ul></section>\n<div class=\"warning\"><strong>边界：</strong>不要让 Codex 在没有明确指令时操作支付、删除、发布、批量发送、权限变更等高风险页面。</div>"
      },
      {
        "id": "computer-use",
        "title": "Computer Use",
        "lead": "Computer Use 让 Codex 控制 Mac 应用。它适合 GUI 任务，但必须给清晰边界。",
        "body": "\n<section class=\"doc-section\"><h1>Computer Use：控制桌面应用</h1><p class=\"lead\">Computer Use 是桌面端最强也最需要谨慎的能力之一。它可以操作本机应用，但不应该被当成无限授权。</p></section>\n<section class=\"doc-section\"><h2>适合使用</h2><ul><li>检查桌面应用界面。</li><li>跨应用复制信息。</li><li>执行没有 API 的 GUI 操作。</li><li>复现用户在桌面软件里的问题。</li></ul></section>\n<section class=\"doc-section\"><h2>使用前提示词</h2><div class=\"code-block\"><pre><code>你可以使用 Computer Use 检查界面，但不要点击删除、发送、购买、发布、授权或修改系统设置的按钮。遇到这些操作先停下来问我。</code></pre></div></section>"
      }
    ]
  },
  {
    "title": "CLI 与终端",
    "pages": [
      {
        "id": "cli-install",
        "title": "安装 Codex CLI",
        "lead": "Codex CLI 可以通过 npm、Homebrew、官方脚本或 GitHub Release 安装。日常推荐 npm 或 Homebrew。",
        "body": "\n<section class=\"doc-section\"><h1>安装 Codex CLI</h1><p class=\"lead\">CLI 适合 SSH、远程开发机、CI 和重度终端用户。下面四种方式按使用频率排序。</p></section>\n<section class=\"doc-section\"><h2>1. npm 全局安装</h2><div class=\"code-block\"><pre><code>npm i -g @openai/codex\ncodex --version</code></pre></div><p>需要本机有 Node.js。Node 版本要求请查 GitHub README。</p></section>\n<section class=\"doc-section\"><h2>2. Homebrew</h2><div class=\"code-block\"><pre><code>brew install codex</code></pre></div><p>历史版本曾用 <code>brew install --cask codex</code>，最终以官方文档为准。</p></section>\n<section class=\"doc-section\"><h2>3. 官方安装脚本</h2><div class=\"code-block\"><pre><code>curl -fsSL https://chatgpt.com/codex/install.sh | sh</code></pre></div><p>Windows PowerShell：</p><div class=\"code-block\"><pre><code>powershell -ExecutionPolicy ByPass -c \"irm https://chatgpt.com/codex/install.ps1 | iex\"</code></pre></div></section>\n<section class=\"doc-section\"><h2>4. GitHub Release 二进制</h2><p>适合离线环境、固定版本、CI 镜像。从 <a href=\"https://github.com/openai/codex/releases\" target=\"_blank\" rel=\"noopener\">GitHub Release</a> 下载对应平台二进制并放进 PATH。</p></section>\n<section class=\"doc-section\"><h2>更新 CLI</h2><div class=\"code-block\"><pre><code>npm i -g @openai/codex@latest\ncodex --version</code></pre></div></section>\n<section class=\"doc-section\"><h2>常见安装问题</h2><ul><li>PATH 未配置：检查 <code>which codex</code> 或 <code>where codex</code>。</li><li>npm 全局权限：避免直接 sudo，建议改 npm prefix 或使用 nvm。</li><li>公司网络代理：设置 <code>HTTPS_PROXY</code>、<code>npm config set proxy</code>。</li><li>Windows 原生与 WSL2 取舍：自动化和 Linux 工具优先 WSL2。</li></ul></section>"
      },
      {
        "id": "cli-basics",
        "title": "CLI 基础命令",
        "lead": "Codex CLI 的入口是 codex 命令本身。带任务和不带任务的启动方式有差异。",
        "body": "\n<section class=\"doc-section\"><h1>CLI 基础命令</h1><p class=\"lead\">学会下面这几条，CLI 日常使用已经基本覆盖。</p></section>\n<section class=\"doc-section\"><h2>启动交互式 TUI</h2><div class=\"code-block\"><pre><code>codex</code></pre></div></section>\n<section class=\"doc-section\"><h2>带任务启动</h2><div class=\"code-block\"><pre><code>codex \"解释这个项目结构\"</code></pre></div></section>\n<section class=\"doc-section\"><h2>指定项目目录</h2><div class=\"code-block\"><pre><code>codex -C /path/to/project \"找出测试失败原因\"</code></pre></div></section>\n<section class=\"doc-section\"><h2>附加图片</h2><div class=\"code-block\"><pre><code>codex -i screenshot.png \"按这个截图还原页面\"</code></pre></div></section>\n<section class=\"doc-section\"><h2>一次性配置覆盖</h2><div class=\"code-block\"><pre><code>codex -c model=\"gpt-5-codex\" -c reasoning_effort=\"high\"</code></pre></div></section>\n<section class=\"doc-section\"><h2>查看版本与帮助</h2><div class=\"code-block\"><pre><code>codex --version\ncodex --help</code></pre></div></section>"
      },
      {
        "id": "cli-flags",
        "title": "常用全局参数",
        "lead": "CLI 的关键参数包括模型、审批策略、目录授权、危险跳过。每个都要清楚边界。",
        "body": "\n<section class=\"doc-section\"><h1>常用全局参数</h1><p class=\"lead\">参数会影响 Codex 的可执行范围与审批策略。下表只列最常用的，详细见 <a href=\"https://developers.openai.com/codex/cli/reference\" target=\"_blank\" rel=\"noopener\">CLI Reference</a>。</p></section>\n<section class=\"doc-section\">\n  <h2>核心参数</h2>\n  <div class=\"card-grid\">\n    <div class=\"info-card\"><h3>--model / -m</h3><p>指定本次会话使用的模型。</p></div>\n    <div class=\"info-card\"><h3>--ask-for-approval / -a</h3><p>审批策略，可选 <code>untrusted</code>、<code>on-request</code>、<code>never</code>。</p></div>\n    <div class=\"info-card\"><h3>--config / -c</h3><p>一次性覆盖 TOML 配置项。</p></div>\n    <div class=\"info-card\"><h3>--add-dir</h3><p>给主工作区之外的目录授权。</p></div>\n    <div class=\"info-card\"><h3>-C &lt;dir&gt;</h3><p>切换到指定目录运行。</p></div>\n    <div class=\"info-card\"><h3>-i &lt;file&gt;</h3><p>附加图片输入。</p></div>\n  </div>\n  <div class=\"note\"><strong>提醒：</strong><code>--ask-for-approval on-failure</code> 已被弃用，不要再推荐使用。</div>\n</section>\n<section class=\"doc-section\"><h2>危险参数</h2><div class=\"code-block\"><pre><code>codex --dangerously-bypass-approvals-and-sandbox</code></pre></div><div class=\"warning\"><strong>谨慎：</strong>只在外部已经隔离的环境中使用，比如一次性容器或 VM。日常开发不要打开。</div></section>\n<section class=\"doc-section\"><h2>查看完整参数</h2><div class=\"code-block\"><pre><code>codex --help\ncodex exec --help\ncodex mcp --help</code></pre></div></section>"
      },
      {
        "id": "cli-slash",
        "title": "CLI Slash Commands",
        "lead": "TUI 内的 Slash Commands 控制 Codex 的行为：权限、模型、计划、状态、上下文。",
        "body": "\n<section class=\"doc-section\"><h1>CLI Slash Commands</h1><p class=\"lead\">Slash 命令是 TUI 里最重要的控制入口。下面按用途分组。</p></section>\n<section class=\"doc-section\">\n  <h2>权限与审批</h2>\n  <ul>\n    <li><code>/permissions</code>：调整 Codex 可执行的范围。</li>\n    <li><code>/approve</code>：批准最近被拒的操作并重试。</li>\n  </ul>\n</section>\n<section class=\"doc-section\">\n  <h2>模型与速度</h2>\n  <ul>\n    <li><code>/model</code>：切换当前模型和推理强度。</li>\n    <li><code>/fast</code>：切换 Fast tier（如可用）。</li>\n  </ul>\n</section>\n<section class=\"doc-section\">\n  <h2>规划与执行</h2>\n  <ul>\n    <li><code>/plan</code>：先做计划再实现。</li>\n    <li><code>/goal</code>：声明长期目标。</li>\n    <li><code>/review</code>：让 Codex 以审查方式检查改动。</li>\n  </ul>\n</section>\n<section class=\"doc-section\">\n  <h2>上下文管理</h2>\n  <ul>\n    <li><code>/compact</code>：压缩长会话。</li>\n    <li><code>/clear</code>：清屏并开始新对话。</li>\n    <li><code>/mention</code>：把文件附加到上下文。</li>\n  </ul>\n</section>\n<section class=\"doc-section\">\n  <h2>会话与诊断</h2>\n  <ul>\n    <li><code>/status</code>：查看当前状态、权限、环境。</li>\n    <li><code>/diff</code>：查看 Git diff。</li>\n    <li><code>/agent</code>：切换 subagent thread。</li>\n    <li><code>/copy</code>：复制最后输出。</li>\n    <li><code>/exit</code> / <code>/quit</code>：退出。</li>\n  </ul>\n</section>\n<section class=\"doc-section\">\n  <h2>扩展能力</h2>\n  <ul>\n    <li><code>/mcp</code>：查看可用 MCP 工具。</li>\n    <li><code>/skills</code>：浏览和选择 Skill。</li>\n    <li><code>/plugins</code>：查看插件。</li>\n    <li><code>/hooks</code>：检查生命周期 hooks。</li>\n  </ul>\n</section>"
      },
      {
        "id": "cli-session",
        "title": "会话管理：resume 与 fork",
        "lead": "Codex CLI 把每次对话存成会话。学会恢复与分叉，才能在多任务之间无缝切换。",
        "body": "\n<section class=\"doc-section\"><h1>会话管理：resume 与 fork</h1><p class=\"lead\">不要在每个新任务时都开一个全新的 TUI。会话恢复让上下文有连续性，分叉避免污染主线。</p></section>\n<section class=\"doc-section\"><h2>恢复最近一次会话</h2><div class=\"code-block\"><pre><code>codex resume --last</code></pre></div></section>\n<section class=\"doc-section\"><h2>按 ID 恢复</h2><div class=\"code-block\"><pre><code>codex resume &lt;SESSION_ID&gt;</code></pre></div></section>\n<section class=\"doc-section\"><h2>Fork 会话</h2><div class=\"code-block\"><pre><code>codex fork --last\ncodex fork &lt;SESSION_ID&gt;</code></pre></div><p>Fork 适合「我想从某个中间状态出发尝试另一条路」。</p></section>\n<section class=\"doc-section\"><h2>什么时候应该新开会话</h2><ul><li>任务上下文与当前会话无关。</li><li>会话已经超过模型上下文窗口 60% 以上。</li><li>之前的会话有错误结论，需要重新开始。</li></ul></section>\n<section class=\"doc-section\"><h2>什么时候应该 compact</h2><ul><li>任务还要继续，但对话太长。</li><li>需要保留近期上下文，但希望减少 token。</li><li>切换到新阶段，但保留目标和约束。</li></ul></section>"
      },
      {
        "id": "cli-exec",
        "title": "非交互模式：codex exec",
        "lead": "codex exec 适合 CI、批处理、脚本和自动化。它会输出一次结果就退出。",
        "body": "\n<section class=\"doc-section\"><h1>非交互模式：codex exec</h1><p class=\"lead\">把 Codex 接进 CI、Cron、批处理脚本时，永远使用 exec 模式，并固定权限。</p></section>\n<section class=\"doc-section\"><h2>基本用法</h2><div class=\"code-block\"><pre><code>codex exec \"请把 README 翻译成英文并保留 Markdown 格式\"</code></pre></div></section>\n<section class=\"doc-section\"><h2>CI 友好的写法</h2><div class=\"code-block\"><pre><code>codex exec \\\n  --ask-for-approval never \\\n  -c sandbox=\":workspace\" \\\n  \"请运行测试，并把失败用例写进 reports/failures.md\"</code></pre></div><p>明确审批策略、明确 sandbox、明确产出，是 CI 任务的三件套。</p></section>\n<section class=\"doc-section\"><h2>自动化边界</h2><ul><li>不在 exec 中使用 <code>--dangerously-bypass-approvals-and-sandbox</code>，除非已经在隔离容器中。</li><li>把 secrets 放进环境变量或 CI secret，绝不写进 prompt。</li><li>失败时输出日志和建议，不自动重试危险操作。</li></ul></section>"
      }
    ]
  },
  {
    "title": "IDE 与 Cloud",
    "pages": [
      {
        "id": "ide-extension",
        "title": "Codex IDE 扩展",
        "lead": "Codex 在 VS Code、Cursor、Windsurf 等编辑器里都有扩展。它适合在文件视图中做小步协作。",
        "body": "\n<section class=\"doc-section\"><h1>Codex IDE 扩展</h1><p class=\"lead\">IDE 扩展不是 App 的替代，而是「贴在编辑器里」的入口。改一两个文件、即时验证最方便。</p></section>\n<section class=\"doc-section\"><h2>支持的编辑器</h2><ul><li>VS Code（含 Insiders）。</li><li>Cursor。</li><li>Windsurf。</li></ul></section>\n<section class=\"doc-section\"><h2>安装与登录</h2><ol><li>在编辑器扩展市场搜 Codex。</li><li>安装后用 ChatGPT 账号登录。</li><li>在项目中启用 Agent 模式。</li></ol></section>\n<section class=\"doc-section\"><h2>IDE 模式的上下文</h2><ul><li>当前打开文件。</li><li>选区内容。</li><li>编辑器诊断（红线、警告）。</li><li>Git 状态。</li></ul></section>"
      },
      {
        "id": "ide-workflow",
        "title": "IDE 工作流：小步编辑与即时验证",
        "lead": "IDE 扩展不擅长长任务，更擅长「现在这一行 / 这段函数 / 这个文件」。",
        "body": "\n<section class=\"doc-section\"><h1>IDE 工作流：小步编辑与即时验证</h1><p class=\"lead\">把 IDE 扩展当成「带嘴的同桌」，它能看到你正在改什么。</p></section>\n<section class=\"doc-section\"><h2>适合 IDE 的任务</h2><ul><li>当前函数重构。</li><li>选中一段代码补测试。</li><li>解释一段复杂逻辑。</li><li>修一个明确的报错。</li></ul></section>\n<section class=\"doc-section\"><h2>不适合 IDE 的任务</h2><ul><li>跨多个文件的大重构 → 用 App 的 Worktree。</li><li>长时间后台任务 → 用 Cloud。</li><li>需要操作 GUI → 用 Computer Use 或 Chrome 插件。</li></ul></section>"
      },
      {
        "id": "cloud-web",
        "title": "Codex Web 与 Cloud 入门",
        "lead": "Codex Web 是云端入口，每个任务跑在独立容器里，适合并行长任务和 GitHub 联动。",
        "body": "\n<section class=\"doc-section\"><h1>Codex Web 与 Cloud 入门</h1><p class=\"lead\">Cloud 任务和本地任务最大的区别是「Codex 看不到你的本机」，所以输入要更完整。</p></section>\n<section class=\"doc-section\"><h2>打开入口</h2><p>通过 <code>chatgpt.com/codex</code> 进入 Web 端，登录后选择仓库。</p></section>\n<section class=\"doc-section\"><h2>云端环境</h2><ul><li>每个任务跑在独立云容器。</li><li>可以配置：依赖安装、启动脚本、环境变量、网络策略。</li><li>任务输出包括日志、文件差异、可选 PR。</li></ul></section>\n<section class=\"doc-section\"><h2>第一次配置仓库</h2><ol><li>连接 GitHub。</li><li>选择目标仓库。</li><li>定义启动脚本（安装依赖、跑测试）。</li><li>跑一个简单任务验证容器是否正常。</li></ol></section>"
      },
      {
        "id": "cloud-tasks",
        "title": "云端任务：什么任务适合 Cloud",
        "lead": "云端不能访问你的本机文件、登录态、GUI；但它能后台并行长任务、产 PR。",
        "body": "\n<section class=\"doc-section\"><h1>云端任务：什么任务适合 Cloud</h1><p class=\"lead\">Cloud 是 Codex 唯一能脱离你的本机长时间跑的模式。能力越独立，输入越要完整。</p></section>\n<section class=\"doc-section\"><h2>适合云端的任务</h2><ul><li>并行修多个 Issue。</li><li>生成 PR（带分支、测试、描述）。</li><li>后台跑长任务（数据迁移脚本、文档批量生成）。</li><li>从 GitHub Issue / Slack 触发任务。</li></ul></section>\n<section class=\"doc-section\"><h2>不适合云端的任务</h2><ul><li>必须访问本机私有文件。</li><li>必须依赖本机登录状态或本机 GUI。</li><li>涉及敏感未授权数据。</li></ul></section>\n<div class=\"warning\"><strong>提醒：</strong>云端容器的网络策略与本机不同。能不能访问公司内网、能不能调用某个 API，取决于配置。</div>"
      },
      {
        "id": "github-integration",
        "title": "GitHub 集成：从 Issue 到 PR",
        "lead": "Codex 与 GitHub 的集成可以做自动 PR、自动 Review、@提及 Codex 触发任务。",
        "body": "\n<section class=\"doc-section\"><h1>GitHub 集成：从 Issue 到 PR</h1><p class=\"lead\">把 GitHub 当成任务来源，让 Codex 做实现和审查。最适合「明确写了验收标准的 Issue」。</p></section>\n<section class=\"doc-section\"><h2>连接仓库</h2><p>在 Codex Web 里授权 GitHub App，选择要连接的仓库范围。</p></section>\n<section class=\"doc-section\"><h2>从 Issue 到 PR</h2><ol><li>选择一个 Issue。</li><li>明确验收条件（接受标准、测试要求、不能动哪些文件）。</li><li>启动任务，Codex 在云端创建分支并提交 PR。</li><li>人工审查 PR，让 Codex 按评论修订。</li></ol></section>\n<section class=\"doc-section\"><h2>PR Review</h2><ul><li>Codex 可对 PR 做自动审查。</li><li>在 PR 里 @ 提及 Codex 可触发改动建议或实现。</li><li>不要让自动 review 完全替代人工 review。</li></ul></section>"
      }
    ]
  },
  {
    "title": "核心概念",
    "pages": [
      {
        "id": "agent-loop",
        "title": "Agent Loop：Codex 的执行循环",
        "lead": "Codex 的「智能」来自一个不断重复的循环：推理 → 工具调用 → 观察结果 → 继续推理。",
        "body": "\n<section class=\"doc-section\"><h1>Agent Loop：Codex 的执行循环</h1><p class=\"lead\">把这套循环背下来，你就知道为什么 Codex 偶尔会\"卡住\"或\"乱跑\"，以及如何把它带回正轨。</p></section>\n<section class=\"doc-section\"><h2>一次完整循环</h2><ol><li>读取用户消息和已有上下文。</li><li>模型推理，决定下一步。</li><li>请求工具调用：读文件、写文件、跑命令、调 MCP。</li><li>Codex 执行工具。</li><li>把结果放回上下文。</li><li>继续推理或返回最终回复。</li></ol></section>\n<section class=\"doc-section\"><h2>什么时候循环会停</h2><ul><li>模型说\"我做完了\"。</li><li>遇到需要审批的操作。</li><li>触发权限 / 沙箱拒绝。</li><li>达到 turn 数上限或超时。</li><li>你手动打断。</li></ul></section>\n<section class=\"doc-section\"><h2>循环中常见的坑</h2><ul><li>长任务里上下文累积过多，模型遗忘早期约束。</li><li>多次失败的工具调用让模型陷入循环。</li><li>Sandbox 拒绝时没有给模型有用的报错。</li></ul><div class=\"note\"><strong>建议：</strong>当看到模型卡住时，先看最近一次工具调用是不是被拒了，再决定是改提示还是调权限。</div></section>"
      },
      {
        "id": "thread-context",
        "title": "Thread、Turn 与 Context",
        "lead": "Thread 是一段持续会话，Turn 是一次用户消息到 Codex 回复的完整循环，Context 是模型当前能看到的全部内容。",
        "body": "\n<section class=\"doc-section\"><h1>Thread、Turn 与 Context</h1><p class=\"lead\">这三个词在文档里反复出现。理解清楚后，所有上下文管理操作（compact、clear、新开会话）都会有依据。</p></section>\n<section class=\"doc-section\">\n  <h2>三者关系</h2>\n  <div class=\"section-grid\">\n    <div class=\"info-card\"><h3>Thread</h3><p>一段持续会话。可能跨越多次 Turn，多次工具调用。</p></div>\n    <div class=\"info-card\"><h3>Turn</h3><p>一次「用户消息 → Codex 回复」的完整循环。</p></div>\n    <div class=\"info-card\"><h3>Context</h3><p>模型当前能看到的全部内容：系统指令、AGENTS.md、Skills、历史消息、工具结果。</p></div>\n  </div>\n</section>\n<section class=\"doc-section\"><h2>上下文管理的三个动作</h2><ul><li><strong>Compact</strong>：在保留任务目标的前提下压缩历史，节省 token。</li><li><strong>Clear</strong>：清空当前对话开始新一轮（仍在同一 Thread）。</li><li><strong>New Thread</strong>：开新会话，完全切换上下文。</li></ul></section>"
      },
      {
        "id": "sandbox-approval",
        "title": "Sandbox 与 Approval：两条边界",
        "lead": "Sandbox 是技术边界，限制能跑什么；Approval 是人类边界，决定越界时谁来批。两者必须配合使用。",
        "body": "\n<section class=\"doc-section\"><h1>Sandbox 与 Approval</h1><p class=\"lead\">Codex 的安全模型有两层：Sandbox 决定「默认能做什么」，Approval 决定「越界时怎么处理」。</p></section>\n<section class=\"doc-section\">\n  <h2>对比</h2>\n  <div class=\"section-grid\">\n    <div class=\"info-card\"><h3>Sandbox</h3><p>技术边界。文件系统、网络、命令的允许范围。</p></div>\n    <div class=\"info-card\"><h3>Approval</h3><p>人类策略。越界时是否打断、找谁批准、能否自动放行。</p></div>\n  </div>\n</section>\n<section class=\"doc-section\">\n  <h2>内置 Sandbox 画像</h2>\n  <ul>\n    <li><code>:read-only</code>：只读分析。</li>\n    <li><code>:workspace</code>：允许在当前工作区写入。</li>\n    <li><code>:danger-full-access</code>：取消本地沙箱限制，只用于明确受控环境。</li>\n  </ul>\n</section>\n<section class=\"doc-section\">\n  <h2>Approval 策略</h2>\n  <ul>\n    <li><code>untrusted</code>：默认拒绝，每次都问。</li>\n    <li><code>on-request</code>：Codex 觉得需要时才问。</li>\n    <li><code>never</code>：不打断（适合 CI 与一次性容器）。</li>\n  </ul>\n  <div class=\"warning\"><strong>提醒：</strong><code>on-failure</code> 已被废弃。</div>\n</section>\n<section class=\"doc-section\">\n  <h2>常见组合</h2>\n  <ul>\n    <li>初学者：<code>:read-only</code> + <code>untrusted</code>。</li>\n    <li>日常开发：<code>:workspace</code> + <code>on-request</code>。</li>\n    <li>CI 自动化：<code>:workspace</code> + <code>never</code>，附加 Rules 限制。</li>\n    <li>临时容器跑长任务：<code>:danger-full-access</code> + <code>never</code>。</li>\n  </ul>\n</section>"
      },
      {
        "id": "models-reasoning",
        "title": "模型与推理强度",
        "lead": "Codex 提供多种模型和推理强度。任务越复杂越要给高推理；任务越简单越要省 token。",
        "body": "\n<section class=\"doc-section\"><h1>模型与推理强度</h1><p class=\"lead\">不同任务用不同模型，不仅省钱，还能更稳定。具体模型名以官方当前模型页为准。</p></section>\n<section class=\"doc-section\"><h2>模型选择原则</h2><ul><li>简单小改动：低推理、更快模型。</li><li>大型重构、疑难 bug：高推理。</li><li>UI 视觉问题：选支持视觉的模型。</li><li>长链路任务：高推理 + 明确目标 + 阶段性 compact。</li></ul></section>\n<section class=\"doc-section\">\n  <h2>Reasoning Effort</h2>\n  <div class=\"card-grid\">\n    <div class=\"info-card\"><h3>low</h3><p>快速响应，适合明确、小范围任务。</p></div>\n    <div class=\"info-card\"><h3>medium / high</h3><p>复杂变更、调试、架构分析的默认档位。</p></div>\n    <div class=\"info-card\"><h3>extra high</h3><p>长链路、深度推理、高风险任务的最高档。</p></div>\n  </div>\n</section>\n<section class=\"doc-section\"><h2>Fast 模式</h2><p>部分模型提供 Fast tier，用于速度优先的场景。是否可用取决于当前模型与服务。</p></section>\n<section class=\"doc-section\"><h2>实操建议</h2><ul><li>探索阶段：medium。</li><li>明确任务：low。</li><li>陷入循环或反复改错：升到 high。</li><li>仅当任务卡住时再升 extra high，不要默认就开。</li></ul></section>"
      }
    ]
  },
  {
    "title": "配置与定制",
    "pages": [
      {
        "id": "config-toml",
        "title": "config.toml：用户级与项目级配置",
        "lead": "Codex 的配置文件按用户级、项目级、系统级分层。优先级清楚，定制才稳定。",
        "body": "\n<section class=\"doc-section\"><h1>config.toml：用户级与项目级配置</h1><p class=\"lead\">配置不是越多越好。先理解优先级，再写最小配置。</p></section>\n<section class=\"doc-section\"><h2>位置</h2><ul><li>用户级：<code>~/.codex/config.toml</code></li><li>项目级：<code>&lt;repo&gt;/.codex/config.toml</code></li><li>系统级：<code>/etc/codex/config.toml</code></li></ul></section>\n<section class=\"doc-section\"><h2>优先级（高到低）</h2><ol><li>CLI flags 和 <code>--config</code>。</li><li>Profile（已选中的配置组）。</li><li>项目 <code>.codex/config.toml</code>。</li><li>用户 <code>~/.codex/config.toml</code>。</li><li>系统 <code>/etc/codex/config.toml</code>。</li><li>内置默认值。</li></ol></section>\n<section class=\"doc-section\"><h2>常见字段</h2><div class=\"code-block\"><pre><code># ~/.codex/config.toml\nmodel = \"gpt-5-codex\"\nreasoning_effort = \"medium\"\nask_for_approval = \"on-request\"\nsandbox = \":workspace\"\n\n[notifications]\non_completion = true\non_approval_needed = true</code></pre></div></section>\n<section class=\"doc-section\"><h2>Trusted Project</h2><p>项目级 <code>.codex/</code> 配置只有在项目被 trust 后才加载。未信任时，项目级 hooks、rules、config 不会生效。</p><div class=\"note\"><strong>提示：</strong>把项目 trust 当作一次性确认动作，不要每个新项目都默认 trust。</div></section>"
      },
      {
        "id": "permissions-profile",
        "title": "Permissions Profile",
        "lead": "Permissions Profiles 是新版权限系统，目前仍在 beta，不能与旧版 sandbox 设置混用。",
        "body": "\n<section class=\"doc-section\"><h1>Permissions Profile</h1><p class=\"lead\">Profile 让你把「文件系统 + 网络 + 默认行为」打包成一个可命名的配置。一个项目可挂多个 profile。</p></section>\n<section class=\"doc-section\"><h2>内置 Profile</h2><div class=\"section-grid\"><div class=\"info-card\"><h3>:read-only</h3><p>只读访问，最适合分析、Code Review、文档生成。</p></div><div class=\"info-card\"><h3>:workspace</h3><p>允许在当前工作区写入，常规开发用。</p></div><div class=\"info-card\"><h3>:danger-full-access</h3><p>取消本地沙箱限制，仅用于隔离容器或 VM。</p></div></div></section>\n<section class=\"doc-section\"><h2>自定义 Profile（示例）</h2><div class=\"code-block\"><pre><code>[permissions.profiles.frontend]\nfs.write = [\"src/**\", \"tests/**\"]\nfs.deny = [\"src/legacy/**\"]\nnetwork.allow = [\"registry.npmjs.org\", \"github.com\"]\ndefault = false</code></pre></div><p>实际字段名以官方 <a href=\"https://developers.openai.com/codex/permissions\" target=\"_blank\" rel=\"noopener\">Permissions 文档</a> 为准。</p></section>\n<section class=\"doc-section\"><h2>最小权限实践</h2><ul><li>默认从只读开始。</li><li>明确目标后切换 workspace。</li><li>跨目录任务通过 <code>--add-dir</code> 明确扩展，不要盲目放开。</li><li>把高风险任务挪到隔离容器中再启 full access。</li></ul></section>"
      },
      {
        "id": "rules",
        "title": "Rules：命令级允许 / 提示 / 拒绝",
        "lead": "Rules 控制哪些命令能在沙箱外运行。可以 allow、prompt、deny，并写测试样例。",
        "body": "\n<section class=\"doc-section\"><h1>Rules：命令级允许 / 提示 / 拒绝</h1><p class=\"lead\">沙箱解决「文件能不能动」，Rules 解决「命令能不能跑」。两者互相补充。</p></section>\n<section class=\"doc-section\"><h2>文件位置</h2><ul><li>用户级：<code>~/.codex/rules/default.rules</code></li><li>项目级：<code>&lt;repo&gt;/.codex/rules/*.rules</code></li></ul></section>\n<section class=\"doc-section\"><h2>常用 prefix_rule</h2><div class=\"code-block\"><pre><code>[[prefix_rule]]\nmatch = \"git status\"\naction = \"allow\"\njustification = \"只读操作\"\n\n[[prefix_rule]]\nmatch = \"gh pr view\"\naction = \"prompt\"\n\n[[prefix_rule]]\nmatch = \"rm -rf\"\naction = \"deny\"\njustification = \"禁止递归删除\"</code></pre></div></section>\n<section class=\"doc-section\"><h2>建议规则集</h2><ul><li>allow：<code>git status</code>、<code>git diff</code>、<code>ls</code>、<code>cat</code>、<code>npm test</code>。</li><li>prompt：<code>gh pr create</code>、<code>npm publish</code>、<code>git push</code>。</li><li>deny：<code>rm -rf</code>、生产数据库命令、未授权上传。</li></ul></section>\n<section class=\"doc-section\"><h2>测试规则</h2><p>规则文件可以写 <code>match</code> / <code>not_match</code> 作为单元测试样例，避免误判。</p></section>"
      },
      {
        "id": "hooks",
        "title": "Hooks：生命周期里的确定性脚本",
        "lead": "Hooks 在 Codex 生命周期里运行你写的脚本，用于日志、合规扫描、提示词检查、停止时验证。",
        "body": "\n<section class=\"doc-section\"><h1>Hooks：生命周期里的确定性脚本</h1><p class=\"lead\">Hooks 不能让模型变聪明，但能让模型在固定时机走固定流程。最适合做\"每次都要做的事\"。</p></section>\n<section class=\"doc-section\"><h2>文件位置</h2><ul><li>用户级：<code>~/.codex/hooks.json</code> 或 <code>~/.codex/config.toml</code></li><li>项目级：<code>&lt;repo&gt;/.codex/hooks.json</code> 或 <code>&lt;repo&gt;/.codex/config.toml</code></li></ul></section>\n<section class=\"doc-section\"><h2>常见事件</h2><ul><li><code>SessionStart</code> / <code>Stop</code></li><li><code>UserPromptSubmit</code></li><li><code>PreToolUse</code> / <code>PostToolUse</code></li><li><code>PreCompact</code> / <code>PostCompact</code></li><li><code>SubagentStart</code> / <code>SubagentStop</code></li></ul></section>\n<section class=\"doc-section\"><h2>示例：每次 prompt 提交前打印日志</h2><div class=\"code-block\"><pre><code>{\n  \"UserPromptSubmit\": [\n    {\n      \"command\": \"./scripts/log-prompt.sh\",\n      \"matcher\": \"*\"\n    }\n  ]\n}</code></pre></div></section>\n<section class=\"doc-section\"><h2>信任与治理</h2><div class=\"warning\"><strong>注意：</strong>非 managed hooks 需要审查后才能信任运行。企业可通过 managed configuration 把核心 hooks 统一下发。</div></section>"
      }
    ]
  },
  {
    "title": "扩展能力",
    "pages": [
      {
        "id": "agents-md",
        "title": "AGENTS.md",
        "lead": "AGENTS.md 让 Codex 桌面端稳定理解项目规则、命令和完成标准。",
        "body": "\n<section class=\"doc-section\"><h1>AGENTS.md：让 Codex 理解项目规范</h1><p class=\"lead\">如果你经常重复告诉 Codex「怎么跑测试、代码风格是什么、哪些文件不能碰」，就应该写 AGENTS.md。</p></section>\n<section class=\"doc-section\"><h2>发现顺序</h2><ol><li>全局：<code>~/.codex/AGENTS.override.md</code> 或 <code>~/.codex/AGENTS.md</code>。</li><li>从项目根到当前目录逐层查找 <code>AGENTS.override.md</code>、<code>AGENTS.md</code>。</li><li>越靠近当前目录，优先级越高。</li></ol></section>\n<section class=\"doc-section\"><h2>建议模板</h2><div class=\"code-block\"><pre><code># 项目说明\n\n## 目录结构\n\n## 常用命令\n- 安装依赖：\n- 启动开发：\n- 运行测试：\n- 运行 lint：\n\n## 工程规范\n\n## 安全边界\n\n## 完成标准</code></pre></div></section>\n<section class=\"doc-section\"><h2>/init 自动生成</h2><p>在 CLI 或 App 中执行 <code>/init</code> 可生成 AGENTS.md 草稿。生成后必须人工修订，不能把模板当成最终规范。</p></section>\n<section class=\"doc-section\"><h2>常见错误</h2><ul><li>写得太空：「请遵守最佳实践」这类话对 Codex 无效。</li><li>写得太死：穷举所有目录文件，反而让模型困惑。</li><li>没有「完成标准」：模型不知道什么时候算做完。</li></ul></section>"
      },
      {
        "id": "skills",
        "title": "Skills",
        "lead": "Skills 把重复的桌面端工作流固化下来，适合团队复用。",
        "body": "\n<section class=\"doc-section\"><h1>Skills：复用工作流</h1><p class=\"lead\">Skill 适合稳定、重复、带模板或脚本的任务。不要为一次性问题写 Skill。</p></section>\n<section class=\"doc-section\"><h2>目录结构</h2><div class=\"code-block\"><pre><code>my-skill/\n  SKILL.md\n  scripts/\n  references/\n  assets/</code></pre></div></section>\n<section class=\"doc-section\"><h2>SKILL.md 元数据</h2><div class=\"code-block\"><pre><code>---\nname: example-skill\ndescription: Use when you need to ...\n---\n\n# 描述\n...\n\n# 使用步骤\n1.\n2.\n3.</code></pre></div></section>\n<section class=\"doc-section\"><h2>适合做成 Skill</h2><ul><li>固定的代码审查流程。</li><li>发布检查清单。</li><li>文档生成模板。</li><li>前端视觉验收流程。</li><li>安全扫描和报告格式。</li></ul></section>\n<section class=\"doc-section\"><h2>不适合做成 Skill</h2><ul><li>一次性任务。</li><li>普通代码问题。</li><li>还没有稳定流程的探索性工作。</li></ul></section>"
      },
      {
        "id": "mcp",
        "title": "MCP",
        "lead": "MCP 让 Codex 连接外部工具和上下文，但每个连接都要审查权限。",
        "body": "\n<section class=\"doc-section\"><h1>MCP：连接外部工具</h1><p class=\"lead\">MCP（Model Context Protocol）可以把数据库、浏览器、内部系统、文档平台接入 Codex。能力越强，权限边界越重要。</p></section>\n<section class=\"doc-section\"><h2>支持的传输方式</h2><ul><li>STDIO（本地命令）。</li><li>Streamable HTTP。</li><li>Bearer token。</li><li>OAuth。</li></ul></section>\n<section class=\"doc-section\"><h2>配置位置</h2><ul><li><code>~/.codex/config.toml</code></li><li>受信任项目的 <code>.codex/config.toml</code></li></ul></section>\n<section class=\"doc-section\"><h2>CLI 管理</h2><div class=\"code-block\"><pre><code>codex mcp\ncodex mcp login &lt;server-name&gt;</code></pre></div></section>\n<section class=\"doc-section\"><h2>常见用途</h2><ul><li>查询官方文档（context7、jina-reader）。</li><li>读取项目管理系统（Linear、Jira、Asana）。</li><li>访问只读数据库。</li><li>操作浏览器或设计工具。</li><li>连接内部知识库（Notion、Confluence）。</li></ul></section>\n<div class=\"warning\"><strong>注意：</strong>MCP 工具不一定被本地文件沙箱约束。它自己的认证、scope 和服务端权限必须单独管理。</div>"
      },
      {
        "id": "plugins",
        "title": "插件中文速查表",
        "lead": "Codex 插件把桌面端连接到浏览器、桌面应用、GitHub、Slack、文档、设计、数据和业务系统。",
        "body": "\n<section class=\"doc-section\"><h1>插件中文速查表</h1><p class=\"lead\">这里直接读取 <code>content/插件</code>。更新插件翻译文件后，刷新页面即可看到新内容。</p><div class=\"plugin-controls\"><input id=\"pluginSearch\" type=\"search\" placeholder=\"搜索插件名或中文介绍\"><select id=\"pluginCategory\"><option value=\"\">全部分类</option></select></div><div id=\"pluginList\" class=\"plugin-list\"></div></section>"
      },
      {
        "id": "plugin-management",
        "title": "浏览、安装、启用、卸载插件",
        "lead": "插件安装不是越多越好。桌面端应该按任务需要启用插件，并定期检查授权。",
        "body": "\n<section class=\"doc-section\"><h1>插件管理</h1><p class=\"lead\">插件会扩展 Codex 能看到和能做的事情。安装前先确认数据来源、权限范围和实际用途。</p></section>\n<section class=\"doc-section\"><h2>推荐流程</h2><ol><li>从插件目录搜索目标工具。</li><li>阅读插件介绍和权限要求。</li><li>安装并完成授权。</li><li>在任务里明确调用插件或让 Codex 判断是否需要。</li><li>任务结束后检查是否仍需保留授权。</li></ol></section>\n<div class=\"note\"><strong>实践：</strong>常用插件可以保留；偶发工具用完后撤销授权更稳妥。</div>"
      }
    ]
  },
  {
    "title": "实战工作流",
    "pages": [
      {
        "id": "workflow-codebase",
        "title": "理解陌生代码库",
        "lead": "进入新项目第一步不是改代码，而是让 Codex 写一份「项目说明书」。",
        "body": "\n<section class=\"doc-section\"><h1>理解陌生代码库</h1><p class=\"lead\">Codex 最便宜的用法之一，就是用它快速吃透一个陌生项目。</p></section>\n<section class=\"doc-section\"><h2>推荐提示词</h2><div class=\"code-block\"><pre><code>请只读分析这个项目。输出：\n1. 技术栈\n2. 目录结构\n3. 启动方式\n4. 测试方式\n5. 核心模块\n6. 风险点\n不要修改文件。</code></pre></div></section>\n<section class=\"doc-section\"><h2>让 Codex 画调用链</h2><ul><li>从路由到 service。</li><li>从 UI 到 API。</li><li>从测试失败到根因。</li></ul></section>\n<section class=\"doc-section\"><h2>产出架构文档</h2><p>把分析结果让 Codex 写进 <code>docs/architecture.md</code>，下次接手就直接读这份文档。</p></section>"
      },
      {
        "id": "workflow-feature",
        "title": "实现新功能",
        "lead": "实现新功能时先 plan，再写代码，再写测试。不要让 Codex 一次性吐一大坨。",
        "body": "\n<section class=\"doc-section\"><h1>实现新功能</h1><p class=\"lead\">把需求拆成 Goal / Context / Constraints / Done。</p></section>\n<section class=\"doc-section\"><h2>需求拆解模板</h2><div class=\"code-block\"><pre><code>Goal: 给设置页添加搜索框。\nContext: 当前设置页有 12 个分类项。\nConstraints:\n- 不引入新依赖\n- 不改路由\n- 保持现有 i18n 结构\nDone when:\n- 搜索框工作\n- 现有测试通过\n- 补一个搜索过滤的单元测试</code></pre></div></section>\n<section class=\"doc-section\"><h2>Plan first</h2><ul><li>复杂任务先 <code>/plan</code>。</li><li>确认方案再实现。</li><li>实现过程中分阶段产出 diff。</li></ul></section>\n<section class=\"doc-section\"><h2>小步提交</h2><ul><li>一个任务一个 diff。</li><li>先测试再扩展。</li><li>不要让 Codex 顺手做无关重构。</li></ul></section>"
      },
      {
        "id": "workflow-bugfix",
        "title": "修 Bug",
        "lead": "修 Bug 不要直接让 Codex 改代码，先给它复现路径，再让它做最小修复。",
        "body": "\n<section class=\"doc-section\"><h1>修 Bug</h1><p class=\"lead\">修 Bug 的关键是「最小修复 + 回归测试」。</p></section>\n<section class=\"doc-section\"><h2>给 Codex 错误上下文</h2><ul><li>错误日志。</li><li>复现步骤。</li><li>相关文件。</li><li>期望行为。</li></ul></section>\n<section class=\"doc-section\"><h2>最小修复</h2><div class=\"code-block\"><pre><code>请定位这个 bug，给出最小高置信修复。不要顺手做重构。修完后跑现有测试，并补一个回归测试。</code></pre></div></section>\n<section class=\"doc-section\"><h2>验证修复</h2><ul><li>重跑失败测试。</li><li>新增回归测试。</li><li>跑相关模块的全部测试。</li></ul></section>"
      },
      {
        "id": "workflow-test",
        "title": "写测试",
        "lead": "让 Codex 先识别测试框架，再补单元测试和集成测试。禁止它为了通过测试而降低断言。",
        "body": "\n<section class=\"doc-section\"><h1>写测试</h1><p class=\"lead\">测试是 Codex 最容易写漂亮但容易写错的方向。要明确禁止「为了绿而绿」。</p></section>\n<section class=\"doc-section\"><h2>第一步：识别测试框架</h2><ul><li>JavaScript：Jest / Vitest / Playwright。</li><li>Python：Pytest / unittest。</li><li>Go：testing。</li><li>Java：JUnit。</li></ul></section>\n<section class=\"doc-section\"><h2>单元测试</h2><ul><li>聚焦纯函数与边界条件。</li><li>覆盖典型输入、边界输入、错误输入。</li></ul></section>\n<section class=\"doc-section\"><h2>集成测试</h2><ul><li>API 端到端。</li><li>数据库实际交互。</li><li>UI 关键路径。</li></ul></section>\n<section class=\"doc-section\"><h2>禁止</h2><div class=\"warning\"><strong>底线：</strong>明确写「不允许为了通过测试而降低断言质量」。否则 Codex 可能把 assert 改弱。</div></section>"
      },
      {
        "id": "workflow-review",
        "title": "代码审查",
        "lead": "本地用 /review 看 diff，GitHub PR 让 Codex 自动评论。两者结合更稳。",
        "body": "\n<section class=\"doc-section\"><h1>代码审查</h1><p class=\"lead\">让 Codex 做 Reviewer 时，必须给它「审查清单」，否则它会写一堆模糊建议。</p></section>\n<section class=\"doc-section\"><h2>本地 Review</h2><div class=\"code-block\"><pre><code>/review\n\n审查清单：\n1. 行为回归\n2. 安全：注入、越权、密钥\n3. 性能：N+1、阻塞调用\n4. 错误处理\n5. 测试缺口\n请按清单逐项给结论与证据。</code></pre></div></section>\n<section class=\"doc-section\"><h2>GitHub PR Review</h2><ul><li>连接 GitHub 后，Codex 可以在 PR 里自动评论。</li><li>在评论里 @ 提及 Codex 可触发改动建议或实现。</li></ul></section>\n<section class=\"doc-section\"><h2>不要</h2><ul><li>用自动 Review 替代人工 Review。</li><li>把\"看起来 OK\"当成\"已审查\"。</li></ul></section>"
      },
      {
        "id": "workflow-refactor",
        "title": "重构与迁移",
        "lead": "重构必须在不改变行为的前提下进行。先加测试，再分阶段重构，最后给迁移说明。",
        "body": "\n<section class=\"doc-section\"><h1>重构与迁移</h1><p class=\"lead\">重构最大的风险是「顺手改了行为」。让 Codex 重构时必须强调\"行为不变\"。</p></section>\n<section class=\"doc-section\"><h2>重构原则</h2><ul><li>不改变行为。</li><li>先加测试，再开始重构。</li><li>分阶段提交，每阶段都跑测试。</li></ul></section>\n<section class=\"doc-section\"><h2>依赖升级</h2><ol><li>先读 changelog。</li><li>跑现有测试基线。</li><li>升级一个大版本就跑一次测试。</li><li>失败的用例单独修，不打包。</li></ol></section>\n<section class=\"doc-section\"><h2>大规模替换</h2><ul><li>使用脚本或 codemod。</li><li>Codex 负责生成和验证，人工负责边界审查。</li></ul></section>"
      },
      {
        "id": "workflow-frontend",
        "title": "前端 UI 开发",
        "lead": "前端任务必须配合开发服务器、截图、多视口检查。仅看代码不会发现视觉问题。",
        "body": "\n<section class=\"doc-section\"><h1>前端 UI 开发</h1><p class=\"lead\">让 Codex 写前端最容易翻车的环节是「代码看起来对，但浏览器里错」。</p></section>\n<section class=\"doc-section\"><h2>从截图生成 UI</h2><div class=\"code-block\"><pre><code>codex -i mockup.png \"请按这张设计稿在 components/Settings.tsx 还原界面，保持现有设计系统，移动端要可用。\"</code></pre></div></section>\n<section class=\"doc-section\"><h2>视觉验收</h2><ul><li>启动开发服务器。</li><li>浏览器截图。</li><li>多 viewport（桌面 / 平板 / 移动）。</li><li>键盘可达、可聚焦。</li></ul></section>\n<section class=\"doc-section\"><h2>常见提示词</h2><ul><li>指定设计系统。</li><li>指定组件库（如 shadcn / Radix / MUI）。</li><li>指定要做真实可用界面，而不是营销 demo 页。</li></ul></section>"
      }
    ]
  },
  {
    "title": "集成与自动化",
    "pages": [
      {
        "id": "integration-slack",
        "title": "Slack / Linear 等集成",
        "lead": "把任务来源从 Slack、Linear、Jira 接入 Codex，能减少人为搬运。",
        "body": "\n<section class=\"doc-section\"><h1>Slack / Linear 等集成</h1><p class=\"lead\">任务源越清晰，Codex 越能独立完成。</p></section>\n<section class=\"doc-section\"><h2>适合的场景</h2><ul><li>Slack 讨论结论 → 自动建任务。</li><li>Linear issue → 实现计划。</li><li>Jira 单 → 验收清单 → PR。</li></ul></section>\n<section class=\"doc-section\"><h2>输入质量</h2><ul><li>明确目标。</li><li>明确验收。</li><li>列出禁止改动。</li><li>给关键文件路径。</li></ul></section>"
      },
      {
        "id": "automation-ci",
        "title": "CI/CD 与 GitHub Action",
        "lead": "把 Codex 接进 CI 时，永远使用 exec 模式，固定权限与输出。",
        "body": "\n<section class=\"doc-section\"><h1>CI/CD 与 GitHub Action</h1><p class=\"lead\">CI 自动化的核心是「确定性」。Codex 在 CI 里必须像一个普通脚本一样输入清晰、输出可解析。</p></section>\n<section class=\"doc-section\"><h2>非交互任务</h2><ul><li><code>codex exec</code> 模式。</li><li>固定 <code>--ask-for-approval never</code>。</li><li>使用最小权限 profile。</li><li>固定输出文件路径。</li></ul></section>\n<section class=\"doc-section\"><h2>GitHub Action 示例</h2><div class=\"code-block\"><pre><code>- name: Run Codex review\n  env:\n    OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}\n  run: |\n    codex exec \\\n      --ask-for-approval never \\\n      -c sandbox=\":workspace\" \\\n      \"请审查本次 PR diff，按清单输出 markdown 报告到 reports/review.md\"</code></pre></div></section>\n<section class=\"doc-section\"><h2>失败处理</h2><ul><li>失败时输出日志和建议。</li><li>不自动重试危险操作。</li><li>把 Codex 输出当作建议，不作为门禁的唯一依据。</li></ul></section>"
      },
      {
        "id": "sdk",
        "title": "Codex SDK 与 App Server",
        "lead": "SDK 和 App Server 适合把 Codex 能力嵌入内部平台，做统一任务入口与审计。",
        "body": "\n<section class=\"doc-section\"><h1>Codex SDK 与 App Server</h1><p class=\"lead\">当 CLI 和 Web 都不够用时，再考虑 SDK / App Server。</p></section>\n<section class=\"doc-section\"><h2>什么时候需要 SDK</h2><ul><li>把 Codex 嵌入内部平台。</li><li>统一任务入口。</li><li>记录所有 prompt、工具调用、审批与结果。</li><li>对接公司 SSO、审计、计费系统。</li></ul></section>\n<section class=\"doc-section\"><h2>App Server</h2><p>App Server 面向更深度的自动化和集成，需要服务端部署、密钥管理和长运行进程。具体接口与示例以官方文档为准。</p></section>\n<section class=\"doc-section\"><h2>开始之前</h2><ul><li>明确租户隔离方案。</li><li>明确凭据存储方案。</li><li>明确审计日志保留周期。</li><li>明确权限审批 UI。</li></ul></section>"
      }
    ]
  },
  {
    "title": "安全与治理",
    "pages": [
      {
        "id": "personal-security",
        "title": "个人使用安全清单",
        "lead": "默认从低权限开始，敏感文件不进 prompt，危险命令前停下来。",
        "body": "\n<section class=\"doc-section\"><h1>个人使用安全清单</h1><p class=\"lead\">让 Codex 有能力做事，不等于给它无限权限。</p></section>\n<section class=\"doc-section\"><h2>第一周习惯</h2><ul><li>第一轮只读分析。</li><li>敏感项目先确认文件范围。</li><li>生产密钥不进入 prompt。</li><li>危险网页操作前要求 Codex 停下来确认。</li><li>大改动使用 Worktree 或 Cloud。</li></ul></section>\n<section class=\"doc-section\"><h2>敏感文件</h2><ul><li><code>.env</code>、<code>.env.*</code></li><li>私钥（<code>*.pem</code>、<code>*.key</code>）。</li><li>生产配置（<code>prod.*</code>、<code>*.production.*</code>）。</li><li>客户数据导出。</li></ul></section>\n<section class=\"doc-section\"><h2>危险命令</h2><div class=\"warning\"><strong>底线命令：</strong><code>rm -rf</code>、<code>git push --force</code>、<code>git reset --hard</code>、生产数据库命令、未授权上传命令、批量发送邮件 / Slack。</div></section>"
      },
      {
        "id": "enterprise-governance",
        "title": "企业治理与上线路径",
        "lead": "团队推 Codex 不靠人肉守规矩，靠 Managed config、Rules、Hooks、审计日志。",
        "body": "\n<section class=\"doc-section\"><h1>企业治理与上线路径</h1><p class=\"lead\">企业落地最常见的失败模式是「光发文档不发配置」。规矩没有强制力。</p></section>\n<section class=\"doc-section\"><h2>四件套</h2><div class=\"section-grid\"><div class=\"info-card\"><h3>Managed config</h3><p>统一配置下发，不允许用户绕过关键安全策略。</p></div><div class=\"info-card\"><h3>Rules</h3><p>统一命令级允许 / 提示 / 拒绝。</p></div><div class=\"info-card\"><h3>Hooks</h3><p>把日志、合规、扫描固化为生命周期脚本。</p></div><div class=\"info-card\"><h3>Audit Log</h3><p>记录 prompt、工具调用、审批决策、MCP 使用、网络允许 / 拒绝。</p></div></div></section>\n<section class=\"doc-section\"><h2>网络策略</h2><ul><li>限制外连域名。</li><li>允许本地服务。</li><li>禁止粘贴站、未知上传端点。</li></ul></section>\n<section class=\"doc-section\"><h2>上线路径</h2><ol><li>选低风险仓库试点。</li><li>定义权限基线。</li><li>建 AGENTS.md 模板。</li><li>配置日志和审计。</li><li>扩展到核心团队。</li><li>每月复盘事件与配置漂移。</li></ol></section>"
      }
    ]
  },
  {
    "title": "速查与附录",
    "pages": [
      {
        "id": "cli-cheatsheet",
        "title": "CLI 命令速查",
        "lead": "CLI 常用命令一页纸：启动、恢复、参数、MCP。",
        "body": "\n<section class=\"doc-section\"><h1>CLI 命令速查</h1></section>\n<section class=\"doc-section\"><h2>基础</h2><div class=\"code-block\"><pre><code>codex                    # 启动 TUI\ncodex \"任务\"             # 带任务启动\ncodex -C /path \"任务\"    # 切换目录\ncodex -i img.png \"任务\"  # 带图片\ncodex --version\ncodex --help</code></pre></div></section>\n<section class=\"doc-section\"><h2>安装与更新</h2><div class=\"code-block\"><pre><code>npm i -g @openai/codex\nnpm i -g @openai/codex@latest\nbrew install codex\ncurl -fsSL https://chatgpt.com/codex/install.sh | sh</code></pre></div></section>\n<section class=\"doc-section\"><h2>权限与配置</h2><div class=\"code-block\"><pre><code>codex --ask-for-approval on-request\ncodex --ask-for-approval never\ncodex --add-dir ../shared\ncodex -c model=\"gpt-5-codex\"\ncodex -c sandbox=\":workspace\"</code></pre></div></section>\n<section class=\"doc-section\"><h2>会话</h2><div class=\"code-block\"><pre><code>codex resume --last\ncodex resume &lt;SESSION_ID&gt;\ncodex fork --last\ncodex exec \"任务\"</code></pre></div></section>\n<section class=\"doc-section\"><h2>MCP</h2><div class=\"code-block\"><pre><code>codex mcp\ncodex mcp login &lt;server-name&gt;\ncodex mcp-server</code></pre></div></section>"
      },
      {
        "id": "slash-cheatsheet",
        "title": "Slash 命令速查",
        "lead": "Slash 命令一页纸：权限、模型、规划、上下文、扩展。",
        "body": "\n<section class=\"doc-section\"><h1>Slash 命令速查</h1></section>\n<section class=\"doc-section\"><h2>权限与模型</h2><ul><li><code>/permissions</code>、<code>/approve</code></li><li><code>/model</code>、<code>/fast</code></li></ul></section>\n<section class=\"doc-section\"><h2>规划与执行</h2><ul><li><code>/plan</code>、<code>/goal</code>、<code>/review</code></li></ul></section>\n<section class=\"doc-section\"><h2>上下文</h2><ul><li><code>/compact</code>、<code>/clear</code>、<code>/mention</code></li></ul></section>\n<section class=\"doc-section\"><h2>状态与诊断</h2><ul><li><code>/status</code>、<code>/diff</code>、<code>/agent</code>、<code>/copy</code></li></ul></section>\n<section class=\"doc-section\"><h2>扩展</h2><ul><li><code>/mcp</code>、<code>/skills</code>、<code>/plugins</code>、<code>/hooks</code></li></ul></section>\n<section class=\"doc-section\"><h2>退出</h2><ul><li><code>/exit</code>、<code>/quit</code></li></ul></section>"
      },
      {
        "id": "faq",
        "title": "FAQ",
        "lead": "常见疑问：上传、CLI vs App、AGENTS.md 不生效、danger-full-access、稳定性。",
        "body": "\n<section class=\"doc-section\"><h1>FAQ</h1></section>\n<section class=\"doc-section\"><h2>Codex 会不会上传我的全部代码？</h2><p>本地模式会把任务所需上下文发送给模型；具体内容取决于工具读取和上下文构建。敏感仓库应使用最小权限、审查上下文、企业合规设置。</p></section>\n<section class=\"doc-section\"><h2>CLI 和 App 用哪个？</h2><ul><li>终端重度用户：CLI。</li><li>需要 GUI、多项目、Computer Use：App。</li><li>编辑器内小步协作：IDE 扩展。</li><li>异步并行任务：Web / Cloud。</li></ul></section>\n<section class=\"doc-section\"><h2>为什么 Codex 没按我的规则做？</h2><ul><li>AGENTS.md 位置不对。</li><li>项目未被 trust。</li><li>规则写得不具体。</li><li>上下文被压缩后信息丢失。</li><li>任务提示和项目规则冲突，提示优先级更高。</li></ul></section>\n<section class=\"doc-section\"><h2><code>danger-full-access</code> 能不能日常用？</h2><p>不建议。除非在隔离容器、临时 VM、可回滚环境中。</p></section>\n<section class=\"doc-section\"><h2>如何让 Codex 更稳定？</h2><ul><li>写 AGENTS.md。</li><li>给清晰上下文。</li><li>复杂任务先 plan。</li><li>要求测试和 diff。</li><li>小步执行。</li><li>用 rules / hooks 固化边界。</li></ul></section>\n<section class=\"doc-section\"><h2>Codex 改了我不想改的文件怎么办？</h2><ul><li>立刻 <code>git checkout</code> 回滚相关文件。</li><li>在 AGENTS.md 加「禁止改动文件」清单。</li><li>用 Rules 把高风险路径 deny。</li><li>下次任务时用 Worktree 隔离。</li></ul></section>"
      },
      {
        "id": "glossary",
        "title": "术语表",
        "lead": "Codex 文档常见术语的中文释义。",
        "body": "\n<section class=\"doc-section\"><h1>术语表</h1></section>\n<section class=\"doc-section\">\n  <ul>\n    <li><strong>Agent</strong>：能通过工具和环境完成任务的智能体。</li>\n    <li><strong>Agent Loop</strong>：模型推理、工具调用、观察结果、继续推理的循环。</li>\n    <li><strong>TUI</strong>：终端用户界面，CLI 启动后的全屏交互界面。</li>\n    <li><strong>Sandbox</strong>：限制命令和文件访问的执行边界。</li>\n    <li><strong>Approval</strong>：越界或敏感操作前的人类审批。</li>\n    <li><strong>AGENTS.md</strong>：Codex 自动读取的项目指令文件。</li>\n    <li><strong>MCP</strong>：Model Context Protocol，连接外部工具和上下文的协议。</li>\n    <li><strong>Skill</strong>：可复用的任务工作流包。</li>\n    <li><strong>Plugin</strong>：可安装分发的技能、工具、配置集合。</li>\n    <li><strong>Hook</strong>：Codex 生命周期里的确定性脚本。</li>\n    <li><strong>Rule</strong>：控制命令是否允许、提示或拒绝的规则。</li>\n    <li><strong>Worktree</strong>：Git 工作树，用于隔离多任务改动。</li>\n    <li><strong>Thread</strong>：一段持续会话。</li>\n    <li><strong>Turn</strong>：一次「用户消息 → Codex 回复」的完整循环。</li>\n    <li><strong>Context</strong>：模型当前能看到的全部内容。</li>\n    <li><strong>Reasoning Effort</strong>：推理强度，low / medium / high / extra high。</li>\n    <li><strong>Fast Mode</strong>：速度优先的模型档位。</li>\n    <li><strong>Managed Configuration</strong>：组织统一下发的配置。</li>\n  </ul>\n</section>"
      }
    ]
  }
];
