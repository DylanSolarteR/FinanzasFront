import { RutasAPI } from "../assets/RutasAPI";
export async function readFinanzasByUserID(user_id) {
  try {
    const response = await fetch(RutasAPI.ReadFinanzaByUser + user_id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Error al leer finanzas por usuario");
      return 0;
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
}
