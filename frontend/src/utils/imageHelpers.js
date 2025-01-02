const DEFAULT_BOOK_COVER = 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=800&h=1200';

export function getBookCoverUrl(imageUrl) {
  return imageUrl || DEFAULT_BOOK_COVER;
}

export function handleImageError(event) {
  event.target.src = DEFAULT_BOOK_COVER;
  event.target.classList.add('fallback-image');
}