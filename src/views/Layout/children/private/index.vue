<template>
  <link rel="stylesheet" href="//at.alicdn.com/t/c/font_4498745_nego2s0z5w.css" />
  <div>
    <el-card shadow="hover">
      <div class="user-info">
        <div class="base-info">
          <div class="title">基本信息</div>
          <div class="avatar">
            <div class="mask">
              <span class="iconfont icon-bianji edit"></span>
            </div>
            <img
              src="https://ts4.cn.mm.bing.net/th?id=OIP-C.j1QJ73AX7jMZhltZ35RLLAHaG-&w=257&h=242&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
              alt=""
            />
          </div>
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
      position: relative;
      margin-top: 35px;
      cursor: pointer;
      height: 180px;
      width: 180px;
      border: 1px solid #ccc;
      overflow: hidden;
      border-radius: 10px;
      .mask {
        display: flex;
        opacity: 0;
        position: absolute;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.447);
        border-radius: 5px;
        transition: all 0.4s linear;
        .iconfont {
          color: white;
          font-weight: 600;
          font-size: 28px;
        }
      }
      &:hover .mask {
        opacity: 1;
      }
      img {
        height: 100%;
        width: 100%;
      }
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
