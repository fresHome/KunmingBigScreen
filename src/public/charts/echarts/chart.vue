<template>
  <div ref="echarts" class="sCharts">
    <div class="echart" :id="'mychart'+skey"></div>
  </div>
</template>

<script>
export default {
  name: 'sCharts',
  data () {
    return {
      chart: ''
    }
  },
  props: ['skey', 'option'],
  methods: {
    draw () {
      setTimeout(() => {
        this.chart = this.$echarts.init(document.getElementById('mychart' + this.skey))
        this.chart.clear()
        this.chart.setOption(this.option)
        this.chart.resize()
      }, 500)
    }
  },
  watch: {
    option () {
      console.log(1)
      this.$nextTick(() => {
        this.draw()
      })
    }
  },
  mounted () {
    if (this.option) {
      this.$nextTick(() => {
        this.draw()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .sCharts {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    & > div {
      width: 100%;
      height: 100%;
    }
  }
</style>
