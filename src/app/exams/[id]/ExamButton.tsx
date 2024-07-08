"use client"

import { useState } from "react";
import Modal, { modalItems } from "../../../../components/common/Modal";

export default function ExamButton() {

  const [modalOpen, setModalOpen] = useState(false);
  const [modalObject, setModalObject] = useState<modalItems>({
    content:"",
    modalType:"warning",
  })

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
    <div>
      <button onClick = { () => openModal()}>안녕</button>
      <Modal isOpen={modalOpen} onClose={closeModal} modalItems={modalObject}/>
    </div></>
  )
}