<script>
export default {
    name: 'input-component',
    progs: {
        text: {
            type: String,
            required: true,
            // default: '' 可以給一個Default，沒有給的話顯示什麼
        }
    },
    computed: {
        //取值拿值都要
        inputText: {
            get() {
                return this.text
            },
            set(val) {
                // console.log(val)
                //打事件通知父組件
                // this.$emit('textchange',val)
                //更簡單寫法，要更新text這個progs，父組件也要跟著改
                this.$emit('update:text',val)
            }
        }
    }
}
</script>

<template src="./template.html"></template>
<style src="./style.css"></style>