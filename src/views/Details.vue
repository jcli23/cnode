<template>
  <div>
    <div class="center">
      <div>{{content.title}}</div>
      <div class="header">
        <span v-if="content.top ===true" class="istop">置顶</span>
        <span v-else-if="content.tab ==='share'" class="share-ask">分享</span>
        <span v-if="content.tab ==='ask'" class="share-ask">问答</span>

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
        content:{},
      }
    },
    methods: {
      gettopics () {
        this.$axios.req('api/topics').then(res => {
          console.log(res.data)
          this.content= res.data
        }).catch(err => {
          console.log(err)    //获取数据
        })
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
  .center{
    border: 1px solid red;
    margin-top: 15px;
    width: 1095px;
    height: 1000px;
    margin-left: 95px;
    background: #FFFFFF;
    .header{
      width: 1075px;
      height: 65px;
      padding: 10px;
    }
  }
</style>
