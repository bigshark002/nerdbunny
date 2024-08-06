import React, { type FC } from 'react'
import ReactDOM from 'react-dom'

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, children }) => {
  const modalRoot = document.getElementById('modal-root') as HTMLElement;

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className='fixed inset-0 flex items-center justify-center bg-[#000000B2]'>
      {children}
    </div>,
    modalRoot
  )
}

export default Modal