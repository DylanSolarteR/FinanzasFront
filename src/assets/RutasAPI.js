const dominio = "http://localhost:3000";
export const RutasAPI = {
  AddUsuario: dominio+"/usuario/add",
  ReadAllUsuarios: dominio+"/usuario/read",

  Login: dominio+"/usuario/login",
  NewFinanza: dominio+"/finanza/add",
  NewTag: dominio+"/tag/add",
  DeleteFinanza: dominio+"/finanza/delete/",
  DeleteTags: dominio+"/tag/delete/",
  ReadFinanzaByUser: dominio+"/finanza/read-by-user-id/",
  ReadTagsByUser: dominio+"/tag/read-by-user-id/",
  updateTagById: dominio+"/tag/update/",
  updateFinanzaById: dominio+"/finanza/update/",
};
