import { useState, useEffect } from "react";
import Modal from "components/Modal/Modal";
import './AdicionaEditaRolexModal.css'
import { RolexService } from "services/RolexService";


import { ActionMode } from "constants/index";



function AdicionaEditaRolexModal({ closeModal, onCreateRolex, mode, rolexToUpdate, onUpdateRolex }) {

  const form = {
      name: rolexToUpdate?.name ?? '',
      description: rolexToUpdate?.description ?? '',
      img: rolexToUpdate?.img ?? '',
  }

  const [state, setState] = useState(form);
  const [canDisable, setCanDisable] = useState(true);
  const canDisableSendButton = () => {
    const response = !Boolean(
        state.name.length
        && state.description.length
        && state.img.length         
    );

    setCanDisable(response);
};

  const handleChange = (e, name) => {
      setState({ ...state, [name]: e.target.value, });
  };
  
  useEffect(() => {
    canDisableSendButton();
})

const handleSend = async () => {

    const renomeiaCaminhoImg = (imgPath) => imgPath.split(/\\|\//).pop();

    const { name, description, img} = state;

    const rolex = {
        ...(rolexToUpdate && { _id: rolexToUpdate?._id }),
        name,
        description,
        img: `assets/images/${renomeiaCaminhoImg(img)}`
    }


    const serviceCall = {
        [ActionMode.NORMAL]: () => RolexService.create(rolex),
        [ActionMode.ATUALIZAR]: () => RolexService.updtateById(rolexToUpdate?._id, rolex),
    }

  
      const response = await serviceCall[mode]();
      
      const actionResponse = {
        [ActionMode.NORMAL]: () => onCreateRolex(response),
        [ActionMode.ATUALIZAR]: () => onUpdateRolex(response),
      }
      

  
      actionResponse[mode]();
    
  
      const reset = {
        name: '',
        description: '',
        img: '',
      }
  
      setState(reset);
    
    closeModal();

    }

  return (

      <Modal closeModal={closeModal}>
          <div className="AdicionaRolexModal">
              <form autoComplete="off">

                  <h2> { ActionMode.ATUALIZAR === mode ? 'Atualizar' : 'Adicionar ao' } Cardápio </h2>
                  
                  <div>
                      <label className="AdicionaRolexModal__text" htmlFor="name"> Modelo: </label>
                      <input
                          id="name"
                          placeholder="Datejust Rolex"
                          type="text"
                          value={state.name}
                          onChange={(e) => handleChange(e, "name")}
                          required />
                  </div>
                  <div>
                      <label className="AdicionaRolexModal__text" htmlFor="description"> Descricao: </label>
                      <input
                          id="description"
                          placeholder="Uma perene renovação"
                          type="text"
                          value={state.description}
                          onChange={(e) => handleChange(e, "description")}
                          required/>
                  </div>
                  <div>
                      <label className="AdicionaRolexModal__text  AdicionaRolexModal__img-label" htmlFor="img" >
                          {!state.img.length ? "Selecionar Imagem" : state.img}
                      </label>
                      <input
                          className=" AdicionaRolexModal__img"
                          id="img"
                          type="file"
                          accept="image/png, image/gif, image/jpeg"
                          onChange={(e) => handleChange(e, "img")}
                          required/>
                  </div>
                  <button
                      className="AdicionaRolexModal__enviar"
                      type="button"
                      disabled={canDisable}
                      onClick={handleSend} >
                    { ActionMode.NORMAL === mode ? 'Enviar' : 'Atualizar' }
                  </button>
              </form>
          </div>
      </Modal>
  );
}

export default AdicionaEditaRolexModal;