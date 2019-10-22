<template>
  <div>
    <div class="header">
      <div v-for="(item,index) in title" :key="index">
        <div class="">{{item.name}}</div>
      </div>
    </div>
  </div>
  
</template>

<script>
  export default {
    name: "About",
    components: {},
    props: {},
    data() {
      return {
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

</style>
