<template>
  <div class="index">
    <box title="投资项目">
      <div class="circlebox">
        <ul>
          <li><span>投资项目总数</span>262 <i>个</i></li>
          <li><span>完成投资总额</span>221.43 <i>亿元</i></li>
        </ul>
<!--        <carousel :allCarousel="allCarousel"></carousel>-->
      </div>
    </box>
    <box title="招商引资">
      <div class="chart pie3">
        <chart skey="zsyzPie1" :option="zsyzPie1"></chart>
        <chart skey="zsyzPie2" :option="zsyzPie2"></chart>
        <chart skey="zsyzPie3" :option="zsyzPie3"></chart>
      </div>
    </box>
    <box title="明星企业">
      <tab2 :active="active" @change="change"></tab2>
      <div class="chart">
        <sort :data-list="dataList"></sort>
      </div>
    </box>
  </div>
</template>

<script>
import tab2 from '../../public/tab/index2.vue'
import box from '../../public/box'
import chart from '../../public/charts/echarts/chart'
//import sort from '../../public/sort'
//import carousel from '../../public/carousel'

const allData = {
  nsdh: [
    {
      name: '广厦控股集团有限公司',
      value: 98
    },
    {
      name: '浙江新湖集团股份有限公司',
      value: 96
    },
    {
      name: '浙江广播电视传媒集团有限公司',
      value: 78
    },
    {
      name: '正大青春宝药业有限公司',
      value: 56
    },
    {
      name: '农夫山泉股份有限公司',
      value: 37
    }
  ],
  ssgs: [
    {
      name: '浙江浙能电力股份有限公司',
      value: 1020
    },
    {
      name: '财通证券股份有限公司',
      value: 1025
    },
    {
      name: '宋城演艺发展股份有限公司',
      value: 960
    },
    {
      name: '绿城物业服务集团有限公司',
      value: 870
    },
    {
      name: '浙江每日互动网络科技股份有限公司',
      value: 820
    }
  ],
  djs: [
    {
      name: '蚂蚁金融服务集团',
      value: 360
    },
    {
      name: '阿里云计算有限公司',
      value: 260
    },
    {
      name: '杭州铜板街网络科技有限公司',
      value: 210
    },
    {
      name: '杭州口口相传网络技术有限公司',
      value: 190
    },
    {
      name: '杭州涂鸦信息技术有限公司',
      value: 160
    }
  ]
}
export default {
  name: 'index',
  data () {
    return {
      zsyzPie1: {
        title: {
          text: '目标',
          top: '25%',
          left: 'center',
          textStyle: {
            color: '#fff',
            fontSize: 18 * window.innerWidth / 1920
          }
        },
        legend: {
          bottom: 0,
          left: 'center',
          textStyle: {
            color: '#fff',
            fontSize: 14 * window.innerWidth / 1920
          },
          icon: 'roundRect',
          itemWidth: 8 * window.innerWidth / 1920,
          itemHeight: 8 * window.innerWidth / 1920
        },
        series: [
          {
            name: '来源',
            type: 'pie',
            center: ['50%', '30%'],
            radius: ['70%', '75%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
              normal: {
                show: false
              }
            },
            color: ['#00A0E9', '#001C4C'],
            data: [
              {
                value: 80,
                name: '目1',
                label: {
                  normal: {
                    show: false
                  }
                }
              },
              {
                value: 20,
                name: ''
              }
            ]
          },
          {
            name: '来源',
            type: 'pie',
            center: ['50%', '30%'],
            radius: ['60%', '65%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
              normal: {
                show: false
              }
            },
            color: ['#00FFFF', '#001C4C'],
            data: [
              {
                value: 80,
                name: '目2',
                label: {
                  normal: {
                    show: false
                  }
                }
              },
              {
                value: 20,
                name: ''
              }
            ]
          }
        ]
      },
      zsyzPie2: {
        title: {
          text: '引进',
          top: '25%',
          left: 'center',
          textStyle: {
            color: '#fff',
            fontSize: 18 * window.innerWidth / 1920
          }
        },
        legend: {
          bottom: 0,
          left: 'center',
          textStyle: {
            color: '#fff',
            fontSize: 14 * window.innerWidth / 1920
          },
          icon: 'roundRect',
          itemWidth: 8 * window.innerWidth / 1920,
          itemHeight: 8 * window.innerWidth / 1920
        },
        series: [
          {
            name: '来源',
            type: 'pie',
            center: ['50%', '30%'],
            radius: ['70%', '75%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
              normal: {
                show: false
              }
            },
            color: ['#00A0E9', '#001C4C'],
            data: [
              {
                value: 80,
                name: '目1',
                label: {
                  normal: {
                    show: false
                  }
                }
              },
              {
                value: 20,
                name: ''
              }
            ]
          },
          {
            name: '来源',
            type: 'pie',
            center: ['50%', '30%'],
            radius: ['60%', '65%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
              normal: {
                show: false
              }
            },
            color: ['#00FFFF', '#001C4C'],
            data: [
              {
                value: 80,
                name: '目2',
                label: {
                  normal: {
                    show: false
                  }
                }
              },
              {
                value: 20,
                name: ''
              }
            ]
          }
        ]
      },
      zsyzPie3: {
        title: {
          text: '实际\n到位',
          top: '22%',
          left: 'center',
          textStyle: {
            color: '#fff',
            fontSize: 18 * window.innerWidth / 1920
          }
        },
        legend: {
          bottom: 0,
          left: 'center',
          textStyle: {
            color: '#fff',
            fontSize: 14 * window.innerWidth / 1920
          },
          icon: 'roundRect',
          itemWidth: 8 * window.innerWidth / 1920,
          itemHeight: 8 * window.innerWidth / 1920
        },
        series: [
          {
            name: '来源',
            type: 'pie',
            center: ['50%', '30%'],
            radius: ['70%', '75%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
              normal: {
                show: false
              }
            },
            color: ['#00A0E9', '#001C4C'],
            data: [
              {
                value: 80,
                name: '目1',
                label: {
                  normal: {
                    show: false
                  }
                }
              },
              {
                value: 20,
                name: ''
              }
            ]
          },
          {
            name: '来源',
            type: 'pie',
            center: ['50%', '30%'],
            radius: ['60%', '65%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
              normal: {
                show: false
              }
            },
            color: ['#00FFFF', '#001C4C'],
            data: [
              {
                value: 80,
                name: '目2',
                label: {
                  normal: {
                    show: false
                  }
                }
              },
              {
                value: 20,
                name: ''
              }
            ]
          }
        ]
      },
      active: 'nsdh',
      list: ['nsdh', 'ssgs', 'djs'],
      number: 0,
      interval: null,
      dataList: []
    }
  },
  components: {
    box,
    chart,
    tab2
  },
  props: ['allCarousel'],
  methods: {
    change (type) {
      this.active = type
      this.dataList = allData[type]
    },
    init () {
      if (!this.interval) {
        this.interval = setInterval(() => {
          this.number++
        }, 5000)
      }
    },
    stop () {
      clearInterval(this.interval)
      this.interval = null
    }
  },
  watch: {
    number (val) {
      if (val == 3) {
        this.number = 0
      }
      this.change(this.list[this.number])
    },
    allCarousel (val) {
      if (val == 'go') {
        this.init()
      }
      if (val == 'stop') {
        this.stop()
      }
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang="scss" scoped>
  .index {
    .pie3 {
      display: flex;
      justify-content: flex-start;

      .sCharts {
        width: 33% !important;
      }
    }

    .chart {
      height: 2.2rem;
    }

    .circlebox {
      width: 100%;
      height: 2.4rem;
      overflow: hidden;

      ul {
        display: flex;
        justify-content: center;

        li {
          color: #fff;
          font-size: 0.2rem;
          padding: 0.05rem;

          span {
            font-size: 0.14rem;
            color: #98BEF1;
            margin-right: 0.15rem;
          }

          i {
            font-size: 0.14rem;
            font-style: normal;
          }
        }
      }
    }
  }
</style>
