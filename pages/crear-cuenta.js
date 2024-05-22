import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from "../components/Layout";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthDate: '',
    country: '',
    termsAccepted: false,
  });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log(formData);
      router.push('/index'); // Reemplaza  con la ruta a la que quieres redirigir
  

  };

  return (

    <Layout>
     <div className="row">

    
    <div className="container mt-5">
      <div className="card signup-card">
        <div className="card-header">
          <h3>Crear Cuenta</h3>
        </div>
        <div className="col-md-12 card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="firstName">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName">Apellido</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              </div>
              
            <div className="row">
            <div className="col-md-6">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
                <label htmlFor="tel">Telefono</label>
                <input
                  type="text"
                  className="form-control"
                  id="tel"
                  name="teñ"
                  value={formData.tel}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row">
            <div className="col-md-6">

              <label htmlFor="birthDate">Fecha de Nacimiento</label>
              <input
                type="date"
                className="form-control"
                id="birthDate"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="country">País</label>
              <select
                className="form-control"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona tu país</option>
                <option value="FR">Ucrania</option>
                <option value="DE">Marruecos</option>
                <option value="ES">Argelia</option>
                {/* Agrega más países según sea necesario */}
              </select>
            </div>
            </div>
            <div className="row mt-3 mb-5">
            <div className="col-md-12">
           
              <input
                type="checkbox"
                className="form-check-input"
                id="termsAccepted"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                required
              />
              <label className="form-check-label" htmlFor="termsAccepted">
                Acepto los términos y condiciones
              </label>
              </div>
            </div>
            <div className="row mt-3">

            <div className="col-md-12">

            <button type="submit" className="p-3 w-100 btn btn-primary mb-3">
              Guardar
            </button>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
    </Layout>
  );
};

export default SignupForm
