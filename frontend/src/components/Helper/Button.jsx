import "./Button.css";

export default function Button({ title, score, color, choice }) {
  return (
    <button className="btn" style={{ backgroundColor: color }}>
      <span> {choice} </span>
      <p className="title"> {title} </p>
      <span className="score"> {score} </span>
    </button>
  );
}
