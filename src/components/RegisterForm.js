import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import '../App.css'

export const RegisterForm = ({ setUser }) => {
  const [formData, setFormData] = useState({
    identification: '',
    identificationType: '',
    firstName: '',
    secondName: '',
    lastName: '',
    secondLastName: '',
    address: '',
    email: ''
  });
  const [error, setError] = useState(false);
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault()
    try {
      if (
        !formData.identification ||
        !formData.identificationType ||
        !formData.firstName ||
        !formData.lastName ||
        !formData.address ||
        !formData.email
      ) {
        setError(true)
        return
      }
      // Aquí podrías enviar los datos del formulario al servidor o realizar cualquier otra acción necesaria
      console.log('Datos del formulario:', formData)      
    } catch (error) {
      console.log('error en formulario registro');
      setError(false)      
    }
  }

  return (
    <form className="Register-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="identification"
        value={formData.identification}
        onChange={handleChange}
        placeholder="Identificación"
      />
      <input
        type="text"
        name="identificationType"
        value={formData.identificationType}
        onChange={handleChange}
        placeholder="Tipo de Identificación"
      />
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="Primer Nombre"
      />
      <input
        type="text"
        name="secondName"
        value={formData.secondName}
        onChange={handleChange}
        placeholder="Segundo Nombre (opcional)"
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Primer Apellido"
      />
      <input
        type="text"
        name="secondLastName"
        value={formData.secondLastName}
        onChange={handleChange}
        placeholder="Segundo Apellido (opcional)"
      />
      <textarea
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Dirección"
      ></textarea>
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="E-mail"
      />
      {error && <p className="Error-message">Todos los campos son obligatorios, excepto Segundo Nombre y Segundo Apellido</p>}
      <button type="submit">Registrarse</button>
    </form>
  );
};
