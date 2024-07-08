import React, {useState, useEffect} from 'react';
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalItems: {
    content: string,
    modalType: "warning" | "success" | "question",
  };
}

export type modalItems = {
  content: string,
  modalType: "warning" | "success" | "question",
};

const Modal: React.FC<ModalProps> = ({isOpen, onClose, modalItems}) => {
  const [modalVisible, setModalVisible] = useState(isOpen);


  const closeModal = () => {
    setModalVisible(false);
    onClose();
  };

  useEffect(() => {
    setModalVisible(isOpen)
  }, [isOpen])

  return (
    <>
      {modalVisible && (
        <div className="modal-div" onClick={closeModal}>
          <div className={`modal-content ${isOpen ? 'fade-in' : ''}`} onClick={(e) => e.stopPropagation()}>
            <p>{modalItems.content}</p>
            <button onClick={closeModal} className="save-button">확인</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;