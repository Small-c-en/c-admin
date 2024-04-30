<script setup>
import { getCurrentInstance, onMounted } from 'vue'
// 通过 internalInstance.appContext.config.globalProperties 获取全局属性或方
let internalInstance = getCurrentInstance()
let echarts = internalInstance.appContext.config.globalProperties.$echarts
onMounted(() => {
  const dom = document.getElementById('GenderChart')
  const myChart = echarts.init(dom) // 初始化echarts实例
  const option = {
    color: ['#d7b0ee', '#85d3ed'],
    title: {
      text: '性别占比详情',
      textStyle: {
        color: '#c1a2e5',
        fontSize: 26
      },
      subtext: 'Age Ratio',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: ''
    },
    series: [
      {
        name: '占比',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 58, name: '女生' },
          { value: 42, name: '男生' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
  // 设置实例参数
  myChart.setOption(option)
})
</script>
<template>
  <div ref="GenderChart" id="GenderChart">总人数</div>
</template>
<style lang="scss" scoped>
div {
  height: 370px;
  width: 400px;
  top: 30px;
  left: 20px;
}
</style>
