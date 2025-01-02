const API_URL = import.meta.env.VITE_BACKEND_URL;

export async function searchBooks(query) {
    const response = await fetch(`${API_URL}/api/books?query=${encodeURIComponent(query)}`);
    if (!response.ok) {
      throw new Error('Failed to fetch books');
    }
    return response.json();
  }
