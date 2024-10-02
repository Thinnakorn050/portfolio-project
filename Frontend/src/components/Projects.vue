<template>
  <div class="projects">
    <h1>My Projects</h1>
    <div v-for="project in projects" :key="project._id" class="project-card">
      <img :src="project.imageUrl" alt="Project Image" />
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
      <a :href="project.certificateUrl" v-if="project.certificateUrl">Certificate</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      projects: []
    };
  },
  created() {
    axios.get('/api/projects')
      .then(response => {
        this.projects = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  }
};
</script>

<style>
.project-card {
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
