<template>
    <div class="form-body">
      
<div style="line-height: 100px;"><span>卖家登录</span></div>
  
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="手机号" prop="tel">
    <el-input placeholder="请输入手机号"  v-model="ruleForm.tel"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input placeholder="请输入密码" v-model="ruleForm.password" show-password></el-input>
  </el-form-item>
  
</el-form>
<el-button type="primary" @click="login('ruleForm')">立即登录</el-button>
  <el-button @click="regis('ruleForm')">注册</el-button>
</div>
</template>
<script>
 export default {
   name: "sell-login",
    data() {
      return {
        ruleForm: {
          tel: '',
          password: '',
          
        },
        rules: {
          tel: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { min: 11, max: 11, message: '长度为11个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 15, message: '长度在 6 到 15个字符', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      login(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      regis(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .form-body {
   width: 400px;
   margin: 0px auto;
 }

</style>