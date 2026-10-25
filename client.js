export const name = 'dsh-bigfatfish-client'
export function apply(ctx) {
  const style = document.createElement('style')
  // 建议换成稳定的图床链接，或者本地相对路径
  const bgUrl = 'https://raw.githubusercontent.com/TigerFong/dsh-bigfatfish-theme/main/Background/dsh-fat-fish.png'
  
  style.textContent = `
    body {
      /* 直接用 linear-gradient 叠加在图片上，省去伪元素的 z-index 烦恼 */
      background-image: 
        linear-gradient(135deg, rgba(20, 40, 80, 0.85), rgba(50, 100, 180, 0.5)),
        url('${bgUrl}') !important;
      background-size: cover !important;
      background-position: center !important;
      background-attachment: fixed !important;
    }
  `
  document.head.appendChild(style)
  
  ctx.effect(() => () => {
    style.remove()
  })
}