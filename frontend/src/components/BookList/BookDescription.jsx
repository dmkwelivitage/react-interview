import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function BookDescription({ description }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 100;

  const shouldTruncate = description.length > maxLength;
  const displayText = shouldTruncate && !isExpanded
    ? `${description.substring(0, maxLength)}...`
    : description;

  return (
    <div className="relative">
      <p className="text-gray-600 text-sm">
        {displayText}
      </p>
      {shouldTruncate && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
        >
          {isExpanded ? (
            <>
              Show Less <ChevronUp size={16} className="ml-1" />
            </>
          ) : (
            <>
              Read More <ChevronDown size={16} className="ml-1" />
            </>
          )}
        </button>
      )}
    </div>
  );
}