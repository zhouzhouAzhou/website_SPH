import Vue from 'vue'
import App from './App.vue'
//三级联动组件--全局组件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'

Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)

import store from './store';

import VueRouter from 'vue-router';
//引入路由器
import router from './router'
//引入插件
Vue.use(VueRouter)
Vue.config.productionTip = false
/* import {reqCategoryList} from '@/api'
reqCategoryList() */

import '@/mock/mockServe'
import 'swiper/css/swiper.css'

const a=1;
// 统一引入
import * as API from '@/api'
// console.log(API);

import ElementUI, { MessageBox } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

/* import { Button, Select } from 'element-ui';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select); */
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)

// or with options
/* const loadimage = require('./assets/loading.gif')
const errorimage = require('./assets/error.gif') */

Vue.use(VueLazyload, {
  preLoad: 1.3,
  /* error: errorimage,
  loading: loadimage, */
  attempt: 1
})

//自定义插件引入
import myPlugin from '@/plugins/myPlugins'
Vue.use(myPlugin,{name: 'ee'})

//引入表单校验插件，不需要对外暴露，只要执行即可
import '@/plugins/validate'

Vue.prototype.$msg=MessageBox
new Vue({
  render: h => h(App),
  store,
  router,
  beforeCreate() {
    Vue.prototype.$bus=this
    Vue.prototype.$API=API 

  }
}).$mount('#app')
