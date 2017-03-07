<template>
  <div class="app-box">
    <section class="app-header"
      :style="{
        height: options.headerHeight,
      }"
    >
    <slot name="header"></slot>
    </section>
    <section>
      <aside class="app-sidebar scrollbar simple-scrollbar scrollbar-btn-none no-scroll"
        :class="options.theme"
        :style="{
          width: options.sidebarWidth,
          top: options.headerHeight,
          bottom: options.footerHeight,
        }"
      >

      <slot name="sidebar"></slot>
      </aside>
      <span class="sidebar-btn"></span>
      <section class="app-container scrollbar simple-scrollbar scrollbar-btn-none no-scroll"
        :style="{
          padding: options.headerHeight + ' 15px ' + options.footerHeight + ' 15px',
          'margin-left': options.sidebarWidth
        }"
      >
      <slot name="container"></slot>
      </section>
    </section>
    <section class="app-footer"
      :style="{
        height: options.footerHeight
      }"
    >
    <slot name="footer"></slot>
    </section>
  </div>
</template>

<script>
import './assets/scrollbar.css'

export default {
  name: 'admin-layout',
  props: {
    options: {
      type: Object,
      default () {
        return {
          theme: '',
          headerHeight: '50px',
          footerHeight: '50px',
          sidebarWidth: '180px'
        }
      }
    }
  }
}

</script>


<style scoped>
.app-box{
  position: relative;
  height: 100%;
  width: 100%;
  background: #FFFFFF;
}
.app-header{
  position: fixed;
  height: 50px;
  min-width: 100%;
  z-index: 1024;
  background: #009688;
}
.app-sidebar{
  background: #eee;
  position: fixed;
  top: 50px;
  left: 0;
  bottom: 50px;
  padding: 20px 0;
  width: 180px;
  /*min-width: 45px;*/
  max-height: 100vh;
  z-index: 1023;
  overflow-y: auto;
  overflow-x: hidden;
}
.app-container{
  /*background: #ccc;*/
  margin-left: 180px;
  padding: 50px 15px;
  padding-top: 50px;
}
.app-footer{
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  z-index: 1028;
  background: #E3E3E3;
}
</style>
