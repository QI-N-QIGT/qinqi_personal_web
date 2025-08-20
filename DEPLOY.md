# 部署指南（中文）

本文档将指导你如何在本地预览与部署本静态个人主页，包括：
- 本地预览
- GitHub Pages 部署
- Netlify / Vercel 无服务器部署
- 自定义域名绑定

## 一、本地预览

由于这是一个纯静态网站（HTML/CSS/JS），你可以直接双击 index.html 在浏览器打开进行本地查看。

如需本地服务器（便于未来路由、跨域等场景），推荐使用以下方式之一：

- 使用 VS Code Live Server 插件
- 使用 Node.js 的 serve 工具

### 方式A：VS Code Live Server
1. 打开项目文件夹。
2. 安装并启用 Live Server 插件。
3. 右键 index.html -> "Open with Live Server"。

### 方式B：Node.js serve
1. 安装 Node.js（16+）。
2. 在项目根目录执行：
   ```bash
   npm -g i serve
   serve . -l 5173
   ```
3. 打开浏览器访问 http://localhost:5173

## 二、GitHub Pages 部署

### 方法1：使用 `main` 分支的根目录
1. 在 GitHub 新建仓库（如 `qi-qin-homepage`）。
2. 将本项目文件全部推送到仓库根目录。
3. 打开仓库 Settings -> Pages。
4. 在 Build and deployment 中，Source 选择 `Deploy from a branch`。
5. Branch 选择 `main`，Folder 选择 `/ (root)`，点击保存。
6. 稍等片刻，页面会在 `https://<你的GitHub用户名>.github.io/<仓库名>/` 上线。

### 方法2：使用 `gh-pages` 分支
1. 将静态文件（index.html 与 assets 目录）推送到 `gh-pages` 分支。
2. 在 Settings -> Pages 中，将 Branch 设置为 `gh-pages` 与 `/ (root)`。

## 三、Netlify / Vercel 部署

这两个平台都支持一键导入 GitHub 仓库部署静态站点。

### Netlify
1. 登录 Netlify，选择 "Add new site" -> "Import an existing project"。
2. 连接 GitHub 并选择仓库。
3. Build 命令留空，Publish directory 保持 `root`（即仓库根目录）。
4. 部署完成后可获得形如 `https://xxx.netlify.app` 的域名。

### Vercel
1. 登录 Vercel，选择 "New Project" 并导入 GitHub 仓库。
2. Framework Preset 选择 `Other`（因为是纯静态）。
3. Build & Output Settings 中：Build Command 留空，Output Directory 设为根目录（默认）。
4. 部署完成后可获得形如 `https://xxx.vercel.app` 的域名。

## 四、自定义域名绑定

无论使用 GitHub Pages、Netlify 还是 Vercel，都可以在平台侧添加自定义域名，并在你的域名服务商设置 CNAME 记录指向平台提供的域名。

- GitHub Pages：在仓库 Settings -> Pages -> Custom domain 添加你的域名，同时在 DNS 配置 CNAME 指向 `<username>.github.io.`
- Netlify：在 Site settings -> Domain management 添加自定义域名，DNS 配置 CNAME 指向分配的 `xxx.netlify.app.`
- Vercel：在项目 Settings -> Domains 添加你的域名，DNS 配置 CNAME 指向分配的 `cname.vercel-dns.com.`

## 五、结构参考说明

本主页参考了 Hongyuan Yu 的个人主页的结构模块：顶部基本信息、新闻、Biography、论文分为期刊与会议两个分区、研究兴趣、获奖等。你可以根据需要继续添加模块，如：学生指导、开源项目、服务审稿、教学等。

## 六、常见问题

- 为什么点击导航无法滚动？
  - 当前未添加顶部导航，如需添加可在 header 内加入锚点链接，并给各 section 设置 id。
- 如何更换主题色？
  - 在 `assets/css/style.css` 中修改 `--primary` 变量即可。
- 如何更新年份？
  - 脚本已自动读取当前年份，无需手动修改。