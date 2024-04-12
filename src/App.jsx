import { useGlobalContext } from "./context/globalContext";
import "./App.css";
import Home from "./pages/home.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import Header from "./components/header.jsx";
import Dashboard from "./pages/dashboard.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  const { isLogged } = useGlobalContext();
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={isLogged ? <Dashboard /> : <Login />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
