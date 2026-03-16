export const userData = [
  { name: "Jenny", signature: "个人签名", level: "23", value: "¥2203.0", games: "49", hours: "253h", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jenny" },
  { name: "Jone", signature: "个人签名", level: "10", value: "¥13915.1", games: "227", hours: "984h", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jone" },
  { name: "Jilly", signature: "个人签名", level: "10", value: "¥376555.1", games: "3413", hours: "2661h", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jilly" },
  { name: "Jack", signature: "个人签名", level: "10", value: "¥1916", games: "172", hours: "399h", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jack" },
  { name: "Jane", signature: "个人签名", level: "10", value: "¥18.9", games: "1", hours: "97h", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane" },
  { name: "James", signature: "个人签名", level: "10", value: "¥5420", games: "88", hours: "120h", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James" },
  { name: "Alice", signature: "个人签名", level: "15", value: "¥890.0", games: "32", hours: "150h", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice" },
  { name: "Bob", signature: "个人签名", level: "12", value: "¥2500.5", games: "110", hours: "420h", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob" },
  { name: "Charlie", signature: "个人签名", level: "8", value: "¥120.0", games: "5", hours: "20h", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie" },
  { name: "David", signature: "个人签名", level: "20", value: "¥15600", games: "450", hours: "1200h", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David" },
]

export const firstRowUsers = userData.slice(0, 5)
export const secondRowUsers = userData.slice(5, 10)

export const gameCovers = [
  { id: 1, name: "黑神话：悟空", designation: "动作RPG", image: "/Rectangle 1161.png" },
  { id: 2, name: "艾尔登法环", designation: "开放世界RPG", image: "/Rectangle 1163.png" },
  { id: 3, name: "博德之门3", designation: "角色扮演", image: "/Rectangle 1165.png" },
  { id: 4, name: "赛博朋克2077", designation: "动作冒险", image: "/Rectangle 1167.png" },
  { id: 5, name: "只狼", designation: "动作冒险", image: "/Rectangle 1169.png" },
  { id: 6, name: "战神：诸神黄昏", designation: "动作冒险", image: "/Rectangle 1171.png" },
]

export const featurePreviewPhotoRows = [
  [
    { src: "/source_image.png", position: "50% 45%" },
    { src: "/image 185.png", position: "50% 50%" },
    { src: "/source_image.png", position: "55% 62%" },
    { src: "/image 185.png", position: "45% 38%" },
    { src: "/source_image.png", position: "48% 52%" },
  ],
  [
    { src: "/image 185.png", position: "52% 60%" },
    { src: "/source_image.png", position: "46% 40%" },
    { src: "/image 185.png", position: "50% 52%" },
    { src: "/source_image.png", position: "58% 66%" },
    { src: "/image 185.png", position: "43% 42%" },
  ],
  [
    { src: "/source_image.png", position: "50% 48%" },
    { src: "/image 185.png", position: "48% 56%" },
    { src: "/source_image.png", position: "56% 64%" },
    { src: "/image 185.png", position: "52% 44%" },
    { src: "/source_image.png", position: "44% 38%" },
  ],
]

export const filingLinks = {
  wenwangwen: "https://www.xiaoji.com/uploads/20250926/ae7d883ea2171c9fae092cb8599ce674.jpg",
  icp: "https://beian.miit.gov.cn/",
  gongan: "https://beian.mps.gov.cn/#/query/webSearch",
  faqCompatList: "https://gamesirworld.feishu.cn/sheets/ARMWs3ZZFhkdkBt6YuVcoqscnYb",
}

export const faqItems = [
  {
    question: "为何要采用内测的模式？",
    answer:
      "我们坚信各位玩家的反馈是提高产品体验的关键，希望通过开放 Mac 端测试让大家提前体验版本内容，帮助我们获得更真实的反馈和建议，以不断完善产品功能和体验。",
  },
  {
    question: "什么时候发布正式版？",
    answer:
      "我们正全力以赴地打磨产品，在保证进度的同时确保高品质的使用体验。最终将根据本次测试反馈和产品开发进展，决定是否延长内测体验时间或发布盖世游戏 Mac 端正式版本。",
  },
  {
    question: "如何绑定 Steam 账号？",
    answer:
      "进入 Mac 端后，点击顶部导航栏右侧的用户头像，打开个人信息弹窗。\n首次绑定 Steam 账号时，点击“立即登录 Steam”，通过账密或扫描二维码的方式授权绑定账号。\n绑定多个 Steam 账号时，点击个人中心后找到 Steam 账号管理的“添加账号”，通过账密或扫描二维码的方式授权绑定账号。",
  },
  {
    question: "如何导入游戏文件？",
    answer:
      "方式一：通过侧边栏或游戏库点击“导入游戏”，选择“添加游戏程序”，并选择格式为 exe 的文件；或选择“扫描文件夹”，系统将自动扫描文件夹中格式为 exe 的文件。\n方式二：拖拽当前设备中的 exe 文件到客户端内。\n方式三：双击当前设备中的 exe 文件。\n导入游戏文件后，系统会自动解析扫描后的游戏信息，同时支持编辑游戏封面图、游戏名称和简介。\n完成添加游戏后，将自动跳转游戏库。如果未查询到导入游戏，请点击系统顶部导航栏的刷新按钮再次查询。",
  },
  {
    question: "如何配置模拟器兼容性方案？",
    answer:
      "官方为部分游戏准备了兼容性配置方案（配置专属兼容性方案的游戏名单持续更新中），点击开始游戏即使用默认方案。\n也支持硬核玩家灵活配置专属方案。导入完成游戏文件后，进入游戏详情页，打开 Win 模拟器设置，管理模拟器容器和依赖组件。",
  },
  {
    question: "如何联系盖世游戏官方团队？",
    answer:
      "为了方便与各位玩家深度交流，我们为本次内测准备了 QQ 交流群（群号：1079246543）。社群中主要提供内测版本下载指引、问题答疑、征集体验反馈服务，欢迎各位加入！",
  },
]
