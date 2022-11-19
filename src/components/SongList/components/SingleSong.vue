<template>
  <div class="singlesong">
    <div>
      <slot></slot>
    </div>
    <span>{{ info.name }}</span>
    <span>{{ info.dt }}</span>
    <div>{{ info.ar }}</div>
    <span>{info.fee}</span>
    <span>{{ info.mv }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  info: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped>
</style>