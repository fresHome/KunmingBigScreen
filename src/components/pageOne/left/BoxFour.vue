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
          <p class="title">工程项目（总数{{ value1 }}个）</p>
          <div>
            <p>
              <span class="name">累计落地开工率</span>
              <span class="value" :style="{img:'bg-value-green.png'}|imgLoad()">{{ value2 }}%</span>
            </p>
            <p>
              <span class="name">落地开工率目标值</span>
              <span class="value" :style="{img:'bg-value-red.png'}|imgLoad()">{{ value3 }}%</span>
            </p>
          </div>
        </div>
        <div class="item">
          <p class="title">外资引进（亿美元）</p>
          <div>
            <p>
              <span class="name">累计利用外资</span>
              <span class="value" :style="{img:'bg-value-green.png'}|imgLoad()">{{ value4 }}亿美元</span>
            </p>
            <p>
              <span class="name">利用外资目标</span>
              <span class="value" :style="{img:'bg-value-red.png'}|imgLoad()">{{ value5 }}亿美元</span>
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
            right: '5%',
            bottom: '0',
            containLabel: true
          },
          yAxis: [
            {
              type: 'category',
              data: [],
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
          series: [
            {
              type: 'bar',
              barWidth: convertRem(0.05),
              itemStyle: {
                normal: {
                  color: color
                }
              },
              data: [],
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
        value4: '40%',
        value5: '40%',
      }
    },
    props: ['delayShow'],
    methods: {
      getChartData (type) {
        request.normalPort({
          codeArray: ['Xh00046']
        }).then(res => {
          let { data } = res
          let list = JSON.parse(data.data.resultList[0].value)
          let newOption = deepClone(this.option)
          let y1Data = []
          let y2Data = []
          let xData = []
          list.map(item => {
            xData.push(item.x1)
            y1Data.push(item.y1)
            y2Data.push(item.y2)
          })
          newOption.yAxis[0].data = xData
          newOption.series[0].data = y1Data
          newOption.series[1].data = y2Data
          this.option = newOption
        })
      },
      getBoxData () {
        request.normalPort({
          codeArray: ['Xh00041', 'Xh00042', 'Xh00043', 'Xh00044', 'Xh00045']
        }).then(res => {
          let { data } = res
          console.log(data)
          data.data.resultList.map(item => {
            switch (item.code) {
              case 'Xh00041':
                this.value4 = item.value
                break
              case 'Xh00042':
                this.value5 = item.value
                break
              case 'Xh00043':
                this.value1 = item.value
                break
              case 'Xh00044':
                this.value2 = item.value
                break
              case 'Xh00045':
                this.value3 = item.value
                break
              default:
                break
            }
          })
        })
      }
    },
    mounted () {
      this.getChartData()
      this.getBoxData()
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
      opacity: 0;
      animation: flow 0.5s 1.33s forwards;

      .chart {
        height: 0.9rem;
      }
    }

    .split {
      width: 0.03rem;
      margin-right: 0.2rem;
      opacity: 0;
      animation: flow 0.5s 1.27s forwards;
    }

    .right {
      flex-grow: 1;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      opacity: 0;
      animation: flow 0.5s 1.4s forwards;


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

  @keyframes flow {
    from {
      opacity: 0;
      margin-top: 0.5rem;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
</style>
