<template>
  <div class="labelList">
    <ul>
      <li v-for="(item,index) in list" :key="index">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'labelList',
    data () {
      return {
        list: [
          {
            name: '规上企业'
          },
          {
            name: '国家高新技术企业'
          },
          {
            name: '上市公司'
          },
          {
            name: '省级及以上研发中心'
          }
        ]
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .labelList {
    width: 3rem;

    ul {
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;

      li {
        width: 1.2rem;
        height: 0.205rem;
        line-height: 0.205rem;
        font-size: 0.125rem;
        color: #32F0FE;
        margin-bottom: 0.145rem;
        border: 0.005rem solid #32F0FE;
        border-radius: 1.025rem;
        text-align: center;
      }
    }
  }
</style>
