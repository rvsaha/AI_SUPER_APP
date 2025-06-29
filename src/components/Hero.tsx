import React from 'react';
import { Sparkles, Zap, Globe, Code } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            The Ultimate
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> AI Playground</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Access every AI model in one place. From text generation to image creation, 
            code assistance to voice synthesis - unleash the power of artificial intelligence 
            with unlimited free access.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-gray-200">100+ AI Models</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-gray-200">Unlimited Usage</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
            <Globe className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-200">No API Keys Needed</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
            <Code className="w-4 h-4 text-green-400" />
            <span className="text-sm text-gray-200">Pro Features Free</span>
          </div>
        </div>

        <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          Start Creating Now
        </button>
      </div>
    </section>
  );
}