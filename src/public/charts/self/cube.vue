<template>
  <div class="cube-box" :style="{width:width}">
    <div :style="'backgroundColor:'+calc(6)" class="back cube"></div>
    <div :style="'backgroundColor:'+calc(1)" class="left cube"></div>
    <div :style="'backgroundColor:'+calc(3)" class="right cube"></div>
    <div :style="{
      transform: 'translateZ( '+width+' )',
      backgroundColor:calc(6)
    }" class="front cube"></div>
    <div :style="'backgroundColor:'+calc(0)" class="top cube"></div>
    <div :style="'backgroundColor:'+calc(6)" class="bottom cube"></div>
  </div>
</template>

<script>
export default {
  name: 'cube',
  data () {
    return {}
  },
  props: ['color', 'width'],
  methods: {
    calc (index) {
      return this.LightenDarkenColor(this.color, -10 * index)
    },
    LightenDarkenColor (col, amt) {
      var usePound = false;
      if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
      }
      var num = parseInt(col, 16);
      var r = (num >> 16) + amt;
      if (r > 255) r = 255;
      else if (r < 0) r = 0;
      var b = ((num >> 8) & 0x00FF) + amt;
      if (b > 255) b = 255;
      else if (b < 0) b = 0;
      var g = (num & 0x0000FF) + amt;
      if (g > 255) g = 255;
      else if (g < 0) g = 0;
      let c = (g | (b << 8) | (r << 16)).toString(16)
      if (c.length < 6) {
        c = 'FF' + c
      }
      return (usePound ? "#" : "") + c
    }
  }
}
</script>

<style lang="scss" scoped>
  .cube-box {
    transform-style: preserve-3d;
    position: absolute;
    transition: height 1s linear;
    left: 0px;
    bottom: 0px;

    .cube {
      position: absolute;
      left: 0;
      top: 0;
    }

    .back {
      width: 100%;
      height: 100%;
      background: #f5d3d3;
    }

    .left {
      width: 100%;
      height: 100%;
      transform-origin: left top;
      transform: rotateY(-90deg);
    }

    .right {
      width: 100%;
      height: 100%;
      transform-origin: right top;
      transform: rotateY(90deg);
    }

    .front {
      width: 100%;
      height: 100%;
      transform-origin: right top;
    }

    .top {
      width: 100%;
      padding-top: 100%;
      transform-origin: left top;
      transform: rotateX(90deg);
    }

    .bottom {
      width: 100%;
      padding-top: 100%;
      top: inherit;
      bottom: 0;
      transform-origin: left bottom;
      transform: rotateX(-90deg);
    }
  }
</style>
