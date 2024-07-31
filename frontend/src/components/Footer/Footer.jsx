import "./Footer.css";
import Button from "../Helper/Button";

export default function Footer({ playerDetail, OppPlayer }) {
  return (
    <div className="footer">
      <Button
        title={playerDetail.name}
        score={0}
        color={"#30c4be"}
        choice={playerDetail.playerChoice}
      />
      <Button title={" Ties "} score={0} color={"#a8bfc9"} />
      <Button
        title={OppPlayer.name}
        score={0}
        color={"#f2b137"}
        choice={OppPlayer.playerChoice}
      />
    </div>
  );
}
