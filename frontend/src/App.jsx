import React, { useState } from 'react';
import { BookList } from './components/BookList/BookList';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage';
import { LoadingState } from './components/LoadingState/LoadingState';
import { searchBooks } from './services/api';

function App() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (searchQuery) => {
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    setError('');
    
    try {
      const data = await searchBooks(searchQuery);
      setBooks(data);
    } catch (err) {
      setError(err.message);
      setBooks([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header 
        searchQuery={query} 
        onSearchChange={setQuery}
        onSearch={() => handleSearch(query)}
      />
      
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 py-8">
        <ErrorMessage message={error} />
        {isLoading ? (
          <LoadingState />
        ) : (
          <BookList books={books} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;