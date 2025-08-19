import React, { useState } from 'react';
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
  Send
} from 'lucide-react';

// IMPORTANT: your data files should be placed in src/data/
// Example imports (change if your filenames differ):
// - If your file is src/data/students.js -> default export an object or array
// - If your file is src/data/courses.js -> default export an object or array
import { students as studentsRaw } from "./data/students";
import { courses as coursesRaw } from "./data/courses";


// Single-file, production-ready mobile-style app (no phone frame)
// TailwindCSS + lucide-react

export default function StudentApp() {
  // ---------- auth & core state ----------
  const [currentUser, setCurrentUser] = useState(null);
  const [activeTab, setActiveTab] = useState('home');
  const [currentScreen, setCurrentScreen] = useState('main');
  const [openChat, setOpenChat] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileFilter, setFileFilter] = useState('all');
  const [showFileFilterMenu, setShowFileFilterMenu] = useState(false);
  const [assignments, setAssignments] = useState([]);

  // Data normalization
  const students = Array.isArray(studentsRaw) ? studentsRaw : (studentsRaw ? Object.values(studentsRaw) : []);
  const courses = coursesRaw || [];

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
  function getFacultyStudents(student) {
    if (!student) return [];
    return students.filter(
      s => s.university === student.university && s.faculty === student.faculty
    );
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
        status: 'لم يتم التسليم',
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
  const facultyStudents = getFacultyStudents(currentUser);

  // -------------------- AUTH / LOGIN SCREEN --------------------
  const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const tryLogin = () => {
      setError('');
      // match by username / id / email - be permissive
      const match = students.find(s =>
        (s.username && s.username === username) ||
        (s.id && String(s.id) === username) ||
        (s.email && s.email === username)
      );

      if (!match) {
        setError('اسم مستخدم غير موجود');
        return;
      }

      // If your student objects include passwords:
      if (match.password) {
        if (match.password !== password) {
          setError('كلمة المرور غير صحيحة');
          return;
        }
      } else {
        // if no password in data, accept any non-empty password (dev mode)
        if (!password) {
          setError('أدخل كلمة المرور (اختبارية)');
          return;
        }
      }

      setCurrentUser(match);
    };

    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-xl p-6 shadow">
          <h2 className="text-xl font-bold mb-4 text-center">تسجيل دخول - بوابة الطالب</h2>
          {/* Ensure type="text" for username input */}
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="w-full border px-3 py-2 rounded mb-3"
            placeholder="Username / id / email"
            autoComplete="username"
          />
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full border px-3 py-2 rounded mb-3"
            placeholder="Password"
            autoComplete="current-password"
          />
          {error && <div className="text-red-600 mb-3">{error}</div>}
          <button onClick={tryLogin} className="w-full bg-blue-600 text-white py-2 rounded">تسجيل الدخول</button>
        </div>
      </div>
    );
  };

  // If not logged in show login screen and stop (keeps all pages intact)
  if (!currentUser) {
    return <LoginScreen />;
  }

  // ---------- dynamic faculty data for current user ----------
  // (facultyCourses, facultyProfessors, and facultyStudents are already declared above)

  // -------------------- UTIL --------------------
  // Make PageWrapper a flex column and scrollable
  const PageWrapper = ({ children, paddedBottom = true }) => (
    <div className={`flex flex-col h-screen bg-gray-50 pt-4 ${paddedBottom ? 'pb-20' : ''} px-4`}>
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );

  const SectionCard = ({ title, children, className }) => (
    <div className={`bg-white p-4 rounded-xl shadow-sm ${className || ''}`}>
      {title && <h2 className="text-lg font-semibold mb-3 text-right">{title}</h2>}
      {children}
    </div>
  );

  const StatPill = ({ color, label, value }) => (
    <div className={{
      blue: 'bg-blue-100 text-blue-700',
      green: 'bg-green-100 text-green-700',
      red: 'bg-red-100 text-red-700',
      yellow: 'bg-yellow-100 text-yellow-700',
    }[color] + ' p-4 rounded-xl'}>
      <div className="text-sm mb-1">{label}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );

  const Header = () => (
    <div className="px-4 pb-2">
      <div className="flex items-center justify-between">
        <div className="text-right">
          <div className="font-bold text-lg"> مرحباََ {currentUser && (currentUser.firstName)} 👋</div>
          <div className="text-sm text-gray-600"> {currentUser.university || '—'}</div>
          <div className="text-sm text-gray-600"> {currentUser.faculty || '—'}</div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg bg-white shadow-sm"><Search size={18} /></button>
          <button className="p-2 rounded-lg bg-white shadow-sm relative">
            <Bell size={18} />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full" />
          </button>
          <button onClick={() => { setCurrentUser(null); }} title="Logout" className="p-2 rounded-lg bg-white shadow-sm text-sm">خروج</button>
        </div>
      </div>
    </div>
  );

  // -------------------- DASHBOARD --------------------
  const DashboardScreen = () => (
    <PageWrapper>
      <Header />

      <div className="grid grid-cols-2 gap-4 mb-4">
        <StatPill color="green" label="نسبة الحضور" value={`${currentUser.attendance ?? '—'}%`} />
        <StatPill color="blue" label="المعدل التراكمي" value={`${currentUser.gpa ?? '—'}`} />
      </div>

      <SectionCard title="جدول اليوم">
        <div className="space-y-3">
          {/* try to show today's schedule from facultyData or fallback */}
          {(facultyData.schedule || [
            { name: 'هندسة البرمجيات', place: 'قاعة 101', time: '9:00 AM', type: 'محاضرة' },
            { name: 'قواعد البيانات', place: 'معمل 205', time: '11:00 AM', type: 'عملي' },
          ]).map((s, idx) => (
            <div key={idx} className={`flex items-center justify-between p-3 ${idx === 0 ? 'bg-blue-50' : 'bg-gray-50'} rounded-lg`}>
              <div className="text-right">
                <div className="font-medium">{s.name}</div>
                <div className="text-sm text-gray-600">{s.instructor || s.teacher || 'د. غير محدد'} - {s.place}</div>
              </div>
              <div className="text-left">
                <div className={`${idx === 0 ? 'text-blue-600' : 'text-gray-600'} font-medium`}>{s.time}</div>
                <div className={`text-xs ${idx === 0 ? 'text-blue-500 bg-blue-100' : 'text-gray-500 bg-gray-100'} px-2 py-1 rounded`}>{s.type}</div>
              </div>
            </div>
          ))}
        </div>
        <button className="text-blue-500 text-sm mt-3 text-center w-full">عرض الجدول كاملاً</button>
      </SectionCard>

      <SectionCard title="إعلانات حديثة" className="mt-4">
        <div className="space-y-3">
          <div className="flex gap-3 p-3 bg-red-50 rounded-lg border-r-4 border-red-400">
            <AlertCircle className="text-red-500 mt-1" size={20} />
            <div className="text-right flex-1">
              <div className="font-medium text-red-800">إعلان مهم: تغيير موعد امتحان البرمجة</div>
              <div className="text-sm text-red-600 mt-1">تم تأجيل امتحان مادة البرمجة المتقدمة من يوم الأحد إلى يوم الإثنين</div>
              <div className="text-xs text-red-500 mt-2">منذ ساعتين</div>
            </div>
          </div>

          <div className="flex gap-3 p-3 bg-yellow-50 rounded-lg border-r-4 border-yellow-400">
            <FileText className="text-yellow-600 mt-1" size={20} />
            <div className="text-right flex-1">
              <div className="font-medium text-yellow-800">ورشة عمل جديدة</div>
              <div className="text-sm text-yellow-600 mt-1">ورشة عمل حول الذكاء الاصطناعي يوم الخميس الساعة 3 مساءً</div>
              <div className="text-xs text-yellow-500 mt-2">منذ 3 ساعات</div>
            </div>
          </div>

          {/* extra announcements */}
          <div className="flex gap-3 p-3 bg-green-50 rounded-lg border-r-4 border-green-400">
            <CheckCircle className="text-green-600 mt-1" size={20} />
            <div className="text-right flex-1">
              <div className="font-medium text-green-800">تذكير: موعد تسليم المشروع</div>
              <div className="text-sm text-green-600 mt-1">آخر موعد لتسليم مشروع الفصل النهائي 22-08-2025</div>
              <div className="text-xs text-green-500 mt-2">منذ 5 ساعات</div>
            </div>
          </div>

          <div className="flex gap-3 p-3 bg-blue-50 rounded-lg border-r-4 border-blue-400">
            <Bell className="text-blue-600 mt-1" size={20} />
            <div className="text-right flex-1">
              <div className="font-medium text-blue-800">فتح باب تسجيل المقررات</div>
              <div className="text-sm text-blue-600 mt-1">التسجيل للفصل القادم يفتح يوم الأحد المقبل</div>
              <div className="text-xs text-blue-500 mt-2">منذ اليوم</div>
            </div>
          </div>
        </div>
      </SectionCard>
    </PageWrapper>
  );

  // -------------------- SCHEDULE --------------------
  const ScheduleScreen = () => (
    <PageWrapper>
      <h2 className="text-lg font-semibold mb-4 text-right">الجدول الدراسي</h2>
      <SectionCard>
        <div className="space-y-3">
          {facultyCourses.length
            ? facultyCourses.map((s, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-2">
                  <FileText size={16} className="text-blue-500" />
                  <span className="text-blue-500 text-sm">{s.title || 'محاضرة'}</span>
                </div>
                <div className="text-right flex-1 mx-4">
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
        setAssignments(prev => prev.map(a => a.id === assignmentId ? { ...a, status: 'تم التسليم' } : a));
      }
    };

    // Update filter options to include all types
    const fileTypes = ['all', 'lecture', 'exercise', 'project'];
    const fileTypeLabels = {
      all: 'الكل',
      lecture: 'محاضرات',
      exercise: 'تمارين',
      project: 'مشاريع'
    };

    // Build files from faculty courses
    const files = buildFiles(facultyData);
    const filteredFiles = fileFilter === 'all' ? files : files.filter(f => f.type === fileFilter);

    return (
      <PageWrapper>
        <h2 className="text-lg font-semibold mb-4 text-right">التكليفات الحالية</h2>

        <div className="space-y-3">
          {assignments.map(assignment => (
            <div key={assignment.id} className="bg-white p-4 rounded-xl shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <div className={`text-sm px-2 py-1 rounded ${assignment.status === 'لم يتم التسليم' ? 'bg-red-100 text-red-600' :
                  assignment.status === 'تم التسليم' ? 'bg-green-100 text-green-600' :
                    'bg-yellow-100 text-yellow-600'
                  }`}>
                  {assignment.grade || assignment.status}
                </div>
                <div className="text-right">
                  <div className="font-medium">{assignment.title}</div>
                  <div className="text-sm text-gray-600">{assignment.subject} - موعد التسليم: {assignment.dueDate}</div>
                </div>
              </div>

              {assignment.status === 'لم يتم التسليم' && (
                <label className="flex items-center gap-2 cursor-pointer text-blue-600 text-sm mt-2">
                  <Upload size={16} />
                  <span>رفع ملف</span>
                  <input type="file" className="hidden" onChange={(e) => handleFileChange(e, assignment.id)} />
                </label>
              )}
            </div>
          ))}
        </div>

        {selectedFile && (
          <div className="bg-green-100 text-green-700 p-3 rounded-xl mt-4">
            ✅ تم رفع الملف: {selectedFile}
          </div>
        )}

        <SectionCard className="mt-4">
          <div className="flex items-center justify-between mb-4">
            {/* filter icon + dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowFileFilterMenu(prev => !prev)}
                className="flex items-center gap-2 bg-white px-3 py-1 rounded text-sm shadow-sm"
              >
                <Filter size={16} />
                <span className="text-xs">تصفية</span>
              </button>

              {showFileFilterMenu && (
                <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-lg p-2 z-50">
                  {fileTypes.map(opt => (
                    <button
                      key={opt}
                      onClick={() => { setFileFilter(opt); setShowFileFilterMenu(false); }}
                      className={`w-full text-right px-3 py-2 rounded text-sm ${fileFilter === opt ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`}
                    >
                      {fileTypeLabels[opt]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <h2 className="text-lg font-semibold">المحاضرات والملفات</h2>
          </div>

          <div className="space-y-3">
            {filteredFiles.map((file, idx) => (
              <div key={file.id ?? idx} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <Download className="text-blue-500" size={20} />
                  <span className={`text-xs px-2 py-1 rounded text-blue-600 bg-blue-100`}>
                    {fileTypeLabels[file.type] || file.type}
                  </span>
                </div>
                <div className="text-right flex-1 mx-4">
                  <div className="text-sm font-medium truncate">{file.name || file.title || (file.course && `${file.course} - ملف`)}</div>
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
      { id: 1, text: 'مرحباً! كيف يمكنني مساعدتك؟', sender: 'other', timestamp: '12:30' },
    ]);
    const [input, setInput] = useState('');

    const sendMessage = () => {
      if (!input.trim()) return;
      setMessages(prev => ([
        ...prev,
        { id: Date.now(), text: input, sender: 'me', timestamp: new Date().toLocaleTimeString('ar', { hour: '2-digit', minute: '2-digit' }) }
      ]));
      setInput('');
    };

    return (
      <div className="bg-gray-50 min-h-screen flex flex-col h-screen">
        <div className="bg-white p-4 flex items-center gap-3 shadow-sm">
          <button onClick={onBack}><ChevronLeft className="text-gray-600" size={24} /></button>
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
            <User className="text-gray-600" size={20} />
          </div>
          <div className="text-right">
            <h3 className="font-semibold">{chat.name}</h3>
            <div className="text-xs text-green-500">متصل الآن</div>
          </div>
        </div>

        {/* Make chat messages area scrollable */}
        <div className="flex-1 p-4 space-y-3 overflow-y-auto pb-24">
          {messages.map(m => (
            <div key={m.id} className={`flex ${m.sender === 'me' ? 'justify-start' : 'justify-end'}`}>
              <div className={`max-w-[70%] p-3 rounded-lg ${m.sender === 'me' ? 'bg-blue-500 text-white' : 'bg-white shadow-sm'}`}>
                <div className="text-sm">{m.text}</div>
                <div className={`text-xs mt-1 ${m.sender === 'me' ? 'text-blue-100' : 'text-gray-500'}`}>{m.timestamp}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="fixed bottom-14 left-0 right-0 bg-white p-3 flex gap-2 shadow-[0_-2px_8px_rgba(0,0,0,0.04)]">
          <button onClick={sendMessage} className="bg-blue-500 text-white p-2 rounded-lg"><Send size={20} /></button>
          {/* Ensure type="text" for chat input */}
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="اكتب رسالة..."
            className="flex-1 border rounded-lg px-3 py-2 text-right"
            onKeyDown={(e) => { if (e.key === 'Enter') sendMessage(); }}
            autoComplete="off"
          />
        </div>
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
      const savedChats = localStorage.getItem(`chats-${currentUser.id}`);
      const studentChats = savedChats ? JSON.parse(savedChats) : [];

      // Standard chats that are always present
      const baseChats = [
        // Admin chat
        {
          id: 'admin-1',
          name: 'شئون الطلاب',
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
        ...studentChats
      ];

      setActiveChats(baseChats);
    }, [currentUser.id, facultyProfessors]);

    // Filter chats - simplified to show all types
    const filteredChats = React.useMemo(() => {
      if (activeFilter === 'all') {
        return activeChats;
      }
      return activeChats.filter(chat => chat.type === activeFilter);
    }, [activeChats, activeFilter]);

    const startNewChat = (student) => {
      const newChat = {
        id: `stu-${Date.now()}`,
        name: student.displayName || student.username || student.name,
        message: 'تم بدء المحادثة',
        time: new Date().toLocaleTimeString('ar', { hour: '2-digit', minute: '2-digit' }),
        type: 'students',
        university: student.university,
        faculty: student.faculty,
        studentId: student.id,
      };

      // Update chats
      const updatedChats = [...activeChats, newChat];
      setActiveChats(updatedChats);

      // Save student chats
      const studentChats = updatedChats.filter(c => c.type === 'students');
      localStorage.setItem(`chats-${currentUser.id}`, JSON.stringify(studentChats));

      // Open the chat
      setOpenChat(newChat);
      setShowSearch(false);
      setSearchQuery('');
      setSelectedStudent(null);
    };

    // Modified search function to include full name search
    const searchResults = showSearch && searchQuery ? students.filter(s => {
      // Don't show current user
      if ((s.username || s.id || s.name) === (currentUser.username || currentUser.id || currentUser.name)) {
        return false;
      }

      // Normalize the search query and student names
      const query = searchQuery.toLowerCase().trim();
      const studentId = String(s.id);
      const username = (s.username || '').toLowerCase();
      const fullName = `${s.firstName || ''} ${s.lastName || ''}`.toLowerCase().trim();
      const displayName = (s.displayName || '').toLowerCase();
      const name = (s.name || '').toLowerCase();

      // Match by exact ID, username, or full name
      return studentId === query ||
        username === query ||
        fullName === query ||
        displayName === query ||
        name === query;
    }) : [];

    const handleSearch = (query) => {
      setSearchQuery(query);
      setSelectedStudent(null); // Clear selected student when search changes
    };

    const viewStudentProfile = (student) => {
      setSelectedStudent(student);
      // Add to search history if not already there
      setSearchHistory(prev => {
        const exists = prev.find(s => s.id === student.id);
        if (!exists) {
          return [...prev, student];
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
            محادثة جديدة +
          </button>
          <h2 className="text-lg font-semibold">المحادثات</h2>
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
                className="text-gray-500"
              >
                إلغاء
              </button>
              <h3 className="font-medium">البحث عن طالب</h3>
            </div>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="ابحث بالرقم التعريفي او الاسم الكامل..."
              className="w-full border rounded-lg px-4 py-2 mb-3"
              autoFocus
            />

            {selectedStudent ? (
              // Student Profile Card
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <button
                    onClick={() => startNewChat(selectedStudent)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm"
                  >
                    إرسال طلب محادثة
                  </button>
                  <div className="text-right">
                    <h4 className="font-bold text-lg">
                      {selectedStudent.displayName || selectedStudent.name}
                    </h4>
                    <p className="text-gray-600">#{selectedStudent.id}</p>
                  </div>
                </div>
                <div className="space-y-2 text-right">
                  <p className="text-gray-600">الجامعة: {selectedStudent.university}</p>
                  <p className="text-gray-600">الكلية: {selectedStudent.faculty}</p>
                  <p className="text-gray-600">السنة: {selectedStudent.year || '—'}</p>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                {searchQuery && !searchResults.length && (
                  <div className="text-center text-gray-500 py-4">
                    لا توجد نتائج للبحث
                  </div>
                )}
                {searchResults.map(student => (
                  <div
                    key={student.id}
                    onClick={() => viewStudentProfile(student)}
                    className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm cursor-pointer hover:bg-gray-50"
                  >
                    <div className="text-blue-500 text-sm">عرض الملف</div>
                    <div className="text-right">
                      <div className="font-medium">
                        {student.displayName || student.name}
                      </div>
                      <div className="text-sm text-gray-500">#{student.id}</div>
                    </div>
                  </div>
                ))}

                {/* Search History */}
                {!searchQuery && searchHistory.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm text-gray-500 mb-2 text-right">سجل البحث</h4>
                    {searchHistory.map(student => (
                      <div
                        key={student.id}
                        onClick={() => viewStudentProfile(student)}
                        className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm cursor-pointer hover:bg-gray-50 mb-2"
                      >
                        <div className="text-blue-500 text-sm">عرض الملف</div>
                        <div className="text-right">
                          <div className="font-medium">
                            {student.displayName || student.name}
                          </div>
                          <div className="text-sm text-gray-500">#{student.id}</div>
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
            <div className="flex bg-gray-200 p-1 rounded-lg mb-4 text-sm">
              <button onClick={() => setActiveFilter('all')}
                className={`flex-1 py-2 text-center rounded-md ${activeFilter === 'all' ? 'bg-white text-gray-700' : 'text-gray-500 hover:bg-gray-100'}`}>
                الكل ({activeChats.length})
              </button>
              <button onClick={() => setActiveFilter('students')}
                className={`flex-1 py-2 text-center rounded-md ${activeFilter === 'students' ? 'bg-white text-gray-700' : 'text-gray-500 hover:bg-gray-100'}`}>
                الطلاب ({activeChats.filter(c => c.type === 'students').length})
              </button>
              <button onClick={() => setActiveFilter('faculty')}
                className={`flex-1 py-2 text-center rounded-md ${activeFilter === 'faculty' ? 'bg-white text-gray-700' : 'text-gray-500 hover:bg-gray-100'}`}>
                هيئة التدريس ({activeChats.filter(c => c.type === 'faculty').length})
              </button>
              <button onClick={() => setActiveFilter('admin')}
                className={`flex-1 py-2 text-center rounded-md ${activeFilter === 'admin' ? 'bg-white text-gray-700' : 'text-gray-500 hover:bg-gray-100'}`}>
                الإدارة ({adminChatsCount})
              </button>
            </div>

            <div className="space-y-3">
              {filteredChats.map(chat => (
                <div key={chat.id}
                  onClick={() => setOpenChat(chat)}
                  className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3 hover:bg-gray-50 cursor-pointer"
                >
                  <div className="relative">
                    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                      <User className="text-gray-600" size={20} />
                    </div>
                  </div>
                  <div className="flex-1 text-right">
                    <div className="font-medium">{chat.name}</div>
                    {chat.type === 'students' && chat.university && (
                      <div className="text-xs text-gray-500">
                        {chat.university} - {chat.faculty}
                      </div>
                    )}
                  </div>
                  <div className="text-xs text-gray-500">{chat.time}</div>
                </div>
              ))}
            </div>
          </>
        )}
      </PageWrapper>
    );
  };

  // -------------------- PROFILE + SUB SCREENS --------------------
  const ProfileScreen = () => (
    <PageWrapper>
      <div className="bg-white p-6 rounded-xl shadow-sm text-center mb-6">
        <div className="w-20 h-20 bg-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center"><User className="text-purple-600" size={32} /></div>
        <h2 className="text-xl font-bold">{currentUser.displayName || currentUser.username || currentUser.name} {currentUser.studentId ? `#${currentUser.studentId}` : ''}</h2>
        <div className="text-gray-600 text-sm mt-2">
          <div>{currentUser.university || '—'}</div>
          <div>{currentUser.faculty || '—'}</div>
          <div>{currentUser.year ? `السنة ${currentUser.year}` : ''}</div>
        </div>
      </div>

      <div className="space-y-3">
        <button onClick={() => setCurrentScreen('financial')} className="w-full bg-white p-4 rounded-xl shadow-sm flex items-center justify-between hover:bg-gray-50 transition-colors">
          <ChevronLeft className="text-gray-400" size={20} />
          <div className="flex items-center gap-3"><DollarSign className="text-green-500" size={20} /><span>المصروفات الدراسية</span></div>
        </button>
        <button onClick={() => setCurrentScreen('attendance')} className="w-full bg-white p-4 rounded-xl shadow-sm flex items-center justify-between hover:bg-gray-50 transition-colors">
          <ChevronLeft className="text-gray-400" size={20} />
          <div className="flex items-center gap-3"><Clock className="text-blue-500" size={20} /><span>سجل الحضور</span></div>
        </button>
        <button onClick={() => setCurrentScreen('support')} className="w-full bg-white p-4 rounded-xl shadow-sm flex items-center justify-between hover:bg-gray-50 transition-colors">
          <ChevronLeft className="text-gray-400" size={20} />
          <div className="flex items-center gap-3"><HelpCircle className="text-orange-500" size={20} /><span>الدعم والمساعدة</span></div>
        </button>
        <button className="w-full bg-white p-4 rounded-xl shadow-sm flex items-center justify-between hover:bg-gray-50 transition-colors">
          <ChevronLeft className="text-gray-400" size={20} />
          <div className="flex items-center gap-3"><Settings className="text-gray-500" size={20} /><span>الإعدادات</span></div>
        </button>
      </div>

      <SectionCard title="إحصائيات الطالب" className="mt-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">{currentUser.credits || 24}</div>
            <div className="text-sm text-blue-700">الساعات المجتازة</div>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">{currentUser.projectsCompleted || 15}</div>
            <div className="text-sm text-green-700">المشاريع المكتملة</div>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="الأساتذة في الكلية" className="mt-6">
        <div className="space-y-2">
          {facultyProfessors.length ? facultyProfessors.map((p, i) => <div key={i} className="p-3 bg-white rounded shadow">{typeof p === 'string' ? p : p.name || p.title}</div>) : <div className="text-sm text-gray-500">لا توجد بيانات للمحاضرين في هذه الكلية</div>}
        </div>
      </SectionCard>

      <SectionCard title="الزملاء" className="mt-4">
        <div className="space-y-2">
          {facultyStudents.length ? facultyStudents.map((s, i) => <div key={i} className="p-3 bg-white rounded shadow">{s.username || s.name || s.id}</div>) : <div className="text-sm text-gray-500">لا توجد بيانات للزملاء في هذه الكلية</div>}
        </div>
      </SectionCard>
    </PageWrapper>
  );

  const AttendanceScreen = () => (
    <PageWrapper>
      <div className="flex items-center gap-3 mb-4">
        <button onClick={() => setCurrentScreen('main')}><ChevronLeft className="text-gray-600" size={24} /></button>
        <h2 className="text-lg font-semibold text-right">سجل الحضور المفصل</h2>
      </div>

      <SectionCard title="إحصائيات عامة">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="p-3 bg-blue-50 rounded-lg"><div className="text-2xl font-bold text-blue-600">{currentUser.attendance ?? '—'}%</div><div className="text-xs text-blue-700">النسبة الكلية</div></div>
          <div className="p-3 bg-red-50 rounded-lg"><div className="text-2xl font-bold text-red-600">{currentUser.absences ?? 7}</div><div className="text-xs text-red-700">إجمالي الغياب</div></div>
          <div className="p-3 bg-green-50 rounded-lg"><div className="text-2xl font-bold text-green-600">{currentUser.attended ?? 30}</div><div className="text-xs text-green-700">إجمالي الحضور</div></div>
        </div>
      </SectionCard>

      <div className="space-y-4 mt-4">
        {(facultyData.attendanceSummary || [{ name: 'هندسة البرمجيات', pct: 80, abs: 3, pres: 12 }, { name: 'قواعد البيانات', pct: 83, abs: 2, pres: 10 }]).map((c) => (
          <div key={c.name} className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-3"><span className="text-green-600 font-bold">{c.pct}%</span><span className="font-medium">{c.name}</span></div>
            <div className="flex justify-between text-sm text-gray-600 mb-2"><span>{c.abs} غياب</span><span>حضور {c.pres}</span></div>
            <div className="w-full bg-gray-200 rounded-full h-2"><div className="bg-green-500 h-2 rounded-full" style={{ width: `${c.pct}%` }} /></div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );

  const FinancialScreen = () => (
    <PageWrapper>
      <div className="flex items-center gap-3 mb-4">
        <button onClick={() => setCurrentScreen('main')}><ChevronLeft className="text-gray-600" size={24} /></button>
        <h2 className="text-lg font-semibold text-right">المصروفات الدراسية</h2>
      </div>

      <SectionCard title="العام الدراسي 2025">
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"><span className="text-gray-700">الفصل الأول</span><span className="font-medium text-green-600">مدفوع ✔</span></div>
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"><span className="text-gray-700">الفصل الثاني</span><span className="font-medium text-red-600">غير مدفوع</span></div>
        </div>
      </SectionCard>

      <SectionCard title="تفاصيل السداد" className="mt-4">
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex justify-between"><span>الرسوم الأساسية</span><span>8,000 EGP</span></div>
          <div className="flex justify-between"><span>المعمل</span><span>1,200 EGP</span></div>
          <div className="flex justify-between"><span>خصم تفوق</span><span>- 500 EGP</span></div>
          <div className="border-t my-2" />
          <div className="flex justify-between font-semibold"><span>الإجمالي المستحق</span><span>8,700 EGP</span></div>
        </div>
      </SectionCard>
    </PageWrapper>
  );

  const SupportScreen = () => (
    <PageWrapper>
      <div className="flex items-center gap-3 mb-4">
        <button onClick={() => setCurrentScreen('main')}><ChevronLeft className="text-gray-600" size={24} /></button>
        <h2 className="text-lg font-semibold text-right">الدعم والمساعدة</h2>
      </div>

      <SectionCard>
        <div className="space-y-3 text-right">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <div className="font-medium">مكتب شؤون الطلاب</div>
              <div className="text-sm text-gray-600">الرد خلال يوم عمل</div>
            </div>
            <a href="#" className="flex items-center gap-2 text-blue-600"><Phone size={18} />اتصال</a>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <div className="font-medium">الدعم الفني للمنصة</div>
              <div className="text-sm text-gray-600">مشاكل الدخول والمواد</div>
            </div>
            <a href="#" className="flex items-center gap-2 text-blue-600"><Mail size={18} />إيميل</a>
          </div>
        </div>
      </SectionCard>
    </PageWrapper>
  );

  // -------------------- MAIN RENDER --------------------
  const renderMain = () => {
    if (currentScreen === 'financial') return <FinancialScreen />;
    if (currentScreen === 'attendance') return <AttendanceScreen />;
    if (currentScreen === 'support') return <SupportScreen />;

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
    <div className="relative min-h-screen bg-gray-50">
      {renderMain()}

      {/* Bottom Nav */}
      {currentScreen === 'main' && !openChat && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2 shadow-sm">
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
