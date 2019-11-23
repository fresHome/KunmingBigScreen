<template>
  <div class="list">
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <p>{{ item.name }}</p>
        <div class="value" :style="{img:'list-bg.png'} | imgLoad()">
          <numberUp class="number" :endVal="item.value"></numberUp>
          <span>{{ item.unit }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import numberUp from '../../../public/number/numberUp'

export default {
  name: 'list',
  data () {
    return {
      list: [
        {
          name: '企业数',
          value: 43759,
          unit: '家'
        },
        {
          name: '本年累计营收',
          value: 1260.19,
          unit: '亿元'
        },
        {
          name: '本年累计税收',
          value: 165.33,
          unit: '亿元'
        },
        {
          name: '人才总数',
          value: 31.58,
          unit: '万人'
        }
      ]
    }
  },
  components: { numberUp },
  methods: {}
}
</script>

<style lang="scss" scoped>
  .list {
    margin-top: 0.14rem;

    ul {
      display: flex;
      justify-content: space-around;
      padding: 0 0.4rem;

      li {
        text-align: center;

        p {
          color: #3CA8EB;
          font-size: 0.18rem;
          line-height: 0.18rem;
          margin-bottom: 0.2rem;
        }

        .value {
          width: 2.04rem;
          height: 0.47rem;
          color: #FFff;
          font-size: 0.32rem;

          .number {
            display: inline-block;
          }

          span {
            margin-left: 0.05rem;
            font-size: 0.14rem;
          }
        }
      }
    }
  }
</style>
