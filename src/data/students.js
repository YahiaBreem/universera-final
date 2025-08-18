export const students = [
    // Cairo University
    { id: "1", firstName: "test", lastName: "test", username: "test", email: "test.te@ca.edu.eg", password: "1", university: "Cairo University", faculty: "Faculty of Engineering", year: 1, gpa: 3.2, attendance: 85, enrolledCourses: ["هندسة البرمجيات", "الدوائر الكهربائية"], absences: 5, attended: 25, credits: 72, projectsCompleted: 8 },
    { id: "CU1001", firstName: "أحمد", lastName: "عبدالله", username: "ahmed.abdallah", email: "ahmed.abdallah@cu.edu.eg", password: "pass123", university: "Cairo University", faculty: "Faculty of Engineering", year: 1, gpa: 3.2, attendance: 85, enrolledCourses: ["هندسة البرمجيات", "الدوائر الكهربائية"], absences: 5, attended: 25, credits: 72, projectsCompleted: 8 },
    { id: "CU1002", firstName: "سارة", lastName: "محمد", username: "sara.mohamed", email: "sara.mohamed@cu.edu.eg", password: "sara2025", university: "Cairo University", faculty: "Faculty of Commerce", year: 1, gpa: 2.9, attendance: 92, enrolledCourses: ["مبادئ المحاسبة", "إدارة الموارد البشرية"], absences: 5, attended: 25, credits: 72, projectsCompleted: 8 },
    { id: "CU1003", firstName: "محمود", lastName: "أحمد", username: "mahmoud.ahmed", email: "mahmoud.ahmed@cu.edu.eg", password: "mahmoud123", university: "Cairo University", faculty: "Faculty of Medicine", year: 1, gpa: 3.5, attendance: 88, enrolledCourses: ["تشريح", "فسيولوجيا"], absences: 5, attended: 25, credits: 72, projectsCompleted: 8 },
    { id: "CU1004", firstName: "نور", lastName: "سامي", username: "noor.sami", email: "noor.sami@cu.edu.eg", password: "noor2025", university: "Cairo University", faculty: "Faculty of Arts", year: 1, gpa: 3.1, attendance: 90, enrolledCourses: ["تاريخ", "أدب عربي"], absences: 5, attended: 25, credits: 72, projectsCompleted: 8 },
    { id: "CU1005", firstName: "كريم", lastName: "حسين", username: "karim.hussein", email: "karim.hussein@cu.edu.eg", password: "karim123", university: "Cairo University", faculty: "Faculty of Law", year: 1, gpa: 3.3, attendance: 87, enrolledCourses: ["قانون مدني", "قانون جنائي"], absences: 5, attended: 25, credits: 72, projectsCompleted: 8 },

    // Cairo National University
    { id: "CNU1002", firstName: "ليلى", lastName: "حسن", username: "layla.hassan", email: "layla.hassan@cnu.edu.eg", password: "layla2025", university: "Cairo National University", faculty: "Faculty of Commerce", year: 1, gpa: 3.0, attendance: 85, enrolledCourses: ["مبادئ المحاسبة", "إدارة الموارد البشرية"], absences: 5, attended: 25, credits: 72, projectsCompleted: 8 },
    { id: "CNU1003", firstName: "سليم", lastName: "علي", username: "salim.ali", email: "salim.ali@cnu.edu.eg", password: "salim2025", university: "Cairo National University", faculty: "Faculty of Medicine", year: 1, gpa: 3.6, attendance: 90, enrolledCourses: ["تشريح", "فسيولوجيا"], absences: 5, attended: 25, credits: 72, projectsCompleted: 8 },
    // Ain Shams University
    { id: "ASU2001", firstName: "فاطمة", lastName: "سعيد", username: "fatma.saeed", email: "fatma.saeed@as.edu.eg", password: "fatma2025", university: "Ain Shams University", faculty: "Faculty of Engineering", year: 1, gpa: 3.7, attendance: 95, enrolledCourses: ["هندسة البرمجيات", "الدوائر الكهربائية"], absences: 5, attended: 25, credits: 72, projectsCompleted: 8 },
    { id: "ASU2002", firstName: "يوسف", lastName: "حسين", username: "youssef.hussein", email: "youssef.hussein@as.edu.eg", password: "youssef2025", university: "Ain Shams University", faculty: "Faculty of Commerce", year: 1, gpa: 3.0, attendance: 82, enrolledCourses: ["مبادئ المحاسبة", "إدارة الموارد البشرية"], absences: 5, attended: 25, credits: 72, projectsCompleted: 8 },
    { id: "ASU2003", firstName: "هالة", lastName: "علي", username: "hala.ali", email: "hala.ali@as.edu.eg", password: "hala1234", university: "Ain Shams University", faculty: "Faculty of Medicine", year: 1, gpa: 3.8, attendance: 97, enrolledCourses: ["تشريح", "فسيولوجيا"], absences: 5, attended: 25, credits: 72, projectsCompleted: 8 },
    { id: "ASU2004", firstName: "رامي", lastName: "صبحي", username: "rami.sobhi", email: "rami.sobhi@as.edu.eg", password: "rami2025", university: "Ain Shams University", faculty: "Faculty of Arts", year: 1, gpa: 3.2, attendance: 88, enrolledCourses: ["تاريخ", "أدب عربي"], absences: 5, attended: 25, credits: 72, projectsCompleted: 8 },
    { id: "ASU2005", firstName: "منى", lastName: "كمال", username: "mona.kamal", email: "mona.kamal@as.edu.eg", password: "mona2025", university: "Ain Shams University", faculty: "Faculty of Law", year: 1, gpa: 3.5, attendance: 90, enrolledCourses: ["قانون مدني", "قانون جنائي"], absences: 5, attended: 25, credits: 72, projectsCompleted: 8 },

    // Alexandria University
    { id: "AU3001", firstName: "هالة", lastName: "سمير", username: "hala.samir", email: "hala.samir@au.edu.eg", password: "hala2025", university: "Alexandria University", faculty: "Faculty of Medicine", year: 1, gpa: 3.8, attendance: 96, enrolledCourses: ["تشريح", "فسيولوجيا"], absences: 5, attended: 25, credits: 72, projectsCompleted: 8 },
    { id: "AU3002", firstName: "محمد", lastName: "سمير", username: "mohamed.samir", email: "mohamed.samir@au.edu.eg", password: "mohamed2025", university: "Alexandria University", faculty: "Faculty of Engineering", year: 1, gpa: 3.1, attendance: 90, enrolledCourses: ["هندسة البرمجيات", "الميكانيكا"], absences: 5, attended: 25, credits: 72, projectsCompleted: 8 },
    { id: "AU3456", firstName: "يحيى", lastName: "بريم", username: "yahia.breem", email: "yahia.breem@au.edu.eg", password: "1234", university: "Alexandria University", faculty: "Faculty of Business", year: 3, gpa: 3.2, attendance: 85, enrolledCourses: ["مبادئ المحاسبة", "إدارة الموارد البشرية"], absences: 5, attended: 25, credits: 72, projectsCompleted: 8 },
    { id: "AU3004", firstName: "كريم", lastName: "خالد", username: "karim.khaled", email: "karim.khaled@au.edu.eg", password: "karim123", university: "Alexandria University", faculty: "Faculty of Engineering", year: 1, gpa: 3.6, attendance: 91, enrolledCourses: ["هندسة البرمجيات", "الميكانيكا"], absences: 5, attended: 25, credits: 72, projectsCompleted: 8 },
    { id: "AU3005", firstName: "مي", lastName: "سامح", username: "mai.sameh", email: "mai.sameh@au.edu.eg", password: "mai2025", university: "Alexandria University", faculty: "Faculty of Medicine", year: 1, gpa: 3.9, attendance: 96, enrolledCourses: ["تشريح", "علم الأدوية"], absences: 5, attended: 25, credits: 72, projectsCompleted: 8 },

    // Alexandria National University
    { id: "ANU1001", firstName: "سما", lastName: "محمد", username: "sama.mohamed", email: "sama.mohamed@anu.edu.eg", password: "sama2025", university: "Alexandria National University", faculty: "Faculty of Computer Science", year: 1, gpa: 2.7, attendance: 83, enrolledCourses: ["هياكل البيانات", "نظم التشغيل", "قواعد البيانات", "الذكاء الاصطناعي", "شبكات الحاسوب", "تحليل وتصميم الخوارزميات"], absences: 5, attended: 25, credits: 72, projectsCompleted: 8 },
    // Mansoura University
    { id: "MU4001", firstName: "نور", lastName: "محمود", username: "noor.mahmoud", email: "noor.mahmoud@example.com", password: "noor2025", university: "Mansoura University", faculty: "Faculty of Commerce", year: 1, gpa: 3.3, attendance: 87, enrolledCourses: ["مبادئ المحاسبة", "التسويق"], absences: 5, attended: 25, credits: 72, projectsCompleted: 8 },
    { id: "MU4002", firstName: "كريم", lastName: "خالد", username: "karim.khaled", email: "karim.khaled@example.com", password: "karim123", university: "Mansoura University", faculty: "Faculty of Engineering", year: 1, gpa: 3.6, attendance: 91, enrolledCourses: ["هندسة البرمجيات", "الميكانيكا"], absences: 5, attended: 25, credits: 72, projectsCompleted: 8 },
    { id: "MU4003", firstName: "ليلى", lastName: "حسن", username: "layla.hassan", email: "layla.hassan@example.com", password: "layla123", university: "Mansoura University", faculty: "Faculty of Medicine", year: 1, gpa: 3.7, attendance: 92, enrolledCourses: ["تشريح", "فسيولوجيا"], absences: 5, attended: 25, credits: 72, projectsCompleted: 8 },
    { id: "MU4004", firstName: "سليم", lastName: "عاطف", username: "salim.atif", email: "salim.atif@example.com", password: "salim123", university: "Mansoura University", faculty: "Faculty of Engineering", year: 1, gpa: 3.5, attendance: 90, enrolledCourses: ["هندسة البرمجيات", "الميكانيكا"], absences: 5, attended: 25, credits: 72, projectsCompleted: 8 },
    { id: "MU4005", firstName: "هند", lastName: "محمود", username: "hend.mahmoud", email: "hend.mahmoud@example.com", password: "hend2025", university: "Mansoura University", faculty: "Faculty of Commerce", year: 1, gpa: 3.4, attendance: 87, enrolledCourses: ["مبادئ المحاسبة", "إدارة الموارد البشرية"], absences: 5, attended: 25, credits: 72, projectsCompleted: 8 },

    // Suez Canal University
    { id: "SCU5001", firstName: "أشرف", lastName: "خالد", username: "ashraf.khaled", email: "ashraf.khaled@example.com", password: "ashraf123", university: "Suez Canal University", faculty: "Faculty of Engineering", year: 1, gpa: 3.6, attendance: 91, enrolledCourses: ["هندسة البرمجيات", "الميكانيكا"], absences: 5, attended: 25, credits: 72, projectsCompleted: 8 },
    { id: "SCU5002", firstName: "ريم", lastName: "أحمد", username: "reem.ahmed", email: "reem.ahmed@example.com", password: "reem2025", university: "Suez Canal University", faculty: "Faculty of Medicine", year: 1, gpa: 3.9, attendance: 95, enrolledCourses: ["تشريح", "علم الأدوية"], absences: 5, attended: 25, credits: 72, projectsCompleted: 8 },
    { id: "SCU5003", firstName: "طارق", lastName: "سعيد", username: "tareq.saeed", email: "tareq.saeed@example.com", password: "tareq123", university: "Suez Canal University", faculty: "Faculty of Engineering", year: 1, gpa: 3.3, attendance: 88, enrolledCourses: ["هندسة البرمجيات", "الميكانيكا"], absences: 5, attended: 25, credits: 72, projectsCompleted: 8 },

    // Tanta University
    { id: "TU6001", firstName: "ليلى", lastName: "حسن", username: "layla.hassan", email: "layla.hassan@example.com", password: "layla123", university: "Tanta University", faculty: "Faculty of Commerce", year: 1, gpa: 3.2, attendance: 85, enrolledCourses: ["مبادئ المحاسبة", "التسويق"], absences: 5, attended: 25, credits: 72, projectsCompleted: 8 },
    { id: "TU6002", firstName: "عمر", lastName: "صالح", username: "omar.saleh", email: "omar.saleh@example.com", password: "omar2025", university: "Tanta University", faculty: "Faculty of Engineering", year: 1, gpa: 3.1, attendance: 88, enrolledCourses: ["هندسة البرمجيات", "الميكانيكا"], absences: 5, attended: 25, credits: 72, projectsCompleted: 8 },

    // Helwan University
    { id: "HU7001", firstName: "ندى", lastName: "ياسر", username: "nada.yasser", email: "nada.yasser@example.com", password: "nada2025", university: "Helwan University", faculty: "Faculty of Medicine", year: 1, gpa: 3.7, attendance: 92, enrolledCourses: ["تشريح", "فسيولوجيا"], absences: 5, attended: 25, credits: 72, projectsCompleted: 8 },
    { id: "HU7002", firstName: "سليم", lastName: "عاطف", username: "salim.atif", email: "salim.atif@example.com", password: "salim123", university: "Helwan University", faculty: "Faculty of Engineering", year: 1, gpa: 3.5, attendance: 90, enrolledCourses: ["هندسة البرمجيات", "الميكانيكا"], absences: 5, attended: 25, credits: 72, projectsCompleted: 8 },

    // Zagazig University
    { id: "ZU8001", firstName: "ريم", lastName: "أحمد", username: "reem.ahmed", email: "reem.ahmed@example.com", password: "reem2025", university: "Zagazig University", faculty: "Faculty of Medicine", year: 1, gpa: 3.9, attendance: 95, enrolledCourses: ["تشريح", "علم الأدوية"], absences: 5, attended: 25, credits: 72, projectsCompleted: 8 },
    { id: "ZU8002", firstName: "طارق", lastName: "سعيد", username: "tareq.saeed", email: "tareq.saeed@example.com", password: "tareq123", university: "Zagazig University", faculty: "Faculty of Engineering", year: 1, gpa: 3.3, attendance: 88, enrolledCourses: ["هندسة البرمجيات", "الميكانيكا"], absences: 5, attended: 25, credits: 72, projectsCompleted: 8 },

    // Minia University
    { id: "MU9001", firstName: "هشام", lastName: "عبدالله", username: "hesham.abdullah", email: "hesham.abdullah@example.com", password: "hesham2025", university: "Minia University", faculty: "Faculty of Commerce", year: 1, gpa: 3.4, attendance: 87, enrolledCourses: ["مبادئ المحاسبة", "التسويق"], absences: 5, attended: 25, credits: 72, projectsCompleted: 8 },

    // Beni Suef University
    { id: "BSU1001", firstName: "مريم", lastName: "علي", username: "mariam.ali", email: "mariam.ali@example.com", password: "mariam123", university: "Beni Suef University", faculty: "Faculty of Engineering", year: 1, gpa: 3.6, attendance: 91, enrolledCourses: ["هندسة البرمجيات", "الميكانيكا"], absences: 5, attended: 25, credits: 72, projectsCompleted: 8 },

    // Fayoum University
    { id: "FU1001", firstName: "آدم", lastName: "محمد", username: "adam.mohamed", email: "adam.mohamed@example.com", password: "adam2025", university: "Fayoum University", faculty: "Faculty of Medicine", year: 1, gpa: 3.7, attendance: 92, enrolledCourses: ["تشريح", "فسيولوجيا"], absences: 5, attended: 25, credits: 72, projectsCompleted: 8 },

    // South Valley University
    { id: "SVU1001", firstName: "ليان", lastName: "سليم", username: "lian.salim", email: "lian.salim@example.com", password: "lian2025", university: "South Valley University", faculty: "Faculty of Engineering", year: 1, gpa: 3.5, attendance: 90, enrolledCourses: ["هندسة البرمجيات", "الميكانيكا"], absences: 5, attended: 25, credits: 72, projectsCompleted: 8 },

    // Luxor University
    { id: "LU1001", firstName: "أماني", lastName: "حاتم", username: "amani.hatem", email: "amani.hatem@example.com", password: "amani2025", university: "Luxor University", faculty: "Faculty of Commerce", year: 1, gpa: 3.2, attendance: 85, enrolledCourses: ["مبادئ المحاسبة", "التسويق"], absences: 5, attended: 25, credits: 72, projectsCompleted: 8 },

    // Aswan University
    { id: "ASW1001", firstName: "حسن", lastName: "يوسف", username: "hasan.youssef", email: "hasan.youssef@example.com", password: "hasan2025", university: "Aswan University", faculty: "Faculty of Medicine", year: 1, gpa: 3.9, attendance: 95, enrolledCourses: ["تشريح", "علم الأدوية"], absences: 5, attended: 25, credits: 72, projectsCompleted: 8 }
].map(student => ({
    ...student,
    // Ensure consistent data structure
    displayName: student.displayName || `${student.firstName} ${student.lastName}`,
    year: student.year || 1,
    absences: student.absences || Math.floor(Math.random() * 10),
    attended: student.attended || Math.floor(Math.random() * 40) + 20,
    credits: student.credits || Math.floor(Math.random() * 40) + 60,
    projectsCompleted: student.projectsCompleted || Math.floor(Math.random() * 15) + 5
}));
