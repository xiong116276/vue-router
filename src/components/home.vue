<template>
  <div>
    <h1>home</h1>
    <p>{{msg}}</p>
    <h3>四、路由嵌套</h3>
    <p>
      <router-link to="/home/phone">Home-phone</router-link>
      <router-link to="/home/pad">Home-pad</router-link>
      <router-link to="/home/computer">Home-computer</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
      data (){
          return {
              msg:"I am home component",
          }
      }
  }
</script>
