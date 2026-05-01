import React, { useEffect, useState } from "react";
import { fetchUserData } from "../services/api";

const Dashboard = ({ username }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        if (username) {
            fetchUserData(username).then(setData);
        }
    }, [username]);

    if (!data) return <p>No data</p>;

    return (
        <div>
            <h2>{data.username}</h2>
            <p>Repositories: {data.repoCount}</p>
            <p>Total Commits: {data.totalCommits}</p>
        </div>
    );
};

export default Dashboard;
