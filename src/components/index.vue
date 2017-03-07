<template>
    <my-admin :options="layout">
        <headerbar slot="header"></headerbar>
        <app-menu slot="sidebar"></app-menu>
        <template slot="container">
            <router-view></router-view>
        </template>        
        <footerbar slot="footer"></footerbar>
    </my-admin>
</template>

<script>
import myAdmin from './mdui/my-admin'
import appMenu from './comm/menu'
import headerbar from './comm/header'
import footerbar from './comm/footer'
export default {
  name: 'login',
  data () {
    return {
      layout: {
        type: 1,
        theme: 'dark',
        sidebar: {
          width: '180px'
        }
      }
    }
  },
  components: {
    myAdmin,
    appMenu,
    headerbar,
    footerbar
  }
}
</script>
