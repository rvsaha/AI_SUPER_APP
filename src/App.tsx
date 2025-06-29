import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ModelGrid } from './components/ModelGrid';
import { ChatInterface } from './components/ChatInterface';
import { Footer } from './components/Footer';

export type ModelCategory = 'all' | 'text' | 'image' | 'code' | 'voice' | 'video' | 'translation' | 'productivity';

export interface AIModel {
  id: string;
  name: string;
  description: string;
  category: ModelCategory;
  provider: string;
  capabilities: string[];
  isPro: boolean;
  icon: string;
  color: string;
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState<ModelCategory>('all');
  const [selectedModel, setSelectedModel] = useState<AIModel | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="relative z-10">
        <Header />
        {!selectedModel ? (
          <>
            <Hero />
            <ModelGrid 
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              onModelSelect={setSelectedModel}
            />
          </>
        ) : (
          <ChatInterface 
            model={selectedModel}
            onBack={() => setSelectedModel(null)}
          />
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;