<template>
  <div class="BoxFine">
    <box title="发展成果">
      <!--      <chart ref="chart5" :skey="'jjqs5'" :option="option" v-if="delayShow"></chart>-->
      <div :style="{img:'blueBox2.png',left:item.left,top:item.top} | imgLoad()" class="blueBox" v-for="item in boxData" :key="item.id">
        <div class="name">{{ item.name }}</div>
        <div class="number">{{ item.number }}家</div>
      </div>
      <div :style="{img:'lightBlueBox.png',left:item.left,top:item.top} | imgLoad()" class="lightblueBox" v-for="item in lightBoxData" :key="item.id"></div>
    </box>
  </div>
</template>

<script>
import box from '../../../../components/box/index'
import request from '@/api/request'

export default {
  name: 'BoxFine',
  data () {
    return {
      boxData: [
        {
          name: '',
          number: '',
          top: '0.2rem',
          left: '0.615rem'
        },
        {
          name: '',
          number: '',
          top: '0.2rem',
          left: '2.195rem'
        },
        {
          name: '',
          number: '',
          top: '0.635rem',
          left: '0.93rem'
        },
        {
          name: '',
          number: '',
          top: '1.055rem',
          left: '0.385rem'
        },
        {
          name: '',
          number: '',
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
    getData () {
      request.normalPort({
        codeArray: ['Xh00054']
      }).then(res => {
        let data = JSON.parse(res.data.data.resultList[0].value)
        data.map((item, index) => {
          this.boxData[index].name = item.x1
          this.boxData[index].number = item.y1
        })
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
      /*background-color: rgba(48, 150, 195, 0.3);*/
      animation: opacityChange 1.667s 1.2667s forwards;

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

    .blueBox {
      opacity: 0;
      animation: normalFlow 0.5s 1.27s forwards;
    }

    @keyframes normalFlow {
      0% {
        transform: scaleX(0);
        opacity: 0;
      }
      33% {
        opacity: 1;
      }
      100% {
        transform: scaleX(1);
        opacity: 1;
      }
    }

    .blueBox:first-child {
      opacity: 0;
      animation: opacityChange 0.2s 1.27s forwards;
    }

    .blueBox:first-child {
      opacity: 0;
      animation: opacityChange 0.2s 1.29s forwards;
    }

    .blueBox:first-child {
      opacity: 0;
      animation: opacityChange 0.2s 1.31s forwards;
    }

    .blueBox:first-child {
      opacity: 0;
      animation: opacityChange 0.2s 1.33s forwards;
    }

    .blueBox:first-child {
      opacity: 0;
      animation: opacityChange 0.1s 1.31s forwards;
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
