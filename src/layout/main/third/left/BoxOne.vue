<template>
  <div class="pageTwoBoxOne">
    <box title="企业介绍">
      <div class="virtual">
        <div>
          <div :style="{img:'yuanjiaojuxing.png'} | imgLoad()" id="rec1">
            {{ data.filter(item=>item.code=='Xs00008').length>0?data.filter(item=>item.code=='Xs00008')[0].codeRemark:'' }}
            {{ data.filter(item=>item.code=='Xs00008').length>0?data.filter(item=>item.code=='Xs00008')[0].value:'' }}
          </div>
          <div :style="{img:'yuanjiaojuxing1.png'} | imgLoad()" id="rec2">
            {{ data.filter(item=>item.code=='Xs00009').length>0?data.filter(item=>item.code=='Xs00009')[0].codeRemark:'' }}
            {{ data.filter(item=>item.code=='Xs00009').length>0?data.filter(item=>item.code=='Xs00009')[0].value:'' }}
          </div>
        </div>
        <div>
          <div :style="{img:'yuanjiaojuxing2.png'} | imgLoad()" id="rec3">
            {{ data.filter(item=>item.code=='Xs00010').length>0?data.filter(item=>item.code=='Xs00010')[0].codeRemark:'' }}
            {{ data.filter(item=>item.code=='Xs00010').length>0?data.filter(item=>item.code=='Xs00010')[0].value:'' }}
          </div>
          <div :style="{img:'yuanjiaojuxing3.png'} | imgLoad()" id="rec4">
            {{ data.filter(item=>item.code=='Xs00011').length>0?data.filter(item=>item.code=='Xs00011')[0].codeRemark:'' }}
            {{ data.filter(item=>item.code=='Xs00011').length>0?data.filter(item=>item.code=='Xs00011')[0].value:'' }}
          </div>
        </div>
        <div :style="{img:'yuanjiaojuxing3.png'} | imgLoad()" id="rec5">
          {{ data.filter(item=>item.code=='Xs00012').length>0?data.filter(item=>item.code=='Xs00012')[0].codeRemark:'' }}
          {{ data.filter(item=>item.code=='Xs00012').length>0?data.filter(item=>item.code=='Xs00012')[0].value:'' }}
        </div>
      </div>

    </box>
  </div>
</template>

<script>
import box from '../../../../components/box/index'
import request from '@/api/request'

export default {
  name: 'BoxOne',
  data () {
    return {
      data: []
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
        this.data = res.data.data.resultList;
      })
    }
  },
  mounted () {
    this.getData(['Xs00008', 'Xs00009', 'Xs00010', 'Xs00011', 'Xs00012'])
  }
}
</script>

<style lang="scss" scoped>
  .pageTwoBoxOne {
    .virtual {
      font: 0.1rem/0.175rem NotoSansHans-Regular;
      color: #B5BDDB;
      text-align: left;

      > div {
        width: 3.36rem;
        display: flex;
        margin-top: 0.1rem;
      }

      > div:not(:last-child) {
        height: 0.175rem;
      }

      > div:last-child {
        height: 0.62rem;
      }

      [id^=rec] {
        background-color: rgba(53, 68, 113, 1);
        padding-left: 0.115rem;
      }

      #rec1, #rec2, #rec3, #rec4 {
        height: 0.175rem;
        width: 1.555rem;
      }

      #rec1, #rec3 {
        margin-right: 0.25rem;
      }

      #rec5 {
        box-sizing: border-box;
      }
    }
  }
</style>
