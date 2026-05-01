import axios from "axios";

export const fetchUserData = async (username) => {
    const res = await axios.get(`http://localhost:5000/api/github/${username}`);
    return res.data;
};
