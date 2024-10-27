import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { VRButton } from 'three/examples/jsm/webxr/VRButton';
import { OrbitControls } from '@react-three/drei';

const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];

const generateCubes = (layers) => {
  // Create pairs of cubes for each layer and shuffle them
  const pairedColors = [...colors, ...colors].flatMap(color => 
    Array.from({ length: layers }, () => color)  // Duplicate colors for each layer
  );
  return pairedColors.sort(() => Math.random() - 0.5);
};

const VRScene = () => {
  const sceneRef = useRef();
  const layers = 3;  // Define the number of layers
  const [cubes, setCubes] = useState(generateCubes(layers));
  const [selectedIndices, setSelectedIndices] = useState([]);
  const [matchedIndices, setMatchedIndices] = useState([]);
  const [disabled, setDisabled] = useState(false);
  
  const handleCubeClick = (index) => {
    if (disabled || matchedIndices.includes(index) || selectedIndices.includes(index)) return;

    const newSelectedIndices = [...selectedIndices, index];
    setSelectedIndices(newSelectedIndices);

    if (newSelectedIndices.length === 2) {
      setDisabled(true);
      const [firstIndex, secondIndex] = newSelectedIndices;
      if (cubes[firstIndex] === cubes[secondIndex]) {
        setMatchedIndices((prev) => [...prev, firstIndex, secondIndex]);
      }
      setTimeout(() => {
        setSelectedIndices([]);
        setDisabled(false);
      }, 1000);
    }
  };

  useEffect(() => {
    if (selectedIndices.length === 2) {
      const [firstIndex, secondIndex] = selectedIndices;
      if (cubes[firstIndex] !== cubes[secondIndex]) {
        setTimeout(() => {
          setSelectedIndices([]);
          setDisabled(false);
        }, 200);
      }
    }
  }, [selectedIndices, cubes]);

  return (
    <>
      <Canvas
        style={{ width: '100vw', height: '100vh' }}  // Set canvas size to fullscreen
        ref={sceneRef}
        onCreated={({ gl }) => {
          gl.setClearColor('white');
          gl.xr.enabled = true;
          document.body.appendChild(VRButton.createButton(gl));
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        {/* Create cubes in multiple layers */}
        {Array.from({ length: layers }).map((_, layerIndex) => (
          cubes.map((color, index) => {
            const cubeIndex = index + layerIndex * colors.length;
            const isSelected = selectedIndices.includes(cubeIndex);
            const isMatched = matchedIndices.includes(cubeIndex);
            return (
              <mesh
                key={cubeIndex}  // Unique key for each cube
                position={[
                  (index % 4) * 2 - 3,  // X position
                  Math.floor(index / 4) * 2 - 1,  // Y position
                  layerIndex * 2  // Z position to create layers
                ]}
                onClick={() => handleCubeClick(cubeIndex)}
                visible={!isMatched}
              >
                <boxGeometry args={[2, 2, 2]} /> 
                <meshStandardMaterial color={isSelected ? color : 'gray'} />
              </mesh>
            );
          })
        ))}

        <OrbitControls />
      </Canvas>
    </>
  );
};

export default VRScene;
