<template>
  <div class="popTable">
    <table cellspacing="0">
      <tr v-for="(item,sindex) in tableData" :key="sindex">
        <td v-for="(co,cindex) in tableCol" :key="cindex">
          <span v-if="cindex>0" :class="'circle'+item[co.key]"></span>
          <span v-else>
            {{ item[co.key] }}
          </span>
        </td>
      </tr>
      <tr>
        <td v-for="(item,index) in tableCol" :key="index">
          {{ item.name }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'popTable',
    data () {
      return {}
    },
    props: ['tableCol', 'tableData'],
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .popTable {
    color: #B5BDDB;
    font-size: 0.075rem;

    td {
      text-align: center;
      &:first-child{
        span{
          width: 0.6rem;
          background-color: transparent;
          text-align: left;
        }
      }
      span {
        display: inline-block;
        background-color: #D7087E;
        border-radius: 50%;

        &.circle0 {
          width: 0.11rem;
          height: 0.11rem;
        }

        &.circle1 {
          width: 0.18rem;
          height: 0.18rem;
        }

        &.circle2 {
          width: 0.24rem;
          height: 0.24rem;
        }

        &.circle3 {
          width: 0.285rem;
          height: 0.285rem;
        }
      }
    }
  }
</style>
