import Box from "./Box";
import "./Board.css";

export default function Board({
  currentPlayer,
  onSetCurrentPlayer,
  onSetFinishedState,
  finishState,
  onSetGameState,
}) {
  return (
    <div className="board">
      {Array.from({ length: 3 }, (_, columnindex) => {
        return (
          <div className={`row-${columnindex + 1}`} key={columnindex}>
            {Array.from({ length: 3 }, (_, rowIndex) => {
              return (
                <Box
                  currentPlayer={currentPlayer}
                  onSetCurrentPlayer={onSetCurrentPlayer}
                  finishedState={finishState}
                  key={rowIndex}
                  rowIndex={rowIndex}
                  columnindex={columnindex}
                  onSetGameState={onSetGameState}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
