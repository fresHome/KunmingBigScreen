<template>
  <div class="bottomMap">
    <bars v-for="(item,index) in $route.query.area=='东片区'?dpq:xpq"
          :style="item.style"
          :key="index"
          :title="item.name"
          @click.native="changeItem(item)"
          :show="current.name==item.name"
          :value1="item.val1"
          :value2="item.val2">
    </bars>
    <div class="bg" :class="$route.query.area=='东片区'?'dpq':'xpq'" :style="{img:'bottom-map-'+ ($route.query.area=='东片区'?'d.png':'x.png')} | imgLoad()"></div>
  </div>
</template>

<script>
import bars from './bars'
import request from '../../../../api/request'

export default {
  name: 'bottomMap',
  data () {
    return {
      xpq: [
        {
          val1: 0,
          val2: 0,
          show: true,
          name: '云南昊邦医药技术研发基地',
          center: {
            left: '15%',
            top: '51%'
          },
          style: {
            left: '12%',
            top: '6%'
          }
        },
        {
          val1: 0,
          val2: 0,
          show: false,
          name: '云铜康柏尔大厦',
          center: {
            left: '42%',
            top: '53%'
          },
          style: {
            left: '19%',
            top: '4%'
          }
        },
        {
          val1: 20,
          val2: 30,
          name: '沃霖科技园',
          show: false,
          center: {
            left: '15%',
            top: '51%'
          },
          style: {
            left: '45%',
            top: '4%'
          }
        },
        {
          val1: 20,
          val2: 30,
          show: false,
          name: '阳光大厦',
          center: {
            left: '25%',
            top: '51%'
          },
          style: {
            left: '51%',
            top: '4%'
          }
        },
        {
          val1: 20,
          val2: 30,
          show: false,
          name: '云南医药工业股份有限公司',
          center: {
            left: '38%',
            top: '48%'
          },
          style: {
            left: '55%',
            top: '8%'
          }
        },
        {
          val1: 20,
          val2: 30,
          show: false,
          name: '高新招商大厦',
          center: {
            left: '38%',
            top: '48%'
          },
          style: {
            left: '61%',
            top: '19%'
          }
        },
        {
          val1: 20,
          val2: 30,
          show: false,
          name: '和成国际',
          center: {
            left: '35%',
            top: '48%'
          },
          style: {
            left: '68%',
            top: '31%'
          }
        },
        {
          val1: 20,
          val2: 30,
          show: false,
          name: '同丰商务中心',
          center: {
            left: '15%',
            top: '48%'
          },
          style: {
            left: '56%',
            top: '45%'
          }
        },
        {
          val1: 20,
          val2: 30,
          show: false,
          name: '山灞大厦',
          center: {
            left: '12%',
            top: '55%'
          },
          style: {
            left: '92%',
            top: '52%'
          }
        },
        {
          val1: 20,
          val2: 30,
          show: false,
          name: '云南软件园',
          center: {
            left: '24%',
            top: '48%'
          },
          style: {
            left: '96%',
            top: '45%'
          }
        }
      ],
      dpq: [
        {
          val1: 20,
          val2: 30,
          show: true,
          name: '水科技园',
          center: {
            left: '14%',
            top: '48%'
          },
          style: {
            left: '64%',
            top: '4%'
          }
        },
        {
          val1: 20,
          val2: 30,
          show: false,
          name: '昆明国家生物产业基地',
          center: {
            left: '22%',
            top: '56%'
          },
          style: {
            left: '68%',
            top: '3%'
          }
        },
        {
          val1: 20,
          val2: 30,
          show: false,
          name: '生物科技孵化器',
          center: {
            left: '32%',
            top: '50%'
          },
          style: {
            left: '74%',
            top: '0%'
          }
        },
      ],
      current: ''
    }
  },
  components: {
    bars
  },
  methods: {
    changeItem (item) {
      this.changeCurrent(item)
    },
    getData () {
      request.buildPort({
        areaName: this.$route.query.area || '东片区'
      }).then(res => {
        let data = res.data.data.bigScreenBuildingChartResultList
        let arr = this.$route.query.area == '东片区' ? this.dpq : this.xpq
        let sum1 = 0
        let sum2 = 0
        data.map(li => {
          sum1 += li.taxRevenue
          sum2 += li.revenue
        })
        arr.map(item => {
          data.map(li => {
            if (item.name == li.name) {
              item.ysze = li.taxRevenue
              item.ssze = li.revenue
              item.qysl = li.companySize
              item.bgmj = li.officeArea
              item.val1 = Number((li.taxRevenue / sum1 * 100).toFixed(2))
              item.val2 = Number((li.revenue / sum2 * 100).toFixed(2))
            }
          })
        })
        this.changeCurrent(arr[0])
      })
    },
    changeCurrent (item) {
      this.current = item
      this.$emit('changeCurrent', item)
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
  .bottomMap {
    width: 8.33rem;
    margin: 0 auto;
    height: 2.5rem;
    position: relative;

    .bars {
      position: absolute;
    }

    .bg {
      &.xpq {
        width: 8.33rem;
        height: 1.89rem;
        position: absolute;
        bottom: 0;
      }

      &.dpq {
        width: 8.695rem;
        height: 2.165rem;
        position: absolute;
        margin-top: 0.2rem;
        left: 50%;
        border-top: 1px solid #050527;
        border-bottom: 1px solid #050527;
        transform: translate(-50%);

        &:before {
          content: '';
          width: 100%;
          height: 1rem;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 6;
          background-image: linear-gradient(to bottom, #050527 0%, #050527 20%, rgba(0, 0, 0, 0) 80%);
        }

        &:after {
          content: '';
          width: 100%;
          height: 1rem;
          position: absolute;
          bottom: 0;
          left: 0;
          z-index: 6;
          background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, #050527 80%, #050527 100%);
        }
      }
    }
  }
</style>
