<template>
  <div>
    <div class="footer">
      <div class="main">
        <div class="main-text">
          <div class="text-one">RSS | 源码地址</div>
          <div class="text-two">CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</div>
          <div class="text-three">
            <div class="text-text">服务赞助商为</div>
            <div>
              <img src="../../../public/images/img9.png" alt="" class="img1">
            </div>
            <div class="text-text">，存储赞助商为</div>
            <div>
              <img src="../../../public/images/img10.png" alt="" class="img2">
            </div>
            <div class="text-text">，由</div>
            <div>
              <img src="../../../public/images/img11.png" alt="" class="img3">
            </div>
            <div class="text-text">提供应用性能服务</div>
          </div>
          <div class="text-four">
            <div class="text-four-one">新手搭建 Node.js 服务器，推荐使用无需备案的</div>
            <div class="text-four-two">DigitalOcean(https://www.digitalocean.com/)</div>
          </div>

        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
  export default {
    name: "footer",
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
  .footer{
    width: 100%;
    height: 190px;
    .main{
      width: 1400px;
      height: 190px;
      margin: 0 auto;
      .main-text{
        height: 150px;
        margin-top: 20px;
        .text-one{
          height: 26px;
          font-size: 13px;
          line-height: 26px;
          &:hover{
            color: #08c;
          }
        }
        .text-two{
          height: 20px;
          font-size: 13px;
          color: #ABABAB;
        }
        .text-three{
          height: 54px;
          padding: 10px 0;
          display: flex;
          align-items: flex-end;
          .text-text{
            font-size: 13px;
            color: #ABABAB;
          }
          .img1{
            width: 92px;
            height: 18.5px;
          }
          .img2{
            width: 115px;
            height: 43.7px;
          }
          .img3{
            width: 166px;
            height: 54px;
          }
        }
        .text-four{
          height: 20px;
          display: flex;
          .text-four-one{
            font-size: 13px;
            height: 20px;
            line-height: 20px;
            color: #ABABAB;
          }
          .text-four-two{
            font-size: 13px;
            height: 20px;
            line-height: 20px;
            color: #0088cc;
            &:hover{
              color: lightseagreen;
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
</style>
