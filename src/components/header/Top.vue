<template>
  <div>
    <div class="header">
      <div class="navbar-inner">
        <div class="container">
          <a href="" class="brand">
            <img src="//static2.cnodejs.org/public/images/cnodejs_light.svg" alt="网站标识" class="img">
          </a>
          <div class="input">
            <input type="text" class="inputbox">
          </div>
          <div class="right">
            <div class="right-one">
              <a href="/">首页</a>
            </div>
            <div class="right-two">新手入门</div>
            <div class="right-three">API</div>
            <div class="right-four">关于</div>
            <div class="right-five">注册</div>
            <div class="right-six"><a href="../../views/Sigin.vue">登录</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
  export default {
    name: "header",
    components: {},
    props: {},
    data() {
      return {
        input4: ''
      }
    },
    methods: {},
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
  .header{
    height: 50px;
    margin-bottom: 0;
    z-index: 9;
    width: 100%;
    position: relative;
    background: #444;
    font-size: 13px;
    .navbar-inner{
      background: 0 0;
      border-radius: 0;
      border: none;
      box-shadow: none;
      width: 90%;
      margin: auto;
      padding: 5px;
      .container{
        display: flex;
        width: 100%;
        min-width: 960px;
        margin: 0 auto;
        max-width: 1400px;
        position: relative;
        .brand{
          width: 120px;
          padding: 3px 20px;
          height: 34px;
          line-height: 34px;
          color: #ccc;
          font-weight: 700;
          .img{
            height: 28px;
          }
        }
        .input{
          width: 233px;
          height: 26px;
          margin-top: 3px;
          .inputbox{
            background: url(../../../public/images/search.e53b380a.hashed.png) 4px 4px no-repeat #888;
            padding: 0px 5px 3px 22px;
            color: #666;
            border: 0;
            width: 233px;
            height: 26px;
            margin-top: 2px;
            border-radius: 13px;
            outline: none;
            &:hover{
              background: url(../../../public/images/search.e53b380a.hashed.png) 4px 4px no-repeat white;
            }
          }
        }
        .right{
          position: absolute;
          right: 0;
          display: flex;
          .right-one{
            width: 56px;
            line-height: 40px;
            a{
              color: #cccccc;
              text-decoration: none;
              &:hover{
                color: white;
              }
            }
          }
          .right-two{
            width: 82px;
            line-height: 40px;
            color: #cccccc;
            &:hover{
              color: white;
            }
          }
          .right-three{
            width: 50px;
            line-height: 40px;
            color: #cccccc;
            &:hover{
              color: white;
            }
          }
          .right-four{
            width: 56px;
            line-height: 40px;
            color: #cccccc;
            &:hover{
              color: white;
            }
          }
          .right-five{
            width: 56px;
            line-height: 40px;
            color: #cccccc;
            &:hover{
              color: white;
            }
          }
          .right-six{
            width: 56px;
            line-height: 40px;
            color: #cccccc;
            a{
              color: #cccccc;
              text-decoration: none;
            }
            &:hover{
              color: white;
            }
          }
        }
      }
    }
  }
</style>
