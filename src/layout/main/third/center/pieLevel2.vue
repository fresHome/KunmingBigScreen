<template>
  <div class="pieLevel2" :style="{img:'pie-level2-bg.png'}|imgLoad()">
    <p class="name transText">{{ name }}</p>
    <span class="number">
         <numberUp class="transText" :endVal="value"></numberUp>
    </span>
    <i class="dot" :style="{img:'dot.png'}|imgLoad()"></i>
    <b class="step" :class="'animated'+index" :style="item |imgLoad()" v-for="(item,index) in stepArr" :key="index"></b>
  </div>
</template>

<script>
  import numberUp from '../../../../components/number/numberUp'

  export default {
    name: 'pieLevel2',
    components: {
      numberUp
    },
    data () {
      return {
        stepArr: [
          {
            left: '0.29rem',
            top: '0.6rem',
            width: '0.065rem',
            height: '0.09rem',
            opacity: 1,
            img: '/step/step839@2x.png'
          },
          {
            left: '0.255rem',
            top: '0.69rem',
            width: '0.075rem',
            height: '0.09rem',
            opacity: 1,
            img: '/step/step840@2x.png'
          },
          {
            left: '0.24rem',
            top: '0.785rem',
            width: '0.085rem',
            height: '0.09rem',
            opacity: 1,
            img: '/step/step841@2x.png'
          },
          {
            left: '0.235rem',
            top: '0.885rem',
            width: '0.115rem',
            height: '0.095rem',
            img: '/step/step842@2x.png'
          },
          {
            left: '0.235rem',
            top: '0.975rem',
            width: '0.135rem',
            height: '0.085rem',
            img: '/step/step843@2x.png'
          },
          {
            left: '0.245rem',
            top: '1.055rem',
            width: '0.165rem',
            height: '0.105rem',
            img: '/step/step844@2x.png'
          },
          {
            left: '0.275rem',
            top: '1.13rem',
            width: '0.185rem',
            height: '0.12rem',
            img: '/step/step845@2x.png'
          },
          {
            left: '0.315rem',
            top: '1.19rem',
            width: '0.205rem',
            height: '0.15rem',
            img: '/step/step846@2x.png'
          },
          {
            left: '0.365rem',
            top: '1.245rem',
            width: '0.205rem',
            height: '0.175rem',
            img: '/step/step847@2x.png'
          },
          {
            left: '0.43rem',
            top: '1.29rem',
            width: '0.2rem',
            height: '0.2rem',
            img: '/step/step848@2x.png'
          },
          {
            left: '0.5rem',
            top: '1.325rem',
            width: '0.195rem',
            height: '0.225rem',
            img: '/step/step849@2x.png'
          },
          {
            left: '0.585rem',
            top: '1.355rem',
            width: '0.17rem',
            height: '0.24rem',
            img: '/step/step850@2x.png'
          },
          {
            left: '0.675rem',
            top: '1.37rem',
            width: '0.145rem',
            height: '0.26rem',
            img: '/step/step851@2x.png'
          },
          {
            left: '0.77rem',
            top: '1.39rem',
            width: '0.11rem',
            height: '0.26rem',
            img: '/step/step852@2x.png'
          },
          {
            left: '0.87rem',
            top: '1.4rem',
            width: '0.14rem',
            height: '0.255rem',
            img: '/step/step853@2x.png'
          },
          {
            left: '1rem',
            top: '1.39rem',
            width: '0.11rem',
            height: '0.26rem',
            img: '/step/step854@2x.png'
          },
          {
            left: '1.065rem',
            top: '1.37rem',
            width: '0.14rem',
            height: '0.265rem',
            img: '/step/step855@2x.png'
          },
          {
            left: '1.125rem',
            top: '1.34rem',
            width: '0.17rem',
            height: '0.26rem',
            img: '/step/step856@2x.png'
          },
          {
            left: '1.18rem',
            top: '1.31rem',
            width: '0.195rem',
            height: '0.245rem',
            img: '/step/step857@2x.png'
          },
          {
            left: '1.235rem',
            top: '1.265rem',
            width: '0.215rem',
            height: '0.23rem',
            img: '/step/step858@2x.png'
          },
        ]
      }
    },
    props: ['name', 'value'],
    methods: {}
  }
</script>

<style lang="scss" scoped>
  @keyframes showIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

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

    .step {
      position: absolute;
      z-index: 99;

      &.animated0 {
        opacity: 0;
        animation: showIn 0.3s 0s forwards;
      }

      &.animated1 {
        opacity: 0;
        animation: showIn 0.3s 0.1s forwards;
      }

      &.animated2 {
        opacity: 0;
        animation: showIn 0.3s 0.2s forwards;
      }

      &.animated3 {
        opacity: 0;
        animation: showIn 0.3s 0.3s forwards;
      }

      &.animated4 {
        opacity: 0;
        animation: showIn 0.3s 0.4s forwards;
      }

      &.animated5 {
        opacity: 0;
        animation: showIn 0.3s 0.5s forwards;
      }

      &.animated6 {
        opacity: 0;
        animation: showIn 0.3s 0.6s forwards;
      }

      &.animated7 {
        opacity: 0;
        animation: showIn 0.3s 0.7s forwards;
      }

      &.animated8 {
        opacity: 0;
        animation: showIn 0.3s 0.8s forwards;
      }

      &.animated9 {
        opacity: 0;
        animation: showIn 0.3s 0.9s forwards;
      }

      &.animated10 {
        opacity: 0;
        animation: showIn 0.3s 1s forwards;
      }

      &.animated11 {
        opacity: 0;
        animation: showIn 0.3s 1.1s forwards;
      }

      &.animated12 {
        opacity: 0;
        animation: showIn 0.3s 1.2s forwards;
      }

      &.animated13 {
        opacity: 0;
        animation: showIn 0.3s 1.3s forwards;
      }

      &.animated14 {
        opacity: 0;
        animation: showIn 0.3s 1.4s forwards;
      }

      &.animated15 {
        opacity: 0;
        animation: showIn 0.3s 1.5s forwards;
      }

      &.animated16 {
        opacity: 0;
        animation: showIn 0.3s 1.6s forwards;
      }

      &.animated17 {
        opacity: 0;
        animation: showIn 0.3s 1.7s forwards;
      }

      &.animated18 {
        opacity: 0;
        animation: showIn 0.3s 1.8s forwards;
      }

      &.animated19 {
        opacity: 0;
        animation: showIn 0.3s 1.9s forwards;
      }

      &.animated20 {
        opacity: 0;
        animation: showIn 0.3s 2s forwards;
      }
    }
  }
</style>
