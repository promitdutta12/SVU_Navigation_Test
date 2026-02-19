
import React from 'react';
import { EVENTS } from '../constants';

const Events: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Campus Events</h1>
          <p className="text-slate-500">Stay updated with the latest happenings at SVU.</p>
        </div>
        <div className="flex items-center space-x-2">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium shadow-sm hover:bg-indigo-700 transition-colors">
            <i className="fas fa-calendar-plus mr-2"></i> Register for Event
          </button>
        </div>
      </div>

      <div className="grid gap-6">
        {EVENTS.map((event) => (
          <div key={event.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-shadow">
            <div className="bg-slate-900 text-white p-8 flex flex-col items-center justify-center md:w-48">
              <span className="text-3xl font-bold">{event.date.split('-')[2]}</span>
              <span className="text-sm font-medium uppercase tracking-widest text-indigo-400">
                {new Date(event.date).toLocaleString('default', { month: 'short' })}
              </span>
            </div>
            <div className="p-8 flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${
                  event.type === 'academic' ? 'border-blue-200 text-blue-600 bg-blue-50' : 
                  event.type === 'cultural' ? 'border-purple-200 text-purple-600 bg-purple-50' :
                  'border-green-200 text-green-600 bg-green-50'
                }`}>
                  {event.type}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{event.title}</h3>
              <p className="text-slate-600 mb-4">{event.description}</p>
              <div className="flex items-center text-sm text-slate-500">
                <i className="fas fa-location-dot mr-2 text-indigo-500"></i>
                {event.location}
              </div>
            </div>
            <div className="p-8 flex items-center justify-end bg-slate-50 border-t md:border-t-0 md:border-l border-slate-100">
              <button className="text-indigo-600 font-bold hover:underline">
                View Details <i className="fas fa-arrow-right ml-1"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
