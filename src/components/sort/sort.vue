<template>
  <div class="sort">
    <table cellspacing="0">
      <tr>
        <th></th>
        <td></td>
        <th v-for="(item,index) in col" :key="index">
          {{ item.name }}
        </th>
      </tr>
      <tr v-for="(item,sindex) in sortData" :key="sindex">
        <td>
          <i v-if="sindex==0" :style="{img:'sort-'+sindex+'.png'}|imgLoad()"></i>
          <i v-if="sindex==1" :style="{img:'sort-'+sindex+'.png'}|imgLoad()"></i>
          <i v-if="sindex==2" :style="{img:'sort-'+sindex+'.png'}|imgLoad()"></i>
        </td>
        <td>{{ sindex+1 }}</td>
        <td v-for="(co,cindex) in col" :key="cindex">
          {{ item[co.key]}}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'sort',
    data () {
      return {}
    },
    props: ['col', 'sortData'],
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .sort {
    color: #B5BDDB;
    font-size: 0.0075rem;
    width: 100%;

    table {
      width: 100%;

      tr {
        height: 0.2rem;
        line-height: 0.2rem;
      }

      td, th {
        text-align: center;
        border-bottom: 0.005rem solid #1C2859;

        &:first-child {
           width: 0.12rem;
           min-width: 0.12rem;

           i {
             display: inline-block;
             width: 0.11rem;
             height: 0.115rem;
             float: left;
           }
         }
        &:nth-child(2){
          width: 0.12rem;
          min-width: 0.12rem;
        }
      }
    }
  }
</style>
