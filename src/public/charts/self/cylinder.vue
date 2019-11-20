<template>
  <div class="cylinder">
    <div class="yuanzhu" :class="active?'active':''" :style="{height:height}"></div>
  </div>
</template>

<script>
export default {
  name: 'cylinder',
  data () {
    return {
      height: '1.2rem'
    }
  },
  props: ['active'],
  methods: {},
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
  .cylinder {
    .yuanzhu {
      position: relative;
      width: 0.5rem;
      background: linear-gradient(rgb(216, 235, 255), rgb(0, 37, 214)); /* 标准的语法 */
      z-index: 999;

      &.active {
        background: linear-gradient(rgb(217, 147, 252), rgb(0, 37, 214)); /* 标准的语法 */
        &:before {
          background: rgb(217, 147, 252);

        }
      }

      &:before {
        position: absolute;
        top: -0.1rem;
        content: "";
        display: block;
        width: 0.5rem;
        height: 0.2rem;
        background: rgb(216, 235, 255);
        border-radius: 50%;
        z-index: 99;
      }

      &:after {
        position: absolute;
        bottom: -0.1rem;
        content: "";
        display: block;
        width: 0.5rem;
        height: 0.2rem;
        border-radius: 50%;
        background: rgb(0, 37, 214);
        z-index: 9;
      }
    }
  }
</style>
