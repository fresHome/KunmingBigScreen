<template>
  <div class="index">
    <list></list>
    <animateMap v-show="false" class="map"></animateMap>
    <LittleBox v-if="show&&type" :show="type" type="dpq" id="littleBox1"></LittleBox>
    <LittleBox v-if="show&&!type" :show="type" type="xpq" id="littleBox2"></LittleBox>
  </div>
</template>

<script>
  import LittleBox from './LittleBox'
  import list from './list'
  import animateMap from './animateMap'

  export default {
    name: 'index',
    components: {
      LittleBox, list,
      animateMap
    },
    data () {
      return {
        show: false,
        delayShow: 1,
        type: true,
        style: {
          opacity: 0,
          marginTop: '0.22rem'
        }
      }
    },
    mounted () {
      this.style = {
        opacity: 0,
        marginTop: '0.22rem'
      }
      setTimeout(() => {
        this.style = {
          opacity: 1,
          marginTop: '0.37rem'
        }
      }, 0)
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
