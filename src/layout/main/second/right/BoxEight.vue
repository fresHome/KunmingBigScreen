<template>
  <div class="BoxFive">
    <box title="明星企业榜单" line-with="short" :tab-content="tabContent">
      <sort :col="colArr[activeTab]" v-if="activeTab==0" :sortData="sortData"></sort>
      <sort :col="colArr[activeTab]" v-if="activeTab==1" :sortData="sortData"></sort>
      <sort :col="colArr[activeTab]" v-if="activeTab==2" :sortData="sortData"></sort>
    </box>
  </div>
</template>

<script>
  import box from '../../../../components/box/index'
  import request from '@/api/request'
  import sort from '../../../../components/sort/sort'

  export default {
    name: 'BoxFive',
    data () {
      return {
        activeTab: 0,
        tabContent: [
          {
            chart: 28,
            num: 0,
            name: '经济贡献最佳',
            code: ['Xm00038']
          },
          {
            chart: 28,
            num: 1,
            name: '人效最佳',
            code: ['Xm00043']
          },
          {
            chart: 28,
            num: 2,
            name: '科技创新最佳',
            code: ['Xm00048']
          }
        ],
        colArr: [
          [
            {
              name: '企业名称',
              key: 'y2'
            },
            {
              name: '企业企业累计税收（万元）',
              key: 'y3'
            }
          ],
          [
            {
              name: '企业名称',
              key: 'y2'
            },
            {
              name: '人才数(人)',
              key: 'y3'
            }
          ],
          [
            {
              name: '企业名称',
              key: 'y2'
            },
            {
              name: '知识产权数(个)',
              key: 'y3'
            }
          ]
        ],
        sortData: []
      }
    },
    components: {
      box,
      sort
    },
    methods: {
      getData (code) {
        request.normalPort({
          codeArray: code
        }).then(res => {
          let list = JSON.parse(res.data.data.resultList[0].value)
          this.sortData = list
        })
      }
    },
    mounted () {
      this.getData(['Xm00038'])
      window.eventHub.$on('changeTab', (item) => {
        if (item.chart == 28) {
          this.activeTab = item.num
          this.getData(item.code)
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
