
import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-green-400" />
      <div className="flex bg-gray-800 rounded-lg p-1">
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
            language === 'en'
              ? 'bg-green-500 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('pt')}
          className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
            language === 'pt'
              ? 'bg-green-500 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          PT
        </button>
      </div>
    </div>
  );
};

export default LanguageSelector;
