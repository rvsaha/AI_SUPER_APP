import React from 'react';
import { Zap, Menu, User, Settings } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-black/20 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">AI Super App</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Dashboard</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">History</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">API</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-300 hover:text-white transition-colors">
              <Settings className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-300 hover:text-white transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="md:hidden p-2 text-gray-300 hover:text-white transition-colors">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}