let data = {
  menu: [
    { type: '主廚的話', title: '餐點簡介與相關說明', link: 'jacascript:;' },
    {
      type: '餐具擺盤',
      title: '萬用白瓷 VS Code 與套裝工具組',
      link: 'jacascript:;'
    },
    {
      type: '開胃餐點',
      title: '中式資料綁定佐無毒 jQuery 畫面處理',
      link: 'jacascript:;'
    },
    {
      type: '開胃餐點',
      title: '古早味事件燉畫面綁定',
      link: 'jacascript:;'
    },
    {
      type: '開胃餐點',
      title: '清爽表單處理佐雙向資料',
      link: 'jacascript:;'
    },
    {
      type: '開胃餐點',
      title: '使用者輸入焗列表呈現',
      link: 'jacascript:;'
    },
    {
      type: '開胃餐點',
      title: '期間限定篩選佐資料轉換',
      link: 'jacascript:;'
    },
    {
      type: '開胃餐點',
      title: '峰峰相連互動式資料表單',
      link: 'jacascript:;'
    },
    {
      type: '風味沙拉',
      title: '天然 CSS 過場佐 jQuery 動畫',
      link: 'jacascript:;'
    },
    {
      type: '風味沙拉',
      title: '異國風情資料觀測與設定',
      link: 'jacascript:;'
    },
    {
      type: '風味沙拉',
      title: '有機發酵生命週期',
      link: 'jacascript:;'
    },
    {
      type: '總匯拼盤',
      title: '家鄉通訊錄佐手作 API #1',
      link: 'jacascript:;'
    },
    {
      type: '總匯拼盤',
      title: '家鄉通訊錄佐手作 API #2',
      link: 'jacascript:;'
    },
    {
      type: '用餐插曲',
      title: '怎麼沒有魯肉飯!? 其他菜色瀏覽',
      link: 'jacascript:;'
    },
    {
      type: '餐具擺盤',
      title: '特製雕花 Vue-cli 3.0 與 Node.js 開發環境',
      link: 'jacascript:;'
    },
    {
      type: '主廚推薦',
      title: '科學單檔模組化料理',
      link: 'jacascript:;'
    },
    {
      type: '主廚推薦',
      title: '清燉嫩煮百頁路由',
      link: 'jacascript:;'
    },
    {
      type: '主廚推薦',
      title: '蜂蜜燴巢狀路由',
      link: 'jacascript:;'
    },
    {
      type: '主廚推薦',
      title: '五彩繽紛路由參數與監控',
      link: 'jacascript:;'
    },
    {
      type: '主廚推薦',
      title: '共享式集中數據管理大雜燴',
      link: 'jacascript:;'
    },
    {
      type: '主廚推薦',
      title: '精緻模組化數據塔',
      link: 'jacascript:;'
    },
    {
      type: '用餐插曲',
      title: '我吃不下了!! 食用順序的選擇與進程',
      link: 'jacascript:;'
    },
    {
      type: '總匯拼盤',
      title: '復古總匯 TodoList 燴路由模組',
      link: 'jacascript:;'
    },
    {
      type: '總匯拼盤',
      title: '復古總匯 TodoList 燴資料模組',
      link: 'jacascript:;'
    },
    {
      type: '總匯拼盤',
      title: '復古總匯 TodoList 燴頁面模組 #1',
      link: 'jacascript:;'
    },
    {
      type: '總匯拼盤',
      title: '復古總匯 TodoList 燴頁面模組 #2',
      link: 'jacascript:;'
    },
    {
      type: '總匯拼盤',
      title: '復古總匯 TodoList 燴頁面模組 #3',
      link: 'jacascript:;'
    },
    {
      type: '精選甜點',
      title: '靜態渲染 VuePress 漸層飲',
      link: 'jacascript:;'
    },
    {
      type: '精選甜點',
      title: '風情萬種 Nuxt.js 千層糕',
      link: 'jacascript:;'
    },
    {
      type: '主廚的話',
      title: '餐後心得與其他資訊',
      link: 'jacascript:;'
    }
  ],
  input: {
    //預設改為null
    type: null,
    title: null
  }
}

new Vue({
  el: '#app',
  data: data,
  computed: {
    typeList(){
      let obj = {
        sort: [],
        map: {}
      }
      this.menu.forEach(({type,title,link},index)=>{
        //如果這個類型還沒有篩選過
        if(!obj.map[type]) {
          //先push這個類型
          obj.sort.push(type)
          //第一次如果沒做過這個類型就先初始化
          obj.map[type] = {
            sort: [],
            map: {}
          }
        }
        //把標題push進去
        obj.map[type].sort.push(title)
        //把index跟link坐起來
        obj.map[type].map[title] = {index, link}
      })
      //完成後return obj
      return obj
    },
    titleList(){
      //先清掉變成請選擇，否則會是前一個選好的type篩選結果
      this.input.title = null
      //選了一個type我就產出相對應的
      if(this.input.type){
        //到分類的對應裡拿this.input.type 這一個類別
        return this.typeList.map[this.input.type]
      }else{ //沒有的話我就回傳一個空陣列
        return []
      }
    },
    content(){
      //如果你的title已經選了
      if(this.input.title){
        return this.titleList.map[this.input.title]
      }else{
        return null
      }
    }
  }
})
