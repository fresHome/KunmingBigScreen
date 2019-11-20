<template>
  <div class="rotateCircle" :style="{img:'circlebg.png'} | imgLoad()">
    <div class="circle left" :style="{img:'circle1.png'} | imgLoad()"></div>
    <div class="circle right" :style="{img:'circle2.png'} | imgLoad()"></div>
  </div>
</template>

<script>
export default {
  name: 'rotateCircle',
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
  @keyframes rotate {
    from {
      transform: rotateX(70deg) rotateZ(0deg);
    }
    to {
      transform: rotateX(70deg) rotateZ(360deg);
    }
  }

  .rotateCircle {
    perspective: 1000000px;
    width: 100%;
    height: 100%;
    z-index: 1;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: 2rem 0.8rem !important;
    background-position: center center;
    background-repeat: no-repeat;

    .circle {
      position: absolute;
      width: 100%;
      padding-bottom: 100%;
      background: {
        size: contain !important;
        position: center center !important;
        repeat: no-repeat;
      }

      &:first-child {
        animation: rotate 1s linear infinite;
      }

      &:nth-child(2) {
        animation: rotate 1s linear infinite reverse;
      }
    }
  }
</style>
