<template>
  <div class="hello">
    <input type="text" v-model="msg" placeholder="change msg">
    <h1>{{msg}}</h1>
    <button v-on:click="increment">alert</button>
    <firstcomponent></firstcomponent>
    <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link>
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
