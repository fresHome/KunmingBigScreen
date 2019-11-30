<template>
  <div class="secondBoxSeven">
    <box title="知识产权" :active-tab="activeTab" :tab-content="tabContent">
      <div class="container" v-if="activeTab==1">
        <div class="left">
          <div class="pinkDiv" v-for="item in pinkArr" :key="item.id">
            <div>{{item.value}}</div>
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
            <div class="barDiv" v-for="item in barData" :key="item.id" :style="{marginTop:(3000-item.value)/3000*0.7+'rem'}">
              <div class="text">{{ item.value }}</div>
              <div class="littleBlue"></div>
              <div :style="{height:item.value/3000*0.7+'rem'}" class="bar"></div>
              <div class="text2">{{ item.time.slice(0,4) }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="container" v-if="activeTab==2">

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
        pinkArr: [
          {
            number: 14,
            name: '网站'
          },
          {
            number: 14,
            name: '商标'
          },
          {
            number: 14,
            name: '发明专利'
          },
          {
            number: 14,
            name: '著作权'
          },
          {
            number: 14,
            name: '软件著作权'
          },
          {
            number: 14,
            name: '证书'
          },
        ],
        barData: [],
        activeTab: 1,
        tabContent: [
          {
            num: 1,
            name: '数量及趋势',
            chart: 7
          },
          {
            num: 2,
            name: '榜单',
            chart: 7
          }
        ]
      }
    },
    methods: {
      getData (code) {
        request.normalPort({
          codeArray: code
        }).then(res => {
          this.pinkArr = []
          let newBarData = []
          res.data.data.resultList.map(item => {
            if (item.code.slice(-2) > 30 && item.code.slice(-2) < 37) {
              this.pinkArr.push(item)
            } else if (item.code.slice(-2) == 37) {
              newBarData.push(item)
              this.barData = newBarData
            }
          })
        })
      }
    },
    mounted () {
      this.getData(['Xm00031', 'Xm00032', 'Xm00033', 'Xm00034', 'Xm00035', 'Xm00036', 'Xm00037'])
      window.eventHub.$on('changeTab', (item) => {
        if (item.chart == 7) {
          if (item.num == 1) {
            this.activeTab = 1
            this.getData(['Xm00031', 'Xm00032', 'Xm00033', 'Xm00034', 'Xm00035', 'Xm00036', 'Xm00037'])
          } else {
            this.activeTab = 2
            this.getData(['Xm00030'])
          }
        }
      })
    },
    beforeDestroy () {
      window.eventHub.$off('changeTab')
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
      }

      .right {
        margin-top: 0.1rem;
        width: 1.26rem;

        > div:first-child {
          font: 0.1rem NotoSansHans-Regular;
          color: #33C9AC;
        }

        > div:last-child {
          display: flex;
          flex-direction: row;

          .barDiv {
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
      }
    }
  }
</style>
