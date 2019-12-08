<template>
  <div class="BoxFive">
    <box title="企业发展趋势" line-with="short">
      <chart ref="chart24" :skey="'jjqs24'" :option="option"></chart>
    </box>
  </div>
</template>

<script>
  import box from '../../../../components/box/index'
  import request from '@/api/request'
  import chart from '../../../../components/charts/echarts/chart'
  import { convertRem } from '../../../../utils'

  export default {
    name: 'BoxFive',
    data () {
      return {
        option: {
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            data: ['月累计', '月新增'],
            color: ['red', 'yellow'],
            top: 'top',
            right: 'right',
            orient: 'horizontal',
            width: '100%',
            textStyle: {
              color: '#9DA5C2',
              fontSize: convertRem(0.075)
            },
            icon: 'rect',
            itemWidth: convertRem(0.075),
            itemHeight: convertRem(0.075),
          },
          grid: {
            top: convertRem(0.2),
            left: 0,
            right: convertRem(0.25),
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
              splitLine: {
                show: false
              },
              name: '月份',
              nameGap: convertRem(0.055),
              nameTextStyle:{
                color: '#B5BDDB',
                fontSize: convertRem(0.075)
              },
              axisLine: {
                lineStyle: {
                  color: '#9DA5C2',
                  width: convertRem(0.005)
                }
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                color: '#9DA5C2',
                fontSize: convertRem(0.075)
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              splitLine: {
                lineStyle: {
                  color: '#354471',
                  width: convertRem(0.005),
                  type: 'dotted'
                }
              },
              name: '个',
              nameGap: convertRem(0.055),
              nameTextStyle:{
                color: '#B5BDDB',
                fontSize: convertRem(0.075)
              },
              axisLine: {
                lineStyle: {
                  color: '#9DA5C2',
                  width: convertRem(0.005)
                }
              },
              axisLabel: {
                color: '#B5BDDB',
                fontSize: convertRem(0.075)
              }
            }
          ],
          series: [
            {
              name: '月累计',
              type: 'bar',
              barWidth: convertRem(0.085),
              itemStyle: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: "rgba(136, 82, 222, 1)"
                },
                  {
                    offset: 1,
                    color: "rgba(137, 80, 223, 0)"
                  }
                ]),
                borderWidth: convertRem(0.005),
                borderColor: '#8A50E2'
              },
              label: {
                normal: {
                  show: true,
                  position: 'top',
                  lineHeight: convertRem(0.075),
                  textStyle: {
                    color: '#fff',
                    fontSize: convertRem(0.1)
                  }
                }
              },
              data: [9, 10, 15, 23, 25, 34, 43, 50, 53, 67, 77, 87]
            },
            {
              name: '月新增',
              type: 'bar',
              barWidth: convertRem(0.085),
              barGap: '-100%',
              itemStyle: {
                color: 'transparent'
              },
              data: [2, 2, 2, 12, 20, 21, 10, 15, 26, 25, 24, 27],
              label: {
                normal: {
                  show: true,
                  width: convertRem(0.07),
                  height: convertRem(0.01),
                  position: [0, -convertRem(0.0375)],
                  lineHeight: convertRem(0.075),
                  distance: 1,
                  formatter: [
                    '{b|}',
                    '{a|{c}}',
                  ].join(''),
                  rich: {
                    a: {
                      color: '#32F0FE',
                      fontSize: convertRem(0.1)
                    },
                    b: {
                      width: convertRem(0.085),
                      height: 0,
                      borderWidth: convertRem(0.005),
                      borderColor: '#32F0FE'
                    }
                  }
                }
              }
            }
          ]
        }
      }
    },
    methods: {
      getData (code) {
        request.normalPort({
          codeArray: code
        }).then(res => {
          let newData1 = [];
          let newData2 = [];
          res.data.data.resultList.map((item) => {
            if (item.code == 'Xm00023') {
              newData1.push(item.value)
            } else if (item.code == 'Xm00024') {
              newData2.push(item.value)
            }
            this.option.series[0].data = newData1;
            this.option.series[1].data = newData2;
          })
        })
      }
    },
    mounted () {
      this.getData(['Xm00023', 'Xm00024'])
    },
    components: {
      box, chart
    }
  }
</script>

<style lang="scss" scoped>
  .BoxFive {

  }
</style>
