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
      }, 200)
    }
  },
  watch: {
    option () {
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
      width: 3.55rem;
      height: 1.5rem;
    }
  }
</style>
