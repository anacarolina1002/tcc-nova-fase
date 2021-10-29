import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access': '*/*',
    'Content-Type': 'application/json',
    'Accept-Encoding': 'gzip,deflate,br'
  }
  //protocolo + local + porta
});

export { api };