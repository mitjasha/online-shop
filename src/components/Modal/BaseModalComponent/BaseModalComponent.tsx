import React from "react";
import ReactDOM from "react-dom";
import "./BaseModalComponent.scss";

interface ModalProps {
  header?: string;
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
  children?: React.ReactNode;
}

const BaseModalComponent: React.FC<ModalProps> = ({
  header,
  isVisible,
  setIsVisible,
  children,
}) => {
  return ReactDOM.createPortal(
    <div>
      {isVisible && (
        <div
          className="modal__overlay"
          role="presentation"
          onClick={() => setIsVisible(false)}
        >
          <div
            className="modal"
            role="presentation"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal__btn-close"
              type="button"
              onClick={() => setIsVisible(false)}
            >
              &#x2715;
            </button>
            <div className="modal__header">{header}</div>
            <div className="modal__body">{children}</div>
          </div>
        </div>
      )}
    </div>,
    document.getElementById("modal-root")!,
  );
};

export default BaseModalComponent;
