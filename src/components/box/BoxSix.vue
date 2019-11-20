<template>
  <div class="BoxOne">
    <box title="企业分析" :tab-on="tabOn">
      <chart ref="chart6" :skey="'jjqs6'" :option="option" v-if="delayShow"></chart>
    </box>
  </div>
</template>

<script>
import box from '../../public/box'
import chart from '../../public/charts/echarts/chart'
import { deepClone, convertRem } from '../../utils'
import request from '@/api/request'

var yData = ['河南', '福建', '浙江', '广东', '江苏']
var data = [3, 40, 50, 60, 33]
var color = ['#D7087E']
var seriesData = []
data.map((item, index) => {
  seriesData.push({
    name: '',
    value: item,
    itemStyle: {
      normal: {
        color: color[index],
        barBorderRadius: 12
      }
    }
  })
})

export default {
  name: 'BoxOne',
  data () {
    return {
      tabOn: 1,
      option: {
        backgroundColor: '#001a2b',
        legend: {
          show: false
        },
        grid: {
          left: '8%',
          right: '12%',
          bottom: '8%',
          top: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            show: false
          }
        },
        yAxis: [
          {
            type: 'category',
            axisTick: {
              show: false
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#363e83'
              }
            },
            axisLabel: {
              inside: false,
              textStyle: {
                color: '#00FFEC',
                fontWeight: 'normal',
                fontSize: 10
              }
            },
            data: yData
          }, {
            type: 'category',
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            splitArea: {
              show: false
            },
            splitLine: {
              show: false
            },
            data: yData
          }, {
            type: 'category',
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            splitArea: {
              show: false
            },
            splitLine: {
              show: false
            },
            data: yData
          }],
        series: [
          {
            name: '',
            type: 'bar',
            stack: '1',
            yAxisIndex: 0,
            data: seriesData,
            color: ['#D7087E'],
            barWidth: 4,
            z: 3
          },
          {
            name: '',
            type: 'bar',
            yAxisIndex: 2,
            data: [100, 100, 100, 100, 100],
            barWidth: 5,
            itemStyle: {
              color: '#001a2b',
              // barBorderRadius: 12,
              borderWidth: 0.5,
              borderColor: '#222E62',
            },
            label: {
              normal: {
                show: true,
                color: '#fff',
                fontSize: 10,
                //   fontWeight:bold,
                padding: [0, 0, 0, 20],
                position: 'right',
                formatter: function (params) {
                  return data[params.dataIndex]
                }
              }
            },
            z: 0
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
        this.option = newOption
      })
    }
  },
  mounted () {
//    this.changeJJqs()
  },
  components: {
    box, chart
  }
}
</script>

<style lang="scss" scoped>
  .BoxOne {

  }
</style>
