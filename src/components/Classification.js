import React, { useEffect, useState } from "react";
import * as ML from "ml5";

const classifyImage = (imageRef, setPredictionResults) => {
  const image = imageRef.current;
  ML.imageClassifier("MobileNet", null)
    .predict(image, 5, (err, results) => results)
    .then((results) => {
      setPredictionResults(results);
    });
};

export const Classification = ({ imageRef }) => {
  const [predictionResults, setPredictionResults] = useState([]);

  useEffect(() => {
    classifyImage(imageRef, setPredictionResults);
  }, [imageRef]);

  return <div style={{ margin: "auto" }}>{predictionResults.join(" , ")}</div>;
};
