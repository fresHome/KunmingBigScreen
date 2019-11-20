<template>
  <div class="chart">
    <hChart v-if="show" class="box" id="pie3dh" :option="option"></hChart>
    <div class="bg">
      <RotateCircle :type="1"></RotateCircle>
    </div>
  </div>
</template>

<script>
import RotateCircle from './circle.rotate'
import hChart from './hChart'

export default {
  name: 'charts',
  data () {
    return {
      show: false
    }
  },
  components: {
    RotateCircle,
    hChart
  },
  props: ['option'],
  methods: {},
  mounted () {
    setTimeout(() => {
      this.show = true
    }, 200)
  }
}
</script>

<style lang="scss" scoped>
  .chart {
    position: relative;
    height: 2.2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .box {
      width: 4.2rem;
      height: 2.2rem;
      position: absolute;
      z-index: 2;
    }

    .bg {
      position: absolute;
      width: 2.8rem;
      height: 50%;
      top: 60%;
      left: 35%;
      transform: translate(-50%, -50%);
      z-index: 1;
    }
  }
</style>
<style>
  .highcharts-credits {
    display: none !important;
  }
</style>
