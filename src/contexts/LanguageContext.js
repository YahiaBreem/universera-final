import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
    en: {
        // universities
        asu: "Ain Shams University",
        au: "Alexandria University",
        cu: "Cairo University",
        hu: "Helwan University",
        mu: "Menoufia University",
        su: "Sohag University",

        // faculties
        facocomputerai: "Faculty of Computers and Artificial Intelligence",
        facoeng: "Faculty of Engineering",
        facocommerce: "Faculty of Commerce",
        facobusiness: "Faculty of Business",
        facomedicine: "Faculty of Medicine",
        facoscience: "Faculty of Science",
        facoarts: "Faculty of Arts",
        facolaw: "Faculty of Law",
        facomasscomms: "Faculty of Mass Communication",
        facoagri: "Faculty of Agriculture",
        generalfaculty: "General faculty",
        unspecifiedfaculty: "Unspecified faculty",

        // course types
        lecture: "Lecture",
        lectures: "Lectures",
        lab: "Lab",
        exercise: "Exercise",
        exercises: "Exercises",
        project: "Project",
        projects: "Projects",
        assignment: "Assignment",
        assignments: "Assignments",
        files: "Files",
        file: "File",

        // ui
        faculty: "Faculty",
        all: " All",
        studentstats: "Student Stats",
        email: "Email",
        phone: "Phone",
        generalstatistics: "General Statistics",
        notsubmitted: "Not submitted",
        submitted: "Submitted",
        studyschedule: "Study Schedule",
        gpa: "GPA",
        attendance: "Attendance",
        totalattendance: "Total attendance",
        totalabsence: "Total absence",
        absence: "Absence",
        todayschedule: "Today's Schedule",
        currentassignments: "Current Assignments",
        viewallassignments: "View all assignments",
        showallassign: "Show all assignments",
        showfullschedule: "Show full schedule",
        recentannouncements: "Recent Announcements",
        gform: "Google Forms survey",
        welcome: "Welcome",
        welcomelogin: "Welcome",
        enter: "Enter",
        home: "Home",
        calendar: "Calendar",
        messages: "Messages",
        newchat: "New chat",
        chatstarted: "Chat started",
        writemessage: "Write a message",
        msg: "Hello! How can I help you?",
        profile: "Profile",
        academicexpenses: "Academic Expenses",
        attendancerecord: "Attendance Record",
        detailedattendancerecord: "Detailed Attendance Record",
        supporthelp: "Support & Help",
        technicalsupport: "Technical support",
        technicaldifficulities: "Login and materials issues",
        replywithinoneday: "Reply within one business day",
        settings: "Settings",
        appearance: "Appearance",
        appearancesettings: "Appearance Settings",
        generalsettings: "General Settings",
        language: "Language",
        arabic: "Arabic",
        light: "Light",
        dark: "Dark",
        darkmodeon: "Dark Mode On",
        darkmodeoff: "Dark Mode Off",
        appinformation: "App Information",
        version: "Version",
        appversion: "App Version",
        notifications: "Notifications",
        notiftglon: "Enabled",
        notiftgloff: "Disabled",
        copyright: "Copyright",
        disclaimerheader: "Disclaimer",
        disclaimertext1: "This app is a prototype concept and is not an official application. It is not affiliated with any official government body, especially the Ministry of Higher Education and Scientific Research. It is merely a concept and visualization of an idea.",
        disclaimertext2: "The universities listed here were collected from a ",
        disclaimertext3: "All names or courses mentioned here are fictional and do not refer to real entities. Any resemblance is purely coincidental and unintentional.",
        disclaimerconfirm: "I understand, continue",

        // login & setup
        namereq: "What is your name?",
        namereqplaceholder: "Enter your name",
        namereqwarn: "Please enter your name",
        collegeselect: "Select your university",
        collegeselectplaceholder: "Select the university you study at",
        collegeselectwarn: "Please select a university",
        facultyselect: "Select your faculty",
        facultyselectplaceholder: "Select your faculty at ",
        facultywarn: "Please select a faculty",

        // academic
        year: "Third Year",
        academicyear2025: "Academic year 2025",
        semesterone: "Semester one",
        semestertwo: "Semester two",
        classschedule: "Class schedule",
        viewfullschedule: "View full schedule",
        finalprojectdeadline: "Final semester project deadline",
        projectsubmissiondate: "Project submission date",
        deadline: "Deadline",
        duedate: "Due date",
        registrationguidelinesavailable: "Registration guidelines available",
        importantannouncement: "Important announcement",
        examschedulechange: "Programming exam schedule change",
        exampostponed: "Advanced Programming exam postponed from Sunday to Monday",
        courseregistrationopen: "Course registration open",
        nextsemesterregistrationopens: "Registration for next semester opens next Sunday",
        databases: "Databases",

        // people
        students: "Students",
        colleagues: "Colleagues",
        facultyprofessors: "Faculty Professors",
        facultymembers: "Faculty members",
        nopeersdata: "No peers data available for this faculty",
        nolecturersdata: "No lecturers data available for this faculty",

        // misc academic
        lecturesandfiles: "Lectures and files",
        completedcredits: "Completed Credits",
        completedprojects: "Completed Projects",
        totalpercentage: "Total percentage",
        system: "System",
        reminder: "Reminder",
        filter: "Filter",
        administration: "Administration",
        studentaffairs: "Student affairs",
        studentaffairsoffice: "Student Affairs Office",
        unspecifieduniversity: "Unspecified university",
        unspecifiedhall: "Unspecified hall",
        newstudent: "New student",
        newworkshop: "New workshop",

        // finance
        totaldue: "Total due",
        unpaid: "Unpaid",
        paid: "Paid",
        basefees: "Base fees",
        excellencediscount: "Excellence discount",
        paymentdetails: "Payment details",

        // file & media
        uploadfile: "Upload file",
        fileuploaded: "File uploaded",
        viewfile: "View file",
        photos: "Photos",
        pics: "Pics",
        searchhistory: "Search history",

        // chat / interaction
        next: "Next",
        back: "Back",
        sendchatrequest: "Send chat request",
        howcanihelp: "How can I help you?",
        onlinenow: "Online now",

        // exit
        cancel: "Cancel",
        logout: "Logout",
        exit: "Exit",

        // time
        today: "Today",
        twohoursago: "2 hours ago",
        threehoursago: "3 hours ago",
        fivehoursago: "5 hours ago",
    },

    ar: {
        // universities
        asu: "جامعة عين شمس",
        au: "جامعة الإسكندرية",
        cu: "جامعة القاهرة",
        hu: "جامعة حلوان",
        mu: "جامعة المنوفية",
        su: "جامعة سوهاج",

        // faculties
        facocomputerai: "كلية الحاسبات والذكاء الاصطناعي",
        facoeng: "كلية الهندسة",
        facocommerce: "كلية التجارة",
        facobusiness: "كلية الأعمال",
        facomedicine: "كلية الطب",
        facoscience: "كلية العلوم",
        facoarts: "كلية الآداب",
        facolaw: "كلية الحقوق",
        facomasscomms: "كلية الإعلام",
        facoagri: "كلية الزراعة",
        generalfaculty: "كلية عامة",
        unspecifiedfaculty: "كلية غير محددة",

        // course types
        lecture: "محاضرة",
        lectures: "محاضرات",
        lab: "معمل",
        exercise: "تمرين",
        exercises: "تمارين",
        project: "مشروع",
        projects: "مشاريع",
        assignment: "واجب",
        assignments: "واجبات",
        files: "ملفات",
        file: "ملف",

        // ui
        faculty: "هيئة تدريس",
        all: "الكل",
        studentstats: "إحصائيات الطالب",
        email: "إيميل",
        phone: "اتصال",
        generalstatistics: "إحصائيات عامة",
        notsubmitted: "غير مُسلم ",
        submitted: "مُسلم",
        studyschedule: "جدول الدراسة",
        gpa: "المعدل التراكمي",
        attendance: "الحضور",
        totalattendance: "إجمالي الحضور",
        totalabsence: "إجمالي الغياب",
        absence: "الغياب",
        todayschedule: "جدول اليوم",
        currentassignments: "الواجبات الحالية",
        viewallassignments: "عرض جميع الواجبات",
        showallassign: "عرض جميع الواجبات",
        showfullschedule: "عرض الجدول كامل",
        recentannouncements: " الإعلانات الأخيرة",
        gform: "استبيان Google Forms",
        welcome: "مرحباً",
        welcomelogin: "مرحباً بك",
        enter: "الدخول",
        home: "الرئيسية",
        calendar: "التقويم",
        messages: "الرسائل",
        newchat: "محادثة جديدة",
        chatstarted: " تم بدء المحادثة",
        writemessage: "اكتب رسالة",
        msg: "مرحباً! كيف يمكنني مساعدتك؟",
        profile: "الملف الشخصي",
        academicexpenses: "المصاريف الأكاديمية",
        attendancerecord: "سجل الحضور",
        detailedattendancerecord: "سجل الحضور المفصل",
        supporthelp: "الدعم والمساعدة",
        technicalsupport: "الدعم الفني للمنصة",
        technicaldifficulities: "مشاكل الدخول والمواد",
        replywithinoneday: "الرد خلال يوم عمل",
        settings: "الإعدادات",
        appearance: "المظهر",
        appearancesettings: "إعدادات المظهر",
        generalsettings: "الإعدادات العامة",
        language: "اللغة",
        light: "فاتح",
        dark: "مظلم",
        darkmodeon: "الوضع المظلم مفعل",
        darkmodeoff: "الوضع المظلم معطل",
        appinformation: "معلومات التطبيق",
        version: "الإصدار",
        appversion: "إصدار التطبيق",
        notifications: "الإشعارات",
        notiftglon: "مفعل",
        notiftgloff: "معطل",
        copyright: "حقوق النشر",
        disclaimerheader: "إخلاء المسؤولية",
        disclaimertext1: "هذا التطبيق مجرد مفهوم تجريبي و ليس تطبيقاً رسمياً ولا يرتبط بأي جهة حكومية رسمية، خاصة وزارة التعليم العالي و البحث العلمي. فهو مجرد مفهوم و تصوير لفكرة.",
        disclaimertext2: " الجامعات الواردة هنا تم جمعها من نموذج ",
        disclaimertext3: "جميع الأسماء او المقررات الواردة هنا غير حقيقية ولا تشير إلى الواقع على الإطلاق. أي تشابه هو مصادفة بحتة و غير مقصودة.",
        disclaimerconfirm: "أفهم، متابعة",

        // login & setup
        namereq: "ما اسمك؟",
        namereqplaceholder: "أدخل اسمك",
        namereqwarn: "من فضلك أدخل اسمك",
        collegeselect: "اختر جامعتك",
        collegeselectplaceholder: "اختر الجامعة التي تدرس بها",
        collegeselectwarn: "من فضلك اختر جامعة",
        facultyselect: "اختر كليتك",
        facultyselectplaceholder: "اختر كليتك في ",
        facultywarn: "من فضلك اختر كلية",

        // academic
        year: "الفرقة الثالثة",
        academicyear2025: "العام الدراسي 2025",
        semesterone: "الفصل الأول",
        semestertwo: "الفصل الثاني",
        classschedule: "جدول المحاضرات",
        viewfullschedule: "عرض الجدول كامل",
        finalprojectdeadline: "آخر موعد لمشروع الترم",
        projectsubmissiondate: "تاريخ تسليم المشروع",
        deadline: "الموعد النهائي",
        duedate: "تاريخ الاستحقاق",
        registrationguidelinesavailable: "إرشادات التسجيل متاحة",
        importantannouncement: "إعلان هام",
        examschedulechange: "تغيير جدول امتحان البرمجة",
        exampostponed: "تم تأجيل امتحان البرمجة المتقدمة من الأحد إلى الاثنين",
        courseregistrationopen: "تم فتح التسجيل للمقررات",
        nextsemesterregistrationopens: "التسجيل للترم القادم يبدأ الأحد القادم",
        databases: "قواعد البيانات",

        // people
        students: "طلاب",
        colleagues: "زملاء",
        facultyprofessors: "أساتذة الكلية",
        facultymembers: "أعضاء هيئة التدريس",
        nopeersdata: "لا توجد بيانات للطلاب في هذه الكلية",
        nolecturersdata: "لا توجد بيانات للمحاضرين في هذه الكلية",

        // misc academic
        lecturesandfiles: "المحاضرات والملفات",
        completedcredits: "الساعات المكتملة",
        completedprojects: "المشاريع المكتملة",
        totalpercentage: "النسبة الإجمالية",
        system: "النظام",
        reminder: "تذكير",
        filter: "تصفية",
        administration: "الإدارة",
        studentaffairs: "شؤون الطلاب",
        studentaffairsoffice: "مكتب شؤون الطلاب",
        unspecifieduniversity: "جامعة غير محددة",
        unspecifiedhall: "قاعة غير محددة",
        newstudent: "طالب جديد",
        newworkshop: "ورشة جديدة",

        // finance
        totaldue: "الإجمالي المستحق",
        unpaid: "غير مدفوع",
        paid: "مدفوع",
        basefees: "الرسوم الأساسية",
        excellencediscount: "خصم تفوق",
        paymentdetails: "تفاصيل الدفع",

        // file & media
        uploadfile: "رفع ملف",
        fileuploaded: "تم رفع الملف",
        viewfile: "عرض الملف",
        photos: "صور",
        pics: "صور",
        searchhistory: "سجل البحث",

        // chat / interaction
        next: "التالي",
        back: "السابق",
        sendchatrequest: "إرسال طلب محادثة",
        howcanihelp: "كيف أقدر أساعدك؟",
        onlinenow: "متصل الآن",

        // exit
        cancel: "إلغاء",
        logout: "تسجيل خروج",
        exit: "خروج",

        // time
        today: "اليوم",
        twohoursago: "منذ ساعتين",
        threehoursago: "منذ 3 ساعات",
        fivehoursago: "منذ 5 ساعات",
    },
};


const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const LanguageProvider = ({ children }) => {
    // Initialize from browser language or default to Arabic
    const [language, setLanguage] = useState(() => {
        const saved = sessionStorage.getItem('preferred-language');
        if (saved) return saved;

        // Detect browser language
        const browserLang = navigator.language || navigator.userLanguage;
        return browserLang.startsWith('ar') ? 'ar' : 'en';
    });

    // Save language preference
    useEffect(() => {
        sessionStorage.setItem('preferred-language', language);

        // Apply RTL/LTR to document
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = language;
    }, [language]);

    const t = (key) => {
        return translations[language]?.[key] || key;
    };

    const changeLanguage = (newLanguage) => {
        if (translations[newLanguage]) {
            setLanguage(newLanguage);
        }
    };

    const isRTL = language === 'ar';

    return (
        <LanguageContext.Provider value={{
            language,
            changeLanguage,
            t,
            isRTL,
            isArabic: language === 'ar',
            isEnglish: language === 'en'
        }}>
            {children}
        </LanguageContext.Provider>
    );
};