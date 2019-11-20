<template>
  <div class="cylinder-circle">
    <cylinder :key="i" :active="i==6?true:false" v-for="i in 6" class="item" :style="{transform:'rotateY('+i*360/6+'deg) translateZ(1.2rem) rotateY('+-i*360/6+'deg)'}"></cylinder>
  </div>
</template>

<script>
import cylinder from './cylinder'

export default {
  name: 'cylinder-circle',
  data () {
    return {}
  },
  components: { cylinder },
  methods: {}
}
</script>

<style lang="scss" scoped>
  .cylinder-circle {
    position: relative;
    display: inline-block;
    position: relative;
    /*transform 旋转元素*/
    transform-style: preserve-3d;
    transform: perspective(5rem) rotateX(10deg) rotateY(-3deg);
    animation: rotate 1s linear infinite;

    .item {
      position: absolute;
    }
  }
</style>
