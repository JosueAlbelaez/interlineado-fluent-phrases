import React from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { useThemeStore } from '../store/useThemeStore';
import logo from '../img/logo.png';

export const Navbar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-20">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Logo" className="w-16 h-16" />
        <span className="text-xl md:text-2xl lg:text-3xl font-bold text-[#00BF63] dark:text-[#00BF63]">
          Interlineal Fluent Phrases
        </span>
      </Link>

      <button
        onClick={toggleTheme}
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
        aria-label="Toggle Theme"
      >
        {isDarkMode ? (
          <Sun className="w-6 h-6 text-yellow-500" />
        ) : (
          <Moon className="w-6 h-6 text-gray-600" />
        )}
      </button>
    </div>
  </div>
</nav>

  );
};