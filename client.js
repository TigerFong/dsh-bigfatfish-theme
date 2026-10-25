export const name = 'dsh-bigfatfish-client'

export function apply(ctx) {
  const style = document.createElement('style')
  // 这里直接使用你 GitHub 上的图片链接
  const bgUrl = 'https://raw.githubusercontent.com/TigerFong/dsh-bigfatfish-theme/main/Background/dsh-fat-fish.png'
  
  style.textContent = `
    body {
      background-image: url('${bgUrl}') !important;
      background-size: cover !important;
      background-position: center !important;
      background-attachment: fixed !important;
    }
    /* 加一层深蓝色毛玻璃遮罩，保证字看得清 */
    body::before {
      content: '';
      position: fixed; inset: 0;
      background: linear-gradient(135deg, rgba(20, 40, 80, 0.85), rgba(50, 100, 180, 0.5)) !important;
      backdrop-filter: blur(10px);
      z-index: -1;
      pointer-events: none;
    }
  `
  document.head.appendChild(style)

  // 卸载时恢复原样
  ctx.effect(() => () => {
    style.remove()
  })
}