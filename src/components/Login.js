import React, { useState } from "react";
import { students } from "../data/students";

export default function Login({ onLogin }) {
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

    return (
        <div className="p-6 max-w-md mx-auto mt-20 bg-white rounded-2xl shadow">
            <h1 className="text-xl font-bold mb-4 text-center">🎓 Student Portal</h1>
            <input
                className="w-full p-2 border rounded mb-2"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                className="w-full p-2 border rounded mb-2"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500 mb-2">{error}</p>}
            <button
                className="w-full bg-blue-500 text-white p-2 rounded"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    );
}
