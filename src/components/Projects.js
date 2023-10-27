import { useState, useEffect } from "react";

const Projects = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const reposUrl = 'https://api.github.com/users/sernat243/repos';

        fetch(reposUrl)
            .then((response) => response.json())
            .then((data) => {
                // Sort the repositories by creation date in descending order
                const sortedRepos = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                // Get the last 6 repositories
                const latestRepos = sortedRepos.slice(0, 6);
                setRepos(latestRepos);
            })
            .catch((error) => console.error("Error fetching GitHub data: ", error));
    }, []);

    return (
        <section id="projects">
            <h2>Projects</h2>
            <ul>
                {repos.map((repo) => (
                    <li key={repo.id}>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            <div className="repo-card" style={{ backgroundImage: `url(${repo.backgroundImage})` }}>
                                {repo.name}
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Projects;