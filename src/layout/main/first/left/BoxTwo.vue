<template>
  <div class="BoxTwo">
    <box title="产业结构">
      <!--      <chart ref="chart2" :skey="'jjqs2'" :option="option" v-if="delayShow"></chart>-->
      <chart ref="chart21" :skey="'jjqs21'" :option="option1"></chart>
      <chart ref="chart22" :skey="'jjqs22'" :option="option2"></chart>
      <div class="leftSide">
        <div>{{leftData[0]}}</div>
        <div>{{leftData[1]}}</div>
        <div>{{leftData[2]}}</div>
      </div>
      <div class="rightSide">
        <div>{{rightData[0]}}</div>
        <div>{{rightData[1]}}</div>
        <div>{{rightData[2]}}</div>
      </div>
    </box>
  </div>
</template>

<script>
  import box from '../../../../components/box/index'
  import chart from '../../../../components/charts/echarts/chart'
  import { deepClone, convertRem } from '../../../../utils'
  import request from '@/api/request'

  export default {
    name: 'BoxTwo',
    data () {
      return {
        showChart1: 0,
        showChart2: 0,
        leftData: [],
        rightData: [],
        option1: {
          animation: true,
          legend: {
            bottom: 'bottom',
            left: 'center',
            width: '100%',
            itemWidth: convertRem(0.075),
            itemHeight: convertRem(0.075),
            textStyle: {
              fontSize: convertRem(0.075),
              color: '#B5BDDB'
            },
            data: ['生物医药产业', '新材料及装备制造产业', 'IT及现代服务产业']
          },
          grid: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            containLabel: true
          },
          color: ['#7EF7FF', '#6D91FF', '#D7087E'],
          series: [
            {
              type: 'pie',
              center: ['70%', '50%'],
              radius: [convertRem(0.15), convertRem(0.35)],
              label: {
                normal: {
                  show: false
                }
              },
              data: []
            },
            {
              type: 'pie',
              center: ['70%', '50%'],
              radius: [convertRem(0.4075), convertRem(0.4125)],
              data: [100],
              label: {
                show: false
              }
            }
          ]
        },
        option2: {
          animation: true,
          grid: {
            top: 0,
            left: 0,
            bottom: 0,
            containLabel: true
          },
          color: ['#7EF7FF', '#6D91FF', '#D7087E'],
          series: [
            {
              type: 'pie',
              center: ['30%', '50%'],
              radius: [convertRem(0.15), convertRem(0.35)],
              label: {
                normal: {
                  show: false
                }
              },
              data: []
            },
            {
              type: 'pie',
              center: ['30%', '50%'],
              radius: [convertRem(0.4075), convertRem(0.4125)],
              data: [100],
              label: {
                show: false
              }
            }
          ]
        }
      }
    },
    methods: {
      changeJJqs (type) {
        this.activeJJqs = type
        let newOption1 = deepClone(this.option1)
        let newOption2 = deepClone(this.option2)

        request.normalPort({
          codeArray: ['Xh00007', 'Xh00009', 'Xh00011']
        }).then(res => {
          let arr1 = [
            { name: '生物医药产业', value: 0 },
            { name: '新材料及装备制造产业', value: 0 },
            { name: 'IT及现代服务产业', value: 0 }
          ]
          let total1 = 0
          res.data.data.resultList.map((item, index) => {
            if (item.codeRemark.indexOf(arr1[index].name) >= 0) {
              arr1[index].value = item.value
              total1 += Number(item.value)
            }
          })
          res.data.data.resultList.map(item => {
            this.leftData.push(item.value + '/' + Math.round(item.value / total1 * 100) + '%')
          })

          newOption1.series[0].data = arr1

          this.option1 = newOption1
        })

        request.normalPort({
          codeArray: ['Xh00013', 'Xh00015', 'Xh00017']
        }).then(res => {
          let arr2 = [
            { name: '生物医药产业', value: 0 },
            { name: '新材料及装备制造产业', value: 0 },
            { name: 'IT及现代服务产业', value: 0 }
          ]
          let total2 = 0
          res.data.data.resultList.map((item, index) => {
            if (item.codeRemark.indexOf(arr2[index].name) >= 0) {
              arr2[index].value = item.value
              total2 += Number(item.value)
            }
          })
          res.data.data.resultList.map(item => {
            this.rightData.push(item.value + '/' + Math.round(item.value / total2 * 100) + '%')
          })
          newOption2.series[0].data = arr2

          this.option2 = newOption2
        })

      }
    },
    mounted () {
      this.changeJJqs()
//    setTimeout(() => {
//      this.showChart1 = 1
//    }, 1667)
//    setTimeout(() => {
//      this.showChart2 = 1
//    }, 2333)
    },
    components: {
      box, chart
    }
  }
</script>

<style lang="scss" scoped>
  .BoxTwo {
    .sCharts {
      width: 0.825rem;
    }

    .sCharts:first-child {
      /*margin-right: 0.02rem;*/
    }

    .sCharts:nth-child(2) {
      /*margin-left: 0.02rem;*/
    }

    [class$='Side'] {
      /*background-color: yellow;*/
      font: 0.1rem bold NotoSansHans-Bold;
      position: absolute;
      opacity: 0;
      top: 0.365rem;
      animation: flowUp 0.5s 1.33s forwards;

      :first-child {
        color: #32F0FE;
        margin-bottom: 0.105rem;
      }

      :nth-child(2) {
        color: #D7087E;
        margin-bottom: 0.105rem;
      }

      :nth-child(3) {
        color: #3D6CFC;
      }
    }

    .leftSide {
      left: 0.19rem;
      /*top: 0.365rem;*/
    }

    .rightSide {
      right: 0.19rem;
      /*top: 0.365rem;*/
    }
  }

  @keyframes flowUp {
    from {
      opacity: 0;
      top: 0.865rem;
    }
    to {
      opacity: 1;
      top: 0.365rem;
    }
  }

  @keyframes flowUp2 {
    from {
      opacity: 0;
      bottom: -0.37rem;
    }
    to {
      opacity: 1;
      bottom: 0.13rem;
    }
  }
</style>
