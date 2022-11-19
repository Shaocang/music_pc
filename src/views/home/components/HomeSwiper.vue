<!-- 首页轮播 -->
<template>
  <el-carousel
    :interval="4000"
    type="card"
    height="200px"
    style="width: 1080px"
  >
    <el-carousel-item v-for="item in banners" :key="item.imageUrl">
      <img :src="item.imageUrl" alt="" />
      <span class="tag" :style="{ backgroundColor: item.titleColor }">{{
        item.typeTitle
      }}</span>
    </el-carousel-item>
  </el-carousel>
</template>

<script setup>
import { onMounted } from 'vue'

const props = defineProps({
  banners: {
    type: Array,
    required: true
  }
})

onMounted(() => {
  console.log(props)
})
</script>

<style lang="scss" scoped>
.el-carousel {
  .el-carousel__item--card {
    border-radius: 10px;
    img {
      height: 200px;
    }
    .tag {
      position: absolute;
      right: 0;
      bottom: 0;
      padding: 2px 6px;
      color: white;
      text-align: center;
      border-top-left-radius: 10px;
      border-bottom-right-radius: 10px;
      z-index: 9999;
    }
  }
}
</style>