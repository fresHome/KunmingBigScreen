<template>
  <div class="BoxFour">
    <box title="招商引资">
    </box>
  </div>
</template>

<script>
import box from '../../../public/box/index'
import chart from '../../../public/charts/echarts/chart'
import { deepClone, convertRem } from '../../../utils'
import request from '@/api/request'

export default {
  name: 'BoxFour',
  data () {
    return {
    }
  },
  methods: {
    changeData (type) {
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
      })
    }
  },
  mounted () {
        this.changeData()
  },
  components: {
    box, chart
  }
}
</script>

<style lang="scss" scoped>
  .BoxFour {
    flex-grow: 1;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;

    .title {
      font-size: 0.1rem;
      color: #32C4A8;
      margin-bottom: 0.15rem;
    }

    .left {
      width: 1.8rem;
      min-width: 1.8rem;

      .chart {
        height: 0.9rem;
      }
    }

    .split {
      width: 0.03rem;
      margin-right: 0.2rem;
    }

    .right {
      flex-grow: 1;
      display: flex;
      justify-content: space-between;
      flex-direction: column;

      .item {
        p {
          line-height: 0.12rem;
          height: 0.12rem;
          display: flex;
          justify-content: space-between;
          margin: 0.02rem 0;

          .name {
            font-size: 0.075rem;
            color: #ADB5D3;
          }

          .value {
            width: 0.55rem;
            height: 0.12rem;
            font-size: 0.1rem;
            font-weight: bold;
            text-align: center;
            color: #fff;
          }
        }
      }
    }
  }
</style>
