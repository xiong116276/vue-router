# test

> first vue project
# 创建一个项目体验一下, 当然不要忘记安装vue-router
1， 在src 目录下新建两个组件，home.vue 和 about.vue。

2，在 App.vue中 定义\<router-link > 和 \</router-view>  。

3，在 src目录下再新建一个router.js 定义router, 就是定义 路径到 组件的 映射。

4，把路由注入到根实例中，启动路由。这里其实还有一种方法，就像store 注入到根实例中，我们可以在main.js中引入路由，注入到根实例中。

5，这时点击页面上的home 和about 可以看到组件来回切换。我们想让页面一加载进来就显示home页面，这需要重定向，所谓重定向，其实就是重新给它指定一个方向,这用到了redirect 配置。刚进入页面的时候，它的路径是 '/', 所以重新定义到home 。
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
