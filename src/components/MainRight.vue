<template>
<div id="main-right"><router-view/></div>
</template>

<script>
export default {
  name: 'MainRight'
}
</script>

<style scoped>
  #main-right{
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    min-height: 600px;
    padding: 20px;
  }
</style>
