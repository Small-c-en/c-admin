<template>
  <link rel="stylesheet" href="//at.alicdn.com/t/c/font_4498745_nego2s0z5w.css" />
  <div>
    <el-card shadow="hover">
      <div class="user-info">
        <div class="base-info">
          <div class="title">基本信息</div>
          <div class="avatar">头像</div>
          <div class="username">
            <span>用户名: </span>
            <span class="name">
              {{ '猪是的念来过倒' }}<span class="iconfont icon-bianji edit"></span
            ></span>
          </div>
        </div>
        <div class="security">
          <div class="title">安全设置</div>
          <div class="phone">
            <span>手机号绑定: </span>
            <span class="phone-num"
              >213123123
              <span class="iconfont icon-bianji edit"></span>
            </span>
          </div>
          <div class="email">
            <span>邮箱绑定: </span>
            <span class="phone-num"
              >213123123
              <span class="iconfont icon-bianji edit"></span>
            </span>
          </div>
          <div class="password">
            <span>登入密码: </span>
            <span class="editPass">点击进行修改</span>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>
<style lang="scss" scoped>
.edit {
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    color: #8e45b29f !important;
  }
}
.editPass {
  transition: all 0.3s linear;
  cursor: pointer;
  &:hover {
    color: #8e45b29f;
  }
}
.user-info {
  margin-left: 150px;
  display: flex;
  margin-top: 50px;
  margin-bottom: 50px;
  .base-info {
    .title {
      font-size: 28px;
      font-weight: 550;
      color: #8e45b29f;
    }
    .avatar {
      margin-top: 30px;
      height: 180px;
      width: 180px;
      border: 1px solid #ccc;
      border-radius: 10px;
    }
    .username {
      margin-top: 40px;
      span:nth-child(1) {
        font-size: 23px;
        color: #999;
      }
      .name {
        font-size: 18px;
        margin-left: 30px;
      }
    }
  }
  .security {
    // margin-top: 30px;
    margin-left: 200px;
    .title {
      font-size: 28px;
      font-weight: 550;
      color: #8e45b29f;
    }
    .phone,
    .email,
    .password {
      margin-top: 65px;
      span:nth-child(1) {
        font-size: 23px;
        color: #999;
      }
      span:nth-child(2) {
        font-size: 18px;
        margin-left: 30px;
      }
    }
  }
}
</style>
