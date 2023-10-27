import { useState, useEffect } from "react";

const Projects = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const reposUrl = 'https://api.github.com/users/sernat243/repos';

        fetch(reposUrl)
            .then((response) => response.json())
            .then((data) => setRepos(data))
            .catch((error) => console.error("Error fetching GitHub data: ", error));
    }, []);

    return (
        <section id="projects">
            <h2>Projects</h2>
            <ul>
                {repos.map((repo) => (
                    <li key={repo.id}>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            {repo.name}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Projects;