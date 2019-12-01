<template>
  <div class="BoxFive">
    <box title="发展成果" line-with="short" :tab-content="tabContent">
      <pop-table :tableCol="col[activeTab]" :tableData="tableData"></pop-table>
    </box>
  </div>
</template>

<script>
  import box from '../../../../components/box/index'
  import popTable from '../../../../components/popTable/popTable'
  import request from '@/api/request'

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
        col: [
          [
            {
              name: '50人以下'
            },
            {
              name: '50-99人'
            },
            {
              name: '100-499人'
            },
            {
              name: '500-999人'
            },
            {
              name: '1千-5千人'
            },
            {
              name: '5千-1万人'
            },
            {
              name: '1万人以上'
            }
          ],
          []
        ],
        tableData: [
          {
            '50人以下': 0,
            '50-99人': 1,
            '100-499人': 2,
            '500-999人': 3,
            '1千-5千人': 1,
            '5千-1万人': 3,
            '1万人以上': 2,
          },
          {
            '50人以下': 0,
            '50-99人': 1,
            '100-499人': 2,
            '500-999人': 3,
            '1千-5千人': 1,
            '5千-1万人': 3,
            '1万人以上': 2,
          },
          {
            '50人以下': 0,
            '50-99人': 1,
            '100-499人': 2,
            '500-999人': 3,
            '1千-5千人': 1,
            '5千-1万人': 3,
            '1万人以上': 2,
          },
          {
            '50人以下': 0,
            '50-99人': 1,
            '100-499人': 2,
            '500-999人': 3,
            '1千-5千人': 1,
            '5千-1万人': 3,
            '1万人以上': 2,
          },
          {
            '50人以下': 0,
            '50-99人': 1,
            '100-499人': 2,
            '500-999人': 3,
            '1千-5千人': 1,
            '5千-1万人': 3,
            '1万人以上': 2,
          }
        ]
      }
    },
    components: {
      box,
      popTable
    },
    methods: {
      getData (code) {
        request.normalPort({
          codeArray: code
        }).then(res => {
          console.log(res)
        })
      }
    },
    mounted () {
      this.getData()
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
