//引入接口配置
import './api.config'
import axios from 'axios'

export default {
  normalPort: data => axios.post('/kib/big/screen/getbigscreenindexdatachartlistresult', data),      //发表评论
  buildPort: data => axios.post('/kib/big/screen/building/getbigscreenbuildingchartlistresult', data)       //获取楼宇数据
}
