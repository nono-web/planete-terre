import React, { useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

import EarthDayMap from '../../assets/texture/8k_earth_daymap.jpg';
import EarthNormalMap from '../../assets/texture/8k_earth_normal_map.jpg';
import EarthSpecularMap from '../../assets/texture/8k_earth_specular_map.jpg';
import EarthCloudsMap from '../../assets/texture/8k_earth_clouds.jpg';
import { TextureLoader } from 'three';

const Earth = (props) => {
  const [colorMap, normalMap, specularMap, cloudsMap,] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );

  const EarthRef = useRef();
  const cloudsRef = useRef();

  useFrame (({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    EarthRef.current.rotation.y = elapsedTime / 6;
    cloudsRef.current.rotation.y = elapsedTime / 6;
  })

  return (
    <>
      <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={1.2} />
      <Stars
        radius={300}
        count={15000}
        factor={7}
      />
         <mesh ref={cloudsRef} position={[0, 0, 3]}>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={EarthRef}  position={[0, 0, 3]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
      </mesh>
    </>
  );
};

export default Earth;
