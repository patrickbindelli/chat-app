import axios from "axios";

const SERVER_URL = "http://bdfemasschat-env-2.eba-7p43uarw.sa-east-1.elasticbeanstalk.com";

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

export const getContacts = async (login) => {
  const users = await axios
    .get(`${SERVER_URL}/message/buscarUsuarios/${login}`)
    .then(({ data }) => data)
    .catch((err) => console.log("An error ocurred on the getContacts method: ", err));

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
    .catch((err) => console.log("An error ocurred on the getUsersWithMessages method: ", err));
};
