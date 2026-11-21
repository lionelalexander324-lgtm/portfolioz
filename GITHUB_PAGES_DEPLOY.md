# GitHub Pages 部署说明

这个版本已包含 `.github/workflows/deploy-pages.yml`，推送到 `main` 分支后会自动构建并部署。

1. 解压 GitHub 轻量部署包。
2. 把解压后的文件上传到一个新的 GitHub 仓库根目录，不要把 ZIP 文件本身直接上传。
3. 打开仓库 `Settings → Pages`，将 `Build and deployment / Source` 设为 `GitHub Actions`。
4. 打开 `Actions`，等待 `Deploy portfolio to GitHub Pages` 完成。
5. 部署地址会显示在工作流结果以及 `Settings → Pages` 中。

为避开网页上传和提交工具的文件体积限制，部署包对体积最大的 `Purple × Yellow` 视频进行了网页尺寸压缩；`Sleepy Owl` 在轻量包中使用它自己的真实视频封面作为静态预览。其余动态作品仍可播放，本地完整源码保留全部原始视频。
