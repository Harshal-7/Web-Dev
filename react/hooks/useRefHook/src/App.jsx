import './App.css'
import { useState } from 'react'
import VideoPlayer from './components/VideoPlayer';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);


  return (
    <div className='flex flex-col gap-10'>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />

      
    </div>
  )
}

export default App