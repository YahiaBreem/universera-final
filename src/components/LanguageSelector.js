
// Updated LanguageSelector.js
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown, Globe } from 'lucide-react';

const LanguageSelector = ({ compact = false, className = '' }) => {
    const { language, changeLanguage, t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: 'ar', name: 'العربية', flag: '🇸🇦' },
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'fr', name: 'Français', flag: '🇫🇷' },
        { code: 'ch', name: '中国人', flag: '🇨🇳' },
        { code: 'gr', name: 'Deutsch', flag: '🇩🇪' }
    ];

    const currentLanguage = languages.find(l => l.code === language);

    if (compact) {
        return (
            <div className={`relative ${className}`}>
                <button onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700">
                    <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    <span>{currentLanguage?.flag} {currentLanguage?.name}</span>
                    <Globe size={16} />
                </button>
                {isOpen && (
                    <div className="absolute top-full mt-2 right-0 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                        {languages.map(lang => (
                            <button key={lang.code}
                                className={`w-full flex items-center gap-3 px-4 py-3 ${language === lang.code ? 'bg-blue-50' : ''}`}>
                                <span>{lang.flag}</span>
                                <span>{lang.name}</span>
                                {language === lang.code && <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full" />}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className={`space-y-3 ${className}`}>
            <h3>{t('language')}</h3>
            <div className="grid grid-cols-2 gap-3">
                {languages.map(lang => (
                    <button key={lang.code}
                        onClick={() => { if (!lang.mock) changeLanguage(lang.code); }}
                        className={`p-4 rounded-lg border-2 ${language === lang.code ? 'border-blue-500' : 'border-gray-200'}`}>
                        <div className="text-2xl mb-2">{lang.flag}</div>
                        <div>{lang.name}</div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default LanguageSelector;
