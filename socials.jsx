
import React, { useState } from 'react';
import { Github, Twitter, Linkedin, Mail, Instagram, Youtube } from 'lucide-react';

export default function SocialLinks() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Update these with your actual social URLs
  const socials = [
    {
      name: 'GitHub',
      url: 'https://github.com/durunda735-eng',
      icon: Github,
      color: 'from-gray-600 to-gray-800',
      hoverColor: 'group-hover:from-gray-700 group-hover:to-gray-900'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: Twitter,
      color: 'from-blue-400 to-blue-600',
      hoverColor: 'group-hover:from-blue-500 group-hover:to-blue-700'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: Linkedin,
      color: 'from-blue-600 to-blue-800',
      hoverColor: 'group-hover:from-blue-700 group-hover:to-blue-900'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      icon: Instagram,
      color: 'from-pink-500 to-purple-600',
      hoverColor: 'group-hover:from-pink-600 group-hover:to-purple-700'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/The-Resistence-k6z',
      icon: Youtube,
      color: 'from-red-500 to-red-700',
      hoverColor: 'group-hover:from-red-600 group-hover:to-red-800'
    },
    {
      name: 'Email',
      url: 'mailto:durunda735@proton.me',
      icon: Mail,
      color: 'from-orange-500 to-amber-600',
      hoverColor: 'group-hover:from-orange-600 group-hover:to-amber-700'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4">
      {/* Ambient background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-white">You</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">
            Connect with Me
          </h1>
          <p className="text-slate-400 text-lg">
            Find me on any of these platforms
          </p>
        </div>

        {/* Social Links Grid */}
        <div className="space-y-3">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl transition-all duration-300"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${social.color} ${social.hoverColor} transition-all duration-300`}></div>

                {/* Content */}
                <div className="relative px-6 py-4 flex items-center justify-between">
                  <span className="text-white font-medium text-lg flex items-center gap-3">
                    <Icon size={24} className="transition-transform duration-300 group-hover:scale-110" />
                    {social.name}
                  </span>
                  <svg
                    className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>

                {/* Shine effect on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent transition-opacity duration-300 transform -skew-x-12`}></div>
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-slate-500 text-sm">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}
