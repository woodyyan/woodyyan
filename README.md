# Woody Yan — Personal Index

一个偏编辑部气质的个人主页，用来展示作品入口，而不是把所有作品堆在首页。

## 技术栈

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- Node 内置 `node:sqlite`

## 本地开发

```bash
npm install
npm run dev
```

默认访问：`http://localhost:3000`

## 生产部署

这个项目已经启用 `output: "standalone"`，适合部署到自有服务器。

### 运行要求

- Node.js 22.5+（需要内置 `node:sqlite` 支持）

### 构建与启动

```bash
npm install
npm run build
npm run start
```

### 建议部署方式

- 使用 Nginx 反向代理到 `next start` 运行的端口
- 使用 PM2 / systemd 守护进程
- 将站点根目录下的 `data/` 保留为可写目录，用于保存 SQLite 访客数据

## 需要你后续替换的内容

- `src/content/site-content.ts` 里的作品链接和文案
- `src/content/site-meta.ts` 里的邮箱、社交链接、地点信息
- 页面里的封面风格和作品标题
