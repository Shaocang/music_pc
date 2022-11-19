<!-- 歌单详情 -->
<template>
  <SongDetail :detail="data.detail" />
  <SongList :songListId="data.songListId" />
</template>

<script setup>
import { getSongDetail } from '@/api/songs'
import { onBeforeMount, reactive } from 'vue'
import SongDetail from '@/components/SongDetail'
import SongList from '@/components/SongList'
import { useRoute } from 'vue-router'

const route = useRoute()
let data = reactive({
  detail: {},
  songListId: []
})
console.log(route.query)
onBeforeMount(async () => {
  let res = await getSongDetail(route.query.id)
  const playlist = res.data.playlist
  const { description, name, coverImgUrl, trackIds, playCount } = playlist
  data.detail = { description, name, coverImgUrl, playCount }
  data.songListId = trackIds
  console.log(data)
})
</script>

<style lang="scss" scoped>
</style>