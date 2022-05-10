import { Api } from "helpers/Api";

const parseResponse = (response) => response.json();


export const RolexService = {
  getLista: () =>
    fetch(Api.rolexLista(), { method: "GET" }).then(parseResponse),
  getById: (id) =>
    fetch(Api.rolexById(id), { method: "GET" }).then(parseResponse),
  create: (rolex) =>
    fetch(Api.createRolex(), { method: "POST", body: JSON.stringify(rolex), mode: "cors", headers: {
      "Content-Type": "application/json",
  } }).then(parseResponse),
  updtateById: (id, rolex) =>
    fetch(Api.updateRolexById(id), { method: "PUT", body: JSON.stringify(rolex), mode: "cors", headers: {
      "Content-Type": "application/json",
} }).then(parseResponse),
  deleteById: (id) =>
    fetch(Api.deleteRolexById(id), { method: "DELETE" }).then(parseResponse),
};





