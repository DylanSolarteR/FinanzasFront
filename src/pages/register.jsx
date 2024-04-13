import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import fetchRegister from "../fetchs/fetchRegister";
import fetchUsers from "../fetchs/fetchUsers";
import SignLayOut from "../components/forms/sign-layout";
import SubmitButton from "../components/forms/SubmitButton";
import { useGlobalContext } from "../context/globalContext";

function Register() {
  const { setIsLogged, setUser, setToken, setUserFinanzas, setUserTags } =
    useGlobalContext();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function getUser() {
    const fetchedUsers = await fetchUsers();
    const usuario = fetchedUsers.usuarios.find((u) => u.email == email);
    return usuario;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetchRegister(username, email, password);
    if (response) {
      const user = await getUser();
      setUser(user);
      setIsLogged(true);
      setToken(response.token);
      setUserFinanzas(user.finanzas);
      setUserTags(user.tags);
      navigate("/dashboard");
    }
  };

  return (
    <SignLayOut>
      <h1 className="text-2xl font-bold mb-6">Registro</h1>
      <form className="grid" onSubmit={handleSubmit}>
        <label className="mb-4">
          <span className="text-gray-700">Nombre de Usuario:</span>
          <input
            type="text"
            value={username}
            placeholder="Ej: Pedro"
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1  w-full rounded-md p-1 focus:outline-slate-400 border-black border-2 placeholder:italic placeholder:text-slate-400"
          />
        </label>
        <label className="mb-4">
          <span className="text-gray-700">Correo Electrónico:</span>
          <input
            type="email"
            value={email}
            placeholder="Ej: hola@example.com"
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-md p-1 focus:outline-slate-400 border-black border-2 placeholder:italic placeholder:text-slate-400"
          />
        </label>
        <label className="mb-4">
          <span className="text-gray-700">Contraseña:</span>
          <input
            type="password"
            value={password}
            placeholder="Ej: 12345"
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full rounded-md p-1 focus:outline-slate-400 border-black border-2 placeholder:italic placeholder:text-slate-400"
          />
        </label>
        <SubmitButton>Registrarse</SubmitButton>
        <p className="text-gray-700 text-center">
          ¿Ya tienes cuenta?{" "}
          <Link to="/login" className="font-bold">
            Inicia Sesion
          </Link>
        </p>
      </form>
    </SignLayOut>
  );
}

export default Register;
