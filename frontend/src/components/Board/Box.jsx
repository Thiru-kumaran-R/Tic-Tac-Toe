import { useState } from "react";
import x from "../Assets/x.png";
import o from "../Assets/o.png";

export default function Box({
  currentPlayer,
  onSetCurrentPlayer,
  rowIndex,
  columnindex,
  onSetFinishedState,
  finishedState,
  onSetGameState,
}) {
  const [icon, setIcon] = useState(null);

  if (finishedState) {
    return;
  }

  const onClickBox = () => {
    if (!icon) {
      if (currentPlayer === "circle") {
        setIcon(o);
      }

      if (currentPlayer === "cross") {
        setIcon(x);
      }
    } else {
      return;
    }

    const myCurrentPlayer = currentPlayer;

    onSetGameState((prevState) => {
      let newState = [...prevState];
      newState[columnindex][rowIndex] = myCurrentPlayer;
      console.log(newState);
      return newState;
    });

    onSetCurrentPlayer((prev) => (prev === "circle" ? "cross" : "circle"));
  };

  return (
    <div className="box" onClick={onClickBox}>
      <img src={icon} alt={icon} />
    </div>
  );
}
