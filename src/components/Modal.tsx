import styled from "@emotion/styled";
import { FC, useEffect } from "react";

interface Props {
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

const Overlay = styled.div({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
});

const ModalContainer = styled.div({
  backgroundColor: "white",
  padding: 20,
  borderRadius: 8,
  position: "relative",
  minWidth: 300,
  maxWidth: 500,
  fontFamily: "Newsreader, serif",
  fontSize: 18,
  textAlign: "center",
  lineHeight: 1.5,
});

const CloseButton = styled.button({
  position: "absolute",
  top: 10,
  right: 10,
  background: "none",
  border: "none",
  fontSize: 16,
  cursor: "pointer",
});

export const Modal: FC<Props> = ({ isOpen, onClose, children }) => {
  const handleClose = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id === "modal-overlay") {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Overlay id="modal-overlay" onClick={handleClose}>
      <ModalContainer>
        <CloseButton onClick={onClose}>X</CloseButton>
        {children}
      </ModalContainer>
    </Overlay>
  );
};
