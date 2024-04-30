<script setup>
import HotTags from './components/HotTags.vue'
</script>
<template>
  <div>
    <el-card style="width: 100%" shadow="hover">
      <div class="container">
        <Transition mode="fade-in">
          <div class="tags">
            <div class="title">话题实时热点</div>
            <div class="hot-topic-item" v-for="(item, index) in 20">
              <div class="left">
                <span class="rank" :class="{ 'rank-color': index + 1 > 3 }">{{ index + 1 }}</span>
                <div class="left-title">我是标题标题我是标题标题我是标题标题</div>
              </div>
              <div class="right-talk-num">20000万</div>
            </div>
          </div>
        </Transition>

        <div class="hot-topic">
          <HotTags></HotTags>
        </div>
      </div>
    </el-card>
  </div>
</template>
<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.rank-color {
  color: #c086ca !important;
}
.el-main {
  div {
    height: 100%;
    .el-card {
      height: 100%;
      background-color: #fafafa;
      .container {
        margin-top: 30px;
        margin-left: 20px;
        height: 850px;
        display: flex;
        .tags {
          box-sizing: border-box;
          padding: 15px;
          width: 600px;
          border: 1px solid #ccc;
          background-color: white;
          overflow: scroll;
          .title {
            height: 20px;
            padding: 0 0 20px;
            text-align: center;
            font-size: 28px;
            margin-top: 15px;
            font-weight: 550;
            color: #9b69d59e;
            text-align: center;
          }
          .hot-topic-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 15px;
            padding: 10px 15px;
            height: 40px;
            // background-color: pink;
            .left {
              display: flex;
              align-items: center;
              margin-left: 20px;
              .rank {
                margin-right: 15px;
                font-size: 22px;
                font-weight: 800;
                color: #924ab3;
              }
              .left-title {
                line-height: 40px;
                font-size: 18px;
                width: 300px;
                text-overflow: ellipsis;
                text-wrap: nowrap;
                overflow: hidden;
              }
            }
            .right-talk-num {
              line-height: 40px;
              margin-right: 30px;
              color: #ccc;
            }
          }
        }
        .hot-topic {
          flex: 1;
          border: 1px solid #ccc;
          margin-left: 20px;
          margin-right: 20px;
          background-color: white;
        }
      }
    }
  }
}
</style>
