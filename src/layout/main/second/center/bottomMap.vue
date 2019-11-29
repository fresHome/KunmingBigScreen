<template>
  <div class="bottomMap">
    <div class="bg" :style="{img:'bottom-map-dpq.png'} | imgLoad()"></div>
  </div>
</template>

<script>
  export default {
    name: 'bottomMap',
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .bottomMap {
    width: 8.33rem;
    margin: 0 auto;
    height: 2.5rem;
    position: relative;

    .bg {
      width: 8.33rem;
      height: 1.89rem;
      position: absolute;
      bottom: 0;
    }
  }
</style>
