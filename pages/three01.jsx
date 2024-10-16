import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function RotatingBox() {
  const meshRef = useRef()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001
      meshRef.current.rotation.y += 0.001
    }
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

function App() {
  return (
    <Canvas>
      <ambientLight />
      <RotatingBox />
    </Canvas>
  )
}

export default App