import axios from "axios";

// Cria uma instância do axios com uma configuração personalizada
const api = axios.create({
  baseURL: "https://confirma-back-production.up.railway.app/api/form", // URL base para todas as requisições
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
