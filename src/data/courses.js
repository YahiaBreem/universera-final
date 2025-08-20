export const courses = [
    {
        university: "Cairo University",
        faculties: [
            {
                name: "Faculty of Computers and Artificial Intelligence",
                courses: [
                    {
                        title: "محاضرة",
                        subtitle: "هياكل البيانات",
                        professor: "د. محمد الزهراني",
                        room: "قاعة 205",
                        files: [
                            { name: "مقدمة عن هياكل البيانات", type: "lecture", file: "data_structures_intro.pdf" },
                            { name: "تمارين الفصل الأول", type: "exercise", file: "data_structures_ch1.pdf" },
                            { name: "مشروع تطبيقي", type: "project", file: "data_structures_project.pdf" }
                        ]
                    },
                    {
                        title: "محاضرة",
                        subtitle: "الخوارزميات",
                        professor: "د. فاطمة العلي",
                        room: "قاعة 318",
                        files: [
                            { name: "أساسيات الخوارزميات", type: "lecture", file: "algorithms_basics.pdf" },
                            { name: "حل المسائل", type: "exercise", file: "algorithms_problems.pdf" },
                            { name: "مشروع برمجي", type: "project", file: "algorithms_project.pdf" }
                        ]
                    },
                    {
                        title: "محاضرة",
                        subtitle: "شبكات الحاسب",
                        professor: "د. عبد الرحمن صالح",
                        room: "قاعة 412",
                        files: [
                            { name: "مقدمة في الشبكات", type: "lecture", file: "networks_intro.pdf" },
                            { name: "تمارين على IP", type: "exercise", file: "networks_ip_exercises.pdf" },
                            { name: "مشروع مصغر", type: "project", file: "networks_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "هياكل البيانات", place: "قاعة 205", time: "9:00 AM", type: "محاضرة", instructor: "د. محمد الزهراني" },
                    { name: "الخوارزميات", place: "قاعة 318", time: "11:00 AM", type: "محاضرة", instructor: "د. فاطمة العلي" },
                    { name: "شبكات الحاسب", place: "معمل 507", time: "1:00 PM", type: "عملي", instructor: "د. عبد الرحمن صالح" }
                ],
                attendanceSummary: [
                    { name: "هياكل البيانات", pct: 80, abs: 3, pres: 12 },
                    { name: "الخوارزميات", pct: 83, abs: 2, pres: 10 },
                    { name: "شبكات الحاسب", pct: 75, abs: 4, pres: 9 }
                ]
            },
            {
                name: "Faculty of Engineering",
                courses: [
                    {
                        title: "محاضرة",
                        subtitle: "هندسة الإلكترونيات",
                        professor: "د. نورا الخطيب",
                        room: "قاعة C15",
                        files: [
                            { name: "أساسيات الدوائر الإلكترونية", type: "lecture", file: "electronics_basics.pdf" },
                            { name: "تجارب عملية", type: "exercise", file: "electronics_experiments.pdf" },
                            { name: "مشروع تصميم دائرة", type: "project", file: "electronics_project.pdf" }
                        ]
                    },
                    {
                        title: "محاضرة",
                        subtitle: "الهندسة المدنية - ميكانيكا التربة",
                        professor: "د. يوسف المنصوري",
                        room: "قاعة D22",
                        files: [
                            { name: "خواص التربة", type: "lecture", file: "soil_properties.pdf" },
                            { name: "تمارين تحليل تربة", type: "exercise", file: "soil_exercises.pdf" },
                            { name: "مشروع أساسات", type: "project", file: "soil_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "هندسة الإلكترونيات", place: "قاعة C15", time: "10:00 AM", type: "محاضرة", instructor: "د. نورا الخطيب" },
                    { name: "ميكانيكا التربة", place: "قاعة D22", time: "12:00 PM", type: "محاضرة", instructor: "د. يوسف المنصوري" }
                ],
                attendanceSummary: [
                    { name: "هندسة الإلكترونيات", pct: 90, abs: 1, pres: 15 },
                    { name: "ميكانيكا التربة", pct: 78, abs: 3, pres: 11 }
                ]
            },
            {
                name: "Faculty of Commerce",
                courses: [
                    {
                        title: "محاضرة",
                        subtitle: "المحاسبة المالية",
                        professor: "د. ليلى الشامي",
                        room: "قاعة 603",
                        files: [
                            { name: "مقدمة في المحاسبة", type: "lecture", file: "accounting_intro.pdf" },
                            { name: "تمارين دفتر الأستاذ", type: "exercise", file: "accounting_exercises.pdf" },
                            { name: "مشروع ميزانية", type: "project", file: "accounting_project.pdf" }
                        ]
                    },
                    {
                        title: "محاضرة",
                        subtitle: "إدارة الأعمال",
                        professor: "د. طارق البدوي",
                        room: "قاعة 708",
                        files: [
                            { name: "مبادئ الإدارة", type: "lecture", file: "management_basics.pdf" },
                            { name: "دراسات حالة", type: "exercise", file: "management_cases.pdf" },
                            { name: "مشروع خطة عمل", type: "project", file: "management_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "المحاسبة المالية", place: "قاعة 603", time: "9:00 AM", type: "محاضرة", instructor: "د. ليلى الشامي" },
                    { name: "إدارة الأعمال", place: "قاعة 708", time: "11:00 AM", type: "محاضرة", instructor: "د. طارق البدوي" }
                ],
                attendanceSummary: [
                    { name: "المحاسبة المالية", pct: 85, abs: 2, pres: 13 },
                    { name: "إدارة الأعمال", pct: 88, abs: 1, pres: 14 }
                ]
            },
            {
                name: "Faculty of Medicine",
                courses: [
                    {
                        title: "محاضرة",
                        subtitle: "علم التشريح",
                        professor: "د. رامي الحكيم",
                        room: "قاعة M33",
                        files: [
                            { name: "مقدمة في التشريح", type: "lecture", file: "anatomy_intro.pdf" },
                            { name: "تمارين تشريح عملي", type: "exercise", file: "anatomy_exercises.pdf" },
                            { name: "مشروع حالة سريرية", type: "project", file: "anatomy_case_project.pdf" }
                        ]
                    },
                    {
                        title: "محاضرة",
                        subtitle: "علم الأدوية",
                        professor: "د. سارة النجار",
                        room: "قاعة M44",
                        files: [
                            { name: "أساسيات علم الأدوية", type: "lecture", file: "pharmacology_basics.pdf" },
                            { name: "جداول أدوية", type: "exercise", file: "pharmacology_tables.pdf" },
                            { name: "مشروع دوائي", type: "project", file: "pharmacology_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "علم التشريح", place: "قاعة M33", time: "8:00 AM", type: "محاضرة", instructor: "د. رامي الحكيم" },
                    { name: "علم الأدوية", place: "قاعة M44", time: "10:00 AM", type: "محاضرة", instructor: "د. سارة النجار" }
                ],
                attendanceSummary: [
                    { name: "علم التشريح", pct: 82, abs: 3, pres: 14 },
                    { name: "علم الأدوية", pct: 76, abs: 4, pres: 12 }
                ]
            },
            {
                name: "Faculty of Science",
                courses: [
                    {
                        title: "محاضرة",
                        subtitle: "الكيمياء العضوية",
                        professor: "د. عمار الدوسري",
                        room: "قاعة S19",
                        files: [
                            { name: "مقدمة في الكيمياء العضوية", type: "lecture", file: "organic_intro.pdf" },
                            { name: "تمارين تفاعلات", type: "exercise", file: "organic_exercises.pdf" },
                            { name: "مشروع بحث كيميائي", type: "project", file: "organic_project.pdf" }
                        ]
                    },
                    {
                        title: "محاضرة",
                        subtitle: "الفيزياء النووية",
                        professor: "د. هدى القاسمي",
                        room: "قاعة S26",
                        files: [
                            { name: "مقدمة في الفيزياء النووية", type: "lecture", file: "nuclear_intro.pdf" },
                            { name: "تمارين حسابية", type: "exercise", file: "nuclear_exercises.pdf" },
                            { name: "مشروع طاقة نووية", type: "project", file: "nuclear_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "الكيمياء العضوية", place: "قاعة S19", time: "9:00 AM", type: "محاضرة", instructor: "د. عمار الدوسري" },
                    { name: "الفيزياء النووية", place: "قاعة S26", time: "11:00 AM", type: "محاضرة", instructor: "د. هدى القاسمي" }
                ],
                attendanceSummary: [
                    { name: "الكيمياء العضوية", pct: 88, abs: 2, pres: 15 },
                    { name: "الفيزياء النووية", pct: 79, abs: 3, pres: 11 }
                ]
            },
            {
                name: "Faculty of Arts",
                courses: [
                    {
                        title: "محاضرة",
                        subtitle: "الأدب العربي",
                        professor: "د. زياد الأسدي",
                        room: "قاعة L37",
                        files: [
                            { name: "مقدمة في الأدب العربي", type: "lecture", file: "arabic_lit_intro.pdf" },
                            { name: "نصوص تحليلية", type: "exercise", file: "arabic_lit_exercises.pdf" },
                            { name: "مشروع بحث أدبي", type: "project", file: "arabic_lit_project.pdf" }
                        ]
                    },
                    {
                        title: "محاضرة",
                        subtitle: "علم النفس",
                        professor: "د. رنا الكردي",
                        room: "قاعة L48",
                        files: [
                            { name: "مدخل إلى علم النفس", type: "lecture", file: "psychology_intro.pdf" },
                            { name: "اختبارات سيكولوجية", type: "exercise", file: "psychology_tests.pdf" },
                            { name: "مشروع حالة", type: "project", file: "psychology_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "الأدب العربي", place: "قاعة L37", time: "10:00 AM", type: "محاضرة", instructor: "د. زياد الأسدي" },
                    { name: "علم النفس", place: "قاعة L48", time: "12:00 PM", type: "محاضرة", instructor: "د. رنا الكردي" }
                ],
                attendanceSummary: [
                    { name: "الأدب العربي", pct: 92, abs: 1, pres: 16 },
                    { name: "علم النفس", pct: 85, abs: 2, pres: 14 }
                ]
            },
            {
                name: "Faculty of Law",
                courses: [
                    {
                        title: "محاضرة",
                        subtitle: "القانون الدستوري",
                        professor: "د. باسم الجابري",
                        room: "قاعة H14",
                        files: [
                            { name: "مبادئ القانون الدستوري", type: "lecture", file: "constitutional_intro.pdf" },
                            { name: "تمارين قوانين", type: "exercise", file: "constitutional_exercises.pdf" },
                            { name: "مشروع بحث قانوني", type: "project", file: "constitutional_project.pdf" }
                        ]
                    },
                    {
                        title: "محاضرة",
                        subtitle: "القانون الجنائي",
                        professor: "د. وليد الحمداني",
                        room: "قاعة H29",
                        files: [
                            { name: "مدخل القانون الجنائي", type: "lecture", file: "criminal_intro.pdf" },
                            { name: "قضايا تطبيقية", type: "exercise", file: "criminal_cases.pdf" },
                            { name: "مشروع قانوني", type: "project", file: "criminal_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "القانون الدستوري", place: "قاعة H14", time: "9:00 AM", type: "محاضرة", instructor: "د. باسم الجابري" },
                    { name: "القانون الجنائي", place: "قاعة H29", time: "11:00 AM", type: "محاضرة", instructor: "د. وليد الحمداني" }
                ],
                attendanceSummary: [
                    { name: "القانون الدستوري", pct: 87, abs: 2, pres: 13 },
                    { name: "القانون الجنائي", pct: 81, abs: 3, pres: 12 }
                ]
            },
            {
                name: "Faculty of Mass Communication",
                courses: [
                    {
                        title: "محاضرة",
                        subtitle: "الإعلام الرقمي",
                        professor: "د. مريم الفارسي",
                        room: "قاعة J16",
                        files: [
                            { name: "مقدمة في الإعلام الرقمي", type: "lecture", file: "digital_media_intro.pdf" },
                            { name: "دراسات حالة", type: "exercise", file: "digital_media_cases.pdf" },
                            { name: "مشروع حملة إعلامية", type: "project", file: "digital_media_project.pdf" }
                        ]
                    },
                    {
                        title: "محاضرة",
                        subtitle: "العلاقات العامة",
                        professor: "د. كريم الشاذلي",
                        room: "قاعة J23",
                        files: [
                            { name: "مقدمة العلاقات العامة", type: "lecture", file: "pr_intro.pdf" },
                            { name: "خطط حملات", type: "exercise", file: "pr_exercises.pdf" },
                            { name: "مشروع خطة علاقات", type: "project", file: "pr_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "الإعلام الرقمي", place: "قاعة J16", time: "10:00 AM", type: "محاضرة", instructor: "د. مريم الفارسي" },
                    { name: "العلاقات العامة", place: "قاعة J23", time: "12:00 PM", type: "محاضرة", instructor: "د. كريم الشاذلي" }
                ],
                attendanceSummary: [
                    { name: "الإعلام الرقمي", pct: 90, abs: 1, pres: 15 },
                    { name: "العلاقات العامة", pct: 86, abs: 2, pres: 13 }
                ]
            },
            {
                name: "Faculty of Agriculture",
                courses: [
                    {
                        title: "محاضرة",
                        subtitle: "علوم النبات",
                        professor: "د. إبراهيم الزعبي",
                        room: "قاعة Z11",
                        files: [
                            { name: "مقدمة علوم النبات", type: "lecture", file: "plant_intro.pdf" },
                            { name: "تجارب زراعية", type: "exercise", file: "plant_exercises.pdf" },
                            { name: "مشروع زراعي", type: "project", file: "plant_project.pdf" }
                        ]
                    },
                    {
                        title: "محاضرة",
                        subtitle: "علوم التربة",
                        professor: "د. نادية الطويل",
                        room: "قاعة Z18",
                        files: [
                            { name: "مقدمة علوم التربة", type: "lecture", file: "soil_intro.pdf" },
                            { name: "تجارب تحليل تربة", type: "exercise", file: "soil_experiments.pdf" },
                            { name: "مشروع زراعي", type: "project", file: "soil_project.pdf" }
                        ]
                    },
                    {
                        title: "محاضرة",
                        subtitle: "الإنتاج الحيواني",
                        professor: "د. سلمان الراشد",
                        room: "قاعة Z25",
                        files: [
                            { name: "أساسيات الإنتاج الحيواني", type: "lecture", file: "animal_production_basics.pdf" },
                            { name: "تمارين تربية الماشية", type: "exercise", file: "livestock_exercises.pdf" },
                            { name: "مشروع مزرعة", type: "project", file: "farm_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "علوم النبات", place: "قاعة Z11", time: "8:30 AM", type: "محاضرة", instructor: "د. إبراهيم الزعبي" },
                    { name: "علوم التربة", place: "قاعة Z18", time: "11:00 AM", type: "محاضرة", instructor: "د. نادية الطويل" },
                    { name: "الإنتاج الحيواني", place: "قاعة Z25", time: "1:00 PM", type: "محاضرة", instructor: "د. سلمان الراشد" }
                ],
                attendanceSummary: [
                    { name: "علوم النبات", pct: 84, abs: 2, pres: 12 },
                    { name: "علوم التربة", pct: 80, abs: 3, pres: 11 },
                    { name: "الإنتاج الحيواني", pct: 87, abs: 2, pres: 13 }
                ]
            },
            {
                name: "Faculty of Pharmacy",
                courses: [
                    {
                        title: "محاضرة",
                        subtitle: "الكيمياء الصيدلانية",
                        professor: "د. ريم الخالدي",
                        room: "قاعة P12",
                        files: [
                            { name: "مقدمة الكيمياء الصيدلانية", type: "lecture", file: "pharmaceutical_chemistry_intro.pdf" },
                            { name: "تمارين تحليل دوائي", type: "exercise", file: "drug_analysis_exercises.pdf" },
                            { name: "مشروع تطوير دواء", type: "project", file: "drug_development_project.pdf" }
                        ]
                    },
                    {
                        title: "محاضرة",
                        subtitle: "علم الأدوية السريري",
                        professor: "د. عماد البحيري",
                        room: "قاعة P18",
                        files: [
                            { name: "الأدوية السريرية", type: "lecture", file: "clinical_pharmacy.pdf" },
                            { name: "حالات سريرية", type: "exercise", file: "clinical_cases.pdf" },
                            { name: "مشروع صيدلة سريرية", type: "project", file: "clinical_pharmacy_project.pdf" }
                        ]
                    },
                    {
                        title: "محاضرة",
                        subtitle: "تكنولوجيا الصيدلة",
                        professor: "د. لينا الصباح",
                        room: "قاعة P24",
                        files: [
                            { name: "تقنيات صيدلانية", type: "lecture", file: "pharmaceutical_technology.pdf" },
                            { name: "تمارين تصنيع", type: "exercise", file: "manufacturing_exercises.pdf" },
                            { name: "مشروع تصنيع دوائي", type: "project", file: "pharmaceutical_manufacturing_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "الكيمياء الصيدلانية", place: "قاعة P12", time: "9:00 AM", type: "محاضرة", instructor: "د. ريم الخالدي" },
                    { name: "علم الأدوية السريري", place: "قاعة P18", time: "11:00 AM", type: "محاضرة", instructor: "د. عماد البحيري" },
                    { name: "تكنولوجيا الصيدلة", place: "معمل P24", time: "2:00 PM", type: "عملي", instructor: "د. لينا الصباح" }
                ],
                attendanceSummary: [
                    { name: "الكيمياء الصيدلانية", pct: 89, abs: 2, pres: 16 },
                    { name: "علم الأدوية السريري", pct: 91, abs: 1, pres: 17 },
                    { name: "تكنولوجيا الصيدلة", pct: 85, abs: 3, pres: 14 }
                ]
            },
            {
                name: "Faculty of Dentistry",
                courses: [
                    {
                        title: "محاضرة",
                        subtitle: "طب الأسنان التحفظي",
                        professor: "د. خالد المنصوري",
                        room: "قاعة D15",
                        files: [
                            { name: "مبادئ طب الأسنان التحفظي", type: "lecture", file: "conservative_dentistry.pdf" },
                            { name: "حالات سريرية", type: "exercise", file: "dental_clinical_cases.pdf" },
                            { name: "مشروع علاج تحفظي", type: "project", file: "conservative_treatment_project.pdf" }
                        ]
                    },
                    {
                        title: "محاضرة",
                        subtitle: "جراحة الفم والأسنان",
                        professor: "د. فاطمة الزهراء",
                        room: "قاعة D22",
                        files: [
                            { name: "أساسيات جراحة الفم", type: "lecture", file: "oral_surgery_basics.pdf" },
                            { name: "تقنيات جراحية", type: "exercise", file: "surgical_techniques.pdf" },
                            { name: "مشروع جراحي", type: "project", file: "oral_surgery_project.pdf" }
                        ]
                    },
                    {
                        title: "محاضرة",
                        subtitle: "تقويم الأسنان",
                        professor: "د. أحمد الشريف",
                        room: "قاعة D28",
                        files: [
                            { name: "مقدمة تقويم الأسنان", type: "lecture", file: "orthodontics_intro.pdf" },
                            { name: "خطط علاجية", type: "exercise", file: "orthodontic_treatment_plans.pdf" },
                            { name: "مشروع تقويم", type: "project", file: "orthodontics_project.pdf" }
                        ]
                    },
                    {
                        title: "محاضرة",
                        subtitle: "طب أسنان الأطفال",
                        professor: "د. نورا العتيبي",
                        room: "قاعة D35",
                        files: [
                            { name: "طب أسنان الأطفال", type: "lecture", file: "pediatric_dentistry.pdf" },
                            { name: "حالات أطفال", type: "exercise", file: "pediatric_cases.pdf" },
                            { name: "مشروع طب أطفال", type: "project", file: "pediatric_dentistry_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "طب الأسنان التحفظي", place: "قاعة D15", time: "8:00 AM", type: "محاضرة", instructor: "د. خالد المنصوري" },
                    { name: "جراحة الفم والأسنان", place: "قاعة D22", time: "10:00 AM", type: "محاضرة", instructor: "د. فاطمة الزهراء" },
                    { name: "تقويم الأسنان", place: "قاعة D28", time: "12:00 PM", type: "محاضرة", instructor: "د. أحمد الشريف" },
                    { name: "طب أسنان الأطفال", place: "قاعة D35", time: "2:00 PM", type: "محاضرة", instructor: "د. نورا العتيبي" }
                ],
                attendanceSummary: [
                    { name: "طب الأسنان التحفظي", pct: 88, abs: 2, pres: 15 },
                    { name: "جراحة الفم والأسنان", pct: 92, abs: 1, pres: 18 },
                    { name: "تقويم الأسنان", pct: 86, abs: 3, pres: 14 },
                    { name: "طب أسنان الأطفال", pct: 90, abs: 2, pres: 16 }
                ]
            },
            {
                name: "Faculty of Veterinary Medicine",
                courses: [
                    {
                        title: "محاضرة",
                        subtitle: "التشريح البيطري",
                        professor: "د. محمود الغامدي",
                        room: "قاعة V11",
                        files: [
                            { name: "تشريح الحيوانات", type: "lecture", file: "veterinary_anatomy.pdf" },
                            { name: "تمارين تشريحية", type: "exercise", file: "anatomy_exercises.pdf" },
                            { name: "مشروع تشريحي", type: "project", file: "veterinary_anatomy_project.pdf" }
                        ]
                    },
                    {
                        title: "محاضرة",
                        subtitle: "الطب الباطني البيطري",
                        professor: "د. سعاد الحربي",
                        room: "قاعة V17",
                        files: [
                            { name: "الأمراض الباطنية", type: "lecture", file: "veterinary_internal_medicine.pdf" },
                            { name: "تشخيص الأمراض", type: "exercise", file: "disease_diagnosis.pdf" },
                            { name: "مشروع طبي بيطري", type: "project", file: "veterinary_medicine_project.pdf" }
                        ]
                    },
                    {
                        title: "محاضرة",
                        subtitle: "الجراحة البيطرية",
                        professor: "د. عبد العزيز القحطاني",
                        room: "قاعة V23",
                        files: [
                            { name: "أساسيات الجراحة البيطرية", type: "lecture", file: "veterinary_surgery.pdf" },
                            { name: "تقنيات جراحية", type: "exercise", file: "surgical_techniques_vet.pdf" },
                            { name: "مشروع جراحي بيطري", type: "project", file: "veterinary_surgery_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "التشريح البيطري", place: "قاعة V11", time: "9:00 AM", type: "محاضرة", instructor: "د. محمود الغامدي" },
                    { name: "الطب الباطني البيطري", place: "قاعة V17", time: "11:00 AM", type: "محاضرة", instructor: "د. سعاد الحربي" },
                    { name: "الجراحة البيطرية", place: "معمل V23", time: "1:00 PM", type: "عملي", instructor: "د. عبد العزيز القحطاني" }
                ],
                attendanceSummary: [
                    { name: "التشريح البيطري", pct: 83, abs: 3, pres: 14 },
                    { name: "الطب الباطني البيطري", pct: 87, abs: 2, pres: 15 },
                    { name: "الجراحة البيطرية", pct: 89, abs: 2, pres: 16 }
                ]
            },
            {
                name: "Faculty of Education",
                courses: [
                    {
                        title: "محاضرة",
                        subtitle: "علم النفس التربوي",
                        professor: "د. هند الأحمدي",
                        room: "قاعة E14",
                        files: [
                            { name: "مقدمة علم النفس التربوي", type: "lecture", file: "educational_psychology.pdf" },
                            { name: "نظريات التعلم", type: "exercise", file: "learning_theories.pdf" },
                            { name: "مشروع بحث تربوي", type: "project", file: "educational_research_project.pdf" }
                        ]
                    },
                    {
                        title: "محاضرة",
                        subtitle: "طرق التدريس",
                        professor: "د. يوسف الدوسري",
                        room: "قاعة E21",
                        files: [
                            { name: "استراتيجيات التدريس", type: "lecture", file: "teaching_strategies.pdf" },
                            { name: "تطبيقات عملية", type: "exercise", file: "teaching_applications.pdf" },
                            { name: "مشروع تدريسي", type: "project", file: "teaching_project.pdf" }
                        ]
                    },
                    {
                        title: "محاضرة",
                        subtitle: "تكنولوجيا التعليم",
                        professor: "د. مريم الشهري",
                        room: "قاعة E27",
                        files: [
                            { name: "تقنيات التعليم الحديثة", type: "lecture", file: "educational_technology.pdf" },
                            { name: "أدوات رقمية", type: "exercise", file: "digital_tools.pdf" },
                            { name: "مشروع تقني تعليمي", type: "project", file: "educational_tech_project.pdf" }
                        ]
                    }
                ],
                schedule: [
                    { name: "علم النفس التربوي", place: "قاعة E14", time: "8:00 AM", type: "محاضرة", instructor: "د. هند الأحمدي" },
                    { name: "طرق التدريس", place: "قاعة E21", time: "10:00 AM", type: "محاضرة", instructor: "د. يوسف الدوسري" },
                    { name: "تكنولوجيا التعليم", place: "معمل E27", time: "12:00 PM", type: "عملي", instructor: "د. مريم الشهري" }
                ],
                attendanceSummary: [
                    { name: "علم النفس التربوي", pct: 91, abs: 1, pres: 17 },
                    { name: "طرق التدريس", pct: 88, abs: 2, pres: 15 },
                    { name: "تكنولوجيا التعليم", pct: 85, abs: 3, pres: 14 }
                ]
            }
        ]
    },
    {
        university: "Cairo National University",
        faculties: [
            {
                name: "Faculty of Computers and Artificial Intelligence",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "هياكل البيانات", place: "قاعة 101", time: "9:00 AM", type: "محاضرة", instructor: "د. خالد حسني" },
                    { name: "الخوارزميات", place: "قاعة 102", time: "11:00 AM", type: "محاضرة", instructor: "د. نادر فهمي" },
                    { name: "شبكات الحاسب", place: "معمل 205", time: "1:00 PM", type: "عملي", instructor: "د. أحمد مراد" }
                ],
                attendanceSummary: [
                    { name: "هياكل البيانات", pct: 80, abs: 3, pres: 12 },
                    { name: "الخوارزميات", pct: 83, abs: 2, pres: 10 },
                    { name: "شبكات الحاسب", pct: 75, abs: 4, pres: 9 }
                ]
            },
            {
                name: "Faculty of Engineering",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "هندسة الإلكترونيات", place: "قاعة A12", time: "10:00 AM", type: "محاضرة", instructor: "د. منى عبد العزيز" },
                    { name: "ميكانيكا التربة", place: "قاعة B07", time: "12:00 PM", type: "محاضرة", instructor: "د. محمد الطيب" }
                ],
                attendanceSummary: [
                    { name: "هندسة الإلكترونيات", pct: 90, abs: 1, pres: 15 },
                    { name: "ميكانيكا التربة", pct: 78, abs: 3, pres: 11 }
                ]
            },
            {
                name: "Faculty of Commerce",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "المحاسبة المالية", place: "قاعة 301", time: "9:00 AM", type: "محاضرة", instructor: "د. سعاد مصطفى" },
                    { name: "إدارة الأعمال", place: "قاعة 305", time: "11:00 AM", type: "محاضرة", instructor: "د. ياسر حسن" }
                ],
                attendanceSummary: [
                    { name: "المحاسبة المالية", pct: 85, abs: 2, pres: 13 },
                    { name: "إدارة الأعمال", pct: 88, abs: 1, pres: 14 }
                ]
            },
            {
                name: "Faculty of Medicine",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "علم التشريح", place: "قاعة M01", time: "8:00 AM", type: "محاضرة", instructor: "د. محمود عادل" },
                    { name: "علم الأدوية", place: "قاعة M05", time: "10:00 AM", type: "محاضرة", instructor: "د. منى حسين" }
                ],
                attendanceSummary: [
                    { name: "علم التشريح", pct: 82, abs: 3, pres: 14 },
                    { name: "علم الأدوية", pct: 76, abs: 4, pres: 12 }
                ]
            },
            {
                name: "Faculty of Science",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الكيمياء العضوية", place: "قاعة S10", time: "9:00 AM", type: "محاضرة", instructor: "د. حسن إبراهيم" },
                    { name: "الفيزياء النووية", place: "قاعة S15", time: "11:00 AM", type: "محاضرة", instructor: "د. صفاء نجيب" }
                ],
                attendanceSummary: [
                    { name: "الكيمياء العضوية", pct: 88, abs: 2, pres: 15 },
                    { name: "الفيزياء النووية", pct: 79, abs: 3, pres: 11 }
                ]
            },
            {
                name: "Faculty of Arts",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الأدب العربي", place: "قاعة L20", time: "10:00 AM", type: "محاضرة", instructor: "د. عادل مصطفى" },
                    { name: "علم النفس", place: "قاعة L25", time: "12:00 PM", type: "محاضرة", instructor: "د. هالة فكري" }
                ],
                attendanceSummary: [
                    { name: "الأدب العربي", pct: 92, abs: 1, pres: 16 },
                    { name: "علم النفس", pct: 85, abs: 2, pres: 14 }
                ]
            },
            {
                name: "Faculty of Law",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "القانون الدستوري", place: "قاعة H01", time: "9:00 AM", type: "محاضرة", instructor: "د. عمرو سالم" },
                    { name: "القانون الجنائي", place: "قاعة H05", time: "11:00 AM", type: "محاضرة", instructor: "د. أحمد عبد الله" }
                ],
                attendanceSummary: [
                    { name: "القانون الدستوري", pct: 87, abs: 2, pres: 13 },
                    { name: "القانون الجنائي", pct: 81, abs: 3, pres: 12 }
                ]
            },
            {
                name: "Faculty of Mass Communication",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الإعلام الرقمي", place: "قاعة J12", time: "10:00 AM", type: "محاضرة", instructor: "د. ليلى فوزي" },
                    { name: "العلاقات العامة", place: "قاعة J18", time: "12:00 PM", type: "محاضرة", instructor: "د. حسين كامل" }
                ],
                attendanceSummary: [
                    { name: "الإعلام الرقمي", pct: 90, abs: 1, pres: 15 },
                    { name: "العلاقات العامة", pct: 86, abs: 2, pres: 13 }
                ]
            },
            {
                name: "Faculty of Agriculture",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "علوم النبات", place: "قاعة Z01", time: "8:30 AM", type: "محاضرة", instructor: "د. سامي حسن" },
                    { name: "علوم التربة", place: "قاعة Z05", time: "11:00 AM", type: "محاضرة", instructor: "د. أحمد عوض" }
                ],
                attendanceSummary: [
                    { name: "علوم النبات", pct: 84, abs: 2, pres: 12 },
                    { name: "علوم التربة", pct: 80, abs: 3, pres: 11 }
                ]
            }
        ]
    },
    {
        university: "Ain Shams University",
        faculties: [
            {
                name: "Faculty of Computers and Artificial Intelligence",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "هياكل البيانات", place: "قاعة 101", time: "9:00 AM", type: "محاضرة", instructor: "د. خالد حسني" },
                    { name: "الخوارزميات", place: "قاعة 102", time: "11:00 AM", type: "محاضرة", instructor: "د. نادر فهمي" },
                    { name: "شبكات الحاسب", place: "معمل 205", time: "1:00 PM", type: "عملي", instructor: "د. أحمد مراد" }
                ],
                attendanceSummary: [
                    { name: "هياكل البيانات", pct: 80, abs: 3, pres: 12 },
                    { name: "الخوارزميات", pct: 83, abs: 2, pres: 10 },
                    { name: "شبكات الحاسب", pct: 75, abs: 4, pres: 9 }
                ]
            },
            {
                name: "Faculty of Engineering",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "هندسة الإلكترونيات", place: "قاعة A12", time: "10:00 AM", type: "محاضرة", instructor: "د. منى عبد العزيز" },
                    { name: "ميكانيكا التربة", place: "قاعة B07", time: "12:00 PM", type: "محاضرة", instructor: "د. محمد الطيب" }
                ],
                attendanceSummary: [
                    { name: "هندسة الإلكترونيات", pct: 90, abs: 1, pres: 15 },
                    { name: "ميكانيكا التربة", pct: 78, abs: 3, pres: 11 }
                ]
            },
            {
                name: "Faculty of Commerce",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "المحاسبة المالية", place: "قاعة 301", time: "9:00 AM", type: "محاضرة", instructor: "د. سعاد مصطفى" },
                    { name: "إدارة الأعمال", place: "قاعة 305", time: "11:00 AM", type: "محاضرة", instructor: "د. ياسر حسن" }
                ],
                attendanceSummary: [
                    { name: "المحاسبة المالية", pct: 85, abs: 2, pres: 13 },
                    { name: "إدارة الأعمال", pct: 88, abs: 1, pres: 14 }
                ]
            },
            {
                name: "Faculty of Medicine",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "علم التشريح", place: "قاعة M01", time: "8:00 AM", type: "محاضرة", instructor: "د. محمود عادل" },
                    { name: "علم الأدوية", place: "قاعة M05", time: "10:00 AM", type: "محاضرة", instructor: "د. منى حسين" }
                ],
                attendanceSummary: [
                    { name: "علم التشريح", pct: 82, abs: 3, pres: 14 },
                    { name: "علم الأدوية", pct: 76, abs: 4, pres: 12 }
                ]
            },
            {
                name: "Faculty of Science",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الكيمياء العضوية", place: "قاعة S10", time: "9:00 AM", type: "محاضرة", instructor: "د. حسن إبراهيم" },
                    { name: "الفيزياء النووية", place: "قاعة S15", time: "11:00 AM", type: "محاضرة", instructor: "د. صفاء نجيب" }
                ],
                attendanceSummary: [
                    { name: "الكيمياء العضوية", pct: 88, abs: 2, pres: 15 },
                    { name: "الفيزياء النووية", pct: 79, abs: 3, pres: 11 }
                ]
            },
            {
                name: "Faculty of Arts",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الأدب العربي", place: "قاعة L20", time: "10:00 AM", type: "محاضرة", instructor: "د. عادل مصطفى" },
                    { name: "علم النفس", place: "قاعة L25", time: "12:00 PM", type: "محاضرة", instructor: "د. هالة فكري" }
                ],
                attendanceSummary: [
                    { name: "الأدب العربي", pct: 92, abs: 1, pres: 16 },
                    { name: "علم النفس", pct: 85, abs: 2, pres: 14 }
                ]
            },
            {
                name: "Faculty of Law",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "القانون الدستوري", place: "قاعة H01", time: "9:00 AM", type: "محاضرة", instructor: "د. عمرو سالم" },
                    { name: "القانون الجنائي", place: "قاعة H05", time: "11:00 AM", type: "محاضرة", instructor: "د. أحمد عبد الله" }
                ],
                attendanceSummary: [
                    { name: "القانون الدستوري", pct: 87, abs: 2, pres: 13 },
                    { name: "القانون الجنائي", pct: 81, abs: 3, pres: 12 }
                ]
            },
            {
                name: "Faculty of Mass Communication",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الإعلام الرقمي", place: "قاعة J12", time: "10:00 AM", type: "محاضرة", instructor: "د. ليلى فوزي" },
                    { name: "العلاقات العامة", place: "قاعة J18", time: "12:00 PM", type: "محاضرة", instructor: "د. حسين كامل" }
                ],
                attendanceSummary: [
                    { name: "الإعلام الرقمي", pct: 90, abs: 1, pres: 15 },
                    { name: "العلاقات العامة", pct: 86, abs: 2, pres: 13 }
                ]
            },
            {
                name: "Faculty of Agriculture",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "علوم النبات", place: "قاعة Z01", time: "8:30 AM", type: "محاضرة", instructor: "د. سامي حسن" },
                    { name: "علوم التربة", place: "قاعة Z05", time: "11:00 AM", type: "محاضرة", instructor: "د. أحمد عوض" }
                ],
                attendanceSummary: [
                    { name: "علوم النبات", pct: 84, abs: 2, pres: 12 },
                    { name: "علوم التربة", pct: 80, abs: 3, pres: 11 }
                ]
            }
        ]
    },
    {
        university: "Alexandria University",
        faculties: [
            {
                name: "Faculty of Computers and Artificial Intelligence",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "هياكل البيانات", place: "قاعة 101", time: "9:00 AM", type: "محاضرة", instructor: "د. خالد حسني" },
                    { name: "الخوارزميات", place: "قاعة 102", time: "11:00 AM", type: "محاضرة", instructor: "د. نادر فهمي" },
                    { name: "شبكات الحاسب", place: "معمل 205", time: "1:00 PM", type: "عملي", instructor: "د. أحمد مراد" }
                ],
                attendanceSummary: [
                    { name: "هياكل البيانات", pct: 80, abs: 3, pres: 12 },
                    { name: "الخوارزميات", pct: 83, abs: 2, pres: 10 },
                    { name: "شبكات الحاسب", pct: 75, abs: 4, pres: 9 }
                ]
            },
            {
                name: "Faculty of Engineering",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "هندسة الإلكترونيات", place: "قاعة A12", time: "10:00 AM", type: "محاضرة", instructor: "د. منى عبد العزيز" },
                    { name: "ميكانيكا التربة", place: "قاعة B07", time: "12:00 PM", type: "محاضرة", instructor: "د. محمد الطيب" }
                ],
                attendanceSummary: [
                    { name: "هندسة الإلكترونيات", pct: 90, abs: 1, pres: 15 },
                    { name: "ميكانيكا التربة", pct: 78, abs: 3, pres: 11 }
                ]
            },
            {
                name: "Faculty of Business",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "المحاسبة المالية", place: "قاعة 301", time: "9:00 AM", type: "محاضرة", instructor: "د. سعاد مصطفى" },
                    { name: "إدارة الأعمال", place: "قاعة 305", time: "11:00 AM", type: "محاضرة", instructor: "د. ياسر حسن" }
                ],
                attendanceSummary: [
                    { name: "المحاسبة المالية", pct: 85, abs: 2, pres: 13 },
                    { name: "إدارة الأعمال", pct: 88, abs: 1, pres: 14 }
                ]
            },
            {
                name: "Faculty of Medicine",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "علم التشريح", place: "قاعة M01", time: "8:00 AM", type: "محاضرة", instructor: "د. محمود عادل" },
                    { name: "علم الأدوية", place: "قاعة M05", time: "10:00 AM", type: "محاضرة", instructor: "د. منى حسين" }
                ],
                attendanceSummary: [
                    { name: "علم التشريح", pct: 82, abs: 3, pres: 14 },
                    { name: "علم الأدوية", pct: 76, abs: 4, pres: 12 }
                ]
            },
            {
                name: "Faculty of Science",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الكيمياء العضوية", place: "قاعة S10", time: "9:00 AM", type: "محاضرة", instructor: "د. حسن إبراهيم" },
                    { name: "الفيزياء النووية", place: "قاعة S15", time: "11:00 AM", type: "محاضرة", instructor: "د. صفاء نجيب" }
                ],
                attendanceSummary: [
                    { name: "الكيمياء العضوية", pct: 88, abs: 2, pres: 15 },
                    { name: "الفيزياء النووية", pct: 79, abs: 3, pres: 11 }
                ]
            },
            {
                name: "Faculty of Arts",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الأدب العربي", place: "قاعة L20", time: "10:00 AM", type: "محاضرة", instructor: "د. عادل مصطفى" },
                    { name: "علم النفس", place: "قاعة L25", time: "12:00 PM", type: "محاضرة", instructor: "د. هالة فكري" }
                ],
                attendanceSummary: [
                    { name: "الأدب العربي", pct: 92, abs: 1, pres: 16 },
                    { name: "علم النفس", pct: 85, abs: 2, pres: 14 }
                ]
            },
            {
                name: "Faculty of Law",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "القانون الدستوري", place: "قاعة H01", time: "9:00 AM", type: "محاضرة", instructor: "د. عمرو سالم" },
                    { name: "القانون الجنائي", place: "قاعة H05", time: "11:00 AM", type: "محاضرة", instructor: "د. أحمد عبد الله" }
                ],
                attendanceSummary: [
                    { name: "القانون الدستوري", pct: 87, abs: 2, pres: 13 },
                    { name: "القانون الجنائي", pct: 81, abs: 3, pres: 12 }
                ]
            },
            {
                name: "Faculty of Mass Communication",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الإعلام الرقمي", place: "قاعة J12", time: "10:00 AM", type: "محاضرة", instructor: "د. ليلى فوزي" },
                    { name: "العلاقات العامة", place: "قاعة J18", time: "12:00 PM", type: "محاضرة", instructor: "د. حسين كامل" }
                ],
                attendanceSummary: [
                    { name: "الإعلام الرقمي", pct: 90, abs: 1, pres: 15 },
                    { name: "العلاقات العامة", pct: 86, abs: 2, pres: 13 }
                ]
            },
            {
                name: "Faculty of Agriculture",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "علوم النبات", place: "قاعة Z01", time: "8:30 AM", type: "محاضرة", instructor: "د. سامي حسن" },
                    { name: "علوم التربة", place: "قاعة Z05", time: "11:00 AM", type: "محاضرة", instructor: "د. أحمد عوض" }
                ],
                attendanceSummary: [
                    { name: "علوم النبات", pct: 84, abs: 2, pres: 12 },
                    { name: "علوم التربة", pct: 80, abs: 3, pres: 11 }
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
                            { name: "مقدمة عن هياكل البيانات", type: "lecture", file: "data_structures_intro.pdf" },
                            { name: "تمارين الفصل الأول", type: "exercise", file: "data_structures_ch1.pdf" },
                            { name: "مشروع تطبيقي", type: "project", file: "data_structures_project.pdf" }
                        ]
                    },
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "هياكل البيانات", place: "قاعة 101", time: "9:00 AM", type: "محاضرة", instructor: "د. خالد حسني" },
                    { name: "الخوارزميات", place: "قاعة 102", time: "11:00 AM", type: "محاضرة", instructor: "د. نادر فهمي" },
                    { name: "شبكات الحاسب", place: "معمل 205", time: "1:00 PM", type: "عملي", instructor: "د. أحمد مراد" }
                ],
                attendanceSummary: [
                    { name: "هياكل البيانات", pct: 80, abs: 3, pres: 12 },
                    { name: "الخوارزميات", pct: 83, abs: 2, pres: 10 },
                    { name: "شبكات الحاسب", pct: 75, abs: 4, pres: 9 }
                ]
            },
            {
                name: "Faculty of Engineering",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "هندسة الإلكترونيات", place: "قاعة A12", time: "10:00 AM", type: "محاضرة", instructor: "د. منى عبد العزيز" },
                    { name: "ميكانيكا التربة", place: "قاعة B07", time: "12:00 PM", type: "محاضرة", instructor: "د. محمد الطيب" }
                ],
                attendanceSummary: [
                    { name: "هندسة الإلكترونيات", pct: 90, abs: 1, pres: 15 },
                    { name: "ميكانيكا التربة", pct: 78, abs: 3, pres: 11 }
                ]
            },
            {
                name: "Faculty of Commerce",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "المحاسبة المالية", place: "قاعة 301", time: "9:00 AM", type: "محاضرة", instructor: "د. سعاد مصطفى" },
                    { name: "إدارة الأعمال", place: "قاعة 305", time: "11:00 AM", type: "محاضرة", instructor: "د. ياسر حسن" }
                ],
                attendanceSummary: [
                    { name: "المحاسبة المالية", pct: 85, abs: 2, pres: 13 },
                    { name: "إدارة الأعمال", pct: 88, abs: 1, pres: 14 }
                ]
            },
            {
                name: "Faculty of Medicine",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "علم التشريح", place: "قاعة M01", time: "8:00 AM", type: "محاضرة", instructor: "د. محمود عادل" },
                    { name: "علم الأدوية", place: "قاعة M05", time: "10:00 AM", type: "محاضرة", instructor: "د. منى حسين" }
                ],
                attendanceSummary: [
                    { name: "علم التشريح", pct: 82, abs: 3, pres: 14 },
                    { name: "علم الأدوية", pct: 76, abs: 4, pres: 12 }
                ]
            },
            {
                name: "Faculty of Science",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الكيمياء العضوية", place: "قاعة S10", time: "9:00 AM", type: "محاضرة", instructor: "د. حسن إبراهيم" },
                    { name: "الفيزياء النووية", place: "قاعة S15", time: "11:00 AM", type: "محاضرة", instructor: "د. صفاء نجيب" }
                ],
                attendanceSummary: [
                    { name: "الكيمياء العضوية", pct: 88, abs: 2, pres: 15 },
                    { name: "الفيزياء النووية", pct: 79, abs: 3, pres: 11 }
                ]
            },
            {
                name: "Faculty of Arts",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الأدب العربي", place: "قاعة L20", time: "10:00 AM", type: "محاضرة", instructor: "د. عادل مصطفى" },
                    { name: "علم النفس", place: "قاعة L25", time: "12:00 PM", type: "محاضرة", instructor: "د. هالة فكري" }
                ],
                attendanceSummary: [
                    { name: "الأدب العربي", pct: 92, abs: 1, pres: 16 },
                    { name: "علم النفس", pct: 85, abs: 2, pres: 14 }
                ]
            },
            {
                name: "Faculty of Law",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "القانون الدستوري", place: "قاعة H01", time: "9:00 AM", type: "محاضرة", instructor: "د. عمرو سالم" },
                    { name: "القانون الجنائي", place: "قاعة H05", time: "11:00 AM", type: "محاضرة", instructor: "د. أحمد عبد الله" }
                ],
                attendanceSummary: [
                    { name: "القانون الدستوري", pct: 87, abs: 2, pres: 13 },
                    { name: "القانون الجنائي", pct: 81, abs: 3, pres: 12 }
                ]
            },
            {
                name: "Faculty of Mass Communication",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الإعلام الرقمي", place: "قاعة J12", time: "10:00 AM", type: "محاضرة", instructor: "د. ليلى فوزي" },
                    { name: "العلاقات العامة", place: "قاعة J18", time: "12:00 PM", type: "محاضرة", instructor: "د. حسين كامل" }
                ],
                attendanceSummary: [
                    { name: "الإعلام الرقمي", pct: 90, abs: 1, pres: 15 },
                    { name: "العلاقات العامة", pct: 86, abs: 2, pres: 13 }
                ]
            },
            {
                name: "Faculty of Agriculture",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "علوم النبات", place: "قاعة Z01", time: "8:30 AM", type: "محاضرة", instructor: "د. سامي حسن" },
                    { name: "علوم التربة", place: "قاعة Z05", time: "11:00 AM", type: "محاضرة", instructor: "د. أحمد عوض" }
                ],
                attendanceSummary: [
                    { name: "علوم النبات", pct: 84, abs: 2, pres: 12 },
                    { name: "علوم التربة", pct: 80, abs: 3, pres: 11 }
                ]
            }
        ]
    },
    {
        university: "Mansoura University",
        faculties: [
            {
                name: "Faculty of Computers and Artificial Intelligence",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "هياكل البيانات", place: "قاعة 101", time: "9:00 AM", type: "محاضرة", instructor: "د. خالد حسني" },
                    { name: "الخوارزميات", place: "قاعة 102", time: "11:00 AM", type: "محاضرة", instructor: "د. نادر فهمي" },
                    { name: "شبكات الحاسب", place: "معمل 205", time: "1:00 PM", type: "عملي", instructor: "د. أحمد مراد" }
                ],
                attendanceSummary: [
                    { name: "هياكل البيانات", pct: 80, abs: 3, pres: 12 },
                    { name: "الخوارزميات", pct: 83, abs: 2, pres: 10 },
                    { name: "شبكات الحاسب", pct: 75, abs: 4, pres: 9 }
                ]
            },
            {
                name: "Faculty of Engineering",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "هندسة الإلكترونيات", place: "قاعة A12", time: "10:00 AM", type: "محاضرة", instructor: "د. منى عبد العزيز" },
                    { name: "ميكانيكا التربة", place: "قاعة B07", time: "12:00 PM", type: "محاضرة", instructor: "د. محمد الطيب" }
                ],
                attendanceSummary: [
                    { name: "هندسة الإلكترونيات", pct: 90, abs: 1, pres: 15 },
                    { name: "ميكانيكا التربة", pct: 78, abs: 3, pres: 11 }
                ]
            },
            {
                name: "Faculty of Commerce",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "المحاسبة المالية", place: "قاعة 301", time: "9:00 AM", type: "محاضرة", instructor: "د. سعاد مصطفى" },
                    { name: "إدارة الأعمال", place: "قاعة 305", time: "11:00 AM", type: "محاضرة", instructor: "د. ياسر حسن" }
                ],
                attendanceSummary: [
                    { name: "المحاسبة المالية", pct: 85, abs: 2, pres: 13 },
                    { name: "إدارة الأعمال", pct: 88, abs: 1, pres: 14 }
                ]
            },
            {
                name: "Faculty of Medicine",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "علم التشريح", place: "قاعة M01", time: "8:00 AM", type: "محاضرة", instructor: "د. محمود عادل" },
                    { name: "علم الأدوية", place: "قاعة M05", time: "10:00 AM", type: "محاضرة", instructor: "د. منى حسين" }
                ],
                attendanceSummary: [
                    { name: "علم التشريح", pct: 82, abs: 3, pres: 14 },
                    { name: "علم الأدوية", pct: 76, abs: 4, pres: 12 }
                ]
            },
            {
                name: "Faculty of Science",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الكيمياء العضوية", place: "قاعة S10", time: "9:00 AM", type: "محاضرة", instructor: "د. حسن إبراهيم" },
                    { name: "الفيزياء النووية", place: "قاعة S15", time: "11:00 AM", type: "محاضرة", instructor: "د. صفاء نجيب" }
                ],
                attendanceSummary: [
                    { name: "الكيمياء العضوية", pct: 88, abs: 2, pres: 15 },
                    { name: "الفيزياء النووية", pct: 79, abs: 3, pres: 11 }
                ]
            },
            {
                name: "Faculty of Arts",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الأدب العربي", place: "قاعة L20", time: "10:00 AM", type: "محاضرة", instructor: "د. عادل مصطفى" },
                    { name: "علم النفس", place: "قاعة L25", time: "12:00 PM", type: "محاضرة", instructor: "د. هالة فكري" }
                ],
                attendanceSummary: [
                    { name: "الأدب العربي", pct: 92, abs: 1, pres: 16 },
                    { name: "علم النفس", pct: 85, abs: 2, pres: 14 }
                ]
            },
            {
                name: "Faculty of Law",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "القانون الدستوري", place: "قاعة H01", time: "9:00 AM", type: "محاضرة", instructor: "د. عمرو سالم" },
                    { name: "القانون الجنائي", place: "قاعة H05", time: "11:00 AM", type: "محاضرة", instructor: "د. أحمد عبد الله" }
                ],
                attendanceSummary: [
                    { name: "القانون الدستوري", pct: 87, abs: 2, pres: 13 },
                    { name: "القانون الجنائي", pct: 81, abs: 3, pres: 12 }
                ]
            },
            {
                name: "Faculty of Mass Communication",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الإعلام الرقمي", place: "قاعة J12", time: "10:00 AM", type: "محاضرة", instructor: "د. ليلى فوزي" },
                    { name: "العلاقات العامة", place: "قاعة J18", time: "12:00 PM", type: "محاضرة", instructor: "د. حسين كامل" }
                ],
                attendanceSummary: [
                    { name: "الإعلام الرقمي", pct: 90, abs: 1, pres: 15 },
                    { name: "العلاقات العامة", pct: 86, abs: 2, pres: 13 }
                ]
            },
            {
                name: "Faculty of Agriculture",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "علوم النبات", place: "قاعة Z01", time: "8:30 AM", type: "محاضرة", instructor: "د. سامي حسن" },
                    { name: "علوم التربة", place: "قاعة Z05", time: "11:00 AM", type: "محاضرة", instructor: "د. أحمد عوض" }
                ],
                attendanceSummary: [
                    { name: "علوم النبات", pct: 84, abs: 2, pres: 12 },
                    { name: "علوم التربة", pct: 80, abs: 3, pres: 11 }
                ]
            }
        ]
    },
    {
        university: "Suez Canal University",
        faculties: [
            {
                name: "Faculty of Computers and Artificial Intelligence",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "هياكل البيانات", place: "قاعة 101", time: "9:00 AM", type: "محاضرة", instructor: "د. خالد حسني" },
                    { name: "الخوارزميات", place: "قاعة 102", time: "11:00 AM", type: "محاضرة", instructor: "د. نادر فهمي" },
                    { name: "شبكات الحاسب", place: "معمل 205", time: "1:00 PM", type: "عملي", instructor: "د. أحمد مراد" }
                ],
                attendanceSummary: [
                    { name: "هياكل البيانات", pct: 80, abs: 3, pres: 12 },
                    { name: "الخوارزميات", pct: 83, abs: 2, pres: 10 },
                    { name: "شبكات الحاسب", pct: 75, abs: 4, pres: 9 }
                ]
            },
            {
                name: "Faculty of Engineering",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "هندسة الإلكترونيات", place: "قاعة A12", time: "10:00 AM", type: "محاضرة", instructor: "د. منى عبد العزيز" },
                    { name: "ميكانيكا التربة", place: "قاعة B07", time: "12:00 PM", type: "محاضرة", instructor: "د. محمد الطيب" }
                ],
                attendanceSummary: [
                    { name: "هندسة الإلكترونيات", pct: 90, abs: 1, pres: 15 },
                    { name: "ميكانيكا التربة", pct: 78, abs: 3, pres: 11 }
                ]
            },
            {
                name: "Faculty of Commerce",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "المحاسبة المالية", place: "قاعة 301", time: "9:00 AM", type: "محاضرة", instructor: "د. سعاد مصطفى" },
                    { name: "إدارة الأعمال", place: "قاعة 305", time: "11:00 AM", type: "محاضرة", instructor: "د. ياسر حسن" }
                ],
                attendanceSummary: [
                    { name: "المحاسبة المالية", pct: 85, abs: 2, pres: 13 },
                    { name: "إدارة الأعمال", pct: 88, abs: 1, pres: 14 }
                ]
            },
            {
                name: "Faculty of Medicine",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "علم التشريح", place: "قاعة M01", time: "8:00 AM", type: "محاضرة", instructor: "د. محمود عادل" },
                    { name: "علم الأدوية", place: "قاعة M05", time: "10:00 AM", type: "محاضرة", instructor: "د. منى حسين" }
                ],
                attendanceSummary: [
                    { name: "علم التشريح", pct: 82, abs: 3, pres: 14 },
                    { name: "علم الأدوية", pct: 76, abs: 4, pres: 12 }
                ]
            },
            {
                name: "Faculty of Science",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الكيمياء العضوية", place: "قاعة S10", time: "9:00 AM", type: "محاضرة", instructor: "د. حسن إبراهيم" },
                    { name: "الفيزياء النووية", place: "قاعة S15", time: "11:00 AM", type: "محاضرة", instructor: "د. صفاء نجيب" }
                ],
                attendanceSummary: [
                    { name: "الكيمياء العضوية", pct: 88, abs: 2, pres: 15 },
                    { name: "الفيزياء النووية", pct: 79, abs: 3, pres: 11 }
                ]
            },
            {
                name: "Faculty of Arts",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الأدب العربي", place: "قاعة L20", time: "10:00 AM", type: "محاضرة", instructor: "د. عادل مصطفى" },
                    { name: "علم النفس", place: "قاعة L25", time: "12:00 PM", type: "محاضرة", instructor: "د. هالة فكري" }
                ],
                attendanceSummary: [
                    { name: "الأدب العربي", pct: 92, abs: 1, pres: 16 },
                    { name: "علم النفس", pct: 85, abs: 2, pres: 14 }
                ]
            },
            {
                name: "Faculty of Law",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "القانون الدستوري", place: "قاعة H01", time: "9:00 AM", type: "محاضرة", instructor: "د. عمرو سالم" },
                    { name: "القانون الجنائي", place: "قاعة H05", time: "11:00 AM", type: "محاضرة", instructor: "د. أحمد عبد الله" }
                ],
                attendanceSummary: [
                    { name: "القانون الدستوري", pct: 87, abs: 2, pres: 13 },
                    { name: "القانون الجنائي", pct: 81, abs: 3, pres: 12 }
                ]
            },
            {
                name: "Faculty of Mass Communication",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الإعلام الرقمي", place: "قاعة J12", time: "10:00 AM", type: "محاضرة", instructor: "د. ليلى فوزي" },
                    { name: "العلاقات العامة", place: "قاعة J18", time: "12:00 PM", type: "محاضرة", instructor: "د. حسين كامل" }
                ],
                attendanceSummary: [
                    { name: "الإعلام الرقمي", pct: 90, abs: 1, pres: 15 },
                    { name: "العلاقات العامة", pct: 86, abs: 2, pres: 13 }
                ]
            },
            {
                name: "Faculty of Agriculture",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "علوم النبات", place: "قاعة Z01", time: "8:30 AM", type: "محاضرة", instructor: "د. سامي حسن" },
                    { name: "علوم التربة", place: "قاعة Z05", time: "11:00 AM", type: "محاضرة", instructor: "د. أحمد عوض" }
                ],
                attendanceSummary: [
                    { name: "علوم النبات", pct: 84, abs: 2, pres: 12 },
                    { name: "علوم التربة", pct: 80, abs: 3, pres: 11 }
                ]
            }
        ]
    },
    {
        university: "Tanta University",
        faculties: [
            {
                name: "Faculty of Computers and Artificial Intelligence",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "هياكل البيانات", place: "قاعة 101", time: "9:00 AM", type: "محاضرة", instructor: "د. خالد حسني" },
                    { name: "الخوارزميات", place: "قاعة 102", time: "11:00 AM", type: "محاضرة", instructor: "د. نادر فهمي" },
                    { name: "شبكات الحاسب", place: "معمل 205", time: "1:00 PM", type: "عملي", instructor: "د. أحمد مراد" }
                ],
                attendanceSummary: [
                    { name: "هياكل البيانات", pct: 80, abs: 3, pres: 12 },
                    { name: "الخوارزميات", pct: 83, abs: 2, pres: 10 },
                    { name: "شبكات الحاسب", pct: 75, abs: 4, pres: 9 }
                ]
            },
            {
                name: "Faculty of Engineering",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "هندسة الإلكترونيات", place: "قاعة A12", time: "10:00 AM", type: "محاضرة", instructor: "د. منى عبد العزيز" },
                    { name: "ميكانيكا التربة", place: "قاعة B07", time: "12:00 PM", type: "محاضرة", instructor: "د. محمد الطيب" }
                ],
                attendanceSummary: [
                    { name: "هندسة الإلكترونيات", pct: 90, abs: 1, pres: 15 },
                    { name: "ميكانيكا التربة", pct: 78, abs: 3, pres: 11 }
                ]
            },
            {
                name: "Faculty of Commerce",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "المحاسبة المالية", place: "قاعة 301", time: "9:00 AM", type: "محاضرة", instructor: "د. سعاد مصطفى" },
                    { name: "إدارة الأعمال", place: "قاعة 305", time: "11:00 AM", type: "محاضرة", instructor: "د. ياسر حسن" }
                ],
                attendanceSummary: [
                    { name: "المحاسبة المالية", pct: 85, abs: 2, pres: 13 },
                    { name: "إدارة الأعمال", pct: 88, abs: 1, pres: 14 }
                ]
            },
            {
                name: "Faculty of Medicine",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "علم التشريح", place: "قاعة M01", time: "8:00 AM", type: "محاضرة", instructor: "د. محمود عادل" },
                    { name: "علم الأدوية", place: "قاعة M05", time: "10:00 AM", type: "محاضرة", instructor: "د. منى حسين" }
                ],
                attendanceSummary: [
                    { name: "علم التشريح", pct: 82, abs: 3, pres: 14 },
                    { name: "علم الأدوية", pct: 76, abs: 4, pres: 12 }
                ]
            },
            {
                name: "Faculty of Science",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الكيمياء العضوية", place: "قاعة S10", time: "9:00 AM", type: "محاضرة", instructor: "د. حسن إبراهيم" },
                    { name: "الفيزياء النووية", place: "قاعة S15", time: "11:00 AM", type: "محاضرة", instructor: "د. صفاء نجيب" }
                ],
                attendanceSummary: [
                    { name: "الكيمياء العضوية", pct: 88, abs: 2, pres: 15 },
                    { name: "الفيزياء النووية", pct: 79, abs: 3, pres: 11 }
                ]
            },
            {
                name: "Faculty of Arts",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الأدب العربي", place: "قاعة L20", time: "10:00 AM", type: "محاضرة", instructor: "د. عادل مصطفى" },
                    { name: "علم النفس", place: "قاعة L25", time: "12:00 PM", type: "محاضرة", instructor: "د. هالة فكري" }
                ],
                attendanceSummary: [
                    { name: "الأدب العربي", pct: 92, abs: 1, pres: 16 },
                    { name: "علم النفس", pct: 85, abs: 2, pres: 14 }
                ]
            },
            {
                name: "Faculty of Law",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "القانون الدستوري", place: "قاعة H01", time: "9:00 AM", type: "محاضرة", instructor: "د. عمرو سالم" },
                    { name: "القانون الجنائي", place: "قاعة H05", time: "11:00 AM", type: "محاضرة", instructor: "د. أحمد عبد الله" }
                ],
                attendanceSummary: [
                    { name: "القانون الدستوري", pct: 87, abs: 2, pres: 13 },
                    { name: "القانون الجنائي", pct: 81, abs: 3, pres: 12 }
                ]
            },
            {
                name: "Faculty of Mass Communication",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الإعلام الرقمي", place: "قاعة J12", time: "10:00 AM", type: "محاضرة", instructor: "د. ليلى فوزي" },
                    { name: "العلاقات العامة", place: "قاعة J18", time: "12:00 PM", type: "محاضرة", instructor: "د. حسين كامل" }
                ],
                attendanceSummary: [
                    { name: "الإعلام الرقمي", pct: 90, abs: 1, pres: 15 },
                    { name: "العلاقات العامة", pct: 86, abs: 2, pres: 13 }
                ]
            },
            {
                name: "Faculty of Agriculture",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "علوم النبات", place: "قاعة Z01", time: "8:30 AM", type: "محاضرة", instructor: "د. سامي حسن" },
                    { name: "علوم التربة", place: "قاعة Z05", time: "11:00 AM", type: "محاضرة", instructor: "د. أحمد عوض" }
                ],
                attendanceSummary: [
                    { name: "علوم النبات", pct: 84, abs: 2, pres: 12 },
                    { name: "علوم التربة", pct: 80, abs: 3, pres: 11 }
                ]
            }
        ]
    },
    {
        university: "Helwan University",
        faculties: [
            {
                name: "Faculty of Computers and Artificial Intelligence",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "هياكل البيانات", place: "قاعة 101", time: "9:00 AM", type: "محاضرة", instructor: "د. خالد حسني" },
                    { name: "الخوارزميات", place: "قاعة 102", time: "11:00 AM", type: "محاضرة", instructor: "د. نادر فهمي" },
                    { name: "شبكات الحاسب", place: "معمل 205", time: "1:00 PM", type: "عملي", instructor: "د. أحمد مراد" }
                ],
                attendanceSummary: [
                    { name: "هياكل البيانات", pct: 80, abs: 3, pres: 12 },
                    { name: "الخوارزميات", pct: 83, abs: 2, pres: 10 },
                    { name: "شبكات الحاسب", pct: 75, abs: 4, pres: 9 }
                ]
            },
            {
                name: "Faculty of Engineering",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "هندسة الإلكترونيات", place: "قاعة A12", time: "10:00 AM", type: "محاضرة", instructor: "د. منى عبد العزيز" },
                    { name: "ميكانيكا التربة", place: "قاعة B07", time: "12:00 PM", type: "محاضرة", instructor: "د. محمد الطيب" }
                ],
                attendanceSummary: [
                    { name: "هندسة الإلكترونيات", pct: 90, abs: 1, pres: 15 },
                    { name: "ميكانيكا التربة", pct: 78, abs: 3, pres: 11 }
                ]
            },
            {
                name: "Faculty of Commerce",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "المحاسبة المالية", place: "قاعة 301", time: "9:00 AM", type: "محاضرة", instructor: "د. سعاد مصطفى" },
                    { name: "إدارة الأعمال", place: "قاعة 305", time: "11:00 AM", type: "محاضرة", instructor: "د. ياسر حسن" }
                ],
                attendanceSummary: [
                    { name: "المحاسبة المالية", pct: 85, abs: 2, pres: 13 },
                    { name: "إدارة الأعمال", pct: 88, abs: 1, pres: 14 }
                ]
            },
            {
                name: "Faculty of Medicine",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "علم التشريح", place: "قاعة M01", time: "8:00 AM", type: "محاضرة", instructor: "د. محمود عادل" },
                    { name: "علم الأدوية", place: "قاعة M05", time: "10:00 AM", type: "محاضرة", instructor: "د. منى حسين" }
                ],
                attendanceSummary: [
                    { name: "علم التشريح", pct: 82, abs: 3, pres: 14 },
                    { name: "علم الأدوية", pct: 76, abs: 4, pres: 12 }
                ]
            },
            {
                name: "Faculty of Science",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الكيمياء العضوية", place: "قاعة S10", time: "9:00 AM", type: "محاضرة", instructor: "د. حسن إبراهيم" },
                    { name: "الفيزياء النووية", place: "قاعة S15", time: "11:00 AM", type: "محاضرة", instructor: "د. صفاء نجيب" }
                ],
                attendanceSummary: [
                    { name: "الكيمياء العضوية", pct: 88, abs: 2, pres: 15 },
                    { name: "الفيزياء النووية", pct: 79, abs: 3, pres: 11 }
                ]
            },
            {
                name: "Faculty of Arts",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الأدب العربي", place: "قاعة L20", time: "10:00 AM", type: "محاضرة", instructor: "د. عادل مصطفى" },
                    { name: "علم النفس", place: "قاعة L25", time: "12:00 PM", type: "محاضرة", instructor: "د. هالة فكري" }
                ],
                attendanceSummary: [
                    { name: "الأدب العربي", pct: 92, abs: 1, pres: 16 },
                    { name: "علم النفس", pct: 85, abs: 2, pres: 14 }
                ]
            },
            {
                name: "Faculty of Law",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "القانون الدستوري", place: "قاعة H01", time: "9:00 AM", type: "محاضرة", instructor: "د. عمرو سالم" },
                    { name: "القانون الجنائي", place: "قاعة H05", time: "11:00 AM", type: "محاضرة", instructor: "د. أحمد عبد الله" }
                ],
                attendanceSummary: [
                    { name: "القانون الدستوري", pct: 87, abs: 2, pres: 13 },
                    { name: "القانون الجنائي", pct: 81, abs: 3, pres: 12 }
                ]
            },
            {
                name: "Faculty of Mass Communication",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الإعلام الرقمي", place: "قاعة J12", time: "10:00 AM", type: "محاضرة", instructor: "د. ليلى فوزي" },
                    { name: "العلاقات العامة", place: "قاعة J18", time: "12:00 PM", type: "محاضرة", instructor: "د. حسين كامل" }
                ],
                attendanceSummary: [
                    { name: "الإعلام الرقمي", pct: 90, abs: 1, pres: 15 },
                    { name: "العلاقات العامة", pct: 86, abs: 2, pres: 13 }
                ]
            },
            {
                name: "Faculty of Agriculture",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "علوم النبات", place: "قاعة Z01", time: "8:30 AM", type: "محاضرة", instructor: "د. سامي حسن" },
                    { name: "علوم التربة", place: "قاعة Z05", time: "11:00 AM", type: "محاضرة", instructor: "د. أحمد عوض" }
                ],
                attendanceSummary: [
                    { name: "علوم النبات", pct: 84, abs: 2, pres: 12 },
                    { name: "علوم التربة", pct: 80, abs: 3, pres: 11 }
                ]
            }
        ]
    },
    {
        university: "Aswan University",
        faculties: [
            {
                name: "Faculty of Computers and Artificial Intelligence",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "هياكل البيانات", place: "قاعة 101", time: "9:00 AM", type: "محاضرة", instructor: "د. خالد حسني" },
                    { name: "الخوارزميات", place: "قاعة 102", time: "11:00 AM", type: "محاضرة", instructor: "د. نادر فهمي" },
                    { name: "شبكات الحاسب", place: "معمل 205", time: "1:00 PM", type: "عملي", instructor: "د. أحمد مراد" }
                ],
                attendanceSummary: [
                    { name: "هياكل البيانات", pct: 80, abs: 3, pres: 12 },
                    { name: "الخوارزميات", pct: 83, abs: 2, pres: 10 },
                    { name: "شبكات الحاسب", pct: 75, abs: 4, pres: 9 }
                ]
            },
            {
                name: "Faculty of Engineering",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "هندسة الإلكترونيات", place: "قاعة A12", time: "10:00 AM", type: "محاضرة", instructor: "د. منى عبد العزيز" },
                    { name: "ميكانيكا التربة", place: "قاعة B07", time: "12:00 PM", type: "محاضرة", instructor: "د. محمد الطيب" }
                ],
                attendanceSummary: [
                    { name: "هندسة الإلكترونيات", pct: 90, abs: 1, pres: 15 },
                    { name: "ميكانيكا التربة", pct: 78, abs: 3, pres: 11 }
                ]
            },
            {
                name: "Faculty of Commerce",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "المحاسبة المالية", place: "قاعة 301", time: "9:00 AM", type: "محاضرة", instructor: "د. سعاد مصطفى" },
                    { name: "إدارة الأعمال", place: "قاعة 305", time: "11:00 AM", type: "محاضرة", instructor: "د. ياسر حسن" }
                ],
                attendanceSummary: [
                    { name: "المحاسبة المالية", pct: 85, abs: 2, pres: 13 },
                    { name: "إدارة الأعمال", pct: 88, abs: 1, pres: 14 }
                ]
            },
            {
                name: "Faculty of Medicine",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "علم التشريح", place: "قاعة M01", time: "8:00 AM", type: "محاضرة", instructor: "د. محمود عادل" },
                    { name: "علم الأدوية", place: "قاعة M05", time: "10:00 AM", type: "محاضرة", instructor: "د. منى حسين" }
                ],
                attendanceSummary: [
                    { name: "علم التشريح", pct: 82, abs: 3, pres: 14 },
                    { name: "علم الأدوية", pct: 76, abs: 4, pres: 12 }
                ]
            },
            {
                name: "Faculty of Science",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الكيمياء العضوية", place: "قاعة S10", time: "9:00 AM", type: "محاضرة", instructor: "د. حسن إبراهيم" },
                    { name: "الفيزياء النووية", place: "قاعة S15", time: "11:00 AM", type: "محاضرة", instructor: "د. صفاء نجيب" }
                ],
                attendanceSummary: [
                    { name: "الكيمياء العضوية", pct: 88, abs: 2, pres: 15 },
                    { name: "الفيزياء النووية", pct: 79, abs: 3, pres: 11 }
                ]
            },
            {
                name: "Faculty of Arts",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الأدب العربي", place: "قاعة L20", time: "10:00 AM", type: "محاضرة", instructor: "د. عادل مصطفى" },
                    { name: "علم النفس", place: "قاعة L25", time: "12:00 PM", type: "محاضرة", instructor: "د. هالة فكري" }
                ],
                attendanceSummary: [
                    { name: "الأدب العربي", pct: 92, abs: 1, pres: 16 },
                    { name: "علم النفس", pct: 85, abs: 2, pres: 14 }
                ]
            },
            {
                name: "Faculty of Law",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "القانون الدستوري", place: "قاعة H01", time: "9:00 AM", type: "محاضرة", instructor: "د. عمرو سالم" },
                    { name: "القانون الجنائي", place: "قاعة H05", time: "11:00 AM", type: "محاضرة", instructor: "د. أحمد عبد الله" }
                ],
                attendanceSummary: [
                    { name: "القانون الدستوري", pct: 87, abs: 2, pres: 13 },
                    { name: "القانون الجنائي", pct: 81, abs: 3, pres: 12 }
                ]
            },
            {
                name: "Faculty of Mass Communication",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الإعلام الرقمي", place: "قاعة J12", time: "10:00 AM", type: "محاضرة", instructor: "د. ليلى فوزي" },
                    { name: "العلاقات العامة", place: "قاعة J18", time: "12:00 PM", type: "محاضرة", instructor: "د. حسين كامل" }
                ],
                attendanceSummary: [
                    { name: "الإعلام الرقمي", pct: 90, abs: 1, pres: 15 },
                    { name: "العلاقات العامة", pct: 86, abs: 2, pres: 13 }
                ]
            },
            {
                name: "Faculty of Agriculture",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "علوم النبات", place: "قاعة Z01", time: "8:30 AM", type: "محاضرة", instructor: "د. سامي حسن" },
                    { name: "علوم التربة", place: "قاعة Z05", time: "11:00 AM", type: "محاضرة", instructor: "د. أحمد عوض" }
                ],
                attendanceSummary: [
                    { name: "علوم النبات", pct: 84, abs: 2, pres: 12 },
                    { name: "علوم التربة", pct: 80, abs: 3, pres: 11 }
                ]
            }
        ]
    },
    {
        university: "Luxor University",
        faculties: [
            {
                name: "Faculty of Computers and Artificial Intelligence",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "هياكل البيانات", place: "قاعة 101", time: "9:00 AM", type: "محاضرة", instructor: "د. خالد حسني" },
                    { name: "الخوارزميات", place: "قاعة 102", time: "11:00 AM", type: "محاضرة", instructor: "د. نادر فهمي" },
                    { name: "شبكات الحاسب", place: "معمل 205", time: "1:00 PM", type: "عملي", instructor: "د. أحمد مراد" }
                ],
                attendanceSummary: [
                    { name: "هياكل البيانات", pct: 80, abs: 3, pres: 12 },
                    { name: "الخوارزميات", pct: 83, abs: 2, pres: 10 },
                    { name: "شبكات الحاسب", pct: 75, abs: 4, pres: 9 }
                ]
            },
            {
                name: "Faculty of Engineering",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "هندسة الإلكترونيات", place: "قاعة A12", time: "10:00 AM", type: "محاضرة", instructor: "د. منى عبد العزيز" },
                    { name: "ميكانيكا التربة", place: "قاعة B07", time: "12:00 PM", type: "محاضرة", instructor: "د. محمد الطيب" }
                ],
                attendanceSummary: [
                    { name: "هندسة الإلكترونيات", pct: 90, abs: 1, pres: 15 },
                    { name: "ميكانيكا التربة", pct: 78, abs: 3, pres: 11 }
                ]
            },
            {
                name: "Faculty of Commerce",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "المحاسبة المالية", place: "قاعة 301", time: "9:00 AM", type: "محاضرة", instructor: "د. سعاد مصطفى" },
                    { name: "إدارة الأعمال", place: "قاعة 305", time: "11:00 AM", type: "محاضرة", instructor: "د. ياسر حسن" }
                ],
                attendanceSummary: [
                    { name: "المحاسبة المالية", pct: 85, abs: 2, pres: 13 },
                    { name: "إدارة الأعمال", pct: 88, abs: 1, pres: 14 }
                ]
            },
            {
                name: "Faculty of Medicine",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "علم التشريح", place: "قاعة M01", time: "8:00 AM", type: "محاضرة", instructor: "د. محمود عادل" },
                    { name: "علم الأدوية", place: "قاعة M05", time: "10:00 AM", type: "محاضرة", instructor: "د. منى حسين" }
                ],
                attendanceSummary: [
                    { name: "علم التشريح", pct: 82, abs: 3, pres: 14 },
                    { name: "علم الأدوية", pct: 76, abs: 4, pres: 12 }
                ]
            },
            {
                name: "Faculty of Science",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الكيمياء العضوية", place: "قاعة S10", time: "9:00 AM", type: "محاضرة", instructor: "د. حسن إبراهيم" },
                    { name: "الفيزياء النووية", place: "قاعة S15", time: "11:00 AM", type: "محاضرة", instructor: "د. صفاء نجيب" }
                ],
                attendanceSummary: [
                    { name: "الكيمياء العضوية", pct: 88, abs: 2, pres: 15 },
                    { name: "الفيزياء النووية", pct: 79, abs: 3, pres: 11 }
                ]
            },
            {
                name: "Faculty of Arts",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الأدب العربي", place: "قاعة L20", time: "10:00 AM", type: "محاضرة", instructor: "د. عادل مصطفى" },
                    { name: "علم النفس", place: "قاعة L25", time: "12:00 PM", type: "محاضرة", instructor: "د. هالة فكري" }
                ],
                attendanceSummary: [
                    { name: "الأدب العربي", pct: 92, abs: 1, pres: 16 },
                    { name: "علم النفس", pct: 85, abs: 2, pres: 14 }
                ]
            },
            {
                name: "Faculty of Law",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "القانون الدستوري", place: "قاعة H01", time: "9:00 AM", type: "محاضرة", instructor: "د. عمرو سالم" },
                    { name: "القانون الجنائي", place: "قاعة H05", time: "11:00 AM", type: "محاضرة", instructor: "د. أحمد عبد الله" }
                ],
                attendanceSummary: [
                    { name: "القانون الدستوري", pct: 87, abs: 2, pres: 13 },
                    { name: "القانون الجنائي", pct: 81, abs: 3, pres: 12 }
                ]
            },
            {
                name: "Faculty of Mass Communication",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الإعلام الرقمي", place: "قاعة J12", time: "10:00 AM", type: "محاضرة", instructor: "د. ليلى فوزي" },
                    { name: "العلاقات العامة", place: "قاعة J18", time: "12:00 PM", type: "محاضرة", instructor: "د. حسين كامل" }
                ],
                attendanceSummary: [
                    { name: "الإعلام الرقمي", pct: 90, abs: 1, pres: 15 },
                    { name: "العلاقات العامة", pct: 86, abs: 2, pres: 13 }
                ]
            },
            {
                name: "Faculty of Agriculture",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "علوم النبات", place: "قاعة Z01", time: "8:30 AM", type: "محاضرة", instructor: "د. سامي حسن" },
                    { name: "علوم التربة", place: "قاعة Z05", time: "11:00 AM", type: "محاضرة", instructor: "د. أحمد عوض" }
                ],
                attendanceSummary: [
                    { name: "علوم النبات", pct: 84, abs: 2, pres: 12 },
                    { name: "علوم التربة", pct: 80, abs: 3, pres: 11 }
                ]
            }
        ]
    },
    {
        university: "South Valley University",
        faculties: [
            {
                name: "Faculty of Computers and Artificial Intelligence",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "هياكل البيانات", place: "قاعة 101", time: "9:00 AM", type: "محاضرة", instructor: "د. خالد حسني" },
                    { name: "الخوارزميات", place: "قاعة 102", time: "11:00 AM", type: "محاضرة", instructor: "د. نادر فهمي" },
                    { name: "شبكات الحاسب", place: "معمل 205", time: "1:00 PM", type: "عملي", instructor: "د. أحمد مراد" }
                ],
                attendanceSummary: [
                    { name: "هياكل البيانات", pct: 80, abs: 3, pres: 12 },
                    { name: "الخوارزميات", pct: 83, abs: 2, pres: 10 },
                    { name: "شبكات الحاسب", pct: 75, abs: 4, pres: 9 }
                ]
            },
            {
                name: "Faculty of Engineering",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "هندسة الإلكترونيات", place: "قاعة A12", time: "10:00 AM", type: "محاضرة", instructor: "د. منى عبد العزيز" },
                    { name: "ميكانيكا التربة", place: "قاعة B07", time: "12:00 PM", type: "محاضرة", instructor: "د. محمد الطيب" }
                ],
                attendanceSummary: [
                    { name: "هندسة الإلكترونيات", pct: 90, abs: 1, pres: 15 },
                    { name: "ميكانيكا التربة", pct: 78, abs: 3, pres: 11 }
                ]
            },
            {
                name: "Faculty of Commerce",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "المحاسبة المالية", place: "قاعة 301", time: "9:00 AM", type: "محاضرة", instructor: "د. سعاد مصطفى" },
                    { name: "إدارة الأعمال", place: "قاعة 305", time: "11:00 AM", type: "محاضرة", instructor: "د. ياسر حسن" }
                ],
                attendanceSummary: [
                    { name: "المحاسبة المالية", pct: 85, abs: 2, pres: 13 },
                    { name: "إدارة الأعمال", pct: 88, abs: 1, pres: 14 }
                ]
            },
            {
                name: "Faculty of Medicine",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "علم التشريح", place: "قاعة M01", time: "8:00 AM", type: "محاضرة", instructor: "د. محمود عادل" },
                    { name: "علم الأدوية", place: "قاعة M05", time: "10:00 AM", type: "محاضرة", instructor: "د. منى حسين" }
                ],
                attendanceSummary: [
                    { name: "علم التشريح", pct: 82, abs: 3, pres: 14 },
                    { name: "علم الأدوية", pct: 76, abs: 4, pres: 12 }
                ]
            },
            {
                name: "Faculty of Science",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الكيمياء العضوية", place: "قاعة S10", time: "9:00 AM", type: "محاضرة", instructor: "د. حسن إبراهيم" },
                    { name: "الفيزياء النووية", place: "قاعة S15", time: "11:00 AM", type: "محاضرة", instructor: "د. صفاء نجيب" }
                ],
                attendanceSummary: [
                    { name: "الكيمياء العضوية", pct: 88, abs: 2, pres: 15 },
                    { name: "الفيزياء النووية", pct: 79, abs: 3, pres: 11 }
                ]
            },
            {
                name: "Faculty of Arts",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الأدب العربي", place: "قاعة L20", time: "10:00 AM", type: "محاضرة", instructor: "د. عادل مصطفى" },
                    { name: "علم النفس", place: "قاعة L25", time: "12:00 PM", type: "محاضرة", instructor: "د. هالة فكري" }
                ],
                attendanceSummary: [
                    { name: "الأدب العربي", pct: 92, abs: 1, pres: 16 },
                    { name: "علم النفس", pct: 85, abs: 2, pres: 14 }
                ]
            },
            {
                name: "Faculty of Law",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "القانون الدستوري", place: "قاعة H01", time: "9:00 AM", type: "محاضرة", instructor: "د. عمرو سالم" },
                    { name: "القانون الجنائي", place: "قاعة H05", time: "11:00 AM", type: "محاضرة", instructor: "د. أحمد عبد الله" }
                ],
                attendanceSummary: [
                    { name: "القانون الدستوري", pct: 87, abs: 2, pres: 13 },
                    { name: "القانون الجنائي", pct: 81, abs: 3, pres: 12 }
                ]
            },
            {
                name: "Faculty of Mass Communication",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الإعلام الرقمي", place: "قاعة J12", time: "10:00 AM", type: "محاضرة", instructor: "د. ليلى فوزي" },
                    { name: "العلاقات العامة", place: "قاعة J18", time: "12:00 PM", type: "محاضرة", instructor: "د. حسين كامل" }
                ],
                attendanceSummary: [
                    { name: "الإعلام الرقمي", pct: 90, abs: 1, pres: 15 },
                    { name: "العلاقات العامة", pct: 86, abs: 2, pres: 13 }
                ]
            },
            {
                name: "Faculty of Agriculture",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "علوم النبات", place: "قاعة Z01", time: "8:30 AM", type: "محاضرة", instructor: "د. سامي حسن" },
                    { name: "علوم التربة", place: "قاعة Z05", time: "11:00 AM", type: "محاضرة", instructor: "د. أحمد عوض" }
                ],
                attendanceSummary: [
                    { name: "علوم النبات", pct: 84, abs: 2, pres: 12 },
                    { name: "علوم التربة", pct: 80, abs: 3, pres: 11 }
                ]
            }
        ]
    },
    {
        university: "Fayoum University",
        faculties: [
            {
                name: "Faculty of Computers and Artificial Intelligence",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "هياكل البيانات", place: "قاعة 101", time: "9:00 AM", type: "محاضرة", instructor: "د. خالد حسني" },
                    { name: "الخوارزميات", place: "قاعة 102", time: "11:00 AM", type: "محاضرة", instructor: "د. نادر فهمي" },
                    { name: "شبكات الحاسب", place: "معمل 205", time: "1:00 PM", type: "عملي", instructor: "د. أحمد مراد" }
                ],
                attendanceSummary: [
                    { name: "هياكل البيانات", pct: 80, abs: 3, pres: 12 },
                    { name: "الخوارزميات", pct: 83, abs: 2, pres: 10 },
                    { name: "شبكات الحاسب", pct: 75, abs: 4, pres: 9 }
                ]
            },
            {
                name: "Faculty of Engineering",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "هندسة الإلكترونيات", place: "قاعة A12", time: "10:00 AM", type: "محاضرة", instructor: "د. منى عبد العزيز" },
                    { name: "ميكانيكا التربة", place: "قاعة B07", time: "12:00 PM", type: "محاضرة", instructor: "د. محمد الطيب" }
                ],
                attendanceSummary: [
                    { name: "هندسة الإلكترونيات", pct: 90, abs: 1, pres: 15 },
                    { name: "ميكانيكا التربة", pct: 78, abs: 3, pres: 11 }
                ]
            },
            {
                name: "Faculty of Commerce",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "المحاسبة المالية", place: "قاعة 301", time: "9:00 AM", type: "محاضرة", instructor: "د. سعاد مصطفى" },
                    { name: "إدارة الأعمال", place: "قاعة 305", time: "11:00 AM", type: "محاضرة", instructor: "د. ياسر حسن" }
                ],
                attendanceSummary: [
                    { name: "المحاسبة المالية", pct: 85, abs: 2, pres: 13 },
                    { name: "إدارة الأعمال", pct: 88, abs: 1, pres: 14 }
                ]
            },
            {
                name: "Faculty of Medicine",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "علم التشريح", place: "قاعة M01", time: "8:00 AM", type: "محاضرة", instructor: "د. محمود عادل" },
                    { name: "علم الأدوية", place: "قاعة M05", time: "10:00 AM", type: "محاضرة", instructor: "د. منى حسين" }
                ],
                attendanceSummary: [
                    { name: "علم التشريح", pct: 82, abs: 3, pres: 14 },
                    { name: "علم الأدوية", pct: 76, abs: 4, pres: 12 }
                ]
            },
            {
                name: "Faculty of Science",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الكيمياء العضوية", place: "قاعة S10", time: "9:00 AM", type: "محاضرة", instructor: "د. حسن إبراهيم" },
                    { name: "الفيزياء النووية", place: "قاعة S15", time: "11:00 AM", type: "محاضرة", instructor: "د. صفاء نجيب" }
                ],
                attendanceSummary: [
                    { name: "الكيمياء العضوية", pct: 88, abs: 2, pres: 15 },
                    { name: "الفيزياء النووية", pct: 79, abs: 3, pres: 11 }
                ]
            },
            {
                name: "Faculty of Arts",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الأدب العربي", place: "قاعة L20", time: "10:00 AM", type: "محاضرة", instructor: "د. عادل مصطفى" },
                    { name: "علم النفس", place: "قاعة L25", time: "12:00 PM", type: "محاضرة", instructor: "د. هالة فكري" }
                ],
                attendanceSummary: [
                    { name: "الأدب العربي", pct: 92, abs: 1, pres: 16 },
                    { name: "علم النفس", pct: 85, abs: 2, pres: 14 }
                ]
            },
            {
                name: "Faculty of Law",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "القانون الدستوري", place: "قاعة H01", time: "9:00 AM", type: "محاضرة", instructor: "د. عمرو سالم" },
                    { name: "القانون الجنائي", place: "قاعة H05", time: "11:00 AM", type: "محاضرة", instructor: "د. أحمد عبد الله" }
                ],
                attendanceSummary: [
                    { name: "القانون الدستوري", pct: 87, abs: 2, pres: 13 },
                    { name: "القانون الجنائي", pct: 81, abs: 3, pres: 12 }
                ]
            },
            {
                name: "Faculty of Mass Communication",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الإعلام الرقمي", place: "قاعة J12", time: "10:00 AM", type: "محاضرة", instructor: "د. ليلى فوزي" },
                    { name: "العلاقات العامة", place: "قاعة J18", time: "12:00 PM", type: "محاضرة", instructor: "د. حسين كامل" }
                ],
                attendanceSummary: [
                    { name: "الإعلام الرقمي", pct: 90, abs: 1, pres: 15 },
                    { name: "العلاقات العامة", pct: 86, abs: 2, pres: 13 }
                ]
            },
            {
                name: "Faculty of Agriculture",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "علوم النبات", place: "قاعة Z01", time: "8:30 AM", type: "محاضرة", instructor: "د. سامي حسن" },
                    { name: "علوم التربة", place: "قاعة Z05", time: "11:00 AM", type: "محاضرة", instructor: "د. أحمد عوض" }
                ],
                attendanceSummary: [
                    { name: "علوم النبات", pct: 84, abs: 2, pres: 12 },
                    { name: "علوم التربة", pct: 80, abs: 3, pres: 11 }
                ]
            }
        ]
    },
    {
        university: "Beni Suef University",
        faculties: [
            {
                name: "Faculty of Computers and Artificial Intelligence",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "هياكل البيانات", place: "قاعة 101", time: "9:00 AM", type: "محاضرة", instructor: "د. خالد حسني" },
                    { name: "الخوارزميات", place: "قاعة 102", time: "11:00 AM", type: "محاضرة", instructor: "د. نادر فهمي" },
                    { name: "شبكات الحاسب", place: "معمل 205", time: "1:00 PM", type: "عملي", instructor: "د. أحمد مراد" }
                ],
                attendanceSummary: [
                    { name: "هياكل البيانات", pct: 80, abs: 3, pres: 12 },
                    { name: "الخوارزميات", pct: 83, abs: 2, pres: 10 },
                    { name: "شبكات الحاسب", pct: 75, abs: 4, pres: 9 }
                ]
            },
            {
                name: "Faculty of Engineering",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "هندسة الإلكترونيات", place: "قاعة A12", time: "10:00 AM", type: "محاضرة", instructor: "د. منى عبد العزيز" },
                    { name: "ميكانيكا التربة", place: "قاعة B07", time: "12:00 PM", type: "محاضرة", instructor: "د. محمد الطيب" }
                ],
                attendanceSummary: [
                    { name: "هندسة الإلكترونيات", pct: 90, abs: 1, pres: 15 },
                    { name: "ميكانيكا التربة", pct: 78, abs: 3, pres: 11 }
                ]
            },
            {
                name: "Faculty of Commerce",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "المحاسبة المالية", place: "قاعة 301", time: "9:00 AM", type: "محاضرة", instructor: "د. سعاد مصطفى" },
                    { name: "إدارة الأعمال", place: "قاعة 305", time: "11:00 AM", type: "محاضرة", instructor: "د. ياسر حسن" }
                ],
                attendanceSummary: [
                    { name: "المحاسبة المالية", pct: 85, abs: 2, pres: 13 },
                    { name: "إدارة الأعمال", pct: 88, abs: 1, pres: 14 }
                ]
            },
            {
                name: "Faculty of Medicine",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "علم التشريح", place: "قاعة M01", time: "8:00 AM", type: "محاضرة", instructor: "د. محمود عادل" },
                    { name: "علم الأدوية", place: "قاعة M05", time: "10:00 AM", type: "محاضرة", instructor: "د. منى حسين" }
                ],
                attendanceSummary: [
                    { name: "علم التشريح", pct: 82, abs: 3, pres: 14 },
                    { name: "علم الأدوية", pct: 76, abs: 4, pres: 12 }
                ]
            },
            {
                name: "Faculty of Science",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الكيمياء العضوية", place: "قاعة S10", time: "9:00 AM", type: "محاضرة", instructor: "د. حسن إبراهيم" },
                    { name: "الفيزياء النووية", place: "قاعة S15", time: "11:00 AM", type: "محاضرة", instructor: "د. صفاء نجيب" }
                ],
                attendanceSummary: [
                    { name: "الكيمياء العضوية", pct: 88, abs: 2, pres: 15 },
                    { name: "الفيزياء النووية", pct: 79, abs: 3, pres: 11 }
                ]
            },
            {
                name: "Faculty of Arts",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الأدب العربي", place: "قاعة L20", time: "10:00 AM", type: "محاضرة", instructor: "د. عادل مصطفى" },
                    { name: "علم النفس", place: "قاعة L25", time: "12:00 PM", type: "محاضرة", instructor: "د. هالة فكري" }
                ],
                attendanceSummary: [
                    { name: "الأدب العربي", pct: 92, abs: 1, pres: 16 },
                    { name: "علم النفس", pct: 85, abs: 2, pres: 14 }
                ]
            },
            {
                name: "Faculty of Law",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "القانون الدستوري", place: "قاعة H01", time: "9:00 AM", type: "محاضرة", instructor: "د. عمرو سالم" },
                    { name: "القانون الجنائي", place: "قاعة H05", time: "11:00 AM", type: "محاضرة", instructor: "د. أحمد عبد الله" }
                ],
                attendanceSummary: [
                    { name: "القانون الدستوري", pct: 87, abs: 2, pres: 13 },
                    { name: "القانون الجنائي", pct: 81, abs: 3, pres: 12 }
                ]
            },
            {
                name: "Faculty of Mass Communication",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الإعلام الرقمي", place: "قاعة J12", time: "10:00 AM", type: "محاضرة", instructor: "د. ليلى فوزي" },
                    { name: "العلاقات العامة", place: "قاعة J18", time: "12:00 PM", type: "محاضرة", instructor: "د. حسين كامل" }
                ],
                attendanceSummary: [
                    { name: "الإعلام الرقمي", pct: 90, abs: 1, pres: 15 },
                    { name: "العلاقات العامة", pct: 86, abs: 2, pres: 13 }
                ]
            },
            {
                name: "Faculty of Agriculture",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "علوم النبات", place: "قاعة Z01", time: "8:30 AM", type: "محاضرة", instructor: "د. سامي حسن" },
                    { name: "علوم التربة", place: "قاعة Z05", time: "11:00 AM", type: "محاضرة", instructor: "د. أحمد عوض" }
                ],
                attendanceSummary: [
                    { name: "علوم النبات", pct: 84, abs: 2, pres: 12 },
                    { name: "علوم التربة", pct: 80, abs: 3, pres: 11 }
                ]
            }
        ]
    },
    {
        university: "Minia University",
        faculties: [
            {
                name: "Faculty of Computers and Artificial Intelligence",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "هياكل البيانات", place: "قاعة 101", time: "9:00 AM", type: "محاضرة", instructor: "د. خالد حسني" },
                    { name: "الخوارزميات", place: "قاعة 102", time: "11:00 AM", type: "محاضرة", instructor: "د. نادر فهمي" },
                    { name: "شبكات الحاسب", place: "معمل 205", time: "1:00 PM", type: "عملي", instructor: "د. أحمد مراد" }
                ],
                attendanceSummary: [
                    { name: "هياكل البيانات", pct: 80, abs: 3, pres: 12 },
                    { name: "الخوارزميات", pct: 83, abs: 2, pres: 10 },
                    { name: "شبكات الحاسب", pct: 75, abs: 4, pres: 9 }
                ]
            },
            {
                name: "Faculty of Engineering",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "هندسة الإلكترونيات", place: "قاعة A12", time: "10:00 AM", type: "محاضرة", instructor: "د. منى عبد العزيز" },
                    { name: "ميكانيكا التربة", place: "قاعة B07", time: "12:00 PM", type: "محاضرة", instructor: "د. محمد الطيب" }
                ],
                attendanceSummary: [
                    { name: "هندسة الإلكترونيات", pct: 90, abs: 1, pres: 15 },
                    { name: "ميكانيكا التربة", pct: 78, abs: 3, pres: 11 }
                ]
            },
            {
                name: "Faculty of Commerce",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "المحاسبة المالية", place: "قاعة 301", time: "9:00 AM", type: "محاضرة", instructor: "د. سعاد مصطفى" },
                    { name: "إدارة الأعمال", place: "قاعة 305", time: "11:00 AM", type: "محاضرة", instructor: "د. ياسر حسن" }
                ],
                attendanceSummary: [
                    { name: "المحاسبة المالية", pct: 85, abs: 2, pres: 13 },
                    { name: "إدارة الأعمال", pct: 88, abs: 1, pres: 14 }
                ]
            },
            {
                name: "Faculty of Medicine",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "علم التشريح", place: "قاعة M01", time: "8:00 AM", type: "محاضرة", instructor: "د. محمود عادل" },
                    { name: "علم الأدوية", place: "قاعة M05", time: "10:00 AM", type: "محاضرة", instructor: "د. منى حسين" }
                ],
                attendanceSummary: [
                    { name: "علم التشريح", pct: 82, abs: 3, pres: 14 },
                    { name: "علم الأدوية", pct: 76, abs: 4, pres: 12 }
                ]
            },
            {
                name: "Faculty of Science",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الكيمياء العضوية", place: "قاعة S10", time: "9:00 AM", type: "محاضرة", instructor: "د. حسن إبراهيم" },
                    { name: "الفيزياء النووية", place: "قاعة S15", time: "11:00 AM", type: "محاضرة", instructor: "د. صفاء نجيب" }
                ],
                attendanceSummary: [
                    { name: "الكيمياء العضوية", pct: 88, abs: 2, pres: 15 },
                    { name: "الفيزياء النووية", pct: 79, abs: 3, pres: 11 }
                ]
            },
            {
                name: "Faculty of Arts",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الأدب العربي", place: "قاعة L20", time: "10:00 AM", type: "محاضرة", instructor: "د. عادل مصطفى" },
                    { name: "علم النفس", place: "قاعة L25", time: "12:00 PM", type: "محاضرة", instructor: "د. هالة فكري" }
                ],
                attendanceSummary: [
                    { name: "الأدب العربي", pct: 92, abs: 1, pres: 16 },
                    { name: "علم النفس", pct: 85, abs: 2, pres: 14 }
                ]
            },
            {
                name: "Faculty of Law",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "القانون الدستوري", place: "قاعة H01", time: "9:00 AM", type: "محاضرة", instructor: "د. عمرو سالم" },
                    { name: "القانون الجنائي", place: "قاعة H05", time: "11:00 AM", type: "محاضرة", instructor: "د. أحمد عبد الله" }
                ],
                attendanceSummary: [
                    { name: "القانون الدستوري", pct: 87, abs: 2, pres: 13 },
                    { name: "القانون الجنائي", pct: 81, abs: 3, pres: 12 }
                ]
            },
            {
                name: "Faculty of Mass Communication",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الإعلام الرقمي", place: "قاعة J12", time: "10:00 AM", type: "محاضرة", instructor: "د. ليلى فوزي" },
                    { name: "العلاقات العامة", place: "قاعة J18", time: "12:00 PM", type: "محاضرة", instructor: "د. حسين كامل" }
                ],
                attendanceSummary: [
                    { name: "الإعلام الرقمي", pct: 90, abs: 1, pres: 15 },
                    { name: "العلاقات العامة", pct: 86, abs: 2, pres: 13 }
                ]
            },
            {
                name: "Faculty of Agriculture",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "علوم النبات", place: "قاعة Z01", time: "8:30 AM", type: "محاضرة", instructor: "د. سامي حسن" },
                    { name: "علوم التربة", place: "قاعة Z05", time: "11:00 AM", type: "محاضرة", instructor: "د. أحمد عوض" }
                ],
                attendanceSummary: [
                    { name: "علوم النبات", pct: 84, abs: 2, pres: 12 },
                    { name: "علوم التربة", pct: 80, abs: 3, pres: 11 }
                ]
            }
        ]
    },
    {
        university: "Zagazig University",
        faculties: [
            {
                name: "Faculty of Computers and Artificial Intelligence",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "هياكل البيانات", place: "قاعة 101", time: "9:00 AM", type: "محاضرة", instructor: "د. خالد حسني" },
                    { name: "الخوارزميات", place: "قاعة 102", time: "11:00 AM", type: "محاضرة", instructor: "د. نادر فهمي" },
                    { name: "شبكات الحاسب", place: "معمل 205", time: "1:00 PM", type: "عملي", instructor: "د. أحمد مراد" }
                ],
                attendanceSummary: [
                    { name: "هياكل البيانات", pct: 80, abs: 3, pres: 12 },
                    { name: "الخوارزميات", pct: 83, abs: 2, pres: 10 },
                    { name: "شبكات الحاسب", pct: 75, abs: 4, pres: 9 }
                ]
            },
            {
                name: "Faculty of Engineering",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "هندسة الإلكترونيات", place: "قاعة A12", time: "10:00 AM", type: "محاضرة", instructor: "د. منى عبد العزيز" },
                    { name: "ميكانيكا التربة", place: "قاعة B07", time: "12:00 PM", type: "محاضرة", instructor: "د. محمد الطيب" }
                ],
                attendanceSummary: [
                    { name: "هندسة الإلكترونيات", pct: 90, abs: 1, pres: 15 },
                    { name: "ميكانيكا التربة", pct: 78, abs: 3, pres: 11 }
                ]
            },
            {
                name: "Faculty of Commerce",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "المحاسبة المالية", place: "قاعة 301", time: "9:00 AM", type: "محاضرة", instructor: "د. سعاد مصطفى" },
                    { name: "إدارة الأعمال", place: "قاعة 305", time: "11:00 AM", type: "محاضرة", instructor: "د. ياسر حسن" }
                ],
                attendanceSummary: [
                    { name: "المحاسبة المالية", pct: 85, abs: 2, pres: 13 },
                    { name: "إدارة الأعمال", pct: 88, abs: 1, pres: 14 }
                ]
            },
            {
                name: "Faculty of Medicine",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "علم التشريح", place: "قاعة M01", time: "8:00 AM", type: "محاضرة", instructor: "د. محمود عادل" },
                    { name: "علم الأدوية", place: "قاعة M05", time: "10:00 AM", type: "محاضرة", instructor: "د. منى حسين" }
                ],
                attendanceSummary: [
                    { name: "علم التشريح", pct: 82, abs: 3, pres: 14 },
                    { name: "علم الأدوية", pct: 76, abs: 4, pres: 12 }
                ]
            },
            {
                name: "Faculty of Science",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الكيمياء العضوية", place: "قاعة S10", time: "9:00 AM", type: "محاضرة", instructor: "د. حسن إبراهيم" },
                    { name: "الفيزياء النووية", place: "قاعة S15", time: "11:00 AM", type: "محاضرة", instructor: "د. صفاء نجيب" }
                ],
                attendanceSummary: [
                    { name: "الكيمياء العضوية", pct: 88, abs: 2, pres: 15 },
                    { name: "الفيزياء النووية", pct: 79, abs: 3, pres: 11 }
                ]
            },
            {
                name: "Faculty of Arts",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الأدب العربي", place: "قاعة L20", time: "10:00 AM", type: "محاضرة", instructor: "د. عادل مصطفى" },
                    { name: "علم النفس", place: "قاعة L25", time: "12:00 PM", type: "محاضرة", instructor: "د. هالة فكري" }
                ],
                attendanceSummary: [
                    { name: "الأدب العربي", pct: 92, abs: 1, pres: 16 },
                    { name: "علم النفس", pct: 85, abs: 2, pres: 14 }
                ]
            },
            {
                name: "Faculty of Law",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "القانون الدستوري", place: "قاعة H01", time: "9:00 AM", type: "محاضرة", instructor: "د. عمرو سالم" },
                    { name: "القانون الجنائي", place: "قاعة H05", time: "11:00 AM", type: "محاضرة", instructor: "د. أحمد عبد الله" }
                ],
                attendanceSummary: [
                    { name: "القانون الدستوري", pct: 87, abs: 2, pres: 13 },
                    { name: "القانون الجنائي", pct: 81, abs: 3, pres: 12 }
                ]
            },
            {
                name: "Faculty of Mass Communication",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "الإعلام الرقمي", place: "قاعة J12", time: "10:00 AM", type: "محاضرة", instructor: "د. ليلى فوزي" },
                    { name: "العلاقات العامة", place: "قاعة J18", time: "12:00 PM", type: "محاضرة", instructor: "د. حسين كامل" }
                ],
                attendanceSummary: [
                    { name: "الإعلام الرقمي", pct: 90, abs: 1, pres: 15 },
                    { name: "العلاقات العامة", pct: 86, abs: 2, pres: 13 }
                ]
            },
            {
                name: "Faculty of Agriculture",
                courses: [
                    {
                        title: "محاضرة",
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
                        title: "محاضرة",
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
                    { name: "علوم النبات", place: "قاعة Z01", time: "8:30 AM", type: "محاضرة", instructor: "د. سامي حسن" },
                    { name: "علوم التربة", place: "قاعة Z05", time: "11:00 AM", type: "محاضرة", instructor: "د. أحمد عوض" }
                ],
                attendanceSummary: [
                    { name: "علوم النبات", pct: 84, abs: 2, pres: 12 },
                    { name: "علوم التربة", pct: 80, abs: 3, pres: 11 }
                ]
            }
        ]
    }
];
