import "./Result.css";
import x from "../Assets/x.png";
import o from "../Assets/o.png";

export default function Result({ winner }) {
  return (
    <div className="result">
      <div className="status">
        {console.log(winner)}
        <span>
          {winner !== "cross" && winner !== "circle" ? (
            <>
              <img src={winner === "cross" ? x : o} alt="winner" />
              <h1> takes the round </h1>
            </>
          ) : (
            <h1> Draw </h1>
          )}
        </span>

        <div className="result-options">
          <button className="btn-quit">
            <p> quit </p>
          </button>
          <button className="btn-next">
            <p> next round </p>
          </button>
        </div>
      </div>
    </div>
  );
}
