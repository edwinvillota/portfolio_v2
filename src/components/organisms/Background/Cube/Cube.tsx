import * as React from 'react';
import { useRef, useState, useEffect } from 'react';
import { MeshProps, useFrame } from 'react-three-fiber';
import { DefaultTheme } from 'styled-components';
import type { Mesh } from 'three';

enum MovementsEnum {
  Back = 'Back',
  Forward = 'Forward',
  Sleep = 'Sleep',
}

type getMovementsParams = {
  options: Array<MovementsEnum>;
};

type getMovementsReturnType = {
  newMovement: MovementsEnum;
};

interface CubeProps extends MeshProps {
  theme?: DefaultTheme;
}

const Cube: React.FC<CubeProps> = ({ theme, ...props }) => {
  const mesh = useRef<Mesh>();
  const [hovered, setHovered] = useState(false);
  const [movement, setMovement] = useState<MovementsEnum>(MovementsEnum.Sleep);
  const [frameCount, setFrameCount] = useState(0);
  const [period, setPeriod] = useState(10);

  const getNewMovement = ({ options }: getMovementsParams): getMovementsReturnType => {
    const max = options.length - 1 + 3;
    const randomOptionIndex = Math.round(Math.random() * (max - 0) + 0);

    if (randomOptionIndex > options.length - 1) {
      return { newMovement: MovementsEnum.Sleep };
    }
    return { newMovement: options[randomOptionIndex] };
  };

  const handlePointerOver = () => {
    setHovered(true);
    if (movement === MovementsEnum.Back || movement === MovementsEnum.Sleep) setMovement(MovementsEnum.Back);
    if (movement === MovementsEnum.Forward) setMovement(MovementsEnum.Back);
  };

  useEffect(() => {
    setPeriod(Math.round(Math.random() * (500 - 100) + 100));
  }, []);

  useFrame(() => {
    if (frameCount === period) {
      setFrameCount(0);
      switch (movement) {
        case MovementsEnum.Forward:
          setMovement(getNewMovement({ options: [MovementsEnum.Sleep] }).newMovement);
          break;
        case MovementsEnum.Back:
          setMovement(getNewMovement({ options: [MovementsEnum.Sleep, MovementsEnum.Forward] }).newMovement);
          break;
        case MovementsEnum.Sleep:
          setMovement(getNewMovement({ options: [MovementsEnum.Forward, MovementsEnum.Sleep] }).newMovement);
          break;
        default:
          break;
      }
    } else {
      setFrameCount(frameCount + 1);
      if (mesh.current) {
        const { z } = mesh.current.position;

        switch (movement) {
          case MovementsEnum.Forward:
            if (z <= 20) mesh.current.position.z += 1;
            break;
          case MovementsEnum.Back:
            if (z >= -30) mesh.current.position.z -= 1;
            break;
        }
      }
    }
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      onPointerOver={handlePointerOver}
      onClick={handlePointerOver}
      onPointerOut={() => {
        setHovered(false);
      }}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? theme?.colors.main : theme?.colors.background?.bg3} />
    </mesh>
  );
};

export default Cube;
