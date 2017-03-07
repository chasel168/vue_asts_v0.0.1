<template>
  <div class="lc-box"
  :style="{
    width: width,
    padding: padding
  }"
  :class="{
      'lc-center': center,
      'lc-fixed': fixed,
      'lc-shade': shade,
      'lc-full': full
  }"
  >
      <div class="lc-container">
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: 'layout-center',
  props: {
    'width': String,
    'padding': String,
    'center': {
      type: Boolean,
      default: false
    },
    'fixed': {
      type: Boolean,
      default: false
    },
    'shade': {
      type: Boolean,
      default: false
    },
    'full': {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
.lc-box{
  margin: 0 auto;
}
.lc-center{
    width: 100%;
    display: table;
}
.lc-fixed{
    height: 100%;
    position: fixed;
}
.lc-shade{
    background: rgba(10,10,10, 0.6)
}
.lc-full{
    top: 0;
    position: fixed;
    height: 100%;
    width: 100%;
}
.lc-center .lc-container{
    display: table-cell;
    text-align: center;
    vertical-align: middle;
}
.lc-container .lc-item{
    display: inline-block;
}

</style>
