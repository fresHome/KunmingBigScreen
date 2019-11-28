<template>
  <div class="pageTwoBoxOne">
    <box title="基本信息" :active-tab="activeTab" :tab-content="tabContent">
      <div class="virtual">
        <div>
          <div :style="{img:'yuanjiaojuxing.png'} | imgLoad()" id="rec1">成立时间</div>
          <div :style="{img:'yuanjiaojuxing1.png'} | imgLoad()" id="rec2">区域面积</div>
        </div>
        <div>
          <div :style="{img:'yuanjiaojuxing2.png'} | imgLoad()" id="rec3">工业用地面积</div>
          <div :style="{img:'yuanjiaojuxing3.png'} | imgLoad()" id="rec4">商业用地面积</div>
        </div>
        <div :style="{img:'yuanjiaojuxing3.png'} | imgLoad()" id="rec5">片区简介</div>
      </div>

    </box>
  </div>
</template>

<script>
import box from '../../../public/box/index'
import chart from '../../../public/charts/echarts/chart'
import { deepClone, convertRem } from '../../../utils'
import request from '@/api/request'

export default {
  name: 'BoxOne',
  data () {
    return {}
  },
  props: ['delayShow'],
  methods: {},
  mounted () {
  },
  beforeDestroy () {
  },
  components: {
    box
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
