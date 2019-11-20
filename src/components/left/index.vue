<template>
  <div class="leftBox">
    <BoxOne :delayShow="delayShow"></BoxOne>
    <BoxTwo :delayShow="delayShow"></BoxTwo>
    <BoxThree :delayShow="delayShow"></BoxThree>
    <BoxFour :delayShow="delayShow"></BoxFour>
  </div>
</template>

<script>
  import BoxFour from '../box/BoxFour'
  import BoxThree from '../box/BoxThree'
  import BoxTwo from '../box/BoxTwo'
  import BoxOne from '../box/BoxOne'

<<<<<<< HEAD
  export default {
    name: 'leftBox',
    data () {
      return {}
    },
    props: ['delayShow'],
    components: {
      BoxThree, BoxTwo, BoxOne, BoxFour
=======
export default {
  name: 'leftBox',
  data () {
    return {
      list: ['ys', 'ss'],
      number: 0,
      interval: null,
      activeJJqs: 'ys',
      option4:{}
    }
  },
  props: ['delayShow'],
  components: {
    box,
    chart, BoxThree, BoxTwo, BoxOne
  },
  methods: {
    changeJJqs (type) {
      this.activeJJqs = type
      let newOption = deepClone(this.option1)

      request.normalPort({
        //        codeArray: this.option1.xAxis.data
        codeArray: ['Xh00005', 'Xh00006', 'Xh00007', 'Xh00008', 'Xh00009', 'Xh00010', 'Xh00011', 'Xh00012', 'Xh00013', 'Xh00014', 'Xh00015', 'Xh00016', 'Xh00017', 'Xh00018', 'Xh00019', 'Xh00020', 'Xh00021', 'Xh00022', 'Xh00023', 'Xh00024', 'Xh00025', 'Xh00026', 'Xh00027', 'Xh00028']
      }).then(res => {
        let arr1 = []
        let arr2 = []
        res.data.data.resultList.map((item, index, arry) => {
          if (index < 12) {
            arr1.push(item.value)
          } else {
            arr2.push(item.value)
          }
        })
        newOption.series[0].data = arr1
        newOption.series[1].data = arr2
        this.option1 = newOption
      })
>>>>>>> 71651aea73e64cb38c6462bca751c62f1b2918ac
    },
    methods: {},
    mounted () {
    }
  }
</script>

<style lang="scss" scoped>
  .leftBox {
    /*margin-left: 0.285rem;*/
    margin-top: 0.165rem;
  }
</style>
