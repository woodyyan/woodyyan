# Woody Yan — Personal Index

一个偏编辑部气质的个人主页，用来展示作品入口，而不是把所有作品堆在首页。

## 技术栈

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- Upstash Redis（作为 Vercel 上的轻量 KV 持久化）

## 本地开发

首次在本地使用 visitor 计数前，先把 Vercel 里的环境变量拉下来：

```bash
npx vercel@latest env pull .env.development.local
```

然后安装依赖并启动：

```bash
npm install
npm run dev
```

如果你不想立刻拉环境变量，也可以参考 `.env.example` 手动补上：

- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`

默认访问：`http://localhost:3000`

## 生产部署

当前线上部署目标是 Vercel；访客序号这类轻量动态数据通过 Upstash Redis 持久化。

### 运行要求

- Node.js 当前 LTS 版本
- 在部署环境中配置 `UPSTASH_REDIS_REST_URL` 与 `UPSTASH_REDIS_REST_TOKEN`

### 构建与启动

```bash
npm install
npm run build
npm run start
```

### Vercel 配置建议

- 在 Vercel 中安装 Upstash Redis 集成，或手动创建 Upstash Redis 数据库
- 将 `UPSTASH_REDIS_REST_URL` 和 `UPSTASH_REDIS_REST_TOKEN` 写入项目环境变量
- 环境变量生效后重新部署一次

## 需要你后续替换的内容

- `src/content/site-content.ts` 里的作品链接和文案
- `src/content/site-meta.ts` 里的邮箱、社交链接、地点信息
- 页面里的封面风格和作品标题
