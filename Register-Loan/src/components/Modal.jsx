import "./Modal.css";

export default function Modal({ isVisible, errorMessage = null }) {
  if (!isVisible) return null;

  return (
    <div id="modal">
      <div
        id="modal-content"
        className={errorMessage ? "error" : "success"}
      >
        <h1>
          {errorMessage ? errorMessage : "Submitted Successfully"}
        </h1>
      </div>
    </div>
  );
}
