import React from 'react';
import { BookCard } from './BookCard';

export function BookList({ books }) {
  if (books.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[400px] text-gray-500">
        <p className="text-lg">No books found. Try a different query.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {books.map((book) => (
        <BookCard
          key={book.id}
          title={book.title}
          authors={book.authors ? book.authors.join(', ') : 'Unknown Author'}
          publishedDate={book.publishedDate}
          description={book.description}
          imageUrl={book.imageUrl}
        />
      ))}
    </div>
  );
}

export default BookList;