import Vue from "vue";
import VueRouter from "vue-router"
//引入组件
import home from "./components/home.vue";
import about from  "./components/about.vue";
import  user from "./components/user.vue";
import  phone from "./components/phone.vue";
import  pad from "./components/pad.vue";
import  computer from "./components/computer.vue";
//要告诉vue 要使用vueRouter
Vue.use(VueRouter);

const routes=[
  {
    path:"/home",
    component:home,
    //引入children嵌套路由
    children:[
      { path:"phone",component:phone },
      { path:"pad",component:pad },
      { path:"computer",component:computer },
      // 当进入到home时，下面的组件显示
      { path: "", component: phone }
    ]
  },
  {
    path:"/about",
    component:about
  },
  {
    path:'/user/:id',
    component:user
  },
  {
      path:'/',
      redirect:'/home'
  }
];
var router=new VueRouter({
  routes
});
export default router;
