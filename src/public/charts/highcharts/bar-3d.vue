<template>
  <div class="chart">
    <hChart v-if="show" class="box" id="bar3dh" :option="option"></hChart>
  </div>
</template>

<script>
import hChart from './hChart'

export default {
  name: 'charts',
  data () {
    return {
      show: false
    }
  },
  props: ['option'],
  components: {
    hChart
  },
  methods: {
    draw () {
      this.show = false
      setTimeout(() => {
        this.show = true
      }, 200)
    }
  },
  mounted () {
    this.draw()
  }
}
</script>

<style lang="scss" scoped>
  .chart {
    position: relative;
    width: 100%;
    height: 2.3rem;
    overflow: hidden;

    .box {
      width: 100%;
      height: 2.3rem;
    }
  }
</style>
<style>
  .highcharts-credits {
    display: none !important;
  }
</style>
