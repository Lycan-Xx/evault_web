import React, { useState, useRef, useEffect } from 'react';
import { Bell, Mail, Eye, EyeOff, User, Settings, LogOut } from 'lucide-react';

const TopBar = () => {
  const [showBalance, setShowBalance] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="bg-blue-600 rounded-lg shadow-sm p-4 mb-4">
      <div className="flex items-center justify-between">
        {/* Balance Section */}
        <div className="flex items-center space-x-2">
          <div className="text-white font-bold">
            <span className="text-sm md:text-base">Wallet Balance:</span>
            <span className="ml-2 text-lg md:text-xl">
              {showBalance ? '₦467,038.98' : '₦ * * * * *'}
            </span>
          </div>
          <button
            onClick={() => setShowBalance(!showBalance)}
            className="p-1 rounded-full transition-colors"
          >
            {showBalance ? (
              <EyeOff className="text-white" size={20} />
            ) : (
              <Eye className="text-white" size={20} />
            )}
          </button>
        </div>

        {/* Notifications and Profile */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <div className="flex space-x-3">
            <button className="relative p-2 rounded-full transition-colors">
              <Bell className="text-white" size={24} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>
            <button className="relative p-2 rounded-full transition-colors">
              <Mail className="text-white" size={24} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </button>
          </div>

          {/* Profile Dropdown */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <span className="hidden md:block text-right mr-2">
                <span className="block text-sm font-medium text-gray-300">Usman Ahmad</span>
                <span className="block text-xs text-gray-400">Customer</span>
              </span>
              <img
                src="https://picsum.photos/id/237/200/300"
                alt="User Avatar"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            </button>

            {/* Dropdown Menu */}
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 transition-all">
                <button className="w-full px-4 py-2 text-left hover:bg-blue-200 flex items-center rounded-lg space-x-2">
                  <User size={18} className="text-blue-600" />
                  <span>Profile</span>
                </button>
                <button className="w-full px-4 py-2 text-left hover:bg-blue-200 flex items-center rounded-lg space-x-2">
                  <Settings size={18} className="text-blue-600" />
                  <span>Settings</span>
                </button>
                <hr className="my-2" />
                <button className="w-full px-4 py-2 text-left hover:bg-red-200 flex items-center space-x-2 text-red-600">
<LogOut size={18} />
                  <span>Sign Out</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;