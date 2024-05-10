import React, { useState } from "react";
import Layout from "../components/Layout";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar la lógica de autenticación, como enviar los datos al servidor, etc.
    console.log("Usuario:", username);
    console.log("Contraseña:", password);
    // Luego de manejar la autenticación, puedes redirigir al usuario a otra página
  };

  return (
    <Layout>
     <header className="row">
        <div className="col-md-8 offset-md-2 d-flex align-items-center">
          <div className="card card-body d-flex align-items-center main-banner login-container">
            <div className="row"> 
            <h2>Iniciar Sesión</h2>
            <form className="" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Usuario:</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </div>
              <div>
                <label htmlFor="password">Contraseña:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <button type="submit">Iniciar Sesión</button>
            </form>
            <div>
              <a href="/recuperar-contrasena">¿Olvidaste tu contraseña?</a>
            </div>
          </div>
          </div>
        </div>
      </header>
    </Layout>
  );
};

export default LoginForm;
