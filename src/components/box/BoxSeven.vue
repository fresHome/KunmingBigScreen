<template>
  <div class="BoxSeven">
    <box title="人才结构分布" line-with="short">
      <chart ref="chart7" :skey="'jjqs7'" :option="option" v-if="delayShow"></chart>
    </box>
  </div>
</template>

<script>
import box from '../../public/box'
import chart from '../../public/charts/echarts/chart'
import { deepClone, convertRem } from '../../utils'
// import request from '@/api/request'

export default {
  name: 'BoxSeven',
  data () {
    return {
      option: {
        backgroundColor: '#031845',
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {d}% <br/> {c}'
        },
        title: [{
          text: '年龄层次',
          x: '18%', // 怎么算？
          y: '43%',
          textStyle: {
            fontSize: convertRem(0.1),
            fontWeight: 'normal',
            color: '#B5BDDB'
          }
        },
          {
            text: '薪资等级',
            x: '68%', // 怎么算？
            y: '43%',
            textStyle: {
              fontSize: convertRem(0.1),
              fontWeight: 'normal',
              color: '#B5BDDB'
            }
          }],
        series: [
          {
            type: 'pie',
            radius: [convertRem(0.33), convertRem(0.345)],
            center: ['25%', '50%'],
            color: ['#32F0FE', '#D7087E', '#003DF9', '#A168FF'],
            data: [{
              value: 1,
              name: '80后'
            },
              {
                value: 1,
                name: '70后'
              },
              {
                value: 1,
                name: '其它'
              },
              {
                value: 2,
                name: '90后'
              }
            ],
            labelLine: {
              normal: {
                show: true,
                length: convertRem(0.2),
                length2: convertRem(0.1),
                lineStyle: {
                  color: '#fff',
                  width: convertRem(0.005)
                }
              }
            },
            label: {
              fontSize: convertRem(0.075),
              color: '#FFF',
              align: 'left'
            }
          },
          {
            type: 'pie',
            radius: [convertRem(0.33), convertRem(0.345)],
            center: ['75%', '50%'],
            color: ['#32F0FE', '#D7087E', '#003DF9', '#A168FF', '#E6FF3C'],
            data: [
              {
                value: 1,
                name: '80后'
              },
              {
                value: 1,
                name: '70后'
              },
              {
                value: 1,
                name: '其它'
              },
              {
                value: 2,
                name: '90后'
              },
              {
                value: 2,
                name: '60后',
                itemStyle: {
                  normal: {
                    borderColor: '#E6FF3C'
                  }
                }
              }
            ],
            labelLine: {
              normal: {
                show: true,
                length: convertRem(0.2),
                length2: convertRem(0.1),
                lineStyle: {
                  color: '#fff',
                  width: convertRem(0.005)
                }
              }
            },
            label: {
              fontSize: convertRem(0.075),
              color: '#FFF',
              align: 'left'

//              normal: {
//                formatter: '{b|{b}}\n{hr|}',
//                rich: {
//                  b: {
//                    fontSize: convertRem(0.075),
//                    color: '#FFF',
//                    align: 'left',
//                    padding: [convertRem(0.1),0,0,0]
//                  },
//                  hr: {
//                    borderColor: '#CCCCCC',
//                    width: '100%',
//                    borderWidth: convertRem(0.005),
//                    height: 0,
//                    padding: convertRem(0.004)
//                  },
//                  c: {
//                    fontSize: 32,
//                    align: 'center',
//                    padding: 4,
//                    color: '#00EDED'
//                  }
//                }
//              }
            }
          }
        ]
      }
    }
  },
  props: ['delayShow'],
  methods: {},
  components: {
    box, chart
  }
}
</script>

<style lang="scss" scoped>
  .BoxSeven {

  }
</style>
