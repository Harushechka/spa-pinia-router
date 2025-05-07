<template>
    <div class="container">
      <h1>Форма отправки</h1>
      <form @submit.prevent="store.submitForm">
        <div>
          <label>Имя:</label>
          <input v-model="store.formData.name" required>
        </div>
        <div>
          <label>Email:</label>
          <input v-model="store.formData.email" type="email" required>
        </div>
        <button type="submit">Отправить</button>
      </form>
      <RouterLink to="/">На главную</RouterLink>
    </div>
  </template>
  
  <script setup>
  import { useDataStore } from '@/stores/dataStore';
  
  const store = useDataStore();
  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 400px;
  }
  </style>