<script setup>
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'

const articleCheck = ref('articleCheck')
const radio3 = ref('articlePunish')

//数据
const tableData = [
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

const pageSize3 = ref(4)
</script>
<template>
  <div>
    <el-card style="width: 100%" shadow="hover">
      <el-row>
        <el-input v-model="input4" style="width: 320px" placeholder="进行文章搜索">
          <template #prefix>
            <el-icon class="el-input__icon"><search /></el-icon>
          </template>
        </el-input>
      </el-row>
      <div style="margin-top: 25px">
        <el-radio-group v-model="articleCheck" size="large">
          <el-radio-button label="文章审核" value="articleCheck" />
          <el-radio-button label="文章违规" value="articlePunish" />
        </el-radio-group>
      </div>
      <el-table :data="tableData" style="width: 100%; margin-top: 30px; font-size: 16px">
        <el-table-column prop="nickname" label="昵称" width="190" />
        <el-table-column prop="title" label="文章标题" width="380" />
        <el-table-column prop="date" label="发布时间" />
        <el-table-column prop="address" label="地区" />
        <el-table-column prop="edit" label="文章审核">
          <template #default>
            <el-button type="success" @click="handleClick" plain>通过审核</el-button>
            <el-button type="danger" plain>未通过</el-button>
          </template>
        </el-table-column>
      </el-table>
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
.el-main {
  div {
    height: 100%;
    .el-card {
      height: 100%;
    }
  }
}
.page-box {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  transform: scale(1.2); /* 调整分页组件的大小，0.8 表示缩小到原来的 80% */
}
</style>
