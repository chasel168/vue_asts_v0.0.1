<template>
	<layout-center full fixed center>
		<img src="../../assets/404.jpg" alt=""><br/>
		<router-link to="/" tag="el-button">返回首页</router-link>
	</layout-center>
</template>

<script>
import LayoutCenter from '@/components/mdui/layout'

export default {
  name: 'error',
  components: {
    LayoutCenter
  }
}

</script>
