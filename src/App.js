import React, { useState } from "react";
import Dashboard from "./components/Dashboard";

function App() {
    const [username, setUsername] = useState("");

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Developer Productivity Dashboard</h1>

            <input
                type="text"
                placeholder="Enter GitHub Username"
                onChange={(e) => setUsername(e.target.value)}
            />

            <Dashboard username={username} />
        </div>
    );
}

export default App;
