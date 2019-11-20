<template>
  <!--  <div class="home" :style="{img:'bg.jpg'} | imgLoad()" @mousemove="mousemove">-->
  <div class="home">
    <top></top>
    <div class="main">
      <left :allCarousel="allCarousel" class="left" :delayShow="delayShow"></left>
      <center :allCarousel="allCarousel" class="center"></center>
      <right :allCarousel="allCarousel" class="right" :delayShow="delayShow"></right>
<!--      <animateMap class="map"></animateMap>-->
    </div>
    <div id="homeShade"></div>
  </div>
</template>

<script>
import top from '../components/top'
import left from '../components/left'
import center from '../components/center'
import right from '../components/right'
import animateMap from './animateMap'

export default {
  name: 'home',
  data () {
    return {
      delayShow: 1,
      time: 0,
      interval: '',
      allCarousel: null
    }
  },
  components: { top, left, center, right, animateMap },
  methods: {
    mousemove () {
      this.stopInterval()
    },
    stopInterval () {
      this.allCarousel = 'stop'
      this.time = 0
    },
    startInterval () {
      this.interval = setInterval(() => {
        this.time++
      }, 1000)
      this.time = 0
    }
  },
  watch: {
    time (val) {
      if (val == 10) {
        this.allCarousel = 'go'
      }
    }
  },
  mounted () {
    this.startInterval()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .home {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    /*background-color: #000;*/

    #homeShade {
      background-color: #000;
      position: absolute;
      z-index: -1000;
      width: 100vw;
      height: 100vh;
      left: 0;
      top: 0;
    }

    .main {
      height: calc(100vh - 0.73rem);
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      margin-top: -0.28rem;

      .left, .right {
        width: 3.75rem;
      }

      .left {
        margin-left: 0.3rem;
      }

      .right {
        margin-right: 0.3rem;
      }

      .center {
        flex-grow: 1;
        width: 870rem;
      }

      .map {
        position: fixed;
      }
    }
  }
</style>
