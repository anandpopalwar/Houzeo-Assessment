import { CloseIcon } from "../../helpers/Icons";
import "./Modal.scss";
import { useEffect, useRef } from "react";

const ModalComponent = ({ children, header, onClose }) => {
  const modalcontainerRef = useRef();
  const onEscClick = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    document.addEventListener("keyup", onEscClick, { signal });
    // console.log(modalcontainerRef.current.classList);

    return () => {
      controller.abort();
    };
  }, []);
  return (
    <div className="modal_parent_container slideInUp" ref={modalcontainerRef}>
      <div className="modal_main_container">
        <div className="header_container">{header}</div>
        <div className="content_container">{children}</div>
        <div onClick={onClose}>
          <CloseIcon />
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
