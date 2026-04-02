import React from 'react';
import { Github, CheckSquare, LogOut } from 'lucide-react';

const AuthSection = ({ authenticated, onStartOAuth, onLogout }) => {
  if (authenticated) {
    return (
      <div className="flex flex-col items-center">
        <div className="text-green-600 flex items-center bg-green-100 px-3 py-1 rounded-full">
          <CheckSquare className="w-4 h-4 mr-1" />
          <span className="text-sm font-medium">GitHub Connected</span>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          You can now select a repository
        </p>
        <button
          onClick={onLogout}
          className="bg-red-600 text-white py-3 px-6 rounded-xl hover:bg-red-700 transition-all duration-200 flex items-center shadow-md hover:shadow-lg mt-4"
        >
          <LogOut className="w-5 h-5 mr-2" />
          Disconnect GitHub
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        onClick={onStartOAuth}
        className="bg-blue-600 text-white py-3 px-6 rounded-xl hover:bg-blue-700 transition-all duration-200 flex items-center shadow-md hover:shadow-lg"
      >
        <Github className="w-5 h-5 mr-2" />
        Continue with GitHub
      </button>

      <p className="text-xs text-gray-500 mt-2 text-center max-w-xs">
        We only access selected repositories. No code is stored.
      </p>
    </div>
  );
};

export default AuthSection;