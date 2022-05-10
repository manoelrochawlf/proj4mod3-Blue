import "./RolexListItem.css";
import { ActionMode } from "constants/index";

function RolexListItem( { rolex, quantidadeSelecionada, index, onRemove, onAdd, clickItem, mode } ) {

	
  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button
        disabled={mode !== ActionMode.NORMAL}
        className="btn_delete" onClick={(e) => {e.stopPropagation(); onRemove(index)}}>
        remover
      </button>
    );

  const badgeCounter = (canRender, index) =>
    Boolean(canRender) && (
      <span className="relogio__badge"> {quantidadeSelecionada} </span>
    );

  const badgeAction = (canRender) => {
    if (canRender) return (<span className={`RolexListItem__tag ${mode === ActionMode.DELETAR && 'RolexListItem__tag--deletar'}`}> { mode } </span>);
  }

  return (
    <div className={`card 
    ${mode !== ActionMode.NORMAL && 'RolexListItem--disable'}
    ${mode === ActionMode.DELETAR && 'RolexListItem--deletar'}
    `}
     key={`card-${index}`}
      onClick={() => clickItem(rolex._id)}>

      {badgeCounter(quantidadeSelecionada, index)}
      {badgeAction(mode !== ActionMode.NORMAL)}
      

      <img className="img" src={rolex.img} alt="Datejust Rolex" />

      <div className="textimg">
        <p className="descricao">{rolex.name}</p>
        <p className="descricao">{rolex.description}</p>
      </div>
      <section className="btn-container">
        <button 
        disabled={mode !== ActionMode.NORMAL} 
        className="btn-adicionar" 
        onClick={(e) => { e.stopPropagation(); onAdd(index); }}>
          Adicionar
        </button>
        {removeButton(quantidadeSelecionada, index)}
      </section>
    </div>
  );
}

export default RolexListItem;
