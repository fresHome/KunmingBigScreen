<template>
  <div class="index">
    <BoxFive></BoxFive>
    <BoxSix></BoxSix>
    <BoxSeven></BoxSeven>
    <BoxEight></BoxEight>
  </div>
</template>

<script>
  import BoxFive from './BoxFive'
  import BoxSix from './BoxSix'
  import BoxSeven from './BoxSeven'
  import BoxEight from './BoxEight'

  export default {
    name: 'index',
    data () {
      return {
        option5: {},
        option6: {},
        option7: {},
        option8: {}
      }
    },
    components: {
      BoxSeven,
      BoxEight,
      BoxSix,
      BoxFive
    },
    methods: {},
    mounted () {

    }
  }
</script>

<style lang="scss" scoped>
  .index {
    margin-top: 0.165rem;

    .pie3 {
      display: flex;
      justify-content: flex-start;

      .sCharts {
        width: 33% !important;
      }
    }

    .chart {
      height: 2.2rem;
    }

    .circlebox {
      width: 100%;
      height: 2.4rem;
      overflow: hidden;

      ul {
        display: flex;
        justify-content: center;

        li {
          color: #fff;
          font-size: 0.2rem;
          padding: 0.05rem;

          span {
            font-size: 0.14rem;
            color: #98BEF1;
            margin-right: 0.15rem;
          }

          i {
            font-size: 0.14rem;
            font-style: normal;
          }
        }
      }
    }
  }
</style>
