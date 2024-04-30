<script setup>
import { Search } from '@element-plus/icons-vue'
import { isShallow, ref } from 'vue'
import ArticleTable from './components/ArticleTable.vue'
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
    nickname: 'Tom',
    title: 'tomorrow will bettertomorrow will bettertomorrow will bettertomorrow will better',
    date: '2016-05-03',
    address: 'Angeles'
  },
  {
    nickname: 'Tom',
    title: 'tomorrow will bettertomorrow will bettertomorrow will bettertomorrow will better',
    date: '2016-05-03',
    address: 'Angeles'
  },
  {
    nickname: 'Tom',
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
  },
  {
    nickname: 'bad',
    title: 'tomorrow will bettertomorrow will bettertomorrow will bettertomorrow will better',
    date: '2016-05-03',
    address: 'Angeles'
  }
])
const pageSize3 = ref(4)
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
        <ArticleTable :tableData="tableCheckData" v-if="aticleState === 'articleCheck'">
          <el-button type="success" @click="handleClick" plain>通过审核</el-button>
          <el-button type="danger" plain>未通过</el-button>
        </ArticleTable>
        <!-- 违规文章 -->
        <ArticleTable :tableData="punishTableData" v-else>
          <el-button type="primary" @click="handleClick" plain>撤回</el-button>
          <el-button type="danger" plain>下架</el-button>
        </ArticleTable>
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
