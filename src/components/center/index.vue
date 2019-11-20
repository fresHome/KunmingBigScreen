<template>
  <div class="index">
    <div class="squreLine">
      <div class="square" :style="{img:'lankuang1.png'}|imgLoad()" v-for="item in squareBox" :key="item.id">
        <div class="text">{{item.text}}</div>
        <div class="number">{{item.number}}</div>
      </div>
    </div>
    <LittleBox id="littleBox1"></LittleBox>
    <LittleBox id="littleBox2"></LittleBox>
    <div id="whilteCircle" :style="{img:'whiteCircle.png'}|imgLoad()"></div>
    <!--    底部图案-->
    <div id="bottomBg" :style="{img:'zu9copy.png'}|imgLoad()"></div>
  </div>
</template>

<script>
import LittleBox from '../LittleBox'

export default {
  name: 'index',
  data () {
    return {
      delayShow: 1,
      option9: {},
      squareBox: [
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
        }
      ]
    }
  },
  methods: {},
  components: {
    LittleBox
  }
}
</script>

<style lang="scss" scoped>
  @keyframes transform {
    0% {
      opacity: 0;
      margin-top: 1.67rem; //1.3+0.37
    }
    60% {
      opacity: 1;
    }
    100% {
      margin-top: 0.37rem;
    }
  }

  .index {
    .squreLine {
      width: 6.05rem;
      height: 0.62rem;
      display: flex;
      margin: 0 auto;
      /*margin-top: 0.37rem;*/
      margin-top: 1.67rem;
      overflow: hidden;
      animation: transform 2.5s forwards;

      .square {
        width: 1.57rem;
        height: 0.62rem;
        text-align: left;

        .text {
          margin: 0.15rem 0 0 0.205rem;
          height: 0.1rem;
          font: 0.1rem/0.1rem NotoSansHans-Bold;
          color: #FFFFFFFF;
        }

        .number {
          margin: 0.065rem 0 0 0.21rem;
          font: bold 0.25rem/0.195rem NotoSansHans-Bold;
          height: 0.195rem;
          color: #32F0FE;
        }
      }

      .square:not(:last-child) {
        margin-right: 0.175rem;
      }
    }

    #chart9 {
      position: absolute;
      top: 2.845rem;
      left: 8.905rem;
    }

    #littleBox1 {
      position: absolute;
      top: 5.505rem;
      left: 6.19rem;
    }

    #littleBox2 {
      position: absolute;
      top: 5.505rem;
      left: 8.39rem;
    }

    #whilteCircle {
      width: 0.245rem;
      height: 0.24rem;
      position: absolute;
      top: 6.935rem;
      left: 5.775rem;
    }

    #bottomBg {
      width: 8.075rem;
      height: 0.235rem;
      position: absolute;
      bottom: 0;
      margin: 0 auto;
    }
  }
</style>
