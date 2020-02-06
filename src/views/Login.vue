<template>
  <el-form ref="form" :model="form" :rules="rules" label-width="80px" class="login-box">
    <h1 class="login-title">欢迎登陆</h1>
    <el-form-item label="账号" prop="username">
      <el-input type="text" v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="form.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="login('form')">登陆</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    name: "Login.vue",
    data(){
      return{
        form:{
            username:'',
            password:''
        },
        // 表单验证，需要在 el-form-item 元素中增加 prop 属性
        rules: {
          username:[
            {required: true, message:'请输入账号',trigger:'blur'},
          ],
          password:[
            {required: true, message:'请输入密码',trigger:'blur'},
          ]

        }
      }
    },
    methods: {
      login: function (formName) {
        this.$refs[formName].validate((valid) =>{
          if (valid) {
            sessionStorage.setItem("isLogin","true");
            //有两个form,要用this.form
            console.log("asyn");
            this.$store.dispatch("asyncUpdateUser",this.form);

            this.$router.push("/main");
          }
          else {
            this.$message.error("请输入账号密码");
            return false;
          }
        });
      }
    }
  }
</script>

<style scoped>
  .login-box{

    width: 400px;
    border: 1px solid #DCDFE6;
    margin: 0 auto;
    margin-top: 150px;
    padding: 20px 50px 20px 20px;
    text-align: left;
    border-radius: 5px;
    box-shadow: 0 0 20px;
  }
  .login-title{
    text-align: center;
  }

</style>
