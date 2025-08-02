import React from 'react';
import { Target, Lightbulb, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Our Story
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Born from innovation and driven by passion, Rookus is reshaping the future 
            of fashion design through artificial intelligence.
          </p>
        </div>

        {/* Story Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in-up">
            <div className="glassmorphism p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-6">The Vision</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Founded in 2024 by three visionary college students, Rookus emerged from a simple yet 
                powerful idea: democratize fashion design through AI technology. We believe that 
                creativity shouldn't be limited by technical barriers or traditional design processes.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Our platform empowers anyone to create professional-quality fashion designs through 
                natural language, making the design process more intuitive, accessible, and efficient 
                than ever before.
              </p>
            </div>
          </div>

          <div className="animate-fade-in-up delay-200">
            <div className="grid grid-cols-2 gap-4">
              <div className="glassmorphism p-6 rounded-2xl text-center">
                <Award className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <div className="text-xl font-bold text-white">Rs. 5L</div>
                <div className="text-slate-400 text-sm">Grant Received</div>
              </div>
              <div className="glassmorphism p-6 rounded-2xl text-center">
                <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-xl font-bold text-white">14</div>
                <div className="text-slate-400 text-sm">Team Members</div>
              </div>
              <div className="glassmorphism p-6 rounded-2xl text-center">
                <Target className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-xl font-bold text-white">SaaS</div>
                <div className="text-slate-400 text-sm">Platform</div>
              </div>
              <div className="glassmorphism p-6 rounded-2xl text-center">
                <Lightbulb className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                <div className="text-xl font-bold text-white">AI-First</div>
                <div className="text-slate-400 text-sm">Innovation</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up delay-400">
          <div className="glassmorphism p-8 rounded-3xl text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-slate-300 leading-relaxed">
              To democratize fashion design by making professional-quality creation accessible 
              to everyone through AI-powered tools.
            </p>
          </div>

          <div className="glassmorphism p-8 rounded-3xl text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Innovation</h3>
            <p className="text-slate-300 leading-relaxed">
              We're constantly pushing the boundaries of what's possible in fashion technology, 
              creating tools that inspire and empower creators.
            </p>
          </div>

          <div className="glassmorphism p-8 rounded-3xl text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Community</h3>
            <p className="text-slate-300 leading-relaxed">
              Building a vibrant community of designers, creators, and innovators who share 
              our passion for the future of fashion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;