import { RutasAPI } from "../assets/RutasAPI";
export default async function fetchRegister(name, correo, pw) {
  try {
    // Realiza la solicitud a la API
    const response = await fetch(RutasAPI.AddUsuario, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: correo,
        pss: pw,
      }),
    });

    if (response.ok) {
      return 1;
    } else {
      console.error("Error en el inicio de sesión");
      return 0;
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
}
