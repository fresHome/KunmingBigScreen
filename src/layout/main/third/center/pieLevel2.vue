<template>
  <div class="pieLevel2" :style="{img:'pie-level2-bg.png'}|imgLoad()">
    <p class="name transText">{{ name }}</p>
    <span class="number transText">{{ value }}</span>
    <i class="dot" :style="{img:'dot.png'}|imgLoad()"></i>
  </div>
</template>

<script>
  export default {
    name: 'pieLevel2',
    data () {
      return {}
    },
    props: ['name', 'value'],
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .pieLevel2 {
    width: 1.89rem;
    height: 1.89rem;

    .name {
      position: relative;
      top: -0.26rem;
      font-size: 0.175rem;
      font-family: NotoSansHans-Bold;
      text-align: center;
    }

    .number {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-family: NotoSansHans-Bold;
      text-align: center;
      font-size: 0.594rem;
    }

    .dot {
      position: absolute;
      width: 0.54rem;
      height: 0.54rem;
      bottom: 0.284rem;
      right: -0.115rem;
    }
  }
</style>
