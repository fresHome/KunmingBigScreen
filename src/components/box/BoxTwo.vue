<template>
  <div class="BoxNine">
    <box title="产业结构">
      <chart ref="chart2" :skey="'jjqs2'" :option="option" v-if="delayShow"></chart>
      <div class="leftSide">
        <div>{{leftData[0]}}</div>
        <div>{{leftData[1]}}</div>
        <div>{{leftData[2]}}</div>
      </div>
      <div class="rightSide">
        <div>{{rightData[0]}}</div>
        <div>{{rightData[1]}}</div>
        <div>{{rightData[2]}}</div>
      </div>
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
      leftData: [],
      rightData: [],
      option: {
        legend: {
          bottom: 'bottom',
          left: 'center',
          width: convertRem(3.75),
          itemWidth: convertRem(0.075),
          itemHeight: convertRem(0.075),
          textStyle: {
            fontSize: convertRem(0.075),
            color: '#B5BDDB'
          },
          data: ['生物医药产业', '新材料及装备制造产业', 'IT及现代服务产业']
        },
        grid: {
          left: '20%',
          top: 'top'
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
        let total1 = 0
        let total2 = 0
        data1.map((item, index, arry) => {
          if (item.codeRemark.indexOf(arr1[index].name) >= 0) {
            arr1[index].value = item.value
            total1 += Number(item.value)
          }
        })
        data1.map(item => {
          this.leftData.push(item.value + '/' + total1)
        })

        data2.map((item, index, arry) => {
          if (item.codeRemark.indexOf(arr2[index].name) >= 0) {
            arr2[index].value = item.value
            total1 += Number(item.value)
          }
        })
        data2.map(item => {
          this.rightData.push(item.value + '/' + total1)
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
    [class$='Side'] {
      /*background-color: yellow;*/
      font: 0.1rem bold NotoSansHans-Bold;
      position: absolute;

      :first-child {
        color: #32F0FE;
        margin-bottom: 0.105rem;
      }

      :nth-child(2) {
        color: #D7087E;
        margin-bottom: 0.105rem;
      }

      :nth-child(3) {
        color: #3D6CFC;
      }
    }

    .leftSide {
      left: 0.19rem;
      top: 0.365rem;
    }

    .rightSide {
      right: 0.19rem;
      top: 0.365rem;
    }
  }
</style>
