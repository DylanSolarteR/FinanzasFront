import { RutasAPI } from "../assets/RutasAPI";
export default async function updateTagById(id, name, finanzasArray) {
  try {
    // Realiza la solicitud a la API
    const response = await fetch(RutasAPI.updateTagById + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        finanzas: finanzasArray,
      }),
    });

    if (response.ok) {
      return 1;
    } else {
      console.error("Error en la creación de la Tag");
      return 0;
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
}
