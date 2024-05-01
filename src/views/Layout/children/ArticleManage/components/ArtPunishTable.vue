<script setup>
import { defineProps, ref } from 'vue'
import ArticleDiaBody from './ArticleDiaBody.vue'

defineProps({
  tableData: {
    type: Array
  }
})

const centerDialogVisible = ref(false)
// const curRowData = ref() //插槽传值
//点击table每行触发函数
const handBack = (value) => {
  // console.log(value)
}
const handDel = () => {}
const handSeek = (value) => {
  console.log(value)
  centerDialogVisible.value = true
}
</script>
<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%; margin-top: 40px; font-size: 16px"
    >
      <el-table-column prop="nickname" label="昵称" width="190" />
      <el-table-column prop="title" label="文章标题" width="380" />
      <el-table-column prop="date" label="发布时间" />
      <el-table-column prop="address" label="地区" />
      <el-table-column prop="edit" label="文章审核">
        <template #default="obj">
          <el-button type="primary" @click="handSeek(obj)" plain>查看文章</el-button>
          <el-button type="success" @click="handBack(obj)" plain>撤回</el-button>
          <el-button type="danger" @click="handDel(obj)" plain>下架</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 显示弹窗 展示文章信息 -->
    <el-dialog v-model="centerDialogVisible" title="用户文章信息" width="750" align-center>
      <ArticleDiaBody></ArticleDiaBody>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="centerDialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="centerDialogVisible = false"> Confirm </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<style scoped lang="scss"></style>
