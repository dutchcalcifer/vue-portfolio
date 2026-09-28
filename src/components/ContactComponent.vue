<script setup>
import githubIcon from '../assets/icons/social/github.svg'
import linkedinIcon from '../assets/icons/social/linkedin.svg'

const contactItems = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dantepiekart/',
    icon: linkedinIcon,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/dutchcalcifer',
    icon: githubIcon,
  },
]
</script>

<template>
  <ul class="contact-list">
    <li v-for="item in contactItems" :key="item.label">
      <a :href="item.href" target="_blank" rel="noopener noreferrer">
        <img :src="item.icon" alt="" />
        <span>{{ item.label }}</span>
      </a>
    </li>
  </ul>
</template>

<style scoped>
.contact-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: clamp(0.75rem, 2vw, 1.25rem);
  margin: 0;
  padding: 0;
  list-style: none;
}

.contact-list a {
  display: flex;
  align-items: center;
  min-height: 2.75rem;
  gap: clamp(0.4rem, 1vw, 0.65rem);
  padding: clamp(0.4rem, 1vw, 0.65rem);
  color: inherit;
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  text-decoration: none;
  border-radius: 0.5rem;
}

.contact-list img {
  width: clamp(1.75rem, 4vw, 2.5rem);
  height: clamp(1.75rem, 4vw, 2.5rem);
  object-fit: contain;
}

.contact-list a:focus-visible {
  outline: 0.125rem solid currentColor;
  outline-offset: 0.125rem;
}
</style>
