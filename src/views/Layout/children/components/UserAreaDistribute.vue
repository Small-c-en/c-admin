<template>
  <div class="app-container" v-loading="isLoading">
    <div class="title">用户主要地区分布</div>

    <div style="background-color: #ffffff">
      <div id="container"></div>
    </div>
  </div>
</template>

<script setup>
import AMapLoader from '@amap/amap-jsapi-loader'
import { onMounted, ref } from 'vue'
const isLoading = ref(true)
onMounted(() => {
  AMapLoader.load({
    key: '295727718d2f1c379d2bde186aa730a2', // 申请好的Web端开发者Key，首次调用 load 时必填
    version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: [],
    Loca: {
      // 是否加载 Loca， 缺省不加载
      version: '2.0.0' // Loca 版本，缺省 1.3.2
    }
  })
    .then((AMap) => {
      const map = new AMap.Map('container', {
        zooms: [4, 8],
        zoom: 5,
        showLabel: true,
        viewMode: '3D',
        center: [105.425968, 30.882505]
        // mapStyle: 'amap://styles/45311ae996a8bea0da10ad5151f72979'
      })
      // 创建 Loca 实例
      const loca = new Loca.Container({
        map: map,
        opacity: 1
      })
      var geo = new Loca.GeoJSONSource({
        url: 'https://a.amap.com/Loca/static/loca-v2/demos/mock_data/cuisine.json'
      })
      var pl = (window.pl = new Loca.PointLayer({
        zIndex: 10,
        blend: 'lighter'
      }))
      pl.addAnimate({
        key: 'radius',
        value: [0, 1],
        duration: 500,
        easing: 'Linear',
        transform: 2000,
        random: true,
        delay: 8000,
        yoyo: true,
        repeat: 100000
      })
      var style = {
        radius: 3.5,
        unit: 'px',
        color: '#3C1FA8',
        borderWidth: 0,
        blurWidth: 3.5
      }
      pl.setSource(geo)
      pl.setStyle(style)
      loca.add(pl)
      const pointLayer = new Loca.PointLayer({
        zIndex: 10,
        opacity: 1,
        visible: true,
        blend: 'lighter'
      })
      const dat = new Loca.Dat()
      dat.addLayer(pointLayer)
    })
    .catch((e) => {
      console.log(e)
    })
  isLoading.value = false
})
</script>

<style scoped>
.title {
  font-size: 38px;
  font-weight: 550;
  color: #c1a2e5;
  text-align: center;
  padding: 15px 0;
}
#container {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 800px;
}
</style>
