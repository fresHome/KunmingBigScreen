<template>
  <div class="index" :style="{img:'zu9copy.png'}|imgLoad()"></div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {}
    },
    methods:{}
  }
</script>

<style lang="scss" scoped>
  .index {
    width: 8.075rem;
    height: 0.235rem;
    position: absolute;
    bottom: 0.27rem;
    left:50%;
    transform: translate(-50%,0);
  }
</style>
