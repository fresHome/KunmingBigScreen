<template>
  <div class="position" :style="style">
    <div class="location" :style="{img:'second-location.gif'}|imgLoad()"></div>
    <div class="circle" :style="{img:'second-circle.gif'}|imgLoad()"></div>
  </div>
</template>

<script>
  export default {
    name: 'position',
    data () {
      return {
        style: ''
      }
    },
    props: ['current'],
    watch: {
      current () {
        this.style = {
          opacity: 0,
          marginTop: '-0.2rem'
        }
        setTimeout(() => {
          this.style = {
            transition: 'opacity linear 0.5s,margin-top linear 0.5s',
            opacity: 1,
            marginTop: 0
          }
        }, 1000)
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .position {
    position: relative;
    perspective: 100rem;
    transform-style: preserve-3d;
    width: 2rem;
    height: 2rem;

    .location {
      position: absolute;
      width: 1rem;
      height: 1.1rem;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, -50%);
      z-index: 8;
    }

    .circle {
      position: absolute;
      width: 1.25rem;
      height: 1.25rem;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0) rotateX(60deg);
    }
  }
</style>
