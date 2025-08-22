import React, { useState } from "react";
import { students } from "../data/students";

export default function Login({ onLogin, isRTL }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        const student = Object.values(students).find(
            (s) => s.username === username && s.password === password
        );
        if (student) {
            onLogin(student);
        } else {
            setError("❌ Wrong username or password");
        }
    };

    const alignText = isRTL ? "text-right" : "text-left";

    return (
        <div className="p-6 max-w-md mx-auto mt-20 bg-white rounded-2xl shadow" dir={isRTL ? "rtl" : "ltr"}>
            <h1 className={`text-xl font-bold mb-4 text-center ${alignText}`}>🎓 Student Portal</h1>
            <input
                className={`w-full p-2 border rounded mb-2 ${alignText}`}
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                dir={isRTL ? "rtl" : "ltr"}
            />
            <input
                type="password"
                className={`w-full p-2 border rounded mb-2 ${alignText}`}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                dir={isRTL ? "rtl" : "ltr"}
            />
            {error && <p className={`text-red-500 mb-2 ${alignText}`}>{error}</p>}
            <button
                className="w-full bg-blue-500 text-white p-2 rounded"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    );
}
