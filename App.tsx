
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Events from './pages/Events';
import Emergency from './pages/Emergency';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/events" element={<Events />} />
            <Route path="/emergency" element={<Emergency />} />
          </Routes>
        </main>
        
        <footer className="bg-emerald-950 text-emerald-200/60 py-20 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-emerald-600 p-2.5 rounded-xl shadow-lg shadow-emerald-900/20">
                  <i className="fas fa-location-arrow text-white"></i>
                </div>
                <span className="text-2xl font-bold text-white tracking-tight">Rick Nav</span>
              </div>
              <p className="text-sm leading-relaxed mb-8 font-medium">
                The official smart navigation and information portal of Swami Vivekananda University. Designed to empower students and visitors with AI-driven campus insights.
              </p>
              <div className="flex space-x-5">
                {[
                  { icon: 'fa-facebook-f', color: 'hover:text-blue-400' },
                  { icon: 'fa-instagram', color: 'hover:text-pink-400' },
                  { icon: 'fa-x-twitter', color: 'hover:text-white' },
                  { icon: 'fa-linkedin-in', color: 'hover:text-blue-500' }
                ].map((social, i) => (
                  <a key={i} href="#" className={`${social.color} transition-all transform hover:-translate-y-1`}>
                    <i className={`fab ${social.icon} text-xl`}></i>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8">Navigation</h4>
              <ul className="space-y-4 text-sm font-bold">
                <li><a href="#" className="hover:text-emerald-400 transition-colors flex items-center"><i className="fas fa-chevron-right text-[10px] mr-2 text-emerald-600"></i> Interactive Campus Map</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors flex items-center"><i className="fas fa-chevron-right text-[10px] mr-2 text-emerald-600"></i> Faculty Directory</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors flex items-center"><i className="fas fa-chevron-right text-[10px] mr-2 text-emerald-600"></i> Research Labs</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors flex items-center"><i className="fas fa-chevron-right text-[10px] mr-2 text-emerald-600"></i> Admissions 2024</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8">Contact SVU</h4>
              <address className="not-italic text-sm space-y-6">
                <div className="flex items-start">
                  <div className="bg-emerald-900/50 p-3 rounded-lg mr-4 text-emerald-400">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <span className="leading-relaxed">Barrackpore-Barasat Road, <br/>Kolkata, West Bengal 700121, India</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-emerald-900/50 p-3 rounded-lg mr-4 text-emerald-400">
                    <i className="fas fa-phone"></i>
                  </div>
                  <span className="font-bold">+91 033 1234 5678</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-emerald-900/50 p-3 rounded-lg mr-4 text-emerald-400">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <span className="font-bold">info@svu.edu.in</span>
                </div>
              </address>
            </div>
          </div>
          <div className="max-w-7xl mx-auto border-t border-emerald-900 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs font-bold uppercase tracking-widest text-emerald-700">
            <p>&copy; 2024 Swami Vivekananda University</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-emerald-400">Privacy Policy</a>
              <a href="#" className="hover:text-emerald-400">Terms of Service</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
