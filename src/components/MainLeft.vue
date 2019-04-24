<template>
<div id="main-left">
  <ul>
    <li>  <router-link to="/playerAttribute" class="btn_left"><a>属性</a></router-link></li>
    <li>  <router-link to="/playerSkills" class="btn_left">技能</router-link></li>
    <li>  <router-link to="/playerEquipment" class="btn_left">装备</router-link></li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'MainLeft'
}
</script>

<style scoped>
  #main-left{
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    min-height: 600px;
    padding: 20px;
  }

  ul{
    padding: 0;
    margin: 0;
  }
  ul li{
    list-style: none;
  }

  .btn_left{
    width: 100%;
    height: 40px;
    line-height: 40px;
  }

  /*未访问的链接*/
  a{
    display: flex;
    width: 100%;
    height: 100%;
    text-decoration: none;
  }
  a:link{
    color: black;
  }
  /*访问过的链接*/
  a:visited{
    color: black;
  }
  /*鼠标经过时*/
  a:hover{
    color: #409EFF;
  }
  /*在鼠标点击的同时*/
  a:active{
    color: #75a4b3;
  }
</style>
