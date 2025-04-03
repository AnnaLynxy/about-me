import { FC, useEffect } from "react";
import styled from "@emotion/styled";
import { useIsBroken } from "./IsBrokenContext";

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
  padding: "20px",
  borderRadius: "8px",
  position: "relative",
  minWidth: "300px",
  maxWidth: "500px",
  fontFamily: "Newsreader, serif",
  fontSize: 18,
  textAlign: "center",
  lineHeight: 1.5,
});

const CloseButton = styled.button({
  position: "absolute",
  top: "10px",
  right: "10px",
  background: "none",
  border: "none",
  fontSize: "16px",
  cursor: "pointer",
});

export const Modal: FC<Props> = ({ isOpen, onClose, children }) => {
  // Close the modal when clicking outside the modal
  const handleClose = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id === "modal-overlay") {
      onClose();
    }
  };

  useEffect(() => {
    // Optionally add a scroll lock to prevent background scrolling when the modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup on component unmount
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
