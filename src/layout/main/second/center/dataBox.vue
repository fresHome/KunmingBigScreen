<template>
  <div class="dataBox" :style="{img:'dataBox-bg.png'}|imgLoad()">
    <p class="name">{{ name }}</p>
    <div class="item">
      <div class="barValue">
        <p class="title">营收总额</p>
        <p class="value"><span>{{ ysze }}</span>万</p>
        <p class="bar green"></p>
      </div>
    </div>
    <div class="item">
      <div class="barValue">
        <p class="title">营收总额</p>
        <p class="value"><span>{{ ysze }}</span>万</p>
        <p class="bar red"></p>
      </div>
    </div>
    <div class="item">
      <div class="textValue">
        <span>{{ qysl }}</span>
        <div>
          <p>企业数量</p>
          <p>家</p>
        </div>
      </div>
      <div class="textValue">
        <span>{{ bgmj }}</span>
        <div>
          <p>办公面积</p>
          <p>万m<sup>3</sup></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import request from '../../../../api/request'

  export default {
    name: 'dataBox',
    data () {
      return {
        name: '',
        ysze: 0,
        ssze: 0,
        qysl: 0,
        bgmj: 0
      }
    },
    methods: {
      getData () {
        request.normalPort({
          areaName: '西片区',
          codeArray: ['Xm00010', 'Xm00011', 'Xm00012', 'Xm00013', 'Xm00014']
        }).then(res => {
          let data = res.data.data.resultList
          this.name = data[0].value
          this.ysze = data[1].value
          this.ssze = data[2].value
          this.qysl = data[3].value
          this.bgmj = data[4].value
        })
      }
    },
    mounted () {
      this.getData()
    }
  }
</script>

<style lang="scss" scoped>
  .dataBox {
    width: 3.355rem;
    height: 3.76rem;
    box-sizing: border-box;
    padding: 0.4rem 0.3rem;

    .name {
      font: bold 0.15rem/0.2rem NotoSansHans-Bold;
      color: #fff;
      border-bottom: 0.02rem solid #32F0FE;
      padding-bottom: 0.08rem;
      margin-bottom: 0.27rem;
    }

    .item {
      color: #fff;
      margin-bottom: 0.355rem;
      display: flex;
      justify-content: flex-start;

      span {
        font: bold 0.4rem/0.3rem NotoSansHans-Bold;
      }

      p {
        font-size: 0.125rem;
      }

      .title {
        margin-bottom: 0.09rem;
      }

      .textValue {
        width: 50%;
        height: 0.3rem;
        display: flex;
        justify-content: flex-start;
      }

      .barValue {
        width: 100%;

        .bar {
          height: 0.07rem;
          margin-top: 0.07rem;
        }

        .green {
          background: #2DE9D1;
        }

        .red {
          background: #D7087E;
        }
      }
    }
  }
</style>
