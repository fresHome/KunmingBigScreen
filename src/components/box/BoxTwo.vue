<template>
  <div class="BoxNine">
    <box title="产业结构">
      <chart ref="chart2" :skey="'jjqs2'" :option="option" v-if="delayShow"></chart>
    </box>
  </div>
</template>

<script>
import box from '../../public/box'
import chart from '../../public/charts/echarts/chart'
import { deepClone, convertRem } from '../../utils'
import request from '@/api/request'

export default {
  name: 'BoxNine',
  data () {
    return {
      option: {
        legend: {
          bottom: 'bottom',
          left: 'center',
          itemWidth: convertRem(0.075),
          itemHeight: convertRem(0.075),
          textStyle: {
            fontSize: convertRem(0.075),
            color: '#B5BDDB'
          },
          data: ['生物医药产业', '新材料及装备制造产业', 'IT及现代服务产业']
        },
        grid: {
          left: '20%'
        },
        color: ['#7EF7FF', '#6D91FF', '#D7087E'],
        series: [
          {
            type: 'pie',
            center: ['37%', '50%'],
            radius: [convertRem(0.15), convertRem(0.35)],
            label: {
              normal: {
                show: false
              }
            },
            data: []
          },
          {
            type: 'pie',
            center: ['37%', '50%'],
            radius: [convertRem(0.4075), convertRem(0.4125)],
            data: [100],
            label: {
              show: false
            }
          },
          {
            type: 'pie',
            center: ['63%', '50%'],
            radius: [convertRem(0.15), convertRem(0.35)],
            label: {
              normal: {
                show: false
              }
            },
            data: []
          },
          {
            type: 'pie',
            center: ['63%', '50%'],
            radius: [convertRem(0.4075), convertRem(0.4125)],
            data: [100],
            label: {
              show: false
            }
          }
        ]
      }
    }
  },
  props: ['delayShow'],
  methods: {
    changeJJqs (type) {
      this.activeJJqs = type
      let newOption = deepClone(this.option)
      request.normalPort({
        codeArray: ['Xh00007', 'Xh00009', 'Xh00011', 'Xh00013', 'Xh00015', 'Xh00017']
      }).then(res => {
        let arr1 = [
          { name: '生物医药产业', value: 0 },
          { name: '新材料及装备制造产业', value: 0 },
          { name: 'IT及现代服务产业', value: 0 }
        ]
        let arr2 = [
          { name: '生物医药产业', value: 0 },
          { name: '新材料及装备制造产业', value: 0 },
          { name: 'IT及现代服务产业', value: 0 }
        ]
        let data1 = res.data.data.resultList.slice(0, 3)
        let data2 = res.data.data.resultList.slice(3)
        data1.map((item, index, arry) => {
          if (item.codeRemark.indexOf(arr1[index].name) >= 0) {
            arr1[index].value = item.value
          }
        })
        data2.map((item, index, arry) => {
          if (item.codeRemark.indexOf(arr2[index].name) >= 0) {
            arr2[index].value = item.value
          }
        })
        newOption.series[0].data = arr1
        newOption.series[2].data = arr2

        this.option = newOption
      })
    }
  },
  mounted () {
    this.changeJJqs()
  },
  components: {
    box, chart
  }
}
</script>

<style lang="scss" scoped>
  .BoxNine {

  }
</style>
