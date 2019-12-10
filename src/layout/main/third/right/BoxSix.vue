<template>
  <div class="BoxOne">
    <box title="人才需求">
      <!--      <div id="container" style="height: 150px; min-width: 300px; max-width: 350px; margin: 0 auto"></div>-->
      <div id="container" style="height: 1.5rem; min-width: 3rem; max-width: 3.5rem; margin: 0 auto"></div>
    </box>
  </div>
</template>

<script>
import box from '../../../../components/box/index'
//import chart from '../../../../components/charts/echarts/chart'
import { convertRem } from '../../../../utils'
//import { deepClone, convertRem } from '../../../../utils'
import request from '@/api/request'
//import sort from '../../../../components/sort/sort'
import Highcharts from 'highcharts'
import highchartsMore from 'highcharts/highcharts-more';

highchartsMore(Highcharts);

export default {
  name: 'BoxOne',
  data () {
    return {
      highchartData: {
        chart: {
          type: 'packedbubble',
//        height: '100%',
          height: convertRem(1.5),
          width: convertRem(3.5),
          backgroundColor: 'transparent',
        },
        legend: {
          enabled: false //不显示图例
        },
        credits: {
          enabled: false //不显示LOGO
        },
        colors: ['#900E78', '#133493', '#118BC8', '#8A4FDF'],
        title: {
          text: null
        },
        tooltip: {
          useHTML: true,
//        pointFormat: '<b>{point.name}:</b> {point.y}m CO<sub>2</sub>'
          pointFormat: '{point.y}人'
        },
        plotOptions: {
          packedbubble: {
            minSize: '1%',
            maxSize: '100%',
            zMin: 0,
            zMax: 20,
            layoutAlgorithm: {
              splitSeries: false,
              gravitationalConstant: 0.02
            },
            dataLabels: {
              enabled: true,
              format: '{point.name} <br/> {point.value}人',
              filter: {
                property: 'y',
                operator: '>',
                value: 10
              },
              style: {
                color: '#fff',
                textOutline: 'none',
                fontWeight: 'normal',
                textAlign: 'center'
              }
            }
          }
        },
        series: [
          {
            name: '产品经理',
            data: [
              {
                name: "产品经理",
                value: 13
              },
              {
                name: "产品理",
                value: 3
              },
              {
                name: "品经理",
                value: 2
              },
              {
                name: "产品",
                value: 5
              },
            ]
          },
//          {
//            name: '开发',
//            data: [
//              {
//                name: "开发",
//                value: 15
//              }]
//          },
//          {
//            name: '行政',
//            data: [
//              {
//                name: '行政',
//                value: 15
//              }
//            ]
//          }
        ]
      }
    }
  },
//  props: ['delayShow'],
  methods: {
    getData (code) {
      request.normalPort({
        codeArray: code
      }).then(res => {
        console.log(JSON.parse(res.data.data.resultList[0].value));
        let arr = JSON.parse(res.data.data.resultList[0].value);
        let newArr = []
        arr.forEach(item => {
          let a = newArr.findIndex(i => (
            i.name == item.x1
          ))
          if (a != -1) {
            newArr[a].data.push({ name: item.x1, value: Number(item.y1) })
          } else {
            newArr.push({ name: item.x1, data: [{ name: item.x1, value: Number(item.y1) }] })
          }
        })
        this.highchartData.series = newArr;
      })
      console.log(111, this.highchartData);
      Highcharts.chart('container', this.highchartData);
    }
  },
  mounted () {
    this.getData(['Xs00032'])
  },
  components: {
    box
  }
}
</script>

<style lang="scss" scoped>
  .BoxOne {
    #container {
      /*min-width: 300px;*/
      /*max-width: 350px;*/
      /*height: 150px;*/
      /*margin: 0 auto;*/
    }
  }
</style>
