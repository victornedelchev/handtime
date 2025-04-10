import "./DeleteModal.css";

export default function DeleteModal({
  name,
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
        <h2 className="modal-title">Confirm Deletion</h2>
        <p className="modal-message">
          Are you sure you want to delete {name} {model}? This action cannot be
          undone.
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
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
