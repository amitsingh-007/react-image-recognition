import { Box } from "@material-ui/core";
import React from "react";
import { Image } from "./Image";

export const UserImage = ({ imageUrl, imageRef, setShowResults }) => {
  if (!imageUrl) {
    return null;
  }

  const onImageClick = () => {
    setShowResults(true);
  };

  return (
    <Box marginTop={2}>
      <Box borderRadius={6} overflow="hidden">
        <Image src={imageUrl} ref={imageRef} onClick={onImageClick} />
      </Box>
    </Box>
  );
};
