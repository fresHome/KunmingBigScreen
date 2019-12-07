<template>
  <div class="pieLevel1" :style="{img:'pie-level1-bg.png'}|imgLoad()">
    <p class="name transText">{{ name }}</p>
    <span class="number transText">
         <numberUp class="transText" :endVal="value"></numberUp>
    </span>
    <p class="type">综合得分</p>
  </div>
</template>

<script>
  import numberUp from '../../../../components/number/numberUp'

  export default {
    name: 'pie-level1',
    components: {
      numberUp
    },
    data () {
      return {}
    },
    props: ['name', 'value'],
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .pieLevel1 {
    width: 3.195rem;
    height: 3.195rem;

    .name {
      font-size: 0.225rem;
      height: 0.3rem;
      font-family: NotoSansHans-Bold;
      font-weight: bold;
      text-align: center;
      position: relative;
      top: -0.43rem;
    }

    .number {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-family: NotoSansHans-Bold;
      text-align: center;
      font-size: 0.681rem;
    }

    .type {
      color: #FF5B9B;
      font-size: 0.2431rem;
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
      top:2.405rem;
    }
  }
</style>
