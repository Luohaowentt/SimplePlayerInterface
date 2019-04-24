<template>
<div>
  <h2>属性</h2>
  <hr>
  <div class="attribute-main" v-loading="loading">
    <div class="attribute-name"> <h4>角色名:</h4> </div> <span>{{attribute.name}}</span><br>
    <div class="attribute-name"> <h4>HP:</h4> </div> <span>{{attribute.hp}}</span><br>
    <div class="attribute-name"> <h4>ATK:</h4> </div> <span>{{attribute.atk}}</span><br>
    <div class="attribute-name"> <h4>DEF:</h4> </div> <span>{{attribute.def}}</span><br>
    <div class="attribute-name"> <h4>SPD:</h4> </div> <span>{{attribute.spd}}</span><br>
  </div>
</div>
</template>

<script>
export default {
  name: 'PlayerAttribute',
  data () {
    return {
      attribute: {
        name: '--',
        hp: '--',
        atk: '--',
        def: '--',
        spd: '--'
      },
      loading: true
    }
  },
  mounted () {
    setTimeout(() => {
      const attribute = {
        name: 'Chika',
        hp: '100',
        atk: '23',
        def: '35',
        spd: '66'
      }
      this.attribute = attribute
      this.loading = false
    }, 1000)
  }
}
</script>

<style scoped>
.attribute-main{
  margin: 0 50px;
}
.attribute-name{
  display: inline-block;
  width: 100px;
  text-align: center;
}
</style>
