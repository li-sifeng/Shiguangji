# 拾光纪

这是一个基于 Node.js (Express) 的个人动态网站，适合部署到 Azure App Service。

## 功能
- 首页
- 关于页

## 本地运行
```powershell
npm install
npm start
```

## 部署到 Azure
1. 在 Azure 门户创建 App Service。
2. 连接 GitHub 仓库或使用本地部署。
3. 发布后即可通过 Azure 提供的域名访问。

## 目录结构
- app.js：应用主入口
- routes/：路由文件
- public/：静态资源

---
如需自定义页面内容，请修改 `routes` 和 `views` 目录下的相关文件。
