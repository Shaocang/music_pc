<!-- 歌单头部描述 -->
<template>
  <div class="song-detail">
    <MusicCard :styles="{ width: '200px', height: '200px' }">
      <template #img>
        <img :src="detail.coverImgUrl" alt="" height="200" />
      </template>
      <template #play>
        <svg class="icon" aria-hidden="true" w>
          <use xlink:href="#icon-play"></use>
        </svg>
        <span>{{ formatPlayCount(detail.playCount) }}</span>
      </template>
    </MusicCard>
    <div class="content">
      <h3 class="name" :style="data.style">{{ detail.name }}</h3>
      <span class="desc">{{ detail.description }}</span>
    </div>
  </div>
</template>

<script setup>
import MusicCard from '@/components/MusicCard'
import { formatPlayCount } from '@/utils/formatPlayCount'
import { onMounted, onUnmounted, reactive } from 'vue'

const props = defineProps({
  detail: {
    type: Object,
    required: true
  }
})

let data = reactive({
  style: {
    color: 'black'
  },
  color: ['skyblue', 'orange', 'red', 'green']
})

let colorTimer
let colorIndex = 0
onMounted(() => {
  colorTimer = setInterval(toggleColor, 1000)
})

onUnmounted(() => {
  clearInterval(colorTimer)
})

function toggleColor() {
  if (colorIndex === data.color.length) {
    colorIndex = 0
  }
  data.style.color = data.color[colorIndex++]
}
</script>

<style lang="scss" scoped>
.song-detail {
  display: flex;
  justify-content: space-between;
  .content {
    .name {
      text-align: center;
      transition: 0.9s;
    }
    .desc {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
  }
}
</style>