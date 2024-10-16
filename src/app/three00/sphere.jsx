'use client';

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

function Sphere() {
  const meshRef = useRef()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01 // 스피어를 회전시킴
    }
  })

  return (
    <mesh ref={meshRef} position={[5, 0, 0]}> {/* 스피어의 위치를 조정 */}
      <sphereGeometry args={[1.5, 32, 32]} /> {/* 반지름 1.5의 스피어 */}
      <meshStandardMaterial color="blue" />
    </mesh>
  )
}

export default Sphere