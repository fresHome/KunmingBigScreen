<template>
  <div class="index">
    <animateMap v-show="false" class="map"></animateMap>
    <LittleBox @click.native="goPath('东片区')" v-if="show&&type" :show="type" type="dpq" id="littleBox1"></LittleBox>
    <LittleBox @click.native="goPath('西片区')" v-if="show&&!type" :show="type" type="xpq" id="littleBox2"></LittleBox>
  </div>
</template>

<script>
  import LittleBox from './LittleBox'
  import animateMap from './animateMap'

  export default {
    name: 'index',
    components: {
      LittleBox,
      animateMap
    },
    data () {
      return {
        show: false,
        delayShow: 1,
        type: true
      }
    },
    methods: {
      goPath (area) {
        this.$router.push({
          path: '/second',
          query: {
            area: area
          }
        })
      }
    },
    mounted () {
      setTimeout(() => {
        this.show = true
        setInterval(() => {
          this.type = !this.type
        }, 7000)
      }, 2000)
    }
  }
</script>

<style lang="scss" scoped>
  .index {
    #chart9 {
      position: absolute;
      top: 2.845rem;
      left: 8.905rem;
    }

    #littleBox1 {
      position: absolute;
      top: 5.3rem;
      left: 9rem;
    }

    #littleBox2 {
      position: absolute;
      top: 5.2rem;
      left: 9.2rem;
    }
  }
</style>
