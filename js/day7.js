let data = {
  menu: [
    {
      type: '主廚的話',
      title: '餐點簡介與相關說明',
      link: 'javascript:;'
    },
    {
      type: '餐盤擺放',
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
      type: '總燴拼盤',
      title: '復古總燴',
      link: 'javascript:;'
    }
  ],
  input: {
    type: '全部',
    title: ''
  }
}

new Vue({
  el: '#app',
  data: data,
  computed: {
    //篩選
    typeMenu() {
      if (this.input.type === '全部') {
        return this.menu
      } else {
        return this.menu.filter(item => {
          return item.type === this.input.type
        })
      }
    },
    titleMenu() {
      if (this.input.title) {
        return this.typeMenu.filter(item => {
          let content = item.title.toLowerCase()
          let keyword = item.input.toLowerCase()
          //找不到就是-1，找到就不是-1
          return content.indexOf(keyword) !== -1
        })
      } else {
        return this.typeMenu
      }
    }
  }
})
