<template>
<div>
  <h2>技能</h2>
  <hr>
  <div class="skills-main">
    <el-table
      :data="tableData"
      style="width: 650px; margin:0 auto">
      <el-table-column
        label="图标"
        width="100">
        <template slot-scope="scope">
          <img class="skill-icon" :src="scope.row.imgSrc" alt="技能图片">
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="技能名称"
        width="200">
      </el-table-column>
      <el-table-column
        prop="rate"
        label="等级"
        width="100">
      </el-table-column>
      <el-table-column
        label="操作"
        width="250">
        <el-button plain>技能信息</el-button><el-button plain>升级</el-button>
      </el-table-column>
    </el-table>
  </div>
</div>
</template>

<script>
export default {
  name: 'PlayerSkills',
  data () {
    return {
      tableData: [{
        imgSrc: 'http://cdn.dota2.com/apps/dota2/images/abilities/bounty_hunter_shuriken_toss_lg.png',
        name: '投掷飞镖',
        rate: '2'
      }, {
        imgSrc: 'http://cdn.dota2.com/apps/dota2/images/abilities/bounty_hunter_jinada_lg.png',
        name: '忍术',
        rate: '4'
      }, {
        imgSrc: 'http://cdn.dota2.com/apps/dota2/images/abilities/bounty_hunter_wind_walk_lg.png',
        name: '暗影步',
        rate: '2'
      }, {
        imgSrc: 'http://cdn.dota2.com/apps/dota2/images/abilities/bounty_hunter_track_lg.png',
        name: '追踪术',
        rate: '1'
      }]
    }
  }
}
</script>
<style scoped>
  .skills-main {
   margin: 0 20px;
  }

  .skill-icon{
    width: 50px;
  }
</style>
