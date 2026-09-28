<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import items from '../data/subtitleItems'

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
