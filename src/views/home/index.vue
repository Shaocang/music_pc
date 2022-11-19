<template>
  <HomeSwiper :banners="data.banners" />
  <RecommendSong :recommend="data.recommend" />
</template>

<script setup>
import { reactive, onBeforeMount } from 'vue'
import { getHomeBanner, getRecommendSong } from '@/api/home'
import HomeSwiper from '@/views/home/components/HomeSwiper'
import RecommendSong from '@/views/home/components/RecommendSong'

const data = reactive({
  banners: [],
  recommend: []
})

onBeforeMount(async () => {
  // 获取轮播数据
  const res = await getHomeBanner()
  data.banners = res.data.banners
  const recommend = await getRecommendSong(6)
  data.recommend = recommend.data.result
})
</script>

<style lang="scss" scoped>
</style>