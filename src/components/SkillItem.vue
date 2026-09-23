<script setup>
defineProps({
  skill: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['remove'])
</script>

<template>
  <li>
    {{ skill }}
    <button @click="emit('remove')">Remove</button>
  </li>
</template>
