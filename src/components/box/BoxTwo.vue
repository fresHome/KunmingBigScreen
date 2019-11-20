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
          bottom: '0',
          left: 'center',
          right: '0',
          width: '70%',
          orient: 'horizontal',//???
          itemGap: convertRem(0.4),
          itemWidth: convertRem(0.075),
          itemHeight: convertRem(0.075),
          textStyle: {
            fontSize: convertRem(0.075),
            color: '#B5BDDB'
          },
          data: ["生物医药产业", "生物医药产业占比", "新材料及装备制造产业", "新材料及装备制造产业占比", "IT及现代服务产业", "IT及现代服务产业占比",
          ]
        },
        grid: {
          left: '20%'
        },
        color: ['#7EF7FF', '#6D91FF', '#D7087E'],
        series: [
          {
            color: ['#32F0FE', '#D7087E', '#3D6CFC'],
            type: 'pie',
            center: ['25%', '50%'],
            radius: [convertRem(0.15), convertRem(0.35)],
//            radius: ['4.17%', '100%'],
            label: {
              normal: {
                show: false
              }
            },
            data: []
          },
          {
            type: 'pie',
            center: ['25%', '50%'],
            radius: [convertRem(0.4075), convertRem(0.4125)],
            data: [100],
            label: {
              show: false
            }
          },
          {
            color: ['#32F0FE', '#D7087E', '#3D6CFC'],
            type: 'pie',
            center: ['75%', '50%'],
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
            center: ['75%', '50%'],
            radius: [convertRem(0.4075), convertRem(0.4125)],
            data: [100],
            label: {
              show: false
            }
          }
        ]
      },
    }
  },
  props: ['delayShow'],
  methods: {
    changeJJqs (type) {
      this.activeJJqs = type
      let newOption = deepClone(this.option)
      request.normalPort({
        codeArray: ['Xh00007', 'Xh00008', 'Xh00009', 'Xh00010', 'Xh00011', 'Xh00012', 'Xh00013', 'Xh00014', 'Xh00015', 'Xh00016', 'Xh00017', 'Xh00018']
      }).then(res => {
        let arr1 = [
          { name: '生物医药产业', value: 0 },
          { name: '生物医药产业占比', value: 0 },
          { name: '新材料及装备制造产业', value: 0 },
          { name: '新材料及装备制造产业占比', value: 0 },
          { name: 'IT及现代服务产业', value: 0 }
        ]
        let arr2 = [
          { name: '生物医药产业', value: 0 },
          { name: '生物医药产业占比', value: 0 },
          { name: '新材料及装备制造产业', value: 0 },
          { name: '新材料及装备制造产业占比', value: 0 },
          { name: 'IT及现代服务产业', value: 0 }
        ]
        let arrtest1 = 0;
        let arrtest2 = 0;
        res.data.data.resultList.map((item, index, arry) => {
          if (item.code.slice(-2) < 13) {
            arr1[index] = item.value;
            arrtest1 = 1;
          } else {
            arr2[index] = item.value;
            arrtest2 = 1;
          }
        })

        if (arrtest1 == 0) {
          newOption.series[1].data = []
          newOption.series[0].data = []
        } else {
          newOption.series[0].data = arr1
        }
        if (arrtest2 == 0) {
          newOption.series[3].data = []
          newOption.series[2].data = []
        } else {
          newOption.series[2].data = arr2
        }

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
