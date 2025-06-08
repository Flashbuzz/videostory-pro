import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('storyboard');

  const features = [
    "Visual drag-and-drop storyboard builder",
    "Real-time collaborative shot lists",
    "Equipment tracking and assignment system",
    "Project timeline with milestone management",
    "Team member roles and permissions",
    "Template library for common video types",
    "Export functionality (PDF, CSV, project files)",
    "Mobile-responsive design",
    "Dark/light mode toggle",
    "Comment and feedback system",
    "File upload and media management",
    "Integration with calendar applications"
];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700 p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-purple-400">VideoStory Pro</h1>
          <nav className="flex gap-4">
            <button 
              onClick={() => setActiveTab('storyboard')}
              className={`px-4 py-2 rounded ${activeTab === 'storyboard' ? 'bg-purple-600' : 'bg-slate-700'}`}
            >
              Storyboard
            </button>
            <button 
              onClick={() => setActiveTab('shotlist')}
              className={`px-4 py-2 rounded ${activeTab === 'shotlist' ? 'bg-purple-600' : 'bg-slate-700'}`}
            >
              Shot List
            </button>
            <button 
              onClick={() => setActiveTab('timeline')}
              className={`px-4 py-2 rounded ${activeTab === 'timeline' ? 'bg-purple-600' : 'bg-slate-700'}`}
            >
              Timeline
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-6">
        <div className="bg-slate-800 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
          <p className="text-slate-300 mb-4">A comprehensive video planning tool for businesses and content creators that streamlines pre-production workflows, manages shot lists, tracks equipment needs, and facilitates team collaboration throughout the video production process.</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Core Features</h3>
              <ul className="space-y-2">
                {features.slice(0, 6).map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span className="text-sm text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Additional Features</h3>
              <ul className="space-y-2">
                {features.slice(6).map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span className="text-sm text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-slate-800 rounded-lg p-6">
          {activeTab === 'storyboard' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Visual Storyboard Builder</h2>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((scene) => (
                  <div key={scene} className="bg-slate-700 rounded-lg p-4 min-h-32 flex items-center justify-center border-2 border-dashed border-slate-600">
                    <span className="text-slate-400">Scene {scene}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'shotlist' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Collaborative Shot Lists</h2>
              <div className="space-y-3">
                {['Wide establishing shot', 'Close-up dialogue', 'Medium product shot', 'Over-shoulder conversation'].map((shot, index) => (
                  <div key={index} className="bg-slate-700 rounded-lg p-4 flex items-center justify-between">
                    <span>{shot}</span>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-green-600 rounded text-xs">Ready</span>
                      <span className="px-2 py-1 bg-blue-600 rounded text-xs">Camera A</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'timeline' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Project Timeline</h2>
              <div className="space-y-3">
                {['Pre-production', 'Principal Photography', 'Post-production', 'Final Review'].map((phase, index) => (
                  <div key={index} className="bg-slate-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{phase}</span>
                      <span className="text-sm text-slate-400">Week {index + 1}</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-2">
                      <div 
                        className="bg-purple-500 h-2 rounded-full" 
                        style={{ width: `${(index + 1) * 25}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;