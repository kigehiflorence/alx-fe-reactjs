import axios from 'axios';

/**
 * Fetch user details by GitHub username (used in Simple Search).
 * @param {string} username
 * @returns {Promise<object>}
 */
export const fetchUserData = async (username) => {
  const url = `https://api.github.com/users/${username}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Search GitHub users with optional filters (used in Advanced Search).
 * @param {object} filters
 * @param {string} filters.username - GitHub username or keyword
 * @param {string} filters.location - User location
 * @param {string} filters.repos - Minimum number of repositories
 * @param {number} page - Page number for pagination
 * @returns {Promise<object>}
 */
export const searchGitHubUsers = async ({ username, location, repos }, page = 1) => {
  let query = [];

  if (username) query.push(`${username} in:login`);
  if (location) query.push(`location:${location}`);
  if (repos) query.push(`repos:>=${repos}`);

  const searchQuery = query.join('+');
  const url = `https://api.github.com/search/users?q=${searchQuery}&per_page=10&page=${page}`;

  const response = await axios.get(url);
  return response.data;
};
