import React from "react";
import Image from "material-ui-image";
import { Box } from "@material-ui/core";

export const UserImage = ({ imageUrl }) => {
  return (
    <Box marginTop={2}>
      <Box width="50%" borderRadius={6} overflow="hidden">
        <Image src={imageUrl} />
      </Box>
    </Box>
  );
};
