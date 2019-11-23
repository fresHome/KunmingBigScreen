<template>
  <div class="BoxFour">
    <box title="招商引资">
      <div class="left">
        <p class="title">产业个性化项目完成比例</p>
        <chart class="chart" :skey="'zsyz'" :option="option"></chart>
      </div>
      <div class="split" :style="{img:'line-split.png'}|imgLoad()"></div>
      <div class="right">
        <div class="item">
          <p class="title">工程项目（总数10个）</p>
          <div>
            <p>
              <span class="name">累计落地开工率</span>
              <span class="value" :style="{img:'bg-value-green.png'}|imgLoad()">{{ value1 }}</span>
            </p>
            <p>
              <span class="name">落地开工率目标值</span>
              <span class="value" :style="{img:'bg-value-red.png'}|imgLoad()">{{ value2 }}</span>
            </p>
          </div>
        </div>
        <div class="item">
          <p class="title">外资引进（亿美元）</p>
          <div>
            <p>
              <span class="name">累计利用外资</span>
              <span class="value" :style="{img:'bg-value-green.png'}|imgLoad()">{{ value3 }}</span>
            </p>
            <p>
              <span class="name">利用外资目标</span>
              <span class="value" :style="{img:'bg-value-red.png'}|imgLoad()">{{ value4 }}</span>
            </p>
          </div>
        </div>
      </div>
    </box>
  </div>
</template>

<script>
import box from '../../../public/box/index'
import chart from '../../../public/charts/echarts/chart'
import { deepClone, convertRem } from '../../../utils'
import request from '@/api/request'
import echarts from 'echarts'

let color = new echarts.graphic.LinearGradient(1, 1, 1, 0, [{
  offset: 0.4,
  color: 'transparent'
},
{
  offset: 0.4,
  color: '#D7087E'
},
{
  offset: 0.6,
  color: '#D7087E'
},
{
  offset: 0.6,
  color: 'transparent'
}
])
export default {
  name: 'BoxFour',
  data () {
    return {
      option: {
        grid: {
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          containLabel: true
        },
        yAxis: [
          {
            type: 'category',
            data: ['全年目标', '本月目标', '全年目标', '本月目标'],
            inverse: true,
            axisTick: {
              show: false
            },
            axisLabel: {
              color: '#fff',
              fontSize: convertRem(0.075),
              inside: true,
              align: 'left',
              padding: [0, 0, convertRem(0.15), 0]
            },
            axisLine: {
              show: false
            }
          }
        ],
        xAxis: [
          {
            type: 'value',
            axisLabel: {
              show: false
            },
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            }
          }
        ],
        series: [{
          type: 'bar',
          barWidth: convertRem(0.05),
          data: [
            {
              value: 60,
              itemStyle: {
                normal: {
                  color: color
                }
              }
            }, {
              value: 23,
              itemStyle: {
                normal: {
                  color: color
                }
              }
            }, {
              value: 53,
              itemStyle: {
                normal: {
                  color: color
                }
              }
            }, {
              value: 53,
              itemStyle: {
                normal: {
                  color: color
                }
              }
            }
          ],
          label: {
            normal: {
              show: true,
              position: 'insideBottomRight',
              formatter: '{c}',
              distance: 0,
              padding: [0, 0, 0, convertRem(0.05)],
              offset: [convertRem(0.05), 0],
              color: '#fff',
              fontWeight: 'bold',
              fontSize: convertRem(0.075)
            }
          },
          itemStyle: {
            normal: {}
          }
        },
        {
          type: 'bar',
          barWidth: convertRem(0.05),
          xAxisIndex: 0,
          barGap: '-100%',
          data: [180, 120, 180, 120],
          label: {
            normal: {
              show: true,
              position: 'insideBottomRight',
              formatter: '{c}',
              distance: 0,
              offset: [convertRem(0.05), 0],
              color: '#B5BDDB',
              fontSize: convertRem(0.075)
            }
          },
          itemStyle: {
            normal: {
              color: '#001863'
            }
          },
          zlevel: -1
        }
        ]
      },
      value1: '40%',
      value2: '40%',
      value3: '40%',
      value4: '40%'
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
  .BoxFour {
    flex-grow: 1;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;

    .title {
      font-size: 0.1rem;
      color: #32C4A8;
      margin-bottom: 0.15rem;
    }

    .left {
      width: 1.8rem;
      min-width: 1.8rem;

      .chart {
        height: 0.9rem;
      }
    }

    .split {
      width: 0.03rem;
      margin-right: 0.2rem;
    }

    .right {
      flex-grow: 1;
      display: flex;
      justify-content: space-between;
      flex-direction: column;

      .item {
        p {
          line-height: 0.12rem;
          height: 0.12rem;
          display: flex;
          justify-content: space-between;
          margin: 0.02rem 0;

          .name {
            font-size: 0.075rem;
            color: #ADB5D3;
          }

          .value {
            width: 0.55rem;
            height: 0.12rem;
            font-size: 0.1rem;
            font-weight: bold;
            text-align: center;
            color: #fff;
          }
        }
      }
    }
  }
</style>
