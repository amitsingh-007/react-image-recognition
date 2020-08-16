import React, { useState, forwardRef } from "react";
import { Box, CircularProgress } from "@material-ui/core";

export const Image = forwardRef((props, ref) => {
  const { src, onClick, onLoad, onError, ...otherProps } = props;

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const onImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <Box display="flex" justifyContent="center">
      {!isImageLoaded && <CircularProgress />}
      <Box hidden={!isImageLoaded} style={{ cursor: "pointer" }}>
        <img
          src={src}
          alt="User Input"
          onClick={onClick}
          onLoad={onImageLoad}
          onError={() => {
            console.log("yet to handle");
          }}
          ref={ref}
          {...otherProps}
        />
      </Box>
    </Box>
  );
});
