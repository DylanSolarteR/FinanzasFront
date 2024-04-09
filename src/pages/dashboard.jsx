import {useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';


const Dashboard= () => {
    
    const [user, setUser] = useState({})
    const location = useLocation();
            

    useEffect(()=>{
        async function getUser(){
            const usuario = location.state.user
            setUser(usuario)
        }
        getUser()
    },[])



    return(
        <>
            <div className="pt-32 min-h-screen h-screen flex flex-col items-center justify-start bg-slate-500">
                <div className="block text-white text-center w-11/12 mb-5">
                    <h1 className="text-4xl font-bold mb-4">DashBoard</h1>
                    <p className="text-2xl font-bold mb-4">Bienvenido {user.name}</p>
                    <p className="text-2xl font-bold mb-4">Tu correo es {user.email}</p>
                </div>
                <div className='bg-slate-300 text-center rounded-lg w-11/12'>
                   Tus Finanzas
                </div>
            </div>
        </>
        
    )
}

export default Dashboard;