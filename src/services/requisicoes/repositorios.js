import api from "../api";

export async function pegarRepodoUser(id) {
  try {
    const resultado = await api.get(`/users/${id}/repos`);
    return resultado.data;
  } catch (err) {
    console.log(err);
    return [];
  }
}
export async function salvarRepodoUser(postId, nome, data, id) {
  try {
    await api.put(`/users/${id}/repos`, {
      name: nome,
      data: data,
      postId: postId,
      id: id,
    });
    return "sucesso";
  } catch (err) {
    console.log(err);
    return "erro";
  }
}

export async function criarRepo(postId, nome, data) {
  try {
    await api.post(`/repos/`, {
      name: nome,
      data: data,
      postId: postId,
    });
    return "sucesso";
  } catch (err) {
    console.log(err);
    return "erro";
  }
}
export async function deletarRepo(id) {
  try {
    await api.delete(`/repos/${id}`);
    return "sucesso";
  } catch (err) {
    console.log(err);
    return "erro";
  }
}
