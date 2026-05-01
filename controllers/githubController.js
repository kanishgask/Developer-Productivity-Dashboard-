const axios = require("axios");

exports.getUserData = async (req, res) => {
    try {
        const { username } = req.params;

        const repos = await axios.get(
            `https://api.github.com/users/${username}/repos`
        );

        let totalCommits = 0;

        for (let repo of repos.data) {
            try {
                const commits = await axios.get(
                    `https://api.github.com/repos/${username}/${repo.name}/commits`
                );
                totalCommits += commits.data.length;
            } catch (err) {
                continue;
            }
        }

        res.json({
            username,
            repoCount: repos.data.length,
            totalCommits
        });

    } catch (error) {
        res.status(500).json({ error: "Error fetching data" });
    }
};
