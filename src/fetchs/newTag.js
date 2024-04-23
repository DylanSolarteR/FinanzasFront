import { RutasAPI } from "../assets/RutasAPI";
export default async function newTag(name, finanzas, userid) {
  try {
    const response = await fetch(RutasAPI.NewTag, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        finanzas,
        user: userid,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Error en la creación del Tag");
      return 0;
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
}
