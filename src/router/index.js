import Vue from 'vue'
import Router from 'vue-router'
import PlayerAttribute from '@/views/PlayerAttribute'
import PlayerSkills from '@/views/PlayerSkills'
import PlayerEquipment from '@/views/PlayerEquipment'
import EquipmentMessage from '@/views/EquipmentMessage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/playerAttribute'
    },
    {
      path: '/playerAttribute',
      name: 'PlayerAttribute',
      component: PlayerAttribute
    },
    {
      path: '/playerSkills',
      name: 'PlayerSkills',
      component: PlayerSkills
    },
    {
      path: '/playerEquipment',
      name: 'PlayerEquipment',
      component: PlayerEquipment,
      children: [
        {
          path: '/playerEquipment/msg/:id',
          name: 'EquipmentMessage',
          component: EquipmentMessage
        }
      ]
    }
  ]
})
