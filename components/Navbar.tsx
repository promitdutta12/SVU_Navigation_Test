
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <img src="https://svulearninghub.com/pluginfile.php/1/core_admin/logo/0x200/1715858487/svu_logo.png" alt="SVU Logo" className="h-10 w-auto" />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-bold text-slate-800">Swami Vivekananda</span>
            <span className="text-xs font-semibold text-teal-700">University</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-8 font-medium">
          <Link to="/" className={`${isActive('/') ? 'text-teal-700 border-b-2 border-teal-700' : 'text-slate-600 hover:text-teal-600'} transition-colors py-1`}>
            Dashboard
          </Link>
          <Link to="/events" className={`${isActive('/events') ? 'text-teal-700 border-b-2 border-teal-700' : 'text-slate-600 hover:text-teal-600'} transition-colors py-1`}>
            Events
          </Link>
          <Link to="/emergency" className={`${isActive('/emergency') ? 'text-teal-700 border-b-2 border-teal-700' : 'text-slate-600 hover:text-teal-600'} transition-colors py-1`}>
            Emergency
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <button className="hidden sm:block bg-teal-700 text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-teal-800 transition-all shadow-sm active:scale-95">
            Rick AI
          </button>
          <button className="md:hidden text-slate-600 text-2xl">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
