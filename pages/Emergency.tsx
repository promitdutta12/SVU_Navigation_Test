
import React from 'react';
import { EMERGENCY_CONTACTS } from '../constants';

const Emergency: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-20">
        <div className="w-24 h-24 bg-red-50 text-red-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner transform rotate-12 transition-transform hover:rotate-0 duration-300">
          <i className="fas fa-life-ring text-5xl"></i>
        </div>
        <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Support & <span className="text-teal-700">Safety</span></h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
          Your well-being is our highest priority. The following services are available 24/7 for students and faculty members.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {EMERGENCY_CONTACTS.map((contact, idx) => (
          <div key={idx} className="bg-white p-8 rounded-3xl border-2 border-slate-50 shadow-sm flex items-center group hover:border-teal-200 hover:shadow-2xl transition-all duration-300">
            <div className="w-20 h-20 bg-teal-50 rounded-2xl flex items-center justify-center mr-8 text-3xl text-teal-700 group-hover:bg-teal-700 group-hover:text-white transition-all">
              <i className={`fas ${contact.icon}`}></i>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-900 mb-1">{contact.name}</h3>
              <p className="text-teal-800 font-mono font-bold text-2xl">{contact.number}</p>
            </div>
            <a 
              href={`tel:${contact.number.replace(/\s+/g, '')}`} 
              className="w-14 h-14 bg-teal-700 text-white rounded-full flex items-center justify-center hover:bg-teal-800 transition-all shadow-lg hover:scale-110 active:scale-90"
            >
              <i className="fas fa-phone-alt"></i>
            </a>
          </div>
        ))}
      </div>

      <div className="bg-teal-900 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-12 opacity-10">
           <i className="fas fa-shield-heart text-9xl"></i>
        </div>
        
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <i className="fas fa-info-circle mr-4 text-teal-400"></i>
            Campus Safety Protocols
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center mb-4 text-white font-bold">1</div>
              <h4 className="font-bold mb-3">Instant Alert</h4>
              <p className="text-sm text-teal-100/70">In any critical situation, immediately press the emergency SOS in the SVU Student App.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center mb-4 text-white font-bold">2</div>
              <h4 className="font-bold mb-3">Safe Zones</h4>
              <p className="text-sm text-teal-100/70">Proceed to the nearest 'Safe Zone' designated at the Engineering Block or Library foyer.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center mb-4 text-white font-bold">3</div>
              <h4 className="font-bold mb-3">Medical Aid</h4>
              <p className="text-sm text-teal-100/70">A fully equipped ambulance and nursing staff are stationed 24x7 near the Main Gate.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency;
