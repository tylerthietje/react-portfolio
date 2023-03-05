import './card.css';

const Card = () => {
  return (
    <div>
      <div className="card">
        <img
          src="../assets/images/guess-the-word.png"
          alt="Project"
          className="card-image"
        />
        <h1 className="card-title">Project 1</h1>
        <h2 className="card-subtitle">Skills Used?</h2>
        <p className="card-desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. At beatae,
          nostrum non explicabo nam eaque, in cum ipsam dolor, sed perferendis
          pariatur voluptatem saepe iusto assumenda maiores repellat similique
          laborum?
        </p>
      </div>
      
    </div>
  );
};

export default Card;
