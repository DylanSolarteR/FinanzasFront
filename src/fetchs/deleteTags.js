import { RutasAPI } from "../assets/RutasAPI";
export default async function deleteTags(id) {
  try {
    // Realiza la solicitud a la API
    const response = await fetch(RutasAPI.DeleteTags+id, {
      method: "DELETE"
    });

    if (response.ok) {
      return 1;
    } else {
      console.error("Error en el borrado");
      return 0;
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
}
