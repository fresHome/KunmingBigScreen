<template>
  <div class="BoxSeven">
    <box title="人才结构分布" line-with="short">
      <chart ref="chart71" :skey="'chart71'" :option="option1"></chart>
      <chart ref="chart72" :skey="'chart72'" :option="option2"></chart>
    </box>
  </div>
</template>

<script>
import box from '../../../../components/box/index'
import chart from '../../../../components/charts/echarts/chart'
import { deepClone, convertRem } from '../../../../utils'
import request from '@/api/request'

export default {
  name: 'BoxSeven',
  data () {
    return {
      option1: {
        title: {
          text: '年龄层次',
          x: 'center',
          y: 'center',
          textStyle: {
            fontSize: convertRem(0.1),
            fontWeight: 'normal',
            color: '#B5BDDB'
          }
        },
        series: [
          {
            color: ['#32F0FE', '#D7087E', '#003DF9', '#A168FF', '#E6FF3C'],
            type: 'pie',
            radius: [convertRem(0.33), convertRem(0.345)],
            center: ['50%', '50%'],
            data: [],
            labelLine: {
              normal: {
                show: true,
                length: convertRem(0.05),
                length2: convertRem(0.1),
                lineStyle: {
                  color: '#fff',
                  width: convertRem(0.005)
                }
              }
            },
            label: {
              fontSize: convertRem(0.075),
              color: '#FFF',
              align: 'left'
            }
          }
        ]
      },
      option2: {
        title: {
          text: '薪资等级',
          x: 'center', //相当于left
          y: 'center',//相当于top
          textStyle: {
            fontSize: convertRem(0.1),
            fontWeight: 'normal',
            color: '#B5BDDB'
          }
        },
        series: [
          {
            type: 'pie',
            color: ['#32F0FE', '#D7087E', '#003DF9', '#A168FF', '#E6FF3C'],
            radius: [convertRem(0.33), convertRem(0.345)],
            center: ['50%', '50%'],
            data: [],
            labelLine: {
              normal: {
                show: true,
                length: convertRem(0.05),
                length2: convertRem(0.1),
                lineStyle: {
                  color: '#fff',
                  width: convertRem(0.005)
                }
              }
            },
            label: {
              fontSize: convertRem(0.075),
              color: '#FFF',
              align: 'left'
            }
          }
        ]
      }
    }
  },
  methods: {
    changeJJqs () {
      let newOption1 = deepClone(this.option1)
      let newOption2 = deepClone(this.option2)
      request.normalPort({
        codeArray: ['Xh00055', 'Xh00056', 'Xh00057', 'Xh00058']
      }).then(res => {
        let arr1 = []
        res.data.data.resultList.map((item) => {
          arr1.push({
            value: item.value,
            name: item.codeRemark + item.value + '%'
          })
        })
        newOption1.series[0].data = arr1
        this.option1 = newOption1
      })

      request.normalPort({
        codeArray: ['Xh00059', 'Xh00060', 'Xh00061', 'Xh00062', 'Xh00063']
      }).then(res => {
        let arr2 = []
        res.data.data.resultList.map((item) => {
          arr2.push({
            value: item.value,
            name: item.codeRemark + item.value + '%'
          })
        })
        newOption2.series[0].data = arr2
        this.option2 = newOption2
      })
    }
  },
  mounted () {
    this.changeJJqs()
  },
  components: {
    box, chart
  }
}
</script>

<style lang="scss" scoped>
  .BoxSeven {
    .sCharts {
      width: 50%;
    }
  }
</style>
