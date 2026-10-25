export const name = 'dsh-bigfatfish-client'

export function apply(ctx) {
  const style = document.createElement('style')
  
  // 如果 GitHub 图片在你的网络下加载不出来，请把图片放到插件目录的 Background 文件夹下，
  // 并将下面的链接改为 './Background/dsh-fat-fish.png'
  const bgUrl = 'https://raw.githubusercontent.com/TigerFong/dsh-bigfatfish-theme/main/Background/dsh-fat-fish.png'
  
  style.textContent = `
    /* 强制覆盖全局及常见容器背景 */
    html, body, #app, .app-container, .main-container, [data-theme] {
      background-color: #1a1a1a !important; /* 备用底色，防止图片加载失败 */
      background-image:
        linear-gradient(135deg, rgba(20, 40, 80, 0.85), rgba(50, 100, 180, 0.5)),
        url('${bgUrl}') !important;
      background-size: cover !important;
      background-position: center !important;
      background-attachment: fixed !important;
      background-repeat: no-repeat !important;
    }

    /* 确保铺满全屏 */
    html, body {
      min-height: 100vh !important;
      margin: 0 !important;
      padding: 0 !important;
    }
  `

  document.head.appendChild(style)

  // 卸载时清理
  ctx.effect(() => () => {
    style.remove()
  })
}