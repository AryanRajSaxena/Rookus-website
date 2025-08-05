import React, { useEffect, useRef, useState } from 'react';
import { Brain, Zap, Target, Search, Image, MessageSquare, BarChart3, Upload } from 'lucide-react';

const ModelVisualization = () => {
  const [activeLayer, setActiveLayer] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const layers = [
    {
      id: 1,
      title: "User Input & Intent Understanding",
      icon: MessageSquare,
      color: "from-blue-500 to-blue-600",
      description: "Natural language processing and intent detection",
      components: ["UI (Gradio/React/Streamlit)", "NLP Parser"],
      models: ["Intent Detection: DistilBERT/T5/MiniLM", "NER: spaCy/BERT", "Prompt-to-Plan: GPT-3.5/Mistral"],
      example: '"Promote organic skincare with pink Gen Z theme"'
    },
    {
      id: 2,
      title: "Market Insight & Ad Scraping",
      icon: Search,
      color: "from-purple-500 to-purple-600",
      description: "Analyze top ad trends and market data",
      components: ["Scrapy/Playwright crawler", "Keyword Extractor", "Semantic Ad Search"],
      models: ["Sentence-BERT for embeddings", "BM25 + ColBERT for reranking", "Regex + NLP Rules"],
      example: "Analyzing competitor campaigns and trending keywords"
    },
    {
      id: 3,
      title: "Ad Script Generation",
      icon: Brain,
      color: "from-emerald-500 to-emerald-600",
      description: "Generate compelling ad copy in different styles",
      components: ["Prompt-tuned LLM", "Persona/tone conditioning", "Style adapters"],
      models: ["Mistral/GPT-3.5/LLaMA-3", "CTRL/Zest for emotion control", "LangChain formatting"],
      example: "Creating persuasive copy tailored to target audience"
    },
    {
      id: 4,
      title: "Poster Generation (Text-to-Image)",
      icon: Image,
      color: "from-orange-500 to-orange-600",
      description: "Create visual posters from descriptions",
      components: ["Text-to-Image generator", "Aesthetic scoring", "Style presets"],
      models: ["SDXL/DALLE-3", "CLIP + LAION aesthetic scorer", "ControlNet, GFPGAN (optional)"],
      example: "Generating visually appealing campaign posters"
    },
    {
      id: 5,
      title: "Tagline & CTA Creator",
      icon: Target,
      color: "from-pink-500 to-pink-600",
      description: "Create emotional taglines and call-to-actions",
      components: ["CTA templates + AIDA logic", "Tone matching"],
      models: ["GPT-2 fine-tuned on ad taglines", "AIDA Prompt Templates", "WordNet + BERT"],
      example: "Crafting compelling headlines and action phrases"
    },
    {
      id: 6,
      title: "Feedback & Editor",
      icon: Zap,
      color: "from-cyan-500 to-cyan-600",
      description: "Enable edits and refinement",
      components: ["Feedback intent handler", "Prompt rewriter", "Editable WYSIWYG UI"],
      models: ["MiniLM/LLaMA2 for intent", "LangChain prompt rewriter", "ControlNet Inpainting"],
      example: "Iterative improvement based on user feedback"
    },
    {
      id: 7,
      title: "A/B Testing & Performance",
      icon: BarChart3,
      color: "from-indigo-500 to-indigo-600",
      description: "Suggest variants and predict impact",
      components: ["Multi-version generator", "CTR predictor", "Conversion estimator"],
      models: ["Ad Scorer: Embedding Classifier", "CTR Predictor: LSTM/XGBoost", "AutoML: AutoGluon/LightGBM"],
      example: "Optimizing campaigns through data-driven insights"
    },
    {
      id: 8,
      title: "Campaign Deployment (Optional)",
      icon: Upload,
      color: "from-red-500 to-red-600",
      description: "Publish directly to ad platforms",
      components: ["Facebook/Google/Instagram API", "Scheduler + Formatter"],
      models: ["Caption Generator", "Meta Ad API handlers"],
      example: "Seamless integration with major advertising platforms"
    }
  ];

  useEffect(() => {
    const startAnimation = () => {
      setIsAnimating(true);
      intervalRef.current = setInterval(() => {
        setActiveLayer((prev) => (prev + 1) % layers.length);
      }, 3000);
    };

    const timer = setTimeout(startAnimation, 1000);

    return () => {
      clearTimeout(timer);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleLayerClick = (index: number) => {
    setActiveLayer(index);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-emerald-500/3 to-blue-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            AI Model Architecture
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Explore our sophisticated 8-layer AI system that transforms simple text prompts 
            into complete fashion design campaigns with intelligent automation.
          </p>
        </div>

        {/* Model Visualization */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Layer Flow Visualization */}
          <div className="relative">
            <div className="glassmorphism p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Data Flow Pipeline</h3>
              
              <div className="space-y-4">
                {layers.map((layer, index) => {
                  const Icon = layer.icon;
                  const isActive = activeLayer === index;
                  const isPassed = activeLayer > index;
                  
                  return (
                    <div key={layer.id} className="relative">
                      {/* Connection Line */}
                      {index < layers.length - 1 && (
                        <div className="absolute left-6 top-12 w-0.5 h-8 bg-slate-600">
                          <div 
                            className={`w-full bg-gradient-to-b ${layer.color} transition-all duration-1000 ${
                              isPassed ? 'h-full' : isActive ? 'h-1/2' : 'h-0'
                            }`}
                          />
                        </div>
                      )}
                      
                      {/* Layer Node */}
                      <div 
                        className={`flex items-center space-x-4 p-4 rounded-2xl cursor-pointer transition-all duration-500 ${
                          isActive 
                            ? 'bg-white/10 scale-105 shadow-2xl' 
                            : isPassed 
                            ? 'bg-white/5' 
                            : 'bg-white/2 hover:bg-white/5'
                        }`}
                        onClick={() => handleLayerClick(index)}
                      >
                        <div className={`relative w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r ${layer.color} ${
                          isActive ? 'animate-pulse' : ''
                        }`}>
                          <Icon className="w-6 h-6 text-white" />
                          {isActive && (
                            <div className="absolute inset-0 rounded-xl bg-white/20 animate-ping"></div>
                          )}
                        </div>
                        
                        <div className="flex-1">
                          <h4 className={`font-semibold transition-colors ${
                            isActive ? 'text-white' : 'text-slate-300'
                          }`}>
                            Layer {layer.id}: {layer.title}
                          </h4>
                          <p className={`text-sm transition-colors ${
                            isActive ? 'text-slate-200' : 'text-slate-400'
                          }`}>
                            {layer.description}
                          </p>
                        </div>
                        
                        <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          isPassed 
                            ? `bg-gradient-to-r ${layer.color}` 
                            : isActive 
                            ? `bg-gradient-to-r ${layer.color} animate-pulse` 
                            : 'bg-slate-600'
                        }`} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Layer Details */}
          <div className="space-y-6">
            <div className="glassmorphism p-8 rounded-3xl">
              <div className="flex items-center space-x-4 mb-6">
                {React.createElement(layers[activeLayer].icon, {
                  className: `w-8 h-8 text-white`
                })}
                <h3 className="text-2xl font-bold text-white">
                  Layer {layers[activeLayer].id}: {layers[activeLayer].title}
                </h3>
              </div>
              
              <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                {layers[activeLayer].description}
              </p>

              {/* Components */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Components:</h4>
                <div className="space-y-2">
                  {layers[activeLayer].components.map((component, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-slate-300">{component}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Models */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">AI Models:</h4>
                <div className="space-y-2">
                  {layers[activeLayer].models.map((model, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-slate-300 font-mono text-sm">{model}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Example */}
              <div className="glassmorphism p-4 rounded-2xl">
                <h4 className="text-sm font-semibold text-blue-400 mb-2">Example:</h4>
                <p className="text-slate-300 italic">{layers[activeLayer].example}</p>
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="glassmorphism p-6 rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white font-medium">Processing Progress</span>
                <span className="text-slate-300 text-sm">
                  {activeLayer + 1} / {layers.length}
                </span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full bg-gradient-to-r ${layers[activeLayer].color} transition-all duration-1000`}
                  style={{ width: `${((activeLayer + 1) / layers.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Controls */}
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => handleLayerClick(Math.max(0, activeLayer - 1))}
                disabled={activeLayer === 0}
                className="px-6 py-2 bg-slate-700 text-white rounded-full hover:bg-slate-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <button
                onClick={() => {
                  if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                    intervalRef.current = null;
                    setIsAnimating(false);
                  } else {
                    setIsAnimating(true);
                    intervalRef.current = setInterval(() => {
                      setActiveLayer((prev) => (prev + 1) % layers.length);
                    }, 3000);
                  }
                }}
                className={`px-6 py-2 rounded-full transition-colors ${
                  isAnimating 
                    ? 'bg-red-500 hover:bg-red-600 text-white' 
                    : 'bg-green-500 hover:bg-green-600 text-white'
                }`}
              >
                {isAnimating ? 'Pause' : 'Auto Play'}
              </button>
              <button
                onClick={() => handleLayerClick(Math.min(layers.length - 1, activeLayer + 1))}
                disabled={activeLayer === layers.length - 1}
                className="px-6 py-2 bg-slate-700 text-white rounded-full hover:bg-slate-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 animate-fade-in-up delay-600">
          <div className="glassmorphism p-6 rounded-2xl text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">8 AI Layers</h3>
            <p className="text-slate-300 text-sm">Sophisticated multi-stage processing pipeline</p>
          </div>

          <div className="glassmorphism p-6 rounded-2xl text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">15+ AI Models</h3>
            <p className="text-slate-300 text-sm">State-of-the-art language and vision models</p>
          </div>

          <div className="glassmorphism p-6 rounded-2xl text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">End-to-End</h3>
            <p className="text-slate-300 text-sm">Complete automation from input to deployment</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelVisualization;