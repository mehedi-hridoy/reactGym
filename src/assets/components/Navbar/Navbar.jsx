import React, { useState, useEffect } from 'react';
import Link from '../Link/Link';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FiHome, FiUser, FiPhone, FiInfo, FiSettings } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home", icon: <FiHome className="w-4 h-4" /> },
    { id: 2, path: "/about", name: "About", icon: <FiInfo className="w-4 h-4" /> },
    { id: 3, path: "/services", name: "Services", icon: <FiSettings className="w-4 h-4" /> },
    { id: 4, path: "/contact", name: "Contact", icon: <FiPhone className="w-4 h-4" /> },
    { id: 5, path: "/profile", name: "Profile", icon: <FiUser className="w-4 h-4" /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open && !event.target.closest('nav')) {
        setOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [open]);

  return (
    <>
      {open && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300"
          onClick={() => setOpen(false)}
        />
      )}

      <nav className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
        ${scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/20' 
          : 'bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900'
        }
      `}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            <div className="flex-shrink-0">
              <div className={`
                text-2xl font-bold transition-colors duration-300
                ${scrolled ? 'text-gray-900' : 'text-white'}
              `}>
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                 ReactGym
                </span>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-1">
                {routes.map((route) => (
                  <div key={route.id} className="relative group">
                    <button className={`
                      flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium
                      transition-all duration-300 ease-in-out transform hover:scale-105
                      ${scrolled 
                        ? 'text-gray-700 hover:text-purple-600 hover:bg-purple-50' 
                        : 'text-white hover:text-purple-300 hover:bg-white/10'
                      }
                    `}>
                      {route.icon}
                      <span>{route.name}</span>
                    </button>
                    
                    <div className={`
                      absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-0 
                      group-hover:w-full transition-all duration-300 ease-out
                      ${scrolled ? 'bg-purple-600' : 'bg-purple-300'}
                    `} />
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden md:block">
              <button className="
                bg-gradient-to-r from-purple-600 to-pink-600 text-white
                px-6 py-2 rounded-full font-semibold text-sm
                transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
              ">
                Get Started
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setOpen(!open)}
                className={`
                  inline-flex items-center justify-center p-2 rounded-lg
                  transition-all duration-300 transform hover:scale-110
                  ${scrolled 
                    ? 'text-gray-700 hover:text-purple-600 hover:bg-purple-50' 
                    : 'text-white hover:text-purple-300 hover:bg-white/10'
                  }
                `}
              >
                <span className="sr-only">Open main menu</span>
                <div className="relative w-6 h-6">
                  <HiOutlineMenuAlt3 
                    className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                      open ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                    }`} 
                  />
                  <IoClose 
                    className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                      open ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                    }`} 
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className={`
          md:hidden transition-all duration-300 ease-in-out origin-top
          ${open 
            ? 'opacity-100 scale-y-100 max-h-96' 
            : 'opacity-0 scale-y-95 max-h-0 overflow-hidden'
          }
        `}>
          <div className="px-4 pt-2 pb-6 space-y-2 bg-white shadow-lg border-t border-gray-200">
            {routes.map((route, index) => (
              <div 
                key={route.id} 
                className={`
                  transform transition-all duration-300 ease-out
                  ${open 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-4 opacity-0'
                  }
                `}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <button className="
                  flex items-center space-x-3 w-full px-4 py-3 rounded-xl text-left
                  text-gray-700 hover:text-purple-600 hover:bg-purple-50
                  transition-all duration-300 transform hover:translate-x-2
                ">
                  <div className="text-purple-600">
                    {route.icon}
                  </div>
                  <span className="font-medium">{route.name}</span>
                </button>
              </div>
            ))}
            
            
            <div className={`
              pt-4 transform transition-all duration-300 ease-out
              ${open 
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-4 opacity-0'
              }
            `}
            style={{ transitionDelay: `${routes.length * 50}ms` }}>
              <button className="
                w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white
                px-6 py-3 rounded-xl font-semibold
                transition-all duration-300 transform hover:scale-105 shadow-lg
              ">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="h-16" />
    </>
  );
};

export default Navbar;