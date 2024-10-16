'use client';

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function RotatingBox() {
  const meshRef = useRef()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001
      meshRef.current.rotation.y += 0.001
    }
  })

  return (
    <>
      <mesh ref={meshRef}>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial color="orange" />
      </mesh>
      <OrbitControls />
    </>
  )
}

export default RotatingBox