<script setup>
import { Search } from '@element-plus/icons-vue'
import { isShallow, ref } from 'vue'
import ArticleTable from './components/ArtCheckTable.vue'
import ArtPunishTable from './components/ArtPunishTable.vue'
const aticleState = ref('articleCheck')

const handToggle = (value) => {
  console.log(value)
  aticleState.value = value
}

//数据
const tableCheckData = [
  {
    nickname: 'Tom',
    title: 'tomorrow will bettertomorrow will bettertomorrow will bettertomorrow will better',
    date: '2016-05-03',
    address: 'Angeles'
  },
  {
    nickname: 'June',
    title: 'tomorrow will bettertomorrow will bettertomorrow will bettertomorrow will better',
    date: '2016-05-03',
    address: 'Angeles'
  },
  {
    nickname: 'Jack',
    title: 'tomorrow will bettertomorrow will bettertomorrow will bettertomorrow will better',
    date: '2016-05-03',
    address: 'Angeles'
  },
  {
    nickname: 'Adm',
    title: 'tomorrow will bettertomorrow will bettertomorrow will bettertomorrow will better',
    date: '2016-05-03',
    address: 'Angeles'
  }
]

const punishTableData = ref([
  {
    nickname: 'bad',
    title: 'tomorrow will bettertomorrow will bettertomorrow will bettertomorrow will better',
    date: '2016-05-03',
    address: 'Americal'
  },
  {
    nickname: 'bad',
    title: 'tomorrow will bettertomorrow will bettertomorrow will bettertomorrow will better',
    date: '2016-05-03',
    address: 'Angeles'
  },
  {
    nickname: 'bad',
    title: 'tomorrow will bettertomorrow will bettertomorrow will bettertomorrow will better',
    date: '2016-05-03',
    address: 'Angeles'
  },
  {
    nickname: 'bad',
    title: 'tomorrow will bettertomorrow will bettertomorrow will bettertomorrow will better',
    date: '2016-05-03',
    address: 'Angeles'
  }
])
const pageSize3 = ref(4)

const centerDialogVisible = ref(false) //控制对话框的显示和隐藏

//处理查看文章
const handSeek = (obj) => {
  centerDialogVisible.value = true //开启弹窗
  // console.log(obj)
}
//处理通过文章审核
const handSucsCheck = (obj) => {
  // console.log(obj)
}
//处理文章审核失败
const handFailCheck = (obj) => {
  // console.log(obj)
}
</script>
<template>
  <div>
    <el-card style="width: 100%" shadow="hover">
      <el-row>
        <el-input
          v-model="input4"
          style="width: 320px; margin-top: 20px"
          placeholder="进行文章搜索"
        >
          <template #prefix>
            <el-icon class="el-input__icon"><search /></el-icon>
          </template>
        </el-input>
      </el-row>
      <div style="margin-top: 40px">
        <el-radio-group v-model="aticleState" @change="handToggle" size="large">
          <el-radio-button label="文章审核" value="articleCheck" />
          <el-radio-button label="文章违规" value="articlePunish" />
        </el-radio-group>
      </div>
      <transition name="fade" mode="out-in">
        <!-- 审核文章 -->
        <ArticleTable
          :tableData="tableCheckData"
          v-if="aticleState === 'articleCheck'"
        ></ArticleTable>
        <!-- 违规文章 -->
        <ArtPunishTable :tableData="punishTableData" v-else> </ArtPunishTable>
      </transition>
      <div class="page-box">
        <el-pagination
          v-model:page-size="pageSize3"
          background
          layout="prev, pager, next"
          :total="1000"
        />
      </div>
    </el-card>
  </div>
</template>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.el-main {
  div {
    height: 100%;
    .el-card {
      position: relative;
      height: 100%;
      .page-box {
        position: absolute;
        height: 70px;
        bottom: 40px;
        left: 50%;
        transform: translateX(-50%) scale(1.2);
      }
    }
  }
}
.page-box {
}
</style>
