export const Card = ({ image, text, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={text || "card"} />
      {text && <p>{text}</p>}
    </div>
  );
};
