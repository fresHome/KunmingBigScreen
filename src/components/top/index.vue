<template>
  <div class="index">
    <!--    <step direction="left" number="15"></step>-->
    <!--    <p>经济运行分析平台</p>-->
    <!--    <step direction="right" number="15"></step>-->
    <div :style="{img:'zu10.png'}|imgLoad()" id="top_line1"/>
    <div :style="{img:'zu10_2.png'}|imgLoad()" id="top_line2"/>
    <div class="middle">
      <div class="top" :style="{img:'zu9.png'}|imgLoad()">高新区经济运行驾驶舱</div>
    </div>
  </div>
</template>

<script>
//import step from './step'

export default {
  name: 'index',
  data () {
    return {
      top2Box: [
        {
          text: '企业总数（家）',
          number: 11346
        }, {
          text: '企业总数（家）',
          number: 11346
        }, {
          text: '企业总数（家）',
          number: 11346
        }, {
          text: '企业总数（家）',
          number: 11346
        },
      ]
    }
  },
//  components: { step },
  methods: {}
}
</script>

<style lang="scss" scoped>
  .index {
    height: 0.73rem;
    text-align: center;
    box-sizing: border-box;
    font-size: 0.3rem;

    .middle {
      width: 6.25rem;
      height: 0.73rem;
      font: bold 0.3rem/0.73rem NotoSansHans-Bold;
      letter-spacing: 0.12rem; //120???
      text-align: center;
      color: #FFFFFF;
      text-align: center;
      margin: 0 auto;
    }

    #top_line1, #top_line2 {
      position: absolute;
      top: 0.41rem;
      height: 0.04rem;
    }

    #top_line1 {
      left: 0.3rem;
      width: 5.4rem;
    }

    #top_line2 {
      right: 0.285rem;
      width: 5.41rem;
    }
  }
</style>
