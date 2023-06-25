import axios from "axios";

const SERVER_URL = "http://10.0.0.158:8080";

export const getUser = async (identification) => {
  const user = await axios
    .get(`${SERVER_URL}/message/buscarUsuarios/${identification}`)
    .then(({ data }) => data)
    .catch((err) => console.log("An error ocurred on the getUser method: ", err));

  return user;
};

export const getUsersWithMessages = async (id) => {
  const users = await axios
    .get(`${SERVER_URL}/message/buscarUsuariosComConversa/${id}`)
    .then(({ data }) => data)
    .catch((err) => console.log("An error ocurred on the getUsersWithMessages method: ", err));

  return users;
};

export const getMessages = async (id, idOther) => {
  const messages = await axios
    .get(`${SERVER_URL}/message/buscarMensagensComUmUsuario/${id}/${idOther}`)
    .then(({ data }) => data)
    .catch((err) => console.log("An error ocurred on the getUsersWithMessages method: ", err));

  return messages;
};

export const sendMessage = async (idFrom, idTo, message) => {
  await axios
    .post(`${SERVER_URL}/message/enviarMensagem`, {
      idFrom,
      idTo,
      mensagem: message,
    })
    .then(() => {
      console.log("aAA");
    })
    .catch((err) => console.log("An error ocurred on the getUsersWithMessages method: ", err));
};
