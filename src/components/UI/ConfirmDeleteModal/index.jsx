import './styles.css';
import Modal from '../Modal';

export default function ConfirmDeleteModal({
  children = 'Tem certeza que deseja excluir?',
  isOpen,
  handleConfirm,
  handleCancel,
  style = {},
}) {
  return (
    <Modal
      isOpen={isOpen}
      width="fit-content"
      borderRadius="15px"
      lineTitle={false}
      btnClose={false}
      padding="0px"
    >
      <div style={style} className="delete-confirm-container-modal">
        {children}
      </div>

      <div className="btn-confirm-delete-modal">
        <div className="btn-cancel-delete-container">
          <button onClick={handleCancel} className="btn-cancel-delete">
            Cancelar
          </button>
        </div>
        <div className="btn-confirm-delete-container">
          <button onClick={handleConfirm} className="btn-confirm-delete">
            Excluir
          </button>
        </div>
      </div>
    </Modal>
  );
}
