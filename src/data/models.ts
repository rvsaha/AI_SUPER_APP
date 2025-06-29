import { AIModel } from '../App';

export const aiModels: AIModel[] = [
  // Large Language Models (LLMs)
  {
    id: 'openai-o3',
    name: 'OpenAI o3',
    description: 'Latest breakthrough in reasoning with unprecedented problem-solving capabilities',
    category: 'text',
    provider: 'OpenAI',
    capabilities: ['Advanced Reasoning', 'Complex Problem Solving', 'Mathematical Proofs', 'Scientific Research'],
    isPro: true,
    icon: '🧠',
    color: 'bg-gradient-to-r from-emerald-500 to-teal-500'
  },
  {
    id: 'gpt-4o',
    name: 'GPT-4o',
    description: 'Omni-modal AI with real-time voice, vision, and text capabilities',
    category: 'text',
    provider: 'OpenAI',
    capabilities: ['Multimodal', 'Real-time Voice', 'Vision', 'Reasoning'],
    isPro: true,
    icon: '🤖',
    color: 'bg-gradient-to-r from-green-500 to-blue-500'
  },
  {
    id: 'gpt-4',
    name: 'GPT-4',
    description: 'Advanced conversational AI with exceptional reasoning and creative capabilities',
    category: 'text',
    provider: 'OpenAI',
    capabilities: ['Conversation', 'Writing', 'Analysis', 'Reasoning'],
    isPro: true,
    icon: '💬',
    color: 'bg-gradient-to-r from-blue-500 to-cyan-500'
  },
  {
    id: 'claude-3-7-sonnet',
    name: 'Claude 3.7 Sonnet',
    description: 'Latest Claude with enhanced writing, editing, and safety-focused dialogue',
    category: 'text',
    provider: 'Anthropic',
    capabilities: ['Advanced Writing', 'Editing', 'Safety-focused', 'Long Context'],
    isPro: true,
    icon: '📝',
    color: 'bg-gradient-to-r from-purple-500 to-pink-500'
  },
  {
    id: 'claude-3-5',
    name: 'Claude 3.5',
    description: 'Sophisticated AI assistant with advanced reasoning and ethical considerations',
    category: 'text',
    provider: 'Anthropic',
    capabilities: ['Conversation', 'Analysis', 'Code Review', 'Research'],
    isPro: true,
    icon: '🧠',
    color: 'bg-gradient-to-r from-indigo-500 to-purple-500'
  },
  {
    id: 'gemini-2-5-pro',
    name: 'Gemini 2.5 Pro',
    description: 'Next-generation multimodal AI with enhanced search and enterprise integration',
    category: 'text',
    provider: 'Google',
    capabilities: ['Multimodal', 'Search Integration', 'Enterprise', 'Long Context'],
    isPro: true,
    icon: '💎',
    color: 'bg-gradient-to-r from-blue-500 to-cyan-500'
  },
  {
    id: 'gemini-advanced',
    name: 'Gemini Advanced',
    description: 'Google\'s premium AI with multimodal capabilities and enterprise features',
    category: 'text',
    provider: 'Google',
    capabilities: ['Multimodal', 'Enterprise', 'Advanced Reasoning', 'Integration'],
    isPro: true,
    icon: '🔷',
    color: 'bg-gradient-to-r from-cyan-500 to-blue-500'
  },
  {
    id: 'llama-3',
    name: 'Llama 3',
    description: 'Meta\'s latest open-source LLM for research and enterprise applications',
    category: 'text',
    provider: 'Meta',
    capabilities: ['Open Source', 'Research', 'Enterprise', 'Customizable'],
    isPro: false,
    icon: '🦙',
    color: 'bg-gradient-to-r from-orange-500 to-red-500'
  },
  {
    id: 'deepseek-r1',
    name: 'DeepSeek R1',
    description: 'Leading open-source LLM, efficient and powerful for math, code, and reasoning',
    category: 'text',
    provider: 'DeepSeek',
    capabilities: ['Math Excellence', 'Code Generation', 'Reasoning', 'Open Source'],
    isPro: false,
    icon: '🔍',
    color: 'bg-gradient-to-r from-teal-500 to-green-500'
  },
  {
    id: 'qwen',
    name: 'Qwen',
    description: 'Alibaba\'s multilingual large language model for global applications',
    category: 'text',
    provider: 'Alibaba',
    capabilities: ['Multilingual', 'Regional', 'Enterprise', 'Cultural Context'],
    isPro: false,
    icon: '🌏',
    color: 'bg-gradient-to-r from-red-500 to-orange-500'
  },
  {
    id: 'ernie',
    name: 'ERNIE',
    description: 'Baidu\'s enhanced representation through knowledge integration model',
    category: 'text',
    provider: 'Baidu',
    capabilities: ['Knowledge Integration', 'Chinese Language', 'Search', 'Enterprise'],
    isPro: false,
    icon: '🎓',
    color: 'bg-gradient-to-r from-blue-600 to-indigo-600'
  },
  {
    id: 'granite',
    name: 'Granite',
    description: 'IBM\'s enterprise-focused foundation model for business applications',
    category: 'text',
    provider: 'IBM',
    capabilities: ['Enterprise', 'Business Logic', 'Security', 'Compliance'],
    isPro: true,
    icon: '🏢',
    color: 'bg-gradient-to-r from-gray-600 to-blue-600'
  },
  {
    id: 'watsonx',
    name: 'Watsonx',
    description: 'IBM\'s AI and data platform for enterprise AI applications',
    category: 'text',
    provider: 'IBM',
    capabilities: ['Enterprise AI', 'Data Platform', 'Governance', 'Hybrid Cloud'],
    isPro: true,
    icon: '🔬',
    color: 'bg-gradient-to-r from-blue-700 to-indigo-700'
  },
  {
    id: 'grok',
    name: 'Grok',
    description: 'X\'s AI assistant with real-time information and witty personality',
    category: 'text',
    provider: 'X (Twitter)',
    capabilities: ['Real-time Info', 'Social Media', 'Humor', 'Current Events'],
    isPro: true,
    icon: '🚀',
    color: 'bg-gradient-to-r from-black to-gray-700'
  },
  {
    id: 'perplexity-ai',
    name: 'Perplexity AI',
    description: 'AI-powered search engine with real-time information and citations for research',
    category: 'text',
    provider: 'Perplexity',
    capabilities: ['AI Search', 'Real-time Info', 'Citations', 'Research', 'Academic Sources'],
    isPro: true,
    icon: '🔍',
    color: 'bg-gradient-to-r from-indigo-600 to-purple-600'
  },

  // Code Generation & Developer Tools
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    description: 'AI pair programmer that helps you write code faster',
    category: 'code',
    provider: 'GitHub',
    capabilities: ['Code Completion', 'Function Generation', 'Bug Fixing', 'Refactoring'],
    isPro: true,
    icon: '💻',
    color: 'bg-gradient-to-r from-gray-700 to-gray-900'
  },
  {
    id: 'amazon-q-developer',
    name: 'Amazon Q Developer',
    description: 'AWS-powered coding assistant for cloud development',
    category: 'code',
    provider: 'Amazon',
    capabilities: ['AWS Integration', 'Cloud Development', 'Security', 'Architecture'],
    isPro: true,
    icon: '☁️',
    color: 'bg-gradient-to-r from-orange-500 to-yellow-500'
  },
  {
    id: 'replit-ai',
    name: 'Replit AI',
    description: 'Integrated AI coding assistant for collaborative development',
    category: 'code',
    provider: 'Replit',
    capabilities: ['Collaborative Coding', 'Real-time', 'Multi-language', 'Deployment'],
    isPro: true,
    icon: '🔄',
    color: 'bg-gradient-to-r from-blue-600 to-purple-600'
  },
  {
    id: 'cursor',
    name: 'Cursor',
    description: 'AI-first code editor with intelligent code generation',
    category: 'code',
    provider: 'Cursor',
    capabilities: ['AI-first Editor', 'Code Generation', 'Refactoring', 'Chat Interface'],
    isPro: true,
    icon: '⚡',
    color: 'bg-gradient-to-r from-purple-500 to-blue-500'
  },
  {
    id: 'bolt',
    name: 'Bolt',
    description: 'Full-stack web development with AI-powered code generation',
    category: 'code',
    provider: 'StackBlitz',
    capabilities: ['Full-stack', 'Web Development', 'Instant Deploy', 'AI Generation'],
    isPro: true,
    icon: '⚡',
    color: 'bg-gradient-to-r from-yellow-500 to-orange-500'
  },
  {
    id: 'windsurf',
    name: 'Windsurf',
    description: 'AI-powered development environment for modern applications',
    category: 'code',
    provider: 'Codeium',
    capabilities: ['AI Development', 'Modern Apps', 'Collaboration', 'Deployment'],
    isPro: true,
    icon: '🏄',
    color: 'bg-gradient-to-r from-cyan-500 to-blue-500'
  },
  {
    id: 'sourcegraph-cody',
    name: 'Sourcegraph Cody',
    description: 'AI coding assistant with advanced code search and navigation',
    category: 'code',
    provider: 'Sourcegraph',
    capabilities: ['Code Search', 'Navigation', 'Context Aware', 'Enterprise'],
    isPro: true,
    icon: '🔍',
    color: 'bg-gradient-to-r from-indigo-500 to-purple-500'
  },
  {
    id: 'tabnine',
    name: 'Tabnine',
    description: 'AI code completion with privacy-focused local processing',
    category: 'code',
    provider: 'Tabnine',
    capabilities: ['Code Completion', 'Privacy-focused', 'Local Processing', 'Multi-language'],
    isPro: true,
    icon: '🛡️',
    color: 'bg-gradient-to-r from-green-600 to-teal-600'
  },
  {
    id: 'blackbox-ai',
    name: 'Blackbox AI',
    description: 'AI-powered code search, generation, and suggestion platform',
    category: 'code',
    provider: 'Blackbox',
    capabilities: ['Code Search', 'Generation', 'Suggestions', 'Multi-platform'],
    isPro: false,
    icon: '⬛',
    color: 'bg-gradient-to-r from-gray-800 to-black'
  },

  // ECE-Specific AI Models for Embedded Systems, VLSI, Communications, and AI/ML Hardware
  {
    id: 'cadence-ai',
    name: 'Cadence AI',
    description: 'AI-powered EDA tools for VLSI design, verification, and optimization',
    category: 'code',
    provider: 'Cadence',
    capabilities: ['VLSI Design', 'Layout Optimization', 'Timing Analysis', 'DRC/LVS'],
    isPro: true,
    icon: '🔬',
    color: 'bg-gradient-to-r from-blue-600 to-indigo-600'
  },
  {
    id: 'synopsys-ai',
    name: 'Synopsys AI',
    description: 'AI-enhanced semiconductor design and verification platform',
    category: 'code',
    provider: 'Synopsys',
    capabilities: ['IC Design', 'Verification', 'Test Generation', 'Power Analysis'],
    isPro: true,
    icon: '⚡',
    color: 'bg-gradient-to-r from-purple-600 to-blue-600'
  },
  {
    id: 'mentor-ai',
    name: 'Mentor Graphics AI',
    description: 'AI-powered PCB design and embedded system development tools',
    category: 'code',
    provider: 'Siemens',
    capabilities: ['PCB Design', 'Signal Integrity', 'Thermal Analysis', 'EMC/EMI'],
    isPro: true,
    icon: '🔧',
    color: 'bg-gradient-to-r from-teal-600 to-green-600'
  },
  {
    id: 'xilinx-vivado-ai',
    name: 'Xilinx Vivado AI',
    description: 'AI-enhanced FPGA design suite with intelligent optimization',
    category: 'code',
    provider: 'AMD Xilinx',
    capabilities: ['FPGA Design', 'HDL Synthesis', 'Timing Closure', 'Resource Optimization'],
    isPro: true,
    icon: '🔲',
    color: 'bg-gradient-to-r from-red-600 to-orange-600'
  },
  {
    id: 'intel-quartus-ai',
    name: 'Intel Quartus AI',
    description: 'AI-powered FPGA development environment with smart compilation',
    category: 'code',
    provider: 'Intel',
    capabilities: ['FPGA Development', 'Smart Compilation', 'Performance Tuning', 'IP Integration'],
    isPro: true,
    icon: '🧠',
    color: 'bg-gradient-to-r from-blue-700 to-cyan-700'
  },
  {
    id: 'arm-keil-ai',
    name: 'ARM Keil AI',
    description: 'AI-assisted embedded development for ARM microcontrollers',
    category: 'code',
    provider: 'ARM',
    capabilities: ['Embedded C/C++', 'RTOS Integration', 'Debug Assistance', 'Power Optimization'],
    isPro: true,
    icon: '🔩',
    color: 'bg-gradient-to-r from-gray-600 to-blue-600'
  },
  {
    id: 'ti-code-composer-ai',
    name: 'TI Code Composer AI',
    description: 'AI-enhanced IDE for Texas Instruments microcontrollers and DSPs',
    category: 'code',
    provider: 'Texas Instruments',
    capabilities: ['MCU/DSP Development', 'Real-time Debugging', 'Energy Optimization', 'Signal Processing'],
    isPro: true,
    icon: '🎛️',
    color: 'bg-gradient-to-r from-red-500 to-yellow-500'
  },
  {
    id: 'matlab-ai-toolbox',
    name: 'MATLAB AI Toolbox',
    description: 'Comprehensive AI/ML toolkit for signal processing and communications',
    category: 'code',
    provider: 'MathWorks',
    capabilities: ['Signal Processing', 'Communications', 'Deep Learning', 'Model Deployment'],
    isPro: true,
    icon: '📊',
    color: 'bg-gradient-to-r from-orange-500 to-red-500'
  },
  {
    id: 'simulink-ai',
    name: 'Simulink AI',
    description: 'AI-powered model-based design for embedded and control systems',
    category: 'code',
    provider: 'MathWorks',
    capabilities: ['Model-based Design', 'Control Systems', 'Code Generation', 'Hardware-in-Loop'],
    isPro: true,
    icon: '🔄',
    color: 'bg-gradient-to-r from-blue-500 to-purple-500'
  },
  {
    id: 'ansys-ai',
    name: 'ANSYS AI',
    description: 'AI-enhanced simulation for electromagnetic and RF design',
    category: 'code',
    provider: 'ANSYS',
    capabilities: ['EM Simulation', 'RF Design', 'Antenna Design', 'Signal Integrity'],
    isPro: true,
    icon: '📡',
    color: 'bg-gradient-to-r from-green-600 to-teal-600'
  },
  {
    id: 'keysight-ai',
    name: 'Keysight AI',
    description: 'AI-powered test and measurement solutions for communications',
    category: 'code',
    provider: 'Keysight',
    capabilities: ['Test Automation', '5G/6G Testing', 'Network Analysis', 'Protocol Testing'],
    isPro: true,
    icon: '📈',
    color: 'bg-gradient-to-r from-purple-500 to-pink-500'
  },
  {
    id: 'rohde-schwarz-ai',
    name: 'Rohde & Schwarz AI',
    description: 'AI-enhanced RF and microwave test equipment with intelligent analysis',
    category: 'code',
    provider: 'Rohde & Schwarz',
    capabilities: ['RF Testing', 'Spectrum Analysis', 'Network Analysis', 'EMC Testing'],
    isPro: true,
    icon: '📻',
    color: 'bg-gradient-to-r from-indigo-600 to-purple-600'
  },
  {
    id: 'nvidia-tensorrt',
    name: 'NVIDIA TensorRT',
    description: 'AI inference optimization for embedded and edge computing',
    category: 'code',
    provider: 'NVIDIA',
    capabilities: ['AI Inference', 'Model Optimization', 'Edge Computing', 'Real-time Processing'],
    isPro: true,
    icon: '🚀',
    color: 'bg-gradient-to-r from-green-500 to-black'
  },
  {
    id: 'intel-openvino',
    name: 'Intel OpenVINO',
    description: 'AI deployment toolkit for edge and embedded applications',
    category: 'code',
    provider: 'Intel',
    capabilities: ['Edge AI', 'Model Deployment', 'Performance Optimization', 'Hardware Acceleration'],
    isPro: false,
    icon: '🔧',
    color: 'bg-gradient-to-r from-blue-600 to-cyan-600'
  },
  {
    id: 'qualcomm-ai-engine',
    name: 'Qualcomm AI Engine',
    description: 'AI acceleration for mobile and IoT embedded systems',
    category: 'code',
    provider: 'Qualcomm',
    capabilities: ['Mobile AI', 'IoT Optimization', 'Power Efficiency', 'Neural Processing'],
    isPro: true,
    icon: '📱',
    color: 'bg-gradient-to-r from-red-500 to-orange-500'
  },
  {
    id: 'arm-nn',
    name: 'ARM NN',
    description: 'Neural network inference engine for ARM-based embedded systems',
    category: 'code',
    provider: 'ARM',
    capabilities: ['Neural Networks', 'ARM Optimization', 'Mobile Inference', 'Low Power'],
    isPro: false,
    icon: '🧠',
    color: 'bg-gradient-to-r from-gray-600 to-blue-600'
  },
  {
    id: 'xilinx-vitis-ai',
    name: 'Xilinx Vitis AI',
    description: 'AI development platform for FPGA-based acceleration',
    category: 'code',
    provider: 'AMD Xilinx',
    capabilities: ['FPGA AI', 'Model Quantization', 'Hardware Acceleration', 'Edge Deployment'],
    isPro: true,
    icon: '⚡',
    color: 'bg-gradient-to-r from-orange-600 to-red-600'
  },
  {
    id: 'lattice-sensai',
    name: 'Lattice sensAI',
    description: 'Low-power AI/ML inference solutions for edge applications',
    category: 'code',
    provider: 'Lattice',
    capabilities: ['Low-power AI', 'Edge Inference', 'FPGA Solutions', 'Real-time Processing'],
    isPro: true,
    icon: '🔋',
    color: 'bg-gradient-to-r from-green-500 to-teal-500'
  },
  {
    id: 'microsemi-ai',
    name: 'Microsemi AI',
    description: 'AI-enhanced FPGA solutions for aerospace and defense applications',
    category: 'code',
    provider: 'Microchip',
    capabilities: ['Aerospace AI', 'Defense Systems', 'Radiation Hardened', 'High Reliability'],
    isPro: true,
    icon: '🛡️',
    color: 'bg-gradient-to-r from-blue-700 to-indigo-700'
  },
  {
    id: 'gnuradio-ai',
    name: 'GNU Radio AI',
    description: 'AI-enhanced software-defined radio development framework',
    category: 'code',
    provider: 'GNU Radio',
    capabilities: ['SDR Development', 'Signal Processing', 'RF Protocols', 'Open Source'],
    isPro: false,
    icon: '📡',
    color: 'bg-gradient-to-r from-purple-500 to-blue-500'
  },
  {
    id: 'labview-ai',
    name: 'LabVIEW AI',
    description: 'AI-integrated graphical programming for test and measurement',
    category: 'code',
    provider: 'National Instruments',
    capabilities: ['Graphical Programming', 'Test Automation', 'Data Acquisition', 'Instrument Control'],
    isPro: true,
    icon: '🔬',
    color: 'bg-gradient-to-r from-yellow-500 to-orange-500'
  },

  // Adobe Creative Cloud AI Suite
  {
    id: 'adobe-creative-cloud-ai',
    name: 'Adobe Creative Cloud AI',
    description: 'Comprehensive AI suite integrated across all Adobe Creative applications',
    category: 'image',
    provider: 'Adobe',
    capabilities: ['Cross-app AI', 'Creative Workflows', 'Asset Generation', 'Automation'],
    isPro: true,
    icon: '🎨',
    color: 'bg-gradient-to-r from-red-500 to-orange-500'
  },
  {
    id: 'photoshop-ai',
    name: 'Photoshop AI',
    description: 'AI-powered photo editing with generative fill, expand, and neural filters',
    category: 'image',
    provider: 'Adobe',
    capabilities: ['Generative Fill', 'Content-Aware', 'Neural Filters', 'Object Removal'],
    isPro: true,
    icon: '🖼️',
    color: 'bg-gradient-to-r from-blue-600 to-purple-600'
  },
  {
    id: 'illustrator-ai',
    name: 'Illustrator AI',
    description: 'AI-enhanced vector graphics with text-to-vector and generative recolor',
    category: 'image',
    provider: 'Adobe',
    capabilities: ['Text-to-Vector', 'Generative Recolor', 'Vector Tracing', 'Pattern Generation'],
    isPro: true,
    icon: '✏️',
    color: 'bg-gradient-to-r from-orange-500 to-yellow-500'
  },
  {
    id: 'after-effects-ai',
    name: 'After Effects AI',
    description: 'AI-powered motion graphics and visual effects automation',
    category: 'video',
    provider: 'Adobe',
    capabilities: ['Motion Tracking', 'Rotoscoping', 'Content-Aware Fill', 'Auto-Animation'],
    isPro: true,
    icon: '🎬',
    color: 'bg-gradient-to-r from-purple-600 to-pink-600'
  },
  {
    id: 'premiere-pro-ai',
    name: 'Premiere Pro AI',
    description: 'AI-enhanced video editing with auto-reframe, speech enhancement, and scene detection',
    category: 'video',
    provider: 'Adobe',
    capabilities: ['Auto-Reframe', 'Speech Enhancement', 'Scene Detection', 'Color Matching'],
    isPro: true,
    icon: '🎥',
    color: 'bg-gradient-to-r from-indigo-600 to-purple-600'
  },
  {
    id: 'lightroom-ai',
    name: 'Lightroom AI',
    description: 'AI-powered photo organization and enhancement with smart editing',
    category: 'image',
    provider: 'Adobe',
    capabilities: ['Auto-Tagging', 'Smart Editing', 'Sky Replacement', 'Subject Selection'],
    isPro: true,
    icon: '📸',
    color: 'bg-gradient-to-r from-cyan-500 to-blue-500'
  },
  {
    id: 'indesign-ai',
    name: 'InDesign AI',
    description: 'AI-assisted layout design with smart text fitting and image placement',
    category: 'productivity',
    provider: 'Adobe',
    capabilities: ['Smart Layout', 'Text Fitting', 'Image Placement', 'Style Suggestions'],
    isPro: true,
    icon: '📄',
    color: 'bg-gradient-to-r from-pink-500 to-red-500'
  },
  {
    id: 'adobe-pdf-ai',
    name: 'Adobe PDF AI',
    description: 'AI-powered PDF processing with smart extraction, summarization, and editing',
    category: 'productivity',
    provider: 'Adobe',
    capabilities: ['Smart Extraction', 'PDF Summarization', 'Auto-Tagging', 'Content Analysis'],
    isPro: true,
    icon: '📋',
    color: 'bg-gradient-to-r from-red-600 to-orange-600'
  },
  {
    id: 'adobe-firefly',
    name: 'Adobe Firefly',
    description: 'Commercial-safe AI image generation integrated with Creative Cloud',
    category: 'image',
    provider: 'Adobe',
    capabilities: ['Commercial Use', 'Text Effects', 'Vector Art', 'Photo Editing'],
    isPro: true,
    icon: '🔥',
    color: 'bg-gradient-to-r from-orange-500 to-red-500'
  },

  // Microsoft Office AI Suite
  {
    id: 'microsoft-365-copilot',
    name: 'Microsoft 365 Copilot',
    description: 'AI assistant integrated across all Microsoft Office applications',
    category: 'productivity',
    provider: 'Microsoft',
    capabilities: ['Cross-app Integration', 'Document Analysis', 'Meeting Summaries', 'Email Drafting'],
    isPro: true,
    icon: '🤝',
    color: 'bg-gradient-to-r from-blue-600 to-indigo-600'
  },
  {
    id: 'word-ai',
    name: 'Word AI (Copilot)',
    description: 'AI-powered document creation, editing, and formatting in Microsoft Word',
    category: 'productivity',
    provider: 'Microsoft',
    capabilities: ['Document Generation', 'Writing Assistance', 'Formatting', 'Research Integration'],
    isPro: true,
    icon: '📝',
    color: 'bg-gradient-to-r from-blue-500 to-cyan-500'
  },
  {
    id: 'excel-ai',
    name: 'Excel AI (Copilot)',
    description: 'AI-enhanced spreadsheet analysis, formula generation, and data insights',
    category: 'productivity',
    provider: 'Microsoft',
    capabilities: ['Formula Generation', 'Data Analysis', 'Chart Creation', 'Trend Prediction'],
    isPro: true,
    icon: '📊',
    color: 'bg-gradient-to-r from-green-500 to-teal-500'
  },
  {
    id: 'powerpoint-ai',
    name: 'PowerPoint AI (Copilot)',
    description: 'AI-powered presentation creation with design suggestions and content generation',
    category: 'productivity',
    provider: 'Microsoft',
    capabilities: ['Slide Generation', 'Design Suggestions', 'Content Creation', 'Speaker Notes'],
    isPro: true,
    icon: '📊',
    color: 'bg-gradient-to-r from-orange-500 to-red-500'
  },
  {
    id: 'outlook-ai',
    name: 'Outlook AI (Copilot)',
    description: 'AI-enhanced email management with smart composition and scheduling',
    category: 'productivity',
    provider: 'Microsoft',
    capabilities: ['Email Drafting', 'Smart Scheduling', 'Priority Inbox', 'Meeting Summaries'],
    isPro: true,
    icon: '📧',
    color: 'bg-gradient-to-r from-blue-600 to-purple-600'
  },
  {
    id: 'teams-ai',
    name: 'Teams AI (Copilot)',
    description: 'AI-powered collaboration with meeting transcription and action items',
    category: 'productivity',
    provider: 'Microsoft',
    capabilities: ['Meeting Transcription', 'Action Items', 'Chat Summaries', 'Collaboration'],
    isPro: true,
    icon: '👥',
    color: 'bg-gradient-to-r from-purple-600 to-indigo-600'
  },

  // Google Workspace AI
  {
    id: 'google-docs-ai',
    name: 'Google Docs AI',
    description: 'AI writing assistance and document generation in Google Docs',
    category: 'productivity',
    provider: 'Google',
    capabilities: ['Writing Assistance', 'Document Generation', 'Grammar Check', 'Style Suggestions'],
    isPro: true,
    icon: '📄',
    color: 'bg-gradient-to-r from-blue-500 to-green-500'
  },
  {
    id: 'google-sheets-ai',
    name: 'Google Sheets AI',
    description: 'AI-powered spreadsheet analysis and formula generation',
    category: 'productivity',
    provider: 'Google',
    capabilities: ['Formula Generation', 'Data Analysis', 'Smart Fill', 'Chart Insights'],
    isPro: true,
    icon: '📈',
    color: 'bg-gradient-to-r from-green-500 to-teal-500'
  },
  {
    id: 'google-slides-ai',
    name: 'Google Slides AI',
    description: 'AI-enhanced presentation creation with smart design and content suggestions',
    category: 'productivity',
    provider: 'Google',
    capabilities: ['Design Suggestions', 'Content Generation', 'Image Recommendations', 'Layout Optimization'],
    isPro: true,
    icon: '🎯',
    color: 'bg-gradient-to-r from-yellow-500 to-orange-500'
  },

  // Translation Tools
  {
    id: 'google-translate',
    name: 'Google Translate',
    description: 'Free multilingual machine translation service supporting 100+ languages',
    category: 'translation',
    provider: 'Google',
    capabilities: ['100+ Languages', 'Real-time Translation', 'Camera Translation', 'Conversation Mode'],
    isPro: false,
    icon: '🌐',
    color: 'bg-gradient-to-r from-blue-500 to-green-500'
  },

  // Video Creation Tools
  {
    id: 'capcut',
    name: 'CapCut',
    description: 'AI-powered video editing with automated effects, transitions, and content creation',
    category: 'video',
    provider: 'ByteDance',
    capabilities: ['Auto-editing', 'AI Effects', 'Template Generation', 'Social Media Optimization'],
    isPro: false,
    icon: '✂️',
    color: 'bg-gradient-to-r from-pink-500 to-red-500'
  },

  // Workflow Automation
  {
    id: 'zapier',
    name: 'Zapier',
    description: 'Workflow automation platform connecting 5000+ apps with AI-powered automation',
    category: 'productivity',
    provider: 'Zapier',
    capabilities: ['App Integration', 'Workflow Automation', '5000+ Apps', 'AI Automation'],
    isPro: true,
    icon: '⚡',
    color: 'bg-gradient-to-r from-orange-500 to-yellow-500'
  },
  {
    id: 'n8n',
    name: 'n8n',
    description: 'Open-source workflow automation with AI integration and custom nodes',
    category: 'productivity',
    provider: 'n8n',
    capabilities: ['Open Source', 'Custom Workflows', 'AI Integration', 'Self-hosted'],
    isPro: false,
    icon: '🔗',
    color: 'bg-gradient-to-r from-purple-500 to-blue-500'
  },

  // Robotics & Physical AI
  {
    id: 'assembly-robots',
    name: 'Assembly Line Robots',
    description: 'AI-powered industrial robots for manufacturing and assembly automation',
    category: 'productivity',
    provider: 'Various',
    capabilities: ['Manufacturing', 'Assembly Automation', 'Quality Control', 'Precision Tasks'],
    isPro: true,
    icon: '🤖',
    color: 'bg-gradient-to-r from-gray-600 to-blue-600'
  },
  {
    id: 'surgical-robots',
    name: 'Surgical Robots',
    description: 'AI-assisted robotic surgery systems for precision medical procedures',
    category: 'productivity',
    provider: 'Medical',
    capabilities: ['Precision Surgery', 'Minimally Invasive', 'AI Assistance', 'Medical Procedures'],
    isPro: true,
    icon: '🏥',
    color: 'bg-gradient-to-r from-red-500 to-pink-500'
  },
  {
    id: 'agricultural-robots',
    name: 'Agricultural Robots',
    description: 'AI-powered farming robots for crop monitoring, harvesting, and field management',
    category: 'productivity',
    provider: 'AgTech',
    capabilities: ['Crop Monitoring', 'Automated Harvesting', 'Field Management', 'Precision Agriculture'],
    isPro: true,
    icon: '🚜',
    color: 'bg-gradient-to-r from-green-500 to-yellow-500'
  },
  {
    id: 'service-robots',
    name: 'Service Robots',
    description: 'AI-powered service robots for hospitality, cleaning, and customer assistance',
    category: 'productivity',
    provider: 'Service Industry',
    capabilities: ['Customer Service', 'Cleaning Automation', 'Hospitality', 'Personal Assistance'],
    isPro: true,
    icon: '🤝',
    color: 'bg-gradient-to-r from-cyan-500 to-blue-500'
  },

  // Multimodal & Vision Models
  {
    id: 'openai-sora',
    name: 'OpenAI Sora',
    description: 'Revolutionary text-to-video AI creating realistic and imaginative scenes',
    category: 'video',
    provider: 'OpenAI',
    capabilities: ['Text-to-Video', 'Realistic Scenes', 'Long Duration', 'High Quality'],
    isPro: true,
    icon: '🎬',
    color: 'bg-gradient-to-r from-purple-600 to-pink-600'
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'Artistic AI that creates beautiful, imaginative images',
    category: 'image',
    provider: 'Midjourney',
    capabilities: ['Artistic', 'Creative', 'Fantasy', 'Portraits'],
    isPro: true,
    icon: '🌟',
    color: 'bg-gradient-to-r from-indigo-500 to-purple-500'
  },
  {
    id: 'stable-diffusion',
    name: 'Stable Diffusion',
    description: 'Open-source image generation with customizable parameters',
    category: 'image',
    provider: 'Stability AI',
    capabilities: ['Text-to-Image', 'Inpainting', 'Outpainting', 'Style Transfer'],
    isPro: false,
    icon: '🖼️',
    color: 'bg-gradient-to-r from-emerald-500 to-teal-500'
  },
  {
    id: 'leonardo',
    name: 'Leonardo AI',
    description: 'Advanced AI art generator with fine-tuned models and controls',
    category: 'image',
    provider: 'Leonardo',
    capabilities: ['Fine-tuned Models', 'Advanced Controls', 'Commercial Use', 'High Resolution'],
    isPro: true,
    icon: '🎨',
    color: 'bg-gradient-to-r from-orange-500 to-red-500'
  },
  {
    id: 'runway-ml',
    name: 'Runway ML',
    description: 'AI-powered video generation and editing tools',
    category: 'video',
    provider: 'Runway',
    capabilities: ['Video Generation', 'Editing', 'Effects', 'Green Screen'],
    isPro: true,
    icon: '🎥',
    color: 'bg-gradient-to-r from-red-500 to-pink-500'
  },
  {
    id: 'stable-virtual-camera',
    name: 'Stable Virtual Camera',
    description: 'Create 3D scenes from 2D images with AI-powered depth estimation',
    category: 'image',
    provider: 'Stability AI',
    capabilities: ['2D to 3D', 'Depth Estimation', 'Virtual Camera', '3D Scenes'],
    isPro: true,
    icon: '📷',
    color: 'bg-gradient-to-r from-teal-500 to-cyan-500'
  },
  {
    id: 'google-cloud-vision',
    name: 'Google Cloud Vision API',
    description: 'Powerful image recognition and analysis with ML capabilities',
    category: 'image',
    provider: 'Google',
    capabilities: ['Image Recognition', 'OCR', 'Object Detection', 'Face Detection'],
    isPro: true,
    icon: '👁️',
    color: 'bg-gradient-to-r from-blue-500 to-green-500'
  },
  {
    id: 'luma-ai',
    name: 'Luma AI',
    description: 'AI-powered 3D modeling and scene reconstruction from images',
    category: 'image',
    provider: 'Luma',
    capabilities: ['3D Modeling', 'Scene Reconstruction', 'NeRF Technology', 'Photogrammetry'],
    isPro: true,
    icon: '🏗️',
    color: 'bg-gradient-to-r from-purple-500 to-indigo-500'
  },

  // Audio, Speech & Music
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    description: 'Realistic voice synthesis and cloning technology',
    category: 'voice',
    provider: 'ElevenLabs',
    capabilities: ['Voice Cloning', 'Text-to-Speech', 'Multilingual', 'Emotional'],
    isPro: true,
    icon: '🎤',
    color: 'bg-gradient-to-r from-purple-600 to-blue-600'
  },
  {
    id: 'murf',
    name: 'Murf AI',
    description: 'Professional AI voice generator for content creation',
    category: 'voice',
    provider: 'Murf',
    capabilities: ['Voice Generation', 'Customization', 'Professional', 'Multilingual'],
    isPro: true,
    icon: '🗣️',
    color: 'bg-gradient-to-r from-indigo-500 to-blue-500'
  },
  {
    id: 'suno',
    name: 'Suno',
    description: 'AI music generation from text prompts with vocals and instruments',
    category: 'voice',
    provider: 'Suno',
    capabilities: ['Music Generation', 'Vocals', 'Instruments', 'Custom Lyrics'],
    isPro: true,
    icon: '🎵',
    color: 'bg-gradient-to-r from-pink-500 to-purple-500'
  },
  {
    id: 'play-ht',
    name: 'Play.ht',
    description: 'Ultra-realistic AI voice generator with emotional expression',
    category: 'voice',
    provider: 'Play.ht',
    capabilities: ['Ultra-realistic', 'Emotional Expression', 'Voice Cloning', 'API'],
    isPro: true,
    icon: '▶️',
    color: 'bg-gradient-to-r from-green-500 to-teal-500'
  },
  {
    id: 'descript',
    name: 'Descript',
    description: 'AI-powered audio and video editing with voice synthesis',
    category: 'voice',
    provider: 'Descript',
    capabilities: ['Audio Editing', 'Video Editing', 'Voice Synthesis', 'Transcription'],
    isPro: true,
    icon: '🎬',
    color: 'bg-gradient-to-r from-orange-500 to-red-500'
  },
  {
    id: 'azure-tts',
    name: 'Azure Text to Speech',
    description: 'Enterprise-grade speech synthesis with neural voices',
    category: 'voice',
    provider: 'Microsoft',
    capabilities: ['Enterprise-grade', 'Neural Voices', 'SSML', 'Custom Voices'],
    isPro: true,
    icon: '☁️',
    color: 'bg-gradient-to-r from-blue-600 to-cyan-600'
  },
  {
    id: 'nvidia-riva',
    name: 'NVIDIA Riva',
    description: 'GPU-accelerated speech AI SDK for real-time applications',
    category: 'voice',
    provider: 'NVIDIA',
    capabilities: ['GPU-accelerated', 'Real-time', 'Speech Recognition', 'TTS'],
    isPro: true,
    icon: '🚀',
    color: 'bg-gradient-to-r from-green-600 to-black'
  },

  // Productivity & Writing
  {
    id: 'canva-magic-studio',
    name: 'Canva Magic Studio',
    description: 'AI-powered design suite with text-to-image and editing tools',
    category: 'productivity',
    provider: 'Canva',
    capabilities: ['Design Automation', 'Text-to-Image', 'Brand Kit', 'Templates'],
    isPro: true,
    icon: '🎨',
    color: 'bg-gradient-to-r from-purple-500 to-pink-500'
  },
  {
    id: 'deepl',
    name: 'DeepL',
    description: 'High-quality AI translation with nuanced understanding',
    category: 'translation',
    provider: 'DeepL',
    capabilities: ['Translation', 'High Quality', 'Context Aware', 'Professional'],
    isPro: true,
    icon: '🌍',
    color: 'bg-gradient-to-r from-blue-500 to-green-500'
  },
  {
    id: 'grammarly',
    name: 'Grammarly',
    description: 'AI-powered writing assistant for grammar and style',
    category: 'productivity',
    provider: 'Grammarly',
    capabilities: ['Grammar Check', 'Style', 'Tone', 'Plagiarism'],
    isPro: true,
    icon: '✅',
    color: 'bg-gradient-to-r from-green-600 to-teal-600'
  },
  {
    id: 'quillbot',
    name: 'QuillBot',
    description: 'AI paraphrasing and writing enhancement tool',
    category: 'productivity',
    provider: 'QuillBot',
    capabilities: ['Paraphrasing', 'Grammar Check', 'Summarizer', 'Citation Generator'],
    isPro: true,
    icon: '🪶',
    color: 'bg-gradient-to-r from-blue-500 to-purple-500'
  },
  {
    id: 'wordtune',
    name: 'Wordtune',
    description: 'AI writing companion that understands context and meaning',
    category: 'productivity',
    provider: 'Wordtune',
    capabilities: ['Rewriting', 'Tone Adjustment', 'Shortening', 'Expanding'],
    isPro: true,
    icon: '🎯',
    color: 'bg-gradient-to-r from-indigo-500 to-blue-500'
  },
  {
    id: 'copy-ai',
    name: 'Copy.ai',
    description: 'AI copywriting tool for marketing and business content',
    category: 'productivity',
    provider: 'Copy.ai',
    capabilities: ['Copywriting', 'Marketing Content', 'Social Media', 'Email'],
    isPro: true,
    icon: '📝',
    color: 'bg-gradient-to-r from-green-500 to-blue-500'
  },
  {
    id: 'jasper',
    name: 'Jasper AI',
    description: 'AI writing assistant for marketing and business content',
    category: 'productivity',
    provider: 'Jasper',
    capabilities: ['Marketing Copy', 'Blog Posts', 'Emails', 'Social Media'],
    isPro: true,
    icon: '✍️',
    color: 'bg-gradient-to-r from-violet-500 to-purple-500'
  },
  {
    id: 'notion-ai-qa',
    name: 'Notion AI Q&A',
    description: 'AI-powered knowledge management and question answering',
    category: 'productivity',
    provider: 'Notion',
    capabilities: ['Knowledge Management', 'Q&A', 'Document Search', 'Summarization'],
    isPro: true,
    icon: '❓',
    color: 'bg-gradient-to-r from-gray-600 to-gray-800'
  },
  {
    id: 'hyperwrite',
    name: 'HyperWrite',
    description: 'AI writing assistant with research and fact-checking capabilities',
    category: 'productivity',
    provider: 'HyperWrite',
    capabilities: ['Writing Assistance', 'Research', 'Fact-checking', 'Citations'],
    isPro: true,
    icon: '⚡',
    color: 'bg-gradient-to-r from-orange-500 to-red-500'
  },
  {
    id: 'rytr',
    name: 'Rytr',
    description: 'AI writing assistant for various content types and tones',
    category: 'productivity',
    provider: 'Rytr',
    capabilities: ['Content Writing', 'Multiple Tones', 'Templates', 'Plagiarism Check'],
    isPro: true,
    icon: '📄',
    color: 'bg-gradient-to-r from-teal-500 to-green-500'
  },
  {
    id: 'firebase-studio',
    name: 'Firebase Studio',
    description: 'AI-powered Firebase development and database management assistant',
    category: 'productivity',
    provider: 'Google',
    capabilities: ['Database Design', 'Security Rules', 'Cloud Functions', 'Performance'],
    isPro: true,
    icon: '🔥',
    color: 'bg-gradient-to-r from-orange-500 to-yellow-500'
  },

  // Virtual Assistants & Agents
  {
    id: 'microsoft-copilot',
    name: 'Microsoft Copilot',
    description: 'AI assistant integrated across Microsoft 365 and Windows',
    category: 'productivity',
    provider: 'Microsoft',
    capabilities: ['Office Integration', 'Windows Integration', 'Web Search', 'Productivity'],
    isPro: true,
    icon: '🤝',
    color: 'bg-gradient-to-r from-blue-600 to-indigo-600'
  },
  {
    id: 'google-assistant',
    name: 'Google Assistant',
    description: 'Voice-activated AI assistant for smart devices and search',
    category: 'productivity',
    provider: 'Google',
    capabilities: ['Voice Control', 'Smart Home', 'Search', 'Scheduling'],
    isPro: false,
    icon: '🎙️',
    color: 'bg-gradient-to-r from-blue-500 to-green-500'
  },
  {
    id: 'siri',
    name: 'Siri',
    description: 'Apple\'s intelligent assistant for iOS, macOS, and Apple devices',
    category: 'productivity',
    provider: 'Apple',
    capabilities: ['Voice Control', 'Device Integration', 'Shortcuts', 'Privacy-focused'],
    isPro: false,
    icon: '🍎',
    color: 'bg-gradient-to-r from-gray-600 to-black'
  },
  {
    id: 'alexa',
    name: 'Alexa',
    description: 'Amazon\'s cloud-based voice service for smart home and commerce',
    category: 'productivity',
    provider: 'Amazon',
    capabilities: ['Smart Home', 'Voice Commerce', 'Skills', 'Music'],
    isPro: false,
    icon: '🔊',
    color: 'bg-gradient-to-r from-blue-600 to-cyan-600'
  },
  {
    id: 'pi',
    name: 'Pi',
    description: 'Personal AI assistant focused on helpful, harmless conversations',
    category: 'text',
    provider: 'Inflection AI',
    capabilities: ['Personal Assistant', 'Conversational', 'Helpful', 'Emotional Intelligence'],
    isPro: false,
    icon: '🥧',
    color: 'bg-gradient-to-r from-pink-500 to-rose-500'
  },
  {
    id: 'poe',
    name: 'Poe',
    description: 'Platform for accessing multiple AI chatbots in one interface',
    category: 'text',
    provider: 'Quora',
    capabilities: ['Multiple Models', 'Chat Interface', 'Model Comparison', 'Custom Bots'],
    isPro: true,
    icon: '🎭',
    color: 'bg-gradient-to-r from-red-500 to-pink-500'
  },
  {
    id: 'janitor-ai',
    name: 'Janitor AI',
    description: 'Customizable AI chatbot platform for various use cases',
    category: 'text',
    provider: 'Janitor AI',
    capabilities: ['Custom Chatbots', 'Character Creation', 'Role-playing', 'NSFW Support'],
    isPro: true,
    icon: '🧹',
    color: 'bg-gradient-to-r from-gray-500 to-blue-500'
  },

  // Specialized & Enterprise Models
  {
    id: 'harvey',
    name: 'Harvey',
    description: 'AI legal assistant for law firms and legal professionals',
    category: 'productivity',
    provider: 'Harvey',
    capabilities: ['Legal Research', 'Document Review', 'Contract Analysis', 'Case Law'],
    isPro: true,
    icon: '⚖️',
    color: 'bg-gradient-to-r from-blue-700 to-indigo-700'
  },
  {
    id: 'textio',
    name: 'Textio',
    description: 'AI-powered writing platform for inclusive and effective communication',
    category: 'productivity',
    provider: 'Textio',
    capabilities: ['Inclusive Writing', 'Job Descriptions', 'Performance Reviews', 'Analytics'],
    isPro: true,
    icon: '📊',
    color: 'bg-gradient-to-r from-teal-600 to-blue-600'
  },
  {
    id: 'cvviz',
    name: 'CVViZ',
    description: 'AI-powered recruitment and resume screening platform',
    category: 'productivity',
    provider: 'CVViZ',
    capabilities: ['Resume Screening', 'Candidate Matching', 'Interview Scheduling', 'Analytics'],
    isPro: true,
    icon: '👥',
    color: 'bg-gradient-to-r from-green-600 to-teal-600'
  },
  {
    id: 'tidio-ai',
    name: 'Tidio AI',
    description: 'AI-powered customer service and live chat automation',
    category: 'productivity',
    provider: 'Tidio',
    capabilities: ['Live Chat', 'Customer Service', 'Automation', 'Integration'],
    isPro: true,
    icon: '💬',
    color: 'bg-gradient-to-r from-purple-600 to-pink-600'
  },
  {
    id: 'consensus',
    name: 'Consensus',
    description: 'AI-powered research tool for finding and analyzing scientific papers',
    category: 'productivity',
    provider: 'Consensus',
    capabilities: ['Research', 'Scientific Papers', 'Evidence Synthesis', 'Citations'],
    isPro: true,
    icon: '🔬',
    color: 'bg-gradient-to-r from-blue-600 to-purple-600'
  },
  {
    id: 'deep-research',
    name: 'Deep Research',
    description: 'AI research assistant for data analysis and summarization',
    category: 'productivity',
    provider: 'Deep Research',
    capabilities: ['Data Analysis', 'Research Summarization', 'Insights', 'Reports'],
    isPro: true,
    icon: '📈',
    color: 'bg-gradient-to-r from-indigo-600 to-blue-600'
  },

  // Legacy models for compatibility
  {
    id: 'whisper',
    name: 'Whisper',
    description: 'Automatic speech recognition with high accuracy',
    category: 'voice',
    provider: 'OpenAI',
    capabilities: ['Speech-to-Text', 'Multilingual', 'Transcription', 'Translation'],
    isPro: false,
    icon: '🎧',
    color: 'bg-gradient-to-r from-teal-500 to-cyan-500'
  },
  {
    id: 'dall-e-3',
    name: 'DALL-E 3',
    description: 'Create stunning, detailed images from text descriptions',
    category: 'image',
    provider: 'OpenAI',
    capabilities: ['Text-to-Image', 'High Resolution', 'Artistic Styles', 'Photorealistic'],
    isPro: true,
    icon: '🎨',
    color: 'bg-gradient-to-r from-pink-500 to-violet-500'
  }
];