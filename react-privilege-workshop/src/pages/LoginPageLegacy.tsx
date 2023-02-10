import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [isUsernameError, setIsUsernameError] = useState(false);
  const [password, setPassword] = useState('');
  const [isPasswordError, setIsPasswordError] = useState(false);

  const handleLogin = () => {
    if (!username) {
      setIsUsernameError(true);
      return;
    }
    if (!password) {
      setIsPasswordError(true);
      return;
    }
    if (username && password) {
      // call api login success
      // save token to database
      navigate('/dashboard');
    }
  };

  return (
    <div className="h-screen flex align-items-center justify-content-center">
      <div className="card shadow-2 border-round w-4 p-4">
        <div className="text-center text-3xl font-medium text-900 mb-3">
          Login
        </div>
        <div className="field">
          <label htmlFor="username" className="block">
            Username
          </label>
          <InputText
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="username"
            aria-describedby="username-help"
            className="block w-full b-3"
          />
          {isUsernameError && (
            <small id="username-help" className="block text-red-400">
              Enter your username
            </small>
          )}
        </div>
        <div className="field">
          <label htmlFor="password" className="block">
            Password
          </label>
          <InputText
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            type="password"
            aria-describedby="password-help"
            className="block w-full b-3"
          />
          {isPasswordError && (
            <small id="password-help" className="block text-red-400">
              Enter your password.
            </small>
          )}
        </div>
        <Button label="Login" className="w-full" onClick={handleLogin} />
      </div>
    </div>
  );
}
