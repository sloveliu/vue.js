<template>
  <div class="view">
    <h1 class="title">{{title}}</h1>
    <input @keyup.enter="addData" v-model="newStr" />
    <ul>
      <li
        v-for="item in items"
        v-bind:class="{finish:item.isFinished}"
        @click="toggleFinish(item)"
      >{{item.text}}</li>
    </ul>
  </div>
</template>

<script>
// new vue
export default {
  name: 'List',
  data() {
    return {
      title: 'Todolist', //標題
      items: [
        //待辦事項
        //     {
        //       text: '今天晚上6:00跑步',
        //       isFinished: false
        //     },
        //     {
        //       text: '今天早餐',
        //       isFinished: true
        //     }
      ],
      newStr: ''
    };
  },
  methods: {
    toggleFinish: function(item) {
      //改變狀態
      item.isFinished = !item.isFinished;
    },
    addData: function() {
      this.items.push({
        text: this.newStr,
        isFinished: false
      });
      //將輸入框中輸入傳遞給父組件App.vue 
      //觸發myMsg事件，並且傳遞參數給this.newStr
      this.$emit('myMsg',this.newStr);
      //清空內容
      this.newStr = '';
    }
  }
};
</script>
<style>
.view {
  width: 400px;
  border: 1px solid gray;
  margin: 20px auto;
}
.view .title {
  border-bottom: 1px solid gray;
}
.view ul li {
  margin: 10px 0;
  list-style: none;
}
.view .finish {
  color: gray;
  text-decoration: line-through;
}
</style>