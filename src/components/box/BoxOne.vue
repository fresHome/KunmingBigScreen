<template>
  <div class="BoxOne">
    <box title="经济趋势" :tab-on="tabOn">
      <chart ref="chart1" :skey="'jjqs1'" :option="option" v-if="delayShow"></chart>
    </box>
  </div>
</template>

<script>
import box from '../../public/box'
import chart from '../../public/charts/echarts/chart'
import { deepClone, convertRem } from '../../utils'
import request from '@/api/request'

export default {
  name: 'BoxOne',
  data () {
    return {
      tabOn: 1,
      option: {
        grid: {
          top: '5%',
          left: 0,
          right: 0,
          bottom: 0,
          containLabel: true
        },
        legend: {
          top: 'top',
          right: 'right',
          orient: 'horizontal',
          textStyle: {
            color: '#AAECFF',
            fontSize: convertRem(0.12)
          },
          icon: 'rect',
          itemWidth: convertRem(0.075),
          itemHeight: convertRem(0.075),
          data: ['2019', '2018']
        },
        xAxis: {
          type: 'category',
          axisLine: {
            show: false
          },
          name: '月份',
          axisLabel: {
            color: '#8FCEEF',
            interval: 0,
            textStyle: {
              fontSize: '0.07rem'
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(102, 185, 251, 0.24)'
            }
          },
          axisTick: {
            show: false
          },
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        },
        yAxis: [
          {
            type: 'value',
            axisLine: {
              show: false
            },
            name: '亿元',
            axisLabel: {
              color: '#8FCEEF',
              textStyle: {
                fontSize: convertRem(0.07)
              }
            },
            splitLine: {
              show:false
            },
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          {
            type: 'line',
            name: '2018',
            color: '#D7087E',
            smooth: true,
            lineStyle: {
              width: convertRem(0.03),
              shadowColor: 'rgba(201,255,146,0.2)',
              shadowBlur: convertRem(0.2),
              color: {
                type: 'linear',

                colorStops: [{
                  offset: 0,
                  color: '#20186E' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#D7087E' // 100% 处的颜色
                }]
              }
            },
            showSymbol: false,
            data: []
          },
          {
            type: 'line',
            name: '2019',
            color: '#32F0FE',
            smooth: true,
            lineStyle: {
              width: convertRem(0.03),
              shadowColor: 'rgba(201,255,146,0.2)',
              shadowBlur: convertRem(0.2),
              color: {
                type: 'linear',
                colorStops: [{
                  offset: 0,
                  color: '#0F2088' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#32F0FE' // 100% 处的颜色
                }]
              }
            },
            showSymbol: false,
            data: []
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
        codeArray: ['Xh00005', 'Xh00006']
      }).then(res => {
        let arr1 = []
        let arr2 = []
        let time=[]
        res.data.data.resultList.map((item, index, arry) => {
          if (item.code == 'Xh00005') {
            arr1.push(item.value)
          }
          if (item.code == 'Xh00006') {
            arr2.push(item.value)
          }
          time.push(item.time)
        })
        newOption.xAxis.data=new Array([...new Set(time)])
        newOption.series[0].data = arr1
        newOption.series[1].data = arr2
        this.option = newOption
        console.log(this.option)
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
  .BoxOne {

  }
</style>
