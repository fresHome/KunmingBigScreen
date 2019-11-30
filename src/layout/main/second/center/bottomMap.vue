<template>
  <div class="bottomMap">
    <bars v-for="(item,index) in barsArr"
          :style="item.style"
          :key="index"
          :value="item.val1"
          :value2="item.val2">
    </bars>
    <div class="bg" :style="{img:'bottom-map-dpq.png'} | imgLoad()"></div>
  </div>
</template>

<script>
  import bars from './bars'

  export default {
    name: 'bottomMap',
    data () {
      return {
        barsArr: [
          {
            val1: 20,
            val2: 30,
            style: {
              left: '12%',
              top: '6%'
            }
          },
          {
            val1: 20,
            val2: 30,
            style: {
              left: '19%',
              top: '6%'
            }
          },
          {
            val1: 20,
            val2: 30,
            style: {
              left: '31%',
              top: '6%'
            }
          },
          {
            val1: 20,
            val2: 30,
            style: {
              left: '45%',
              top: '6%'
            }
          },
          {
            val1: 20,
            val2: 30,
            style: {
              left: '51%',
              top: '6%'
            }
          },
          {
            val1: 20,
            val2: 30,
            style: {
              left: '55%',
              top: '8%'
            }
          },
          {
            val1: 20,
            val2: 30,
            style: {
              left: '61%',
              top: '19%'
            }
          },
          {
            val1: 20,
            val2: 30,
            style: {
              left: '68%',
              top: '31%'
            }
          },
          {
            val1: 20,
            val2: 30,
            style: {
              left: '68%',
              top: '31%'
            }
          },
          {
            val1: 20,
            val2: 30,
            style: {
              left: '60%',
              top: '45%'
            }
          },
          {
            val1: 20,
            val2: 30,
            style: {
              left: '90%',
              top: '51%'
            }
          },
          {
            val1: 20,
            val2: 30,
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
    methods: {}
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
