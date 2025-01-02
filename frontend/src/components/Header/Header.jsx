import React from 'react';
import { BookOpen, Library } from 'lucide-react';
import { SearchBar } from './SearchBar';

export function Header({ searchQuery, onSearchChange, onSearch }) {
  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <div className="bg-gray-800 border border-gray-700 p-2 rounded-lg shadow-md">
              <Library className="text-blue-400 w-8 h-8" />
            </div>
            <div className="text-white">
              <h1 className="text-2xl font-bold">BookShelf</h1>
              <p className="text-gray-400 text-sm">Your Digital Library</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-auto md:flex-1 md:max-w-2xl">
            <SearchBar 
              value={searchQuery} 
              onChange={onSearchChange}
              onSearch={onSearch}
            />
          </div>
        </div>
      </div>
    </header>
  );
}