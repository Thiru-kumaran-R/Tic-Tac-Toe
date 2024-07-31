import { useEffect, useState } from "react";
import Room from "./components/Room/Room.jsx";
import Login from "./components/Login/Login.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Board from "./components/Board/Board.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Result from "./components/Result/Result.jsx";

const gameMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

export default function App() {
  const [gameState, setGameState] = useState(gameMatrix);
  const [gameStart, setgameStart] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState("cross");
  const [finishedState, setFinishedState] = useState(null);
  const [winner, setWinner] = useState(null);
  // const [webSocket, setWebSocket] = useState(null);
  const [playerDetail, setPlayerDetail] = useState();
  const [OppPlayer, setOppPlayer] = useState();
  const [isConnected, setIsConnected] = useState(false);

  const checkWinner = () => {
    for (let row = 0; row < gameState.length; row++) {
      if (gameState[row][0] === gameState[row][1]) {
        if (gameState[row][1] === gameState[row][2]) {
          return gameState[row][0];
        }
      }
    }

    for (let column = 0; column < gameState.length; column++) {
      if (gameState[0][column] === gameState[1][column]) {
        if (gameState[1][column] === gameState[2][column]) {
          return gameState[0][column];
        }
      }
    }

    for (let diagonal = 0; diagonal < gameState.length; diagonal++) {
      if (gameState[0][0] === gameState[1][1]) {
        if (gameState[1][1] === gameState[2][2]) {
          return gameState[0][0];
        }
      }
    }

    for (let diagonal = 0; diagonal < gameState.length; diagonal++) {
      if (gameState[0][2] === gameState[1][1]) {
        if (gameState[1][1] === gameState[2][0]) {
          return gameState[2][0];
        }
      }
    }

    const isDraw = gameState.flat().every((element) => {
      if (element === "circle" || element === "cross") {
        return true;
      }
    });

    if (isDraw) {
      return "draw";
    }

    return null;
  };

  useEffect(() => {
    const winnerPlayer = checkWinner();
    if (winnerPlayer === "circle" || winnerPlayer === "cross") {
      setWinner(winnerPlayer);
      setFinishedState(winnerPlayer);
    }
    if (winnerPlayer === "draw") {
      setWinner("draw");
      setFinishedState("draw");
    }
  }, [gameState, checkWinner, winner]);

  return (
    <>
      <div className="container">
        {!isConnected && <Login onSetConnected={setIsConnected} />}
        {isConnected && <Room onSetsetgameStart={setgameStart} />}
        {gameStart && (
          <>
            <NavBar turn={currentPlayer} />
            <Board
              gameState={gameState}
              onSetGameState={setGameState}
              finishedState={finishedState}
              currentPlayer={currentPlayer}
              onSetCurrentPlayer={setCurrentPlayer}
            />
            <Footer playerDetail={playerDetail} OppPlayer={OppPlayer} />
          </>
        )}
        {finishedState && <Result winner={winner} />}
      </div>
    </>
  );
}
