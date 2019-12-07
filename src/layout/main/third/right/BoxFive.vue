<template>
  <div class="thirdBoxFive">
    <box title="人才趋势">
      <chart ref="chart35" :skey="'jjqs35'" :option="option"></chart>
    </box>
  </div>
</template>

<script>
import box from '../../../../components/box/index'
import chart from '../../../../components/charts/echarts/chart'
import {twoLinePeople} from "../../../../mixins";

export default {
  name: 'thirdBoxFive',
  data () {
    return {}
  },
  mixins:[twoLinePeople],
//  props: ['delayShow'],
  methods: {
  },
  mounted () {
    this.getLine(['Xs00030','Xs00031'])
  },
  components: {
    box, chart
  }
}
</script>

<style lang="scss" scoped>
  .thirdBoxFive {

  }
</style>
