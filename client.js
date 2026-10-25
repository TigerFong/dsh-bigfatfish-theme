export const name = 'dsh-bigfatfish-client'

export function apply(ctx) {
  const style = document.createElement('style')
  // 建议：把图片下载到本地 'Background/dsh-fat-fish.png'，然后用相对路径，或者换个稳定的图床
  // 这里暂时保留你的链接，但加了备用颜色
  const bgUrl = 'https://raw.githubusercontent.com/TigerFong/dsh-bigfatfish-theme/main/Background/dsh-fat-fish.png'
  
  style.textContent = `
    body, #app, .main-container {
      /* 强制设置背景，如果图片加载失败会显示深蓝色渐变 */
      background: 
        linear-gradient(135deg, rgba(20, 40, 80, 0.85), rgba(50, 100, 180, 0.5)),
        url('${bgUrl}') !important;
      background-size: cover !important;
      background-position: center !important;
      background-attachment: fixed !important;
      background-repeat: no-repeat !important;
    }
    
    /* 如果框架有特定的根容器，可能需要针对它设置 */
    html, body {
      min-height: 100vh !important;
      margin: 0 !important;
    }
  `
  
  document.head.appendChild(style)
  
  // 卸载时清理
  ctx.effect(() => () => {
    style.remove()
  })
}