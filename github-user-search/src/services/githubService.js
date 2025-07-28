// src/services/githubService.js
import axios from 'axios';

const BASE_URL = 'https://api.github.com';

const headers = {
  Authorization: `token ${import.meta.env.VITE_GITHUB_API_TOKEN}`
};

export const fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`, { headers });
    return response.data;
  } catch (error) {
    throw error;
  }
};
