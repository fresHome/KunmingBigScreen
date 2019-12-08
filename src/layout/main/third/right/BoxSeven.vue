<template>
  <div class="thirdBoxSeven">
    <box title="预警信息统计" line-with="short">
      <div class="innerBox">
        <div v-for="(item,index) in list" :key="item.id" class="item">
          <div class="img" :style="{img:`warning${index+1}.png`} | imgLoad()"></div>
          <div class="right">
            <div class="text">{{ item.value }}</div>
            <div class="value">{{ item.codeRemark }}</div>
          </div>
        </div>
      </div>
    </box>
  </div>
</template>

<script>
import box from '../../../../components/box/index'
import request from '@/api/request'

export default {
  name: 'thirdBoxSeven',
  data () {
    return {
      list: []
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
        this.list = res.data.data.resultList
      })
    }
  },
  mounted () {
    this.getData(['Xs00033', 'Xs00034', 'Xs00035', 'Xs00036'])
  }
}
</script>

<style lang="scss" scoped>
  .thirdBoxSeven {
    .innerBox {
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      padding: 0.1rem 0.2rem;

      .item {
        /*width: 50%;*/
        display: flex;

        .img {
          width: 0.495rem;
          height: 0.495rem;
        }

        .right {
          margin-left: 0.09rem;

          .text {
            font-size: 0.2rem;
            color: #FF01CF;
            margin-bottom: 0.085rem;
          }

          .value {
            font-size: 0.075rem;
            color: #B5BDDB;
          }
        }
      }

      .item:nth-child(2n+1) {
        margin-right: 0.8rem;
      }


    }
  }
</style>
