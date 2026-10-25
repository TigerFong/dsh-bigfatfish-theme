export const name = 'dsh-bigfatfish-client'

export function apply(ctx) {
  const style = document.createElement('style')
  
  // 背景图：直接读取你 GitHub 上的原图。
  // 注意：如果你发现图片加载不出来，说明国内直连 raw.githubusercontent.com 被墙了，可以尝试换图床。
  const bgUrl = 'https://raw.githubusercontent.com/TigerFong/dsh-bigfatfish-theme/main/Background/dsh-fat-fish.png'
  
  style.textContent = `
    /* 核心：只作用于我们专属标签的 body */
    body[data-dsh-bigfatfish] {
      --dsw-alias-bg-base: transparent !important;
    }
    
    /* 用伪元素铺满背景和遮罩，不干扰原有的 DOM 结构 */
    body[data-dsh-bigfatfish]::before {
      content: '';
      position: fixed; inset: 0;
      z-index: -1;
      pointer-events: none;
      background-image: 
        linear-gradient(135deg, rgba(20, 40, 80, 0.85), rgba(50, 100, 180, 0.5)),
        url('${bgUrl}');
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
    }
  `
  document.head.appendChild(style)
  
  // 给 body 打上专属标签
  document.body.setAttribute('data-dsh-bigfatfish', 'on')

  // 插件卸载时，自动移除标签和样式，恢复原样
  ctx.effect(() => () => {
    document.body.removeAttribute('data-dsh-bigfatfish')
    style.remove()
  })
}