<template>
    <div class="container">
      <h1>Данные с API</h1>
      <ul>
        <li v-for="user in store.apiData" :key="user.id">
          {{ user.name }} - {{ user.email }}
        </li>
      </ul>
      <RouterLink to="/">На главную</RouterLink>
    </div>
  </template>
  
  <script setup>
  import { useDataStore } from '@/stores/dataStore';
  import { onMounted } from 'vue';
  
  const store = useDataStore();
  
  onMounted(() => {
    store.fetchData();
  });
  </script>