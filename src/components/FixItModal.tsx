import { useState, FC, useEffect } from "react";
import styled from "@emotion/styled";

/**
 * Components
 */
import { Modal } from "./Modal";
import { useIsBroken } from "./IsBrokenContext";

const Button = styled.button({
  border: "1px solid",
  color: "initial",
  background: "none",
  borderRadius: 5,
  padding: "13px 15px 10px",
  fontSize: 18,
  cursor: "pointer",
  fontFamily: "Newsreader, serif",
  textAlign: "center",
  lineHeight: 1.5,

  "&:hover": {
    background: "#eee",
  },
});

export const FixItModal: FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { toggleIsBroken } = useIsBroken();

  const handleClose = () => {
    toggleIsBroken();
    setModalOpen((prev) => !prev);
  };

  useEffect(() => {
    setTimeout(() => {
      setModalOpen(true);
    }, 2500);
  }, []);

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={handleClose}
      children={
        <>
          <p>
            Uh Oh! Seems that everything is a little bit off :(
            <br /> But no worries, I've already fixed it! 🛠️
          </p>

          <Button onClick={handleClose}>Let's see!</Button>
        </>
      }
    />
  );
};
