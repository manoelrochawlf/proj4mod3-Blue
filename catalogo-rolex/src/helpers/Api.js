const RolexContext = {
    rolexEndpoint: () => `${Api.baseUrl}/rolex`,
    rolexLista: () => `${RolexContext.rolexEndpoint()}/all-rolex`,
    rolexById: (id) => `${RolexContext.rolexEndpoint()}/one-rolex/${id}`,
    createRolex: () => `${RolexContext.rolexEndpoint()}/create-rolex`,
    updateRolexById: (id) => `${RolexContext.rolexEndpoint()}/update-rolex/${id}`,
    deleteRolexById: (id) => `${RolexContext.rolexEndpoint()}/delete-rolex/${id}`,
  };
  
  
  export const Api = {
    baseUrl: "http://localhost:3333",
    ...RolexContext,
  };