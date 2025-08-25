import React, { useState, useEffect } from 'react';
import {
  Home,
  Calendar,
  FileText,
  MessageSquare,
  User,
  Bell,
  Download,
  Search,
  ChevronLeft,
  ChevronDown,
  Clock,
  CheckCircle,
  AlertCircle,
  DollarSign,
  Phone,
  Mail,
  HelpCircle,
  Settings,
  Filter,
  Upload,
  Send,
  Moon,
  Sun,
  Monitor
} from 'lucide-react';
import './App.css';
import { courses as getcourses } from "./data/courses";
import banner from './banner.svg';
import arflag from './flags/ar.svg';
import enflag from './flags/en.svg';
import frflag from './flags/fr.svg';
import chflag from './flags/ch.svg';
import grflag from './flags/ger.svg';

import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
// TailwindCSS + lucide-react

export default function StudentApp() {

  return (
    <LanguageProvider>
      <StudentAppContent />
    </LanguageProvider>
  );
}

function StudentAppContent() {

  const { t, language } = useLanguage();
  
  // Helper function to get text alignment based on language direction
  const getTextAlign = () => {
    return ["ar", "he", "fa", "ur"].includes(language) ? "text-right" : "text-left";
  };
  
  const isRTL = ["ar", "he", "fa", "ur"].includes(language);
  
  useEffect(() => {
    const html = document.documentElement;
    if (isRTL) {
      html.setAttribute("dir", "rtl");
      html.setAttribute("lang", language);
    } else {
      html.setAttribute("dir", "ltr");
      html.setAttribute("lang", language);
    }
  }, [language, isRTL]);

  // ---------- auth & core state ----------
  const [currentUser, setCurrentUser] = useState(null);
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  const [currentScreen, setCurrentScreen] = useState('main');
  const [openChat, setOpenChat] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileFilter, setFileFilter] = useState('all');
  const [showFileFilterMenu, setShowFileFilterMenu] = useState(false);
  const [assignments, setAssignments] = useState([]);

  const courses = React.useMemo(() => getcourses(t), [t]);
  // ---------- dark mode state ----------
  const [darkMode, setDarkMode] = useState(() => {
    // Check system preference since we can't use localStorage
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Apply dark mode class to document
  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Toggle dark mode function
  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  // Generate random stats for user
  const generateRandomStats = () => ({
    attendance: Math.floor(Math.random() * (100 - 75 + 1)) + 75, // 75-100%
    gpa: (Math.random() * (4.0 - 2.7) + 2.7).toFixed(2), // 2.7-4.0
    credits: Math.floor(Math.random() * (150 - 100 + 1)) + 100, // 100-150 credits
    projectsCompleted: Math.floor(Math.random() * (25 - 10 + 1)) + 10, // 10-25 projects
    absences: Math.floor(Math.random() * (10 - 3 + 1)) + 3, // 3-10 absences
    attended: Math.floor(Math.random() * (40 - 25 + 1)) + 25, // 25-40 attended
  });

  // Memoized helpers
  const getFacultyData = React.useCallback((student) => {
    if (!student) return null;
    const uni = courses.find(u => u.university === student.university);
    if (!uni) return null;
    const faculty = (uni.faculties || []).find(f =>
      f.name === student.faculty || f.faculty === student.faculty
    );
    return faculty || null;
  }, [courses]);

  // Helper functions - must be defined before use
  function getFacultyStudents() {
    // Generate mock students for the selected faculty
    const mockNames = ['أحمد محمد', 'فاطمة علي', 'محمد حسن', 'نور الدين', 'سارة أحمد', 'عمر يوسف', 'مريم محمود', 'خالد سعد'];
    return mockNames.map((name, idx) => ({
      id: idx + 1,
      name: name,
      username: name,
      university: currentUser?.university,
      faculty: currentUser?.faculty
    }));
  }

  function getFacultyProfessors(faculty) {
    if (!faculty || !faculty.courses) return [];
    const profs = faculty.courses.map(c => c.professor).filter(Boolean);
    return Array.from(new Set(profs));
  }

  function buildAssignments(student, faculty) {
    if (!student || !faculty || !faculty.courses) return [];
    return student.enrolledCourses.map((courseName, idx) => {
      const course = faculty.courses.find(c => c.subtitle === courseName);
      return {
        id: idx + 1,
        title: `واجب ${courseName}`,
        subject: courseName,
        dueDate: '20-08-2025',
        status: t("notsubmitted"),
        grade: null,
        file: course ? course.file : null,
      };
    });
  }

  function buildFiles(faculty) {
    if (!faculty || !faculty.courses) return [];
    return faculty.courses.flatMap((c, courseIdx) =>
      (c.files || []).map((f, fileIdx) => ({
        id: `${courseIdx}-${fileIdx}`,
        name: f.name,
        type: f.type,
        color: 'blue',
        course: c.subtitle,
        professor: c.professor,
        room: c.room,
        file: f.file,
        title: c.title,
      }))
    );
  }

  // Effect for assignments
  React.useEffect(() => {
    if (currentUser) {
      const facultyData = getFacultyData(currentUser);
      if (facultyData) {
        const newAssignments = buildAssignments(currentUser, facultyData);
        setAssignments(newAssignments);
      }
    }
  }, [currentUser, getFacultyData]);

  // Current user's faculty data - memoized
  const facultyData = React.useMemo(() => getFacultyData(currentUser) || {}, [currentUser, getFacultyData]);
  const facultyCourses = facultyData.courses || [];
  const facultyProfessors = getFacultyProfessors(facultyData);
  const facultyStudents = getFacultyStudents();

  // -------------------- DISCLAIMER SCREEN --------------------
  const DisclaimerScreen = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false); // ✅ Added state
    const { t, language, changeLanguage } = useLanguage(); // ✅ Language hook

    const languages = [
      { code: 'en', label: 'English', flag: enflag },
      { code: 'ar', label: 'العربية', flag: arflag },
      { code: 'fr', label: 'Français', flag: frflag },
      { code: 'ch', label: '中国人', flag: chflag },
      { code: 'ger', label: 'Deutsch', flag: grflag }
    ];

    const handleAccept = () => {
      setShowDisclaimer(false);
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl">

          {/* Top bar with Language Dropdown + Dark mode */}
          <div className="flex justify-between items-center mb-4">
            {/* Custom Dropdown with Twemoji flags */}
            <div className="relative">
              <button
                className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg focus:outline-none"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <img src={languages.find(l => l.code === language)?.flag} alt="" className="w-5 h-5" />
                <span className="text-sm text-gray-800 dark:text-gray-200">
                  {languages.find(l => l.code === language)?.label}
                </span>
              </button>
              {dropdownOpen && (
                <div className="absolute mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 w-40 z-50">
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code);
                        setDropdownOpen(false);
                      }}
                      className="flex items-center gap-2 px-3 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <img src={lang.flag} alt="" className="w-5 h-5" />
                      <span className="text-sm text-gray-800 dark:text-gray-200">{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Dark Mode Button */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center justify-center"
              title={t('appearance')}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>

          {/* App banner logo */}
          <div className="flex justify-center mb-6">
            <img
              src={banner}
              alt="App Logo"
              className="w-42 h-30 object-contain"
            />
          </div>

          {/* Disclaimer content */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4" dir="rtl">
              {t("disclaimerheader")}
            </h1>
            <div className={`text-sm text-gray-600 dark:text-gray-300 ${getTextAlign()} leading-relaxed space-y-4`} dir={isRTL ? "rtl" : "ltr"}>
              <p>
                {t("disclaimertext1")}
              </p>
              <p>
                {t("disclaimertext2")}
                <a
                  href="https://forms.gle/32pKMeAUP5KpSnSr9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 dark:text-blue-400 underline hover:text-blue-600 dark:hover:text-blue-300"
                >
                  {t("gform")}
                </a>
              </p>
              <p>
                {t("disclaimertext3")}
              </p>
            </div>
          </div>

          <button
            onClick={handleAccept}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-medium transition-colors"
          >
            {t('disclaimerconfirm')}
          </button>
        </div>
      </div>
    );
  };


  // -------------------- AUTH / LOGIN SCREEN --------------------
  const LoginScreen = () => {
    const [step, setStep] = useState(1);
    const [name, setName] = useState('');
    const [selectedUniversity, setSelectedUniversity] = useState('');
    const [selectedFaculty, setSelectedFaculty] = useState('');
    const [error, setError] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { t, language, changeLanguage } = useLanguage(); // ✅ Added for language control

    // Helper functions for RTL/LTR support
    const getTextAlign = () => {
      return ["ar", "he", "fa", "ur"].includes(language) ? "text-right" : "text-left";
    };
    
    const isRTL = ["ar", "he", "fa", "ur"].includes(language);

    // Helper function to capitalize each word
    const capitalizeWords = (str) => {
      return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    };

    // Helper function to get first name only
    const getFirstName = (fullName) => {
      return capitalizeWords(fullName.split(' ')[0] || '');
    };

    // Helper function to get first two names
    const getFirstTwoNames = (fullName) => {
      const names = fullName.split(' ');
      return capitalizeWords(names.slice(0, 2).join(' '));
    };

    const languages = [
      { code: 'en', label: 'English', flag: enflag },
      { code: 'ar', label: 'العربية', flag: arflag },
      { code: 'fr', label: 'Français', flag: frflag },
      { code: 'ch', label: '中国人', flag: chflag },
      { code: 'ger', label: 'Deutsch', flag: grflag }
    ];

    const universities = React.useMemo(() => {
      return courses.filter(Boolean);
    }, [courses]);

    const faculties = React.useMemo(() => {
      if (!selectedUniversity) return [];
      const uni = courses.find(u => u.university === selectedUniversity);
      return uni?.faculties || [];
    }, [selectedUniversity, courses]);

    const handleNameNext = () => {
      if (!name.trim()) {
        setError(t('namereqwarn'));
        return;
      }
      setError('');
      setStep(2);
    };

    const handleUniversityNext = () => {
      if (!selectedUniversity) {
        setError(t('collegeselectwarn'));
        return;
      }
      setError('');
      setStep(3);
    };

    const handleLogin = () => {
      if (!selectedFaculty) {
        setError(t('facultywarn'));
        return;
      }

      const userData = {
        id: Date.now(),
        firstName: name.trim(),
        displayName: name.trim(),
        name: name.trim(),
        university: selectedUniversity,
        faculty: selectedFaculty,
        year: t('year'),
        enrolledCourses: [],
        ...generateRandomStats()
      };

      const uni = courses.find(u => u.university === selectedUniversity);
      const faculty = uni?.faculties?.find(f => f.name === selectedFaculty || f.faculty === selectedFaculty);
      if (faculty && faculty.courses) {
        userData.enrolledCourses = faculty.courses.map(c => c.subtitle).slice(0, 5);
      }

      // Store the properly formatted names
      userData.fullName = capitalizeWords(name.trim());
      userData.firstName = getFirstName(name.trim());
      userData.firstTwoNames = getFirstTwoNames(name.trim());

      setCurrentUser(userData);
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl">

          {/* Top bar with Language Dropdown + Dark mode */}
          <div className="flex justify-between items-center mb-4">
            {/* Custom Dropdown with local flags */}
            <div className="relative">
              <button
                className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg focus:outline-none"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <img src={languages.find(l => l.code === language)?.flag} alt="" className="w-5 h-5" />
                <span className="text-sm text-gray-800 dark:text-gray-200">
                  {languages.find(l => l.code === language)?.label}
                </span>
              </button>
              {dropdownOpen && (
                <div className="absolute mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 w-40 z-50">
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code);
                        setDropdownOpen(false);
                      }}
                      className="flex items-center gap-2 px-3 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <img src={lang.flag} alt="" className="w-5 h-5" />
                      <span className="text-sm text-gray-800 dark:text-gray-200">{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Dark Mode Button */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center justify-center"
              title={t('appearance')}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>

          {/* App banner logo */}
          <div className="flex justify-center mb-6">
            <img
              src={banner}
              alt="App Logo"
              className="w-42 h-30 object-contain"
            />
          </div>

          {/* Progress indicator */}
          <div className="flex justify-center mb-6">
            <div className="flex gap-2">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`w-3 h-3 rounded-full transition-colors ${s <= step ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                />
              ))}
            </div>
          </div>

          {step === 1 && (
            <>
              <h1 className={`text-2xl font-bold text-center text-gray-800 dark:text-white mb-2`} dir={isRTL ? "rtl" : "ltr"}>
                {t("welcomelogin")}
              </h1>
              <p className={`text-center text-gray-600 dark:text-gray-300 mb-8 text-sm`} dir={isRTL ? "rtl" : "ltr"}>
                {t("namereq")}
              </p>
              <input
                type="textarea"
                value={name}
                onChange={e => setName(e.target.value)}
                className={`w-full border border-gray-200 dark:border-gray-600 px-4 py-3 rounded-xl mb-6 ${getTextAlign()} bg-gray-50 dark:bg-gray-700 dark:text-white focus:bg-white dark:focus:bg-gray-600 focus:border-blue-500 focus:outline-none transition-colors`}
                placeholder={t('namereqwarn')}
                dir={isRTL ? "rtl" : "ltr"}
                autoFocus
              />
              <button
                onClick={handleNameNext}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-medium transition-colors"
              >
                {t('next')}
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <h1 className={`text-2xl font-bold text-center text-gray-800 dark:text-white mb-2`} dir={isRTL ? "rtl" : "ltr"}>
                {t("facultyselect")}
              </h1>
              <p className={`text-center text-gray-600 dark:text-gray-300 mb-8 text-sm`} dir={isRTL ? "rtl" : "ltr"}>
                {t("welcome")} <span className="font-bold">{getFirstName(name)}</span>، {t("collegeselectplaceholder")}
              </p>
              <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                {universities.map((uni) => (
                  <button
                    key={uni.university}
                    onClick={() => setSelectedUniversity(uni.university)}
                    className={`w-full p-4 ${getTextAlign()} rounded-xl border-2 transition-colors ${selectedUniversity === uni.university
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                      : 'border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-500'
                      }`}
                    dir={isRTL ? "rtl" : "ltr"}
                  >
                    <span className="text-gray-900 dark:text-white">{uni.displayname}</span>
                  </button>
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-xl font-medium transition-colors"
                >
                  {t("back")}
                </button>
                <button
                  onClick={handleUniversityNext}
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-medium transition-colors"
                >
                  {t("next")}
                </button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h1 className={`text-2xl font-bold text-center text-gray-800 dark:text-white mb-2`} dir={isRTL ? "rtl" : "ltr"}>
                {t("facultyselect")}
              </h1>
              <p className={`text-center text-gray-600 dark:text-gray-300 mb-8 text-sm`} dir={isRTL ? "rtl" : "ltr"}>
                {t("facultyselectplaceholder")}   <span className="font-bold">{universities.find(u => u.university === selectedUniversity)?.displayname || selectedUniversity}</span>
              </p>
              <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                {faculties.map((faculty) => (
                  <button
                    key={faculty.name || faculty.faculty}
                    onClick={() => setSelectedFaculty(faculty.name || faculty.faculty)}
                    className={`w-full p-4 ${getTextAlign()} rounded-xl border-2 transition-colors ${selectedFaculty === (faculty.name || faculty.faculty)
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                      : 'border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-500'
                      }`}
                    dir={isRTL ? "rtl" : "ltr"}
                  >
                    <span className="text-gray-900 dark:text-white">{faculty.displayname || faculty.name || faculty.faculty}</span>
                  </button>
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-xl font-medium transition-colors"
                >
                  {t("back")}
                </button>
                <button
                  onClick={handleLogin}
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-medium transition-colors"
                >
                  {t("enter")}
                </button>
              </div>
            </>
          )}

          {/* Error message */}
          {error && (
            <div className="text-red-600 dark:text-red-400 mt-4 text-center text-sm" dir="rtl">
              {error}
            </div>
          )}
        </div>
      </div>
    );
  };

  // If showing disclaimer, show disclaimer screen first
  if (showDisclaimer) {
    return <DisclaimerScreen />;
  }

  // If not logged in show login screen and stop (keeps all pages intact)
  if (!currentUser) {
    return <LoginScreen />;
  }

  // ---------- dynamic faculty data for current user ----------
  // (facultyCourses, facultyProfessors, and facultyStudents are already declared above)

  // -------------------- UTIL --------------------
  // Make PageWrapper responsive and properly handle different screen sizes
  const PageWrapper = ({ children, paddedBottom = true }) => (
    <div className={`flex flex-col h-screen bg-gray-50 dark:bg-gray-900 pt-4 px-2 sm:px-4 max-w-full overflow-hidden`}>
      <div className="flex-1 overflow-y-auto scrollbar-hide pb-20 min-h-0">{children}</div>
    </div>
  );

  const SectionCard = ({ title, children, className }) => (
    <div className={`bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm ${className || ''}`}>
      {title && <h2 className={`text-lg font-semibold mb-3 ${getTextAlign()} text-gray-900 dark:text-white`}>{title}</h2>}
      {children}
    </div>
  );

  const StatPill = ({ color, label, value }) => (
    <div className={{
      blue: 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300',
      green: 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300',
      red: 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300',
      yellow: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300',
    }[color] + ' p-4 rounded-xl'}>
      <div className="text-sm mb-1">{label}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );

  const Header = () => {
    // Get display names for university and faculty
    const getUniversityDisplayName = () => {
      if (!currentUser?.university) return '—';
      const uni = courses.find(u => u.university === currentUser.university);
      return uni?.displayname || currentUser.university;
    };

    const getFacultyDisplayName = () => {
      if (!currentUser?.faculty) return '—';
      const uni = courses.find(u => u.university === currentUser.university);
      const faculty = uni?.faculties?.find(f => f.name === currentUser.faculty || f.faculty === currentUser.faculty);
      return faculty?.displayname || currentUser.faculty;
    };

    return (
      <div className="px-4 pb-2">
        <div className="flex items-center justify-between">
          <div className={getTextAlign()}>
            <div className="font-bold text-lg text-gray-900 dark:text-white"> {t("welcome")} {currentUser && (currentUser.firstTwoNames)} 👋</div>
            <div className="text-sm text-gray-600 dark:text-gray-400"> {getUniversityDisplayName()}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400"> {getFacultyDisplayName()}</div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm text-gray-900 dark:text-white"><Search size={18} /></button>
            <button className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm relative text-gray-900 dark:text-white">
              <Bell size={18} />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full" />
            </button>
            <button onClick={() => { setCurrentUser(null); }} title="Logout" className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm text-sm text-gray-900 dark:text-white">{t("exit")}</button>
          </div>
        </div>
      </div>
    );
  };

  // -------------------- DASHBOARD --------------------
  const DashboardScreen = () => (
    <PageWrapper>
      <Header />

      <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4">
        <StatPill color="green" label={t('attendance')} value={`${currentUser.attendance ?? '—'}%`} />
        <StatPill color="blue" label={t('gpa')} value={`${currentUser.gpa ?? '—'}`} />
      </div>

      <SectionCard title={t('todayschedule')}>
        <div className="space-y-3">
          {/* Add default schedule if facultyData.schedule is undefined */}
          {(facultyData.schedule || [
            { name: 'هندسة البرمجيات', instructor: 'د. محمد أحمد', place: 'قاعة 301', time: '10:00 AM', type: 'محاضرة' },
            { name: 'قواعد البيانات', instructor: 'د. سارة محمود', place: 'معمل 2', time: '12:30 PM', type: 'معمل' },
            { name: 'شبكات الحاسوب', instructor: 'د. أحمد مراد', place: 'معمل 205', time: '1:00 PM', type: 'عملي' }
          ]).slice(0, 2).map((s, idx) => (
            <div key={idx} className={`flex items-center justify-between p-3 ${idx === 0 ? 'bg-blue-50 dark:bg-blue-900/30' : 'bg-gray-50 dark:bg-gray-700'} rounded-lg`}>
              <div className={getTextAlign()}>
                <div className="font-medium text-gray-900 dark:text-white">{s.name}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{s.instructor || s.teacher || 'د. غير محدد'} - {s.place}</div>
              </div>
              <div className="text-left">
                <div className={`${idx === 0 ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'} font-medium`}>{s.time}</div>
                <div className={`text-xs ${idx === 0 ? 'text-blue-500 bg-blue-100 dark:text-blue-300 dark:bg-blue-900' : 'text-gray-500 bg-gray-100 dark:text-gray-400 dark:bg-gray-600'} px-2 py-1 rounded`}>{s.type}</div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => setActiveTab('calendar')}
          className="text-blue-500 dark:text-blue-400 text-sm mt-3 text-center w-full hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
        >
          {t("showfullschedule")}
        </button>
      </SectionCard>

      <SectionCard title={t('currentassignments')} className="mt-4">
        <div className="space-y-3">
          {assignments.slice(0, 2).map(assignment => (
            <div key={assignment.id} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex justify-between items-start mb-1">
                <div className={`text-xs px-2 py-1 rounded ${assignment.status === t("notsubmitted") ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400' :
                  assignment.status === t("submitted") ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' :
                    'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400'
                  }`}>
                  {assignment.grade || assignment.status}
                </div>
                <div className={getTextAlign()}>
                  <div className="font-medium text-gray-900 dark:text-white text-sm">{assignment.title}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">{assignment.subject}</div>
                </div>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400"> - {t("deadline")} {assignment.dueDate}</div>
            </div>
          ))}
        </div>
        <button
          onClick={() => setActiveTab('assignments')}
          className="text-blue-500 dark:text-blue-400 text-sm mt-3 text-center w-full hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
        >
          {t("showallassign")}
        </button>
      </SectionCard>

      <SectionCard title={t('recentannouncements')} className="mt-4">
        <div className="space-y-3">
          <div className="flex gap-3 p-3 bg-red-50 dark:bg-red-900/30 rounded-lg border-r-4 border-red-400 dark:border-red-500">
            <AlertCircle className="text-red-500 dark:text-red-400 mt-1" size={20} />
            <div className="text-right flex-1">
              <div className="font-medium text-red-800 dark:text-red-300">إعلان مهم: تغيير موعد امتحان البرمجة</div>
              <div className="text-sm text-red-600 dark:text-red-400 mt-1">تم تأجيل امتحان مادة البرمجة المتقدمة من يوم الأحد إلى يوم الإثنين</div>
              <div className="text-xs text-red-500 dark:text-red-400 mt-2">منذ ساعتين</div>
            </div>
          </div>

          <div className="flex gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border-r-4 border-yellow-400 dark:border-yellow-500">
            <FileText className="text-yellow-600 dark:text-yellow-400 mt-1" size={20} />
            <div className="text-right flex-1">
              <div className="font-medium text-yellow-800 dark:text-yellow-300">ورشة عمل جديدة</div>
              <div className="text-sm text-yellow-600 dark:text-yellow-400 mt-1">ورشة عمل حول الذكاء الاصطناعي يوم الخميس الساعة 3 مساءً</div>
              <div className="text-xs text-yellow-500 dark:text-yellow-400 mt-2">منذ 3 ساعات</div>
            </div>
          </div>

          {/* extra announcements */}
          <div className="flex gap-3 p-3 bg-green-50 dark:bg-green-900/30 rounded-lg border-r-4 border-green-400 dark:border-green-500">
            <CheckCircle className="text-green-600 dark:text-green-400 mt-1" size={20} />
            <div className="text-right flex-1">
              <div className="font-medium text-green-800 dark:text-green-300">تذكير: موعد تسليم المشروع</div>
              <div className="text-sm text-green-600 dark:text-green-400 mt-1">آخر موعد لتسليم مشروع الفصل النهائي 22-08-2025</div>
              <div className="text-xs text-green-500 dark:text-green-400 mt-2">منذ 5 ساعات</div>
            </div>
          </div>

          <div className="flex gap-3 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg border-r-4 border-blue-400 dark:border-blue-500">
            <Bell className="text-blue-600 dark:text-blue-400 mt-1" size={20} />
            <div className="text-right flex-1">
              <div className="font-medium text-blue-800 dark:text-blue-300">فتح باب تسجيل المقررات</div>
              <div className="text-sm text-blue-600 dark:text-blue-400 mt-1">التسجيل للفصل القادم يفتح يوم الأحد المقبل</div>
              <div className="text-xs text-blue-500 dark:text-blue-400 mt-2">منذ اليوم</div>
            </div>
          </div>
        </div>
      </SectionCard>
    </PageWrapper>
  );

  // -------------------- SCHEDULE --------------------
  const ScheduleScreen = () => (
    <PageWrapper>
      <h2 className={`text-lg font-semibold mb-4 ${getTextAlign()}`}>{t("studyschedule")}</h2>
      <SectionCard>
        <div className="space-y-3">
          {facultyCourses.length
            ? facultyCourses.map((s, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-2">
                  <FileText size={16} className="text-blue-500" />
                  <span className="text-blue-500 text-sm">{t(s.title) || t("lecture")} </span>
                </div>
                <div className={`${getTextAlign()} flex-1 mx-4`}>
                  <div className="font-medium">{s.subtitle}</div>
                  <div className="text-sm text-gray-600">{s.professor || 'د. غير محدد'} - {s.room || 'قاعة غير محددة'}</div>
                </div>
                <div className="text-blue-600 font-medium">—</div>
              </div>
            ))
            : <div className="text-gray-500 text-center">لا يوجد جدول متاح</div>
          }
        </div>
      </SectionCard>
    </PageWrapper>
  );

  // -------------------- ASSIGNMENTS --------------------
  const AssignmentsScreen = () => {
    const handleFileChange = (e, assignmentId) => {
      const file = e.target.files?.[0];
      if (file) {
        setSelectedFile(file.name);
        setAssignments(prev => prev.map(a => a.id === assignmentId ? { ...a, status: t("submitted") } : a));
      }
    };

    // Update filter options to include all types
    const fileTypes = ['all', 'lecture', 'exercise', 'project'];
    const fileTypeLabels = {
      all: t("all"),
      lecture: t("lecture"),
      exercise: t("exercises"),
      project: t("projects")
    };

    // Build files from faculty courses
    const files = buildFiles(facultyData);
    const filteredFiles = fileFilter === 'all' ? files : files.filter(f => f.type === fileFilter);

    return (
      <PageWrapper>
        <h2 className={`text-lg font-semibold mb-4 ${getTextAlign()} text-gray-900 dark:text-white`}>{t("currentassignments")}</h2>

        <div className="space-y-3">
          {assignments.map(assignment => (
            <div key={assignment.id} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <div className={`text-sm px-2 py-1 rounded ${assignment.status === t("notsubmitted") ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400' :
                  assignment.status === t("submitted") ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' :
                    'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400'
                  }`}>
                  {assignment.grade || assignment.status}
                </div>
                <div className="text-right">
                  <div className="font-medium text-gray-900 dark:text-white">{assignment.title}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{assignment.subject} - {t("deadline")} {assignment.dueDate}</div>
                </div>
              </div>

              {assignment.status === t("notsubmitted") && (
                <label className="flex items-center gap-2 cursor-pointer text-blue-600 dark:text-blue-400 text-sm mt-2">
                  <Upload size={16} />
                  <span>{t("uploadfile")}</span>
                  <input type="file" className="hidden" onChange={(e) => handleFileChange(e, assignment.id)} />
                </label>
              )}
            </div>
          ))}
        </div>

        {selectedFile && (
          <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 p-3 rounded-xl mt-4">
            ✅ تم رفع الملف: {selectedFile}
          </div>
        )}

        <SectionCard className="mt-4">
          <div className="flex items-center justify-between mb-4">
            {/* filter icon + dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowFileFilterMenu(prev => !prev)}
                className="flex items-center gap-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-1 rounded text-sm shadow-sm"
              >
                <Filter size={16} />
                <span className="text-xs">{t("filter")}</span>
              </button>

              {showFileFilterMenu && (
                <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-2 z-50 border dark:border-gray-700">
                  {fileTypes.map(opt => (
                    <button
                      key={opt}
                      onClick={() => { setFileFilter(opt); setShowFileFilterMenu(false); }}
                      className={`w-full text-right px-3 py-2 rounded text-sm ${fileFilter === opt ? 'bg-blue-600 text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white'}`}
                    >
                      {fileTypeLabels[opt]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{t("lecturesandfiles")}</h2>
          </div>

          <div className="space-y-3">
            {filteredFiles.map((file, idx) => (
              <div key={file.id ?? idx} className="flex items-center justify-between p-3 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                <div className="flex items-center gap-3">
                  <Download className="text-blue-500 dark:text-blue-400" size={20} />
                  <span className={`text-xs px-2 py-1 rounded text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30`}>
                    {fileTypeLabels[file.type] || file.type}
                  </span>
                </div>
                <div className="text-right flex-1 mx-4">
                  <div className="text-sm font-medium truncate text-gray-900 dark:text-white">{file.name || file.title || (file.course && `${file.course} - ملف`)}</div>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </PageWrapper>
    );
  };

  // -------------------- CHAT / MESSAGES --------------------
  const ChatScreen = ({ chat, onBack }) => {
    const [messages, setMessages] = useState([
      { id: 1, text: t("msg"), sender: 'other', timestamp: '12:30' },
    ]);
    const [input, setInput] = useState('');
    const [showChatDetails, setShowChatDetails] = useState(false);

    const sendMessage = () => {
      if (!input.trim()) return;
      setMessages(prev => ([
        ...prev,
        { id: Date.now(), text: input, sender: 'me', timestamp: new Date().toLocaleTimeString('ar', { hour: '2-digit', minute: '2-digit' }) }
      ]));
      setInput('');
    };

    // Mock data for photos and files
    const mockPhotos = Array(8).fill(null).map((_, i) => ({ id: i + 1, url: '#' }));
    const mockFiles = Array(4).fill(null).map((_, i) => ({ id: i + 1, name: `ملف ${i + 1}`, type: 'pdf' }));

    // Get chat participant data
    const getChatParticipantData = () => {
      // For all chats, use the chat's stored data
      return {
        name: chat.name,
        university: chat.university || currentUser.university || 'جامعة غير محددة',
        faculty: chat.faculty || currentUser.faculty || 'كلية غير محددة'
      };
    };

    const participantData = getChatParticipantData();

    return (
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen h-screen flex flex-col">
        {showChatDetails ? (
          /* Chat Details - Full Screen */
          <div className="w-full bg-white dark:bg-gray-800 flex flex-col h-full overflow-hidden">
            {/* Header */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3">
              <button onClick={() => setShowChatDetails(false)}>
                <ChevronLeft className="text-gray-600 dark:text-gray-300" size={20} />
              </button>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">chat details</h2>
            </div>

            {/* Profile Section */}
            <div className="p-6 text-center border-b border-gray-200 dark:border-gray-700">
              <div className="w-24 h-24 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="text-gray-600 dark:text-gray-300" size={40} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{participantData.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{participantData.university}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{participantData.faculty}</p>
            </div>

            {/* Photos Section */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-600 dark:text-gray-400">{t("pics")}</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {mockPhotos.map((photo) => (
                  <div key={photo.id} className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Files Section */}
            <div className="p-4 flex-1">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-600 dark:text-gray-400">ملفات</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {mockFiles.map((file) => (
                  <div key={file.id} className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center">
                    <FileText className="text-gray-400 dark:text-gray-500" size={24} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Chat Interface - Full Screen */
          <div className="w-full flex flex-col h-full overflow-hidden">
            {/* Chat Header */}
            <div className="bg-white dark:bg-gray-800 p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <button onClick={onBack}>
                  <ChevronLeft className="text-gray-600 dark:text-gray-300" size={20} />
                </button>
                <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                  <User className="text-gray-600 dark:text-gray-300" size={20} />
                </div>
                <div className="text-right">
                  <h3 className="font-semibold text-gray-800 dark:text-white">{chat.name}</h3>
                  <div className="text-xs text-green-500">متصل الآن</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Chat</h2>
                <button
                  onClick={() => setShowChatDetails(!showChatDetails)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <div className="flex flex-col gap-1">
                    <div className="w-1 h-1 bg-gray-600 dark:bg-gray-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-600 dark:bg-gray-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-600 dark:bg-gray-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-600 dark:bg-gray-400 rounded-full"></div>
                  </div>
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-gray-50 dark:bg-gray-900 min-h-0">
              {messages.map(m => (
                <div key={m.id} className={`flex ${m.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[70%] p-3 rounded-2xl ${m.sender === 'me'
                    ? 'bg-blue-500 text-white rounded-br-md'
                    : 'bg-white dark:bg-gray-800 shadow-sm rounded-bl-md border dark:border-gray-700'
                    }`}>
                    <div className={`text-sm ${m.sender === 'me' ? 'text-white' : 'text-gray-900 dark:text-white'}`}>{m.text}</div>
                    <div className={`text-xs mt-1 ${m.sender === 'me' ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'}`}>
                      {m.timestamp}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="bg-white dark:bg-gray-800 p-4 border-t border-gray-200 dark:border-gray-700 flex gap-3 items-center flex-shrink-0 safe-area-inset-bottom">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="اكتب رسالة..."
                className={`flex-1 border border-gray-300 dark:border-gray-600 rounded-full px-4 py-2 ${getTextAlign()} focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                onKeyDown={(e) => { if (e.key === 'Enter') sendMessage(); }}
                autoComplete="off"
                dir={isRTL ? "rtl" : "ltr"}
              />
              <button
                onClick={sendMessage}
                className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors flex-shrink-0"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  const MessagesScreen = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [showSearch, setShowSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeChats, setActiveChats] = useState([]);
    const [searchHistory, setSearchHistory] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);

    // Load and persist chats
    React.useEffect(() => {
      const savedChats = currentUser ? JSON.parse(sessionStorage.getItem(`chats-${currentUser.id}`) || '[]') : [];

      // Standard chats that are always present
      const baseChats = [
        // Admin chat
        {
          id: 'admin-1',
          name: t("studentaffairs"),
          message: 'إرشادات التسجيل متاحة',
          time: '10:10AM',
          type: 'admin'
        },
        // Faculty chats
        ...(facultyProfessors || []).map((p, idx) => ({
          id: `prof-${idx}`,
          name: typeof p === 'string' ? p : p.name || p.title,
          message: 'مرحباً',
          time: '12:30PM',
          type: 'faculty'
        })),
        // Saved student chats
        ...savedChats
      ];

      setActiveChats(baseChats);
    }, [currentUser, facultyProfessors]);

    // Get available universities from courses data (for random assignment)
    const universities = React.useMemo(() => {
      return [...new Set(courses.map(course => course.university))].filter(Boolean);
    }, [courses]);

    // Filter chats - simplified to show all types
    const filteredChats = React.useMemo(() => {
      if (activeFilter === 'all') {
        return activeChats;
      }
      return activeChats.filter(chat => chat.type === activeFilter);
    }, [activeChats, activeFilter]);

    const startNewChat = (studentName) => {
      // Generate random university and faculty for the chat recipient
      const randomUni = universities[Math.floor(Math.random() * universities.length)];
      const randomUniFaculties = courses.find(u => u.university === randomUni)?.faculties || [];
      const randomFaculty = randomUniFaculties.length > 0
        ? randomUniFaculties[Math.floor(Math.random() * randomUniFaculties.length)]
        : { name: 'كلية عامة' };

      const newChat = {
        id: `stu-${Date.now()}`,
        name: studentName,
        message: 'تم بدء المحادثة',
        time: new Date().toLocaleTimeString('ar', { hour: '2-digit', minute: '2-digit' }),
        type: 'students',
        university: randomUni,
        faculty: randomFaculty.name || randomFaculty.faculty,
        studentId: Date.now(),
      };

      // Update chats
      const updatedChats = [...activeChats, newChat];
      setActiveChats(updatedChats);

      // Save student chats
      const studentChats = updatedChats.filter(c => c.type === 'students');
      sessionStorage.setItem(`chats-${currentUser.id}`, JSON.stringify(studentChats));

      // Open the chat
      setOpenChat(newChat);
      setShowSearch(false);
      setSearchQuery('');
      setSelectedStudent(null);
    };

    // Modified search function - now just accepts any typed name
    const searchResults = showSearch && searchQuery.trim() ? [searchQuery.trim()] : [];

    const handleSearch = (query) => {
      setSearchQuery(query);
      setSelectedStudent(null); // Clear selected student when search changes
    };

    const viewStudentProfile = (studentName) => {
      // Generate random university and faculty for display
      const randomUni = universities[Math.floor(Math.random() * universities.length)];
      const randomUniFaculties = courses.find(u => u.university === randomUni)?.faculties || [];
      const randomFaculty = randomUniFaculties.length > 0
        ? randomUniFaculties[Math.floor(Math.random() * randomUniFaculties.length)]
        : { name: 'كلية عامة' };

      const mockStudent = {
        id: Date.now(),
        name: studentName,
        displayName: studentName,
        university: randomUni,
        faculty: randomFaculty.name || randomFaculty.faculty,
        year: `السنة ${Math.floor(Math.random() * 4) + 1}` // Random year 1-4
      };

      setSelectedStudent(mockStudent);

      // Add to search history if not already there
      setSearchHistory(prev => {
        const exists = prev.find(s => s.name === studentName);
        if (!exists) {
          return [...prev, mockStudent];
        }
        return prev;
      });
    };

    if (openChat) return <ChatScreen chat={openChat} onBack={() => setOpenChat(null)} />;

    // Helper: count admin chats
    const adminChatsCount = activeChats.filter(c => c.type === 'admin').length;

    return (
      <PageWrapper>
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => setShowSearch(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm"
          >
            {t("newchat")} +
          </button>
          <h2 className="text-lg font-semibold">{t('messages')}</h2>
        </div>

        {showSearch ? (
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <button
                onClick={() => {
                  setShowSearch(false);
                  setSearchQuery('');
                  setSelectedStudent(null);
                }}
                className="text-gray-500 dark:text-gray-400"
              >
                إلغاء
              </button>
              <h3 className="font-medium text-gray-900 dark:text-white">البحث عن طالب</h3>
            </div>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="اكتب اسم الطالب للبحث عنه..."
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 mb-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              autoFocus
            />

            {selectedStudent ? (
              // Student Profile Card
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <button
                    onClick={() => startNewChat(selectedStudent.name)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm"
                  >
                    إرسال طلب محادثة
                  </button>
                  <div className="text-right">
                    <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                      {selectedStudent.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">#{selectedStudent.id}</p>
                  </div>
                </div>
                <div className="space-y-2 text-right">
                  <p className="text-gray-600 dark:text-gray-400">الجامعة: {selectedStudent.university}</p>
                  <p className="text-gray-600 dark:text-gray-400">الكلية: {selectedStudent.faculty}</p>
                  <p className="text-gray-600 dark:text-gray-400">السنة: {selectedStudent.year || '—'}</p>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                {searchQuery && searchResults.length > 0 && (
                  <div className="space-y-2">
                    {searchResults.map((studentName, idx) => (
                      <div
                        key={idx}
                        onClick={() => viewStudentProfile(studentName)}
                        className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        <div className="text-blue-500 text-sm">عرض الملف</div>
                        <div className="text-right">
                          <div className="font-medium text-gray-900 dark:text-white">
                            {studentName}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">طالب جديد</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {searchQuery && !searchResults.length && (
                  <div className="text-center text-gray-500 dark:text-gray-400 py-4">
                    اكتب اسم الطالب للبحث عنه
                  </div>
                )}

                {/* Search History */}
                {!searchQuery && searchHistory.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-2 text-right">سجل البحث</h4>
                    {searchHistory.map((student, idx) => (
                      <div
                        key={idx}
                        onClick={() => viewStudentProfile(student.name)}
                        className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 mb-2"
                      >
                        <div className="text-blue-500 text-sm">عرض الملف</div>
                        <div className="text-right">
                          <div className="font-medium text-gray-900 dark:text-white">
                            {student.name}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">#{student.id}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="flex bg-gray-200 dark:bg-gray-700 p-1 rounded-lg mb-4 text-sm">
              <button onClick={() => setActiveFilter('all')}
                className={`flex-1 py-2 text-center rounded-md ${activeFilter === 'all' ? 'bg-white dark:bg-gray-800 text-gray-700 dark:text-white' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600'}`}>
                {t("all")} ({activeChats.length})
              </button>
              <button onClick={() => setActiveFilter('students')}
                className={`flex-1 py-2 text-center rounded-md ${activeFilter === 'students' ? 'bg-white dark:bg-gray-800 text-gray-700 dark:text-white' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600'}`}>
                {t("students")} ({activeChats.filter(c => c.type === 'students').length})
              </button>
              <button onClick={() => setActiveFilter('faculty')}
                className={`flex-1 py-2 text-center rounded-md ${activeFilter === 'faculty' ? 'bg-white dark:bg-gray-800 text-gray-700 dark:text-white' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600'}`}>
                {t("faculty")} ({activeChats.filter(c => c.type === 'faculty').length})
              </button>
              <button onClick={() => setActiveFilter('admin')}
                className={`flex-1 py-2 text-center rounded-md ${activeFilter === 'admin' ? 'bg-white dark:bg-gray-800 text-gray-700 dark:text-white' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600'}`}>
                {t("administration")} ({adminChatsCount})
              </button>
            </div>

            <div className="space-y-3">
              {filteredChats.map(chat => (
                <div key={chat.id}
                  onClick={() => setOpenChat(chat)}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
                >
                  <div className="relative">
                    <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                      <User className="text-gray-600 dark:text-gray-300" size={20} />
                    </div>
                  </div>
                  <div className={`flex-1 ${getTextAlign()}`}>
                    <div className="font-medium text-gray-900 dark:text-white">{chat.name}</div>
                    {chat.type === 'students' && chat.university && (
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {chat.university} - {chat.faculty}
                      </div>
                    )}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{chat.time}</div>
                </div>
              ))}
            </div>
          </>
        )}
      </PageWrapper>
    );
  };

  // -------------------- PROFILE + SUB SCREENS --------------------
  const ProfileScreen = () => {
    // Get display names for university and faculty
    const getUniversityDisplayName = () => {
      if (!currentUser?.university) return '—';
      const uni = courses.find(u => u.university === currentUser.university);
      return uni?.displayname || currentUser.university;
    };

    const getFacultyDisplayName = () => {
      if (!currentUser?.faculty) return '—';
      const uni = courses.find(u => u.university === currentUser.university);
      const faculty = uni?.faculties?.find(f => f.name === currentUser.faculty || f.faculty === currentUser.faculty);
      return faculty?.displayname || currentUser.faculty;
    };

    return (
    <PageWrapper>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center mb-6">
        <div className="w-20 h-20 bg-purple-200 dark:bg-purple-700 rounded-full mx-auto mb-4 flex items-center justify-center"><User className="text-purple-600 dark:text-purple-300" size={32} /></div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">{currentUser.fullName || currentUser.displayName || currentUser.name}</h2>
        <div className="text-gray-600 dark:text-gray-400 text-sm mt-2">
          <div>{getUniversityDisplayName()}</div>
          <div>{getFacultyDisplayName()}</div>
          <div>{currentUser.year || ''}</div>
        </div>
      </div>

      <div className="space-y-3">
        <button onClick={() => setCurrentScreen('financial')} className={`w-full bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm flex items-center ${isRTL ? 'justify-between' : 'justify-between flex-row-reverse'} hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors`}>
          <ChevronLeft className={`text-gray-400 dark:text-gray-500 ${isRTL ? '' : 'rotate-180'}`} size={20} />
          <div className="flex items-center gap-3"><DollarSign className="text-green-500" size={20} /><span className="text-gray-900 dark:text-white">{t('academicexpenses')}</span></div>
        </button>
        <button onClick={() => setCurrentScreen('attendance')} className={`w-full bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm flex items-center ${isRTL ? 'justify-between' : 'justify-between flex-row-reverse'} hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors`}>
          <ChevronLeft className={`text-gray-400 dark:text-gray-500 ${isRTL ? '' : 'rotate-180'}`} size={20} />
          <div className="flex items-center gap-3"><Clock className="text-blue-500" size={20} /><span className="text-gray-900 dark:text-white">{t('attendancerecord')}</span></div>
        </button>
        <button onClick={() => setCurrentScreen('support')} className={`w-full bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm flex items-center ${isRTL ? 'justify-between' : 'justify-between flex-row-reverse'} hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors`}>
          <ChevronLeft className={`text-gray-400 dark:text-gray-500 ${isRTL ? '' : 'rotate-180'}`} size={20} />
          <div className="flex items-center gap-3"><HelpCircle className="text-orange-500" size={20} /><span className="text-gray-900 dark:text-white">{t('supporthelp')}</span></div>
        </button>
        <button onClick={() => setCurrentScreen('settings')} className={`w-full bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm flex items-center ${isRTL ? 'justify-between' : 'justify-between flex-row-reverse'} hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors`}>
          <ChevronLeft className={`text-gray-400 dark:text-gray-500 ${isRTL ? '' : 'rotate-180'}`} size={20} />
          <div className="flex items-center gap-3"><Settings className="text-gray-500" size={20} /><span className="text-gray-900 dark:text-white">{t('settings')}</span></div>
        </button>
      </div>

      <SectionCard title={t('studentstats')} className="mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{currentUser.credits || 24}</div>
            <div className="text-sm text-blue-700 dark:text-blue-300">{t('completedcredits')}</div>
          </div>
          <div className="text-center p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">{currentUser.projectsCompleted || 15}</div>
            <div className="text-sm text-green-700 dark:text-green-300">{t('completedprojects')}</div>
          </div>
        </div>
      </SectionCard>

      <SectionCard title={t('facultyprofessors')} className="mt-6">
        <div className="space-y-2">
          {facultyProfessors.length ? facultyProfessors.map((p, i) => <div key={i} className="p-3 bg-white dark:bg-gray-700 rounded shadow text-gray-900 dark:text-white">{typeof p === 'string' ? p : p.name || p.title}</div>) : <div className="text-sm text-gray-500 dark:text-gray-400">لا توجد بيانات للمحاضرين في هذه الكلية</div>}
        </div>
      </SectionCard>

      <SectionCard title={t('colleagues')} className="mt-4">
        <div className="space-y-2">
          {facultyStudents.length ? facultyStudents.map((s, i) => <div key={i} className="p-3 bg-white dark:bg-gray-700 rounded shadow text-gray-900 dark:text-white">{s.username || s.name || s.id}</div>) : <div className="text-sm text-gray-500 dark:text-gray-400">لا توجد بيانات للزملاء في هذه الكلية</div>}
        </div>
      </SectionCard>
    </PageWrapper>
  );
  };

  const AttendanceScreen = () => (
    <PageWrapper>
      <div className={`flex items-center gap-3 mb-4 ${isRTL ? '' : 'flex-row-reverse'}`}>
        <button onClick={() => setCurrentScreen('main')}><ChevronLeft className={`text-gray-600 dark:text-gray-300 ${isRTL ? '' : 'rotate-180'}`} size={24} /></button>
        <h2 className={`text-lg font-semibold ${getTextAlign()} text-gray-900 dark:text-white`}>{t("detailedattendancerecord")}</h2>
      </div>

      <SectionCard title={t("generalstatistics")}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center">
          <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg"><div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{currentUser.attendance ?? '—'}%</div><div className="text-xs text-blue-700 dark:text-blue-300">{t("totalpercentage")}</div></div>
          <div className="p-3 bg-red-50 dark:bg-red-900/30 rounded-lg"><div className="text-2xl font-bold text-red-600 dark:text-red-400">{currentUser.absences ?? 7}</div><div className="text-xs text-red-700 dark:text-red-300">{t("totalabsence")}</div></div>
          <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-lg"><div className="text-2xl font-bold text-green-600 dark:text-green-400">{currentUser.attended ?? 30}</div><div className="text-xs text-green-700 dark:text-green-300">{t("totalattendance")}</div></div>
        </div>
      </SectionCard>

      <div className="space-y-4 mt-4">
        {(facultyData.attendanceSummary || [{ name: 'هندسة البرمجيات', pct: 80, abs: 3, pres: 12 }, { name: 'قواعد البيانات', pct: 83, abs: 2, pres: 10 }]).map((c) => (
          <div key={c.name} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border dark:border-gray-700">
            <div className="flex justify-between items-center mb-3"><span className="text-green-600 dark:text-green-400 font-bold">{c.pct}%</span><span className="font-medium text-gray-900 dark:text-white">{c.name}</span></div>
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2"><span>{c.abs} {t("absence")}</span><span>{t("attendance")}{c.pres}</span></div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2"><div className="bg-green-500 dark:bg-green-400 h-2 rounded-full" style={{ width: `${c.pct}%` }} /></div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );

  const FinancialScreen = () => (
    <PageWrapper>
      <div className={`flex items-center gap-3 mb-4 ${isRTL ? '' : 'flex-row-reverse'}`}>
        <button onClick={() => setCurrentScreen('main')}><ChevronLeft className={`text-gray-600 dark:text-gray-300 ${isRTL ? '' : 'rotate-180'}`} size={24} /></button>
        <h2 className={`text-lg font-semibold ${getTextAlign()} text-gray-900 dark:text-white`}>{t('academicexpenses')}</h2>
      </div>

      <SectionCard title={t("academicyear2025")}>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"><span className="text-gray-700 dark:text-gray-200">{t("semesterone")}</span><span className="font-medium text-green-600 dark:text-green-400">{t("paid")} ✓</span></div>
          <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"><span className="text-gray-700 dark:text-gray-200">{t("semestertwo")}</span><span className="font-medium text-red-600 dark:text-red-400">{t("unpaid")}</span></div>
        </div>
      </SectionCard>

      <SectionCard title={t("paymentdetails")} className="mt-4">
        <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <div className="flex justify-between"><span>{t("basefees")}</span><span>8,000 EGP</span></div>
          <div className="flex justify-between"><span>{t("lab")}</span><span>1,200 EGP</span></div>
          <div className="flex justify-between"><span>{t("excellencediscount")}</span><span>- 500 EGP</span></div>
          <div className="border-t dark:border-gray-600 my-2" />
          <div className="flex justify-between font-semibold text-gray-900 dark:text-white"><span>{t("totaldue")}</span><span>8,700 EGP</span></div>
        </div>
      </SectionCard>
    </PageWrapper>
  );

  const SupportScreen = () => (
    <PageWrapper>
      <div className={`flex items-center gap-3 mb-4 ${isRTL ? '' : 'flex-row-reverse'}`}>
        <button onClick={() => setCurrentScreen('main')}><ChevronLeft className={`text-gray-600 dark:text-gray-300 ${isRTL ? '' : 'rotate-180'}`} size={24} /></button>
        <h2 className={`text-lg font-semibold ${getTextAlign()} text-gray-900 dark:text-white`}>{t('supporthelp')}</h2>
      </div>

      <SectionCard>
        <div className="space-y-3 text-right">
          <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div>
              <div className="font-medium text-gray-900 dark:text-white">{t("studentaffairsoffice")}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">{t("replywithinoneday")}</div>
            </div>
            <a href="#" className="flex items-center gap-2 text-blue-600 dark:text-blue-400"><Phone size={18} />{t("phone")}</a>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div>
              <div className="font-medium text-gray-900 dark:text-white">{t("technicalsupport")}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">{t("technicaldifficulities")}</div>
            </div>
            <a href="#" className="flex items-center gap-2 text-blue-600 dark:text-blue-400"><Mail size={18} />{t("email")}</a>
          </div>
        </div>
      </SectionCard>
    </PageWrapper>
  );

  // -------------------- SETTINGS SCREEN ---------------------
  const SettingsScreen = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false); // state for language dropdown
    const { t, language, changeLanguage } = useLanguage();

    const languages = [
      { code: 'en', label: 'English', flag: enflag },
      { code: 'ar', label: 'العربية', flag: arflag },
      { code: 'fr', label: 'Français', flag: frflag },
      { code: 'ch', label: '中国人', flag: chflag },
      { code: 'ger', label: 'Deutsch', flag: grflag }
    ];

    return (
      <PageWrapper>
        {/* Header */}
        <div className={`flex items-center gap-3 mb-4 ${isRTL ? '' : 'flex-row-reverse'}`}>
          <button onClick={() => setCurrentScreen('main')}>
            <ChevronLeft className={`text-gray-600 dark:text-gray-300 ${isRTL ? '' : 'rotate-180'}`} size={24} />
          </button>
          <h2 className={`text-lg font-semibold ${getTextAlign()} text-gray-800 dark:text-gray-100`}>
            {t('settings')}
          </h2>
        </div>

        {/* Appearance Section */}
        <SectionCard title={t("appearance")} className="mb-4">


          {/* Theme Options */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 text-right">
              {t("appearancesettings")}
            </h3>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setDarkMode(false)}
                className={`p-3 rounded-lg border-2 transition-colors ${!darkMode
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900'
                  : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700'}`}
              >
                <Sun className="mx-auto mb-2 text-yellow-500" size={24} />
                <div className="text-xs text-center text-gray-700 dark:text-gray-300">
                  {t("light")}
                </div>
              </button>

              <button
                onClick={() => setDarkMode(true)}
                className={`p-3 rounded-lg border-2 transition-colors ${darkMode
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900'
                  : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700'}`}
              >
                <Moon className="mx-auto mb-2 text-blue-500" size={24} />
                <div className="text-xs text-center text-gray-700 dark:text-gray-300">
                  {t("dark")}
                </div>
              </button>

              <button
                onClick={() => {
                  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  setDarkMode(systemDark);
                }}
                className="p-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 transition-colors"
              >
                <Monitor className="mx-auto mb-2 text-gray-500" size={24} />
                <div className="text-xs text-center text-gray-700 dark:text-gray-300">
                  {t("system")}
                </div>
              </button>
            </div>
          </div>
        </SectionCard>

        {/* General Settings */}
        <SectionCard title={t("generalsettings")} className="mt-4">
          <div className="space-y-3">
            {/* Language Custom Dropdown */}
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg relative">
              <span className="text-gray-900 dark:text-white">{t('language')}</span>
              <div className="relative">
                <button
                  className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg focus:outline-none"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <img src={languages.find(l => l.code === language)?.flag} alt="" className="w-5 h-5" />
                  <span className="text-sm text-gray-800 dark:text-gray-200">
                    {languages.find(l => l.code === language)?.label}
                  </span>
                  <ChevronDown className="text-gray-600 dark:text-gray-300" size={16} />
                </button>

                {dropdownOpen && (
                  <div className="absolute mt-2 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 w-40 z-50">
                    {languages.map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          changeLanguage(lang.code);
                          setDropdownOpen(false);
                        }}
                        className="flex items-center gap-2 px-3 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <img src={lang.flag} alt="" className="w-5 h-5" />
                        <span className="text-sm text-gray-800 dark:text-gray-200">{lang.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Notifications */}
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="font-medium text-gray-800 dark:text-gray-100">{t("notifications")}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{t("enabled")}</div>
            </div>
          </div>
        </SectionCard>

        {/* App Info */}
        <SectionCard title={t("appinformation")} className="mt-4">
          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 text-right">
            <div className="flex justify-between">
              <span>{t("version")} 1.0</span>
              <span>{t("appversion")}</span>
            </div>
            <div className="flex justify-between">
              <span>2025</span>
              <span>{t("copyright")}</span>
            </div>
          </div>
        </SectionCard>
      </PageWrapper>
    );
  };

  // -------------------- MAIN RENDER --------------------
  const renderMain = () => {
    if (currentScreen === 'financial') return <FinancialScreen />;
    if (currentScreen === 'attendance') return <AttendanceScreen />;
    if (currentScreen === 'support') return <SupportScreen />;
    if (currentScreen === 'settings') return <SettingsScreen />;

    switch (activeTab) {
      case 'home': return <DashboardScreen />;
      case 'calendar': return <ScheduleScreen />;
      case 'assignments': return <AssignmentsScreen />;
      case 'messages': return <MessagesScreen />;
      case 'profile': return <ProfileScreen />;
      default: return <DashboardScreen />;
    }
  };

  const TabButton = ({ id, icon: Icon }) => (
    <button onClick={() => { setActiveTab(id); setCurrentScreen('main'); }} className={`flex flex-col items-center justify-center flex-1 py-2 rounded-lg transition-colors ${activeTab === id ? 'text-blue-600 bg-blue-50' : 'text-gray-500 hover:text-gray-700'}`}>
      <Icon size={22} />
    </button>
  );

  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900">
      {renderMain()}

      {/* Bottom Nav */}
      {currentScreen === 'main' && !openChat && (
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t dark:border-gray-700 flex justify-around py-2 shadow-lg backdrop-blur-sm bg-white/95 dark:bg-gray-800/95">
          <TabButton id="calendar" icon={Calendar} />
          <TabButton id="assignments" icon={FileText} />
          <TabButton id="home" icon={Home} />
          <TabButton id="messages" icon={MessageSquare} />
          <TabButton id="profile" icon={User} />
        </div>
      )}
    </div>
  );
}