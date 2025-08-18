import React from "react";
import { courses } from "../data/courses";

export default function Dashboard({ student }) {
    const facultyData = courses[student.faculty];

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Welcome, {student.username} 👋</h1>

            <div className="mb-4 p-4 bg-white rounded-2xl shadow">
                <h2 className="font-bold">📊 Academic Info</h2>
                <p>University: {student.university}</p>
                <p>Faculty: {student.faculty}</p>
                <p>GPA: {student.gpa}</p>
                <p>Attendance: {student.attendance}%</p>
            </div>

            <div className="mb-4 p-4 bg-white rounded-2xl shadow">
                <h2 className="font-bold">👨‍🏫 Professors</h2>
                <ul>
                    {facultyData.professors.map((p, i) => (
                        <li key={i}>{p}</li>
                    ))}
                </ul>
            </div>

            <div className="mb-4 p-4 bg-white rounded-2xl shadow">
                <h2 className="font-bold">📚 Lectures</h2>
                <ul>
                    {facultyData.lectures.map((lec, i) => (
                        <li key={i}>
                            {lec.title} – <a href={`/${lec.file}`}>{lec.file}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
