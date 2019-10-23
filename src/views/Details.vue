<template>
  <div id="content">
    <div class="center">
      <div class="header">
        <div class="title">
          <span v-if="details.top ===true" class="istop">置顶</span>
          <span class="title-text">{{details.title}}</span>
        </div>
        <div class="title-describe">
          <b>•</b>&nbsp;
          <span>发布于</span>&nbsp;
          <span v-if="createTime<3600">{{Math.floor(createTime/60)}}分钟</span>&nbsp;
          <span v-else-if="createTime<3600*24">{{Math.floor(createTime/3600)}}小时</span>&nbsp;
          <span v-else-if="createTime<3600*24*30">{{Math.floor(createTime/3600/24)}}天</span>&nbsp;
          <span v-else-if="createTime<3600*24*365">{{Math.floor(createTime/3600/24/30)}}个月</span>&nbsp;
          <span v-else>{{Math.floor(createTime/3600/24/365)}}年</span>&nbsp;
          <span>前</span><b>•</b><span>作者</span>&nbsp;
          <span v-if="details.author">{{details.author.loginname}}</span>&nbsp;
          <b>•</b><span>{{details.visit_count}}</span>&nbsp;
          <span>次浏览</span><b>•</b><span>来自</span>&nbsp;
          <span v-if="details.tab ==='share'">分享</span>&nbsp;
          <span v-if="details.tab ==='ask'">问答</span>&nbsp;
        </div>
      </div>
      <div v-html="details.content" class="main-text"></div>
    </div>
    <div class="reply">
      <div class="reply-total" v-if="details.replies">{{details.reply_count}} &nbsp;回复</div>
      <div class="reply-total" v-else>0 &nbsp;回复</div>
      <div v-for="(item,index) in details.replies" :key="index" class="reply-main">
        <div style="display: flex;align-items: flex-start">
          <a href=""><img :src="item.author.avatar_url" alt="" class="img"></a>
          <span class="reply-date">
            <span>{{item.author.loginname}}</span> &nbsp;
            <span class="reply-date-diff">{{index + 1}}楼</span> <b>•</b>
            <span class="reply-date-diff" v-if="item.time<3600">{{Math.floor(item.time/60)}}分钟</span>&nbsp;
            <span class="reply-date-diff" v-else-if="item.time<3600*24">{{Math.floor(item.time/3600)}}小时</span>&nbsp;
            <span class="reply-date-diff" v-else-if="item.time<3600*24*30">{{Math.floor(item.time/3600/24)}}天</span>&nbsp;
            <span class="reply-date-diff" v-else-if="item.time<3600*24*365">{{Math.floor(item.time/3600/24/30)}}个月</span>&nbsp;
            <span class="reply-date-diff" v-else>{{Math.floor(item.time/3600/24/365)}}年</span>&nbsp;
            <span class="reply-date-diff">前</span>
          </span>
        </div>
        <i class="zan">☆</i>
        <span class="zan-length">{{item.ups.length}}</span>
        <div style="display: flex;width: 100%">
          <div class="desc" v-html="item.content"></div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Details",
    components: {},
    props: {},
    data() {
      return {
        details:{},
        id:'',
        createTime:""
      }
    },
    methods: {
      gettopics () {
        this.$axios.req(`/api/topic/${this.id}`).then(res => {
          console.log(res.data,1)
          this.details= res.data;
          this.createTime=
              this.$dayjs().diff(this.$dayjs(this.details.create_at))/1000;  //获取创建时间差
          this.details.replies.map(item=>{
            item.time=this.$dayjs().diff(this.$dayjs(item.create_at))/1000; //获取回复时间差
          })
        }).catch(err => {
          console.log(err)    //获取数据
        })
      }
    },
    mounted() {
      this.id=this.$route.query.id;
      this.gettopics()
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
  #content{
    /deep/ img{
      width: 100%;
    }
    .center{
      margin-top: 15px;
      width: 1095px;
      margin-left: 95px;
      background: #FFFFFF;
      .header{
        width: 1075px;
        height: 65px;
        padding: 10px;
        .title{
          height: 31px;
          margin: 8px 0;
          .istop{
            font-size: 12px;
            padding: 2px 4px;
            background: #80bd01;
            color: white;
            border-radius: 3px;
          }
          .title-text{
            font-size: 22px;
            font-weight: 700;
            color: #333333;
            margin-left: 5px;
          }
        }
        .title-describe{
          font-size: 12px;
          color: #838383;
        }
      }
      .main-text{
        padding: 10px;
        margin-left: 10px;
        margin-top: 10px;
      }
    }
    .reply{
      width: 1095px;
      margin-top: 20px;
      margin-left: 95px;
      background: #FFFFFF;
      .reply-total{
        font-size: 14px;
        height: 20px;
        line-height: 20px;
        padding: 10px;
        background: #f6f6f6;

      }
      .reply-main{
        position: relative;
        padding: 10px;
        /*display: flex;*/
        border-bottom: 1px solid #666666;
        .img{
          width: 30px;
          height: 30px;
        }
        .reply-date{
          font-size: 12px;
          height: 20px;
          line-height: 20px;
          color: #666666;
          font-weight: 700;
        }
        .reply-date-diff{
          color: #0088cc;
          font-weight: 300;
        }
        .zan{
          position: absolute;
          right:40px;
        }
        .zan-length{
          position: absolute;
          right: 15px;
          color: #444444;
          font-size: 12px;
        }
        .desc{
          /*position: absolute;*/
          justify-content: flex-start;
          font-size: 15px;
          line-height: 20px;
          padding: 0 0 0 50px;
        }
      }
    }
  }
</style>
