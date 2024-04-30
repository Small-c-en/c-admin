<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useTransition } from '@vueuse/core'
import dayjs from 'dayjs'
import { ChatLineRound, Male } from '@element-plus/icons-vue'

//统计人数
const source = ref(0)
const outputValue = useTransition(source, {
  duration: 1500
})
source.value = 172000

// 日期计时
const currentTime = ref()
const getCurTime = () => {
  const now = new Date()
  let hours = now.getHours()
  let minutes = now.getMinutes()
  let seconds = now.getSeconds()

  // 添加零以确保时、分、秒是两位数
  let hour = hours < 10 ? '0' + hours : hours
  let minute = minutes < 10 ? '0' + minutes : minutes
  let second = seconds < 10 ? '0' + seconds : seconds

  currentTime.value = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}   ${hour}:${minute}:${second}`
}

const timer = ref()
onMounted(() => {
  timer.value = setInterval(() => {
    getCurTime()
  }, 1000)
})

onUnmounted(() => {
  clearInterval(timer.value)
})
</script>
<template>
  <div>
    <div class="container">
      <div class="total-num">
        <div class="title">注册用户总人数</div>
        <el-statistic :value="outputValue" />
      </div>
      <div class="current-num">
        <div class="title">在线总人数</div>
        <el-statistic :value="outputValue" />
      </div>
    </div>
    <div class="cur-time">
      <div class="title">当前时间</div>
      {{ currentTime }}
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  display: flex;
  width: 400px;
  justify-content: space-around;
  .total-num,
  .current-num {
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      font-weight: 550;
      font-size: 26px;
      margin-top: 50px;
      color: #c1a2e5;
    }
    ::v-deep .el-statistic {
      margin-top: 30px;
      .el-statistic__content {
        .el-statistic__number {
          font-size: 34px;
          color: #8e45b2;
        }
      }
    }
  }
}
.cur-time {
  font-size: 28px;
  color: #999;
  text-align: center;
  margin-top: 80px;
  .title {
    padding-bottom: 10px;
  }
}
</style>
