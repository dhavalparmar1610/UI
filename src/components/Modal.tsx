import React from 'react';
import { createPortal } from 'react-dom';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  showCloseIcon?: boolean;
  clickOutsideToClose?: boolean;
}

export const Modal = ({
  isOpen,
  onClose,
  children,
  showCloseIcon = true,
  clickOutsideToClose = true,
}: ModalProps) => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!clickOutsideToClose || !isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [clickOutsideToClose, isOpen, onClose]);

  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-md bg-white rounded-lg p-6 shadow-xl" ref={ref}>
        {showCloseIcon && (
          <button
            className="absolute right-4 top-4 text-black hover:text-neutral-700 text-xl font-bold"
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>
        )}
        {children}
      </div>
    </div>,
    document.body
  );
};
