<template>
  <div class="BoxFive">
    <box title="发展成果" line-with="short">
    </box>
  </div>
</template>

<script>
  import box from '../../../../components/box/index'
  import request from '@/api/request'

  export default {
    name: 'BoxFive',
    data () {
      return {}
    },
    methods: {
      getData () {
        request.normalPort({
          codeArray: ['Xm00023']
        }).then(res => {
          console.log(res)
        })
      }
    },
    mounted () {
      this.getData()
    },
    components: {
      box
    }
  }
</script>

<style lang="scss" scoped>
  .BoxFive {

  }
</style>
