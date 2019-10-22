<template>
  <div>
    <div class="inner">
      <div class="website">CNode：Node.js专业中文社区</div>
      <div class="inner-text">
        <div class="text-one">
          <div>你可以</div>
          <div class="algin">登录</div>
          <div>或</div>
          <div class="register">注册</div>
          <div>，也可以</div>
        </div>
        <div class="info">
          <div class="info-text">通过 GitHub 登录</div>
        </div>
      </div>
    </div>
    <div class="inner-ads">
      <div>
        <img src="../../../public/images/img1.png" alt="" class="img">
      </div>
      <div>
        <img src="../../../public/images/img2.png" alt="" class="img">
      </div>
      <div>
        <img src="../../../public/images/img3.png" alt="" class="img1">
      </div>
    </div>
    <div class="pane1">
      <div class="header">
        <div class="header-text">无人回复的话题</div>
      </div>
      <div class="inner2">
        <div class="inner-text2">如何学习js</div>
        <div class="inner-text2">发现一个用node.js做的后台权限管理框架</div>
        <div class="inner-text2">请问有谁了解 VuePress JAMStack Headless cms 么</div>
        <div class="inner-text2">RabbitMQ 消费端服务限流实践</div>
        <div class="inner-text2">Alfred 4 Workflow Open in VSCode</div>
      </div>
    </div>
    <div class="pane2">
      <div class="pane2-title">友情社区</div>
      <div>
        <img src="../../../public/images/img4.png" alt="" class="pane2-img1">
      </div>
      <div>
        <img src="../../../public/images/img5.png" alt="" class="pane2-img2">
      </div>
      <div>
        <img src="../../../public/images/img6.png" alt="" class="pane2-img3">
      </div>
      <div>
        <img src="../../../public/images/img7.png" alt="" class="pane2-img4">
      </div>
    </div>
    <div class="pane3">
      <div class="pane3-text">客户端二维码</div>
      <div class="pane3-box">
        <img src="../../../public/images/img8.png" alt="" class="dimensional-barcode">
        <div class="adress">客户端源码地址</div>
      </div>
    </div>
  </div>
  
</template>

<script>
  export default {
    name: "aside",
    components: {},
    props: {},
    data() {
      return {}
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
  .inner{
    width: 290px;
    height: 116px;
    background: #FFF;
    margin-top: 15px;
    margin-left: 10px;
    .website{
      width: 270px;
      height: 26px;
      padding: 10px;
    }
    .inner-text{
      width: 270px;
      height: 60px;
      padding: 0 10px 10px 10px;
      .text-one{
        height: 26px;
        display: flex;
        .algin{
          padding: 0 4px;
          color: #778077;
        }
        .register{
          padding: 0 4px;
          color: #778077;
        }
      }
      .info{
        width: 151px;
        height: 34px;
        cursor: pointer;
        letter-spacing: 2px;
        box-shadow: none;
        border-radius: 3px;
        line-height: 2em;
        vertical-align: middle;
        background: #5bc0de;
        color: #fff;
        text-align: center;
        .info-text{
          font-size: 14px;
        }
      }
    }
  }
  .inner-ads{
    width: 290px;
    height: 236px;
    margin-left: 10px;
    margin-top: 10px;
    background: #FFFFFF;
    .img{
      width: 270px;
      height: 65px;
      padding: 10px 10px 0 10px;
    }
    .img1{
      width: 270px;
      height: 65px;
      padding: 10px 10px 10px 10px;
    }
  }
  .pane1{
    width: 290px;
    height: 240px;
    border-radius: 3px;
    margin-top: 10px;
    margin-left: 10px;
    background: #FFFFFF;
    .header{
      height: 20px;
      display: flex;
      align-items: center;
      padding: 10px;
      background: #f6f6f6;
      .header-text{
         color: #444444;
        font-size: 13px;
        line-height: 20px;
      }
    }
    .inner2{
      width: 290px;
      height: 200px;
      .inner-text2{
        height: 30px;
        line-height: 30px;
        max-width: 270px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow:ellipsis;
        padding: 0 0 10px 10px;
      }
    }
  }
  .pane2{
    background: #FFFFFF;
    width: 290px;
    margin-left: 10px;
    margin-top: 10px;
    .pane2-title{
      height: 20px;
      padding: 10px;
      font-size: 13px;
      line-height: 20px;
      color: #444444;
    }
    .pane2-img1{
      width: 150px;
      height: 49.5px;
      padding-bottom: 10px;
      padding-left: 10px;
    }
    .pane2-img2{
      width: 150px;
      height: 34px;
      padding-bottom: 10px;
      padding-left: 10px;
    }
    .pane2-img3{
      width: 150px;
      height: 49px;
      padding-bottom: 10px;
      padding-left: 10px;
    }
    .pane2-img4{
      width: 150px;
      height: 52px;
      padding-bottom: 10px;
      padding-left: 10px;
    }
  }
  .pane3{
    width: 290px;
    height: 286px;
    margin-top: 10px;
    margin-left: 10px;
    background: #FFFFFF;
    .pane3-text{
      height: 20px;
      font-size: 13px;
      color: #444444;
      line-height: 20px;
      padding: 10px;
    }
    .pane3-box{
      width: 270px;
      height: 226px;
      padding: 10px;
      text-align: center;
      .dimensional-barcode{
        width: 200px;
        height: 200px;
      }
      .adress{
        font-size: 13px;
        color: #444444;
      }
    }
  }
</style>
