<script setup>
import { ref } from 'vue'
import SkillItem from '../components/SkillItem.vue'
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data/Projects.js'

const count = ref(0)
const name = ref('Dante')
const showSkills = ref(true)
const skills = ref(['HTML', 'CSS', 'JavaScript', 'Vue'])
const newSkill = ref('')

function increment() {
  count.value++
}

function addSkill() {
  if (newSkill.value.trim() !== '') {
    skills.value.push(newSkill.value.trim())
    newSkill.value = ''
  }
}

function removeSkill(index) {
  skills.value.splice(index, 1)
}
</script>

<template>
  <main>
    <h1>Vue practice</h1>
    <p>This is my first new Vue view.</p>
    <button @click="increment">Clicked {{ count }} times</button>
    <label for="name">Your name</label>
    <input id="name" v-model="name" />

    <p>Hello, {{ name }}!</p>

    <form @submit.prevent="addSkill">
      <label for="newSkill">New skill</label>
      <input id="newSkill" v-model="newSkill" />

      <button type="submit">Add skill</button>
    </form>

    <button @click="showSkills = !showSkills">
      {{ showSkills ? 'Hide skills' : 'Show skills' }}
    </button>

    <ul v-if="showSkills">
      <SkillItem
        v-for="(skill, index) in skills"
        :key="index"
        :skill="skill"
        @remove="removeSkill(index)"
      />
    </ul>
    <section>
      <h2>Projects</h2>

      <div class="project-list">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :title="project.title"
          :description="project.description"
          :skills="project.skills"
          :featured="project.featured"
        />
      </div>
    </section>
  </main>
</template>
