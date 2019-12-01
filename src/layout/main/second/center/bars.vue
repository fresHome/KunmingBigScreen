<template>
  <div class="bars">
    <div :style="'height:'+value1+'%'" class="bar red">
      <span></span>
    </div>
    <div :style="'height:'+value2+'%'" class="bar green">
      <span></span>
    </div>
    <positionSmall v-if="show"></positionSmall>
  </div>
</template>

<script>
  import positionSmall from './positionSmall'

  export default {
    name: 'bars',
    data () {
      return {}
    },
    props: ['value1', 'value2', 'show'],
    components: {
      positionSmall
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .bars {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    height: 1rem;
    position: relative;

    .bar {
      width: 0.1rem;
      position: relative;
      height: 1rem;
      margin-right: 0.01rem;
      overflow: hidden;
      z-index: 99;
      border-radius: 0.05rem;

      &.red {
        span {
          background-image: linear-gradient(to bottom, #d7087e, #050527);
          position: absolute;
          bottom: 0;
          height: 1rem;
          width: 0.1rem;
        }
      }

      &.green {
        span {
          background-image: linear-gradient(to bottom, #32f0fe, #050527);
          position: absolute;
          bottom: 0;
          height: 1rem;
          width: 0.1rem;
        }
      }
    }

    .positionSmall {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
</style>
