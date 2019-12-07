<template>
  <div class="index">
    <div class="top">
      <pieLevel2 name="区域内排名" :value="info.areaSort" class="left"></pieLevel2>
      <pieLevel1 :name="info.name" :value="info.total"></pieLevel1>
      <pieLevel2 name="所属产业内排名" :value="info.industrySort" class="right"></pieLevel2>
      <labelList></labelList>
    </div>
    <div class="bottom">
      <p class="line" :style="{img:'bottom-line2.png'}|imgLoad()"></p>
      <div class="pie">
        <pieLevel3 v-for="item in items" :key="item.name" :name="item.name" :value="item.value"></pieLevel3>
      </div>
      <sChart skey="third-bottom" :option="option"></sChart>
    </div>
  </div>
</template>

<script>
  import pieLevel1 from './pieLevel1'
  import pieLevel2 from './pieLevel2'
  import pieLevel3 from './pieLevel3'
  import labelList from './labelList'
  import sChart from '../../../../components/charts/echarts/chart'
  import { deepClone, convertRem } from '../../../../utils'

  export default {
    name: 'index',
    components: {
      pieLevel1,
      pieLevel2,
      pieLevel3,
      labelList,
      sChart
    },
    data () {
      return {
        info: {
          name: '爱德华科技信息公司',
          total: 90,
          areaSort: 5,
          industrySort: 13
        },
        items: [
          {
            name: '发展潜力',
            value: 0,
          },
          {
            name: '管理能力',
            value: 0,
          },
          {
            name: '贡献能力',
            value: 0,
          },
          {
            name: '效能水平',
            value: 0,
          },
        ],
        yName: ['成立年限', '营收规模', '税收规模', '企业规模', '人均能效'],
        value: ['80', '22', '1.12', '2.5', '4.8'],
        option: {
          tooltip: {
            trigger: 'axis',
            show: true,
            formatter: (params) => {
              // console.log('params', params)
              return params[0].name + `：` + params[0].value + `%`;
            },
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            left: 0,
            right: 0,
            bottom: 0,
            top: convertRem(0.2),
            containLabel: true
          },
          yAxis: {
            show: true,
            type: 'value',
            axisLine: {
              show: false
            },
            axisLabel: {
              show: true,
              margin: convertRem(0.045),
              textStyle: {
                color: '#9DA5C1',
                fontSize: convertRem(0.075)
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#384876',
                type: 'dashed',
                width: convertRem(0.005)
              }
            },
            axisTick: {
              show: false
            }
          },
          xAxis: {
            type: 'category',
            data: [],
            axisLabel: {
              show: true,
              margin: convertRem(0.045),
              interval: 0,
              textStyle: {
                color: "#fff",
                fontSize: convertRem(0.075)
              }
            },
            // 隐藏x轴刻度
            axisTick: {
              show: false
            }
          },
          series: [
            {
              name: '',
              type: 'bar',
              barGap: '-100%',
              zlevel: 10,
              data: [],
              label: {
                normal: {
                  show: true,
                  position: 'top',
                  textStyle: {
                    color: '#ffffff',
                    fontSize: convertRem(0.1)
                  },
                  formatter: '{c}%'
                }
              },
              barWidth: '20%',//宽度
              itemStyle: {
                normal: {
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#D7087E'
                  },
                    {
                      offset: 1,
                      color: '#001942'
                    }
                  ])
                }
              },
            },
            {
              name: '',
              type: 'bar',
              data: [100, 100, 100, 100, 100],
              barWidth: '20%', //宽度
              itemStyle: {
                normal: {
                  color: "rgba(0, 61, 249, 0.3)"
                }
              },
            }
          ]
        }
      }
    },
    methods: {
      loadData () {
        let newOption = deepClone(this.option)
        newOption.xAxis.data = this.yName
        newOption.series[0].data = this.value
        this.option = newOption
      }
    },
    mounted () {
      this.loadData()
    }
  }
</script>

<style lang="scss" scoped>
  .index {
    .top {
      display: flex;
      justify-content: center;
      height: 5rem;
      position: relative;
      padding-top: 0.3rem;
      box-sizing: border-box;

      .pieLevel1 {
        position: absolute;
        top: 0.74rem;
        left: 50%;
        transform: translate(-50%, 0);
      }

      .pieLevel2 {
        position: absolute;
        top: 2.135rem;

        &.left {
          left: 0.7rem;
        }

        &.right {
          right: 0.7rem;
        }
      }

      .labelList {
        position: absolute;
        top: 4.03rem;
        left: 50%;
        transform: translate(-50%, 0);
      }
    }

    .bottom {
      display: flex;
      justify-content: center;
      position: relative;
      padding-top: 0.55rem;
      flex-direction: column;
      align-items: center;

      .line {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%);
        width: 8.075rem;
        height: 0.235rem;
      }

      .pie {
        display: flex;
        justify-content: center;
      }

      .sCharts {
        height: 1.1rem;
        width: 4.8rem;
      }
    }
  }
</style>
<style>
  .transText {
    background-image: -webkit-linear-gradient(to bottom, #fff, #0BFEFB);
    background-image: linear-gradient(to bottom, #fff, #0BFEFB);
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
