export const name = 'dsh-bigfatfish-client'

export function apply(ctx) {
  const style = document.createElement('style')
  style.textContent = `
    body[data-fat-fish-theme] {
      --dsw-alias-bg-base: transparent;
    }
    body[data-fat-fish-theme] .fat-fish-bg {
      position: fixed; inset: 0; z-index: -1;
      pointer-events: none;
      background-image: url('/fat-fish/bg');
      background-size: cover;
      background-position: center;
      opacity: 0.3;
    }
    body[data-fat-fish-theme]::before {
      content: '';
      position: fixed; inset: 0;
      background: linear-gradient(135deg, rgba(20, 40, 80, 0.8), rgba(50, 100, 180, 0.5));
      backdrop-filter: blur(10px);
      z-index: -2;
    }
  `
  document.head.appendChild(style)

  const bgDiv = document.createElement('div')
  bgDiv.className = 'fat-fish-bg'
  document.body.appendChild(bgDiv)
  document.body.setAttribute('data-fat-fish-theme', 'on')

  ctx.effect(() => () => {
    document.body.removeAttribute('data-fat-fish-theme')
    bgDiv.remove()
    style.remove()
  })
}