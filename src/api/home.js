// 获取首页相关数据
import { http } from '@/utils/request'

// 获取轮播图
export function getHomeBanner() {
  return http({
    method: 'GET',
    url: '/banner?type=0'
  })
}

// 获取推荐歌单
export function getRecommendSong(num) {
  return http({
    method: 'GET',
    url: `/personalized?limit=${num}`
  })
}
