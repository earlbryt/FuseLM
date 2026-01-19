import React from 'react'

function App() {
  return (
    <div className="h-screen bg-cyber-darker overflow-hidden flex flex-col">
      <style>{`
        ::-webkit-scrollbar {
          display: none;
        }
        * {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 flex flex-col justify-center overflow-hidden grid-pattern">
        {/* Hero Section */}
        <div className="text-center mb-8 space-y-4 dots-pattern">
          <h2 className="text-4xl md:text-6xl font-bold text-cyber-cyan text-glow">
            FuseLM
          </h2>
          <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto">
            A custom implementation of a Diffusion Language Model using BERT-based encoders
            with masked language modelling capabilities
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 diagonal-pattern">
          <div className="relative">
            <div className="absolute inset-0 bg-cyber-cyan/20 border border-cyber-cyan translate-x-2 translate-y-2"></div>
            <div className="relative bg-cyber-dark border border-cyber-cyan p-6 hover:border-cyber-cyan transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-cyber-cyan/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-cyber-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wider">Model Size</p>
                  <p className="text-cyber-cyan text-2xl font-bold">1B</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm">Optimized for single GPU training</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-cyber-cyan/20 border border-cyber-cyan translate-x-2 translate-y-2"></div>
            <div className="relative bg-cyber-dark border border-cyber-cyan p-6 hover:border-cyber-cyan transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-cyber-cyan/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-cyber-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wider">Architecture</p>
                  <p className="text-cyber-cyan text-2xl font-bold">BERT</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm">Masked language modelling</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-cyber-cyan/20 border border-cyber-cyan translate-x-2 translate-y-2"></div>
            <div className="relative bg-cyber-dark border border-cyber-cyan p-6 hover:border-cyber-cyan transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-cyber-cyan/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-cyber-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wider">Process</p>
                  <p className="text-cyber-cyan text-2xl font-bold">DIFFUSION</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm">Reverse diffusion visualization</p>
            </div>
          </div>
        </div>

        {/* Research Papers Section */}
        <div className="wave-pattern">
        <div className="relative">
          <div className="absolute inset-0 bg-cyber-cyan/20 border border-cyber-cyan translate-x-2 translate-y-2"></div>
          <div className="relative bg-cyber-dark border border-cyber-cyan p-4">
            <h3 className="text-cyber-cyan text-lg font-bold mb-3 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              INSPIRATION
            </h3>
            <div className="space-y-2">
              <div className="border-l-2 border-cyber-cyan pl-4">
                <p className="text-white font-semibold">Large Language Diffusion Models</p>
                <p className="text-gray-500 text-sm">arxiv.org/abs/2502.09992</p>
              </div>
              <div className="border-l-2 border-cyber-cyan pl-4">
                <p className="text-white font-semibold">LLaDA 1.5: Variance-Reduced Preference Optimization</p>
                <p className="text-gray-500 text-sm">arxiv.org/abs/2505.19223</p>
              </div>
            </div>
          </div>
        </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-cyber-cyan bg-cyber-dark/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <button className="text-cyber-cyan hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </button>
              <button className="text-cyber-cyan hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </button>
              <button className="text-cyber-cyan hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
              <span>In Development</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
