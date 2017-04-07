<template>
  <div class="hello">
    <input type="text" v-model="msg" placeholder="change msg">
    <h1>{{msg}}</h1>
    <button v-on:click="increment">alert</button>
    <h3>一、组件</h3>
    <firstcomponent></firstcomponent>
    <h3>二、路由</h3>
    <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link>
    <h3>三、动态路由</h3>
    <router-link to="/user/123">user123</router-link>
    <router-link to="/user/456">user456</router-link>
    <br>

    <router-view></router-view>
  </div>
</template>

<script>
  //引入组件
  import firstcomponent from './components/firstcomponent.vue';

  export default {
    name: 'hello',
    data(){//data要用函数
      return{
          msg: 'hello Vue!',
      }
    },
    methods:{
        increment:function () {
          alert(this.msg);
        }
    },
    components:{ firstcomponent }//注册组件
  }
</script>

<style>
  body{
    font-family: "microsoft yahei";
  }
</style>
