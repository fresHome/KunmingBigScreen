<template>
  <div class="BoxOne">
    <box title="经济趋势" :active-tab="activeTab" :tab-content="tabContent">
      <chart ref="chart1" :skey="'jjqs1111'" :option="option"></chart>
    </box>
  </div>
</template>

<script>
import box from '../../../../components/box/index'
import chart from '../../../../components/charts/echarts/chart'
import { deepClone, convertRem } from '../../../../utils'
import request from '@/api/request'

export default {
  name: 'BoxOne',
  data () {
    return {
      activeTab: 1,
      tabContent: [
        {
          num: 1,
          name: '营收',
          chart: 1
        },
        {
          num: 2,
          name: '税收',
          chart: 1
        }
      ],
      option: {
        grid: {
          top: convertRem(0.2),
          left: 0,
          right: convertRem(0.25),
          bottom: 0,
          containLabel: true
        },
        legend: {
          top: 'top',
          right: 'right',
          orient: 'horizontal',
          width: '100%',
          textStyle: {
            color: '#AAECFF',
            fontSize: convertRem(0.075)
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
              fontSize: convertRem(0.075)
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(102, 185, 251, 0.24)'
            }
          },
          nameTextStyle: {
            color: '#9DA4BF',
            fontSize: convertRem(0.075)
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
              textStyle: {
                color: '#8FCEEF',
                fontSize: convertRem(0.07)
              }
            },
            nameTextStyle: {
              color: '#9DA4BF',
              fontSize: convertRem(0.075)
            },
            splitLine: {
              show: false
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
    getLine (code) {
      let newOption1 = deepClone(this.option)
      request.normalPort({
        codeArray: [code]
      }).then(res => {
        let arr1 = []
        let arr2 = []
        let time = []
        res.data.data.resultList.map((item) => {
          if (item.time.indexOf(2018) >= 0) {
            arr1.push(item.value)
          }
          if (item.time.indexOf(2019) >= 0) {
            arr2.push(item.value)
          }
          time.push(item.time)
        })
        newOption1.xAxis.data = [...new Set(time)]
        newOption1.series[0].data = arr1
        newOption1.series[1].data = arr2
        this.option1 = newOption1
      })
    }
  },
  mounted () {
    this.getLine('Xm00015')
    window.eventHub.$on('changeTab', (item) => {
      if (item.chart == 1) {
        if (item.num == 1) {
          this.activeTab = 1
          this.getLine('Xm00015')
        } else {
          this.activeTab = 2
          this.getLine('Xm00016')
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
  .BoxOne {

  }
</style>
