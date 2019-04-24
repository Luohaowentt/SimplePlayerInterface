<template>
<div>
  <h2>装备</h2>
  <hr>
  <div class="equipment-main">
    <div class="equipment-one">
      <div class="equipment-position"><span>武器</span></div>
        <img class="hero-img-list" src="http://cdn.dota2.com/apps/dota2/images/items/bfury_lg.png"  alt="狂战斧">
        <router-link :to="`/playerEquipment/msg/${this.armsId}`">信息</router-link>
    </div><hr>
    <div class="equipment-one">
      <div class="equipment-position"><span>防具</span></div>
      <img class="hero-img-list" src="http://cdn.dota2.com/apps/dota2/images/items/assault_lg.png" alt="强袭胸甲">
      <router-link :to="`/playerEquipment/msg/${this.clothId}`">信息</router-link>
    </div><hr>
    <div class="equipment-one">
      <div class="equipment-position"><span>鞋子</span></div>
      <img class="hero-img-list" src="http://cdn.dota2.com/apps/dota2/images/items/tranquil_boots_lg.png" alt="静谧之靴">
      <router-link :to="`/playerEquipment/msg/${this.shoesId}`">信息</router-link>
    </div><hr>
    <router-view></router-view>
  </div>
</div>
</template>

<script>
export default {
  name: 'PlayerEquipment',
  data () {
    return {
      armsId: '101',
      clothId: '201',
      shoesId: '301' // 前一位为装备类型，1，2，3分别为武器防具鞋子，后两位为该类型下ID
    }
  }
}
</script>

<style scoped>
  .equipment-main{
    margin: 0 50px;
  }
  .equipment-main  img {
    padding: 10px;
    width: 55px;
  }
  .equipment-position{
    display: inline-block;
    float: left;
    width: 100px;
    height: 65px;
    line-height: 65px;
    text-align: center;
  }
  .equipment-one{
    height: 65px;
  }
</style>
