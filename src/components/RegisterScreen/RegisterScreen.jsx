import { useContext, useState } from "react";
import "./RegisterScreen.css"
import { UserContext } from "../../context/UserContext";
import Swal from 'sweetalert2';

const RegisterScreen = () => {
  const { register, googleLogin } = useContext(UserContext);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!values.email || !values.password) {
      Swal.fire({
        icon: 'error',
        title: 'Campos vacíos',
        text: 'Por favor, completa todos los campos',
      });
      return;
    }

    try {
      await register(values);
      Swal.fire({
        icon: 'success',
        title: '¡Bienvenido a TODOZAPAS!',
        text: 'Tu cuenta ha sido creada correctamente.',
      });
      
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error al registrar',
        text: 'Verifica tus credenciales',
      });
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="relative text-4xl font-semibold  text-gray-400 mb-8">
          REGISTRO
        </h2>

        <form onSubmit={handleRegister}>
          <div className="user-box">
            <input
              type="email"
              name="email"
              className="border p-2"
              value={values.email}
              onChange={handleInputChange}
              autoComplete="email"
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="password"
              className="border p-2"
              value={values.password}
              onChange={handleInputChange}
              autoComplete="new-password" // Cambiado a new-password para indicar que es un campo de contraseña nueva
            />
            <label>Password</label>
          </div>
          <center>
            <button type="submit">Registrarse</button>
          </center>
        </form>
        <div className="flex gap-4 justify-around mt-8" >
          <button
            className={`
             bg-sky-900 text-white 
            w-36
            h-14
            border
            rounded
            ring-offset-neutral-900
            hover:border-sky-500
            hover:text-white
            hover:bg-sky-500
            text-l
            font-semibold
            flex items-center justify-center 
            `}
            onClick={googleLogin}
          >
            Iniciar sesión con Google
          </button>
        </div>
      
      </div>
    </div>
  );
};

export default RegisterScreen;
