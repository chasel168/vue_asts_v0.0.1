import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function load (name) {
  return require('./components/' + name + '.vue')
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: load('login')
    },
    {
      path: '/admin',
      name: 'admin',
      component: load('index'),
      children: [
        // {path: '', name: 'home', component: load('home')},
        {path: 'home', name: 'home', component: load('home')}
      ]
    },
    {
      path: '*',
      name: 'error404',
      component: load('comm/error')
    }
  ]
})
