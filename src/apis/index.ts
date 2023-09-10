import axios from 'axios'

export const API = axios.create({
  baseURL: 'http://www.omdbapi.com',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  },
})

// https://www.omdbapi.com/?apikey=92e32667&s=iron%20man&page=2
