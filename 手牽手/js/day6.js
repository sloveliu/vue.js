let data = {
  input: {
    type: '主廚的話',
    title: ''
  },
  menu: [
    {
      type: '主廚的話',
      title: '餐點簡介與相關說明',
      link: 'javascript:;'
    },
    {
      type: '餐具擺盤',
      title: '萬用白磁 VS Code 與套裝工具組',
      link: 'javascript:;'
    },
    {
      type: '開胃餐點',
      title: '中式資料綁定佐無毒jQuery畫面處理',
      link: 'javascript:;'
    },
    {
      type: '開胃餐點',
      title: '古早味事件燉畫面綁定',
      link: 'javascript:;'
    },
    {
      type: '開胃餐點',
      title: '清爽表單處理佐雙向資料',
      link: 'javascript:;'
    },
    {
      type: '開胃餐點',
      title: '使用者輸入焗列表呈現',
      link: 'javascript:;'
    },
    {
      type: '開胃餐點',
      title: '其間限定篩選佐資料轉換',
      link: 'javascript:;'
    },
    {
      type: '開胃餐點',
      title: '峰峰相連互動式資料表單',
      link: 'javascript:;'
    }
  ]
}
new Vue({
  el: '#app',
  data: data,
  methods: {
    inputHandler() {
      //有title的話才要做
      if (this.input.title) {
        //把選擇的type 及輸入的title push進來
        this.menu.push({
          type: this.input.type,
          title: this.input.title,
          link: 'javascript:;'
        })
        this.input.title = ''
      }
    }
  }
})
