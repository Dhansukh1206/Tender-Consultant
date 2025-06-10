// src/services/authService.js

const API_URL = '/api/auth'; // Your backend auth API base URL

// Save JWT token in localStorage
const setToken = (token) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('token', token);
  }
};

const getToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token');
  }
  return null;
};

const removeToken = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('token');
  }
};

export const login = async (email, password) => {
  const res = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    throw new Error('Login failed');
  }

  const data = await res.json();
  setToken(data.token); // assuming backend returns a JWT token
  return data.user; // optional: return user info
};

export const logout = () => {
  removeToken();
  // optionally, redirect or do other cleanup
};

export const isLoggedIn = () => {
  return !!getToken();
};

export const getCurrentUser = async () => {
  const token = getToken();
  if (!token) return null;

  const res = await fetch(`${API_URL}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) return null;

  return await res.json();
};
