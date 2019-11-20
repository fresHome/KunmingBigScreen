<template>
  <div class="BoxSeven">
    <box title="人才结构分布" line-with="short">
      <chart ref="chart7" :skey="'chart7'" :option="option"></chart>
    </box>
  </div>
</template>

<script>
import box from '../../public/box'
import chart from '../../public/charts/echarts/chart'
import { deepClone, convertRem } from '../../utils'
import request from '@/api/request'

export default {
  name: 'BoxSeven',
  data () {
    return {
      option: {
        title: [{
          text: '年龄层次',
          x: '18%', // 怎么算？
          y: '43%',
          textStyle: {
            fontSize: convertRem(0.1),
            fontWeight: 'normal',
            color: '#B5BDDB'
          }
        },
        {
          text: '薪资等级',
          x: '68%', // 怎么算？
          y: '43%',
          textStyle: {
            fontSize: convertRem(0.1),
            fontWeight: 'normal',
            color: '#B5BDDB'
          }
        }],
        series: [
          {
            color: ['#32F0FE', '#D7087E', '#003DF9', '#A168FF', '#E6FF3C'],
            type: 'pie',
            radius: [convertRem(0.33), convertRem(0.345)],
            center: ['25%', '50%'],
            data: [],
            labelLine: {
              normal: {
                show: true,
                length: convertRem(0.2),
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
          },
          {
            type: 'pie',
            color: ['#32F0FE', '#D7087E', '#003DF9', '#A168FF', '#E6FF3C'],
            radius: [convertRem(0.33), convertRem(0.345)],
            center: ['75%', '50%'],
            data: [],
            labelLine: {
              normal: {
                show: true,
                length: convertRem(0.2),
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
  props: ['delayShow'],
  methods: {
    changeJJqs (type) {
      this.activeJJqs = type
      let newOption = deepClone(this.option)
      request.normalPort({
        codeArray: ['Xh00055', 'Xh00056', 'Xh00057', 'Xh00058', 'Xh00059', 'Xh00060', 'Xh00061', 'Xh00062', 'Xh00063']
      }).then(res => {
        let arr1 = []
        let arr2 = []
        res.data.data.resultList.map((item, index, arry) => {
          if (item.code.slice(-2) < 59) {
            arr1.push({
              value: item.value,
              name: item.codeRemark
            })
          } else {
            arr2.push({
              value: item.value,
              name: item.codeRemark
            })
          }
        })
        newOption.series[0].data = arr1
        newOption.series[1].data = arr2

        this.option = newOption
      })
    },
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

  }
</style>
