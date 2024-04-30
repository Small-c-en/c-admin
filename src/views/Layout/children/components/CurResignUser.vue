<script setup>
import { color } from 'echarts'
import { getCurrentInstance, onMounted } from 'vue'
// 通过 internalInstance.appContext.config.globalProperties 获取全局属性或方
let internalInstance = getCurrentInstance()
let echarts = internalInstance.appContext.config.globalProperties.$echarts
onMounted(() => {
  const dom = document.getElementById('curResign')
  const myChart = echarts.init(dom) // 初始化echarts实例
  const option = {
    xAxis: {
      type: 'category',
      data: ['4-20', '4-21', '4-22', '4-23', '4-24', '4-25', '4-26'],
      axisLabel: {
        show: true,
        fontSize: 16
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        show: true,
        fontSize: 16, // 设置 y 轴刻度标签的字体大小为 16px
        color: '#333' // 设置 y 轴刻度标签文本的颜色
      }
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true,
        color: '#8e45b2'
      }
    ]
  }
  // 设置实例参数
  myChart.setOption(option)
})
</script>
<template>
  <div class="title">近七日用户注册情况</div>
  <div id="curResign" style="height: 330px; width: 640px; top: 20px"></div>
</template>
<style scoped>
.title {
  box-sizing: border-box;
  height: 20px;
  text-align: center;
  font-size: 28px;
  margin-top: 30px;
  font-weight: 550;
  color: #9b69d59e;
  text-align: center;
}
</style>
