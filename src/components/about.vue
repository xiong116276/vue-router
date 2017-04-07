<template>
  <div>
    <h1>about</h1>
    <p>{{aboutMsg}}</p>
    <h3>加载动态数据</h3>
    <ol>
      <li v-for="article in articles">
        title:{{article.title}}
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    data (){
      return {
        aboutMsg:"I am about component",
        articles:[]
      }
    },
    mounted:function(){
        this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10',{},{
            headers:{

            },
            emulateJSON:true
        }).then(function (response) {
            this.articles=response.data.subjects
        },function(response){
            console.log(response);
        });
    }
  }
</script>
