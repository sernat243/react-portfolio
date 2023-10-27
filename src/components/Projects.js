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
        .catch((error) => console.error('Error fetching GitHub data: ', error));
    }, []);
  
    return (
      <section id="projects" className="py-5">
        <div className="container">
          <h2 className="mb-4">Projects</h2>
          <div className="row">
            {repos.map((repo) => (
              <div key={repo.id} className="col-md-4 mb-4">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                  <div className="card repo-card" style={{ backgroundImage: `url(${repo.backgroundImage})` }}>
                    <div className="card-body d-flex flex-column justify-content-center">
                      <h5 className="card-title text-center mb-0">{repo.name}</h5>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default Projects;