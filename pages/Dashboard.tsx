
import React, { useState, useEffect, useRef } from 'react';
import { LEADERS, CAMPUS_LOCATIONS, UNIVERSITY_HIGHLIGHTS } from '../constants';
import { getRickNavResponse } from '../services/geminiService';

const Dashboard: React.FC = () => {
  const [query, setQuery] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [loading, setLoading] = useState(false);
  
  // Slideshow logic for "Continuous" and "Left-to-Right" feel
  // We clone the first and last slides to create a seamless loop
  const slides = [
    UNIVERSITY_HIGHLIGHTS[UNIVERSITY_HIGHLIGHTS.length - 1],
    ...UNIVERSITY_HIGHLIGHTS,
    UNIVERSITY_HIGHLIGHTS[0]
  ];
  
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const slideCount = UNIVERSITY_HIGHLIGHTS.length;

  useEffect(() => {
    const timer = setInterval(() => {
      // "Left to Right" movement means the track moves to the right, 
      // or we progress in a way that feels like it. 
      // Standard sliders move the track left (negative X).
      // To move content left-to-right, we'd go from index N down to 0.
      nextSlide();
    }, 6000); // 6 seconds per slide for a "slow" feel
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // Handle the "snap" back to the start/end for infinite loop
  useEffect(() => {
    if (currentIndex === slides.length - 1) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
      }, 1500); // Wait for transition duration
      return () => clearTimeout(timer);
    }
    if (currentIndex === 0) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(slides.length - 2);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, slides.length]);

  const handleAiSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    const res = await getRickNavResponse(query);
    setAiResponse(res);
    setLoading(false);
  };

  return (
    <div className="pb-16 bg-white">
      {/* Hero Section - Matching Green, Light Green, White Theme */}
      <section className="relative pt-20 pb-28 px-4 text-center overflow-hidden" style={{ background: 'linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%)' }}>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-green-100 text-green-800 text-sm font-bold tracking-wide uppercase">
            SVU • Barrackpore Campus
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-800 mb-6 leading-tight">
            Discover <span className="text-emerald-700">Swami Vivekananda</span> University
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Join a legacy of excellence and innovation. Our green campus provides the perfect environment for your academic journey and personal growth.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <button className="w-full sm:w-auto px-10 py-4 bg-emerald-700 text-white rounded-xl font-bold text-lg hover:bg-emerald-800 transition-all shadow-xl shadow-emerald-200/50 active:scale-95">
              Explore Programs
            </button>
            <button className="w-full sm:w-auto px-10 py-4 border-2 border-emerald-700 text-emerald-700 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all active:scale-95">
              Virtual Tour
            </button>
          </div>

          {/* AI Search Box */}
          <form onSubmit={handleAiSearch} className="w-full max-w-2xl mx-auto relative group">
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
              <i className="fas fa-compass text-emerald-500 group-focus-within:text-emerald-700 transition-colors"></i>
            </div>
            <input 
              type="text" 
              placeholder="Ask Rick Nav about the campus..." 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-white border-2 border-green-100 rounded-2xl py-5 pl-14 pr-20 text-lg shadow-2xl shadow-green-100/50 focus:outline-none focus:border-emerald-400 transition-all placeholder-slate-400"
            />
            <button 
              type="submit" 
              disabled={loading}
              className="absolute right-3 top-3 bottom-3 bg-emerald-700 hover:bg-emerald-800 text-white px-6 rounded-xl transition-all flex items-center justify-center font-bold"
            >
              {loading ? <i className="fas fa-circle-notch fa-spin text-xl"></i> : "Ask"}
            </button>
          </form>

          {aiResponse && (
            <div className="mt-10 p-6 bg-white border-l-4 border-emerald-500 text-slate-800 rounded-2xl shadow-2xl max-w-2xl mx-auto text-left animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="flex items-center space-x-2 mb-3 text-emerald-700 font-bold">
                <i className="fas fa-robot text-lg"></i>
                <span className="uppercase tracking-widest text-xs">Rick Nav Assistant</span>
              </div>
              <p className="text-base leading-relaxed text-slate-700">{aiResponse}</p>
            </div>
          )}
        </div>

        {/* Soft Background Blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-green-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl"></div>
      </section>

      {/* About Section with CONTINUOUS SLOW SLIDESHOW */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            About Our <span className="text-emerald-700">University</span>
          </h2>
          <div className="w-24 h-2 bg-emerald-600 rounded-full"></div>
        </div>

        {/* Seamless Infinite Slider */}
        <div className="relative h-[550px] md:h-[650px] rounded-[3rem] overflow-hidden shadow-2xl border border-green-100 bg-emerald-900">
          <div 
            className={`flex h-full ${isTransitioning ? 'transition-transform duration-[1500ms] cubic-bezier(0.4, 0, 0.2, 1)' : ''}`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, idx) => (
              <div key={idx} className="min-w-full h-full relative">
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="w-full h-full object-cover brightness-75 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/20 to-transparent flex items-end md:items-center px-8 md:px-24 pb-16 md:pb-0">
                  <div className="max-w-xl text-white transform transition-all duration-1000">
                    <span className="inline-block px-3 py-1 rounded-lg bg-emerald-600/40 backdrop-blur-md text-emerald-200 text-xs font-black uppercase tracking-widest mb-4">Highlights</span>
                    <h3 className="text-4xl md:text-6xl font-black mb-6 leading-tight drop-shadow-lg">{slide.title}</h3>
                    <p className="text-lg md:text-2xl text-emerald-50/90 leading-relaxed drop-shadow-md font-medium">
                      {slide.description}
                    </p>
                    <div className="mt-10 flex space-x-4">
                      <button className="px-8 py-3.5 bg-white text-emerald-900 font-black rounded-2xl hover:bg-emerald-50 transition-all shadow-xl active:scale-95">
                        Discover More
                      </button>
                      <button className="px-8 py-3.5 bg-emerald-600/30 backdrop-blur-lg border border-white/20 text-white font-black rounded-2xl hover:bg-emerald-600/50 transition-all active:scale-95">
                        View Gallery
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators with Active Animation */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
            {UNIVERSITY_HIGHLIGHTS.map((_, idx) => {
              const adjustedIndex = currentIndex === 0 ? slideCount : currentIndex === slides.length - 1 ? 1 : currentIndex;
              return (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx + 1)}
                  className={`h-2.5 rounded-full transition-all duration-700 ${
                    adjustedIndex === idx + 1 ? 'bg-white w-10 shadow-lg' : 'bg-white/30 w-2.5 hover:bg-white/60'
                  }`}
                ></button>
              );
            })}
          </div>
          
          {/* Subtle Side Controls */}
          <button 
            onClick={prevSlide}
            className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/10 backdrop-blur-md text-white hover:bg-white hover:text-emerald-900 transition-all flex items-center justify-center border border-white/10 z-30"
          >
            <i className="fas fa-arrow-left"></i>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/10 backdrop-blur-md text-white hover:bg-white hover:text-emerald-900 transition-all flex items-center justify-center border border-white/10 z-30"
          >
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </section>

      {/* Leadership Directory Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">University <span className="text-emerald-700">Leadership</span></h2>
            <div className="w-16 h-1 bg-emerald-600 rounded-full mb-4"></div>
            <p className="text-slate-500 font-medium">Meet the visionaries guiding the next generation of leaders.</p>
          </div>
          <button className="text-emerald-700 font-bold flex items-center hover:underline">
            View Full Faculty <i className="fas fa-chevron-right ml-2 text-xs"></i>
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {LEADERS.map((leader) => (
            <div key={leader.id} className="group bg-white rounded-[2rem] overflow-hidden border border-green-50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="h-80 overflow-hidden relative">
                <img src={leader.image} alt={leader.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-emerald-900/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-8">
                <div className="text-emerald-700 font-black text-[10px] uppercase tracking-[0.2em] mb-3">{leader.role}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{leader.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2 italic">
                  "{leader.bio}"
                </p>
                <div className="pt-5 border-t border-green-50 flex justify-between items-center">
                   <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Profile</span>
                   <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-all">
                     <i className="fas fa-arrow-right text-xs"></i>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Campus GPS & Interactive Map Section */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="bg-emerald-950 rounded-[4rem] p-6 md:p-14 shadow-3xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
             <div className="grid grid-cols-12 h-full w-full">
               {[...Array(144)].map((_, i) => <div key={i} className="border border-white/20"></div>)}
             </div>
          </div>
          
          <div className="grid lg:grid-cols-5 gap-16 items-center relative z-10">
            <div className="lg:col-span-2 text-white">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-800/50 text-emerald-400 text-xs font-bold mb-8 border border-emerald-700/50 backdrop-blur-sm">
                <i className="fas fa-map-location-dot mr-2"></i> Real-time Campus GPS
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Navigating the <br/><span className="text-emerald-400">Future Campus</span></h2>
              <p className="text-emerald-100/70 mb-12 text-lg leading-relaxed font-medium">
                Our Barrackpore campus is a blend of natural greenery and technological hubs. Use Rick Nav to find your way seamlessly.
              </p>
              
              <div className="space-y-4">
                {CAMPUS_LOCATIONS.map((loc, idx) => (
                  <button 
                    key={idx} 
                    className="w-full flex items-center p-5 rounded-3xl bg-white/5 border border-white/10 hover:bg-emerald-800/80 hover:border-emerald-500/50 transition-all group backdrop-blur-sm"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400 mr-5 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-lg">
                      <i className="fas fa-building-columns text-xl"></i>
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-bold text-white text-lg">{loc.name}</div>
                      <div className="text-xs text-emerald-300/60 uppercase tracking-widest mt-1 font-bold">Quick Navigate</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3 rounded-[3rem] overflow-hidden shadow-2xl bg-emerald-900/50 h-[650px] relative border-[12px] border-emerald-900/40">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.123!2d88.396!3d22.766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89920b7774e6f%3A0x6a05374e2a1496a7!2sSwami%20Vivekananda%20University!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                className="brightness-95 contrast-105 saturate-125"
              ></iframe>
              <div className="absolute top-8 left-8 flex gap-3">
                 <div className="bg-emerald-700/90 backdrop-blur-md text-white px-6 py-3 rounded-2xl text-sm font-black shadow-2xl flex items-center border border-white/20">
                    <span className="w-2.5 h-2.5 bg-red-500 rounded-full mr-3 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
                    ACTIVE RADAR
                 </div>
              </div>
              <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-[2rem] flex items-center space-x-5 text-emerald-900 font-bold shadow-2xl border border-white/20">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 text-xl">
                   <i className="fas fa-satellite-dish"></i>
                </div>
                <div>
                  <div className="text-[10px] text-emerald-700/60 uppercase tracking-widest font-black mb-1">Current Sector</div>
                  <div className="text-base">Barrackpore North Block</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
