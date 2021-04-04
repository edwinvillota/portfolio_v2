import React from 'react';
import { useContext } from 'react';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import { Flex } from '@react-three/flex';
import { CubesGrid } from './CubesGrid';
import * as THREE from 'three';
import { ViewPortTypes } from 'ts/enums';
import { ThemeCtx } from 'context/ThemeCtx';

function Rig() {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();
  return useFrame(() => camera.position.lerp(vec.set(mouse.x * 30, mouse.y * 30, camera.position.z), 0.02));
}

type BackgroundProps = {
  viewportType: ViewPortTypes;
};

const Background: React.FC<BackgroundProps> = ({ viewportType }) => {
  const { theme } = useContext(ThemeCtx);

  const SelectedViewportGrid = () => {
    switch (viewportType) {
      case ViewPortTypes.phone:
        return <CubesGrid theme={theme} rows={12} cubesPerFile={6} />;
      case ViewPortTypes.tablet:
        return <CubesGrid theme={theme} rows={12} cubesPerFile={12} />;
      case ViewPortTypes.desktop:
        return <CubesGrid theme={theme} rows={12} cubesPerFile={25} />;
      case ViewPortTypes.largeDesktop:
        return <CubesGrid theme={theme} rows={12} cubesPerFile={25} />;
      default:
        return <CubesGrid theme={theme} rows={12} cubesPerFile={6} />;
    }
  };

  return (
    <Canvas
      shadowMap
      camera={{ fov: 60, position: [0, 0, 75], near: 1, far: 150 }}
      onCreated={(state) => state.gl.setClearColor(theme.colors.background?.bg1 || 'white')}
      updateDefaultCamera={true}
    >
      <ambientLight intensity={0.5} color="white" />
      <pointLight position={[0, 0, 200]} intensity={2} />
      <Flex justifyContent="center" alignItems="center" flexDir="column">
        <SelectedViewportGrid />
        <Rig />
      </Flex>
    </Canvas>
  );
};

export default Background;
