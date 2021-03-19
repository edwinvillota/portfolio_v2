import * as React from 'react';
import { Canvas } from 'react-three-fiber';
import { Flex, Box } from '@react-three/flex';
import { Cube } from 'components/atoms';

const Background: React.FC = () => {
  return (
    <Canvas
      shadowMap
      camera={{ fov: 75, position: [0, 0, 70], near: 10, far: 150 }}
      onCreated={(state) => state.gl.setClearColor('#E5E5E5')}
    >
      <ambientLight intensity={1.5} />
      <pointLight position={[100, 100, 100]} intensity={2} />
      <pointLight position={[-100, -100, -100]} intensity={5} color="black" />
      <Flex justifyContent="center" alignItems="center" flexDir="column">
        <Box justifyContent="center" flexDir="row" centerAnchor>
          <Box margin={2}>
            <Cube />
          </Box>
          <Box margin={2}>
            <Cube />
          </Box>
          <Box margin={2}>
            <Cube />
          </Box>
        </Box>
        <Box justifyContent="center" flexDir="row" centerAnchor marginTop={2}>
          <Box margin={2}>
            <Cube />
          </Box>
          <Box margin={2}>
            <Cube />
          </Box>
          <Box margin={2}>
            <Cube />
          </Box>
        </Box>
      </Flex>
    </Canvas>
  );
};

export default Background;
