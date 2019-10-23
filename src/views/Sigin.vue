<template>
  <div>
    <div class="sigin">
      <div class="center">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="username">
            <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Sigin",
    components: {},
    props: {},
    data() {
      let checkusername = (rule, value, callback) => {         //声明同步用户名数据
        if (!value) {
          return callback(new Error('请输入用户名'));
        }else{
          callback();
        }
      };
      let validatePass = (rule, value, callback) => {     //同步密码
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      let validatePass2 = (rule, value, callback) => {   //同步确认密码
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          username:''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' },
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 5, max: 12, message: '长度在 5 到 12 个字符', trigger: 'blur' }   //不输密码弹提示内容，标注为必填项
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' },
            { required: true, message: '请输入密码', trigger: 'blur' },   //不输密码弹提示内容，标注为必填项
            { min: 5, max: 12, message: '长度在 5 到 12 个字符', trigger: 'blur' }
          ],
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },    //注册名必填
            { validator: checkusername, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
              this.$message({
                message: '恭喜你，这是一条成功消息',
                type: 'success'
              });
            localStorage.setItem(
                "user",JSON.stringify({name:this.ruleForm.username})
            );
            this.$store.state.user=this.ruleForm.username;
            this.$router.push("/Main")
          } else {
            console.log('error submit!!');      //验证与提交表单
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();   //重置登录表单
      }
    },
    mounted() {

    },
    created() {

    },
    filters: {},
    computed: {},
    watch: {},
    directives: {}
  }
</script>

<style scoped lang="scss">
  .sigin{
    width: 100%;
    .center{
      width: 40%;
      margin: 0 auto;
      padding-top: 200px;     //让登录组件大致在页面中心
    }
  }
</style>
