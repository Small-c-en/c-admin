<script setup>
import { defineProps } from 'vue'

defineProps({
  tableData: {
    type: Array
  }
})
</script>
<template>
  <div>
    <el-table :data="tableData" style="width: 100%; margin-top: 30px; font-size: 16px">
      <el-table-column prop="nickname" label="昵称" width="190" />
      <el-table-column prop="title" label="文章标题" width="380" />
      <el-table-column prop="date" label="发布时间" />
      <el-table-column prop="address" label="地区" />
      <el-table-column prop="edit" label="文章审核">
        <template #default>
          <slot></slot>
          <!-- <el-button type="success" @click="handleClick" plain>通过审核</el-button>
          <el-button type="danger" plain>未通过</el-button> -->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
