import { RutasAPI } from "../assets/RutasAPI";
export default async function newTag(name, finanzas, user) {
  try {
    // Realiza la solicitud a la API
    const response = await fetch(RutasAPI.NewTag, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        finanzas, finanzas,
        user: user,
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
