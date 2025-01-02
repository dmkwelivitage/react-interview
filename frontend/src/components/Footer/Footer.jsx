import React from 'react';
import { Github, Twitter, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About BookShelf</h3>
            <p className="text-sm text-gray-400">
              BookShelf is your digital library companion, helping you discover and manage your favorite books.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Browse Books</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Reading Lists</a>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart size={16} className="text-red-500" /> by BookShelf Team
          </p>
          <p className="mt-2 text-gray-500">
            © {currentYear} BookShelf. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}