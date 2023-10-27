const AboutMe = () => {
    return (
      <section id="about" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>About Me</h2>
              <p>
                I am a passionate freelance developer with a strong interest in web
                development. I love creating responsive and user-friendly web
                applications using the latest technologies.
              </p>
              <p>
                My goal is to provide valuable solutions and build awesome projects. I
                am constantly learning and exploring new technologies to stay
                up-to-date in this ever-evolving field.
              </p>
              <p>
                When I'm not coding, you can find me exploring the outdoors, reading
                books, or working on personal coding projects.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="/profile.png"
                alt="Avatar"
                className="img-fluid rounded-circle"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutMe;