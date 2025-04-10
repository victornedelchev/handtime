import "./EditModal.css";

export default function EditModal({
  brand,
  model,
  onClose,
  onConfirm,
}) {
  return (
    <div className="modal-overlay">
      <div onClick={onClose} className="modal-backdrop"></div>
      <div className="modal-container">
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal-title">Confirm Edit</h2>
        <p className="modal-message">
          Are you sure you want to edit this watch to brand {brand} and model {model}?
        </p>
        <div className="modal-actions">
          <button
            className="modal-btn modal-btn-cancel"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="modal-btn modal-btn-confirm"
            onClick={onConfirm}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}