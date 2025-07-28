import axios from 'axios';

const BASE_URL = 'https://api.github.com';

const headers = {
  Authorization: `token ${import.meta.env.VITE_GITHUB_API_TOKEN || ''}`
};

export const fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`, { headers });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_API_TOKEN || ''}`
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }