<template>
  <div class="BoxEight">
    <box title="知识产权分布" line-with="short">
      <chart ref="chart8" :skey="'jjqs8'" :option="option" v-if="delayShow"></chart>
    </box>
  </div>
</template>

<script>
import box from '../../public/box'
import chart from '../../public/charts/echarts/chart'
import { deepClone, convertRem } from '../../utils'

var value = 83;

function _pie3 () {
  let dataArr = [];
  for (var i = 0; i < 100; i++) {
    if (i % 2 === 0) {
      dataArr.push({
        name: (i + 1).toString(),
        value: 25,
        itemStyle: {
          normal: {
            color: "rgb(126,190,255)",
            borderWidth: 0,
            borderColor: "rgba(0,0,0,0)"
          }
        }
      })
    } else {
      dataArr.push({
        name: (i + 1).toString(),
        value: 20,
        itemStyle: {
          normal: {
            color: "rgba(0,0,0,0)",
            borderWidth: 0,
            borderColor: "rgba(0,0,0,0)"
          }
        }
      })
    }

  }
  return dataArr
}

export default {
  name: 'BoxEight',
  data () {
    return {
      option: {
        title: [{
          text: '154',
          left: convertRem(0.22),
          top: convertRem(0.27),
          textStyle: {
            color: '#ECEFF5',
            fontSize: convertRem(0.10),
            fontFamily: 'NotoSansHans-Bold'
          },
        },
          {
            text: '26',
            left: convertRem(1.67),
            top: convertRem(0.27),
            textStyle: {
              color: '#ECEFF5',
              fontSize: convertRem(0.10),
              fontFamily: 'NotoSansHans-Bold'
            },
          },
          {
            text: '133',
            left: convertRem(3.05),
            top: convertRem(0.27), //top待调整
            textStyle: {
              color: '#ECEFF5',
              fontSize: convertRem(0.10),
              fontFamily: 'NotoSansHans-Bold'
            },
          },
          {
            text: '55',
            left: convertRem(0.245),
            top: convertRem(1.025), //top待调整
            textStyle: {
              color: '#ECEFF5',
              fontSize: convertRem(0.10),
              fontFamily: 'NotoSansHans-Bold'
            },
          },
          {
            text: '45',
            left: convertRem(1.67),
            top: convertRem(1.025), //top待调整
            textStyle: {
              color: '#ECEFF5',
              fontSize: convertRem(0.10),
              fontFamily: 'NotoSansHans-Bold'
            },
          },
          {
            text: '109',
            left: convertRem(3.05),
            top: convertRem(1.025), //top待调整
            textStyle: {
              color: '#ECEFF5',
              fontSize: convertRem(0.10),
              fontFamily: 'NotoSansHans-Bold'
            },
          },
        ],
        xAxis: {
          splitLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          axisLine: {
            show: false
          }
        },
        yAxis: {
          splitLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          axisLine: {
            show: false
          }
        },
        series: [
          // 内圆1
          {
            type: 'pie',
            radius: [convertRem(0.416 / 2), convertRem(0.426 / 2)],
            center: ['10%', '25%'],
//            z: 0,
            itemStyle: {
              normal: {
                color: "#2167F6",
              }
            },
            label: {
              normal: {
                position: "center",
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
            data: [100],
          },
          // 进度圈1
          {
            type: 'pie',
            clockWise: true,
            radius: [convertRem(0.47 / 2), convertRem(0.497 / 2)],
            center: ['10%', '25%'],
            data: [
              {
                value: value,
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
                    },
                  },
                }
              },
              {
                value: 100 - value,
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
                },
              }
            ],
            label: {
              normal: {
                show: false
              },
            },
            labelLine: {
              normal: {
                show: false
              }
            },
          },
          //粗线圈1
          {
            type: 'pie',
            zlevel: 4,
            silent: true,
            radius: [convertRem(0.455 / 2), convertRem(0.465 / 2)],
            center: ['10%', '25%'],
            label: {
              normal: {
                show: false
              },
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: _pie3()
          },

          // 内圆2
          {
            type: 'pie',
            radius: [convertRem(0.416 / 2), convertRem(0.426 / 2)],
            center: ['50%', '25%'],
//            z: 0,
            itemStyle: {
              normal: {
                color: "#2167F6",
              }
            },
            label: {
              normal: {
                position: "center",
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
            data: [100],
          },
          // 进度圈2
          {
            type: 'pie',
            clockWise: true,
            radius: [convertRem(0.47 / 2), convertRem(0.497 / 2)],
            center: ['50%', '25%'],
            data: [
              {
                value: value,
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
                    },
                  },
                }
              },
              {
                value: 100 - value,
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
                },
              }
            ],
            label: {
              normal: {
                show: false
              },
            },
            labelLine: {
              normal: {
                show: false
              }
            },
          },
          //粗线圈2
          {
            type: 'pie',
            zlevel: 4,
            silent: true,
            radius: [convertRem(0.455 / 2), convertRem(0.465 / 2)],
            center: ['50%', '25%'],
            label: {
              normal: {
                show: false
              },
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: _pie3()
          },

          // 内圆3
          {
            type: 'pie',
            radius: [convertRem(0.416 / 2), convertRem(0.426 / 2)],
            center: ['90%', '25%'],
//            z: 0,
            itemStyle: {
              normal: {
                color: "#2167F6",
              }
            },
            label: {
              normal: {
                position: "center",
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
            data: [100],
          },
          // 进度圈3
          {
            type: 'pie',
            clockWise: true,
            radius: [convertRem(0.47 / 2), convertRem(0.497 / 2)],
            center: ['90%', '25%'],
            data: [
              {
                value: value,
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
                    },
                  },
                }
              },
              {
                value: 100 - value,
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
                },
              }
            ],
            label: {
              normal: {
                show: false
              },
            },
            labelLine: {
              normal: {
                show: false
              }
            },
          },
          //粗线圈3
          {
            type: 'pie',
            zlevel: 4,
            silent: true,
            radius: [convertRem(0.455 / 2), convertRem(0.465 / 2)],
            center: ['90%', '25%'],
            label: {
              normal: {
                show: false
              },
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: _pie3()
          },

          // 内圆4
          {
            type: 'pie',
            radius: [convertRem(0.416 / 2), convertRem(0.426 / 2)],
            center: ['10%', '75%'],
//            z: 0,
            itemStyle: {
              normal: {
                color: "#2167F6",
              }
            },
            label: {
              normal: {
                position: "center",
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
            data: [100],
          },
          // 进度圈4
          {
            type: 'pie',
            clockWise: true,
            radius: [convertRem(0.47 / 2), convertRem(0.497 / 2)],
            center: ['10%', '75%'],
            data: [
              {
                value: value,
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
                    },
                  },
                }
              },
              {
                value: 100 - value,
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
                },
              }
            ],
            label: {
              normal: {
                show: false
              },
            },
            labelLine: {
              normal: {
                show: false
              }
            },
          },
          //粗线圈4
          {
            type: 'pie',
            zlevel: 4,
            silent: true,
            radius: [convertRem(0.455 / 2), convertRem(0.465 / 2)],
            center: ['10%', '75%'],
            label: {
              normal: {
                show: false
              },
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: _pie3()
          },

          // 内圆5
          {
            type: 'pie',
            radius: [convertRem(0.416 / 2), convertRem(0.426 / 2)],
            center: ['50%', '75%'],
//            z: 0,
            itemStyle: {
              normal: {
                color: "#2167F6",
              }
            },
            label: {
              normal: {
                position: "center",
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
            data: [100],
          },
          // 进度圈5
          {
            type: 'pie',
            clockWise: true,
            radius: [convertRem(0.47 / 2), convertRem(0.497 / 2)],
            center: ['50%', '75%'],
            data: [
              {
                value: value,
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
                    },
                  },
                }
              },
              {
                value: 100 - value,
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
                },
              }
            ],
            label: {
              normal: {
                show: false
              },
            },
            labelLine: {
              normal: {
                show: false
              }
            },
          },
          //粗线圈5
          {
            type: 'pie',
            zlevel: 4,
            silent: true,
            radius: [convertRem(0.455 / 2), convertRem(0.465 / 2)],
            center: ['50%', '75%'],
            label: {
              normal: {
                show: false
              },
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: _pie3()
          },

          // 内圆6
          {
            type: 'pie',
            radius: [convertRem(0.416 / 2), convertRem(0.426 / 2)],
            center: ['90%', '75%'],
//            z: 0,
            itemStyle: {
              normal: {
                color: "#2167F6",
              }
            },
            label: {
              normal: {
                position: "center",
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
            data: [100],
          },
          // 进度圈6
          {
            type: 'pie',
            clockWise: true,
            radius: [convertRem(0.47 / 2), convertRem(0.497 / 2)],
            center: ['90%', '75%'],
            data: [
              {
                value: value,
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
                    },
                  },
                }
              },
              {
                value: 100 - value,
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
                },
              }
            ],
            label: {
              normal: {
                show: false
              },
            },
            labelLine: {
              normal: {
                show: false
              }
            },
          },
          //粗线圈6
          {
            type: 'pie',
            zlevel: 4,
            silent: true,
            radius: [convertRem(0.455 / 2), convertRem(0.465 / 2)],
            center: ['90%', '75%'],
            label: {
              normal: {
                show: false
              },
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: _pie3()
          },
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
  .BoxEight {

  }
</style>
