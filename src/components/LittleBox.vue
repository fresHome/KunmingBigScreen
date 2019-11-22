<template>
  <div class="LittleBox">
    <div class="line">
      <ol class="title">
        <li v-for="item in data" :key="item.key">
          <i></i>
          <span>{{ item.name }}</span>
          <span class="value">{{ item.number }}</span>
        </li>
      </ol>
    </div>

    <div class="blueSquare" :style="{img:'blueSquare.png'}|imgLoad()">西片区</div>
    <!--    两条粗蓝线-->
    <div id="boldBlueLine1"></div>
    <div id="boldBlueLine2"></div>
    <!--    白圆圈-->
    <div id="whilteCircle" :style="{img:'whiteCircle.png',transform:`rotate(${whiteRotateDeg})`}|imgLoad()"></div>
    <i class="outline left" :style="{height:leftLength+'%'}"></i>
    <i class="outline top" :style="{width:topLength+'%'}"></i>
    <i class="outline right" :style="{height:rightLength+'%'}"></i>
    <i class="outline bottom" :style="{width:bottomLength+'%'}"></i>
  </div>
</template>

<script>
export default {
  name: 'LittleBox',
  data () {
    return {
      data: [
        {
          name: '企业总数',
          number: '320个'
        },
        {
          name: '企业总数',
          number: '320个'
        },
        {
          name: '企业总数',
          number: '320个'
        },
        {
          name: '企业总数',
          number: '320个'
        }
      ],
      leftLength: 0,
      topLength: 0,
      rightLength: 0,
      bottomLength: 0,
      whiteRotateDeg: 0
    }
  },
  props: ['show'],
  methods: {},
  watch: {
    show () {
      this.leftLength = 0
      this.topLength = 0
      this.rightLength = 0
      this.bottomLength = 0

      setTimeout(() => {
        this.leftLength = 100
      }, 0)
      setTimeout(() => {
        this.topLength = 100
      }, 200)
      setTimeout(() => {
        this.rightLength = 100
      }, 400)
      setTimeout(() => {
        this.bottomLength = 100
      }, 600)
      setTimeout(() => {
        this.whiteRotateDeg = 100
      }, 600)
    }
  }
}
</script>

<style lang="scss" scoped>
  .LittleBox {
    box-sizing: border-box;
    width: 1.605rem;
    height: 1.13rem;
    background-color: #001451;
    position: relative;
    padding: 0.14rem 0.125rem 0.365rem 0.115rem;
    display: flex;
    flex-direction: column;
    position: relative;

    .line {
      display: flex;
      flex: 1;
      justify-content: space-between;
      line-height: 0.2575rem;

      .title {
        font: 0.1rem/0.15rem NotoSansHans-Regular;
        color: #35D2B2;
        width: 100%;

        li {
          display: flex;
          justify-content: flex-start;
          align-items: center;

          i {
            display: inline-block;
            width: 0.035rem;
            height: 0.035rem;
            margin-right: 0.095rem;
            background-color: #35D2B2;
          }

          span {
            width: 0.75rem;

            &.value {
              font: 0.1rem/0.15rem bold NotoSansHans-Bold;
              color: #FFFFFF;
            }
          }

          padding-left: 0.035rem;
          height: 0.17rem;
          border-bottom: 0.005rem solid #1C2859;

          &:last-child {
            border-bottom: none;
          }
        }
      }
    }

    .blueSquare {
      position: absolute;
      top: 0.825rem;
      left: -0.4rem;
      width: 0.755rem;
      height: 0.23rem;
      font: 0.15rem/0.23rem NotoSansHans-Regular;
      color: #fff;
      z-index: 999;
      text-align: center;
    }

    #boldBlueLine1 {
      position: absolute;
      top: 0;
      left: 0;
      width: 0.5rem;
      height: 0.03rem;
      background-color: #003DF9;
    }

    #boldBlueLine2 {
      position: absolute;
      top: -0.025rem;
      right: 0;
      width: 0.295rem;
      height: 0.03rem;
      background-color: #003DF9;
    }

    #whilteCircle {
      width: 0.245rem;
      height: 0.24rem;
      position: absolute;
      top: 1.43rem;
      left: -0.4rem;
      z-index: 1;
      /*opacity: 0;*/
    }

    .outline {
      background-color: red;
      transition: all linear 0.2s;
      position: absolute;
      z-index: 88;

      &.left {
        left: 0;
        top: 0;
        width: 0.01rem;
      }

      &.top {
        left: 0;
        top: 0;
        height: 0.01rem;
      }

      &.right {
        right: 0;
        top: 0;
        width: 0.01rem;
      }

      &.bottom {
        right: 0;
        bottom: 0;
        height: 0.01rem;
      }
    }
  }

  .LittleBox::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0.5385rem;
    height: 0.005rem;
    background-color: #003DF9;
    transform: rotate(121deg);
    transform-origin: 0 50%;
  }
</style>
<style lang="scss">
  .LittleBox {
    .line {
      margin-top: -1rem;
      animation: goDown 0.5s 3s forwards;
      opacity: 0;
    }

    [id^='boldBlueLine'] {
      margin-top: -1rem;
      animation: goDown 0.5s 3s forwards;
      opacity: 0;
    }
  }

  @keyframes goDown {
    from {
      margin-top: -1rem;
      opacity: 0;
    }
    to {
      margin-top: 0;
      opacity: 1;
    }
  }

  /*白圆圈*/
  #littleBox1 {
    #whilteCircle {
      /*animation: rotate1 2s 3s forwards;*/
    }
  }

  #littleBox2 {
    #whilteCircle {
      /*animation: rotate1 2s 5s forwards;*/
    }
  }

  @keyframes rotate1 {
    0% {
      transform: rotate(0);
      opacity: 0;
    }
    100% {
      transform: rotate(90deg);
      opacity: 1;
    }
  }

</style>
