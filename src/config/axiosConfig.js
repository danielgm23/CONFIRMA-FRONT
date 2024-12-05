import axios from 'axios';

// Cria uma instância do axios com uma configuração personalizada
const api = axios.create({
  baseURL: 'http://localhost:3001/api', // URL base para todas as requisições
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
