import { RutasAPI } from "../assets/RutasAPI";
export default async function newFactura(name, description, price, paymethod, date, type, tags, user) {
  try {
    // Realiza la solicitud a la API
    const response = await fetch(RutasAPI.NewFinanza, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        desc: description,
        price: price,
        payMethod: paymethod,
        date: date,
        type: type,
        tags: tags,
        user: user
      }),
    });

    if (response.ok) {
      return 1;
    } else {
      console.error("Error en la creación de la finanza");
      return 0;
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
}
