import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';
import React from 'react';
function WaterPlane() {
  const meshRef = useRef();
  const materialRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.2) * 0.2; // แกว่งเร็วขึ้น
    }
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef} rotation={[0, 0, Math.PI * 1.5]}>
      <planeGeometry args={[10, 10, 256, 256]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={`
          uniform float uTime;
          varying vec2 vUv;
          void main() {
            vUv = uv;
            vec3 pos = position;
            pos.z += sin(pos.x * 7.5 + uTime * 1.5) * 0.5; // ขยับไวขึ้น
            pos.z += sin(pos.y * 7.5 + uTime * 1.5) * 0.5;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `}
        fragmentShader={`
          varying vec2 vUv;
          uniform float uTime;

          float random(vec2 uv) {
            return fract(sin(dot(uv.xy, vec2(12.9898,78.233))) * 43758.5453123);
          }

          void main() {
            vec3 color1 = vec3(0.337, 0.024, 1.0);  // #5606FF
            vec3 color2 = vec3(0.996, 0.537, 0.537); // #FE8989
            vec3 color3 = vec3(0.0, 0.0, 0.0);       // #000000

            vec3 mixed = mix(color1, color2, vUv.y);
            mixed = mix(mixed, color3, vUv.x);

            // Grain (Noise) เพิ่มแบบละเอียด
            float grain = (random(vUv * uTime * 2.0) - 0.5) * 0.1;
            mixed += grain;

            gl_FragColor = vec4(mixed, 1.0);
          }
        `}
        uniforms={{
          uTime: { value: 0 },
        }}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export default function BackgroundShader() {
  return (
    <Canvas
      camera={{ position: [0, 0, 2.5], fov: 40 }} // กล้องใกล้ขึ้น
      style={{ width: '100vw', height: '100vh' }} // เต็มจอ
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <WaterPlane />
    </Canvas>
  );
}
