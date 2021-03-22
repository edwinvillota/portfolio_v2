import React from 'react';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import { Flex } from '@react-three/flex';
import { CubesGrid } from './CubesGrid';
import * as THREE from 'three';
import { ViewPortTypesEnum } from 'ts/enums';

function Rig() {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();
  return useFrame(() => camera.position.lerp(vec.set(mouse.x * 30, mouse.y * 30, camera.position.z), 0.02));
}

type BackgroundProps = {
  viewportType: ViewPortTypesEnum;
};

const Background: React.FC<BackgroundProps> = ({ viewportType }) => {
  const SelectedViewportGrid = () => {
    switch (viewportType) {
      case ViewPortTypesEnum.phone:
        return <CubesGrid rows={12} cubesPerFile={6} />;
      case ViewPortTypesEnum.tablet:
        return <CubesGrid rows={12} cubesPerFile={12} />;
      case ViewPortTypesEnum.desktop:
        return <CubesGrid rows={12} cubesPerFile={25} />;
      case ViewPortTypesEnum.largeDesktop:
        return <CubesGrid rows={12} cubesPerFile={25} />;
      default:
        return <CubesGrid rows={12} cubesPerFile={6} />;
    }
  };

  return (
    <Canvas
      shadowMap
      camera={{ fov: 60, position: [0, 0, 75], near: 1, far: 150 }}
      onCreated={(state) => state.gl.setClearColor('#E5E5E5')}
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
