<script setup>
import { getCurrentInstance, onMounted } from 'vue'
// 通过 internalInstance.appContext.config.globalProperties 获取全局属性或方
let internalInstance = getCurrentInstance()
let echarts = internalInstance.appContext.config.globalProperties.$echarts
onMounted(() => {
  const dom = document.getElementById('ageDistribute')
  const myChart = echarts.init(dom) // 初始化echarts实例
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    color: ['#c2a3e5'],
    xAxis: [
      {
        type: 'category',
        data: ['20-25', '25-30', '30-35', '35-40', '40-45', '45-50', '50-55'],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          fontSize: 16 // 设置 y 轴度标签的字体大小为 16px
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          show: true,
          formatter: '{value}%', // 将 y 轴的每个刻度标签转换为百分比形式
          fontSize: 16, // 设置 y 轴刻度标签的字体大小为 16px
          color: '#333' // 设置 y 轴刻度标签文本的颜色
        },
        min: 0,
        max: 100, // 设置最大值为 1，代表 100%
        interval: 25 // 设置合适的刻度间隔，以适应百分比的显示
      }
    ],
    series: [
      {
        name: 'proportion',
        type: 'bar',
        barWidth: '30%',
        data: [20, 40, 10, 15, 5, 6, 4]
      }
    ]
  }
  // 设置实例参数
  myChart.setOption(option)
})
</script>
<template>
  <div class="title">用户年龄分布</div>
  <div id="ageDistribute" style="height: 380px; width: 700px"></div>
</template>
<style scoped>
.title {
  margin-top: 20px;
  text-align: center;
  font-size: 28px;
  font-weight: 550;
  color: #c1a2e5;
}
</style>
