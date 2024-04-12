import { RutasAPI } from "../assets/RutasAPI";
export default async function fetchUsers(auth) {
  try {
    const response = await fetch(RutasAPI.ReadAllUsuarios, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: auth
      },
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
