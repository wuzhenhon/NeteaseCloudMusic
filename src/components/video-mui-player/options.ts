// 配置选项
const customSetting = [
  {
    functions: '清晰度',
    model: 'select',
    show: true,
    zIndex: 0,
    childConfig: [
      { functions: '蓝光1080P' },
      { functions: '超清' },
      { functions: '高清', selected: true },
      { functions: '标清' }
    ],
    onToggle: function (data: any, selected: any, back: any) {
      console.log(data, selected, back)
      // Action
    }
  }
]
// 邮件菜单
const contextmenu = [
  {
    name: 'copyPlayUrl',
    context: '复制视频链接',
    zIndex: 0,
    show: true,
    click: function (close: any) {
      console.log(close)
      // Action...
    }
  }
]

export {
  customSetting,
  contextmenu
}