import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const Settings = {
  Domain: {
    'api': 'http://10.123.56.137:8008'
  }
}

const API = {
  'Country':{
    'getList': Settings.Domain.api + '/CountryManageService.asmx?op=GetAllCountry'
  }
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/home'
    },{
      path: '/home',
      name: 'home',
      component: resolve => require(['@/components/Home'], resolve),
    },
    {
      path: '/newlist/:listid',
      name: 'newlist',
      component: resolve => require(['@/components/NewList'], resolve),
    },
    {
      path: 'detail/:countryid',
      name: 'newdetail',
      component: resolve => require(['@/components/NewDetail'], resolve),
    }
  ]
})
