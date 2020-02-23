//定義專案有哪些路徑
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import William from './views/William.vue'
//注意這裡沒包About.vue William.vu 進來，因為下面的路由載路方式不同

Vue.use(Router)

//export 一個Router
export default new Router({
    routes: [
        {
            //一個路徑對應到一個Component
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            //不同的載入方法，差異在這樣做可以幫你把code分開來，要用開發者模式的network看，會多一個about.js，
            //好處是進到about頁，才會把東西載入進來
            component: () => import('./views/About.vue')
            //開發者模式可以看到在最前面有<link href="about.js" rel="prefetch"> 預備要獨的動作
        },
        {
            //一個路徑對應到一個Component
            path: '/william',
            name: 'william',
            // component: William,
            component: () => import(/*webpackChunkName: "William" */ './views/William.vue'),
            //子路由，路徑底下再開一層路徑
            children: [
                {
                    path:'info',
                    name:'william-info',
                    component: () => import(/*webpackChunkName: "Info" */ './views/Info.vue')
                },
                {
                    path:'youtube',
                    name:'william-youtube',
                    component: () => import(/*webpackChunkName: "youtube" */ './views/Youtube.vue')
                },
            ]
        },
        {   //網址/iron?day=10 query是10
            path:'/iron',
            redirect: '/iron/1'
            //沒傳參數就傳到1
            // component: () => import('./views/iron/index.vue') 這行簡化掉
        },
        {   //取一個day的名字 傳params，簡化為網址/iron/10
            path:'/iron/:day',
            component: () => import('./views/iron/index.vue')
        }
    ]
})