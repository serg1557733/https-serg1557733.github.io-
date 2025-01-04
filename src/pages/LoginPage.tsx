import { useState } from "react";
import { LoginPageProps } from "../types/types";
import DeviceMotionComponent from "./Device";

const Login = ({ onLogin }: LoginPageProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showDeviceMotion, setShowDeviceMotion] = useState(false);
  const defaultUser = import.meta.env.VITE_API_USER;
  const defaultPass = import.meta.env.VITE_API_PASS;
  const handleLogin = () => {
    if (!username || !password) {
      setErrorMessage("Username and password cannot be empty");
    } else if (username === defaultUser && password === defaultPass) {
      //mock authentication from .env
      localStorage.setItem("auth", defaultUser);
      onLogin(defaultUser);
      setErrorMessage(null);
    } else {
      setErrorMessage("Password or login is incorrect");
    }
  };

  return (
    <div className="flex-col content-center justify-items-center w-[100vw] h-[100vh]">
      {showDeviceMotion && (
        <div className="absolute top-4 left-10">
          <DeviceMotionComponent />
        </div>
      )}
      <div className="m-2 w-3/4">
        <h1 className="m-2">Login</h1>
        <h2>Enter your username and password</h2>
      </div>

      <div className="flex flex-col m-3 w-1/4">
        <input
          className="m-2"
          type="text"
          placeholder="Username"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="m-2"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="m-2 bg-blue-500" onClick={handleLogin}>
          Login
        </button>
        <div className="absolute top-3 right-10 flex items-center">
          <label htmlFor="showDeviceMotion" className="m-2 text-xs">
            Device Tets Info
          </label>
          <input
            type="checkbox"
            name="showDeviceMotion"
            onChange={() => setShowDeviceMotion(!showDeviceMotion)}
          />
        </div>

        {errorMessage && <div>{errorMessage}</div>}
      </div>
    </div>
  );
};

export default Login;
