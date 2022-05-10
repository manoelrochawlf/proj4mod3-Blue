import './Home.css';
import { useState } from "react";
import RolexList from 'components/RolexList/RolexList';
import Navbar from 'components/Navbar/Navbar';
import AdicionaEditaRolexModal from 'components/AdicionaEditaRolexModal/AdicionaEditaRolexModal';
import { ActionMode } from 'constants/index';
import DeletaRolexModal from 'components/DeletaRolexModal/DeleteRolexModal';

function Home() {

  const [rolexParaAdicionar, setRolexParaAdicionar] = useState();
  const [canShowAdicionaRolexModal, setCanShowAdicionaRolexModal] = useState(false);
  const [rolexParaEditar, setRolexParaEditar] = useState();
  const [rolexParaDeletar, setRolexParaDeletar] = useState();
  const [rolexRemovido, setRolexRemovido] = useState();
  const [rolexEditado, setRolexEditado] = useState();
  const [modoAtual, setModoAtual] = useState(ActionMode.NORMAL);

  const handleActions = (action) => {
    const novaAcao = modoAtual === action ? ActionMode.NORMAL : action;
    setModoAtual(novaAcao);
  }

const handleDeleteRolex = (rolexToDelete) => {
  setRolexParaDeletar(rolexToDelete);
}


const handleUpdateRolex = (rolexToUpdate) => {
  setRolexParaEditar(rolexToUpdate);
  setCanShowAdicionaRolexModal(true);
}

const handleCloseModal = () => {
  setCanShowAdicionaRolexModal(false);
  setRolexParaAdicionar();
  setRolexParaDeletar();
  setRolexParaEditar();
  setModoAtual(ActionMode.NORMAL);
}

  return (

    <div className="Home">

      <Navbar
        mode={modoAtual}
        createRolex={() => setCanShowAdicionaRolexModal(true)}
        updateRolex={() =>  handleActions(ActionMode.ATUALIZAR)}
        deleteRolex={() => handleActions(ActionMode.DELETAR)} /> 
      
      <div className="Home__container">
    
        <RolexList
          mode={modoAtual}
          rolexCriado={rolexParaAdicionar}
          rolexEditado={rolexEditado}
          rolexRemovido={rolexRemovido}
          deleteRolex={handleDeleteRolex}
          updateRolex={handleUpdateRolex}
        />

        {
          canShowAdicionaRolexModal &&
          <AdicionaEditaRolexModal
            mode={modoAtual}
            onCreateRolex={(rolex) => setRolexParaAdicionar(rolex)}
            rolexToUpdate={rolexParaEditar} 
            onUpdateRolex={(rolex) => setRolexEditado(rolex)}
            closeModal={handleCloseModal}
             />
        }

        {
            rolexParaDeletar &&
            <DeletaRolexModal
            rolexParaDeletar={rolexParaDeletar}
            closeModal={handleCloseModal}
            onDeleteRolex={(rolex) => setRolexRemovido(rolex)}
          />
        }

      </div>
    </div>
    
  );
}
  export default Home;