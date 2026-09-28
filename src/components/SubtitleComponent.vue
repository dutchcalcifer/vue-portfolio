<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const items = [
  'front-end development',
  'UX/UI design',
  'designs omzetten naar code',
  'interactive prototyping',
  'design systems',
  'usability testing',
]

const currentItemIndex = ref(0)
let intervalId

onMounted(() => {
  intervalId = window.setInterval(() => {
    currentItemIndex.value = (currentItemIndex.value + 1) % items.length
  }, 5000)
})

onBeforeUnmount(() => {
  window.clearInterval(intervalId)
})
</script>

<template>
  <h2 class="subtitle">
    Retegoed in
    <Transition name="fade" mode="out-in">
      <span :key="currentItemIndex">{{ items[currentItemIndex] }}.</span>
    </Transition>
  </h2>
</template>

<style scoped>
.subtitle {
  text-align: center;
}

.subtitle > span {
  display: block;
}

.subtitle .fade-enter-active,
.subtitle .fade-leave-active {
  transition: opacity 200ms ease;
}

.subtitle .fade-enter-from,
.subtitle .fade-leave-to {
  opacity: 0;
}
</style>
