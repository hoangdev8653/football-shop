import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import Overlay from "./overlay";

function Modal({ onClose, children, iconClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="relative">
      {children}
      {iconClose ?? (
        <div className="fixed top-5 z-50 right-10">
          <div onClick={onClose} className="absolute">
            <IoMdClose className="font-bold text-3xl cursor-pointer hover:opacity-70 text-white" />
          </div>
        </div>
      )}

      <div onClick={onClose} className="fixed inset-0 z-40">
        <Overlay />
      </div>
    </div>
  );
}

export default Modal;
