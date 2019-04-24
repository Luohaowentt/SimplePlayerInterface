<template>
  <div id="app">
    <h2>玩家界面</h2>
    <hr>
    <div class="main">
      <el-row :gutter="20">
        <el-col :span="4"> <MainLeft/></el-col>
        <el-col :span="20"> <MainRight/></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import MainLeft from '@/components/MainLeft'
import MainRight from '@/components/MainRight'
export default {
  name: 'App',
  components: {MainRight, MainLeft}
}
</script>

<style>
  hr{
    width: 95%;
  }
  h2{
    margin-left: 10%;
  }

  .main{
    margin-top: 50px;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    margin: 60px auto;
    width: 90%;
  }
</style>
