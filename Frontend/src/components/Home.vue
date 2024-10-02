<template>
    <div class="home">
      <h1>Welcome to My Portfolio</h1>
      <img :src="imageUrl" alt="Profile" class="profile-image" />
      <p>Hello, my name is {{ name }}. Welcome to my portfolio website!</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: 'Your Name',
        imageUrl: 'path_to_your_image.jpg' // อัพเดตให้เป็นรูปโปรไฟล์ของคุณ
      };
    }
  };
  </script>
  
  <style>
  .profile-image {
    width: 150px;
    border-radius: 50%;
  }
  </style>
  