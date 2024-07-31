import x from "../Assets/x.png";
import o from "../Assets/o.png";
import "./Room.css";

// const URL =
// process.env.NODE_ENV === "production" ? undefined : "http://localhost:8080";

export default function Room({ onSetsetgameStart }) {
  // function handlePlayerDetail(e) {
  //   const { name, value } = e.target;

  //   if (!value) {
  //     return;
  //   }

  //   onSetPlayerDetail(name);
  // }

  function handleRoom() {
    onSetsetgameStart(true);
  }

  return (
    <div className="main">
      <div className="logo">
        <img src={x} id="x" alt={x} />
        <img src={o} id="o" alt={x} />
      </div>

      <div className="join-room">
        <input type="text" placeholder="Enter room code" />
        <button onClick={handleRoom}> join room </button>
      </div>

      <span className="or"> or </span>

      <div className="create-room">
        <button onClick={handleRoom}>Create room</button>
      </div>
    </div>
  );
}
