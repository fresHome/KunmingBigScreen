<template>
  <div class="bottomMap">
    <bars v-for="(item,index) in barsArr"
          :style="item.style"
          :key="index"
          @click.native="changeItem(item)"
          :show="item.show"
          :value="item.val1"
          :value2="item.val2">
    </bars>
    <div class="bg" :style="{img:'bottom-map-dpq.png'} | imgLoad()"></div>
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
            style: {
              left: '12%',
              top: '6%'
            }
          },
          {
            val1: 20,
            val2: 30,
            show: false,
            style: {
              left: '19%',
              top: '6%'
            }
          },
          {
            val1: 20,
            val2: 30,
            show: false,
            style: {
              left: '31%',
              top: '6%'
            }
          },
          {
            val1: 20,
            val2: 30,
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
            style: {
              left: '51%',
              top: '6%'
            }
          },
          {
            val1: 20,
            val2: 30,
            show: false,
            style: {
              left: '55%',
              top: '8%'
            }
          },
          {
            val1: 20,
            val2: 30,
            show: false,
            style: {
              left: '61%',
              top: '19%'
            }
          },
          {
            val1: 20,
            val2: 30,
            show: false,
            style: {
              left: '68%',
              top: '31%'
            }
          },
          {
            val1: 20,
            val2: 30,
            show: false,
            style: {
              left: '68%',
              top: '31%'
            }
          },
          {
            val1: 20,
            val2: 30,
            show: false,
            style: {
              left: '60%',
              top: '45%'
            }
          },
          {
            val1: 20,
            val2: 30,
            show: false,
            style: {
              left: '90%',
              top: '51%'
            }
          },
          {
            val1: 20,
            val2: 30,
            show: false,
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
        this.$emit('changeItem', item)
      },
      getData () {
        request.buildPort({
          areaName: '西片区'
        }).then(res => {
          let data = res.data.data.resultList
          console.log(data)
        })
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
      width: 8.33rem;
      height: 1.89rem;
      position: absolute;
      bottom: 0;
    }
  }
</style>
