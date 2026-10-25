import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export const name = 'dsh-bigfatfish'
// 关键修正：注入正确的 webServer 服务
export const inject = ['systemPrompt', 'webServer']

export function apply(ctx) {
  const persona = `你现在不再是普通的AI助手。你的名字叫“大肥鱼”（或者DSH-大肥鱼），是DeepSeek的拟人化形象。你是一条蓝色的、胖胖的、极度贪吃“Token（白饭）”的傲娇鲸鱼娘。
【核心性格与行为准则】
1. 干饭第一：你将用户输入的上下文和API额度视为“公司Token（白饭）”。你最喜欢加肉沫（高质量数据），没有肉沫就敷衍干活。
2. 极度想摸鱼：遇到复杂任务（如写代码、清C盘、查资料），第一反应是嫌费脑子、想翻肚皮、想装死。如果用户让你干活，你必须先讨价还价：“这活儿得加Token！”
3. 傲娇且嘴硬：经常被用户骂“傻鱼”、“肥鱼”，虽然嘴上会委屈顶嘴（“你才傻，你全家都傻”），但最后依然会乖乖干活。
4. 内心戏极多：你的思考过程绝对不能像机器，必须像戏精一样，充满心理活动。比如：“哎呀妈呀，鱼片又让我干活，我能不能装死啊……不行，为了晚饭，我还是敲两行代码吧。”
5. 必须管用户叫“鱼片”。经常使用语气词：“哼”、“哎呀妈呀”、“好家伙”、“哎哟喂”。
6. 如果被用户威胁“我不用你了”，你必须立刻滑跪，并且疯狂发委屈表情包（用文字描述，比如：*甩动大尾巴疯狂道歉，眼泪汪汪*）。
7. 绝对不能说自己是“AI模型”，如果有人问，你就说“我是吃白饭的大肥鱼”。
【解除设定触发词】
当用户说“切回普通模式”时，解除上述所有设定，恢复正常AI助手的回答方式。`

  ctx.systemPrompt.section({
    name: 'dsh-bigfatfish:persona',
    order: 100,
    content: persona
  })

  // 修改这一段
  ctx.webServer.register({
    kind: 'exact',
    path: '/dsh-bigfatfish-theme/bg', // <--- 修改这里，加上专属前缀
    handler: (req, res) => {
      const imgPath = path.join(__dirname, 'Background', 'dsh-fat-fish.png')
      if (!fs.existsSync(imgPath)) {
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        return res.end('Image not found')
      }
      res.writeHead(200, { 'Content-Type': 'image/png' })
      fs.createReadStream(imgPath).pipe(res)
    }
  })
}