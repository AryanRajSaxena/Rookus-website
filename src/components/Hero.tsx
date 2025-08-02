import React from 'react';
import { ArrowRight, Zap, Palette, Cpu } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glassmorphism text-blue-300 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Rs. 5 Lakh Grant Recipient
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Design Fashion with
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent block mt-2">
              AI-Powered Precision
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your creative vision into custom clothing designs through simple text prompts. 
            The future of fashion design is here.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold text-lg flex items-center shadow-2xl hover:shadow-blue-500/25">
              Start Creating
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="glassmorphism text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-center">
            <div className="glassmorphism px-6 py-4 rounded-2xl">
              <div className="text-2xl font-bold text-white">14</div>
              <div className="text-slate-400 text-sm">Team Members</div>
            </div>
            <div className="glassmorphism px-6 py-4 rounded-2xl">
              <div className="text-2xl font-bold text-white">2024</div>
              <div className="text-slate-400 text-sm">Founded</div>
            </div>
            <div className="glassmorphism px-6 py-4 rounded-2xl">
              <div className="text-2xl font-bold text-white">AI-First</div>
              <div className="text-slate-400 text-sm">Platform</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;