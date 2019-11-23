<template>
  <p class="step" :style="'width:'+number*0.24+'rem'" :class="direction">
    <i :style="selfStyle(item,direction) | imgLoad()"
       :key="index"
       v-for="(item,index) in stepArr">
    </i>
  </p>
</template>

<script>
export default {
  name: 'step',
  data () {
    return {
      stepArr: []
    }
  },
  props: ['number', 'direction'],
  methods: {
    selfStyle (item, direction) {
      if (direction == 'left') {
        return {
          opacity: item.opacity,
          img: 'step-left.png'
        }
      } else {
        return {
          opacity: item.opacity,
          img: 'step-right.png'
        }
      }
    },
    init () {
      for (let i = 0; i < this.number; i++) {
        if (this.direction == 'left') {
          this.stepArr.push({
            opacity: (1 / this.number * (i + 1))
          })
        } else {
          this.stepArr.push({
            opacity: 1 - 1 / this.number * i
          })
        }
      }
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang="scss" scoped>
  .step {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    i {
      display: inline-block;
      width: 0.24rem;
      height: 0.19rem;
      background: {
        size: 100% 100%;
        repeat: no-repeat;
      }
    }
  }
</style>
