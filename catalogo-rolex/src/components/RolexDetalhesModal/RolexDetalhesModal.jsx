import "./RolexDetalhesModal.css";
import Modal from "components/Modal/Modal";

function RolexDetalhesModal({ rolex, closeModal }) {
  return (
    <Modal closeModal={closeModal}>
      <section id="cards">
            <div class="card">
                <img src={rolex.img} alt={`${rolex.name}`}/>
                <h2>{rolex.name}</h2>
                <p class="descricao">{rolex.description}</p>
            </div>           
    </section>
    </Modal>
  );
}

export default RolexDetalhesModal;