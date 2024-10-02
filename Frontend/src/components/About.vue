<template>
    <div class="about">
      <h1>About Me</h1>
      <p>Name: {{ name }}</p>
      <p>Education: {{ education }}</p>
      <p>Personal Information: {{ personalInfo }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: 'Your Name',
        education: 'Your Education Background',
        personalInfo: 'Personal information about yourself'
      };
    }
  };
  </script>
  