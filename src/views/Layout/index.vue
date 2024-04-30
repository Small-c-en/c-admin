<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const router = useRouter()
let routerPath = ref('/layout')
const handSelect = (path) => {
  console.log(index)
  routerPath.value = path
}
</script>
<template>
  <div>
    <el-container style="height: 100vh">
      <!-- 左侧菜单栏模块 -->
      <el-aside width="300px">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
          <el-radio-button :value="false">expand</el-radio-button>
          <el-radio-button :value="true">collapse</el-radio-button>
        </el-radio-group>
        <el-menu
          :default-active="routerPath"
          style="width: 300px"
          :router="true"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          @open="handleOpen"
          @close="handleClose"
          @select="handSelect"
        >
          <el-menu-item index="/layout">
            <el-icon><icon-menu /></el-icon>
            <template #title>用户基本数据</template>
          </el-menu-item>
          <el-menu-item index="/layout/area">
            <el-icon><icon-menu /></el-icon>
            <template #title>用户地区分布</template>
          </el-menu-item>
          <el-menu-item index="/layout/article">
            <el-icon><icon-menu /></el-icon>
            <template #title>用户文章管理</template>
          </el-menu-item>
          <el-menu-item index="/layout/hot">
            <el-icon><icon-menu /></el-icon>
            <template #title>实时热点</template>
          </el-menu-item>
          <el-menu-item index="/layout/private">
            <el-icon><setting /></el-icon>
            <template #title>个人中心</template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="height: 80px">
          <div class="header-container">
            <div class="title">Welcome To Administration System</div>
            <div class="user-info">
              <div class="username">用户名：管理员</div>
              <el-dropdown>
                <div class="avatar"></div>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出登入</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </div>
        </el-header>
        <!-- 面包屑模块 -->
        <el-breadcrumb separator="/" style="padding-left: 20px; font-size: 18px">
          <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
          <el-breadcrumb-item>
            <a href="/">promotion management</a>
          </el-breadcrumb-item>
          <el-breadcrumb-item>promotion list</el-breadcrumb-item>
          <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
        </el-breadcrumb>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  .title {
    font-size: 32px;
    font-weight: 550;
    color: #8e45b2;
  }
  .user-info {
    display: flex;
    align-items: center;
    margin-right: 50px;
    .username {
      padding-right: 20px;
    }
    .avatar {
      cursor: pointer;
      height: 55px;
      width: 55px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  }
}
</style>
