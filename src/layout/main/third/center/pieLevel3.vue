<template>
  <div class="pieLevel3" :style="{img:'pie-level3-bg.png'}|imgLoad()">
    <div class="bg2" :style="{img:'pie-level3-bg2.png'}|imgLoad()"></div>
    <div class="bg3" :style="{img:'pie-level3-bg3.png'}|imgLoad()"></div>
    <p class="name">{{ name }}</p>
    <span class="number">{{ value }}</span>

  </div>
</template>

<script>
  export default {
    name: 'pieLevel3',
    data () {
      return {}
    },
    props: ['name', 'value'],
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .pieLevel3 {
    width: 0.985rem;
    height: 0.96rem;
    margin: 0.28rem;
    position: relative;

    .name {
      position: relative;
      top: -0.28rem;
      font-size: 0.175rem;
      font-family: NotoSansHans-Bold;
      text-align: center;
      color: #32F0FE;
    }

    .number {
      position: absolute;
      left: 50%;
      top: 50%;
      color: #32F0FE;
      transform: translate(-50%, -50%);
      font-family: NotoSansHans-Bold;
      text-align: center;
      font-size: 0.211rem;
    }

    .bg2 {
      position: absolute;
      left: 0.24rem;
      top: 50%;
      width: 0.475rem;
      height: 0.47rem;
      transform: translate(0, -50%);
    }

    .bg3 {
      position: absolute;
      left: 0.19rem;
      top: 50%;
      transform: translate(0, -50%);
      width: 0.6rem;
      height: 0.61rem;
    }
  }
</style>
