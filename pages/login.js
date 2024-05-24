import React, { useState } from "react";
import { useRouter } from 'next/router';

import Layout from "../components/Layout";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  
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
    router.push('/index'); // Reemplaza  con la ruta a la que quieres redirigir

  };

  const handleCrear = (event) => {
    event.preventDefault();
    router.push('/crear-cuenta'); // Reemplaza  con la ruta a la que quieres redirigir

  }

  return (
    <Layout>

      <div className="container login-container">
        <div className="card signup-card">
          <div className="card-header">
            <h3>Iniciar Sesión</h3>
          </div>
          <div className="col-md-12 card-body">
            <form className="p-3" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-12">
                  <label htmlFor="username">Usuario</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={handleUsernameChange}
                    required
                  />
                </div>
              </div>
              <div className="row mt-3">

                <div className="col-md-12">
                  <label htmlFor="password">Contraseña:</label>
                  <input
                    type="password"
                    className="form-control"

                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-6">
                  <button className="p-3 w-100 btn btn-primary" type="submit">Ingresa</button>

                </div>
                <div className="col-md-6">
                  <button className="p-3 w-100 btn btn-success" onClick={handleCrear}>Crear cuenta</button>

                </div></div>

            </form>
            <div className="row mt-3">

              <a href="/recuperar-contrasena">¿Olvidaste tu contraseña?</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginForm;
