<script setup>
import { ref } from 'vue'
// import  from 'vue'
import TotalUser from '../components/TotalUser.vue'
import UserGender from '../components/UserGender.vue'
import CurtDesignUser from '../components/CurResignUser.vue'
import UserAreaDistribute from '../components/UserAreaDistribute.vue'
import UserAgeDistribute from '../components/UserAgeDistribute.vue'
</script>
<template>
  <div>
    <el-card style="width: 100%; height: 100%">
      <div class="top">
        <div class="total-user">
          <TotalUser></TotalUser>
        </div>
        <div class="cur-design">
          <CurtDesignUser></CurtDesignUser>
        </div>
        <div class="user-gender-distribute">
          <UserGender></UserGender>
        </div>
      </div>
      <div class="bottom">
        <div class="user-area-distribute">
          <div class="user-area-title">用户地区分布情况</div>
          <!-- <UserAreaDistribute style="margin-top: 15px"></UserAreaDistribute> -->
        </div>
        <div class="user-age-distribute">
          <UserAgeDistribute></UserAgeDistribute>
        </div>
      </div>
    </el-card>
  </div>
</template>
<style lang="scss" scoped>
.total-user {
  border: 1px solid #ccc;
  transition: all 0.3s linear;
  &:hover {
    box-shadow:
      rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }
}
.cur-user {
  height: 400px;
  width: 400px;
  border: 1px solid #ccc;
}
.user-gender-distribute {
  width: 400px;
  border: 1px solid #ccc;
  transition: all 0.3s linear;
  &:hover {
    box-shadow:
      rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }
}
.user-area-distribute {
  margin-bottom: 15px;
  // height: 400px;
  width: 800px;
  border: 1px solid #ccc;
  transition: all 0.3s linear;
  &:hover {
    box-shadow:
      rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }
}
.top {
  display: flex;
  .total-user {
  }
  .cur-design {
    margin: 0 15px;
    border: 1px solid #ccc;
    flex: 1;
    transition: all 0.3s linear;
    &:hover {
      box-shadow:
        rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    }
  }
}
.bottom {
  margin-top: 15px;
  display: flex;
  .user-age-distribute {
    flex: 1;
    margin-left: 15px;
    border: 1px solid #ccc;
    height: 472px;
    transition: all 0.3s linear;
    &:hover {
      box-shadow:
        rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    }
  }
  .user-area-title {
    margin-top: 20px;
    text-align: center;
    font-size: 28px;
    font-weight: 550;
    color: #c1a2e5;
  }
}
</style>
