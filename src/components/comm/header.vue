<template>
    <div class="header">
        <el-row type="flex" justify="center">
            <!--<el-col :span="2"><div class="grid-content"></div></el-col>-->
            <el-col :span="12">
                <div class="header-title grid-content">
                    <h1 class="title"><router-link to="/index/home">@让工具管理更简单<span class="version">亮点柜 v1.1.10</span></router-link></h1>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="header-right grid-content" v-show="islogin=='LOGIN'">
                    <strong>欢迎 </strong>
                    <el-dropdown trigger="click">
                        <span class="el-dropdown-link">
                            admin &nbsp;<i class="el-icon-caret-bottom el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item ><i class="el-icon-warning"></i>
                            <span>账号信息</span></el-dropdown-item>
                            <el-dropdown-item><i class="el-icon-time"></i> 
                            <span>修改密码</span></el-dropdown-item>
                            <el-dropdown-item><i class="el-icon-message"></i> 
                            <span >公司公告</span></el-dropdown-item>
                            <el-dropdown-item><i class="el-icon-circle-cross"></i>
                            <span > 退出系统</span></el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </el-col>
            <!--<el-col :span="2"></el-col>-->
        </el-row>
        
    </div>
</template>
<script>
// import {mapActions, mapState} from 'vuex'
export default {
  data () {
    return {
      islogin: 'LOGIN'
    }
  }

}
</script>
<style scoped>
.header{
    line-height: 50px;
    color: #fff;
}
.header a{
    color: #fff;
}
.grid-content {
    min-height: 1px;
}
.header-title .title{
    margin: 0;
    padding: 0;
    font-size: 1.5em; 
}
.header-title .title .version{
    font-size: 0.5em;
    font-weight: 400;
    margin-left: 5px;
    margin-top: -3px;
    padding: 3px 5px;
    border: solid 1px rgba(255, 255, 255, 0.48);
    border-radius: 3px;
}
.header-right{
    text-align: right;
}
.header-right .el-dropdown-link{
    padding: 5px;
    color: #fff;
    cursor: pointer;
}
.el-dropdown-menu{
    color: #423e3e;
    font-size: 0.9em;
}
</style>
