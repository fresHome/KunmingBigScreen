<template>
  <div class="positionSmall">
    <div class="location" :style="{img:'second-location.gif'}|imgLoad()"></div>
    <div class="circle" :style="{img:'second-circle.gif'}|imgLoad()"></div>
  </div>
</template>

<script>
  export default {
    name: 'positionSmall',
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .positionSmall {
    position: relative;
    perspective: 10rem;
    transform-style: preserve-3d;
    width: 0.2rem;
    height: 0.2rem;
    z-index: 99;
    transform: scale(1.2);

    .location {
      position: absolute;
      width: 0.1rem;
      height: 0.11rem;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, -50%);
      z-index: 8;
    }

    .circle {
      position: absolute;
      width: 0.125rem;
      height: 0.125rem;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0) rotateX(60deg);
    }
  }
</style>
