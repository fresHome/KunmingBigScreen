<template>
  <div class="BoxFive">
    <box title="发展成果" :tab-content="tabContent">
      <chart ref="chart25" :skey="'jjqs25'" :option="option"></chart>
    </box>
  </div>
</template>

<script>
  import box from '../../../../components/box/index'
  import request from '@/api/request'
  import chart from '../../../../components/charts/echarts/chart'
  import { convertRem, deepClone } from '../../../../utils'

  export default {
    name: 'BoxFive',
    data () {
      return {
        activeTab: 0,
        tabContent: [
          {
            num: 0,
            name: '按营收规模',
            chart: 5
          },
          {
            num: 1,
            name: '按行业',
            chart: 5
          }
        ],
        option: {
          grid: {
            top: convertRem(0.1),
            left: 0,
            right: convertRem(0.1),
            bottom: 0,
            containLabel: true
          },
          xAxis: {
            type: 'category',
            data: [],
            axisTick: {
              show: false
            },
            axisLabel: {
              color: '#fff',
              interval: 0,
              fontSize: convertRem(0.075),
            },
            axisLine: {
              show: false
            }
          },
          yAxis: {
            type: 'category',
            data: [],
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              color: '#B5BDDB',
              fontSize: convertRem(0.075)
            }
          },
          series: [{
            name: 'Punch Card',
            type: 'scatter',
            symbolSize: (val) => {
              return val[2] * 2
            },
            color: '#D7087E',
            data: [],
            animationDelay: (idx) => {
              return idx * 50
            }
          }]
        }
      }
    },
    components: {
      box,
      chart
    },
    methods: {
      getData (code) {
        request.normalPort({
          codeArray: code
        }).then(res => {
          let data = JSON.parse(res.data.data.resultList[0].value)
          let xArr = []
          let yArr = []
          data.map(item => {
            xArr.push(item.x1)
            yArr.push(item.y1)
          })
          xArr = [...new Set(xArr)]
          yArr = [...new Set(yArr)]
          this.buildOption(xArr, yArr, data)
        })
      },
      buildOption (x, y, data) {
        let newOption = deepClone(this.option)
        newOption.xAxis.data = x
        newOption.yAxis.data = y
        let newData = []
        data.map(item => {
          newData.push([x.indexOf(item.x1), y.indexOf(item.y1), item.y3])
        })
        newOption.series[0].data = newData
        this.option = newOption
      }
    },
    mounted () {
      this.getData(['Xm00025'])
      window.eventHub.$on('changeTab', (item) => {
        if (item.chart == 5) {
          this.activeTab = item.num
          if (item.num == 0) {
            this.getData(['Xm00025'])
          } else {
            this.getData(['Xm00026'])
          }
        }
      })
    },
    beforeDestroy () {
      window.eventHub.$off('changeTab')
    }
  }
</script>

<style lang="scss" scoped>
  .BoxFive {

  }
</style>
