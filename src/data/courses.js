export const courses = (t) => [
    {
        university: "asu",
        displayname: t("asu"),
        faculties: [
            {
                name: "facultyofcomputerai",
                displayname: t("facocomputerai"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "هياكل البيانات",
                        professor: "د. خالد حسني",
                        room: "قاعة 101",
                        files: [
                            { name: "مقدمة عن هياكل البيانات", type: "lecture", file: "data_structures_intro.pdf" },
                            { name: "تمارين الفصل الأول", type: "exercise", file: "data_structures_ch1.pdf" },
                            { name: "مشروع تطبيقي", type: "project", file: "data_structures_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "الخوارزميات",
                        professor: "د. نادر فهمي",
                        room: "قاعة 102",
                        files: [
                            { name: "أساسيات الخوارزميات", type: "lecture", file: "algorithms_basics.pdf" },
                            { name: "حل المسائل", type: "exercise", file: "algorithms_problems.pdf" },
                            { name: "مشروع برمجي", type: "project", file: "algorithms_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "شبكات الحاسب",
                        professor: "د. أحمد مراد",
                        room: "قاعة 201",
                        files: [
                            { name: "مقدمة في الشبكات", type: "lecture", file: "networks_intro.pdf" },
                            { name: "تمارين على IP", type: "exercise", file: "networks_ip_exercises.pdf" },
                            { name: "مشروع مصغر", type: "project", file: "networks_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "هياكل البيانات", place: "قاعة 101", time: "9:00 AM", type: "lecture", instructor: "د. خالد حسني" },
                    { name: "الخوارزميات", place: "قاعة 102", time: "11:00 AM", type: "lecture", instructor: "د. نادر فهمي" },
                    { name: "شبكات الحاسب", place: "معمل 205", time: "1:00 PM", type: "عملي", instructor: "د. أحمد مراد" }
                ],
                attendanceSummary: [
                    { name: "هياكل البيانات", pct: 80, abs: 3, pres: 12 },
                    { name: "الخوارزميات", pct: 83, abs: 2, pres: 10 },
                    { name: "شبكات الحاسب", pct: 75, abs: 4, pres: 9 }
                ]
            },
            {
                name: "facoeng",
                displayname: t("facoeng"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "هندسة الإلكترونيات",
                        professor: "د. منى عبد العزيز",
                        room: "قاعة A12",
                        files: [
                            { name: "أساسيات الدوائر الإلكترونية", type: "lecture", file: "electronics_basics.pdf" },
                            { name: "تجارب عملية", type: "exercise", file: "electronics_experiments.pdf" },
                            { name: "مشروع تصميم دائرة", type: "project", file: "electronics_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "الهندسة المدنية - ميكانيكا التربة",
                        professor: "د. محمد الطيب",
                        room: "قاعة B07",
                        files: [
                            { name: "خواص التربة", type: "lecture", file: "soil_properties.pdf" },
                            { name: "تمارين تحليل تربة", type: "exercise", file: "soil_exercises.pdf" },
                            { name: "مشروع أساسات", type: "project", file: "soil_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "هندسة الإلكترونيات", place: "قاعة A12", time: "10:00 AM", type: "lecture", instructor: "د. منى عبد العزيز" },
                    { name: "ميكانيكا التربة", place: "قاعة B07", time: "12:00 PM", type: "lecture", instructor: "د. محمد الطيب" }
                ],
                attendanceSummary: [
                    { name: "هندسة الإلكترونيات", pct: 90, abs: 1, pres: 15 },
                    { name: "ميكانيكا التربة", pct: 78, abs: 3, pres: 11 }
                ]
            },
            {
                name: "facocommerce",
                displayname: t("facocommerce"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "المحاسبة المالية",
                        professor: "د. سعاد مصطفى",
                        room: "قاعة 301",
                        files: [
                            { name: "مقدمة في المحاسبة", type: "lecture", file: "accounting_intro.pdf" },
                            { name: "تمارين دفتر الأستاذ", type: "exercise", file: "accounting_exercises.pdf" },
                            { name: "مشروع ميزانية", type: "project", file: "accounting_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "إدارة الأعمال",
                        professor: "د. ياسر حسن",
                        room: "قاعة 305",
                        files: [
                            { name: "مبادئ الإدارة", type: "lecture", file: "management_basics.pdf" },
                            { name: "دراسات حالة", type: "exercise", file: "management_cases.pdf" },
                            { name: "مشروع خطة عمل", type: "project", file: "management_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "المحاسبة المالية", place: "قاعة 301", time: "9:00 AM", type: "lecture", instructor: "د. سعاد مصطفى" },
                    { name: "إدارة الأعمال", place: "قاعة 305", time: "11:00 AM", type: "lecture", instructor: "د. ياسر حسن" }
                ],
                attendanceSummary: [
                    { name: "المحاسبة المالية", pct: 85, abs: 2, pres: 13 },
                    { name: "إدارة الأعمال", pct: 88, abs: 1, pres: 14 }
                ]
            },
            {
                name: "facomedicine",
                displayname: t("facomedicine"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "علم التشريح",
                        professor: "د. محمود عادل",
                        room: "قاعة M01",
                        files: [
                            { name: "مقدمة في التشريح", type: "lecture", file: "anatomy_intro.pdf" },
                            { name: "تمارين تشريح عملي", type: "exercise", file: "anatomy_exercises.pdf" },
                            { name: "مشروع حالة سريرية", type: "project", file: "anatomy_case_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "علم الأدوية",
                        professor: "د. منى حسين",
                        room: "قاعة M05",
                        files: [
                            { name: "أساسيات علم الأدوية", type: "lecture", file: "pharmacology_basics.pdf" },
                            { name: "جداول أدوية", type: "exercise", file: "pharmacology_tables.pdf" },
                            { name: "مشروع دوائي", type: "project", file: "pharmacology_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "علم التشريح", place: "قاعة M01", time: "8:00 AM", type: "lecture", instructor: "د. محمود عادل" },
                    { name: "علم الأدوية", place: "قاعة M05", time: "10:00 AM", type: "lecture", instructor: "د. منى حسين" }
                ],
                attendanceSummary: [
                    { name: "علم التشريح", pct: 82, abs: 3, pres: 14 },
                    { name: "علم الأدوية", pct: 76, abs: 4, pres: 12 }
                ]
            },
            {
                name: "facoscience",
                displayname: t("facoscience"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "الكيمياء العضوية",
                        professor: "د. حسن إبراهيم",
                        room: "قاعة S10",
                        files: [
                            { name: "مقدمة في الكيمياء العضوية", type: "lecture", file: "organic_intro.pdf" },
                            { name: "تمارين تفاعلات", type: "exercise", file: "organic_exercises.pdf" },
                            { name: "مشروع بحث كيميائي", type: "project", file: "organic_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "الفيزياء النووية",
                        professor: "د. صفاء نجيب",
                        room: "قاعة S15",
                        files: [
                            { name: "مقدمة في الفيزياء النووية", type: "lecture", file: "nuclear_intro.pdf" },
                            { name: "تمارين حسابية", type: "exercise", file: "nuclear_exercises.pdf" },
                            { name: "مشروع طاقة نووية", type: "project", file: "nuclear_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "الكيمياء العضوية", place: "قاعة S10", time: "9:00 AM", type: "lecture", instructor: "د. حسن إبراهيم" },
                    { name: "الفيزياء النووية", place: "قاعة S15", time: "11:00 AM", type: "lecture", instructor: "د. صفاء نجيب" }
                ],
                attendanceSummary: [
                    { name: "الكيمياء العضوية", pct: 88, abs: 2, pres: 15 },
                    { name: "الفيزياء النووية", pct: 79, abs: 3, pres: 11 }
                ]
            },
            {
                name: "facoarts",
                displayname: t("facoarts"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "الأدب العربي",
                        professor: "د. عادل مصطفى",
                        room: "قاعة L20",
                        files: [
                            { name: "مقدمة في الأدب العربي", type: "lecture", file: "arabic_lit_intro.pdf" },
                            { name: "نصوص تحليلية", type: "exercise", file: "arabic_lit_exercises.pdf" },
                            { name: "مشروع بحث أدبي", type: "project", file: "arabic_lit_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "علم النفس",
                        professor: "د. هالة فكري",
                        room: "قاعة L25",
                        files: [
                            { name: "مدخل إلى علم النفس", type: "lecture", file: "psychology_intro.pdf" },
                            { name: "اختبارات سيكولوجية", type: "exercise", file: "psychology_tests.pdf" },
                            { name: "مشروع حالة", type: "project", file: "psychology_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "الأدب العربي", place: "قاعة L20", time: "10:00 AM", type: "lecture", instructor: "د. عادل مصطفى" },
                    { name: "علم النفس", place: "قاعة L25", time: "12:00 PM", type: "lecture", instructor: "د. هالة فكري" }
                ],
                attendanceSummary: [
                    { name: "الأدب العربي", pct: 92, abs: 1, pres: 16 },
                    { name: "علم النفس", pct: 85, abs: 2, pres: 14 }
                ]
            },
            {
                name: "facolaw",
                displayname: t("facolaw"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "القانون الدستوري",
                        professor: "د. عمرو سالم",
                        room: "قاعة H01",
                        files: [
                            { name: "مبادئ القانون الدستوري", type: "lecture", file: "constitutional_intro.pdf" },
                            { name: "تمارين قوانين", type: "exercise", file: "constitutional_exercises.pdf" },
                            { name: "مشروع بحث قانوني", type: "project", file: "constitutional_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "القانون الجنائي",
                        professor: "د. أحمد عبد الله",
                        room: "قاعة H05",
                        files: [
                            { name: "مدخل القانون الجنائي", type: "lecture", file: "criminal_intro.pdf" },
                            { name: "قضايا تطبيقية", type: "exercise", file: "criminal_cases.pdf" },
                            { name: "مشروع قانوني", type: "project", file: "criminal_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "القانون الدستوري", place: "قاعة H01", time: "9:00 AM", type: "lecture", instructor: "د. عمرو سالم" },
                    { name: "القانون الجنائي", place: "قاعة H05", time: "11:00 AM", type: "lecture", instructor: "د. أحمد عبد الله" }
                ],
                attendanceSummary: [
                    { name: "القانون الدستوري", pct: 87, abs: 2, pres: 13 },
                    { name: "القانون الجنائي", pct: 81, abs: 3, pres: 12 }
                ]
            },
            {
                name: "facomasscomms",
                displayname: t("facomasscomms"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "الإعلام الرقمي",
                        professor: "د. ليلى فوزي",
                        room: "قاعة J12",
                        files: [
                            { name: "مقدمة في الإعلام الرقمي", type: "lecture", file: "digital_media_intro.pdf" },
                            { name: "دراسات حالة", type: "exercise", file: "digital_media_cases.pdf" },
                            { name: "مشروع حملة إعلامية", type: "project", file: "digital_media_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "العلاقات العامة",
                        professor: "د. حسين كامل",
                        room: "قاعة J18",
                        files: [
                            { name: "مقدمة العلاقات العامة", type: "lecture", file: "pr_intro.pdf" },
                            { name: "خطط حملات", type: "exercise", file: "pr_exercises.pdf" },
                            { name: "مشروع خطة علاقات", type: "project", file: "pr_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "الإعلام الرقمي", place: "قاعة J12", time: "10:00 AM", type: "lecture", instructor: "د. ليلى فوزي" },
                    { name: "العلاقات العامة", place: "قاعة J18", time: "12:00 PM", type: "lecture", instructor: "د. حسين كامل" }
                ],
                attendanceSummary: [
                    { name: "الإعلام الرقمي", pct: 90, abs: 1, pres: 15 },
                    { name: "العلاقات العامة", pct: 86, abs: 2, pres: 13 }
                ]
            },
            {
                name: "facoagri",
                displayname: t("facoagri"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "علوم النبات",
                        professor: "د. سامي حسن",
                        room: "قاعة Z01",
                        files: [
                            { name: "مقدمة علوم النبات", type: "lecture", file: "plant_intro.pdf" },
                            { name: "تجارب زراعية", type: "exercise", file: "plant_exercises.pdf" },
                            { name: "مشروع زراعي", type: "project", file: "plant_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "علوم التربة",
                        professor: "د. أحمد عوض",
                        room: "قاعة Z05",
                        files: [
                            { name: "مقدمة علوم التربة", type: "lecture", file: "soil_intro.pdf" },
                            { name: "تجارب تحليل تربة", type: "exercise", file: "soil_experiments.pdf" },
                            { name: "مشروع زراعي", type: "project", file: "soil_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "علوم النبات", place: "قاعة Z01", time: "8:30 AM", type: "lecture", instructor: "د. سامي حسن" },
                    { name: "علوم التربة", place: "قاعة Z05", time: "11:00 AM", type: "lecture", instructor: "د. أحمد عوض" }
                ],
                attendanceSummary: [
                    { name: "علوم النبات", pct: 84, abs: 2, pres: 12 },
                    { name: "علوم التربة", pct: 80, abs: 3, pres: 11 }
                ]
            }
        ]
    },
    {
        university: "au",
        displayname: t("au"),
        faculties: [
            {
                name: "facultyofcomputerai",
                displayname: t("facocomputerai"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "هياكل البيانات",
                        professor: "د. خالد حسني",
                        room: "قاعة 101",
                        files: [
                            { name: "مقدمة عن هياكل البيانات", type: "lecture", file: "data_structures_intro.pdf" },
                            { name: "تمارين الفصل الأول", type: "exercise", file: "data_structures_ch1.pdf" },
                            { name: "مشروع تطبيقي", type: "project", file: "data_structures_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "الخوارزميات",
                        professor: "د. نادر فهمي",
                        room: "قاعة 102",
                        files: [
                            { name: "أساسيات الخوارزميات", type: "lecture", file: "algorithms_basics.pdf" },
                            { name: "حل المسائل", type: "exercise", file: "algorithms_problems.pdf" },
                            { name: "مشروع برمجي", type: "project", file: "algorithms_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "شبكات الحاسب",
                        professor: "د. أحمد مراد",
                        room: "قاعة 201",
                        files: [
                            { name: "مقدمة في الشبكات", type: "lecture", file: "networks_intro.pdf" },
                            { name: "تمارين على IP", type: "exercise", file: "networks_ip_exercises.pdf" },
                            { name: "مشروع مصغر", type: "project", file: "networks_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "هياكل البيانات", place: "قاعة 101", time: "9:00 AM", type: "lecture", instructor: "د. خالد حسني" },
                    { name: "الخوارزميات", place: "قاعة 102", time: "11:00 AM", type: "lecture", instructor: "د. نادر فهمي" },
                    { name: "شبكات الحاسب", place: "معمل 205", time: "1:00 PM", type: "عملي", instructor: "د. أحمد مراد" }
                ],
                attendanceSummary: [
                    { name: "هياكل البيانات", pct: 80, abs: 3, pres: 12 },
                    { name: "الخوارزميات", pct: 83, abs: 2, pres: 10 },
                    { name: "شبكات الحاسب", pct: 75, abs: 4, pres: 9 }
                ]
            },
            {
                name: "facoeng",
                displayname: t("facoeng"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "هندسة الإلكترونيات",
                        professor: "د. منى عبد العزيز",
                        room: "قاعة A12",
                        files: [
                            { name: "أساسيات الدوائر الإلكترونية", type: "lecture", file: "electronics_basics.pdf" },
                            { name: "تجارب عملية", type: "exercise", file: "electronics_experiments.pdf" },
                            { name: "مشروع تصميم دائرة", type: "project", file: "electronics_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "الهندسة المدنية - ميكانيكا التربة",
                        professor: "د. محمد الطيب",
                        room: "قاعة B07",
                        files: [
                            { name: "خواص التربة", type: "lecture", file: "soil_properties.pdf" },
                            { name: "تمارين تحليل تربة", type: "exercise", file: "soil_exercises.pdf" },
                            { name: "مشروع أساسات", type: "project", file: "soil_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "هندسة الإلكترونيات", place: "قاعة A12", time: "10:00 AM", type: "lecture", instructor: "د. منى عبد العزيز" },
                    { name: "ميكانيكا التربة", place: "قاعة B07", time: "12:00 PM", type: "lecture", instructor: "د. محمد الطيب" }
                ],
                attendanceSummary: [
                    { name: "هندسة الإلكترونيات", pct: 90, abs: 1, pres: 15 },
                    { name: "ميكانيكا التربة", pct: 78, abs: 3, pres: 11 }
                ]
            },
            {
                name: "facobusiness",
                displayname: t("facobusiness"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "المحاسبة المالية",
                        professor: "د. سعاد مصطفى",
                        room: "قاعة 301",
                        files: [
                            { name: "مقدمة في المحاسبة", type: "lecture", file: "accounting_intro.pdf" },
                            { name: "تمارين دفتر الأستاذ", type: "exercise", file: "accounting_exercises.pdf" },
                            { name: "مشروع ميزانية", type: "project", file: "accounting_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "إدارة الأعمال",
                        professor: "د. ياسر حسن",
                        room: "قاعة 305",
                        files: [
                            { name: "مبادئ الإدارة", type: "lecture", file: "management_basics.pdf" },
                            { name: "دراسات حالة", type: "exercise", file: "management_cases.pdf" },
                            { name: "مشروع خطة عمل", type: "project", file: "management_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "المحاسبة المالية", place: "قاعة 301", time: "9:00 AM", type: "lecture", instructor: "د. سعاد مصطفى" },
                    { name: "إدارة الأعمال", place: "قاعة 305", time: "11:00 AM", type: "lecture", instructor: "د. ياسر حسن" }
                ],
                attendanceSummary: [
                    { name: "المحاسبة المالية", pct: 85, abs: 2, pres: 13 },
                    { name: "إدارة الأعمال", pct: 88, abs: 1, pres: 14 }
                ]
            },
            {
                name: "facomedicine",
                displayname: t("facomedicine"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "علم التشريح",
                        professor: "د. محمود عادل",
                        room: "قاعة M01",
                        files: [
                            { name: "مقدمة في التشريح", type: "lecture", file: "anatomy_intro.pdf" },
                            { name: "تمارين تشريح عملي", type: "exercise", file: "anatomy_exercises.pdf" },
                            { name: "مشروع حالة سريرية", type: "project", file: "anatomy_case_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "علم الأدوية",
                        professor: "د. منى حسين",
                        room: "قاعة M05",
                        files: [
                            { name: "أساسيات علم الأدوية", type: "lecture", file: "pharmacology_basics.pdf" },
                            { name: "جداول أدوية", type: "exercise", file: "pharmacology_tables.pdf" },
                            { name: "مشروع دوائي", type: "project", file: "pharmacology_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "علم التشريح", place: "قاعة M01", time: "8:00 AM", type: "lecture", instructor: "د. محمود عادل" },
                    { name: "علم الأدوية", place: "قاعة M05", time: "10:00 AM", type: "lecture", instructor: "د. منى حسين" }
                ],
                attendanceSummary: [
                    { name: "علم التشريح", pct: 82, abs: 3, pres: 14 },
                    { name: "علم الأدوية", pct: 76, abs: 4, pres: 12 }
                ]
            },
            {
                name: "facoscience",
                displayname: t("facoscience"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "الكيمياء العضوية",
                        professor: "د. حسن إبراهيم",
                        room: "قاعة S10",
                        files: [
                            { name: "مقدمة في الكيمياء العضوية", type: "lecture", file: "organic_intro.pdf" },
                            { name: "تمارين تفاعلات", type: "exercise", file: "organic_exercises.pdf" },
                            { name: "مشروع بحث كيميائي", type: "project", file: "organic_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "الفيزياء النووية",
                        professor: "د. صفاء نجيب",
                        room: "قاعة S15",
                        files: [
                            { name: "مقدمة في الفيزياء النووية", type: "lecture", file: "nuclear_intro.pdf" },
                            { name: "تمارين حسابية", type: "exercise", file: "nuclear_exercises.pdf" },
                            { name: "مشروع طاقة نووية", type: "project", file: "nuclear_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "الكيمياء العضوية", place: "قاعة S10", time: "9:00 AM", type: "lecture", instructor: "د. حسن إبراهيم" },
                    { name: "الفيزياء النووية", place: "قاعة S15", time: "11:00 AM", type: "lecture", instructor: "د. صفاء نجيب" }
                ],
                attendanceSummary: [
                    { name: "الكيمياء العضوية", pct: 88, abs: 2, pres: 15 },
                    { name: "الفيزياء النووية", pct: 79, abs: 3, pres: 11 }
                ]
            },
            {
                name: "facoarts",
                displayname: t("facoarts"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "الأدب العربي",
                        professor: "د. عادل مصطفى",
                        room: "قاعة L20",
                        files: [
                            { name: "مقدمة في الأدب العربي", type: "lecture", file: "arabic_lit_intro.pdf" },
                            { name: "نصوص تحليلية", type: "exercise", file: "arabic_lit_exercises.pdf" },
                            { name: "مشروع بحث أدبي", type: "project", file: "arabic_lit_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "علم النفس",
                        professor: "د. هالة فكري",
                        room: "قاعة L25",
                        files: [
                            { name: "مدخل إلى علم النفس", type: "lecture", file: "psychology_intro.pdf" },
                            { name: "اختبارات سيكولوجية", type: "exercise", file: "psychology_tests.pdf" },
                            { name: "مشروع حالة", type: "project", file: "psychology_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "الأدب العربي", place: "قاعة L20", time: "10:00 AM", type: "lecture", instructor: "د. عادل مصطفى" },
                    { name: "علم النفس", place: "قاعة L25", time: "12:00 PM", type: "lecture", instructor: "د. هالة فكري" }
                ],
                attendanceSummary: [
                    { name: "الأدب العربي", pct: 92, abs: 1, pres: 16 },
                    { name: "علم النفس", pct: 85, abs: 2, pres: 14 }
                ]
            },
            {
                name: "facolaw",
                displayname: t("facolaw"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "القانون الدستوري",
                        professor: "د. عمرو سالم",
                        room: "قاعة H01",
                        files: [
                            { name: "مبادئ القانون الدستوري", type: "lecture", file: "constitutional_intro.pdf" },
                            { name: "تمارين قوانين", type: "exercise", file: "constitutional_exercises.pdf" },
                            { name: "مشروع بحث قانوني", type: "project", file: "constitutional_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "القانون الجنائي",
                        professor: "د. أحمد عبد الله",
                        room: "قاعة H05",
                        files: [
                            { name: "مدخل القانون الجنائي", type: "lecture", file: "criminal_intro.pdf" },
                            { name: "قضايا تطبيقية", type: "exercise", file: "criminal_cases.pdf" },
                            { name: "مشروع قانوني", type: "project", file: "criminal_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "القانون الدستوري", place: "قاعة H01", time: "9:00 AM", type: "lecture", instructor: "د. عمرو سالم" },
                    { name: "القانون الجنائي", place: "قاعة H05", time: "11:00 AM", type: "lecture", instructor: "د. أحمد عبد الله" }
                ],
                attendanceSummary: [
                    { name: "القانون الدستوري", pct: 87, abs: 2, pres: 13 },
                    { name: "القانون الجنائي", pct: 81, abs: 3, pres: 12 }
                ]
            },
            {
                name: "facomasscomms",
                displayname: t("facomasscomms"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "الإعلام الرقمي",
                        professor: "د. ليلى فوزي",
                        room: "قاعة J12",
                        files: [
                            { name: "مقدمة في الإعلام الرقمي", type: "lecture", file: "digital_media_intro.pdf" },
                            { name: "دراسات حالة", type: "exercise", file: "digital_media_cases.pdf" },
                            { name: "مشروع حملة إعلامية", type: "project", file: "digital_media_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "العلاقات العامة",
                        professor: "د. حسين كامل",
                        room: "قاعة J18",
                        files: [
                            { name: "مقدمة العلاقات العامة", type: "lecture", file: "pr_intro.pdf" },
                            { name: "خطط حملات", type: "exercise", file: "pr_exercises.pdf" },
                            { name: "مشروع خطة علاقات", type: "project", file: "pr_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "الإعلام الرقمي", place: "قاعة J12", time: "10:00 AM", type: "lecture", instructor: "د. ليلى فوزي" },
                    { name: "العلاقات العامة", place: "قاعة J18", time: "12:00 PM", type: "lecture", instructor: "د. حسين كامل" }
                ],
                attendanceSummary: [
                    { name: "الإعلام الرقمي", pct: 90, abs: 1, pres: 15 },
                    { name: "العلاقات العامة", pct: 86, abs: 2, pres: 13 }
                ]
            },
            {
                name: "facoagri",
                displayname: t("facoagri"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "علوم النبات",
                        professor: "د. سامي حسن",
                        room: "قاعة Z01",
                        files: [
                            { name: "مقدمة علوم النبات", type: "lecture", file: "plant_intro.pdf" },
                            { name: "تجارب زراعية", type: "exercise", file: "plant_exercises.pdf" },
                            { name: "مشروع زراعي", type: "project", file: "plant_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "علوم التربة",
                        professor: "د. أحمد عوض",
                        room: "قاعة Z05",
                        files: [
                            { name: "مقدمة علوم التربة", type: "lecture", file: "soil_intro.pdf" },
                            { name: "تجارب تحليل تربة", type: "exercise", file: "soil_experiments.pdf" },
                            { name: "مشروع زراعي", type: "project", file: "soil_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "علوم النبات", place: "قاعة Z01", time: "8:30 AM", type: "lecture", instructor: "د. سامي حسن" },
                    { name: "علوم التربة", place: "قاعة Z05", time: "11:00 AM", type: "lecture", instructor: "د. أحمد عوض" }
                ],
                attendanceSummary: [
                    { name: "علوم النبات", pct: 84, abs: 2, pres: 12 },
                    { name: "علوم التربة", pct: 80, abs: 3, pres: 11 }
                ]
            }
        ]
    },
    {
        university: "cu",
        displayname: t("cu"),
        faculties: [
            {
                name: "facultyofcomputerai",
                displayname: t("facocomputerai"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "هياكل البيانات",
                        professor: "د. خالد حسني",
                        room: "قاعة 101",
                        files: [
                            { name: "مقدمة عن هياكل البيانات", type: "lecture", file: "data_structures_intro.pdf" },
                            { name: "تمارين الفصل الأول", type: "exercise", file: "data_structures_ch1.pdf" },
                            { name: "مشروع تطبيقي", type: "project", file: "data_structures_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "الخوارزميات",
                        professor: "د. نادر فهمي",
                        room: "قاعة 102",
                        files: [
                            { name: "أساسيات الخوارزميات", type: "lecture", file: "algorithms_basics.pdf" },
                            { name: "حل المسائل", type: "exercise", file: "algorithms_problems.pdf" },
                            { name: "مشروع برمجي", type: "project", file: "algorithms_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "شبكات الحاسب",
                        professor: "د. أحمد مراد",
                        room: "قاعة 201",
                        files: [
                            { name: "مقدمة في الشبكات", type: "lecture", file: "networks_intro.pdf" },
                            { name: "تمارين على IP", type: "exercise", file: "networks_ip_exercises.pdf" },
                            { name: "مشروع مصغر", type: "project", file: "networks_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "هياكل البيانات", place: "قاعة 101", time: "9:00 AM", type: "lecture", instructor: "د. خالد حسني" },
                    { name: "الخوارزميات", place: "قاعة 102", time: "11:00 AM", type: "lecture", instructor: "د. نادر فهمي" },
                    { name: "شبكات الحاسب", place: "معمل 205", time: "1:00 PM", type: "عملي", instructor: "د. أحمد مراد" }
                ],
                attendanceSummary: [
                    { name: "هياكل البيانات", pct: 80, abs: 3, pres: 12 },
                    { name: "الخوارزميات", pct: 83, abs: 2, pres: 10 },
                    { name: "شبكات الحاسب", pct: 75, abs: 4, pres: 9 }
                ]
            },
            {
                name: "facoeng",
                displayname: t("facoeng"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "هندسة الإلكترونيات",
                        professor: "د. منى عبد العزيز",
                        room: "قاعة A12",
                        files: [
                            { name: "أساسيات الدوائر الإلكترونية", type: "lecture", file: "electronics_basics.pdf" },
                            { name: "تجارب عملية", type: "exercise", file: "electronics_experiments.pdf" },
                            { name: "مشروع تصميم دائرة", type: "project", file: "electronics_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "الهندسة المدنية - ميكانيكا التربة",
                        professor: "د. محمد الطيب",
                        room: "قاعة B07",
                        files: [
                            { name: "خواص التربة", type: "lecture", file: "soil_properties.pdf" },
                            { name: "تمارين تحليل تربة", type: "exercise", file: "soil_exercises.pdf" },
                            { name: "مشروع أساسات", type: "project", file: "soil_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "هندسة الإلكترونيات", place: "قاعة A12", time: "10:00 AM", type: "lecture", instructor: "د. منى عبد العزيز" },
                    { name: "ميكانيكا التربة", place: "قاعة B07", time: "12:00 PM", type: "lecture", instructor: "د. محمد الطيب" }
                ],
                attendanceSummary: [
                    { name: "هندسة الإلكترونيات", pct: 90, abs: 1, pres: 15 },
                    { name: "ميكانيكا التربة", pct: 78, abs: 3, pres: 11 }
                ]
            },
            {
                name: "facocommerce",
                displayname: t("facocommerce"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "المحاسبة المالية",
                        professor: "د. سعاد مصطفى",
                        room: "قاعة 301",
                        files: [
                            { name: "مقدمة في المحاسبة", type: "lecture", file: "accounting_intro.pdf" },
                            { name: "تمارين دفتر الأستاذ", type: "exercise", file: "accounting_exercises.pdf" },
                            { name: "مشروع ميزانية", type: "project", file: "accounting_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "إدارة الأعمال",
                        professor: "د. ياسر حسن",
                        room: "قاعة 305",
                        files: [
                            { name: "مبادئ الإدارة", type: "lecture", file: "management_basics.pdf" },
                            { name: "دراسات حالة", type: "exercise", file: "management_cases.pdf" },
                            { name: "مشروع خطة عمل", type: "project", file: "management_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "المحاسبة المالية", place: "قاعة 301", time: "9:00 AM", type: "lecture", instructor: "د. سعاد مصطفى" },
                    { name: "إدارة الأعمال", place: "قاعة 305", time: "11:00 AM", type: "lecture", instructor: "د. ياسر حسن" }
                ],
                attendanceSummary: [
                    { name: "المحاسبة المالية", pct: 85, abs: 2, pres: 13 },
                    { name: "إدارة الأعمال", pct: 88, abs: 1, pres: 14 }
                ]
            },
            {
                name: "facomedicine",
                displayname: t("facomedicine"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "علم التشريح",
                        professor: "د. محمود عادل",
                        room: "قاعة M01",
                        files: [
                            { name: "مقدمة في التشريح", type: "lecture", file: "anatomy_intro.pdf" },
                            { name: "تمارين تشريح عملي", type: "exercise", file: "anatomy_exercises.pdf" },
                            { name: "مشروع حالة سريرية", type: "project", file: "anatomy_case_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "علم الأدوية",
                        professor: "د. منى حسين",
                        room: "قاعة M05",
                        files: [
                            { name: "أساسيات علم الأدوية", type: "lecture", file: "pharmacology_basics.pdf" },
                            { name: "جداول أدوية", type: "exercise", file: "pharmacology_tables.pdf" },
                            { name: "مشروع دوائي", type: "project", file: "pharmacology_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "علم التشريح", place: "قاعة M01", time: "8:00 AM", type: "lecture", instructor: "د. محمود عادل" },
                    { name: "علم الأدوية", place: "قاعة M05", time: "10:00 AM", type: "lecture", instructor: "د. منى حسين" }
                ],
                attendanceSummary: [
                    { name: "علم التشريح", pct: 82, abs: 3, pres: 14 },
                    { name: "علم الأدوية", pct: 76, abs: 4, pres: 12 }
                ]
            },
            {
                name: "facoscience",
                displayname: t("facoscience"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "الكيمياء العضوية",
                        professor: "د. حسن إبراهيم",
                        room: "قاعة S10",
                        files: [
                            { name: "مقدمة في الكيمياء العضوية", type: "lecture", file: "organic_intro.pdf" },
                            { name: "تمارين تفاعلات", type: "exercise", file: "organic_exercises.pdf" },
                            { name: "مشروع بحث كيميائي", type: "project", file: "organic_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "الفيزياء النووية",
                        professor: "د. صفاء نجيب",
                        room: "قاعة S15",
                        files: [
                            { name: "مقدمة في الفيزياء النووية", type: "lecture", file: "nuclear_intro.pdf" },
                            { name: "تمارين حسابية", type: "exercise", file: "nuclear_exercises.pdf" },
                            { name: "مشروع طاقة نووية", type: "project", file: "nuclear_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "الكيمياء العضوية", place: "قاعة S10", time: "9:00 AM", type: "lecture", instructor: "د. حسن إبراهيم" },
                    { name: "الفيزياء النووية", place: "قاعة S15", time: "11:00 AM", type: "lecture", instructor: "د. صفاء نجيب" }
                ],
                attendanceSummary: [
                    { name: "الكيمياء العضوية", pct: 88, abs: 2, pres: 15 },
                    { name: "الفيزياء النووية", pct: 79, abs: 3, pres: 11 }
                ]
            },
            {
                name: "facoarts",
                displayname: t("facoarts"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "الأدب العربي",
                        professor: "د. عادل مصطفى",
                        room: "قاعة L20",
                        files: [
                            { name: "مقدمة في الأدب العربي", type: "lecture", file: "arabic_lit_intro.pdf" },
                            { name: "نصوص تحليلية", type: "exercise", file: "arabic_lit_exercises.pdf" },
                            { name: "مشروع بحث أدبي", type: "project", file: "arabic_lit_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "علم النفس",
                        professor: "د. هالة فكري",
                        room: "قاعة L25",
                        files: [
                            { name: "مدخل إلى علم النفس", type: "lecture", file: "psychology_intro.pdf" },
                            { name: "اختبارات سيكولوجية", type: "exercise", file: "psychology_tests.pdf" },
                            { name: "مشروع حالة", type: "project", file: "psychology_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "الأدب العربي", place: "قاعة L20", time: "10:00 AM", type: "lecture", instructor: "د. عادل مصطفى" },
                    { name: "علم النفس", place: "قاعة L25", time: "12:00 PM", type: "lecture", instructor: "د. هالة فكري" }
                ],
                attendanceSummary: [
                    { name: "الأدب العربي", pct: 92, abs: 1, pres: 16 },
                    { name: "علم النفس", pct: 85, abs: 2, pres: 14 }
                ]
            },
            {
                name: "facolaw",
                displayname: t("facolaw"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "القانون الدستوري",
                        professor: "د. عمرو سالم",
                        room: "قاعة H01",
                        files: [
                            { name: "مبادئ القانون الدستوري", type: "lecture", file: "constitutional_intro.pdf" },
                            { name: "تمارين قوانين", type: "exercise", file: "constitutional_exercises.pdf" },
                            { name: "مشروع بحث قانوني", type: "project", file: "constitutional_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "القانون الجنائي",
                        professor: "د. أحمد عبد الله",
                        room: "قاعة H05",
                        files: [
                            { name: "مدخل القانون الجنائي", type: "lecture", file: "criminal_intro.pdf" },
                            { name: "قضايا تطبيقية", type: "exercise", file: "criminal_cases.pdf" },
                            { name: "مشروع قانوني", type: "project", file: "criminal_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "القانون الدستوري", place: "قاعة H01", time: "9:00 AM", type: "lecture", instructor: "د. عمرو سالم" },
                    { name: "القانون الجنائي", place: "قاعة H05", time: "11:00 AM", type: "lecture", instructor: "د. أحمد عبد الله" }
                ],
                attendanceSummary: [
                    { name: "القانون الدستوري", pct: 87, abs: 2, pres: 13 },
                    { name: "القانون الجنائي", pct: 81, abs: 3, pres: 12 }
                ]
            },
            {
                name: "facomasscomms",
                displayname: t("facomasscomms"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "الإعلام الرقمي",
                        professor: "د. ليلى فوزي",
                        room: "قاعة J12",
                        files: [
                            { name: "مقدمة في الإعلام الرقمي", type: "lecture", file: "digital_media_intro.pdf" },
                            { name: "دراسات حالة", type: "exercise", file: "digital_media_cases.pdf" },
                            { name: "مشروع حملة إعلامية", type: "project", file: "digital_media_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "العلاقات العامة",
                        professor: "د. حسين كامل",
                        room: "قاعة J18",
                        files: [
                            { name: "مقدمة العلاقات العامة", type: "lecture", file: "pr_intro.pdf" },
                            { name: "خطط حملات", type: "exercise", file: "pr_exercises.pdf" },
                            { name: "مشروع خطة علاقات", type: "project", file: "pr_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "الإعلام الرقمي", place: "قاعة J12", time: "10:00 AM", type: "lecture", instructor: "د. ليلى فوزي" },
                    { name: "العلاقات العامة", place: "قاعة J18", time: "12:00 PM", type: "lecture", instructor: "د. حسين كامل" }
                ],
                attendanceSummary: [
                    { name: "الإعلام الرقمي", pct: 90, abs: 1, pres: 15 },
                    { name: "العلاقات العامة", pct: 86, abs: 2, pres: 13 }
                ]
            },
            {
                name: "facoagri",
                displayname: t("facoagri"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "علوم النبات",
                        professor: "د. سامي حسن",
                        room: "قاعة Z01",
                        files: [
                            { name: "مقدمة علوم النبات", type: "lecture", file: "plant_intro.pdf" },
                            { name: "تجارب زراعية", type: "exercise", file: "plant_exercises.pdf" },
                            { name: "مشروع زراعي", type: "project", file: "plant_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "علوم التربة",
                        professor: "د. أحمد عوض",
                        room: "قاعة Z05",
                        files: [
                            { name: "مقدمة علوم التربة", type: "lecture", file: "soil_intro.pdf" },
                            { name: "تجارب تحليل تربة", type: "exercise", file: "soil_experiments.pdf" },
                            { name: "مشروع زراعي", type: "project", file: "soil_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "علوم النبات", place: "قاعة Z01", time: "8:30 AM", type: "lecture", instructor: "د. سامي حسن" },
                    { name: "علوم التربة", place: "قاعة Z05", time: "11:00 AM", type: "lecture", instructor: "د. أحمد عوض" }
                ],
                attendanceSummary: [
                    { name: "علوم النبات", pct: 84, abs: 2, pres: 12 },
                    { name: "علوم التربة", pct: 80, abs: 3, pres: 11 }
                ]
            }
        ]
    },
    {
        university: "hu",
        displayname: t("hu"),
        faculties: [
            {
                name: "facultyofcomputerai",
                displayname: t("facocomputerai"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "هياكل البيانات",
                        professor: "د. خالد حسني",
                        room: "قاعة 101",
                        files: [
                            { name: "مقدمة عن هياكل البيانات", type: "lecture", file: "data_structures_intro.pdf" },
                            { name: "تمارين الفصل الأول", type: "exercise", file: "data_structures_ch1.pdf" },
                            { name: "مشروع تطبيقي", type: "project", file: "data_structures_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "الخوارزميات",
                        professor: "د. نادر فهمي",
                        room: "قاعة 102",
                        files: [
                            { name: "أساسيات الخوارزميات", type: "lecture", file: "algorithms_basics.pdf" },
                            { name: "حل المسائل", type: "exercise", file: "algorithms_problems.pdf" },
                            { name: "مشروع برمجي", type: "project", file: "algorithms_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "شبكات الحاسب",
                        professor: "د. أحمد مراد",
                        room: "قاعة 201",
                        files: [
                            { name: "مقدمة في الشبكات", type: "lecture", file: "networks_intro.pdf" },
                            { name: "تمارين على IP", type: "exercise", file: "networks_ip_exercises.pdf" },
                            { name: "مشروع مصغر", type: "project", file: "networks_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "هياكل البيانات", place: "قاعة 101", time: "9:00 AM", type: "lecture", instructor: "د. خالد حسني" },
                    { name: "الخوارزميات", place: "قاعة 102", time: "11:00 AM", type: "lecture", instructor: "د. نادر فهمي" },
                    { name: "شبكات الحاسب", place: "معمل 205", time: "1:00 PM", type: "عملي", instructor: "د. أحمد مراد" }
                ],
                attendanceSummary: [
                    { name: "هياكل البيانات", pct: 80, abs: 3, pres: 12 },
                    { name: "الخوارزميات", pct: 83, abs: 2, pres: 10 },
                    { name: "شبكات الحاسب", pct: 75, abs: 4, pres: 9 }
                ]
            },
            {
                name: "facoeng",
                displayname: t("facoeng"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "هندسة الإلكترونيات",
                        professor: "د. منى عبد العزيز",
                        room: "قاعة A12",
                        files: [
                            { name: "أساسيات الدوائر الإلكترونية", type: "lecture", file: "electronics_basics.pdf" },
                            { name: "تجارب عملية", type: "exercise", file: "electronics_experiments.pdf" },
                            { name: "مشروع تصميم دائرة", type: "project", file: "electronics_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "الهندسة المدنية - ميكانيكا التربة",
                        professor: "د. محمد الطيب",
                        room: "قاعة B07",
                        files: [
                            { name: "خواص التربة", type: "lecture", file: "soil_properties.pdf" },
                            { name: "تمارين تحليل تربة", type: "exercise", file: "soil_exercises.pdf" },
                            { name: "مشروع أساسات", type: "project", file: "soil_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "هندسة الإلكترونيات", place: "قاعة A12", time: "10:00 AM", type: "lecture", instructor: "د. منى عبد العزيز" },
                    { name: "ميكانيكا التربة", place: "قاعة B07", time: "12:00 PM", type: "lecture", instructor: "د. محمد الطيب" }
                ],
                attendanceSummary: [
                    { name: "هندسة الإلكترونيات", pct: 90, abs: 1, pres: 15 },
                    { name: "ميكانيكا التربة", pct: 78, abs: 3, pres: 11 }
                ]
            },
            {
                name: "facocommerce",
                displayname: t("facocommerce"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "المحاسبة المالية",
                        professor: "د. سعاد مصطفى",
                        room: "قاعة 301",
                        files: [
                            { name: "مقدمة في المحاسبة", type: "lecture", file: "accounting_intro.pdf" },
                            { name: "تمارين دفتر الأستاذ", type: "exercise", file: "accounting_exercises.pdf" },
                            { name: "مشروع ميزانية", type: "project", file: "accounting_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "إدارة الأعمال",
                        professor: "د. ياسر حسن",
                        room: "قاعة 305",
                        files: [
                            { name: "مبادئ الإدارة", type: "lecture", file: "management_basics.pdf" },
                            { name: "دراسات حالة", type: "exercise", file: "management_cases.pdf" },
                            { name: "مشروع خطة عمل", type: "project", file: "management_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "المحاسبة المالية", place: "قاعة 301", time: "9:00 AM", type: "lecture", instructor: "د. سعاد مصطفى" },
                    { name: "إدارة الأعمال", place: "قاعة 305", time: "11:00 AM", type: "lecture", instructor: "د. ياسر حسن" }
                ],
                attendanceSummary: [
                    { name: "المحاسبة المالية", pct: 85, abs: 2, pres: 13 },
                    { name: "إدارة الأعمال", pct: 88, abs: 1, pres: 14 }
                ]
            },
            {
                name: "facomedicine",
                displayname: t("facomedicine"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "علم التشريح",
                        professor: "د. محمود عادل",
                        room: "قاعة M01",
                        files: [
                            { name: "مقدمة في التشريح", type: "lecture", file: "anatomy_intro.pdf" },
                            { name: "تمارين تشريح عملي", type: "exercise", file: "anatomy_exercises.pdf" },
                            { name: "مشروع حالة سريرية", type: "project", file: "anatomy_case_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "علم الأدوية",
                        professor: "د. منى حسين",
                        room: "قاعة M05",
                        files: [
                            { name: "أساسيات علم الأدوية", type: "lecture", file: "pharmacology_basics.pdf" },
                            { name: "جداول أدوية", type: "exercise", file: "pharmacology_tables.pdf" },
                            { name: "مشروع دوائي", type: "project", file: "pharmacology_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "علم التشريح", place: "قاعة M01", time: "8:00 AM", type: "lecture", instructor: "د. محمود عادل" },
                    { name: "علم الأدوية", place: "قاعة M05", time: "10:00 AM", type: "lecture", instructor: "د. منى حسين" }
                ],
                attendanceSummary: [
                    { name: "علم التشريح", pct: 82, abs: 3, pres: 14 },
                    { name: "علم الأدوية", pct: 76, abs: 4, pres: 12 }
                ]
            },
            {
                name: "facoscience",
                displayname: t("facoscience"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "الكيمياء العضوية",
                        professor: "د. حسن إبراهيم",
                        room: "قاعة S10",
                        files: [
                            { name: "مقدمة في الكيمياء العضوية", type: "lecture", file: "organic_intro.pdf" },
                            { name: "تمارين تفاعلات", type: "exercise", file: "organic_exercises.pdf" },
                            { name: "مشروع بحث كيميائي", type: "project", file: "organic_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "الفيزياء النووية",
                        professor: "د. صفاء نجيب",
                        room: "قاعة S15",
                        files: [
                            { name: "مقدمة في الفيزياء النووية", type: "lecture", file: "nuclear_intro.pdf" },
                            { name: "تمارين حسابية", type: "exercise", file: "nuclear_exercises.pdf" },
                            { name: "مشروع طاقة نووية", type: "project", file: "nuclear_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "الكيمياء العضوية", place: "قاعة S10", time: "9:00 AM", type: "lecture", instructor: "د. حسن إبراهيم" },
                    { name: "الفيزياء النووية", place: "قاعة S15", time: "11:00 AM", type: "lecture", instructor: "د. صفاء نجيب" }
                ],
                attendanceSummary: [
                    { name: "الكيمياء العضوية", pct: 88, abs: 2, pres: 15 },
                    { name: "الفيزياء النووية", pct: 79, abs: 3, pres: 11 }
                ]
            },
            {
                name: "facoarts",
                displayname: t("facoarts"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "الأدب العربي",
                        professor: "د. عادل مصطفى",
                        room: "قاعة L20",
                        files: [
                            { name: "مقدمة في الأدب العربي", type: "lecture", file: "arabic_lit_intro.pdf" },
                            { name: "نصوص تحليلية", type: "exercise", file: "arabic_lit_exercises.pdf" },
                            { name: "مشروع بحث أدبي", type: "project", file: "arabic_lit_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "علم النفس",
                        professor: "د. هالة فكري",
                        room: "قاعة L25",
                        files: [
                            { name: "مدخل إلى علم النفس", type: "lecture", file: "psychology_intro.pdf" },
                            { name: "اختبارات سيكولوجية", type: "exercise", file: "psychology_tests.pdf" },
                            { name: "مشروع حالة", type: "project", file: "psychology_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "الأدب العربي", place: "قاعة L20", time: "10:00 AM", type: "lecture", instructor: "د. عادل مصطفى" },
                    { name: "علم النفس", place: "قاعة L25", time: "12:00 PM", type: "lecture", instructor: "د. هالة فكري" }
                ],
                attendanceSummary: [
                    { name: "الأدب العربي", pct: 92, abs: 1, pres: 16 },
                    { name: "علم النفس", pct: 85, abs: 2, pres: 14 }
                ]
            },
            {
                name: "facolaw",
                displayname: t("facolaw"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "القانون الدستوري",
                        professor: "د. عمرو سالم",
                        room: "قاعة H01",
                        files: [
                            { name: "مبادئ القانون الدستوري", type: "lecture", file: "constitutional_intro.pdf" },
                            { name: "تمارين قوانين", type: "exercise", file: "constitutional_exercises.pdf" },
                            { name: "مشروع بحث قانوني", type: "project", file: "constitutional_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "القانون الجنائي",
                        professor: "د. أحمد عبد الله",
                        room: "قاعة H05",
                        files: [
                            { name: "مدخل القانون الجنائي", type: "lecture", file: "criminal_intro.pdf" },
                            { name: "قضايا تطبيقية", type: "exercise", file: "criminal_cases.pdf" },
                            { name: "مشروع قانوني", type: "project", file: "criminal_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "القانون الدستوري", place: "قاعة H01", time: "9:00 AM", type: "lecture", instructor: "د. عمرو سالم" },
                    { name: "القانون الجنائي", place: "قاعة H05", time: "11:00 AM", type: "lecture", instructor: "د. أحمد عبد الله" }
                ],
                attendanceSummary: [
                    { name: "القانون الدستوري", pct: 87, abs: 2, pres: 13 },
                    { name: "القانون الجنائي", pct: 81, abs: 3, pres: 12 }
                ]
            },
            {
                name: "facomasscomms",
                displayname: t("facomasscomms"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "الإعلام الرقمي",
                        professor: "د. ليلى فوزي",
                        room: "قاعة J12",
                        files: [
                            { name: "مقدمة في الإعلام الرقمي", type: "lecture", file: "digital_media_intro.pdf" },
                            { name: "دراسات حالة", type: "exercise", file: "digital_media_cases.pdf" },
                            { name: "مشروع حملة إعلامية", type: "project", file: "digital_media_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "العلاقات العامة",
                        professor: "د. حسين كامل",
                        room: "قاعة J18",
                        files: [
                            { name: "مقدمة العلاقات العامة", type: "lecture", file: "pr_intro.pdf" },
                            { name: "خطط حملات", type: "exercise", file: "pr_exercises.pdf" },
                            { name: "مشروع خطة علاقات", type: "project", file: "pr_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "الإعلام الرقمي", place: "قاعة J12", time: "10:00 AM", type: "lecture", instructor: "د. ليلى فوزي" },
                    { name: "العلاقات العامة", place: "قاعة J18", time: "12:00 PM", type: "lecture", instructor: "د. حسين كامل" }
                ],
                attendanceSummary: [
                    { name: "الإعلام الرقمي", pct: 90, abs: 1, pres: 15 },
                    { name: "العلاقات العامة", pct: 86, abs: 2, pres: 13 }
                ]
            },
            {
                name: "facoagri",
                displayname: t("facoagri"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "علوم النبات",
                        professor: "د. سامي حسن",
                        room: "قاعة Z01",
                        files: [
                            { name: "مقدمة علوم النبات", type: "lecture", file: "plant_intro.pdf" },
                            { name: "تجارب زراعية", type: "exercise", file: "plant_exercises.pdf" },
                            { name: "مشروع زراعي", type: "project", file: "plant_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "علوم التربة",
                        professor: "د. أحمد عوض",
                        room: "قاعة Z05",
                        files: [
                            { name: "مقدمة علوم التربة", type: "lecture", file: "soil_intro.pdf" },
                            { name: "تجارب تحليل تربة", type: "exercise", file: "soil_experiments.pdf" },
                            { name: "مشروع زراعي", type: "project", file: "soil_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "علوم النبات", place: "قاعة Z01", time: "8:30 AM", type: "lecture", instructor: "د. سامي حسن" },
                    { name: "علوم التربة", place: "قاعة Z05", time: "11:00 AM", type: "lecture", instructor: "د. أحمد عوض" }
                ],
                attendanceSummary: [
                    { name: "علوم النبات", pct: 84, abs: 2, pres: 12 },
                    { name: "علوم التربة", pct: 80, abs: 3, pres: 11 }
                ]
            }
        ]
    },
    {
        university: "mu",
        displayname: t("mu"),
        faculties: [
            {
                name: "facultyofcomputerai",
                displayname: t("facocomputerai"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "هياكل البيانات",
                        professor: "د. خالد حسني",
                        room: "قاعة 101",
                        files: [
                            { name: "مقدمة عن هياكل البيانات", type: "lecture", file: "data_structures_intro.pdf" },
                            { name: "تمارين الفصل الأول", type: "exercise", file: "data_structures_ch1.pdf" },
                            { name: "مشروع تطبيقي", type: "project", file: "data_structures_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "الخوارزميات",
                        professor: "د. نادر فهمي",
                        room: "قاعة 102",
                        files: [
                            { name: "أساسيات الخوارزميات", type: "lecture", file: "algorithms_basics.pdf" },
                            { name: "حل المسائل", type: "exercise", file: "algorithms_problems.pdf" },
                            { name: "مشروع برمجي", type: "project", file: "algorithms_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "شبكات الحاسب",
                        professor: "د. أحمد مراد",
                        room: "قاعة 201",
                        files: [
                            { name: "مقدمة في الشبكات", type: "lecture", file: "networks_intro.pdf" },
                            { name: "تمارين على IP", type: "exercise", file: "networks_ip_exercises.pdf" },
                            { name: "مشروع مصغر", type: "project", file: "networks_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "هياكل البيانات", place: "قاعة 101", time: "9:00 AM", type: "lecture", instructor: "د. خالد حسني" },
                    { name: "الخوارزميات", place: "قاعة 102", time: "11:00 AM", type: "lecture", instructor: "د. نادر فهمي" },
                    { name: "شبكات الحاسب", place: "معمل 205", time: "1:00 PM", type: "عملي", instructor: "د. أحمد مراد" }
                ],
                attendanceSummary: [
                    { name: "هياكل البيانات", pct: 80, abs: 3, pres: 12 },
                    { name: "الخوارزميات", pct: 83, abs: 2, pres: 10 },
                    { name: "شبكات الحاسب", pct: 75, abs: 4, pres: 9 }
                ]
            },
            {
                name: "facoeng",
                displayname: t("facoeng"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "هندسة الإلكترونيات",
                        professor: "د. منى عبد العزيز",
                        room: "قاعة A12",
                        files: [
                            { name: "أساسيات الدوائر الإلكترونية", type: "lecture", file: "electronics_basics.pdf" },
                            { name: "تجارب عملية", type: "exercise", file: "electronics_experiments.pdf" },
                            { name: "مشروع تصميم دائرة", type: "project", file: "electronics_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "الهندسة المدنية - ميكانيكا التربة",
                        professor: "د. محمد الطيب",
                        room: "قاعة B07",
                        files: [
                            { name: "خواص التربة", type: "lecture", file: "soil_properties.pdf" },
                            { name: "تمارين تحليل تربة", type: "exercise", file: "soil_exercises.pdf" },
                            { name: "مشروع أساسات", type: "project", file: "soil_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "هندسة الإلكترونيات", place: "قاعة A12", time: "10:00 AM", type: "lecture", instructor: "د. منى عبد العزيز" },
                    { name: "ميكانيكا التربة", place: "قاعة B07", time: "12:00 PM", type: "lecture", instructor: "د. محمد الطيب" }
                ],
                attendanceSummary: [
                    { name: "هندسة الإلكترونيات", pct: 90, abs: 1, pres: 15 },
                    { name: "ميكانيكا التربة", pct: 78, abs: 3, pres: 11 }
                ]
            },
            {
                name: "facocommerce",
                displayname: t("facocommerce"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "المحاسبة المالية",
                        professor: "د. سعاد مصطفى",
                        room: "قاعة 301",
                        files: [
                            { name: "مقدمة في المحاسبة", type: "lecture", file: "accounting_intro.pdf" },
                            { name: "تمارين دفتر الأستاذ", type: "exercise", file: "accounting_exercises.pdf" },
                            { name: "مشروع ميزانية", type: "project", file: "accounting_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "إدارة الأعمال",
                        professor: "د. ياسر حسن",
                        room: "قاعة 305",
                        files: [
                            { name: "مبادئ الإدارة", type: "lecture", file: "management_basics.pdf" },
                            { name: "دراسات حالة", type: "exercise", file: "management_cases.pdf" },
                            { name: "مشروع خطة عمل", type: "project", file: "management_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "المحاسبة المالية", place: "قاعة 301", time: "9:00 AM", type: "lecture", instructor: "د. سعاد مصطفى" },
                    { name: "إدارة الأعمال", place: "قاعة 305", time: "11:00 AM", type: "lecture", instructor: "د. ياسر حسن" }
                ],
                attendanceSummary: [
                    { name: "المحاسبة المالية", pct: 85, abs: 2, pres: 13 },
                    { name: "إدارة الأعمال", pct: 88, abs: 1, pres: 14 }
                ]
            },
            {
                name: "facomedicine",
                displayname: t("facomedicine"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "علم التشريح",
                        professor: "د. محمود عادل",
                        room: "قاعة M01",
                        files: [
                            { name: "مقدمة في التشريح", type: "lecture", file: "anatomy_intro.pdf" },
                            { name: "تمارين تشريح عملي", type: "exercise", file: "anatomy_exercises.pdf" },
                            { name: "مشروع حالة سريرية", type: "project", file: "anatomy_case_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "علم الأدوية",
                        professor: "د. منى حسين",
                        room: "قاعة M05",
                        files: [
                            { name: "أساسيات علم الأدوية", type: "lecture", file: "pharmacology_basics.pdf" },
                            { name: "جداول أدوية", type: "exercise", file: "pharmacology_tables.pdf" },
                            { name: "مشروع دوائي", type: "project", file: "pharmacology_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "علم التشريح", place: "قاعة M01", time: "8:00 AM", type: "lecture", instructor: "د. محمود عادل" },
                    { name: "علم الأدوية", place: "قاعة M05", time: "10:00 AM", type: "lecture", instructor: "د. منى حسين" }
                ],
                attendanceSummary: [
                    { name: "علم التشريح", pct: 82, abs: 3, pres: 14 },
                    { name: "علم الأدوية", pct: 76, abs: 4, pres: 12 }
                ]
            },
            {
                name: "facoscience",
                displayname: t("facoscience"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "الكيمياء العضوية",
                        professor: "د. حسن إبراهيم",
                        room: "قاعة S10",
                        files: [
                            { name: "مقدمة في الكيمياء العضوية", type: "lecture", file: "organic_intro.pdf" },
                            { name: "تمارين تفاعلات", type: "exercise", file: "organic_exercises.pdf" },
                            { name: "مشروع بحث كيميائي", type: "project", file: "organic_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "الفيزياء النووية",
                        professor: "د. صفاء نجيب",
                        room: "قاعة S15",
                        files: [
                            { name: "مقدمة في الفيزياء النووية", type: "lecture", file: "nuclear_intro.pdf" },
                            { name: "تمارين حسابية", type: "exercise", file: "nuclear_exercises.pdf" },
                            { name: "مشروع طاقة نووية", type: "project", file: "nuclear_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "الكيمياء العضوية", place: "قاعة S10", time: "9:00 AM", type: "lecture", instructor: "د. حسن إبراهيم" },
                    { name: "الفيزياء النووية", place: "قاعة S15", time: "11:00 AM", type: "lecture", instructor: "د. صفاء نجيب" }
                ],
                attendanceSummary: [
                    { name: "الكيمياء العضوية", pct: 88, abs: 2, pres: 15 },
                    { name: "الفيزياء النووية", pct: 79, abs: 3, pres: 11 }
                ]
            },
            {
                name: "facoarts",
                displayname: t("facoarts"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "الأدب العربي",
                        professor: "د. عادل مصطفى",
                        room: "قاعة L20",
                        files: [
                            { name: "مقدمة في الأدب العربي", type: "lecture", file: "arabic_lit_intro.pdf" },
                            { name: "نصوص تحليلية", type: "exercise", file: "arabic_lit_exercises.pdf" },
                            { name: "مشروع بحث أدبي", type: "project", file: "arabic_lit_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "علم النفس",
                        professor: "د. هالة فكري",
                        room: "قاعة L25",
                        files: [
                            { name: "مدخل إلى علم النفس", type: "lecture", file: "psychology_intro.pdf" },
                            { name: "اختبارات سيكولوجية", type: "exercise", file: "psychology_tests.pdf" },
                            { name: "مشروع حالة", type: "project", file: "psychology_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "الأدب العربي", place: "قاعة L20", time: "10:00 AM", type: "lecture", instructor: "د. عادل مصطفى" },
                    { name: "علم النفس", place: "قاعة L25", time: "12:00 PM", type: "lecture", instructor: "د. هالة فكري" }
                ],
                attendanceSummary: [
                    { name: "الأدب العربي", pct: 92, abs: 1, pres: 16 },
                    { name: "علم النفس", pct: 85, abs: 2, pres: 14 }
                ]
            },
            {
                name: "facolaw",
                displayname: t("facolaw"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "القانون الدستوري",
                        professor: "د. عمرو سالم",
                        room: "قاعة H01",
                        files: [
                            { name: "مبادئ القانون الدستوري", type: "lecture", file: "constitutional_intro.pdf" },
                            { name: "تمارين قوانين", type: "exercise", file: "constitutional_exercises.pdf" },
                            { name: "مشروع بحث قانوني", type: "project", file: "constitutional_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "القانون الجنائي",
                        professor: "د. أحمد عبد الله",
                        room: "قاعة H05",
                        files: [
                            { name: "مدخل القانون الجنائي", type: "lecture", file: "criminal_intro.pdf" },
                            { name: "قضايا تطبيقية", type: "exercise", file: "criminal_cases.pdf" },
                            { name: "مشروع قانوني", type: "project", file: "criminal_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "القانون الدستوري", place: "قاعة H01", time: "9:00 AM", type: "lecture", instructor: "د. عمرو سالم" },
                    { name: "القانون الجنائي", place: "قاعة H05", time: "11:00 AM", type: "lecture", instructor: "د. أحمد عبد الله" }
                ],
                attendanceSummary: [
                    { name: "القانون الدستوري", pct: 87, abs: 2, pres: 13 },
                    { name: "القانون الجنائي", pct: 81, abs: 3, pres: 12 }
                ]
            },
            {
                name: "facomasscomms",
                displayname: t("facomasscomms"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "الإعلام الرقمي",
                        professor: "د. ليلى فوزي",
                        room: "قاعة J12",
                        files: [
                            { name: "مقدمة في الإعلام الرقمي", type: "lecture", file: "digital_media_intro.pdf" },
                            { name: "دراسات حالة", type: "exercise", file: "digital_media_cases.pdf" },
                            { name: "مشروع حملة إعلامية", type: "project", file: "digital_media_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "العلاقات العامة",
                        professor: "د. حسين كامل",
                        room: "قاعة J18",
                        files: [
                            { name: "مقدمة العلاقات العامة", type: "lecture", file: "pr_intro.pdf" },
                            { name: "خطط حملات", type: "exercise", file: "pr_exercises.pdf" },
                            { name: "مشروع خطة علاقات", type: "project", file: "pr_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "الإعلام الرقمي", place: "قاعة J12", time: "10:00 AM", type: "lecture", instructor: "د. ليلى فوزي" },
                    { name: "العلاقات العامة", place: "قاعة J18", time: "12:00 PM", type: "lecture", instructor: "د. حسين كامل" }
                ],
                attendanceSummary: [
                    { name: "الإعلام الرقمي", pct: 90, abs: 1, pres: 15 },
                    { name: "العلاقات العامة", pct: 86, abs: 2, pres: 13 }
                ]
            },
            {
                name: "facoagri",
                displayname: t("facoagri"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "علوم النبات",
                        professor: "د. سامي حسن",
                        room: "قاعة Z01",
                        files: [
                            { name: "مقدمة علوم النبات", type: "lecture", file: "plant_intro.pdf" },
                            { name: "تجارب زراعية", type: "exercise", file: "plant_exercises.pdf" },
                            { name: "مشروع زراعي", type: "project", file: "plant_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "علوم التربة",
                        professor: "د. أحمد عوض",
                        room: "قاعة Z05",
                        files: [
                            { name: "مقدمة علوم التربة", type: "lecture", file: "soil_intro.pdf" },
                            { name: "تجارب تحليل تربة", type: "exercise", file: "soil_experiments.pdf" },
                            { name: "مشروع زراعي", type: "project", file: "soil_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "علوم النبات", place: "قاعة Z01", time: "8:30 AM", type: "lecture", instructor: "د. سامي حسن" },
                    { name: "علوم التربة", place: "قاعة Z05", time: "11:00 AM", type: "lecture", instructor: "د. أحمد عوض" }
                ],
                attendanceSummary: [
                    { name: "علوم النبات", pct: 84, abs: 2, pres: 12 },
                    { name: "علوم التربة", pct: 80, abs: 3, pres: 11 }
                ]
            }
        ]
    },
    {
        university: "su",
        displayname: t("su"),
        faculties: [
            {
                name: "facultyofcomputerai",
                displayname: t("facocomputerai"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "هياكل البيانات",
                        professor: "د. خالد حسني",
                        room: "قاعة 101",
                        files: [
                            { name: "مقدمة عن هياكل البيانات", type: "lecture", file: "data_structures_intro.pdf" },
                            { name: "تمارين الفصل الأول", type: "exercise", file: "data_structures_ch1.pdf" },
                            { name: "مشروع تطبيقي", type: "project", file: "data_structures_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "الخوارزميات",
                        professor: "د. نادر فهمي",
                        room: "قاعة 102",
                        files: [
                            { name: "أساسيات الخوارزميات", type: "lecture", file: "algorithms_basics.pdf" },
                            { name: "حل المسائل", type: "exercise", file: "algorithms_problems.pdf" },
                            { name: "مشروع برمجي", type: "project", file: "algorithms_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "شبكات الحاسب",
                        professor: "د. أحمد مراد",
                        room: "قاعة 201",
                        files: [
                            { name: "مقدمة في الشبكات", type: "lecture", file: "networks_intro.pdf" },
                            { name: "تمارين على IP", type: "exercise", file: "networks_ip_exercises.pdf" },
                            { name: "مشروع مصغر", type: "project", file: "networks_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "هياكل البيانات", place: "قاعة 101", time: "9:00 AM", type: "lecture", instructor: "د. خالد حسني" },
                    { name: "الخوارزميات", place: "قاعة 102", time: "11:00 AM", type: "lecture", instructor: "د. نادر فهمي" },
                    { name: "شبكات الحاسب", place: "معمل 205", time: "1:00 PM", type: "عملي", instructor: "د. أحمد مراد" }
                ],
                attendanceSummary: [
                    { name: "هياكل البيانات", pct: 80, abs: 3, pres: 12 },
                    { name: "الخوارزميات", pct: 83, abs: 2, pres: 10 },
                    { name: "شبكات الحاسب", pct: 75, abs: 4, pres: 9 }
                ]
            },
            {
                name: "facoeng",
                displayname: t("facoeng"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "هندسة الإلكترونيات",
                        professor: "د. منى عبد العزيز",
                        room: "قاعة A12",
                        files: [
                            { name: "أساسيات الدوائر الإلكترونية", type: "lecture", file: "electronics_basics.pdf" },
                            { name: "تجارب عملية", type: "exercise", file: "electronics_experiments.pdf" },
                            { name: "مشروع تصميم دائرة", type: "project", file: "electronics_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "الهندسة المدنية - ميكانيكا التربة",
                        professor: "د. محمد الطيب",
                        room: "قاعة B07",
                        files: [
                            { name: "خواص التربة", type: "lecture", file: "soil_properties.pdf" },
                            { name: "تمارين تحليل تربة", type: "exercise", file: "soil_exercises.pdf" },
                            { name: "مشروع أساسات", type: "project", file: "soil_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "هندسة الإلكترونيات", place: "قاعة A12", time: "10:00 AM", type: "lecture", instructor: "د. منى عبد العزيز" },
                    { name: "ميكانيكا التربة", place: "قاعة B07", time: "12:00 PM", type: "lecture", instructor: "د. محمد الطيب" }
                ],
                attendanceSummary: [
                    { name: "هندسة الإلكترونيات", pct: 90, abs: 1, pres: 15 },
                    { name: "ميكانيكا التربة", pct: 78, abs: 3, pres: 11 }
                ]
            },
            {
                name: "facocommerce",
                displayname: t("facocommerce"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "المحاسبة المالية",
                        professor: "د. سعاد مصطفى",
                        room: "قاعة 301",
                        files: [
                            { name: "مقدمة في المحاسبة", type: "lecture", file: "accounting_intro.pdf" },
                            { name: "تمارين دفتر الأستاذ", type: "exercise", file: "accounting_exercises.pdf" },
                            { name: "مشروع ميزانية", type: "project", file: "accounting_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "إدارة الأعمال",
                        professor: "د. ياسر حسن",
                        room: "قاعة 305",
                        files: [
                            { name: "مبادئ الإدارة", type: "lecture", file: "management_basics.pdf" },
                            { name: "دراسات حالة", type: "exercise", file: "management_cases.pdf" },
                            { name: "مشروع خطة عمل", type: "project", file: "management_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "المحاسبة المالية", place: "قاعة 301", time: "9:00 AM", type: "lecture", instructor: "د. سعاد مصطفى" },
                    { name: "إدارة الأعمال", place: "قاعة 305", time: "11:00 AM", type: "lecture", instructor: "د. ياسر حسن" }
                ],
                attendanceSummary: [
                    { name: "المحاسبة المالية", pct: 85, abs: 2, pres: 13 },
                    { name: "إدارة الأعمال", pct: 88, abs: 1, pres: 14 }
                ]
            },
            {
                name: "facomedicine",
                displayname: t("facomedicine"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "علم التشريح",
                        professor: "د. محمود عادل",
                        room: "قاعة M01",
                        files: [
                            { name: "مقدمة في التشريح", type: "lecture", file: "anatomy_intro.pdf" },
                            { name: "تمارين تشريح عملي", type: "exercise", file: "anatomy_exercises.pdf" },
                            { name: "مشروع حالة سريرية", type: "project", file: "anatomy_case_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "علم الأدوية",
                        professor: "د. منى حسين",
                        room: "قاعة M05",
                        files: [
                            { name: "أساسيات علم الأدوية", type: "lecture", file: "pharmacology_basics.pdf" },
                            { name: "جداول أدوية", type: "exercise", file: "pharmacology_tables.pdf" },
                            { name: "مشروع دوائي", type: "project", file: "pharmacology_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "علم التشريح", place: "قاعة M01", time: "8:00 AM", type: "lecture", instructor: "د. محمود عادل" },
                    { name: "علم الأدوية", place: "قاعة M05", time: "10:00 AM", type: "lecture", instructor: "د. منى حسين" }
                ],
                attendanceSummary: [
                    { name: "علم التشريح", pct: 82, abs: 3, pres: 14 },
                    { name: "علم الأدوية", pct: 76, abs: 4, pres: 12 }
                ]
            },
            {
                name: "facoscience",
                displayname: t("facoscience"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "الكيمياء العضوية",
                        professor: "د. حسن إبراهيم",
                        room: "قاعة S10",
                        files: [
                            { name: "مقدمة في الكيمياء العضوية", type: "lecture", file: "organic_intro.pdf" },
                            { name: "تمارين تفاعلات", type: "exercise", file: "organic_exercises.pdf" },
                            { name: "مشروع بحث كيميائي", type: "project", file: "organic_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "الفيزياء النووية",
                        professor: "د. صفاء نجيب",
                        room: "قاعة S15",
                        files: [
                            { name: "مقدمة في الفيزياء النووية", type: "lecture", file: "nuclear_intro.pdf" },
                            { name: "تمارين حسابية", type: "exercise", file: "nuclear_exercises.pdf" },
                            { name: "مشروع طاقة نووية", type: "project", file: "nuclear_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "الكيمياء العضوية", place: "قاعة S10", time: "9:00 AM", type: "lecture", instructor: "د. حسن إبراهيم" },
                    { name: "الفيزياء النووية", place: "قاعة S15", time: "11:00 AM", type: "lecture", instructor: "د. صفاء نجيب" }
                ],
                attendanceSummary: [
                    { name: "الكيمياء العضوية", pct: 88, abs: 2, pres: 15 },
                    { name: "الفيزياء النووية", pct: 79, abs: 3, pres: 11 }
                ]
            },
            {
                name: "facoarts",
                displayname: t("facoarts"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "الأدب العربي",
                        professor: "د. عادل مصطفى",
                        room: "قاعة L20",
                        files: [
                            { name: "مقدمة في الأدب العربي", type: "lecture", file: "arabic_lit_intro.pdf" },
                            { name: "نصوص تحليلية", type: "exercise", file: "arabic_lit_exercises.pdf" },
                            { name: "مشروع بحث أدبي", type: "project", file: "arabic_lit_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "علم النفس",
                        professor: "د. هالة فكري",
                        room: "قاعة L25",
                        files: [
                            { name: "مدخل إلى علم النفس", type: "lecture", file: "psychology_intro.pdf" },
                            { name: "اختبارات سيكولوجية", type: "exercise", file: "psychology_tests.pdf" },
                            { name: "مشروع حالة", type: "project", file: "psychology_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "الأدب العربي", place: "قاعة L20", time: "10:00 AM", type: "lecture", instructor: "د. عادل مصطفى" },
                    { name: "علم النفس", place: "قاعة L25", time: "12:00 PM", type: "lecture", instructor: "د. هالة فكري" }
                ],
                attendanceSummary: [
                    { name: "الأدب العربي", pct: 92, abs: 1, pres: 16 },
                    { name: "علم النفس", pct: 85, abs: 2, pres: 14 }
                ]
            },
            {
                name: "facolaw",
                displayname: t("facolaw"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "القانون الدستوري",
                        professor: "د. عمرو سالم",
                        room: "قاعة H01",
                        files: [
                            { name: "مبادئ القانون الدستوري", type: "lecture", file: "constitutional_intro.pdf" },
                            { name: "تمارين قوانين", type: "exercise", file: "constitutional_exercises.pdf" },
                            { name: "مشروع بحث قانوني", type: "project", file: "constitutional_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "القانون الجنائي",
                        professor: "د. أحمد عبد الله",
                        room: "قاعة H05",
                        files: [
                            { name: "مدخل القانون الجنائي", type: "lecture", file: "criminal_intro.pdf" },
                            { name: "قضايا تطبيقية", type: "exercise", file: "criminal_cases.pdf" },
                            { name: "مشروع قانوني", type: "project", file: "criminal_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "القانون الدستوري", place: "قاعة H01", time: "9:00 AM", type: "lecture", instructor: "د. عمرو سالم" },
                    { name: "القانون الجنائي", place: "قاعة H05", time: "11:00 AM", type: "lecture", instructor: "د. أحمد عبد الله" }
                ],
                attendanceSummary: [
                    { name: "القانون الدستوري", pct: 87, abs: 2, pres: 13 },
                    { name: "القانون الجنائي", pct: 81, abs: 3, pres: 12 }
                ]
            },
            {
                name: "facomasscomms",
                displayname: t("facomasscomms"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "الإعلام الرقمي",
                        professor: "د. ليلى فوزي",
                        room: "قاعة J12",
                        files: [
                            { name: "مقدمة في الإعلام الرقمي", type: "lecture", file: "digital_media_intro.pdf" },
                            { name: "دراسات حالة", type: "exercise", file: "digital_media_cases.pdf" },
                            { name: "مشروع حملة إعلامية", type: "project", file: "digital_media_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "العلاقات العامة",
                        professor: "د. حسين كامل",
                        room: "قاعة J18",
                        files: [
                            { name: "مقدمة العلاقات العامة", type: "lecture", file: "pr_intro.pdf" },
                            { name: "خطط حملات", type: "exercise", file: "pr_exercises.pdf" },
                            { name: "مشروع خطة علاقات", type: "project", file: "pr_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "الإعلام الرقمي", place: "قاعة J12", time: "10:00 AM", type: "lecture", instructor: "د. ليلى فوزي" },
                    { name: "العلاقات العامة", place: "قاعة J18", time: "12:00 PM", type: "lecture", instructor: "د. حسين كامل" }
                ],
                attendanceSummary: [
                    { name: "الإعلام الرقمي", pct: 90, abs: 1, pres: 15 },
                    { name: "العلاقات العامة", pct: 86, abs: 2, pres: 13 }
                ]
            },
            {
                name: "facoagri",
                displayname: t("facoagri"),
                courses: [
                    {
                        title: "lecture",
                        subtitle: "علوم النبات",
                        professor: "د. سامي حسن",
                        room: "قاعة Z01",
                        files: [
                            { name: "مقدمة علوم النبات", type: "lecture", file: "plant_intro.pdf" },
                            { name: "تجارب زراعية", type: "exercise", file: "plant_exercises.pdf" },
                            { name: "مشروع زراعي", type: "project", file: "plant_project.pdf" }
                        ]
                    },
                    {
                        title: "lecture",
                        subtitle: "علوم التربة",
                        professor: "د. أحمد عوض",
                        room: "قاعة Z05",
                        files: [
                            { name: "مقدمة علوم التربة", type: "lecture", file: "soil_intro.pdf" },
                            { name: "تجارب تحليل تربة", type: "exercise", file: "soil_experiments.pdf" },
                            { name: "مشروع زراعي", type: "project", file: "soil_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "علوم النبات", place: "قاعة Z01", time: "8:30 AM", type: "lecture", instructor: "د. سامي حسن" },
                    { name: "علوم التربة", place: "قاعة Z05", time: "11:00 AM", type: "lecture", instructor: "د. أحمد عوض" }
                ],
                attendanceSummary: [
                    { name: "علوم النبات", pct: 84, abs: 2, pres: 12 },
                    { name: "علوم التربة", pct: 80, abs: 3, pres: 11 }
                ]
            }
        ]
    },
];
