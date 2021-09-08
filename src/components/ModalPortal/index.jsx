import './index.scss';

import { createPortal } from "react-dom";
import { CancelNoCircleIcon } from "../../assets/static/icons";

const Modal = ({ onClose, children }) => {
  const onDimmedAreaClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <section className="modal-container" onClick={onDimmedAreaClick}>
      <div className="modal-inner">
        <button type="button" onClick={onClose}>
          <CancelNoCircleIcon />
        </button>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </section>
  )
}

const ModalPortal = (props) => {
  const $MessageModal = document.getElementById("modal");

  if (!$MessageModal) throw Error("cannot find modal wrapper");

  return createPortal(<Modal {...props} />, $MessageModal);
};

export default ModalPortal