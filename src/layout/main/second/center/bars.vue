<template>
  <div class="bars">
    <div :style="'height:'+value1+'%'" class="bar red">
      <span></span>
    </div>
    <div :style="'height:'+value2+'%'" class="bar green">
      <span></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'bars',
    data () {
      return {}
    },
    props: ['value1', 'value2'],
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .bars {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    height: 1rem;

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

  }
</style>
