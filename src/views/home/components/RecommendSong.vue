<template>
  <div class="recommend-song">
    <MusicCard v-for="item in recommend" :key="item.id">
      <template #img>
        <router-link
          :to="{
            path: '/recommendSongList',
            query: { id: item.id }
          }"
        >
          <img :src="item.picUrl" alt="" width="150" height="150" />
        </router-link>
      </template>
      <template #play>
        <svg class="icon" aria-hidden="true" w>
          <use xlink:href="#icon-play"></use>
        </svg>
        <span>{{ formatPlayCount(item.playCount) }}</span>
      </template>
      <template #title>
        <span>{{ item.name }}</span>
      </template>
    </MusicCard>
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import MusicCard from '@/components/MusicCard'
import { formatPlayCount } from '@/utils/formatPlayCount'

const props = defineProps({
  recommend: {
    type: Array,
    required: true
  }
})

console.log(props)

// onMounted(() => {
//   nextTick(() => {
//     console.log(recommend[0].playCount)
//   })
// })
</script>

<style lang="scss" scoped>
.recommend-song {
  display: flex;
  justify-content: space-evenly;
  width: 1080px;
  margin-top: 10px;
}
</style>