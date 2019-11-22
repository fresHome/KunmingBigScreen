<template>
  <div class="index">
    <div class="squreLine">
      <div class="square" :style="{img:'lankuang1.png'}|imgLoad()" v-for="item in squareBox" :key="item.id">
        <div class="text">{{item.codeRemark}}</div>
        <div class="number">{{item.value}}</div>
      </div>
    </div>
    <LittleBox v-show="type" :show="type" id="littleBox1"></LittleBox>
    <LittleBox v-show="!type" :show="type" id="littleBox2"></LittleBox>
    <!--    <div id="whilteCircle" :style="{img:'whiteCircle.png'}|imgLoad()"></div>-->
    <!--    底部图案-->
    <div id="bottomBg" :style="{img:'zu9copy.png'}|imgLoad()"></div>
  </div>
</template>

<script>
import LittleBox from '../LittleBox'
import request from '@/api/request'

export default {
  name: 'index',
  data () {
    return {
      delayShow: 1,
      option9: {},
      squareBox: [],
      type: false
    }
  },
  methods: {
    getIndexList (type) {
      request.normalPort({
        codeArray: ['Xh00001', 'Xh00002', 'Xh00003', 'Xh00004']
      }).then(res => {
        this.squareBox = res.data.data.resultList
        this.squareBox.map((item, index, arry) => {
          let arr = []
          let emptyIndex = 0
          arr = item.codeRemark.split('')

          arr.map((item, index) => {
            if (emptyIndex == 0 && item.match(/^\s*$/) != null) {
              arr[index] = '（'
              emptyIndex = 1
            } else if (item.match(/^\s*$/) != null) {
              arr.splice(index, 1)
            }
          })
          arr.push('）')
          item.codeRemark = arr.join('')
        })
      })
    }
  },
  mounted () {
    this.getIndexList()
    setInterval(() => {
      this.type = !this.type
    }, 5000)
  },
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
      animation: transform 0.8334s forwards; //1秒30

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
      /*opacity: 1;*/
      /*animation: littleBoxFlow 2s 3s backwards;*/
    }

    #littleBox2 {
      position: absolute;
      top: 5.505rem;
      left: 8.39rem;
      /*opacity: 0;*/
      /*animation: littleBoxFlow 2s 5s forwards;*/
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
<style lang="scss">
  @keyframes littleBoxFlow {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
