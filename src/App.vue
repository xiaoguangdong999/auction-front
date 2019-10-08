<template>
  <div id="app">
  <el-container>
  <el-header>蜗牛拍拍
    
    <router-link to="/">买家登录</router-link>
    <router-link to="/sell-login">卖家登录</router-link>
  </el-header>
  <el-main>
    
     <router-view/>
  </el-main>
  <el-footer>蜗牛拍拍2019</el-footer>
</el-container>
   
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

.active {
  color: #0066cc
}
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
 
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    height: 800px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
    
  }
</style>
