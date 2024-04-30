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
    dataset: {
      source: [
        ['score', 'amount', 'product'],
        [5, 18212, 'Matcha Latte'],
        [14, 28254, 'Milk Tea'],
        [20, 31032, 'Cheese Cocoa'],
        [35, 42755, 'Cheese Brownie'],
        [55, 50145, 'Matcha Cocoa'],
        [67, 79146, 'Tea'],
        [71, 91852, 'Orange Juice'],
        [74, 91852, 'Lemon Juice'],
        [96, 120112, 'Walnut Brownie']
      ]
    },
    grid: { containLabel: true },
    xAxis: { name: '数量' },
    yAxis: { type: 'category' },
    visualMap: {
      orient: 'horizontal',
      left: 'center',
      min: 10,
      max: 100,
      text: ['高', '低'],
      // Map the score column to color
      dimension: 0,
      inRange: {
        color: ['#9951a726', '#9951a7ba', '#8e45b2']
      }
    },
    series: [
      {
        type: 'bar',
        encode: {
          // Map the "amount" column to X axis.
          x: 'amount',
          // Map the "product" column to Y axis
          y: 'product'
        }
      }
    ]
  }
  // 设置实例参数
  myChart.setOption(option)
})
</script>
<template>
  <div class="title">标签实时热度</div>
  <div id="curResign" style="height: 750px; width: 900px"></div>
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
