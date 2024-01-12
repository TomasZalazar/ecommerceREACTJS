import { useContext, useState } from "react";
import "./LoginScreen.css";
import { UserContext } from "../../context/UserContext";

const LoginScreen = () => {
  const { login, register } = useContext(UserContext);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    login(values);
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="relative text-4xl font-semibold  text-gray-400 mb-8">
          LOGIN
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              type="email"
              name="email"
              className="border p-2"
              value={values.email}
              onChange={handleInputChange}
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
            />
            <label>Password</label>
          </div>
          <center>
            <button type="submit">Ingresar</button>
          </center>
        </form>
        <button
            className={`
             bg-sky-700 text-white 
            w-20
            h-9
            border
            rounded-l
            ring-offset-neutral-900
            hover:border-sky-500
            hover:text-white
            hover:bg-sky-500
            text-l
            font-semibold
            `}
            onClick={() => register(values)}
          >
            registrate
          </button>
      </div>

      {/* <div className="w-80 h-96 bg-sky-100 rounded-xl">
        <h2 className="text-3xl p-8 font-semibold ">LOGIN</h2>
        <hr />
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4  w-80">
          <input
            type="email"
            name="email"
            placeholder="Email ej: email@email.com"
            className="border p-2"
            value={values.email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border p-2"
            value={values.password}
            onChange={handleInputChange}
          />
          <button
            className={`
             bg-sky-700 text-white 
            w-20
            h-9
            border
            rounded-l
            ring-offset-neutral-900
            hover:border-sky-500
            hover:text-white
            hover:bg-sky-500
            text-l
            font-semibold
            `}
            type="submit"
          >
            Ingresar
          </button>
        </form>
      </div> */}
    </div>
  );
};

export default LoginScreen;
