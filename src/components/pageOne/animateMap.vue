<template>
  <div class="animateMap">
    <div class="view">
      <div :style="{transform:'rotateX(65deg) rotateZ('+rotateDeg+'deg) translateZ(0px)'}" class="box bg"></div>
      <div :style="{transform:'rotateX(65deg) rotateZ('+rotateDeg+'deg) translateZ(0px)'}" class="box road"></div>
      <div :style="{transform:'rotateX(65deg) rotateZ('+rotateDeg+'deg) translateZ(0px)'}" class="box dnxb"></div>
      <div v-for="item in 4" :key="'circle'+item" :class="'circle'+item"
           :style="{backgroundImage:`url('./static/images/circle/${circleArr[item-1]}')`}"
           class="box circleBox">
      </div>
      <div v-for="item in 16" :key="'line'+item"
           :style="{
            backgroundImage:`url('./static/images/line/${lineArr[item-1]}')`,
            transform: `rotateX(65deg) rotateZ(${rotateDeg}deg) translateZ(${item*0.5}rem)`
           }"
           class="box lineBox">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'animateMap',
  data () {
    return {
      circleArr: ['circle(0-00-00-00).png', 'circle(0-00-00-01).png', 'circle(0-00-00-02).png', 'circle(0-00-00-03).png'],
      lineArr: [
        '昆明地图[等高线-000].png',
        '昆明地图[等高线-050].png',
        '昆明地图[等高线-100].png',
        '昆明地图[等高线-150].png',
        '昆明地图[等高线-200].png',
        '昆明地图[等高线-250].png',
        '昆明地图[等高线-300].png',
        '昆明地图[等高线-350].png',
        '昆明地图[等高线-400].png',
        '昆明地图[等高线-450].png',
        '昆明地图[等高线-500].png',
        '昆明地图[等高线-550].png',
        '昆明地图[等高线-600].png',
        '昆明地图[等高线-650].png',
        '昆明地图[等高线-700].png',
        '昆明地图[等高线-750].png'
      ],
      rotateDeg: 24
    }
  },
  methods: {},
  mounted () {
    setInterval(() => {
      if (this.rotateDeg == 24) {
        this.rotateDeg = 180
      } else {
        this.rotateDeg = 24
      }
    }, 5000)
  }
}
</script>

<style lang="scss" scoped>
  //第一层圆圈 顺时针
  @keyframes rotate1S {
    from {
      transform: rotateX(65deg) rotateZ(0deg) translateZ(0px);
    }
    to {
      transform: rotateX(65deg) rotateZ(360deg) translateZ(0px);
    }
  }

  //第一层圆圈 逆时针
  @keyframes rotate1N {
    from {
      transform: rotateX(65deg) rotateZ(0deg) translateZ(0px);
    }
    to {
      transform: rotateX(65deg) rotateZ(-360deg) translateZ(0px);
    }
  }

  //第二层圆圈 顺时针
  @keyframes rotate2S {
    from {
      transform: rotateX(65deg) rotateZ(0deg) translateZ(-0.2rem);
    }
    to {
      transform: rotateX(65deg) rotateZ(360deg) translateZ(-0.2rem);
    }
  }

  //第二层圆圈 逆时针
  @keyframes rotate3N {
    from {
      transform: rotateX(65deg) rotateZ(0deg) translateZ(-0.4rem);
    }
    to {
      transform: rotateX(65deg) rotateZ(-360deg) translateZ(-0.4rem);
    }
  }

  .animateMap {
    height: 100vh;
    width: 100vw;
    position: relative;

    .view {
      width: 30rem;
      height: 30rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0.5);
      position: relative;
      perspective: 100rem;
      transform-style: preserve-3d;

      .box {
        width: 30rem;
        height: 30rem;
        position: absolute;
        top: 0;
        transform-origin: center center;

        &.bg {
          z-index: 0;
          transform: rotateX(65deg) rotateZ(24deg) translateZ(0px);
          background: {
            image: url("../../../public/static/images/map.png");
            size: 14.31rem 25.08rem;
            position: center center;
            repeat: no-repeat;
          };
          transition: all 2s cubic-bezier(0, 0.87, 1, 1)
        }

        &.road {
          transform: rotateX(65deg) rotateZ(24deg) translateZ(0px);
          background: {
            image: url("../../../public/static/images/road.gif");
            size: 14.31rem 25.08rem;
            position: center center;
            repeat: no-repeat;
          };
          transition: all 2s cubic-bezier(0, 0.87, 1, 1)
        }

        &.dnxb {
          background: {
            image: url("../../../public/static/images/circle/circle(0-00-00-04).png");
            size: 20rem 20rem;
            position: center center;
            repeat: no-repeat;
          };
          transition: all 2s cubic-bezier(0, 0.87, 1, 1)
        }

        &.circleBox {
          background: {
            size: 20rem 20rem;
            position: center center;
            repeat: no-repeat;
          }

          &.circle1 {
            transform: rotateX(65deg) rotateZ(0deg) translateZ(-0.2rem);
            animation: rotate2S 10s linear infinite;//1秒30
          }

          &.circle2 {
            transform: rotateX(65deg) rotateZ(0deg) translateZ(0px);
            animation: rotate1N 6.667s linear infinite;//1秒30
          }

          &.circle3 {
            transform: rotateX(65deg) rotateZ(0deg) translateZ(0px);
            animation: rotate1S 6.667s linear infinite;//1秒30
          }

          &.circle4 {
            transform: rotateX(65deg) rotateZ(0deg) translateZ(-0.4rem);
            animation: rotate3N 8.334s linear infinite;//1秒30
          }
        }

        &.lineBox {
          transition: all 2s cubic-bezier(0, 0.87, 1, 1);
          background: {
            size: 14.31rem 25.08rem;
            position: center center;
            repeat: no-repeat;
          }
        }
      }
    }
  }
</style>
