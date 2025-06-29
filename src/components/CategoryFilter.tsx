import React from 'react';
import { ModelCategory } from '../App';
import { Type, Image, Code, Mic, Video, Globe, Briefcase, Sparkles } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: ModelCategory;
  onCategoryChange: (category: ModelCategory) => void;
}

const categories = [
  { id: 'all' as ModelCategory, name: 'All Models', icon: Sparkles },
  { id: 'text' as ModelCategory, name: 'Text Generation', icon: Type },
  { id: 'image' as ModelCategory, name: 'Image Generation', icon: Image },
  { id: 'code' as ModelCategory, name: 'Code Assistant', icon: Code },
  { id: 'voice' as ModelCategory, name: 'Voice & Audio', icon: Mic },
  { id: 'video' as ModelCategory, name: 'Video Creation', icon: Video },
  { id: 'translation' as ModelCategory, name: 'Translation', icon: Globe },
  { id: 'productivity' as ModelCategory, name: 'Productivity', icon: Briefcase },
];

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-8 justify-center">
      {categories.map((category) => {
        const Icon = category.icon;
        const isSelected = selectedCategory === category.id;
        
        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
              isSelected
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                : 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20 hover:text-white'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span className="text-sm font-medium">{category.name}</span>
          </button>
        );
      })}
    </div>
  );
}