<template>
  <div class="subPie">
    <chart class="chart" ref="chart8" :skey="skey" :option="option"></chart>
    <div class="circle"><span></span></div>
    <p>{{ stitle }}</p>
  </div>
</template>

<script>
  import chart from '../../../public/charts/echarts/chart'
  import { deepClone, convertRem } from '../../../utils'

  export default {
    name: 'subPie',
    data () {
      return {
        option: {
          title: {
            text: this.value,
            left: 'center',
            top: 'center',
            textStyle: {
              color: '#ECEFF5',
              fontSize: convertRem(0.10),
              fontFamily: 'NotoSansHans-Bold',
              transform: 'translate(-50%)'
            }
          },
          series: [
            // 内圆1
            {
              type: 'pie',
              radius: [convertRem(0.416 / 2), convertRem(0.426 / 2)],
              center: ['50%', '50%'],
              itemStyle: {
                normal: {
                  color: '#2167F6'
                }
              },
              label: {
                normal: {
                  position: 'center'
                }
              },
              labelLine: {
                normal: {
                  show: false,
                  length: convertRem(0.50),
                  length2: convertRem(0.50),
                  lineStyle: {
                    color: '#fff',
                    width: convertRem(0.2)
                  }
                }
              },
              data: [100]
            },
            // 进度圈1
            {
              type: 'pie',
              clockWise: true,
              radius: [convertRem(0.47 / 2), convertRem(0.497 / 2)],
              center: ['50%', '50%'],
              data: [
                {
                  value: this.percent,
                  itemStyle: {
                    normal: {
                      borderWidth: 0,
                      color: '#00FEFF',
                      label: {
                        show: false
                      },
                      labelLine: {
                        normal: {
                          show: false
                        }
                      }
                    }
                  }
                },
                {
                  value: 100 - this.percent,
                  itemStyle: {
                    normal: {
                      label: {
                        show: false
                      },
                      labelLine: {
                        normal: {
                          show: false
                        }
                      },
                      color: '#0B163F',
                      borderColor: '#000',
                      borderWidth: 0
                    }
                  }
                }
              ],
              label: {
                normal: {
                  show: false
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              }
            },
            // 粗线圈1
            {
              type: 'pie',
              silent: true,
              radius: [convertRem(0.455 / 2), convertRem(0.465 / 2)],
              center: ['50%', '50%'],
              label: {
                normal: {
                  show: false
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              }
            }
          ]
        }
      }
    },
    props: ['stitle', 'value', 'skey', 'percent'],
    components: {
      chart
    },
    methods: {
      buildOption () {
        console.log(this.percent)
        let newOption = deepClone(this.option)
      }
    },
    mounted () {
      this.buildOption()
    }
  }
</script>

<style lang="scss" scoped>
  .subPie {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;

    .chart {
      width: 0.65rem;
      max-width: 0.65rem;
      height: 0.65rem;
      max-width: 0.65rem;
    }

    .circle {
      position: absolute;
      width: 0.65rem;
      height: 0.65rem;
      display: flex;
      justify-content: center;
      align-items: center;
      span{
        border-radius: 50%;
        width: 0.45rem;
        height: 0.45rem;
        border:0.5px dashed #fff;
      }
    }

    p {
      flex-grow: 1;
      color: #35D2B2;
      font-size: 0.1rem;
    }
  }
</style>
