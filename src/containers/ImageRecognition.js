import { Heading } from "../components/Heading";
import React, { useState } from "react";
import { Input } from "../components/Input";
import { Box } from "@material-ui/core";
import { UserImage } from "../components/UserImage";

export const ImageRecognition = () => {
  const [imageUrl, setImageUrl] = useState("");

  return (
    <Box marginX={40} fontFamily="courier new">
      <Heading />
      <Input setImageUrl={setImageUrl} imageUrl={imageUrl} />
      <UserImage imageUrl={imageUrl} />
    </Box>
  );
};
