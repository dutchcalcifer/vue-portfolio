<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  skills: {
    type: Array,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <article class="project-card">
    <p v-if="featured">Featured Project</p>
    <h2>{{ title }}</h2>

    <p>{{ description }}</p>

    <ul>
      <li v-for="skill in skills" :key="skill">
        {{ skill }}
      </li>
    </ul>
  </article>
</template>

<style scoped>
.project-card {
  padding: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
}
</style>
