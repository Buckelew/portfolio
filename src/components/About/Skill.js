export default ({ name, img }) => (
  <div className="Skill">
    <img src={img} alt={name} />
    <span>{name}</span>
  </div>
);
