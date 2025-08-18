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
  Filter
} from 'lucide-react';

const StudentApp = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [currentScreen, setCurrentScreen] = useState('main');

  const TabButton = ({ id, icon: Icon, isActive, onClick }) => {
    return (
      <button
        onClick={onClick}
        className={`flex flex-col items-center justify-center p-2 rounded-lg transition-colors ${isActive ? 'text-blue-500 bg-blue-50' : 'text-gray-500 hover:text-gray-700'
          }`}
      >
        <Icon size={24} />
      </button>
    );
  };

  // -------------------- SCREENS --------------------

  const DashboardScreen = () => {
    return (
      <div className="bg-gray-50 min-h-screen pt-4 pb-20 px-4 space-y-4 overflow-y-auto">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-100 p-4 rounded-xl">
            <div className="text-sm text-green-700 mb-1">نسبة الحضور</div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-600" size={20} />
              <span className="text-2xl font-bold text-green-800">81%</span>
            </div>
          </div>
          <div className="bg-blue-100 p-4 rounded-xl">
            <div className="text-sm text-blue-700 mb-1">المعدل التراكمي</div>
            <div className="flex items-center gap-2">
              <FileText className="text-blue-600" size={20} />
              <span className="text-2xl font-bold text-blue-800">3.4</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-3 text-right">جدول اليوم</h2>
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
          <button className="text-blue-500 text-sm mt-3 text-center w-full">
            عرض الجدول كاملاً
          </button>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-3 text-right">إعلانات حديثة</h2>
          <div className="space-y-3">
            <div className="flex gap-3 p-3 bg-red-50 rounded-lg border-r-4 border-red-400">
              <AlertCircle className="text-red-500 mt-1" size={20} />
              <div className="text-right flex-1">
                <div className="font-medium text-red-800">إعلان مهم: تغيير موعد امتحان البرمجة</div>
                <div className="text-sm text-red-600 mt-1">
                  تم تأجيل امتحان مادة البرمجة المتقدمة من يوم الأحد إلى يوم الإثنين
                </div>
                <div className="text-xs text-red-500 mt-2">منذ ساعتين</div>
              </div>
            </div>
            <div className="flex gap-3 p-3 bg-yellow-50 rounded-lg border-r-4 border-yellow-400">
              <FileText className="text-yellow-600 mt-1" size={20} />
              <div className="text-right flex-1">
                <div className="font-medium text-yellow-800">ورشة عمل جديدة</div>
                <div className="text-sm text-yellow-600 mt-1">
                  ورشة عمل حول الذكاء الاصطناعي يوم الخميس الساعة 3 مساءً
                </div>
                <div className="text-xs text-yellow-500 mt-2">منذ 3 ساعات</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ScheduleScreen = () => {
    return (
      <div className="bg-gray-50 min-h-screen pt-4 pb-20 px-4 overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4 text-right">الجدول الدراسي</h2>
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-2">
                <FileText size={16} className="text-blue-500" />
                <span className="text-blue-500 text-sm">محاضرة</span>
              </div>
              <div className="text-right flex-1 mx-4">
                <div className="font-medium">هندسة البرمجيات</div>
                <div className="text-sm text-gray-600">د. سارة أحمد - قاعة 101</div>
              </div>
              <div className="text-blue-600 font-medium">9:00 AM</div>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-2">
                <FileText size={16} className="text-blue-500" />
                <span className="text-blue-500 text-sm">محاضرة</span>
              </div>
              <div className="text-right flex-1 mx-4">
                <div className="font-medium">قواعد البيانات</div>
                <div className="text-sm text-gray-600">د. سارة أحمد - قاعة 101</div>
              </div>
              <div className="text-blue-600 font-medium">12:00 PM</div>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-2">
                <FileText size={16} className="text-blue-500" />
                <span className="text-blue-500 text-sm">محاضرة</span>
              </div>
              <div className="text-right flex-1 mx-4">
                <div className="font-medium">الشبكات</div>
                <div className="text-sm text-gray-600">د. سارة أحمد - قاعة 108</div>
              </div>
              <div className="text-blue-600 font-medium">3:00 PM</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const AssignmentsScreen = () => {
    return (
      <div className="bg-gray-50 min-h-screen pt-4 pb-20 px-4 overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4 text-right">التكليفات الحالية</h2>
        <div className="space-y-3">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <div className="text-sm bg-red-100 text-red-600 px-2 py-1 rounded">لم يتم التسليم</div>
              <div className="text-right">
                <div className="font-medium">مشروع النهائي</div>
                <div className="text-sm text-gray-600">هندسة البرمجيات - موعد التسليم: 20-08-2025</div>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <div className="text-sm bg-green-100 text-green-600 px-2 py-1 rounded">85/100</div>
              <div className="text-right">
                <div className="font-medium">تحليل النظم</div>
                <div className="text-sm text-gray-600">تحليل وتصميم النظم - تم التسليم: 15-08-2025</div>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <div className="text-sm bg-yellow-100 text-yellow-600 px-2 py-1 rounded">قيد المراجعة</div>
              <div className="text-right">
                <div className="font-medium">تطبيق قواعد البيانات</div>
                <div className="text-sm text-gray-600">قواعد البيانات - تم التسليم: 16-08-2025</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm mt-4">
          <div className="flex items-center justify-between mb-4">
            <Filter className="text-gray-500" size={20} />
            <h2 className="text-lg font-semibold">المحاضرات والملفات</h2>
          </div>
          <div className="space-y-3">
            {[
              { name: 'Lecture1_IntroToCS.pdf', type: 'محاضرة', color: 'blue' },
              { name: 'Lecture4_ComputerArchit...', type: 'محاضرة', color: 'blue' },
              { name: 'HW2_ProgrammingInC++...', type: 'واجبات', color: 'green' },
              { name: 'ورقة مراجعة الرياضيات المتقدمة', type: 'ملخصات', color: 'purple' }
            ].map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <Download className="text-blue-500" size={20} />
                  <span
                    className={`text-xs px-2 py-1 rounded ${file.color === 'blue'
                        ? 'text-blue-600 bg-blue-100'
                        : file.color === 'green'
                          ? 'text-green-600 bg-green-100'
                          : 'text-purple-600 bg-purple-100'
                      }`}
                  >
                    {file.type}
                  </span>
                </div>
                <div className="text-right flex-1 mx-4">
                  <div className="text-sm font-medium truncate">{file.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const MessagesScreen = () => {
    return (
      <div className="bg-gray-50 min-h-screen pt-4 pb-20 px-4 overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4 text-right">المحادثات</h2>
        <div className="flex bg-gray-200 p-1 rounded-lg mb-4 text-sm">
          <button className="flex-1 py-2 text-center rounded-md bg-white text-gray-700">الكل</button>
          <button className="flex-1 py-2 text-center text-gray-500 hover:bg-gray-100 rounded-md">الإدارة</button>
          <button className="flex-1 py-2 text-center text-gray-500 hover:bg-gray-100 rounded-md">الطلاب</button>
          <button className="flex-1 py-2 text-center text-gray-500 hover:bg-gray-100 rounded-md">هيئة التدريس</button>
        </div>
        <div className="space-y-3">
          {[
            { name: 'د. هاني صالح', message: 'يا جماعة يذكر في محاضرة ومحادثة المحضر', time: '12:34PM', unread: true },
            { name: 'أيمن بكري', message: 'حاضر أستاذ شكراً لك في باقي', time: '12:34PM', unread: false },
            { name: 'أ. ليلي مصطفى', message: 'والنظام العام فين الأسئلة', time: '12:30PM', unread: false },
            { name: 'أحمد سمير', message: 'السلام عليكم ممكن سؤال معتمدين', time: '11:45AM', unread: true }
          ].map((chat, index) => (
            <div
              key={index}
              className={`bg-white p-4 rounded-lg shadow-sm flex items-center gap-3 hover:bg-gray-50 ${chat.unread ? 'border-l-4 border-blue-500' : ''
                }`}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <User className="text-gray-600" size={20} />
                </div>
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
      </div>
    );
  };

  const ProfileScreen = () => {
    return (
      <div className="bg-gray-50 min-h-screen pt-4 pb-20 px-4 overflow-y-auto">
        <div className="bg-white p-6 rounded-xl shadow-sm text-center mb-6">
          <div className="w-20 h-20 bg-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
            <User className="text-purple-600" size={32} />
          </div>
          <h2 className="text-xl font-bold">أحمد محمد #34215</h2>
          <div className="text-gray-600 text-sm mt-2">
            <div>جامعة الإسكندرية</div>
            <div>كلية الهندسة</div>
            <div>السنة الثالثة</div>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => setCurrentScreen('financial')}
            className="w-full bg-white p-4 rounded-xl shadow-sm flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="text-gray-400" size={20} />
            <div className="flex items-center gap-3">
              <DollarSign className="text-green-500" size={20} />
              <span>المصروفات الدراسية</span>
            </div>
          </button>

          <button
            onClick={() => setCurrentScreen('attendance')}
            className="w-full bg-white p-4 rounded-xl shadow-sm flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="text-gray-400" size={20} />
            <div className="flex items-center gap-3">
              <Clock className="text-blue-500" size={20} />
              <span>سجل الحضور</span>
            </div>
          </button>

          <button
            onClick={() => setCurrentScreen('support')}
            className="w-full bg-white p-4 rounded-xl shadow-sm flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="text-gray-400" size={20} />
            <div className="flex items-center gap-3">
              <HelpCircle className="text-orange-500" size={20} />
              <span>الدعم والمساعدة</span>
            </div>
          </button>

          <button className="w-full bg-white p-4 rounded-xl shadow-sm flex items-center justify-between hover:bg-gray-50 transition-colors">
            <ChevronLeft className="text-gray-400" size={20} />
            <div className="flex items-center gap-3">
              <Settings className="text-gray-500" size={20} />
              <span>الإعدادات</span>
            </div>
          </button>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm mt-6">
          <h2 className="text-lg font-semibold mb-3 text-right">إحصائيات الطالب</h2>
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
        </div>
      </div>
    );
  };

  const AttendanceScreen = () => {
    return (
      <div className="bg-gray-50 min-h-screen pt-4 pb-20 px-4 overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4 text-right">سجل الحضور المفصل</h2>
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4 text-right">إحصائيات عامة</h2>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-3 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">81%</div>
              <div className="text-xs text-blue-700">النسبة الكلية</div>
            </div>
            <div className="p-3 bg-red-50 rounded-lg">
              <div className="text-2xl font-bold text-red-600">7</div>
              <div className="text-xs text-red-700">إجمالي الغياب</div>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">30</div>
              <div className="text-xs text-green-700">إجمالي الحضور</div>
            </div>
          </div>
        </div>

        <div className="space-y-4 mt-4">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <span className="text-green-600 font-bold">80%</span>
              <span className="font-medium">هندسة البرمجيات</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>3 غياب</span>
              <span>حضور 12</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <span className="text-green-600 font-bold">83%</span>
              <span className="font-medium">قواعد البيانات</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>2 غياب</span>
              <span>حضور 10</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '83%' }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const FinancialScreen = () => {
    return (
      <div className="bg-gray-50 min-h-screen pt-4 pb-20 px-4 overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4 text-right">المصروفات الدراسية</h2>
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4 text-right">ملخص المصروفات</h2>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="p-3 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">5000 ج.م</div>
              <div className="text-xs text-green-700">المدفوع</div>
            </div>
            <div className="p-3 bg-red-50 rounded-lg">
              <div className="text-2xl font-bold text-red-600">2000 ج.م</div>
              <div className="text-xs text-red-700">المتبقي</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm mt-4">
          <h2 className="text-lg font-semibold mb-4 text-right">تفاصيل المدفوعات</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 border rounded-lg">
              <div className="text-sm bg-green-100 text-green-600 px-2 py-1 rounded">مدفوع</div>
              <div className="text-right flex-1 mx-4">
                <div className="font-medium">رسوم الفصل الدراسي الأول</div>
                <div className="text-sm text-gray-600">تاريخ الدفع: 15-09-2024</div>
              </div>
              <div className="text-green-600 font-medium">3000 ج.م</div>
            </div>
            <div className="flex justify-between items-center p-3 border rounded-lg">
              <div className="text-sm bg-red-100 text-red-600 px-2 py-1 rounded">متأخر</div>
              <div className="text-right flex-1 mx-4">
                <div className="font-medium">رسوم الفصل الدراسي الثاني</div>
                <div className="text-sm text-gray-600">تاريخ الاستحقاق: 01-02-2025</div>
              </div>
              <div className="text-red-600 font-medium">2000 ج.م</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const SupportScreen = () => {
    return (
      <div className="bg-gray-50 min-h-screen pt-4 pb-20 px-4 overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4 text-right">الدعم والمساعدة</h2>
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4 text-right">تواصل معنا</h2>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
              <ChevronLeft className="text-gray-400" size={20} />
              <div className="flex items-center gap-3">
                <Phone className="text-green-500" size={20} />
                <div className="text-right">
                  <div className="font-medium">الاتصال المباشر</div>
                  <div className="text-sm text-gray-600">123-456-7890</div>
                </div>
              </div>
            </button>
            <button className="w-full flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
              <ChevronLeft className="text-gray-400" size={20} />
              <div className="flex items-center gap-3">
                <Mail className="text-blue-500" size={20} />
                <div className="text-right">
                  <div className="font-medium">البريد الإلكتروني</div>
                  <div className="text-sm text-gray-600">support@university.edu</div>
                </div>
              </div>
            </button>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm mt-4">
          <h2 className="text-lg font-semibold mb-4 text-right">الأسئلة الشائعة</h2>
          <div className="space-y-3">
            <div className="p-3 border rounded-lg">
              <div className="font-medium mb-2">كيف يمكنني تغيير كلمة المرور؟</div>
              <div className="text-sm text-gray-600">يمكنك تغيير كلمة المرور من خلال الإعدادات...</div>
            </div>
            <div className="p-3 border rounded-lg">
              <div className="font-medium mb-2">كيف أتحقق من درجاتي؟</div>
              <div className="text-sm text-gray-600">يمكنك مراجعة درجاتك في قسم التكليفات...</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // -------------------- NAVIGATION --------------------

  const renderScreen = () => {
    switch (currentScreen) {
      case 'attendance':
        return <AttendanceScreen />;
      case 'financial':
        return <FinancialScreen />;
      case 'support':
        return <SupportScreen />;
      default:
        switch (activeTab) {
          case 'home':
            return <DashboardScreen />;
          case 'schedule':
            return <ScheduleScreen />;
          case 'assignments':
            return <AssignmentsScreen />;
          case 'messages':
            return <MessagesScreen />;
          case 'profile':
            return <ProfileScreen />;
          default:
            return <DashboardScreen />;
        }
    }
  };

  return (
    <div className="w-full h-screen bg-white flex flex-col">
      <div className="flex-1 overflow-hidden">{renderScreen()}</div>

      {currentScreen === 'main' && (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4">
          <div className="flex justify-around">
            <TabButton
              id="home"
              icon={Home}
              isActive={activeTab === 'home'}
              onClick={() => setActiveTab('home')}
            />
            <TabButton
              id="schedule"
              icon={Calendar}
              isActive={activeTab === 'schedule'}
              onClick={() => setActiveTab('schedule')}
            />
            <TabButton
              id="assignments"
              icon={FileText}
              isActive={activeTab === 'assignments'}
              onClick={() => setActiveTab('assignments')}
            />
            <TabButton
              id="messages"
              icon={MessageSquare}
              isActive={activeTab === 'messages'}
              onClick={() => setActiveTab('messages')}
            />
            <TabButton
              id="profile"
              icon={User}
              isActive={activeTab === 'profile'}
              onClick={() => setActiveTab('profile')}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentApp;
