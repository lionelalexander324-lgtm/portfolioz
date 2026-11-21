export type PortfolioItem = {
  id: string
  title: string
  category: 'campaign' | 'splash' | 'web' | 'motion'
  image?: string
  video?: string
  poster?: string
  description: string
  url?: string
  alt: string
}

export const campaigns: PortfolioItem[] = [
  { id: 'your-cover', title: 'Your Cover, Your Style', category: 'campaign', image: './assets/banners/your-cover-your-style.webp', description: '个性化封面活动 · 玩法构思、英文文案与上线视觉', url: 'https://d1m0okuba9ph2x.cloudfront.net/campaigns/your-cover-your-style/', alt: 'Your Cover, Your Style 活动横幅' },
  { id: 'slime-wish', title: 'Slime Wish Battle', category: 'campaign', image: './assets/banners/slime-wish-battle.webp', description: '史莱姆主题活动 · 活动规则、宣传素材与执行支持', url: 'https://d3q1f6luw4nkfq.cloudfront.net/campaigns/slime-wish-battle/', alt: 'Slime Wish Battle 活动横幅' },
  { id: 'true-love', title: 'True Love Arrives', category: 'campaign', image: './assets/banners/true-love-arrives.webp', description: '恋爱主题活动 · 聚焦情感互动的活动视觉', url: 'https://d1m0okuba9ph2x.cloudfront.net/campaigns/true-love-arrives/?v=2069d5e', alt: 'True Love Arrives 活动横幅' },
  { id: 'pinoy-henyo', title: 'Pinoy Henyo', category: 'campaign', image: './assets/banners/pinoy-henyo.jpg', description: '菲律宾猜词互动 · 房间玩法与活动素材', alt: 'Pinoy Henyo 猜词活动横幅' },
  { id: 'team-up', title: 'Team Up for Love', category: 'campaign', image: './assets/banners/team-up-for-love.jpg', description: '组队恋爱主题活动 · 视觉物料与互动机制', alt: 'Team Up for Love 活动横幅' },
  { id: 'family-leader', title: 'Family Leader Challenge', category: 'campaign', image: './assets/banners/family-leader-challenge.webp', description: '家族竞技活动 · 家族参与与挑战主题', url: 'https://d1m0okuba9ph2x.cloudfront.net/campaigns/family-leader/', alt: 'Family Leader Challenge 活动横幅' },
  { id: 'game-fever', title: 'Game Fever Challenge', category: 'campaign', image: './assets/banners/game-fever-challenge.webp', description: '游戏挑战活动 · 竞技氛围与激励信息', url: 'https://d1m0okuba9ph2x.cloudfront.net/campaigns/game-fever-challenge/', alt: 'Game Fever Challenge 活动横幅' },
  { id: 'owl-fortune', title: 'Owl Fortune Rush', category: 'campaign', image: './assets/banners/owl-fortune-rush.webp', description: '榜单主题活动 · 猫头鹰系列视觉呈现', url: 'https://d1m0okuba9ph2x.cloudfront.net/campaigns/owlrush/', alt: 'Owl Fortune Rush 活动横幅' },
]

export const splashVisuals: PortfolioItem[] = [
  { id: 'splash-cover', title: 'Your Cover, Your Style', category: 'splash', image: './assets/visuals/your-cover-opener.webp', description: '活动启动页', alt: 'Your Cover, Your Style 完整竖版启动页' },
  { id: 'splash-slime', title: 'Slime Wish Battle', category: 'splash', image: './assets/visuals/slime-wish-opener.webp', description: '活动启动页', alt: 'Slime Wish Battle 完整竖版启动页' },
  { id: 'splash-love', title: 'True Love Arrives', category: 'splash', image: './assets/visuals/true-love-opener.webp', description: '活动启动页', alt: 'True Love Arrives 完整竖版启动页' },
  { id: 'splash-owl', title: 'Owl Fortune Rush', category: 'splash', image: './assets/visuals/owl-fortune-opener.webp', description: '活动启动页', alt: 'Owl Fortune Rush 完整竖版启动页' },
]

export const webProjects: PortfolioItem[] = [
  { id: 'sea-treasure', title: '海洋兑换商店', category: 'web', image: './assets/web/sea-treasure.webp', description: '双商店、双货币兑换机制，让活动规则更直观。', url: 'https://lionelalexander324-lgtm.github.io/slime-sea-treasure-3/', alt: '海洋兑换商店真实网页截图' },
  { id: 'top-circle', title: 'Top Circle 会员权益', category: 'web', image: './assets/web/top-circle.webp', description: '高价值用户权益说明，呈现生日会与定制礼物等服务。', url: 'https://lionelalexander324-lgtm.github.io/topcircle/?lang=zh-TW#benefits', alt: 'Top Circle 会员权益真实网页截图' },
  { id: 'cp-battle', title: 'CP Battle', category: 'web', image: './assets/web/cp-battle.webp', description: '多轮二选一互动，选出最心仪的组合。', url: 'https://deansmith0502.github.io/aylio/', alt: 'CP Battle 真实网页截图' },
]

export const motionWorks: PortfolioItem[] = [
  { id: 'owl-kart', title: 'Owl Kart Entrance', category: 'motion', video: './assets/motion/owl-kart.mp4', poster: './assets/motion-posters/owl-kart.webp', description: '座驾进场动画', alt: '猫头鹰卡丁车进场动画' },
  { id: 'diamond', title: 'Diamond Shine', category: 'motion', video: './assets/motion/diamond-shine.mp4', poster: './assets/motion-posters/diamond-shine.webp', description: '活动动态效果', alt: '钻石闪耀活动动效' },
  { id: 'game', title: 'Game Time', category: 'motion', video: './assets/motion/game.mp4', poster: './assets/motion-posters/game.webp', description: '游戏主题座位框', alt: '游戏主题座位框动效' },
  { id: 'guitar', title: 'Guitar Mood', category: 'motion', video: './assets/motion/guitar.mp4', poster: './assets/motion-posters/guitar.webp', description: '吉他主题座位框', alt: '吉他主题座位框动效' },
  { id: 'reading', title: 'Reading Corner', category: 'motion', video: './assets/motion/reading.mp4', poster: './assets/motion-posters/reading.webp', description: '阅读主题座位框', alt: '读书主题座位框动效' },
  { id: 'sleeping', title: 'Sleepy Owl', category: 'motion', poster: './assets/motion-posters/sleeping.webp', description: '睡眠主题座位框 · GitHub 轻量版使用静态预览', alt: '睡觉主题座位框动效静态预览' },
  { id: 'purple-yellow', title: 'Purple × Yellow', category: 'motion', video: './assets/motion/purple-yellow.mp4', poster: './assets/motion-posters/purple-yellow.webp', description: '双人座位框', alt: '黄紫双人座位框动效' },
]

// TODO_ASSET: contactEmail / resumeUrl / socialUrl 尚未提供，页面不会渲染虚假联系方式。
export const contact = { contactEmail: '', resumeUrl: '', socialUrl: '' }
