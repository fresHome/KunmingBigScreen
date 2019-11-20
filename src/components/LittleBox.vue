<template>
  <div class="LittleBox">

    <div class="line">
      <ol class="title">
        <li v-for="item in data" :key="item.key">{{ item.name }}</li>
      </ol>
      <div class="content">
        <div v-for="item in data" :key="item.key">{{ item.number }}</div>
      </div>
    </div>

    <div class="blueSquare" :style="{img:'blueSquare.png'}|imgLoad()">西片区</div>

  </div>
</template>

<script>
export default {
  name: 'LittleBox',
  data () {
    return {
      data: [
        {
          name: '企业总数',
          number: '320个'
        },
        {
          name: '企业总数',
          number: '320个'
        },
        {
          name: '企业总数',
          number: '320个'
        },
        {
          name: '企业总数',
          number: '320个'
        }
      ]
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
  .LittleBox {
    box-sizing: border-box;
    width: 1.605rem;
    height: 1.13rem;
    background-color: #001451;
    border: 0.005rem solid #003DF9;
    position: relative;
    padding: 0.14rem 0.125rem 0.365rem 0.115rem;
    display: flex;
    flex-direction: column;

    .line {
      display: flex;
      flex: 1;
      justify-content: space-between;
      line-height: 0.2575rem;

      .title {
        font: 0.1rem/0.15rem NotoSansHans-Regular;
        color: #35D2B2;
        margin-left: 0.245rem;

        li {
          list-style-type: circle;
        }
      }

      .content {
        font: 0.1rem/0.15rem bold NotoSansHans-Bold;
        color: #FFFFFF;
        margin-right: 0.125rem;
      }
    }

    .blueSquare {
      position: absolute;
      top: 0.825rem;
      left: -0.4rem;
      width: 0.755rem;
      height: 0.23rem;
      font: 0.15rem/0.23rem NotoSansHans-Regular;
      color: #fff;
      text-align: center;
    }
  }

  .LittleBox::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0.5385rem;
    height: 0.005rem;
    background-color: #003DF9;
    transform: rotate(121deg);
    transform-origin: 0 50%;
  }
</style>
