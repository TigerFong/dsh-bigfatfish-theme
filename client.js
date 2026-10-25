export const name = 'dsh-bigfatfish-client'

export function apply(ctx) {
  const style = document.createElement('style')
  // 建议将图片放到本地 Background 文件夹，这里暂时用你的链接
  const bgUrl = 'https://raw.githubusercontent.com/TigerFong/dsh-bigfatfish-theme/main/Background/dsh-fat-fish.png'
  
  style.textContent = `
    /* 针对 DeepSeek 常见的容器结构 */
    body, #app, .app-container, .main-container, [data-theme] {
      background-image: 
        linear-gradient(135deg, rgba(20, 40, 80, 0.85), rgba(50, 100, 180, 0.5)),
        url('${bgUrl}') !important;
      background-size: cover !important;
      background-position: center !important;
      background-attachment: fixed !important;
      background-repeat: no-repeat !important;
      background-color: #1a1a1a !important; /* 备用底色 */
    }
    
    /* 确保背景铺满全屏 */
    html, body {
      min-height: 100vh !important;
      margin: 0 !important;
      padding: 0 !important;
    }
  `
  
  document.head.appendChild(style)
  
  ctx.effect(() => () => {
    style.remove()
  })
}
