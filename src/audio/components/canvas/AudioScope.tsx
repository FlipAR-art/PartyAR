import { Canvas } from "@react-three/fiber";
import AudioScopeVisual from "../visualizers/visualizerAudioScope";
import React from "react";

const AudioScopeCanvas = () => {
  return (
    <Canvas
      dpr={window.devicePixelRatio}
      shadowMap
      gl={{
        antialias: true,
        alpha: true,
      }}
    >
      <AudioScopeVisual />
    </Canvas>
  );
};
export default AudioScopeCanvas;
