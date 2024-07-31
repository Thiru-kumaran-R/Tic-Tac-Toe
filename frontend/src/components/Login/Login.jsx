import "./Login.css";

export default function Login({ onSetConnected }) {
  function handleLogin() {
    onSetConnected(true);
  }
  return (
    <div className="login">
      <h1>Tic Tac Toe </h1>

      <input type="text" placeholder="Enter user name" />
      <button onClick={handleLogin}> submit </button>
    </div>
  );
}
