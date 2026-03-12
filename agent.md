# simple-astro Agent Guide

## 项目概览

- 技术栈：`Astro 6` + `React 19`
- 包管理：当前已安装依赖，使用 `npm` 脚本即可
- 运行环境：`Node.js >= 22.12.0`
- 目标语言：页面文案以中文为主，`html lang` 为 `zh-CN`

## 常用命令

```bash
npm run dev
npm run build
npm run preview
```

## 目录结构

- `src/pages/index.astro`：站点首页入口
- `src/components/App.jsx`：主要 React 交互界面
- `src/layouts/Layout.astro`：基础页面布局
- `src/styles/global.css`：全局样式
- `src/registry/magicui/`：复用 UI 组件

## 当前页面现状

- 首页通过 `index.astro` 挂载 `App.jsx`
- 下载弹窗由 React `useState` 控制显示与关闭
- 页面定位是 `盖世游戏` 的 macOS 内测下载落地页
- 视觉和文案偏营销展示页，不是后台或多页面应用

## 开发约定

- 优先保持 Astro 负责页面结构，React 负责交互逻辑
- 新增组件时，优先放在 `src/components/`
- 使用 `@/` 指向 `src/` 下路径
- 除非必要，不要引入额外依赖
- 保持中文文案统一，避免中英文标点混用
- 修改交互时，优先复用现有按钮、弹窗和品牌图形组件

## 修改建议

- 做展示类改动时，优先调整 `App.jsx` 和 `global.css`
- 做 SEO 或页面头信息改动时，优先调整 `Layout.astro`
- 如果要接入真实下载链接或社群入口，先把 `#` 占位链接替换为真实地址
- 如果后续页面会继续扩展，建议把弹窗、Header、Hero 拆成独立组件

## Agent 工作方式

- 在动手前先确认改动目标是视觉、交互、文案还是结构
- 小改动尽量局部修改，避免无关重构
- 改完后至少检查构建或相关文件是否有明显错误
