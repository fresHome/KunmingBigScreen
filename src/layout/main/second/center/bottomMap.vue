<template>
  <div class="bottomMap">
    <bars v-for="(item,index) in barsArr"
          :style="item.style"
          :key="index"
          :title="item.name"
          @click.native="changeItem(item)"
          :show="item.show"
          :value="item.val1"
          :value2="item.val2">
    </bars>
    <div class="bg" :class="type" :style="{img:'bottom-map-'+ ($route.query.area=='东片区'?'dpq.png':'xpq.png')} | imgLoad()"></div>
  </div>
</template>

<script>
  import bars from './bars'
  import request from '../../../../api/request'

  export default {
    name: 'bottomMap',
    data () {
      return {
        barsArr: [
          {
            val1: 20,
            val2: 30,
            show: true,
            name: '云南昊邦医药技术研发基地',
            style: {
              left: '12%',
              top: '6%'
            }
          },
          {
            val1: 20,
            val2: 30,
            show: false,
            name: '云铜康柏尔大厦',
            style: {
              left: '19%',
              top: '6%'
            }
          },
          {
            val1: 20,
            val2: 30,
            show: false,
            name: '高新火炬大厦',
            style: {
              left: '31%',
              top: '6%'
            }
          },
          {
            val1: 20,
            val2: 30,
            name: '沃霖科技园',
            show: false,
            style: {
              left: '45%',
              top: '6%'
            }
          },
          {
            val1: 20,
            val2: 30,
            show: false,
            name: '阳光大厦',
            style: {
              left: '51%',
              top: '6%'
            }
          },
          {
            val1: 20,
            val2: 30,
            show: false,
            name: '云南医药工业股份有限公司',
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
            style: {
              left: '68%',
              top: '31%'
            }
          },
          {
            val1: 20,
            val2: 30,
            show: false,
            name: '沃霖科技园',
            style: {
              left: '68%',
              top: '31%'
            }
          },
          {
            val1: 20,
            val2: 30,
            show: false,
            name: '沃霖科技园',
            style: {
              left: '60%',
              top: '45%'
            }
          },
          {
            val1: 20,
            val2: 30,
            show: false,
            name: '沃霖科技园',
            style: {
              left: '90%',
              top: '51%'
            }
          },
          {
            val1: 20,
            val2: 30,
            show: false,
            name: '沃霖科技园',
            style: {
              left: '96%',
              top: '45%'
            }
          }
        ]
      }
    },
    components: {
      bars
    },
    methods: {
      changeItem (item) {
        this.barsArr.map(item => {
          item.show = false
        })
        item.show = true
        this.changeCurrent(item)
      },
      getData () {
        request.buildPort({
          areaName: this.$route.query.area
        }).then(res => {
          let data = res.data.data.bigScreenBuildingChartResultList
          this.changeCurrent(data[0])
        })
      },
      changeCurrent (item) {
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
    width: 8.695rem;
    margin: 0 auto;
    height: 2.5rem;
    position: relative;

    .bars {
      position: absolute;
    }

    .bg {
      width: 8.33rem;
      height: 1.89rem;
      position: absolute;
      bottom: 0;

      &.xpq {
        width: 8.695rem;
        height: 2.165rem;
        position: relative;
        margin-top: 0.15rem;

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
