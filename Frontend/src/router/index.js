import { createRouter, createWebHistory } from 'vue-router';
import IndexPage from '../pages/index.vue';
import AboutPage from '../components/About.vue';
import ProjectsPage from '../components/Projects.vue';
import HomePage from '../components/Home.vue';  // อย่าลืม import HomePage

const routes = [
  { path: '/', component: IndexPage },  
  { path: '/home', component: HomePage },  // ใช้ HomePage ที่ import มา
  { path: '/about', component: AboutPage },
  { path: '/projects', component: ProjectsPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
