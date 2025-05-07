import { defineStore } from 'pinia';
import axios from 'axios';

export const useDataStore = defineStore('data', {
  state: () => ({
    apiData: [],
    formData: {
      name: '',
      email: ''
    }
  }),
  actions: {
    async fetchData() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.apiData = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    async submitForm() {
      try {
        await axios.post('https://jsonplaceholder.typicode.com/posts', {
          title: this.formData.name,
          body: this.formData.email,
          userId: 1
        });
        alert('Данные успешно отправлены!');
        this.formData = { name: '', email: '' };
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  }
});