<!-- 音乐卡片 -->
<template>
  <div class="music-card">
    <div class="img" :style="styles"><slot name="img"></slot></div>
    <div class="play"><slot name="play"></slot></div>
    <div class="title">
      <slot name="title"><div class="blank"></div></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  // 卡片大小
  styles: {
    type: Object,
    default: () => {
      return {
        width: '150px',
        height: '150px'
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.music-card {
  position: relative;
  cursor: pointer;
  .img {
    overflow: hidden;
    border-radius: 10px;
  }
  .play {
    position: absolute;
    top: 7px;
    right: 7px;
    border-radius: 20px;
    background-color: #607d8b8f;
    padding: 1px 10px;
    color: #fff;
  }
  .title {
    width: 150px;
    text-align: left;
    overflow: hidden;
    // 超过两行则省略号
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
}
</style>