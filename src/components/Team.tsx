import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const Team = () => {
  const founders = [

    {
      name: "Aditya Gaur",
      role: "Co-Founder & COO",
      image: "",
      bio: "Technical architect driving AI innovation in fashion design.",
      social: {
        linkedin: "#",
        github: "#",
        email: "aditya@rookus.com"
      }
    },
    {
      name: "Aryan Saxena",
      role: "Co-Founder & CTO",
      image: "",
      bio: "Visionary leader with a passion for AI and fashion technology.",
      social: {
        linkedin: "#",
        github: "#",
        email: "aryan@rookus.com"
      }
    },
    
    {
      name: "Nikhil Verma",
      role: "Co-Founder & CEO",
      image: "",
      bio: "Product strategist focused on user experience and design innovation.",
      social: {
        linkedin: "#",
        github: "#",
        email: "nikhil@rookus.com"
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Meet the Founders
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Three college students with a shared vision to revolutionize fashion design 
            through artificial intelligence and innovative technology.
          </p>
        </div>

        {/* Founder Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {founders.map((founder, index) => (
            <div
              key={founder.name}
              className={`glassmorphism p-8 rounded-3xl text-center group hover:scale-105 transition-all duration-300 animate-fade-in-up`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/10">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl"></div>
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold text-white mb-2">{founder.name}</h3>
              <p className="text-blue-400 font-medium mb-4">{founder.role}</p>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">{founder.bio}</p>

              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                <a
                  href={founder.social.linkedin}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-500/20 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-blue-400" />
                </a>
                <a
                  href={founder.social.github}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple-500/20 transition-colors"
                >
                  <Github className="w-5 h-5 text-purple-400" />
                </a>
                <a
                  href={`mailto:${founder.social.email}`}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-emerald-500/20 transition-colors"
                >
                  <Mail className="w-5 h-5 text-emerald-400" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="text-center animate-fade-in-up delay-600">
          <div className="glassmorphism p-8 rounded-3xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Growing Strong</h3>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">14</div>
                <div className="text-slate-300">Team Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">2024</div>
                <div className="text-slate-300">Founded</div>
              </div>
            </div>
            <p className="text-slate-300 mt-6 leading-relaxed">
              From a small college dorm idea to a growing team of 14 passionate individuals, 
              we're building the future of fashion technology together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;