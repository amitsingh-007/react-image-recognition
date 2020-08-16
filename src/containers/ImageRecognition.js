import { Box } from "@material-ui/core";
import React, { useState, useRef } from "react";
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { Results } from "../components/Results";
import { UserImage } from "../components/UserImage";

export const ImageRecognition = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [showResults, setShowResults] = useState(false);
  const imageRef = useRef(null);

  return (
    <Box marginX={40} fontFamily="courier new">
      <Heading />
      <Input setImageUrl={setImageUrl} imageUrl={imageUrl} />
      <UserImage
        imageUrl={imageUrl}
        imageRef={imageRef}
        setShowResults={setShowResults}
        key={imageUrl}
      />
      <Results
        showResults={showResults}
        imageRef={imageRef}
        setShowResults={setShowResults}
      />
    </Box>
  );
};
