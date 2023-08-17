"use client";
import React from 'react';
import "./login.css"
import { useRouter } from 'next/navigation'

const LoginForm: React.FC = () => {
  // const [username, setUsername] = React.useState('');
  // const [password, setPassword] = React.useState('');
  //
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log('username:', username);
  //   console.log('password:', password);
  // };

    const router = useRouter()
  const handleLogin = (e) => {
      e.preventDefault()
      router.push("../admin")
  }

  return (
      <body>
      <div className="bg" id="bg">
          <img src="/background.jpeg" alt="me" width="2877" height="1847" />
      </div>
      <form>
          <div className="form-field">
              <input type="email" placeholder="Username" required/>
          </div>

          <div className="form-field">
              <input type="password" placeholder="Password" required/></div>
              <div className="form-field">
                  <button onClick={handleLogin} className="btn" type="submit">Log in</button>
              </div>
      </form>
      </body>
    );
};

export default LoginForm;