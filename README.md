# T-Dash Web

这是 T-Dash 的公开宣传网站仓库，用于 GitHub Pages 部署。App 主项目保持私有；这个仓库只包含展示页面、截图、演示视频、下载入口和隐私政策。

## 本地预览

在仓库根目录运行：

```bash
python3 -m http.server 8080
```

然后访问 `http://localhost:8080`。

## GitHub Pages 部署

1. 推送当前仓库到 GitHub。
2. 打开仓库 `Settings -> Pages`。
3. `Build and deployment` 选择 `Deploy from a branch`。
4. `Branch` 选择 `main`，目录选择 `/root`。
5. 保存后等待 GitHub Pages 构建完成。

## 下载发布

首页「安装包下载」会弹出三个二维码：App Store、Google Play、APK 直装。

1. 在 `script.js` 顶部修改 `DOWNLOAD_LINKS`，填入真实的 App Store 与 Google Play 链接。
2. 将 Android APK 放到 `assets/` 目录，默认文件名为 `tdash.apk`（可在 `DOWNLOAD_LINKS.apkFile` 中改名）。
3. 推送后 GitHub Pages 会自动更新；扫码 APK 二维码会打开当前站点的安装包地址。
