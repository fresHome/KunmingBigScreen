<template>
  <div class="BoxSix">
    <box title="企业分析" :active-tab="activeTab" :tab-content="tabContent" v-if="activeTab==1">
      <chart ref="bar1" :skey="'bar1'" :option="option1" class="chart" v-if="activeTab==1"></chart>
      <chart ref="bar2" :skey="'bar2'" :option="option2" class="chart" v-if="activeTab==1"></chart>
    </box>
    <box title="企业分析" :active-tab="activeTab" :tab-content="tabContent" v-else>
      <chart ref="chart63" :skey="'jjqs63'" :option="option3" v-if="activeTab==2"></chart>
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
//var color = ['#D7087E']
var seriesData = []
data.map((item, index) => {
  seriesData.push({
    name: '',
    value: item,
    itemStyle: {
      normal: {
//        color: color[index],
        barBorderRadius: 12
      }
    }
  })
})

export default {
  name: 'BoxSix',
  data () {
    return {
      tabContent: [
        {
          num: 1,
          name: '规模分布',
          chart: 6
        },
        {
          num: 2,
          name: '增长趋势',
          chart: 6
        }],
      activeTab: 1,
      option1: {
//        legend: {
//          show: false
//        },
        grid: {
//          left: '',
          right: '0',
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
            data: [],
            color: '#001a2b',
            barWidth: 5,
            z: 3,
            itemStyle: {
              color: '#001a2b',
              // barBorderRadius: 12,
              borderWidth: 0.5,
              borderColor: '#222E62'
            },
          },
          {
            name: '',
            type: 'bar',
            yAxisIndex: 2,
            data: [10000, 10000, 10000, 10000, 10000],
            barWidth: 5,
            itemStyle: {
              color: '#32F0FE',
              // barBorderRadius: 12,
              borderWidth: 0.5,
              borderColor: '#222E62'
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
      },
      option2: {
//        backgroundColor: '#001a2b',
//        legend: {
//          show: false,
//        },
        grid: {
          left: '0%',
//          right: '12%',
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
            data: [],
            color: '#D7087E',
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
      },
      option3: {
        grid: {
          top: '5%',
          left: 0,
          right: 0,
          bottom: 0,
          containLabel: true
        },
        legend: {
          top: 'top',
//          right: 'right',
          orient: 'horizontal',
          textStyle: {
            color: '#AAECFF',
            fontSize: convertRem(0.075)
          },
          icon: 'rect',
          itemWidth: convertRem(0.075),
          itemHeight: convertRem(0.075),
          data: ['全部', '生物医药', '新材料及装备制造', 'IT及现代服务业']
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
            name: '全部',
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
            name: '新材料及装备制造',
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
          },
          {
            type: 'line',
            name: 'IT及现代服务业',
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
          },
        ]
      }
    }
  },
  props: ['delayShow'],
  methods: {
    changeJJqs (type) {
      this.activeJJqs = type
      let newOption1 = deepClone(this.option1)
      let newOption2 = deepClone(this.option2)

      request.normalPort({
        codeArray: ['Xh00019', 'Xh00020', 'Xh00021', 'Xh00022', 'Xh00023', 'Xh00024', 'Xh00025', 'Xh00026', 'Xh00027', 'Xh00028']
      }).then(res => {
        let arr1 = []
        let arr2 = []
        res.data.data.resultList.map((item, index, arry) => {
          if (item.code.slice(-2) < 24) {
            //1营收
            arr1.push(item.value)
          } else {
            //2税收
            arr2.push(10000 - item.value)
          }
        })
        newOption1.series[0].data = arr1
        newOption2.series[0].data = arr2
        this.option1 = newOption1
        this.option2 = newOption2
      })
    },
    getLine (type) {
      this.activeJJqs = type
      let newOption = deepClone(this.option3)
      request.normalPort({
        codeArray: ['Xh00029', 'Xh00030', 'Xh00031', 'Xh00032']
      }).then(res => {
        let arr1 = []
        let arr2 = []
        let arr3 = []
        let arr4 = []
        let time = []
        res.data.data.resultList.map((item, index, arry) => {
          if (item.code == 'Xh00029') {
            arr1.push(item.value)
          }
          if (item.code == 'Xh00030') {
            arr2.push(item.value)
          }
          if (item.code == 'Xh00031') {
            arr3.push(item.value)
          }
          if (item.code == 'Xh00032') {
            arr4.push(item.value)
          }
          time.push(item.time)
        })
        newOption.xAxis.data = [...new Set(time)]
        newOption.series[0].data = arr1
        newOption.series[1].data = arr2
        newOption.series[2].data = arr3
        newOption.series[3].data = arr4
        this.option3 = newOption
      })
    }
  },
  mounted () {
    this.changeJJqs()
    this.getLine()
    eventHub.$on('changeTab', (item) => {
      if (item.chart == 6) {
        this.activeTab = item.num;
      }
    })

  },
  beforeDestroy () {
    eventHub.$off('changeTab')
  },
  components: {
    box, chart
  }
}
</script>

<style lang="scss" scoped>
  .BoxSix {
    .content {
      /*display: flex;*/

      .chart {
        /*flex: 1;*/
        width: 1.875rem;
      }
    }
  }
</style>
