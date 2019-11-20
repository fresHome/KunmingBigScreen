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
                :stitle="item.title"></subPie>
      </div>
    </box>
  </div>
</template>

<script>
  import box from '../../public/box'
  import subPie from '../../public/charts/self/subPie'

  export default {
    name: 'BoxEight',
    data () {
      return {
        data: [
          {
            title: '网站',
            value: 154,
            percent: 25
          },
          {
            title: '商标',
            value: 26,
            percent: 25
          },
          {
            title: '发明专利',
            value: 133,
            percent: 25
          },
          {
            title: '著作权',
            value: 55,
            percent: 25
          },
          {
            title: '软件著作权',
            value: 45,
            percent: 25
          },
          {
            title: '证书',
            value: 109,
            percent: 25
          }
        ]
      }
    },
    props: ['delayShow'],
    components: {
      box,
      subPie
    },
    methods: {
      getData () {

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
        &.delay0{
          animation-delay: 1s;
        }
        &.delay1{
          animation-delay: 1.2s;
        }
        &.delay2{
          animation-delay: 1.4s;
        }
        &.delay3{
          animation-delay: 1.6s;
        }
        &.delay4{
          animation-delay: 1.8s;
        }
        &.delay5{
          animation-delay: 2s;
        }
      }
    }
  }
</style>
