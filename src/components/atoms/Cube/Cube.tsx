import * as React from 'react';
import { useRef, useState } from 'react';
import { MeshProps, useFrame } from 'react-three-fiber';
import type { Mesh } from 'three';

const Cube: React.FC<MeshProps> = (props) => {
  const mesh = useRef<Mesh>();
  const [active, setActive] = useState(false);

  return (
    <mesh {...props} ref={mesh} scale={active ? [20, 20, 20] : [15, 15, 15]} onClick={(e) => setActive(!active)}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
};

export default Cube;
