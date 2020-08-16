import { Button, TextField, Box } from "@material-ui/core";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";
import React, { useState } from "react";

export const Input = ({ setImageUrl }) => {
  const [input, setInput] = useState("");

  const onInputChange = (e) => {
    e.currentTarget && setInput(e.currentTarget.value);
  };

  const onLoadImageClick = () => {
    setImageUrl && setImageUrl(input);
  };

  const onKeyDown = (e) => {
    e.key === "Enter" && setImageUrl(input);
  };

  return (
    <Box display="flex">
      <Box flexGrow={1} marginRight={2}>
        <TextField
          id="filled-basic"
          label="Load Image"
          placeholder="Enter image url to load the image"
          variant="filled"
          fullWidth
          value={input}
          onChange={onInputChange}
          onKeyDown={onKeyDown}
        />
      </Box>
      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<ImageSearchIcon fontSize="large" />}
        onClick={onLoadImageClick}
      >
        Load Image
      </Button>
    </Box>
  );
};
