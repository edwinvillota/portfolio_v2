import * as React from 'react';
import { useMemo } from 'react';
import { Cube } from '../Cube';
import { Box } from '@react-three/flex';

type CubesGridProps = {
  rows: number;
  cubesPerFile: number;
};

const CubesGrid: React.FC<CubesGridProps> = ({ rows, cubesPerFile }) => {
  const cubeRows = useMemo(() => {
    const temp = [];

    for (let i = 0; i < rows; i++) {
      const row = [];

      for (let j = 0; j < cubesPerFile; j++) {
        // const cube = {
        //   z: Math.random() * 10,
        // };

        row.push({
          x: 5,
          y: 5,
          z: 0,
        });
      }

      temp.push(row);
    }
    return temp;
  }, [rows, cubesPerFile]);

  return cubeRows.map((cr, i) => (
    <Box key={`Row_${i}`} flexDirection="row" alignItems="center" justifyContent="center">
      {cr.map((cube, j) => (
        <Box key={`Row_${i}Box_${j}`} centerAnchor>
          <Cube scale={[cube.x, cube.y, 50]} position={[0, 0, cube.z]} />
        </Box>
      ))}
    </Box>
  ));
};

export default CubesGrid;
