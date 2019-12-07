<template>
  <div class="thirdBoxTwo">
    <box title="经济趋势" :active-tab="activeTab" :tab-content="tabContent">
      <chart ref="chart32" :skey="'jjqs32'" :option="option"></chart>
    </box>
  </div>
</template>

<script>
import box from '../../../../components/box/index'
import chart from '../../../../components/charts/echarts/chart'
import {twoLine} from "../../../../mixins";

export default {
  name: 'thirdBoxTwo',
  data () {
    return {
      activeTab: 1,
      tabContent: [
        {
          num: 1,
          name: '营收',
          chart: 32
        },
        {
          num: 2,
          name: '税收',
          chart: 32
        }
      ],
    }
  },
  mixins:[twoLine],
//  props: ['delayShow'],
  methods: {
  },
  mounted () {
    this.getLine('Xs00019')
    window.eventHub.$on('changeTab', (item) => {
      if (item.chart == 32) {
        if (item.num == 1) {
          this.activeTab = 1
          this.getLine('Xs00019')
        } else {
          this.activeTab = 2
          this.getLine('Xs00020')
        }
      }
    })
  },
  beforeDestroy () {
    window.eventHub.$off('changeTab')
  },
  components: {
    box, chart
  }
}
</script>

<style lang="scss" scoped>
  .thirdBoxTwo {

  }
</style>
