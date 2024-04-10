import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import fetchUsers from '../fetchs/fetchUsers'
import validarLogin from '../fetchs/loginValidation'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function getUser(auth) {
        const fetchedUsers = await fetchUsers(auth);
        const usuario = fetchedUsers.usuarios.find(u => u.email==email);
        return usuario;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await validarLogin(email, password);
        if(response){
            const user = await getUser(response.token)
            console.log(response.token)
            navigate('/dashboard', { state: {user: user} });
        }
    };

    return(
        <>
            <div className="bg-slate-100 min-h-screen flex items-center justify-center place-items-center">
                <div className="bg-slate-50 p-8 rounded-lg shadow-md w-96">
                    <h1 className="text-2xl font-bold mb-6">Iniciar Sesión</h1>
                    <form className='grid' onSubmit={handleSubmit}>
                        <label className="mb-4">
                            <span className="text-gray-700">Correo electronico:</span>
                            <input
                                type="text"
                                value={email}
                                placeholder='Ej: pedro@example.com'
                                className="mt-1 w-full rounded-md p-1 focus:outline-slate-400 border-black border-2 placeholder:italic placeholder:text-slate-400"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                        <label className=" mb-4">
                            <span className="text-gray-700">Contraseña:</span>
                            <input
                            type="password"
                            value={password}
                            placeholder='Ej: 12345'
                            onChange={(e) => setPassword(e.target.value)}
                            className=" mt-1 w-full rounded-md p-1 border-black border-2 focus:outline-slate-400"
                            />
                        </label>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                        >
                        Iniciar Sesión
                        </button>
                        <p className='text-gray-700 text-center'>¿No tienes cuenta? <Link to='/register' className='font-bold'>Registrate</Link></p>
                    </form>
                </div>
            </div>
        </>
    )
}