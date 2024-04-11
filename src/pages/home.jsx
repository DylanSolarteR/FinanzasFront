import { Link } from "react-router-dom";

const Home= () => {
    return(
      <>
      <div className="min-h-screen h-screen flex items-center justify-center bg-slate-100">
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold mb-4 text-slate-700">Bienvenido a AppFinanzas</h1>
        <p className="text-lg mb-8 text-slate-700">
          La aplicación simple para finanzas personales y organizar tus cuentas.
        </p>
            <Link to="/register"
            className="bg-slate-200 text-xl text-slate-700 py-2 px-4 rounded hover:bg-slate-400 transition-colors duration-300"
            >
            ¡Registrate ahora!
            </Link>
      </div>
    </div>
        </>
        
    )
}

export default Home;