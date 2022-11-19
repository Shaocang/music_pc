// 格式化播放量
export function formatPlayCount(num) {
  if (typeof num !== 'number') return
  if (num > 99999999) {
    return (num / 100000000).toFixed(0) + '亿'
  } else if (num > 9999) {
    return (num / 10000).toFixed(0) + '万'
  } else {
    return num
  }
}
