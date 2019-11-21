<template>
  <div class="BoxFine">
    <box title="发展成果" line-with="short">
      <!--      <chart ref="chart5" :skey="'jjqs5'" :option="option" v-if="delayShow"></chart>-->
      <div :style="{img:'blueBox2.png',left:item.left,top:item.top} | imgLoad()" class="blueBox" v-for="item in boxData" :key="item.id">
        <div class="name">上市公司</div>
        <div class="number">10家</div>
      </div>

      <div :style="{img:'lightBlueBox.png',left:item.left,top:item.top} | imgLoad()" class="lightblueBox" v-for="item in lightBoxData" :key="item.id"></div>
    </box>
  </div>
</template>

<script>
import box from '../../public/box'
import request from '@/api/request'

export default {
  name: 'BoxFine',
  data () {
    return {
      boxData: [
        {
          name: '上市公司',
          numbaer: '10家',
          top: '0.2rem',
          left: '0.615rem'
        },
        {
          name: '上市公司',
          numbaer: '10家',
          top: '0.2rem',
          left: '2.195rem'
        },
        {
          name: '上市公司',
          numbaer: '10家',
          top: '0.635rem',
          left: '0.93rem'
        },
        {
          name: '上市公司',
          numbaer: '10家',
          top: '1.055rem',
          left: '0.385rem'
        },
        {
          name: '上市公司',
          numbaer: '10家',
          top: '1.055rem',
          left: '2.19rem'
        }
      ],
      lightBoxData: [
        {
          top: '0.71rem',
          left: '0.235rem'
        },
        {
          top: '0.61rem',
          left: '2.78rem'
        },
        {
          top: '1.31rem',
          left: '1.91rem'
        }
      ]
    }
  },
  props: ['delayShow'],
  methods: {
    changeJJqs () {
      request.normalPort({
        codeArray: ['Xh00054']
      }).then(res => {
        let arr = []
        res.data.data.resultList.map((item, index, arry) => {
          arr.push({ number: item.value })
        })
      }).catch(err => {
      })
    }
  },
  mounted () {
  },
  components: {
    box
  }
}
</script>

<style lang="scss" scoped>
  .BoxFine {
    .blueBox {
      display: flex;
      align-items: center;
      width: 1.12rem;
      height: 0.27rem;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      animation: opacityChange 5s 3.8s forwards;

      .name {
        font: 0.1rem NotoSansHans-Regular;
        color: #A5ADCB;
        margin-left: 0.155rem;
      }

      .number {
        font: 0.1rem bold NotoSansHans-Bold;
        color: #fff;
        margin-left: 0.175rem;
      }
    }

    .lightblueBox {
      display: flex;
      align-items: center;
      width: 0.205rem;
      height: 0.055rem;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  @keyframes opacityChange {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

</style>
