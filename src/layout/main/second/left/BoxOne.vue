<template>
  <div class="pageTwoBoxOne">
    <box title="基本信息">
      <div class="virtual">
        <div>
          <div :style="{img:'yuanjiaojuxing.png'} | imgLoad()" id="rec1">
            成立时间
            {{ createTime }}
          </div>
          <div :style="{img:'yuanjiaojuxing1.png'} | imgLoad()" id="rec2">
            区域面积
            {{ area }}
          </div>
        </div>
        <div>
          <div :style="{img:'yuanjiaojuxing2.png'} | imgLoad()" id="rec3">
            工业用地面积
            {{ area1 }}
          </div>
          <div :style="{img:'yuanjiaojuxing3.png'} | imgLoad()" id="rec4">
            商业用地面积
            {{ area2 }}
          </div>
        </div>
        <div :style="{img:'yuanjiaojuxing3.png'} | imgLoad()" id="rec5">
          片区简介
          {{ brief }}
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
      createTime: '',
      area: '',
      area1: '',
      area2: '',
      brief: ''
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
        res.data.data.resultList.forEach(item => {
          item.code == "Xm00005" && (this.createTime = item.value)
          item.code == "Xm00006" && (this.area = item.value)
          item.code == "Xm00007" && (this.area1 = item.value)
          item.code == "Xm00008" && (this.area2 = item.value)
          item.code == "Xm00009" && (this.brief = item.value)
        })
      })
    }
  },
  mounted () {
    this.getData(['Xm00005', 'Xm00006', 'Xm00007', 'Xm00008', 'Xm00009'])
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
