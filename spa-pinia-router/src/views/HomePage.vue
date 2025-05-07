<template>
    <div class="container">
      <h1>Добро пожаловать!</h1>
      <p>Это главная страница нашего приложения.</p>
      <nav>
        <RouterLink to="/api">Перейти к данным API</RouterLink> |
        <RouterLink to="/form">Перейти к форме</RouterLink>
      </nav>
    </div>
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router';
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  </style>