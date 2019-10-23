<template>
  <div class="el__cnode">
    <div class="home">
      <div height="50px"><top></top></div>   <!--头部-->
      <div class="center">
        <router-view></router-view>         <!--主内容-->
        <div class="aside"><Aside></Aside></div>     <!--侧边栏-->
      </div>
      <div class="foot"><bottom></bottom></div>     <!--底部-->
    </div>
  </div>
</template>

<script>
import top from "../components/header/Top";
import bottom from "../components/footer/Bottom";
import Aside from "../components/aside/Aside";

export default {
  name: 'home',
  components: {
    Aside,
    top,
    bottom
  },
  data(){
    return{
      topics:[]
    }
  },
  methods: {

  },
  mounted() {

  }

}
</script>
<style scoped lang="scss">
    .center{
      display: flex;
      background: #E1E1E1 ;
    }
</style>
