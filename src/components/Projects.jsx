import '../assets/images/guess-the-word.png';
import Card from './Card';

const Projects = () => {
  return (
    <div className="projects">
      <a id="projects"></a>
      <h1 className="projects-heading">&lt;My Projects /&gt;</h1>
      <div className="cards">
        <Card />
        <Card />
        <Card />
        
      </div>
    </div>
  );
};

export default Projects;
