import 'components/RolexList/RolexList'
import './RolexList.css'
import { RolexService } from "services/RolexService";
import RolexListItem from 'components/RolexListItem/RolexListItem';
import React, { useState, useEffect, useCallback } from "react";
import RolexDetalhesModal from 'components/RolexDetalhesModal/RolexDetalhesModal';
import { ActionMode } from 'constants/index';

function RolexList({ rolexCriado, mode, updateRolex, deleteRolex, rolexEditado, rolexRemovido }) {

  const [rolexs, setRolex] = useState([]);

   const [rolexSelecionado, setRolexSelecionado] = useState({});

   const [rolexModal, setRolexModal] = useState(false);

  const adicionarItem = (rolexIndex) => {
          const rolex = { [rolexIndex]: Number(rolexSelecionado[rolexIndex] || 0) +1 }
          setRolexSelecionado({ ...rolexSelecionado, ...rolex});
  }
  const removerItem = (rolexIndex) => {
    const rolex = { [rolexIndex]: Number(rolexSelecionado[rolexIndex] || 0) -1 }
    setRolexSelecionado({...rolexSelecionado, ...rolex});
}

const getLista = async () => {
  const response = await RolexService.getLista();
  setRolex(response);
};

const getRolexById = async (rolexId) => {
  const response = await RolexService.getById(rolexId);
  const mapper = {
    [ActionMode.NORMAL]: () => setRolexModal(response),
    [ActionMode.ATUALIZAR]: () => updateRolex(response),
    [ActionMode.DELETAR]: () => deleteRolex(response),
  };

  mapper[mode]();
};

const adicionaRolexNaLista = useCallback((rolex) => {
  const lista = [...rolexs, rolex];
  setRolex(lista);
},
[rolexs]
)
useEffect(() => {
  if (
    rolexCriado &&
    !rolexs.map(({ id }) => id).includes(rolexCriado._id)
  ) {
    adicionaRolexNaLista(rolexCriado);
  }
}, [adicionaRolexNaLista, rolexCriado, rolexs]); // eslint-disable-line react-hooks/exhaustive-deps

useEffect(() => {
  getLista();
}, [rolexEditado, rolexRemovido]);

    return <div className="RolexList">
  <section className="cards" id="all-rlx">

{rolexs.map((rolex, index) =>
  <RolexListItem
    mode={mode}  
    key={`card-${index}`} 
    rolex={rolex}
    quantidadeSelecionada = {rolexSelecionado[index]}
    index = {index}
    onRemove = {index => removerItem(index)}
    onAdd = {index => adicionarItem(index)}
    clickItem = {(rolexId) => getRolexById(rolexId)}
  />
)}
</section>`
{rolexModal && <RolexDetalhesModal rolex={rolexModal} closeModal={() => setRolexModal(false)} />}
    </div>;
}
  
export default RolexList;