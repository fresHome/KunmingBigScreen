export function imgLoad (target) {
  if (typeof (target) == 'string') {
    return `./static/images/${ target }`
  } else if (typeof (target) == 'object') {
    Object.keys(target).map(key => {
      if (key === 'img') {
        target.backgroundImage = `url(./static/image/${ target.img })`
        target.backgroundSize = `100% 100%`
      }
    })
    console.log(target)
    return target
  } else {
    return {}
  }
}
