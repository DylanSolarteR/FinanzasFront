import { RutasAPI } from "../assets/RutasAPI";

export default async function validarLogin(correo, pw) {
  try {
    // Realiza la solicitud a la API con la autorización en el encabezado
    const response = await fetch(RutasAPI.Login, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: correo,
        pss: pw,
      })
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Error en el inicio de sesión");
      return 0;
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
}
