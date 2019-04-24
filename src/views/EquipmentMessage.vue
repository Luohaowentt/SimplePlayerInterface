<template>
  <div>
    <el-card class="box-card">
      id:{{$route.params.id}}
      {{equipMsg.msg}}
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'EquipmentMessage',
  data () {
    return {
      equipMsg: {},
      allMsg: []
    }
  },
  mounted () {
    const allEquipMsg = [
      {
        id: 101,
        msg: '持有这把强大斧头的人可以一次砍倒一片敌人。。'
      },
      {
        id: 201,
        msg: '在幽冥地带的深渊锻造，这件地狱盔甲提高整支军队的护甲和攻击速度。'
      },
      {
        id: 301,
        msg: '虽然延长了穿戴者的寿命，但这鞋子其实并不可靠。。'
      }
    ]
    this.allMsg = allEquipMsg
    const id = this.$route.params.id * 1
    this.equipMsg = allEquipMsg.find(equipment => equipment.id === id)
  },
  watch: {
    $route: function (value) {
      const id = value.params.id * 1
      this.equipMsg = this.allMsg.find(equipment => equipment.id === id)
    }
  }
}
</script>

<style scoped>

</style>
