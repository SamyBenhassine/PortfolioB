/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#0F0F0F',
        light: '#F5F5F5',
        gray: '#2A2A2A',
        accent: '#8A2BE2',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        'gradient-primary-start': '#667eea',
        'gradient-primary-end': '#764ba2',
        'gradient-card-start': '#8B5CF6',
        'gradient-card-end': '#A855F7',
        'coolors': {
          'purple-deep': '#7400b8',
          'purple-medium': '#6930c3',
          'purple-light': '#5e60ce',
          'blue-purple': '#5390d9',
          'blue-medium': '#4ea8de',
          'blue-light': '#48bfe3',
          'cyan-light': '#56cfe1',
          'cyan-medium': '#64dfdf',
          'green-light': '#72efdd',
          'green-bright': '#80ffdb',
        },
        'text-dark': '#2c3e50',
        'text-light': '#f8f9fa',
        'text-medium': '#343a40',
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 4s linear infinite',
        'gradient-shift': 'gradientShift 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      backgroundSize: {
        '300%': '300%',
        '400%': '400%',
      },
      boxShadow: {
        'card': '0 4px 12px rgba(0,0,0,0.1)',
        'card-hover': '0 8px 24px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
};