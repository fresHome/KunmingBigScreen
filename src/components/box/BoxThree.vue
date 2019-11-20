<template>
  <div class="BoxThree">
    <box title="投资项目分布" line-with="short">
      <chart ref="chart1" :skey="'jjqs3'" :option="option" v-if="delayShow"></chart>
    </box>
  </div>
</template>

<script>
import box from '../../public/box'
import chart from '../../public/charts/echarts/chart'
import { deepClone, convertRem } from '../../utils'

let dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放']
let data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220]
let yMax = 500
let dataShadow = []

for (let i = 0; i < data.length; i++) {
  dataShadow.push(yMax)
}

export default {
  name: 'BoxThree',
  data () {
    return {
      option: {
        grid: {
          top: convertRem(0.13),
          left: convertRem(0.205),
          right: 0,
          bottom: convertRem(0.28)
        },
        xAxis: {
          data: dataAxis,
          axisLabel: {
            textStyle: {
              color: '#B5BDDB'
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#354471'
            }
          },
          z: 10
        },
        yAxis: {
          splitLine: {
            lineStyle: {
              color: '#354471',
              type: 'dotted',
              opacity: 0.5
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#354471'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#B5BDDB'
            }
          }
        },
        dataZoom: [
          {
            type: 'inside'
          }
        ],
        series: [
          {
            type: 'bar',
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    { offset: 0, color: '#8852DE' },
                    { offset: 1, color: 'rgba(0,0,0,0)' }
                  ]
                )
              }
            },
            data: data
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
  .BoxThree {

  }
</style>
