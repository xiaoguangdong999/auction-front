<template>
<el-container>
    <el-aside width="200px">

    </el-aside>
    <el-main>Main</el-main>
  </el-container>
</template>
<script>
export default {
    name:'cus-index'
}
</script>
<style scoped>
.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
.el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>