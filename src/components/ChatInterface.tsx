import React, { useState } from 'react';
import { AIModel } from '../App';
import { ArrowLeft, Send, Copy, Download, ThumbsUp, ThumbsDown } from 'lucide-react';

interface ChatInterfaceProps {
  model: AIModel;
  onBack: () => void;
}

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

export function ChatInterface({ model, onBack }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsGenerating(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: `This is a simulated response from ${model.name}. In a real implementation, this would connect to the actual AI model API. Your prompt was: "${userMessage.content}"`,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between py-6 border-b border-white/10">
          <div className="flex items-center space-x-4">
            <button
              onClick={onBack}
              className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/10"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl ${model.color}`}>
              {model.icon}
            </div>
            <div>
              <h1 className="text-xl font-semibold text-white">{model.name}</h1>
              <p className="text-sm text-gray-400">by {model.provider}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {model.capabilities.map((capability, index) => (
              <span 
                key={index}
                className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full"
              >
                {capability}
              </span>
            ))}
          </div>
        </div>

        {/* Chat Messages */}
        <div className="py-6 space-y-6 min-h-[400px]">
          {messages.length === 0 ? (
            <div className="text-center py-12">
              <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl ${model.color}`}>
                {model.icon}
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Ready to assist you</h3>
              <p className="text-gray-400">Start a conversation with {model.name}</p>
            </div>
          ) : (
            messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-3xl p-4 rounded-lg ${
                  message.type === 'user' 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                    : 'bg-white/10 backdrop-blur-sm border border-white/10 text-gray-100'
                }`}>
                  <p className="whitespace-pre-wrap">{message.content}</p>
                  {message.type === 'ai' && (
                    <div className="flex items-center space-x-2 mt-3 pt-3 border-t border-white/10">
                      <button className="p-1 text-gray-400 hover:text-white transition-colors">
                        <Copy className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-white transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-green-400 transition-colors">
                        <ThumbsUp className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-red-400 transition-colors">
                        <ThumbsDown className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
          
          {isGenerating && (
            <div className="flex justify-start">
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-4 max-w-3xl">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <span className="text-gray-400 text-sm ml-2">Generating response...</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="sticky bottom-0 bg-gradient-to-t from-slate-900 to-transparent pt-6 pb-6">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder={`Ask ${model.name} anything...`}
                className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 pr-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                rows={3}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isGenerating}
                className="absolute right-3 bottom-3 p-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}