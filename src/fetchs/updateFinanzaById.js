import { RutasAPI } from "../assets/RutasAPI";
export default async function updateFinanzaById(
  id,
  name,
  desc,
  price,
  payMethod,
  date,
  type,
  tags
) {
  try {
    // Realiza la solicitud a la API
    const response = await fetch(RutasAPI.updateFinanzaById + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        desc,
        price,
        payMethod,
        date,
        type,
        tags,
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
