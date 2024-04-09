import { Link } from "react-router-dom";

const Home= () => {

    return(
        <>
            <div className="min-h-screen h-screen flex items-center justify-center bg-slate-500">
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a AppFinanzas</h1>
        <p className="text-lg mb-8">
          La aplicación simple para tomar finanzas personasles y organizar tus cuentas.
        </p>
            <Link to="/register"
             // Puedes reemplazar esto con la ruta real de tu aplicación
            className="bg-white text-blue-500 py-2 px-4 rounded hover:bg-gray-200 transition-colors duration-300"
            >
            ¡Registrate ahora!
            </Link>
      </div>
    </div>
        </>
        
    )
}

export default Home;