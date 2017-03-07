<template>
  <el-menu class="el-menu-vertical-demo" :default-openeds="['1']" theme="dark">
    <el-submenu index="1">
      <template slot="title"><i class="el-icon-message"></i>基础设置</template>
      
      <el-menu-item-group>
        <template slot="title">分组一</template>
        <router-link  to="/index/vendor">
          <el-menu-item index="1-1"><i class="el-icon-share"></i> 供应商</el-menu-item>
        </router-link>
        <router-link  to="/index/light_box">
          <el-menu-item index="1-2"><i class="el-icon-star-off"></i> 亮点柜</el-menu-item>
        </router-link>
        <router-link  to="/index/machine">
          <el-menu-item index="1-3"><i class="el-icon-time"></i> 机台管理</el-menu-item>
        </router-link>
        <router-link  to="/index/class">
          <el-menu-item index="1-4"><i class="el-icon-check"></i> 班次管理</el-menu-item>
        </router-link>
        <router-link  to="/index/group">
          <el-menu-item index="1-5"><i class="el-icon-caret-top"></i> 班组管理</el-menu-item>
        </router-link>
        <router-link  to="/index/group">
          <el-menu-item index="1-6"><i class="el-icon-caret-top"></i> 物品分类</el-menu-item>
        </router-link>
        <router-link  to="/index/emp">
          <el-menu-item index="1-7"><i class="el-icon-upload"></i> 人员管理</el-menu-item>
        </router-link>
        <router-link  to="/index/notes_manage">
          <el-menu-item index="1-8"><i class="el-icon-message"></i> 公告管理</el-menu-item>
        </router-link>
        <router-link  to="/index/sys_ini">
          <el-menu-item index="1-9"><i class="el-icon-setting"></i> 系统设置</el-menu-item>
        </router-link>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title"><i class="el-icon-message"></i>生产管理</template>
      <router-link  to="/index/project" index="1-3">
        <el-menu-item index="2-1"><i class="el-icon-picture"></i> 项目管理</el-menu-item>
      </router-link> 
      <router-link  to="/index/product_plan" index="1-3">
        <el-menu-item index="2-2"><i class="el-icon-time"></i> 生产计划</el-menu-item>
      </router-link>
      <router-link  to="/index/product_arrange" index="1-3">
        <el-menu-item index="2-3"><i class="el-icon-arrow-right"></i> 生产派配</el-menu-item>
      </router-link> 
    </el-submenu>
  </el-menu>
  <!--<div class="sidebar">
    <div class="sidebar-menu">
      <ul class="menu-root">
          <li>
             <i class="el-icon-menu"></i> 基础设置

              <ul>
                 <li>
                   <i class="el-icon-date"></i> 生产管理
                   <ul class="menu-sub">
                      <li>
                        <router-link to="/index/project" class="section-link">
                          <i class="el-icon-picture"></i> 项目管理</router-link>
                      </li>
                      <li>
                        <router-link to="/index/product_plan" class="section-link">
                          <i class="el-icon-time"></i> 生产计划</router-link>
                      </li>
                      <li>
                        <router-link to="/index/product_arrange" class="section-link">
                          <i class="el-icon-arrow-right"></i> 生产派配</router-link>
                      </li>
                   </ul>

                  </li>
              </ul>
          </li>
      </ul>
    </div>
  </div>-->
</template>
