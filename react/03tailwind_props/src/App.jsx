// import { useState } from 'react'
import './App.css'
import Card from "./components/Cards";

function App() {

  let img1 = "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=1380&t=st=1700238052~exp=1700238652~hmac=60f5d6bc261442ef85f08eb38558ea7f5becd093e25843c1364b7a7cb5d7263e&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
  let img2 = "https://img.freepik.com/free-photo/portrait-happy-male-with-broad-smile_176532-8175.jpg?w=1380&t=st=1700238389~exp=1700238989~hmac=4d83aebe12f9d4532a9f6d25d3edda745b3c1fbb45687760b58b0cd71582e21d&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
  return (
    <>
      <h1 className='bg-amber-300 rounded-xl text-black p-4 mb-5'>Tailwind Test</h1>

      <Card username="Arcane" img={img1}/>
      <Card username="Brimstone" img={img2}/>
    </>
  )
}

export default App
