<template>
  <div class="BoxNine">
    <box title="产业结构">
      <chart ref="chart2" :skey="'jjqs2'" :option="option" v-if="delayShow"></chart>
    </box>
  </div>
</template>

<script>
import box from '../../public/box'
import chart from '../../public/charts/echarts/chart'
import { deepClone, convertRem } from '../../utils'
import request from '@/api/request'

export default {
  name: 'BoxNine',
  data () {
    return {
      option: {
        legend: {
          bottom: '0',
          left: 'center',
          right: '0',
          width: '70%',
          orient: 'horizontal',//???
          itemGap: convertRem(0.4),
          itemWidth: convertRem(0.075),
          itemHeight: convertRem(0.075),
          textStyle: {
            fontSize: convertRem(0.075),
            color: '#B5BDDB'
          },
//          "data": ["测量工", "电焊工", "钢筋工", "沥青工", "安装工", "起重工", "养护工", "其它"]
        },
        grid: {
          left: '20%'
        },
        color: ['#2AC9FD', '#76FBC0', '#35C96E', '#FCC708', '#48B188', '#5957C2', '#4A5D73'],
        series: [
          {
            color: ['#32F0FE', '#D7087E', '#3D6CFC'],
            type: 'pie',
            center: ['25%', '50%'],
            radius: [convertRem(0.15), convertRem(0.35)],
//            radius: ['4.17%', '100%'],
            label: {
              normal: {
                show: false
              }
            },
            data: [
              {
                name: '生物医药产业',
                value: '272'
              }, {
                name: '新材料及装备制造产业',
                value: '292'
              }, {
                name: 'IT及现代服务产业',
                value: '120'
              }]
          },
          {
            type: 'pie',
            center: ['25%', '50%'],
            radius: [convertRem(0.4075), convertRem(0.4125)],
            data: [100],
            label: {
              show: false
            }
          },
          {
            color: ['#32F0FE', '#D7087E', '#3D6CFC'],
            type: 'pie',
            center: ['75%', '50%'],
            radius: [convertRem(0.15), convertRem(0.35)],
            label: {
              normal: {
                show: false
              }
            },
            data: [
              {
                name: '生物医药产业',
                value: '272'
              }, {
                name: '新材料及装备制造产业',
                value: '292'
              }, {
                name: 'IT及现代服务产业',
                value: '120'
              }]
          },
          {
            type: 'pie',
            center: ['75%', '50%'],
            radius: [convertRem(0.4075), convertRem(0.4125)],
            data: [100],
            label: {
              show: false
            }
          }
        ]
      },
    }
  },
  props: ['delayShow'],
  methods: {
    changeJJqs (type) {
      this.activeJJqs = type
      let newOption = deepClone(this.option)

      request.normalPort({
        codeArray: ['Xh00005', 'Xh00006', 'Xh00007', 'Xh00008', 'Xh00009', 'Xh00010', 'Xh00011', 'Xh00012', 'Xh00013', 'Xh00014', 'Xh00015', 'Xh00016', 'Xh00017', 'Xh00018', 'Xh00019', 'Xh00020', 'Xh00021', 'Xh00022', 'Xh00023', 'Xh00024', 'Xh00025', 'Xh00026', 'Xh00027', 'Xh00028']
      }).then(res => {
        let arr1 = []
        let arr2 = []
        res.data.data.resultList.map((item, index, arry) => {
          if (index < 12) {
            arr1.push(item.value)
          } else {
            arr2.push(item.value)
          }
        })
        newOption.series[0].data = arr1
        newOption.series[1].data = arr2
        this.option = newOption
      }).catch(err => {
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
  .BoxNine {

  }
</style>
