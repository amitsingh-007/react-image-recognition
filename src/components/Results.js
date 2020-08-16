import React from "react";
import { Modal } from "@material-ui/core";
import { Classification } from "./Classification";

const modalStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const Results = ({ showResults, setShowResults, imageRef }) => {
  const handleClose = () => {
    setShowResults(false);
  };

  return (
    <Modal
      open={showResults}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      closeAfterTransition
      style={modalStyles}
    >
      <Classification imageRef={imageRef} />
    </Modal>
  );
};
