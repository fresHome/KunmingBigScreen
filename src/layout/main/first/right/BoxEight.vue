<template>
  <div class="BoxEight">
    <box title="知识产权分布" line-with="short">
      <sort :col="col" :data="sortData"></sort>
    </box>
  </div>
</template>

<script>
  import box from '../../../../components/box/index'
  import request from '@/api/request'
  import sort from '../../../../components/sort/sort'

  export default {
    name: 'BoxEight',
    data () {
      return {
        sortData: [],
        col: []
      }
    },
    components: {
      box,
      sort
    },
    methods: {
      getData () {
        request.normalPort({
          codeArray: ['Xm00038']
        }).then(res => {
          let data = res.data.data.resultList
          this.sortData = data
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
          animation-delay: 0.2s; //1秒30
        }

        &.delay1 {
          animation-delay: 0.4s; //1秒30
        }

        &.delay2 {
          animation-delay: 0.6s; //1秒30
        }

        &.delay3 {
          animation-delay: 0.8s; //1秒30
        }

        &.delay4 {
          animation-delay: 1s; //1秒30
        }

        &.delay5 {
          animation-delay: 1.2s; //1秒30
        }
      }
    }
  }
</style>
