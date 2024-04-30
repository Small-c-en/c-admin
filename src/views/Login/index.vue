<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const ruleFormRef = ref(null)

const checkAge = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('Please input the age'))
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error('Please input digits'))
    } else {
      if (value < 18) {
        callback(new Error('Age must be greater than 18'))
      } else {
        callback()
      }
    }
  }, 1000)
}

const validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass')
    }
    callback()
  }
}

const validatePass2 = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else if (value !== ruleForm.pass) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  pass: '',
  checkPass: '',
  age: ''
})

const rules = reactive({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],
  age: [{ validator: checkAge, trigger: 'blur' }]
})

const Login = () => {
  router.push('/layout')
  ruleFormRef.value.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = () => {
  ruleFormRef.value.resetFields()
}
</script>
<template>
  <div class="login-box">
    <div class="login-container">
      <div class="title">体验官管理系统</div>
      <div class="input-container">
        <el-form
          ref="ruleFormRef"
          style="max-width: 600px"
          :model="ruleForm"
          status-icon
          :rules="rules"
          label-width="auto"
          class="demo-ruleForm"
        >
          <el-form-item label="管理员账号：" prop="pass">
            <el-input
              v-model="ruleForm.pass"
              type="password"
              placeholder="请输入"
              autocomplete="off"
            />
          </el-form-item>
          <el-form-item label="密码：" prop="checkPass">
            <el-input v-model="ruleForm.checkPass" type="password" autocomplete="off" />
          </el-form-item>
          <el-form-item>
            <el-button
              style="width: 300px; margin-top: 50px; background-color: #ab69cc59"
              @click="Login(ruleFormRef)"
              size="large"
            >
              登入
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.login-box {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ab69cc59;

  .login-container {
    height: 500px;
    width: 800px;
    background-color: white;
    .title {
      font-size: 32px;
      margin-top: 50px;
      font-weight: 550;
      text-align: center;
      color: #8e45b28c;
    }
  }
  .input-container {
    display: flex;
    justify-content: center;
    margin-top: 60px;
    .el-form {
      width: 60%;
      .el-form-item {
        margin-bottom: 40px;
        ::v-deep .el-form-item__content {
          justify-content: center;
        }
      }
      .el-button {
        color: white;
        font-weight: 550;
        font-size: 18px;
        &:hover {
          background-color: #743593;
        }
      }
    }
  }
}
</style>
