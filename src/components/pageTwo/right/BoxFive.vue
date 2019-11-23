<template>
  <div class="BoxFive">
    <box title="发展成果" line-with="short">
    </box>
  </div>
</template>

<script>
  import box from '../../../public/box/index'
  import request from '@/api/request'

  export default {
    name: 'BoxFive',
    data () {
      return {
      }
    },
    methods: {
      changeJJqs () {
        request.normalPort({
          codeArray: ['Xh00054']
        }).then(res => {
          let arr = []
          res.data.data.resultList.map((item, index, arry) => {
            arr.push({ number: item.value })
          })
        }).catch(err => {
        })
      }
    },
    mounted () {
    },
    components: {
      box
    }
  }
</script>

<style lang="scss" scoped>
  .BoxFive {
    .blueBox {
      display: flex;
      align-items: center;
      width: 1.12rem;
      height: 0.27rem;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      animation: opacityChange 1.667s 1.2667s forwards;

      .name {
        font: 0.1rem NotoSansHans-Regular;
        color: #A5ADCB;
        margin-left: 0.155rem;
      }

      .number {
        font: 0.1rem bold NotoSansHans-Bold;
        color: #fff;
        margin-left: 0.175rem;
      }
    }

    .lightblueBox {
      display: flex;
      align-items: center;
      width: 0.205rem;
      height: 0.055rem;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  @keyframes opacityChange {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

</style>
