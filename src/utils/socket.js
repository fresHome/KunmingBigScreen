let ws = null

function initWebsoket () {
  ws = new WebSocket("ws://121.40.133.115:8083/websocket/1")
  ws.onopen = function (evt) {
    console.log(evt)
  }
  
  ws.onmessage = function (evt) {
    console.log(evt)
  }
  
  ws.onclose = function (evt) {
    console.log(evt)
  }
}

initWebsoket()
export default {}
