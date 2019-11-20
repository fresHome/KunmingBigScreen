<template>
  <div class="BoxEight">
    <box title="知识产权分布" line-with="short">
      <div class="group">
        <subPie class="animated pie fadeInUp"
                :class="'delay'+index"
                v-for="(item,index) in data"
                :skey="'subPie'+index"
                :key="index"
                :value="item.value"
                :percent="item.percent"
                :stitle="item.title"></subPie>
      </div>
    </box>
  </div>
</template>

<script>
import box from '../../public/box'
import subPie from '../../public/charts/self/subPie'
import request from '@/api/request'

export default {
  name: 'BoxEight',
  data () {
    return {
      data: []
    }
  },
  props: ['delayShow'],
  components: {
    box,
    subPie
  },
  methods: {
    getData () {
      request.normalPort({
        codeArray: ['Xh00064', 'Xh00065', 'Xh00066', 'Xh00067', 'Xh00068', 'Xh00069']
      }).then(res => {
        let total = 0
        let arr = []
        res.data.data.resultList.map(item => {
          total += Number(item.value)
        })
        res.data.data.resultList.map(item => {
          let arrStr = item.codeRemark.split('')
          arrStr.forEach((item, index) => {
            if (item.match(/^\s*$/) != null) {
              arrStr.splice(index, arrStr.length - index)
            }
          })

          arr.push({
            title: arrStr.join(''),
            value: Number(item.value),
            percent: (item.value / total).toFixed(2) * 100
          })
        })
        this.data = arr
      })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
  .BoxEight {
    .group {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      height: 100%;

      .pie {
        width: 1.1rem;
        height: 0.65rem;

        &.delay0 {
          animation-delay: 1s;
        }

        &.delay1 {
          animation-delay: 1.2s;
        }

        &.delay2 {
          animation-delay: 1.4s;
        }

        &.delay3 {
          animation-delay: 1.6s;
        }

        &.delay4 {
          animation-delay: 1.8s;
        }

        &.delay5 {
          animation-delay: 2s;
        }
      }
    }
  }
</style>
