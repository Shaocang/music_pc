// 歌曲相关api
import { http } from '@/utils/request'

// 获取歌单详情
export function getSongDetail(id) {
  return http({
    method: 'GET',
    url: `/playlist/detail?id=${id}`
  })
}

// 获取首页歌单歌曲列表
export function getSongList(id, offset) {
  return http({
    method: 'GET',
    url: `/playlist/track/all?id=24381616&limit=10&offset=1`
  })
}

// 获取音乐url
export function getSongUrl(id, level = 'standard') {
  return http({
    method: 'GET',
    url: `/song/url/v1?id=${id}&level=${level}`
  })
}

// 获取歌曲详情
export function getSingleSong(id) {
  return http({
    method: 'GET',
    url: `/song/detail?ids=${id}`
  })
}
