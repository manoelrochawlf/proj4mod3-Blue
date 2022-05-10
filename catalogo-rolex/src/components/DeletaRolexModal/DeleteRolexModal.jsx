import "./DeletaRolexModal.css";
import Modal from "components/Modal/Modal";
import { RolexService } from "services/RolexService";

function DeletaRolexModal({ closeModal, rolexParaDeletar, onDeleteRolex }) {
  const handleDelete = async (rolex) => {
    await RolexService.deleteById(rolex._id);
    onDeleteRolex(rolex);
    closeModal();
  };

  return (
    <Modal closeModal={closeModal}>
      <div className="DeletaRolexModal">
        <h2>Confirmação</h2>
        <p>
          Você realmente deseja remover <b>{rolexParaDeletar.name}</b>
        </p>

        <img
          className="DeletaRolexModal__img"
          src={rolexParaDeletar.img}
          alt={rolexParaDeletar.name}
        />

        <br />

        <div>
          <button
            onClick={() => handleDelete(rolexParaDeletar)}
            className="DeletaROlexModal__confirmar"
          >
            {" "}
            Confirmar{" "}
          </button>
          <button onClick={closeModal} className="DeletaRolexModal__cancelar">
            {" "}
            Cancelar{" "}
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeletaRolexModal;