<!-- 歌单歌曲列表 -->
<template>
  {{ songListId }}
</template>

<script setup>
import { getSongUrl, getSingleSong } from '@/api/songs'
// import { Loading } from 'element-plus/es/components/loading/src/service'
// import { onBeforeMount } from 'vue-demi'
// import func from 'vue-temp/vue-editor-bridge'

const props = defineProps({
  songListId: {
    type: Array,
    required: true
  }
})

getNetworkData()

function getNetworkData() {
  getSongUrl('410801521', 'exhigh').then((res) => console.log(res))
  getSingleSong('410801521').then((res) => console.log(res))
}

// const songUrl = async () => {
//   await getSongUrl('410801521', 'exhigh')
// }
// const songDetail = async () => await getSingleSong('410801521')
// console.log(songUrl(), songDetail)
// onBeforeMount(() => {
//   let res = await getSongUrl('410801521', 'exhigh')
//   console.log(res)
// })

// async function getUrl
</script>

<style lang="scss" scoped>
</style>