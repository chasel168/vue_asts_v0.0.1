<template>
  <div class="app-box"
    :class="newOptions.theme"
  >
    <section class="app-header"
      :style="newOptions.header"
    >
    <slot name="header"></slot>
    </section>
    <section class="app-body">
      <aside class="app-sidebar scrollbar simple-scrollbar scrollbar-btn-none no-scroll"
        :style="newOptions.sidebar"
      >
      <slot name="sidebar"></slot>
      </aside>
      <section class="app-container scrollbar simple-scrollbar scrollbar-btn-none no-scroll"
      :style="newOptions.container"
      >
      <slot name="container"></slot>
      <slot></slot>
      </section>
    </section>
    <section class="app-footer"
    :style="newOptions.footer"
    >
    <slot name="footer"></slot>
    </section>
  </div>
</template>

<script>
import './assets/scrollbar.css'

const defaultOptions = {
  theme: 'default',
  type: 0,
  header: {
    height: '50px'
  },
  footer: {
    height: '50px'
  },
  sidebar: {
    width: '150px'
  },
  container: {
  }
}

export default {
  name: 'my-admin',
  props: ['options'],
  computed: {
    newOptions: function () {
      for (let key in this.options) {
        // console.log(typeof this.options[key])
        // console.log(this.options[key] instanceof Object)
        let type = typeof this.options[key]
        if (type === 'string' || type === 'number') {
          defaultOptions[key] = this.options[key]
        } else {
          defaultOptions[key] = Object.assign({}, defaultOptions[key], this.options[key])
        }
      }
      let dfo = defaultOptions
      dfo.container.left = dfo.sidebar.width
      dfo.container.top = dfo.header.height
      dfo.container.bottom = dfo.footer.height
      switch (dfo.type) {
        case 1:
          dfo.sidebar.top = 0
          dfo.sidebar.bottom = 0
          dfo.header.left = dfo.sidebar.width
          dfo.footer.left = dfo.sidebar.width
          break
        case 2:
          dfo.header.left = 0
          dfo.sidebar.top = dfo.header.height
          dfo.sidebar.bottom = 0
          dfo.footer.left = dfo.sidebar.width
          break
        case 3:
          dfo.sidebar.top = 0
          dfo.sidebar.bottom = dfo.footer.height
          dfo.header.left = dfo.sidebar.width
          dfo.footer.left = 0
          break
        default:
          dfo.sidebar.top = dfo.header.height
          dfo.sidebar.bottom = dfo.footer.height
          dfo.header.left = 0
          dfo.footer.left = 0
      }
      return dfo
    }
  }
}
</script>
<style scoped>
.app-box,
.app-header,
.app-sidebar,
.app-container,
.app-footer{
  box-sizing: border-box;
}

.app-box{
  width: 100%;
  height: 100%;
  position: absolute;
  background: #fff;
  z-index: 1024;
}
/*.app-box{
  width: 800px;
  height: 400px;
}*/
.app-header{
  left: 0;
  right: 0;
  height: 50px;
  background: #009688;
  position: absolute;
  color: #fff;
  z-index: 1028;
}
.app-sidebar{
  position: absolute;
  width: 150px;
  top: 50px;
  bottom: 50px;
  background: #E4E8F1;
  overflow: auto;
  z-index: 1025;

}
.app-container{
  position: absolute;
  top: 50px;
  left: 150px;
  bottom: 50px;
  right: 0;
  overflow: auto;
  background: #fff;
  z-index: 1026;
}
.app-footer{
  height: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  background: #EEEEEE;
  z-index: 1027;
}
/**theme**/
.app-box.dark .app-header{
    background: #324157;
}
.app-box.dark .app-sidebar{
  background: #282C34;
  color: #fff;
}
.app-box.dark .app-footer{
  background: #afafaf;
}




</style>
