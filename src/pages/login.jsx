import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import fetchUsers from "../fetchs/fetchUsers";
import validarLogin from "../fetchs/loginValidation";
import SignLayOut from "../components/forms/sign-layout";
import SubmitButton from "../components/forms/SubmitButton";
import { useGlobalContext } from "../context/globalContext";

export default function Login() {
  const { setIsLogged, setUser, setToken, updateFinanzas, updateTags } =
    useGlobalContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function getUser(auth) {
    const fetchedUsers = await fetchUsers(auth);
    const usuario = fetchedUsers.usuarios.find((u) => u.email == email);
    return usuario;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await validarLogin(email, password);
    if (response) {
      const user = await getUser(response.token);
      setUser(user);
      setIsLogged(true);
      setToken(response.token);
      updateFinanzas(user._id);
      updateTags(user._id);
      navigate("/dashboard");
    }
  };

  return (
    <SignLayOut>
      <h1 className="text-2xl font-bold mb-6">Iniciar Sesión</h1>
      <form className="grid" onSubmit={handleSubmit}>
        <label className="mb-4">
          <span className="text-gray-700">Correo electronico:</span>
          <input
            type="text"
            value={email}
            placeholder="Ej: pedro@example.com"
            className="mt-1 w-full rounded-md p-1 focus:outline-slate-400 border-black border-2 placeholder:italic placeholder:text-slate-400"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className=" mb-4">
          <span className="text-gray-700">Contraseña:</span>
          <input
            type="password"
            value={password}
            placeholder="Ej: 12345"
            onChange={(e) => setPassword(e.target.value)}
            className=" mt-1 w-full rounded-md p-1 border-black border-2 focus:outline-slate-400"
          />
        </label>
        <SubmitButton>Iniciar Sesión</SubmitButton>
        <p className="text-gray-700 text-center">
          ¿No tienes cuenta?{" "}
          <Link to="/register" className="font-bold">
            Registrate
          </Link>
        </p>
      </form>
    </SignLayOut>
  );
}
