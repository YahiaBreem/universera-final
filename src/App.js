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

// Single-file, production-ready mobile-style app (no phone frame)
// TailwindCSS + lucide-react

export default function StudentApp() {
  const [activeTab, setActiveTab] = useState('home');
  const [currentScreen, setCurrentScreen] = useState('main');
  const [openChat, setOpenChat] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileFilter, setFileFilter] = useState('all');
  // new: control dropdown visibility for file filter
  const [showFileFilterMenu, setShowFileFilterMenu] = useState(false);

  const [assignments, setAssignments] = useState([
    { id: 1, title: 'مشروع النهائي', subject: 'هندسة البرمجيات', dueDate: '20-08-2025', status: 'لم يتم التسليم', grade: null },
    { id: 2, title: 'تحليل النظم', subject: 'تحليل وتصميم النظم', dueDate: '15-08-2025', status: 'تم التسليم', grade: '85/100' },
    { id: 3, title: 'تطبيق قواعد البيانات', subject: 'قواعد البيانات', dueDate: '16-08-2025', status: 'قيد المراجعة', grade: null },
  ]);

  // -------------------- UTIL --------------------
  const PageWrapper = ({ children, paddedBottom = true }) => (
    <div className={`bg-gray-50 min-h-screen pt-4 ${paddedBottom ? 'pb-20' : ''} px-4 overflow-y-auto`}>{children}</div>
  );

  const SectionCard = ({ title, children, className }) => (
    <div className={`bg-white p-4 rounded-xl shadow-sm ${className || ''}`}>
      {title && <h2 className="text-lg font-semibold mb-3 text-right">{title}</h2>}
      {children}
    </div>
  );

  const StatPill = ({ color, label, value }) => {
    const cls = {
      blue: 'bg-blue-100 text-blue-700',
      green: 'bg-green-100 text-green-700',
      red: 'bg-red-100 text-red-700',
      yellow: 'bg-yellow-100 text-yellow-700',
    }[color] + ' p-4 rounded-xl';
    return (
      <div className={cls}>
        <div className="text-sm mb-1">{label}</div>
        <div className="text-2xl font-bold">{value}</div>
      </div>
    );
  };

  const Header = () => (
    <div className="px-4 pb-2">
      <div className="flex items-center justify-between">
        <div className="text-right">
          <div className="font-bold text-lg">مرحبا 👋</div>
          <div className="text-sm text-gray-600">نتمنى لك يوماً دراسياً موفقاً</div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg bg-white shadow-sm"><Search size={18} /></button>
          <button className="p-2 rounded-lg bg-white shadow-sm relative">
            <Bell size={18} />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full" />
          </button>
        </div>
      </div>
    </div>
  );

  // -------------------- DASHBOARD --------------------
  const DashboardScreen = () => (
    <PageWrapper>
      <Header />

      <div className="grid grid-cols-2 gap-4 mb-4">
        <StatPill color="green" label="نسبة الحضور" value="81%" />
        <StatPill color="blue" label="المعدل التراكمي" value="3.4" />
      </div>

      <SectionCard title="جدول اليوم">
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
            <div className="text-right">
              <div className="font-medium">هندسة البرمجيات</div>
              <div className="text-sm text-gray-600">د. سارة أحمد - قاعة 101</div>
            </div>
            <div className="text-left">
              <div className="text-blue-600 font-medium">9:00 AM</div>
              <div className="text-xs text-blue-500 bg-blue-100 px-2 py-1 rounded">محاضرة</div>
            </div>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="text-right">
              <div className="font-medium">قواعد البيانات</div>
              <div className="text-sm text-gray-600">د. محمد علي - معمل 205</div>
            </div>
            <div className="text-left">
              <div className="text-gray-600 font-medium">11:00 AM</div>
              <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">عملي</div>
            </div>
          </div>
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

          {/* NEW: extra announcements (same style) */}
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
          {[
            { name: 'هندسة البرمجيات', place: 'قاعة 101', time: '9:00 AM' },
            { name: 'قواعد البيانات', place: 'قاعة 101', time: '12:00 PM' },
            { name: 'الشبكات', place: 'قاعة 108', time: '3:00 PM' },
          ].map((s, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-2">
                <FileText size={16} className="text-blue-500" />
                <span className="text-blue-500 text-sm">محاضرة</span>
              </div>
              <div className="text-right flex-1 mx-4">
                <div className="font-medium">{s.name}</div>
                <div className="text-sm text-gray-600">د. سارة أحمد - {s.place}</div>
              </div>
              <div className="text-blue-600 font-medium">{s.time}</div>
            </div>
          ))}
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

    const files = [
      { id: 1, name: 'Lecture1_IntroToCS.pdf', type: 'lecture', color: 'blue' },
      { id: 2, name: 'Lecture4_ComputerArchit...', type: 'lecture', color: 'blue' },
      { id: 3, name: 'HW2_ProgrammingInC++...', type: 'assignment', color: 'green' },
      { id: 4, name: 'ورقة مراجعة الرياضيات المتقدمة', type: 'summary', color: 'purple' },
    ];

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
            {/* REPLACED: static filter buttons -> filter icon + dropdown */}
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
                  {['all', 'lecture', 'assignment', 'summary'].map(opt => {
                    const label = opt === 'all' ? 'الكل' : opt === 'lecture' ? 'محاضرات' : opt === 'assignment' ? 'واجبات' : 'ملخصات';
                    return (
                      <button
                        key={opt}
                        onClick={() => { setFileFilter(opt); setShowFileFilterMenu(false); }}
                        className={`w-full text-right px-3 py-2 rounded text-sm ${fileFilter === opt ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <h2 className="text-lg font-semibold">المحاضرات والملفات</h2>
          </div>

          <div className="space-y-3">
            {filteredFiles.map(file => (
              <div key={file.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <Download className="text-blue-500" size={20} />
                  <span className={`text-xs px-2 py-1 rounded ${file.color === 'blue' ? 'text-blue-600 bg-blue-100' :
                    file.color === 'green' ? 'text-green-600 bg-green-100' :
                      'text-purple-600 bg-purple-100'
                    }`}>
                    {file.type === 'lecture' ? 'محاضرة' : file.type === 'assignment' ? 'واجبات' : 'ملخصات'}
                  </span>
                </div>
                <div className="text-right flex-1 mx-4">
                  <div className="text-sm font-medium truncate">{file.name}</div>
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
      <div className="bg-gray-50 min-h-screen flex flex-col">
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
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="اكتب رسالة..." className="flex-1 border rounded-lg px-3 py-2 text-right" onKeyDown={(e) => { if (e.key === 'Enter') sendMessage(); }} />
        </div>
      </div>
    );
  };

  const MessagesScreen = () => {
    // expanded filters: include 'admin' (الإدارة)
    const [activeFilter, setActiveFilter] = useState('all');

    const chats = [
      { id: 1, name: 'د. هاني صالح', message: 'يا جماعة يذكر في محاضرة ومحادثة المحضر', time: '12:34PM', unread: true, type: 'faculty' },
      { id: 2, name: 'أيمن بكري', message: 'حاضر أستاذ شكراً لك في باقي', time: '12:34PM', unread: false, type: 'students' },
      { id: 3, name: 'أ. ليلي مصطفى', message: 'والنظام العام فين الأسئلة', time: '12:30PM', unread: false, type: 'faculty' },
      { id: 4, name: 'أحمد سمير', message: 'السلام عليكم ممكن سؤال معتمدين', time: '11:45AM', unread: true, type: 'students' },
      // NEW: administration example
      { id: 5, name: 'شئون الطلاب', message: 'إرشادات التسجيل للفصل القادم الآن متاحة', time: '10:10AM', unread: false, type: 'admin' },
    ];

    const filteredChats = activeFilter === 'all' ? chats : chats.filter(c => c.type === activeFilter);

    if (openChat) return <ChatScreen chat={openChat} onBack={() => setOpenChat(null)} />;

    return (
      <PageWrapper>
        <h2 className="text-lg font-semibold mb-4 text-right">المحادثات</h2>

        <div className="flex bg-gray-200 p-1 rounded-lg mb-4 text-sm">
          <button onClick={() => setActiveFilter('all')} className={`flex-1 py-2 text-center rounded-md ${activeFilter === 'all' ? 'bg-white text-gray-700' : 'text-gray-500 hover:bg-gray-100'}`}>الكل</button>
          <button onClick={() => setActiveFilter('admin')} className={`flex-1 py-2 text-center rounded-md ${activeFilter === 'admin' ? 'bg-white text-gray-700' : 'text-gray-500 hover:bg-gray-100'}`}>الإدارة</button>
          <button onClick={() => setActiveFilter('students')} className={`flex-1 py-2 text-center rounded-md ${activeFilter === 'students' ? 'bg-white text-gray-700' : 'text-gray-500 hover:bg-gray-100'}`}>الطلاب</button>
          <button onClick={() => setActiveFilter('faculty')} className={`flex-1 py-2 text-center rounded-md ${activeFilter === 'faculty' ? 'bg-white text-gray-700' : 'text-gray-500 hover:bg-gray-100'}`}>هيئة التدريس</button>
        </div>

        <div className="space-y-3">
          {filteredChats.map(chat => (
            <div key={chat.id} onClick={() => setOpenChat({ id: chat.id, name: chat.name })} className={`bg-white p-4 rounded-lg shadow-sm flex items-center gap-3 hover:bg-gray-50 cursor-pointer ${chat.unread ? 'border-l-4 border-blue-500' : ''}`}>
              <div className="relative">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center"><User className="text-gray-600" size={20} /></div>
                {chat.unread && <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full"></div>}
              </div>
              <div className="flex-1 text-right">
                <div className={`text-sm ${chat.unread ? 'font-bold' : 'font-medium'}`}>{chat.name}</div>
                <div className="text-gray-600 text-xs mt-1 truncate">{chat.message}</div>
              </div>
              <div className="text-xs text-gray-500">{chat.time}</div>
            </div>
          ))}
        </div>
      </PageWrapper>
    );
  };

  // -------------------- PROFILE + SUB SCREENS --------------------
  const ProfileScreen = () => (
    <PageWrapper>
      <div className="bg-white p-6 rounded-xl shadow-sm text-center mb-6">
        <div className="w-20 h-20 bg-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center"><User className="text-purple-600" size={32} /></div>
        <h2 className="text-xl font-bold">أحمد محمد #34215</h2>
        <div className="text-gray-600 text-sm mt-2">
          <div>جامعة الإسكندرية</div>
          <div>كلية الهندسة</div>
          <div>السنة الثالثة</div>
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
            <div className="text-2xl font-bold text-blue-600">24</div>
            <div className="text-sm text-blue-700">الساعات المجتازة</div>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">15</div>
            <div className="text-sm text-green-700">المشاريع المكتملة</div>
          </div>
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
          <div className="p-3 bg-blue-50 rounded-lg"><div className="text-2xl font-bold text-blue-600">81%</div><div className="text-xs text-blue-700">النسبة الكلية</div></div>
          <div className="p-3 bg-red-50 rounded-lg"><div className="text-2xl font-bold text-red-600">7</div><div className="text-xs text-red-700">إجمالي الغياب</div></div>
          <div className="p-3 bg-green-50 rounded-lg"><div className="text-2xl font-bold text-green-600">30</div><div className="text-xs text-green-700">إجمالي الحضور</div></div>
        </div>
      </SectionCard>

      <div className="space-y-4 mt-4">
        {[{ name: 'هندسة البرمجيات', pct: 80, abs: 3, pres: 12 }, { name: 'قواعد البيانات', pct: 83, abs: 2, pres: 10 }].map((c) => (
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
          <TabButton id="home" icon={Home} />
          <TabButton id="calendar" icon={Calendar} />
          <TabButton id="assignments" icon={FileText} />
          <TabButton id="messages" icon={MessageSquare} />
          <TabButton id="profile" icon={User} />
        </div>
      )}
    </div>
  );
}
