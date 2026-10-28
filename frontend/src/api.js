
export const API_BASE = import.meta.env.VITE_API_BASE_URL || '/api';

export function getGuestOrderToken() {
  let token = localStorage.getItem('dinespaceGuestOrderToken');

  if (!token) {
    token = globalThis.crypto.randomUUID();
    localStorage.setItem('dinespaceGuestOrderToken', token);
  }

  return token;
}

export function clearGuestOrderToken() {
  localStorage.removeItem('dinespaceGuestOrderToken');
}

export function apiFetch(path, options = {}) {
  return fetch(`${API_BASE}${path}`, {
    ...options,
    credentials: 'include',
    headers: {
      ...(options.body ? { 'Content-Type': 'application/json' } : {}),
      ...(options.headers || {}),
    },
  });
}
