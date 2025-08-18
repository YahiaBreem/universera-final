export const courses = [
    {
        university: "Cairo University",
        faculties: [
            {
                name: "Faculty of Computer Science",
                courses: [
                    {
                        title: "محاضرة",
                        subtitle: "هياكل البيانات",
                        professor: "د. خالد حسني",
                        room: "قاعة 101",
                        files: [
                            {
                                name: "مقدمة عن هياكل البيانات",
                                type: "lecture",
                                file: "data_structures_intro.pdf"
                            },
                            {
                                name: "تمارين الفصل الأول",
                                type: "exercise",
                                file: "data_structures_ch1.pdf"
                            },
                            {
                                name: "مشروع تطبيقي",
                                type: "project",
                                file: "data_structures_project.pdf"
                            }
                        ]
                    },
                    {
                        title: "محاضرة",
                        subtitle: "الخوارزميات",
                        professor: "د. نادر فهمي",
                        room: "قاعة 102",
                        files: [
                            {
                                name: "أساسيات الخوارزميات",
                                type: "lecture",
                                file: "algorithms_basics.pdf"
                            },
                            {
                                name: "حل المسائل",
                                type: "exercise",
                                file: "algorithms_problems.pdf"
                            }
                        ]
                    }
                ],
                schedule: [
                    {
                        name: "هياكل البيانات",
                        place: "قاعة 101",
                        time: "9:00 AM",
                        type: "محاضرة",
                        instructor: "د. خالد حسني"
                    },
                    {
                        name: "الخوارزميات",
                        place: "معمل 205",
                        time: "11:00 AM",
                        type: "عملي",
                        instructor: "د. نادر فهمي"
                    }
                ],
                attendanceSummary: [
                    {
                        name: "هياكل البيانات",
                        pct: 80,
                        abs: 3,
                        pres: 12
                    },
                    {
                        name: "الخوارزميات",
                        pct: 83,
                        abs: 2,
                        pres: 10
                    }
                ]
            },
            {
                name: "Faculty of Artificial Intelligence",
                courses: [
                    {
                        title: "محاضرة",
                        subtitle: "مقدمة في الذكاء الاصطناعي",
                        professor: "د. منى عبد الله",
                        room: "قاعة 201",
                        file: "ai_intro.pdf"
                    },
                    {
                        title: "محاضرة",
                        subtitle: "تعلم الآلة",
                        professor: "د. سامي خالد",
                        room: "قاعة 202",
                        file: "machine_learning.pdf"
                    }
                ],
                schedule: [
                    {
                        name: "مقدمة في الذكاء الاصطناعي",
                        place: "قاعة 201",
                        time: "9:00 AM",
                        type: "محاضرة",
                        instructor: "د. منى عبد الله"
                    },
                    {
                        name: "تعلم الآلة",
                        place: "معمل 301",
                        time: "11:00 AM",
                        type: "عملي",
                        instructor: "د. سامي خالد"
                    }
                ],
                attendanceSummary: [
                    {
                        name: "مقدمة في الذكاء الاصطناعي",
                        pct: 85,
                        abs: 2,
                        pres: 13
                    },
                    {
                        name: "تعلم الآلة",
                        pct: 78,
                        abs: 4,
                        pres: 11
                    }
                ]
            },
            {
                name: "Faculty of Information Systems",
                courses: [
                    {
                        title: "محاضرة",
                        subtitle: "قواعد البيانات",
                        professor: "د. أحمد علي",
                        room: "قاعة 301",
                        file: "databases.pdf"
                    },
                    {
                        title: "محاضرة",
                        subtitle: "نظم المعلومات الإدارية",
                        professor: "د. سارة محمود",
                        room: "قاعة 302",
                        file: "mis.pdf"
                    }
                ],
                schedule: [
                    {
                        name: "قواعد البيانات",
                        place: "قاعة 301",
                        time: "9:00 AM",
                        type: "محاضرة",
                        instructor: "د. أحمد علي"
                    },
                    {
                        name: "نظم المعلومات الإدارية",
                        place: "معمل 401",
                        time: "11:00 AM",
                        type: "عملي",
                        instructor: "د. سارة محمود"
                    }
                ],
                attendanceSummary: [
                    {
                        name: "قواعد البيانات",
                        pct: 90,
                        abs: 1,
                        pres: 14
                    },
                    {
                        name: "نظم المعلومات الإدارية",
                        pct: 88,
                        abs: 2,
                        pres: 13
                    }
                ]
            }
        ]
    },
    {
        university: "Alexandria National University",
        faculties: [
            {
                name: "Faculty of Computer Science",
                courses: [
                    {
                        title: "محاضرة",
                        subtitle: "هياكل البيانات",
                        professor: "د. خالد حسني",
                        room: "قاعة 101",
                        files: [
                            {
                                name: "مقدمة عن هياكل البيانات",
                                type: "lecture",
                                file: "data_structures_intro.pdf"
                            },
                            {
                                name: "تمارين الفصل الأول",
                                type: "exercise",
                                file: "data_structures_ch1.pdf"
                            },
                            {
                                name: "مشروع تطبيقي",
                                type: "project",
                                file: "data_structures_project.pdf"
                            }
                        ]
                    },
                    {
                        title: "محاضرة",
                        subtitle: "الخوارزميات",
                        professor: "د. نادر فهمي",
                        room: "قاعة 102",
                        files: [
                            {
                                name: "أساسيات الخوارزميات",
                                type: "lecture",
                                file: "algorithms_basics.pdf"
                            },
                            {
                                name: "حل المسائل",
                                type: "exercise",
                                file: "algorithms_problems.pdf"
                            }
                        ]
                    }
                ],
                schedule: [
                    {
                        name: "هياكل البيانات",
                        place: "قاعة 101",
                        time: "9:00 AM",
                        type: "محاضرة",
                        instructor: "د. خالد حسني"
                    },
                    {
                        name: "الخوارزميات",
                        place: "معمل 205",
                        time: "11:00 AM",
                        type: "عملي",
                        instructor: "د. نادر فهمي"
                    }
                ],
                attendanceSummary: [
                    {
                        name: "هياكل البيانات",
                        pct: 80,
                        abs: 3,
                        pres: 12
                    },
                    {
                        name: "الخوارزميات",
                        pct: 83,
                        abs: 2,
                        pres: 10
                    }
                ]
            },
            {
                name: "Faculty of Artificial Intelligence",
                courses: [
                    {
                        title: "محاضرة",
                        subtitle: "مقدمة في الذكاء الاصطناعي",
                        professor: "د. هاني عبد العزيز",
                        room: "قاعة 401",
                        file: "ai_intro.pdf"
                    },
                    {
                        title: "محاضرة",
                        subtitle: "تعلم الآلة",
                        professor: "د. سارة مصطفى",
                        room: "قاعة 402",
                        file: "machine_learning.pdf"
                    }
                ],
                schedule: [
                    {
                        name: "مقدمة في الذكاء الاصطناعي",
                        place: "قاعة 401",
                        time: "9:00 AM",
                        type: "محاضرة",
                        instructor: "د. هاني عبد العزيز"
                    },
                    {
                        name: "تعلم الآلة",
                        place: "معمل 403",
                        time: "11:00 AM",
                        type: "عملي",
                        instructor: "د. سارة مصطفى"
                    }
                ],
                attendanceSummary: [
                    {
                        name: "مقدمة في الذكاء الاصطناعي",
                        pct: 88,
                        abs: 1,
                        pres: 14
                    },
                    {
                        name: "تعلم الآلة",
                        pct: 84,
                        abs: 2,
                        pres: 12
                    }
                ]
            },
            {
                name: "Faculty of Information Systems",
                courses: [
                    {
                        title: "محاضرة",
                        subtitle: "قواعد البيانات",
                        professor: "د. أحمد عبد الله",
                        room: "قاعة 501",
                        file: "databases.pdf"
                    },
                    {
                        title: "محاضرة",
                        subtitle: "نظم المعلومات الإدارية",
                        professor: "د. ليلى محمود",
                        room: "قاعة 502",
                        file: "mis.pdf"
                    }
                ],
                schedule: [
                    {
                        name: "قواعد البيانات",
                        place: "قاعة 501",
                        time: "9:00 AM",
                        type: "محاضرة",
                        instructor: "د. أحمد عبد الله"
                    },
                    {
                        name: "نظم المعلومات الإدارية",
                        place: "معمل 503",
                        time: "11:00 AM",
                        type: "عملي",
                        instructor: "د. ليلى محمود"
                    }
                ],
                attendanceSummary: [
                    {
                        name: "قواعد البيانات",
                        pct: 90,
                        abs: 1,
                        pres: 14
                    },
                    {
                        name: "نظم المعلومات الإدارية",
                        pct: 87,
                        abs: 2,
                        pres: 13
                    }
                ]
            },
            {
                name: "Faculty of Engineering",
                courses: [
                    {
                        title: "محاضرة",
                        subtitle: "هندسة البرمجيات",
                        professor: "د. أحمد سامي",
                        room: "قاعة 401",
                        file: "software_eng.pdf"
                    },
                    {
                        title: "محاضرة",
                        subtitle: "الدوائر الكهربائية",
                        professor: "د. فاطمة علي",
                        room: "قاعة 402",
                        file: "electrical_circuits.pdf"
                    }
                ],
                schedule: [
                    {
                        name: "هندسة البرمجيات",
                        place: "قاعة 401",
                        time: "9:00 AM",
                        type: "محاضرة",
                        instructor: "د. أحمد سامي"
                    },
                    {
                        name: "الدوائر الكهربائية",
                        place: "معمل 502",
                        time: "11:00 AM",
                        type: "عملي",
                        instructor: "د. فاطمة علي"
                    }
                ],
                attendanceSummary: [
                    {
                        name: "هندسة البرمجيات",
                        pct: 82,
                        abs: 3,
                        pres: 11
                    },
                    {
                        name: "الدوائر الكهربائية",
                        pct: 79,
                        abs: 4,
                        pres: 10
                    }
                ]
            },
            {
                name: "Faculty of Medicine",
                courses: [
                    {
                        title: "محاضرة",
                        subtitle: "تشريح",
                        professor: "د. يوسف مصطفى",
                        room: "قاعة 501",
                        file: "anatomy.pdf"
                    },
                    {
                        title: "محاضرة",
                        subtitle: "فسيولوجيا",
                        professor: "د. ليلى حسن",
                        room: "قاعة 502",
                        file: "physiology.pdf"
                    }
                ],
                schedule: [
                    {
                        name: "تشريح",
                        place: "قاعة 501",
                        time: "9:00 AM",
                        type: "محاضرة",
                        instructor: "د. يوسف مصطفى"
                    },
                    {
                        name: "فسيولوجيا",
                        place: "معمل 601",
                        time: "11:00 AM",
                        type: "عملي",
                        instructor: "د. ليلى حسن"
                    }
                ],
                attendanceSummary: [
                    {
                        name: "تشريح",
                        pct: 87,
                        abs: 2,
                        pres: 14
                    },
                    {
                        name: "فسيولوجيا",
                        pct: 80,
                        abs: 3,
                        pres: 12
                    }
                ]
            },
            {
                name: "Faculty of Commerce",
                courses: [
                    {
                        title: "محاضرة",
                        subtitle: "مبادئ المحاسبة",
                        professor: "د. مصطفى محمود",
                        room: "قاعة 601",
                        file: "accounting.pdf"
                    },
                    {
                        title: "محاضرة",
                        subtitle: "إدارة الموارد البشرية",
                        professor: "د. سعاد حسين",
                        room: "قاعة 602",
                        file: "hr.pdf"
                    }
                ],
                schedule: [
                    {
                        name: "مبادئ المحاسبة",
                        place: "قاعة 601",
                        time: "9:00 AM",
                        type: "محاضرة",
                        instructor: "د. مصطفى محمود"
                    },
                    {
                        name: "إدارة الموارد البشرية",
                        place: "معمل 701",
                        time: "11:00 AM",
                        type: "عملي",
                        instructor: "د. سعاد حسين"
                    }
                ],
                attendanceSummary: [
                    {
                        name: "مبادئ المحاسبة",
                        pct: 85,
                        abs: 2,
                        pres: 13
                    },
                    {
                        name: "إدارة الموارد البشرية",
                        pct: 82,
                        abs: 3,
                        pres: 11
                    }
                ]
            }
        ]
    },
    {
        university: "Alexandria University",
        faculties: [
            {
                name: "Faculty of Engineering",
                courses: [
                    {
                        title: "محاضرة",
                        subtitle: "هندسة البرمجيات",
                        professor: "د. محمد عبد الله",
                        room: "قاعة 701",
                        file: "software_eng.pdf"
                    },
                    {
                        title: "محاضرة",
                        subtitle: "الدوائر الكهربائية",
                        professor: "د. نجلاء سامي",
                        room: "قاعة 702",
                        file: "electrical_circuits.pdf"
                    }
                ],
                schedule: [
                    {
                        name: "هندسة البرمجيات",
                        place: "قاعة 701",
                        time: "9:00 AM",
                        type: "محاضرة",
                        instructor: "د. محمد عبد الله"
                    },
                    {
                        name: "الدوائر الكهربائية",
                        place: "معمل 802",
                        time: "11:00 AM",
                        type: "عملي",
                        instructor: "د. نجلاء سامي"
                    }
                ],
                attendanceSummary: [
                    {
                        name: "هندسة البرمجيات",
                        pct: 88,
                        abs: 2,
                        pres: 13
                    },
                    {
                        name: "الدوائر الكهربائية",
                        pct: 84,
                        abs: 3,
                        pres: 11
                    }
                ]
            },
            {
                name: "Faculty of Medicine",
                courses: [
                    {
                        title: "محاضرة",
                        subtitle: "تشريح",
                        professor: "د. أحمد سعيد",
                        room: "قاعة 801",
                        file: "anatomy.pdf"
                    },
                    {
                        title: "محاضرة",
                        subtitle: "فسيولوجيا",
                        professor: "د. فاطمة عبد العزيز",
                        room: "قاعة 802",
                        file: "physiology.pdf"
                    }
                ],
                schedule: [
                    {
                        name: "تشريح",
                        place: "قاعة 801",
                        time: "9:00 AM",
                        type: "محاضرة",
                        instructor: "د. أحمد سعيد"
                    },
                    {
                        name: "فسيولوجيا",
                        place: "معمل 901",
                        time: "11:00 AM",
                        type: "عملي",
                        instructor: "د. فاطمة عبد العزيز"
                    }
                ],
                attendanceSummary: [
                    {
                        name: "تشريح",
                        pct: 86,
                        abs: 2,
                        pres: 14
                    },
                    {
                        name: "فسيولوجيا",
                        pct: 81,
                        abs: 3,
                        pres: 12
                    }
                ]
            },
            {
                name: "Faculty of Business",
                courses: [
                    {
                        title: "محاضرة",
                        subtitle: "مبادئ المحاسبة",
                        professor: "د. إبراهيم علي",
                        room: "قاعة 901",
                        file: "accounting.pdf"
                    },
                    {
                        title: "محاضرة",
                        subtitle: "إدارة الموارد البشرية",
                        professor: "د. هالة محمود",
                        room: "قاعة 902",
                        file: "hr.pdf"
                    }
                ],
                schedule: [
                    {
                        name: "مبادئ المحاسبة",
                        place: "قاعة 901",
                        time: "9:00 AM",
                        type: "محاضرة",
                        instructor: "د. إبراهيم علي"
                    },
                    {
                        name: "إدارة الموارد البشرية",
                        place: "معمل 1001",
                        time: "11:00 AM",
                        type: "عملي",
                        instructor: "د. هالة محمود"
                    }
                ],
                attendanceSummary: [
                    {
                        name: "مبادئ المحاسبة",
                        pct: 89,
                        abs: 1,
                        pres: 14
                    },
                    {
                        name: "إدارة الموارد البشرية",
                        pct: 84,
                        abs: 3,
                        pres: 11
                    }
                ]
            }
        ]
    },
    {
        university: "Mansoura University",
        faculties: [
            {
                name: "Faculty of Engineering",
                courses: [
                    {
                        title: "محاضرة",
                        subtitle: "هندسة البرمجيات",
                        professor: "د. سامي حسن",
                        room: "قاعة 1001",
                        file: "software_eng.pdf"
                    },
                    {
                        title: "محاضرة",
                        subtitle: "الدوائر الكهربائية",
                        professor: "د. عادل فؤاد",
                        room: "قاعة 1002",
                        file: "electrical_circuits.pdf"
                    }
                ],
                schedule: [
                    {
                        name: "هندسة البرمجيات",
                        place: "قاعة 1001",
                        time: "9:00 AM",
                        type: "محاضرة",
                        instructor: "د. سامي حسن"
                    },
                    {
                        name: "الدوائر الكهربائية",
                        place: "معمل 1102",
                        time: "11:00 AM",
                        type: "عملي",
                        instructor: "د. عادل فؤاد"
                    }
                ],
                attendanceSummary: [
                    {
                        name: "هندسة البرمجيات",
                        pct: 81,
                        abs: 3,
                        pres: 12
                    },
                    {
                        name: "الدوائر الكهربائية",
                        pct: 85,
                        abs: 2,
                        pres: 10
                    }
                ]
            },
            {
                name: "Faculty of Medicine",
                courses: [
                    {
                        title: "محاضرة",
                        subtitle: "تشريح",
                        professor: "د. نادر مصطفى",
                        room: "قاعة 1101",
                        file: "anatomy.pdf"
                    },
                    {
                        title: "محاضرة",
                        subtitle: "فسيولوجيا",
                        professor: "د. سلوى عبد الله",
                        room: "قاعة 1102",
                        file: "physiology.pdf"
                    }
                ],
                schedule: [
                    {
                        name: "تشريح",
                        place: "قاعة 1101",
                        time: "9:00 AM",
                        type: "محاضرة",
                        instructor: "د. نادر مصطفى"
                    },
                    {
                        name: "فسيولوجيا",
                        place: "معمل 1201",
                        time: "11:00 AM",
                        type: "عملي",
                        instructor: "د. سلوى عبد الله"
                    }
                ],
                attendanceSummary: [
                    {
                        name: "تشريح",
                        pct: 84,
                        abs: 3,
                        pres: 11
                    },
                    {
                        name: "فسيولوجيا",
                        pct: 79,
                        abs: 4,
                        pres: 10
                    }
                ]
            },
            {
                name: "Faculty of Commerce",
                courses: [
                    {
                        title: "محاضرة",
                        subtitle: "مبادئ المحاسبة",
                        professor: "د. عادل محمود",
                        room: "قاعة 1201",
                        file: "accounting.pdf"
                    },
                    {
                        title: "محاضرة",
                        subtitle: "إدارة الموارد البشرية",
                        professor: "د. سعاد علي",
                        room: "قاعة 1202",
                        file: "hr.pdf"
                    }
                ],
                schedule: [
                    {
                        name: "مبادئ المحاسبة",
                        place: "قاعة 1201",
                        time: "9:00 AM",
                        type: "محاضرة",
                        instructor: "د. عادل محمود"
                    },
                    {
                        name: "إدارة الموارد البشرية",
                        place: "معمل 1301",
                        time: "11:00 AM",
                        type: "عملي",
                        instructor: "د. سعاد علي"
                    }
                ],
                attendanceSummary: [
                    {
                        name: "مبادئ المحاسبة",
                        pct: 90,
                        abs: 1,
                        pres: 14
                    },
                    {
                        name: "إدارة الموارد البشرية",
                        pct: 87,
                        abs: 2,
                        pres: 13
                    }
                ]
            }
        ]
    },
    {
        university: "Assiut University",
        faculties: [
            {
                name: "Faculty of Engineering",
                courses: [
                    {
                        title: "محاضرة",
                        subtitle: "هندسة البرمجيات",
                        professor: "د. فاطمة علي",
                        room: "قاعة 1301",
                        file: "software_eng.pdf"
                    },
                    {
                        title: "محاضرة",
                        subtitle: "الدوائر الكهربائية",
                        professor: "د. مصطفى حسن",
                        room: "قاعة 1302",
                        file: "electrical_circuits.pdf"
                    }
                ],
                schedule: [
                    {
                        name: "هندسة البرمجيات",
                        place: "قاعة 1301",
                        time: "9:00 AM",
                        type: "محاضرة",
                        instructor: "د. فاطمة علي"
                    },
                    {
                        name: "الدوائر الكهربائية",
                        place: "معمل 1402",
                        time: "11:00 AM",
                        type: "عملي",
                        instructor: "د. مصطفى حسن"
                    }
                ],
                attendanceSummary: [
                    {
                        name: "هندسة البرمجيات",
                        pct: 83,
                        abs: 2,
                        pres: 13
                    },
                    {
                        name: "الدوائر الكهربائية",
                        pct: 81,
                        abs: 3,
                        pres: 12
                    }
                ]
            },
            {
                name: "Faculty of Medicine",
                courses: [
                    {
                        title: "محاضرة",
                        subtitle: "تشريح",
                        professor: "د. يوسف عبد الله",
                        room: "قاعة 1401",
                        file: "anatomy.pdf"
                    },
                    {
                        title: "محاضرة",
                        subtitle: "فسيولوجيا",
                        professor: "د. هالة مصطفى",
                        room: "قاعة 1402",
                        file: "physiology.pdf"
                    }
                ],
                schedule: [
                    {
                        name: "تشريح",
                        place: "قاعة 1401",
                        time: "9:00 AM",
                        type: "محاضرة",
                        instructor: "د. يوسف عبد الله"
                    },
                    {
                        name: "فسيولوجيا",
                        place: "معمل 1501",
                        time: "11:00 AM",
                        type: "عملي",
                        instructor: "د. هالة مصطفى"
                    }
                ],
                attendanceSummary: [
                    {
                        name: "تشريح",
                        pct: 85,
                        abs: 2,
                        pres: 13
                    },
                    {
                        name: "فسيولوجيا",
                        pct: 82,
                        abs: 3,
                        pres: 11
                    }
                ]
            },
            {
                name: "Faculty of Commerce",
                courses: [
                    {
                        title: "محاضرة",
                        subtitle: "مبادئ المحاسبة",
                        professor: "د. أحمد علي",
                        room: "قاعة 1501",
                        file: "accounting.pdf"
                    },
                    {
                        title: "محاضرة",
                        subtitle: "إدارة الموارد البشرية",
                        professor: "د. سعاد محمود",
                        room: "قاعة 1502",
                        file: "hr.pdf"
                    }
                ],
                schedule: [
                    {
                        name: "مبادئ المحاسبة",
                        place: "قاعة 1501",
                        time: "9:00 AM",
                        type: "محاضرة",
                        instructor: "د. أحمد علي"
                    },
                    {
                        name: "إدارة الموارد البشرية",
                        place: "معمل 1601",
                        time: "11:00 AM",
                        type: "عملي",
                        instructor: "د. سعاد محمود"
                    }
                ],
                attendanceSummary: [
                    {
                        name: "مبادئ المحاسبة",
                        pct: 88,
                        abs: 2,
                        pres: 13
                    },
                    {
                        name: "إدارة الموارد البشرية",
                        pct: 85,
                        abs: 3,
                        pres: 12
                    }
                ]
            }
        ]
    }
];
