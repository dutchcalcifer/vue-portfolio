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
  <h2>Retegoed in {{ items[currentItemIndex] }}.</h2>
</template>
