<template>
  <div class="BoxThree">
    <box title="投资项目分布" line-with="short">
      <div class="titleLine">
        <div :style="{img:'yuanjiaojuxing.png'} | imgLoad()" id="rec1">投资项目总数</div>
        <div :style="{img:'yuanjiaojuxing1.png'} | imgLoad()" id="rec2">{{ projectName }}个</div>
        <div :style="{img:'yuanjiaojuxing2.png'} | imgLoad()" id="rec3">本年完成投资总额</div>
        <div :style="{img:'yuanjiaojuxing3.png'} | imgLoad()" id="rec4">{{ projectMoney }}亿元</div>
      </div>
      <chart ref="chart1" :skey="'jjqs3'" :option="option" v-if="delayShow"></chart>
    </box>
  </div>
</template>

<script>
import box from '../../public/box'
import chart from '../../public/charts/echarts/chart'
import { deepClone, convertRem } from '../../utils'
import request from '@/api/request'

let dataAxis = ['类型一', '类型二', '类型三', '类型四', '类型五', '其他']
let data = []
let yMax = 100
//let dataShadow = []
//for (let i = 0; i < data.length; i++) {
//  dataShadow.push(yMax)
//}

export default {
  name: 'BoxThree',
  data () {
    return {
      projectName: 0,
      projectMoney: 0,
      option: {
        grid: {
          top: convertRem(0.3),
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
  methods: {
    changeJJqs (type) {
      this.activeJJqs = type
      let newOption = deepClone(this.option)
      request.normalPort({
        codeArray: ['Xh00033', 'Xh00034', 'Xh00035', 'Xh00036', 'Xh00037', 'Xh00038', 'Xh00039', 'Xh00040']
      }).then(res => {
        let arr = []
        res.data.data.resultList.map((item, index, arry) => {
          if (item.code.slice(-2) > 34) {
            arr.push(item.value - 0)
          } else if (item.code.slice(-2) == 33) {
            this.projectName = item.value
          } else if (item.code.slice(-2) == 34) {
            this.projectMoney = item.value
          }
        })
        newOption.series[0].data = arr;

        this.option = newOption;
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
  .BoxThree {
    .titleLine {
      position: absolute;
      top: 0.1rem;
      left: 0.2rem;
      height: 0.175rem;
      font: 0.075rem/0.175rem NotoSansHans-Regular;
      color: #fff;
      display: flex;
      text-align: center;

      #rec1 {
        width: 0.905rem;
        height: 100%;
        /*background-color: #000;*/
      }

      #rec2 {
        width: 0.57rem;
        height: 100%;
        /*background-color: #000;*/
      }

      #rec3 {
        width: 0.905rem;
        height: 100%;
        margin-left: 0.16rem;
        /*background-color: #000;*/
      }

      #rec4 {
        width: 0.82rem;
        height: 100%;
        /*background-color: #000;*/
      }
    }
  }
</style>
