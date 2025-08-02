import React from 'react';
import { MessageSquare, Sparkles, Download, Zap } from 'lucide-react';

const Platform = () => {
  const clothingImages = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "AI-generated casual t-shirt design",
      category: "T-Shirts",
      prompt: "Modern minimalist t-shirt with geometric patterns"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "AI-generated elegant dress design",
      category: "Dresses",
      prompt: "Elegant evening dress with flowing fabric"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "AI-generated denim jacket design",
      category: "Jackets",
      prompt: "Vintage-inspired denim jacket with modern cuts"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "AI-generated formal pants design",
      category: "Pants",
      prompt: "Professional tailored pants with slim fit"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "AI-generated casual hoodie design",
      category: "Hoodies",
      prompt: "Comfortable oversized hoodie with urban style"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "AI-generated summer blouse design",
      category: "Blouses",
      prompt: "Light summer blouse with floral accents"
    }
  ];

  return (
    <section id="platform" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            AI-Generated Fashion Gallery
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Discover the endless possibilities of AI-powered fashion design. Each piece below 
            was created from simple text descriptions using our advanced technology.
          </p>
        </div>

        {/* AI Clothing Showcase */}
        <div className="mb-16 animate-fade-in-up delay-200">
          <div className="max-w-6xl mx-auto">
            {/* Showcase Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {clothingImages.map((item, index) => (
                <div
                  key={item.id}
                  className={`group glassmorphism rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium text-blue-400 bg-blue-500/20 px-2 py-1 rounded-full">
                            {item.category}
                          </span>
                          <div className="flex items-center space-x-1">
                            <Zap className="w-3 h-3 text-yellow-400" />
                            <span className="text-xs text-yellow-400">AI Generated</span>
                          </div>
                        </div>
                        <p className="text-white text-sm font-medium leading-tight">
                          "{item.prompt}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Showcase Stats */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="glassmorphism px-6 py-3 rounded-full text-center">
                <span className="text-2xl font-bold text-white">1000+</span>
                <span className="text-slate-400 text-sm ml-2">Designs Created</span>
              </div>
              <div className="glassmorphism px-6 py-3 rounded-full text-center">
                <span className="text-2xl font-bold text-white">50+</span>
                <span className="text-slate-400 text-sm ml-2">Style Categories</span>
              </div>
              <div className="glassmorphism px-6 py-3 rounded-full text-center">
                <span className="text-2xl font-bold text-white">24/7</span>
                <span className="text-slate-400 text-sm ml-2">AI Availability</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Steps */}
        <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up delay-400">
          <div className="text-center group">
            <div className="glassmorphism w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <MessageSquare className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Describe Your Vision</h3>
            <p className="text-slate-300 leading-relaxed">
              Simply type what you want to create. Our AI understands natural language 
              and translates your ideas into fashion concepts.
            </p>
          </div>

          <div className="text-center group">
            <div className="glassmorphism w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">AI Magic Happens</h3>
            <p className="text-slate-300 leading-relaxed">
              Our advanced AI processes your description and generates multiple design 
              variations with precise attention to detail.
            </p>
          </div>

          <div className="text-center group">
            <div className="glassmorphism w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Download className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Download & Create</h3>
            <p className="text-slate-300 leading-relaxed">
              Get high-resolution designs ready for production, complete with 
              specifications and manufacturing guidelines.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in-up delay-600">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold text-lg shadow-2xl hover:shadow-blue-500/25">
            Start Creating Your Designs
          </button>
          <p className="text-slate-400 text-sm mt-3">No credit card required • Free trial available</p>
        </div>
      </div>
    </section>
  );
};

export default Platform;