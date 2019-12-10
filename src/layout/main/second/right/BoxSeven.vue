<template>
  <div class="secondBoxSeven">
    <box title="知识产权">
      <div class="container">
        <div class="left">
          <div class="pinkDiv" v-for="(item) in pinkArr" :key="item.id">
            <div>{{JSON.parse(item.value)[0].x1}}</div>
            <div class="name">{{item.codeRemark.slice(0,item.codeRemark.indexOf('/t'))}}</div>
            <div class="circle4">
              <div>
                <div class="circle"></div>
                <div class="circle"></div>
              </div>
              <div>
                <div class="circle"></div>
                <div class="circle"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <div>知识产权总量</div>
          <div>
            <div class="barDiv" v-for="item in barData" :key="item.id" :style="{marginTop:(maxValue-item.y1)/maxValue*0.7+'rem'}">
              <div class="text">{{ item.y1 }}</div>
              <div class="littleBlue"></div>
              <div :style="{height:item.y1/maxValue*0.7+'rem'}" class="bar"></div>
              <div class="text2">{{ item.x1 }}</div>
            </div>
          </div>
        </div>
      </div>
    </box>
  </div>
</template>

<script>
import box from '../../../../components/box/index'
import request from '@/api/request'

export default {
  name: 'secondBoxSeven',
  data () {
    return {
      pinkArr: [],
      barData: [],
      maxValue: 1
    }
  },
  methods: {
    getData (code) {
      request.normalPort({
        codeArray: code
      }).then(res => {
        this.pinkArr = []
        res.data.data.resultList.map(item => {
          if (item.code.slice(-2) > 30 && item.code.slice(-2) < 37) {
            this.pinkArr.push(item)
          } else if (item.code.slice(-2) == 37) {
            this.barData = JSON.parse(item.value)
          }
          this.maxValue = Math.max.apply(null, this.barData.map(o => (o.y1)))
        })
      })
    }
  },
  mounted () {
    this.getData(['Xm00031', 'Xm00032', 'Xm00033', 'Xm00034', 'Xm00035', 'Xm00036', 'Xm00037'])
  },
  components: {
    box
  }
}
</script>

<style lang="scss" scoped>
  .secondBoxSeven {
    .container {
      display: flex;
      justify-content: flex-start;

      .left {
        width: 2rem;
        margin-top: 0.1rem;
        display: flex;
        flex-wrap: wrap;

        .pinkDiv {
          width: 0.515rem;
          height: 0.515rem;
          border: 0.005rem dashed #D7087E;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          flex-direction: column;
          margin-right: 0.1rem;
          position: relative;
          opacity: 0;

          > div:first-child {
            font: 0.1rem bold NotoSansHans-Bold;
            color: #ECEFF5;
            margin-bottom: 0.1rem;
          }

          > .name {
            font: 0.1rem bold NotoSansHans-Bold;
            color: #32F0FE;
          }

          .circle4 {
            position: absolute;
            top: 0.035rem;
            left: 0.035rem;
            width: 0.445rem;
            height: 0.44rem;
            flex-wrap: wrap;
            align-content: space-between;

            > div {
              flex-basis: 100%;
              display: flex;
              justify-content: space-between;

              > .circle {
                background-color: #D7087E;
                width: 0.002rem;
                height: 0.002rem;
                border-radius: 0.001rem;
              }
            }

          }
        }

        .pinkDiv:nth-child(3n) {
          margin-right: 0;
        }

        .pinkDiv:nth-child(1) {
          animation: opacityChange 0.2s 0.2s forwards;
        }

        .pinkDiv:nth-child(2) {
          animation: opacityChange 0.2s 0.4s forwards;
        }

        .pinkDiv:nth-child(3) {
          animation: opacityChange 0.2s 0.6s forwards;
        }

        .pinkDiv:nth-child(4) {
          animation: opacityChange 0.2s 0.8s forwards;
        }

        .pinkDiv:nth-child(5) {
          animation: opacityChange 0.2s 1s forwards;
        }

        .pinkDiv:nth-child(6) {
          animation: opacityChange 0.2s 1.2s forwards;
        }
      }

      .right {
        margin-top: 0.1rem;
        width: 1.26rem;
        opacity: 0;
        animation: goUp 1s 0.2s forwards;

        > div:first-child {
          font: 0.1rem NotoSansHans-Regular;
          color: #33C9AC;
        }

        > div:last-child {
          display: flex;
          flex-direction: row;

          .barDiv {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            .text {
              font: 0.1rem bold NotoSansHans-Bold;
              color: #fff;
            }

            .littleBlue {
              width: 0.1305rem;
              height: 0.015rem;
              margin-bottom: 0.02rem;
              background-color: #32F0FE;
            }

            .text2 {
              font-size: 0.075rem;
              color: #A5ADCB;
              margin-top: 0.06rem;
            }

            .bar {
              width: 0.1305rem;
              background-image: linear-gradient(#32F0FE, #003DF9);
            }
          }
        }

        @keyframes goUp {
          from {
            margin-top: 2.1rem;
            opacity: 0;
          }
          to {
            margin-top: 0.1rem;
            opacity: 1;
          }
        }
      }
    }

    @keyframes opacityChange {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
</style>
