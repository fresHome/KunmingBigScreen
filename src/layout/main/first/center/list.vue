<template>
  <div class="list" :style="style">
    <div class="square" :style="{img:'lankuang1.png'}|imgLoad()" v-for="item in squareBox" :key="item.id">
      <div class="text">{{item.codeRemark}}</div>
      <div class="number">
        <numberUp class="number" :endVal="item.value"></numberUp>
      </div>
    </div>
  </div>
</template>

<script>
  import numberUp from '../../../../components/number/numberUp'
  import request from '@/api/request'

  export default {
    name: 'list',
    data () {
      return {
        style: {},
        squareBox: [
          {
            name: '企业数',
            value: 43759,
            unit: '家'
          },
          {
            name: '本年累计营收',
            value: 1260.19,
            unit: '亿元'
          },
          {
            name: '本年累计税收',
            value: 165.33,
            unit: '亿元'
          },
          {
            name: '人才总数',
            value: 31.58,
            unit: '万人'
          }
        ]
      }
    },
    components: { numberUp },
    methods: {
      getIndexList () {
        request.normalPort({
          codeArray: ['Xh00001', 'Xh00002', 'Xh00003', 'Xh00004']
        }).then(res => {
          let data = res.data.data.resultList

          data.map((item) => {
            let arr = []
            let emptyIndex = 0
            arr = item.codeRemark.split('')

            arr.map((item, index) => {
              if (emptyIndex == 0 && item.match(/^\s*$/) != null) {
                arr[index] = '（'
                emptyIndex = 1
              } else if (item.match(/^\s*$/) != null) {
                arr.splice(index, 1)
              }
            })
            arr.push('）')
            item.codeRemark = arr.join('')
            item.value = parseFloat(item.value)
          })
          this.squareBox = data
        })
      }
    },
    mounted () {
      this.getIndexList()
      this.style = {
        opacity: 0,
        marginTop: '0.22rem'
      }
      setTimeout(() => {
        this.style = {
          opacity: 1,
          marginTop: '0.37rem'
        }
      }, 0)
    }
  }
</script>

<style lang="scss" scoped>
  .list {
    width: 6.05rem;
    height: 0.62rem;
    display: flex;
    margin: 0 auto;
    margin-top: 0.22rem;
    opacity: 0;
    transition: all linear 0.5s;

    .square {
      width: 1.57rem;
      height: 0.62rem;
      text-align: left;

      .text {
        margin: 0.15rem 0 0 0.205rem;
        height: 0.1rem;
        font: 0.1rem/0.1rem NotoSansHans-Bold;
        color: #FFFFFFFF;
      }

      .number {
        margin: 0.065rem 0 0 0.21rem;
        font: bold 0.25rem/0.195rem NotoSansHans-Bold;
        height: 0.195rem;
        color: #32F0FE;
      }
    }

    .square:not(:last-child) {
      margin-right: 0.175rem;
    }
  }
</style>
