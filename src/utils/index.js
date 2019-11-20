/* eslint-disable */
import scale from './rem'

export function convertRem (rem) {
  return rem * scale
}

export function cleanArray (actual) {
  const newArray = []
  for (let i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i])
    }
  }
  return newArray
}

export function deepClone (source, arrive) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'shallowClone')
  }
  const targetObj = arrive || source.constructor === Array ? [] : {}
  for (const keys in source) {
    if (source.hasOwnProperty(keys)) {
      if (source[keys] && typeof source[keys] === 'object') {
        targetObj[keys] = source[keys].constructor === Array ? [] : {}
        targetObj[keys] = deepClone(source[keys])
      } else {
        targetObj[keys] = source[keys]
      }
    }
  }
  return targetObj
}

export function removeObjWithArr (_arr, _obj) {
  var length = _arr.length
  for (var i = 0; i < length; i++) {
    if (_arr[i] == _obj) {
      if (i == 0) {
        _arr.shift() //删除并返回数组的第一个元素
        return
      } else if (i == length - 1) {
        _arr.pop()  //删除并返回数组的最后一个元素
        return
      } else {
        _arr.splice(i, 1) //删除下标为i的元素
        return
      }
    }
  }
}

export function clearJson (json) {
  if (!json || Object.keys(json).length < 1) {
    return
  }
  for (const key in json) {
    json[key] = ''
  }
  return json
}

export function transformToTree (sNodes, setting) {
  let set = {
    children: 'children',
    idKey: 'id',
    pIdKey: 'pId',
    label: 'name'
  }
  if (setting) {
    set = setting
  }
  var i, l,
      key       = set.idKey,
      parentKey = set.pIdKey,
      childKey  = set.children
  if (!key || key == '' || !sNodes) return []
  
  if (Array.isArray(sNodes)) {
    var r = []
    var tmpMap = []
    for (i = 0, l = sNodes.length; i < l; i++) {
      tmpMap[sNodes[i][key]] = sNodes[i]
    }
    for (i = 0, l = sNodes.length; i < l; i++) {
      if (tmpMap[sNodes[i][parentKey]] && sNodes[i][key] != sNodes[i][parentKey]) {
        if (!tmpMap[sNodes[i][parentKey]][childKey]) {
          tmpMap[sNodes[i][parentKey]][childKey] = []
        }
        tmpMap[sNodes[i][parentKey]][childKey].push(sNodes[i])
      } else {
        r.push(sNodes[i])
      }
    }
    return r
  } else {
    return [sNodes]
  }
}

export function getUniqueSet (setA, setB) {
  var temp = {};
  for (var i = 0, len = setA.length; i < len; i++) {
    temp[setA[i]] = 0;
  }
  for (var j = 0, len = setB.length; j < len; j++) {
    if (typeof temp[setB[j]] === 'undefined') {
      temp[setB[j]] = 0;
    } else {
      temp[setB[j]]++;
    }
  }
  //output
  var ret = [];
  for (var item in temp) {
    !temp[item] && ret.push(item);
  }
  return ret;
}
