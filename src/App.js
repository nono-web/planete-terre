import './App.css';
import { Canvas } from "@react-three/fiber";
import { Suspense } from 'react';
import Earth from './Components/Earth/Earth';
import TopSection from './Components/TopSection/TopSection';



const App = () => {
  return (
  <div className='canvasContainer'>
    <TopSection />
    <Canvas>
      <Suspense fallback={null}>
        <Earth />
      </Suspense>
    </Canvas>
  </div>
  )
}

export default App;
