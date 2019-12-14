<template>
  <div class="BoxThree">
    <box title="投资项目分布" line-with="short">
      <!--      图表上方的字样-->
      <!--      框边-->
      <div class="titleLine" id="titleLine1">
        <div :style="{img:'yuanjiaojuxing.png'} | imgLoad()" class="rec1"></div>
        <div :style="{img:'yuanjiaojuxing1.png'} | imgLoad()" class="rec2"></div>
        <div :style="{img:'yuanjiaojuxing2.png'} | imgLoad()" class="rec3"></div>
        <div :style="{img:'yuanjiaojuxing3.png'} | imgLoad()" class="rec4"></div>
      </div>
      <!--      框背景-->
      <div class="titleLine" id="titleLine2">
        <div :style="{img:'rec523.png'} | imgLoad()" class="rec1 rec1Bg"></div>
        <div :style="{img:'rec523.png'} | imgLoad()" class="rec2 rec2Bg"></div>
        <div :style="{img:'rec523.png'} | imgLoad()" class="rec3 rec3Bg"></div>
        <div :style="{img:'rec523.png'} | imgLoad()" class="rec4 rec4Bg"></div>
      </div>
      <!--      字-->
      <div class="titleLine" id="titleLine3">
        <div class="rec1 rec1Bg">投资项目总数</div>
        <div class="rec2 rec2Bg">{{ projectName }}个</div>
        <div class="rec3 rec3Bg">本年完成投资总额</div>
        <div class="rec4 rec4Bg">{{ projectMoney }}亿元</div>
      </div>

      <chart ref="chart1" :skey="'jjqs3'" :option="option"></chart>
    </box>
  </div>
</template>

<script>
import box from '../../../../components/box/index'
import chart from '../../../../components/charts/echarts/chart'
import { deepClone, convertRem } from '../../../../utils'
import request from '@/api/request'

export default {
  name: 'BoxThree',
  data () {
    return {
      projectName: 0,
      projectMoney: 0,
      option: {
        grid: {
          top: convertRem(0.4),
          left: 0,
          right: 0,
          bottom: 0,
          containLabel: true
        },
        xAxis: {
          data: [],
          axisLabel: {
            textStyle: {
              color: '#B5BDDB',
              fontSize: convertRem(0.075)
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
          name: '个',
          nameGap: convertRem(0.055),
          nameTextStyle: {
            color: '#B5BDDB',
            fontSize: convertRem(0.075)
          },
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
            barWidth: convertRem(0.2),
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
            data: []
          }
        ]
      }
    }
  },
  methods: {
    changeJJqs () {
      let newOption = deepClone(this.option)
      request.normalPort({
        codeArray: ['Xh00035']
      }).then(res => {
        let arr = []
        let nameArr = []
        let data = JSON.parse(res.data.data.resultList[0].value)
        data.map((item) => {
          arr.push(item.y1)
          nameArr.push(item.x1)
        })
        newOption.series[0].data = arr
        newOption.xAxis.data = nameArr
        this.option = newOption
      })
    },
    getTop () {
      request.normalPort({
        codeArray: ['Xh00033', 'Xh00034']
      }).then(res => {
        res.data.data.resultList.map((item) => {
          if (item.code.slice(-2) == 33) {
            this.projectName = item.value
          } else if (item.code.slice(-2) == 34) {
            this.projectMoney = item.value
          }
        })
      })
    }
  },
  mounted () {
    this.changeJJqs()
    this.getTop()
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

      .rec1 {
        width: 0.905rem;
        height: 100%;
        /*background-color: #000;*/
      }

      .rec1Bg {

      }

      .rec2 {
        width: 0.57rem;
        height: 100%;
        /*background-color: #000;*/
      }

      .rec3 {
        width: 0.905rem;
        height: 100%;
        margin-left: 0.16rem;
        /*background-color: #000;*/
      }

      .rec4 {
        width: 0.82rem;
        height: 100%;
        /*background-color: #000;*/
      }
    }

    #titleLine1 > div {
      opacity: 0;
      animation: flow1 0.33s 1.33s forwards;
    }

    #titleLine2 > div {
      opacity: 0;
      animation: flow1 0.167s 1.5s forwards;
    }

    #titleLine3 > div {
      opacity: 0;
      animation: flow1 0.33s 1.67s forwards;
    }

    @keyframes flow1 {
      0% {
        opacity: 0;
        transform: scaleX(0.5);
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
</style>
