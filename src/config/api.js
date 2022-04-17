import axios from "axios";
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzQ2NWRiZTJhNGMyNmMyMDMzMmM0MzNiMjAyZDNlNiIsInN1YiI6IjVkM2UzZjM3Yjg3YWVjMmMzZDM5YjJlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FT8OFi0UtzNi33dPNoACJXFzAvHYF8st-aVgFTwZ85o"
export const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {"Authorization" : `Bearer ${token}`},
    timeout: 10000,
  });
  