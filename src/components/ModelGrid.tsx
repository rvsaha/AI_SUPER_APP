import React from 'react';
import { ModelCard } from './ModelCard';
import { CategoryFilter } from './CategoryFilter';
import { aiModels } from '../data/models';
import { ModelCategory, AIModel } from '../App';

interface ModelGridProps {
  selectedCategory: ModelCategory;
  onCategoryChange: (category: ModelCategory) => void;
  onModelSelect: (model: AIModel) => void;
}

export function ModelGrid({ selectedCategory, onCategoryChange, onModelSelect }: ModelGridProps) {
  const filteredModels = selectedCategory === 'all' 
    ? aiModels 
    : aiModels.filter(model => model.category === selectedCategory);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Choose Your AI Model</h2>
          <p className="text-gray-300 text-lg">Select from our comprehensive collection of AI models</p>
        </div>

        <CategoryFilter 
          selectedCategory={selectedCategory}
          onCategoryChange={onCategoryChange}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredModels.map((model) => (
            <ModelCard 
              key={model.id} 
              model={model} 
              onClick={() => onModelSelect(model)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}