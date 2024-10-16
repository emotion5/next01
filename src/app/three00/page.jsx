'use client';

import { Canvas } from '@react-three/fiber'
import RotatingBox from './box' // RotatingBox 컴포넌트 임포트
import Sphere from './sphere' // Sphere 컴포넌트 임포트

function App() {
  return (
    <Canvas>
      <color attach="background" args={['#171720']} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <RotatingBox />
      <Sphere /> {/* Sphere 컴포넌트 추가 */}
    </Canvas>
  )
}

export default App