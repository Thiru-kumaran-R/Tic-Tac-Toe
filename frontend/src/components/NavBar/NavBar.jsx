import "./NavBar.css";
import x from "../Assets/x.png";
import o from "../Assets/o.png";

export default function NavBar({ turn }) {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={x} alt="cross" />
          <img src={o} alt="circle" />
        </div>

        <div className="btn-turn">
          <img src={turn === "cross" ? x : o} alt="players-turn" />
          <span> turn </span>
        </div>

        <button className="quit">
          <span>⟳</span>
        </button>
      </header>
    </>
  );
}
