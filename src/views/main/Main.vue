<template>
  <div class="main">
    <div class="header">
      <div v-for="(item,index) in title" :key="index" class="title-text">
        <div class="box">
          <div :class="{bg:index===num}" @click="changecolor(index)">{{item.name}}</div>
        </div>
      </div>
    </div>
    <div v-for="(item,index) in topics.slice(
      pages*(pagesNum-1),
      pages*pagesNum
    )" class="main-text" :key="index">
      <img :src="item.author.avatar_url" alt="">
      <div class="record">
        <span style="color: #9e78c0;">{{item.reply_count}}</span>
        <span>/</span>
        <span style="color: #b4b4b4;font-size: 10px">{{item.visit_count}}</span>
      </div>
      <div>
        <span v-if="item.top ===true" class="istop">置顶</span>
        <span v-else-if="item.tab ==='share'" class="share-ask">分享</span>
        <span v-if="item.tab ==='ask'" class="share-ask">问答</span>
      </div>
      <div style="color: #333;font-size: 16px" class="title-text" @click="go(item)">{{item.title}}</div>  <!--主标题内容-->
      <div class="right">
        <div v-if="item.day">{{item.day}}天前</div>
        <div v-else-if="item.min">{{item.min}}分钟前</div>
        <div v-else>{{item.hours}}小时前</div>
      </div>
    </div>
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="40"
        layout="total, sizes, prev, pager, next, jumper"
        :total="40">
    </el-pagination>     <!--分页效果-->
  </div>
  
</template>

<script>
  import { Loading } from 'element-ui';
  export default {
    name: "main",
    components: {},
    props: {},
    data() {
      return {
        loadingInstance:'',
        topics:[],
        currentPage:1,
        pages:40,
        pagesNum:1,
        num:0,
        time:'',
        title:[
          {
            id:0,
            name:'全部'
          },
          {
            id:1,
            name:'精华'
          },
          {
            id:2,
            name:'分享'
          },
          {
            id:3,
            name:'问答'
          },
          {
            id:4,
            name:'招聘'
          },
          {
            id:5,
            name:'客户端测试'
          },
        ]
      }
    },
    methods: {
      changecolor(index){
        this.num=index   //点击换色效果
      },
      gettopics () {
        this.$axios.req('api/topics').then(res => {
          console.log(res)
          this.topics= res.data   //拿到数据
          this.loadingInstance.close();
          let nowTime=Date.now();   //获得现在的时间戳
          this.topics.map(item=>{
            let different=nowTime-this.$dayjs(item.last_reply_at).valueOf();   //计算出时间戳的差值
            let time=different/1000/60/60;  //得到获得时间戳差值的小时数
            if(time<1){
              let min=Math.floor(time*60);
              this.$set(item,"min",min)     //小于1小时换算为分钟
            }else if(time>24){
              let day=Math.ceil(time/24);
              this.$set(item,"day",day)    //大于24小时一天换算为天数
            }else{
              let hours=Math.floor(time);
              this.$set(item,"hours",hours)   //获取小时数
            }
          })
        }).catch(err => {
          console.log(err)  //报错打印
        })
      },
      // 翻页事件
      handleSizeChange(val) {
        // console.log(`每页 ${val} 条`);
        this.pages=val;
      },
      handleCurrentChange(val) {
        // console.log(`当前页: ${val}`);
        this.pagesNum=val
      },
      go(path){
        this.$router.push({name:"details",query:{id:path.id}})
      }
    },
    mounted() {
      this.gettopics()  //调用获取数据的函数
      this.loadingInstance = Loading.service({text:'加载中...'});
      this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
        this.gettopics ()
      });
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
  .main{
    margin-left: 95px;
    width: 1095px;
    margin-top: 15px;
    background: white;
    margin-bottom: 15px;
    .header{
      height: 40px;
      width: 100%;
      display: flex;
      background: #f6f6f6;
      .title-text{
        margin-left: 20px;
        color: #80bd01;
        }
        .box{
          margin-right: 5px;
          line-height: 30px;
          margin-top: 5px;
          .bg {
            background: #80bd01;
            color: white;
            line-height: 24px;
            padding: 3px 4px;
            border-radius: 5px;
          }
        }
    }
    .main-text{
      position: relative;
      height: 50px;
      width: 100%;
      display: flex;
      align-items: center;
      border-top: 1px solid #f0f0f0;
      &:hover{
        background: #f6f6f6;;
      }
      img{
        margin-top: 5px;
        margin-left: 20px;
        width: 30px;
        height: 30px;

      }
      .record{
        width: 70px;
      }
      .title-text{
        margin-left: 5px;
        max-width: 750px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow:ellipsis;
        &：hover{
          text-decoration: underline;
        }
      }
      .lastreply{
        position: absolute;
        right: 0;
      }
    }
    .istop{
      background: #80bd01;
      padding: 2px 4px;
      border-radius: 3px;
      color: #fff;
      font-size: 12px;
    }
    .share-ask{
      background-color: #e5e5e5;
      color: #999;
      padding: 2px 4px;
      border-radius: 3px;
      font-size: 12px;
    }
    .right{
      position: absolute;
      right: 10px;
      font-size: 12px;
      color: #778087;
    }
  }

</style>
