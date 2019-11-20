<template>
  <div class="leftBox">
<!--    <box title="经济趋势">-->
<!--      <chart ref="chart1" :skey="'jjqs1'" :option="option1" v-if="delayShow"></chart>-->
<!--    </box>-->
    <BoxOne :delayShow="delayShow"></BoxOne>
    <BoxTwo :delayShow="delayShow"></BoxTwo>
    <BoxThree :delayShow="delayShow"></BoxThree>
    <box title="招商引资">
      <chart ref="chart1" :skey="'jjqs4'" :option="option4" v-if="delayShow"></chart>
    </box>
  </div>
</template>

<script>
import box from '../../public/box'
import tab from '../../public/tab'
import chart from '../../public/charts/echarts/chart'
import { deepClone, convertRem } from '../../utils'
import request from '@/api/request'
import BoxThree from '../box/BoxThree'
import BoxTwo from '../box/BoxTwo'
import BoxOne from '../box/BoxOne'

export default {
  name: 'leftBox',
  data () {
    return {
      list: ['ys', 'ss'],
      number: 0,
      interval: null,
      activeJJqs: 'ys',
      option4:{}
    }
  },
  props: ['delayShow'],
  components: {
    box,
    chart, BoxThree, BoxTwo, BoxOne
  },
  methods: {
    changeJJqs (type) {
      this.activeJJqs = type
      let newOption = deepClone(this.option1)

      request.normalPort({
        //        codeArray: this.option1.xAxis.data
        codeArray: ['Xh00005', 'Xh00006', 'Xh00007', 'Xh00008', 'Xh00009', 'Xh00010', 'Xh00011', 'Xh00012', 'Xh00013', 'Xh00014', 'Xh00015', 'Xh00016', 'Xh00017', 'Xh00018', 'Xh00019', 'Xh00020', 'Xh00021', 'Xh00022', 'Xh00023', 'Xh00024', 'Xh00025', 'Xh00026', 'Xh00027', 'Xh00028']
      }).then(res => {
        let arr1 = []
        let arr2 = []
        res.data.data.resultList.map((item, index, arry) => {
          if (index < 12) {
            arr1.push(item.value)
          } else {
            arr2.push(item.value)
          }
        })
        newOption.series[0].data = arr1
        newOption.series[1].data = arr2
        this.option1 = newOption
      }).catch(err => {
      })
    },
    changeAll (type) {
      this.changeJJqs(type)
    }
  },
  mounted () {
    this.changeJJqs()
  }
}
</script>

<style lang="scss" scoped>
  .leftBox {
    /*margin-left: 0.285rem;*/
    margin-top: 0.165rem;
  }
</style>
