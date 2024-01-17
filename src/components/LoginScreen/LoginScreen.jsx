import { useContext, useState } from "react";
import "./LoginScreen.css";
import { UserContext } from "../../context/UserContext";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";

const LoginScreen = () => {
  const { login, register, googleLogin } = useContext(UserContext);

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

  const handleSubmit = async (e) => {
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
      await login(values);
      Swal.fire({
        icon: 'success',
        title: '¡Inicio de sesión exitoso!',
        showConfirmButton: false,
        timer: 1500
      });
      
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error al iniciar sesión',
        text: 'Verifica tus credenciales',
      });
    }
  };

  const handleRegister = async () => {
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
        <div className=" m-2 items-center  justify-around ">
        <h2 className="relative text-2xl font-semibold  text-gray-100 mb-8">
        👟 TodoZapas 👟
        </h2>
        </div>
        <h3 className="flex items-start relative text-3xl font-semibold  text-gray-400 mb-8">
          Login
        </h3>
        <form onSubmit={handleSubmit}>
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
              autoComplete="current-password"
            />
            <label>Password</label>
          </div>
          <center>
            <button type="submit">INGRESAR</button>
          </center>
        </form>
        <div className="flex gap-4 justify-around mt-8" >
        <Link
        to="/register"
        >
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
          
          >
            Registrarse
          </button>
        </Link>
        
        <button
            className={`
             bg-sky-900 text-white 
             w-72
             h-14
            border
            rounded
            ring-offset-neutral-900
            hover:border-sky-500
            hover:text-white
            hover:bg-sky-500
            text-l
            font-semibold
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

export default LoginScreen;
