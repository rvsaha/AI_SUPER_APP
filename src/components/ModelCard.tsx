import React from 'react';
import { AIModel } from '../App';
import { Star, Zap } from 'lucide-react';

interface ModelCardProps {
  model: AIModel;
  onClick: () => void;
}

export function ModelCard({ model, onClick }: ModelCardProps) {
  return (
    <div 
      onClick={onClick}
      className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-2xl"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${model.color}`}>
          {model.icon}
        </div>
        {model.isPro && (
          <div className="flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full">
            <Star className="w-3 h-3" />
            <span>Pro</span>
          </div>
        )}
      </div>

      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
        {model.name}
      </h3>
      
      <p className="text-sm text-gray-400 mb-4 line-clamp-2">
        {model.description}
      </p>

      <div className="flex flex-wrap gap-1 mb-4">
        {model.capabilities.slice(0, 3).map((capability, index) => (
          <span 
            key={index}
            className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full"
          >
            {capability}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">by {model.provider}</span>
        <div className="flex items-center space-x-1 text-green-400">
          <Zap className="w-3 h-3" />
          <span className="text-xs">Free</span>
        </div>
      </div>
    </div>
  );
}