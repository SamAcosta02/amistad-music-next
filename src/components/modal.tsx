import React from 'react';

interface ModalProps {
  open: boolean,
  onClose: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

export default function Modal({ open, onClose, children }: ModalProps) {
  return (
    <button
      onClick={onClose}
      type="button"
      className={
      `fixed inset-0 flex justify-center items-center
      transition-colors
      ${open ? 'visible bg-black/30' : 'invisible'}`
    }
    >
      <button
        type="button"
        onClick={(e) => e.stopPropagation()}
        className={
          `bg-white rounded-xl shadow p-6 transition-all
          ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`
        }
      >
        {children}
      </button>
    </button>
  );
}
