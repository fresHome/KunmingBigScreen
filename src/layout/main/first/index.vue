<template>
  <div class="content" :style="{img:'first-bg.jpg'} |imgLoad()">
    <left class="left"></left>
    <center class="center"></center>
    <right class="right"></right>
  </div>
</template>

<script>
  import left from './left'
  import right from './right'
  import center from './center'

  export default {
    name: 'index',
    components: { left, right, center },
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .content {
    display: flex;
    justify-content: space-between;

    .left, .right {
      width: 3.75rem;
    }

    .left {
      position: relative;
      z-index: 99999;
      margin-left: 0.3rem;
    }

    .right {
      position: relative;
      z-index: 99999;
      margin-right: 0.3rem;
    }

    .center {
      width: 870rem;
    }
  }
</style>
