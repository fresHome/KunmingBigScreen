<template>
  <div class="secondBoxThree">
    <box title="产业结构" :active-tab="activeTab" :tab-content="tabContent">
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
  name: 'secondBoxThree',
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
            color: '#AAECFF',   //图标字体颜色
            fontSize: convertRem(0.075)
          },
          icon: 'rect',
          itemWidth: convertRem(0.075),
          itemHeight: convertRem(0.075),
          data: ['生物医药', '新材料及装备制造', 'IT及现代服务']
        },
        xAxis: {
          type: 'category',
          axisLine: {
            show: false
          },
          name: '月份',
          nameGap: convertRem(0.055),
          nameTextStyle:{
            color: '#B5BDDB',
            fontSize: convertRem(0.075)
          },
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
            nameGap: convertRem(0.055),
            nameTextStyle:{
              color: '#B5BDDB',
              fontSize: convertRem(0.075)
            },
            axisLabel: {
              textStyle: {
                color: '#8FCEEF',
                fontSize: convertRem(0.07)
              }
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
            name: '生物医药',
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
            name: '新材料及装备制造',
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
                  color: '#0F2088' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#32F0FE' // 100% 处的颜色
                }]
              }
            },
            showSymbol: false,
            data: []
          },
          {
            type: 'line',
            name: 'IT及现代服务',
            color: '#D6EF3C',
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
        codeArray: code
      }).then(res => {
        let arr1 = []
        let arr2 = []
        let arr3 = []
        let time = []
        res.data.data.resultList.map((item) => {

          let cr
          item.codeRemark.split('').map((i, index) => {
            if (i.match(/^\s*$/) != null) {
              cr = item.codeRemark.slice(0, index)
            }
          })
          if (cr == '生物医药产业营收') {
            arr1.push(item.value)
          } else if (cr == '') {
            arr2.push(item.value)
          } else if (cr == '') {
            arr3.push(item.value)
          }

          time.push(item.time)
        })
        newOption1.xAxis.data = [...new Set(time)]
        newOption1.series[0].data = arr1
        newOption1.series[1].data = arr2
        newOption1.series[2].data = arr3
        this.option1 = newOption1
      })
    }
  },
  mounted () {
    this.getLine(['Xm00017', 'Xm00018', 'Xm00019'])
    window.eventHub.$on('changeTab', (item) => {
      if (item.chart == 1) {
        if (item.num == 1) {
          this.activeTab = 1
          this.getLine(['Xm00017', 'Xm00018', 'Xm00019'])
        } else {
          this.activeTab = 2
          this.getLine(['Xm00020', 'Xm00021', 'Xm00022'])
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
  .secondBoxThree {

  }
</style>
