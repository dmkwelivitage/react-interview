import React from 'react';
import { Calendar, Users, BookOpen } from 'lucide-react';
import { BookDescription } from './BookDescription';
import { getBookCoverUrl, handleImageError } from '../../utils/imageHelpers';

export function BookCard({ title, authors, publishedDate, description, imageUrl }) {
  return (
    <div className="group relative bg-white/90 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        <img
          src={getBookCoverUrl(imageUrl)}
          alt={`Cover of ${title}`}
          onError={handleImageError}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        {!imageUrl && (
          <div className="absolute inset-0 flex items-center justify-center">
            <BookOpen className="w-16 h-16 text-gray-400" />
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>

        {/* Meta Information */}
        <div className="space-y-2 mb-3">
          <div className="flex items-center text-gray-600">
            <Users size={16} className="mr-2 flex-shrink-0" />
            <span className="text-sm truncate">{authors}</span>
          </div>
          {publishedDate && (
            <div className="flex items-center text-gray-600">
              <Calendar size={16} className="mr-2 flex-shrink-0" />
              <span className="text-sm">{publishedDate}</span>
            </div>
          )}
        </div>

        {/* Description */}
        {description && <BookDescription description={description} />}
      </div>
    </div>
  );
}