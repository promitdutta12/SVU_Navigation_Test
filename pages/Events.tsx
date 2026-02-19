
import React from 'react';
import { EVENTS } from '../constants';

const Events: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h1 className="text-5xl font-extrabold text-slate-900 mb-4 inline-block relative">
            University <span className="text-teal-700">Events</span>
            <div className="absolute -bottom-2 left-0 w-20 h-1.5 bg-teal-600 rounded-full"></div>
          </h1>
          <p className="text-slate-500 text-lg">Never miss an opportunity to learn and grow at SVU.</p>
        </div>
        <button className="bg-teal-700 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:bg-teal-800 transition-all flex items-center justify-center">
          <i className="fas fa-plus-circle mr-2"></i> Propose Event
        </button>
      </div>

      <div className="space-y-8">
        {EVENTS.map((event) => (
          <div key={event.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col md:flex-row hover:shadow-xl hover:border-teal-100 transition-all duration-300">
            <div className="bg-teal-900 text-white p-10 flex flex-col items-center justify-center md:w-52">
              <span className="text-5xl font-black mb-1">{event.date.split('-')[2]}</span>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-teal-300">
                {new Date(event.date).toLocaleString('default', { month: 'short' })}
              </span>
            </div>
            <div className="p-10 flex-1">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-bold uppercase tracking-wider mb-6 border border-teal-100">
                <i className="fas fa-tag mr-2"></i> {event.type}
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">{event.title}</h3>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">{event.description}</p>
              <div className="flex flex-wrap gap-6 text-sm font-medium text-slate-500">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center mr-3 text-teal-600">
                    <i className="fas fa-location-dot"></i>
                  </div>
                  {event.location}
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center mr-3 text-teal-600">
                    <i className="fas fa-clock"></i>
                  </div>
                  10:00 AM Onwards
                </div>
              </div>
            </div>
            <div className="p-10 flex items-center justify-center md:border-l border-slate-50 bg-slate-50/30">
              <button className="w-full md:w-auto bg-white border-2 border-teal-700 text-teal-700 font-bold px-8 py-3 rounded-xl hover:bg-teal-700 hover:text-white transition-all shadow-sm">
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
