<template>
  <div class="thirdBoxEight">
    <box title="行政处罚信息" line-with="short">
      <div v-for="item in list" :key="item.id" class="line">
        <div class="left">
          <div class="img" :style="{img:item.y1==1?'sound.png':'redWarning.png'} | imgLoad()"></div>
          <div class="text">{{ item.y2 }}</div>
        </div>
        <div class="time">{{ item.y3 }}</div>
      </div>
    </box>
  </div>
</template>

<script>
  import box from '../../../../components/box/index'
  import request from '@/api/request'

  export default {
    name: 'thirdBoxEight',
    data () {
      return {
        list:[]
      }
    },
    components: {
      box
    },
    methods: {
      getData (code) {
        request.normalPort({
          codeArray: code
        }).then(res => {
          this.list=JSON.parse(res.data.data.resultList[0].value)
          console.log(JSON.parse(res.data.data.resultList[0].value));
        })
      }
    },
    mounted () {
      this.getData(['Xs00037'])
    }
  }
</script>

<style lang="scss">
  .thirdBoxEight {
    .content {
      flex-wrap:wrap;
      flex-direction:column;
      .line {
        font: 0.075rem NotoSansHans-Regular;
        color: #FAFBFF;
        display: flex;
        justify-content: space-between;
        width: 3.36rem;
        height:0.215rem;
        line-height:0.215rem;
        margin-bottom:0.045rem;
        background-color:#131F4A;

        .left{
          display:flex;
          align-items:center;
          .img {
            width:0.08rem;
            height:0.08rem;
            margin-left:0.135rem;
            margin-right:0.1rem;
          }
          .text {

          }
        }
        .time {
          text-align:right;
          padding-right:0.175rem;
        }
      }
    }
  }
</style>
