import { useState } from "react";
import { LoginPageProps } from "../types/types";

const Login = ({ onLogin }: LoginPageProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const defaultUser = import.meta.env.VITE_API_USER;
  const defaultPass = import.meta.env.VITE_API_PASS;
  const handleLogin = () => {
    if (username === defaultUser && password === defaultPass) {
      localStorage.setItem("auth", defaultUser);
      onLogin(defaultUser);
    } else {
      alert("Неверные имя пользователя или пароль"); //test
    }
  };
  return (
    <div className="flex-col content-center justify-items-center w-[100vw] h-[100vh]">
      <div className="m-2 w-3/4">
        <h1 className="m-2">Login</h1>
        <h2>Введите свое имя и пароль</h2>
      </div>

      <div className="flex flex-col m-3 w-1/4">
        <input
          className="m-2"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="m-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="m-2 bg-blue-500" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
