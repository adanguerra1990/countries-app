import { useState } from 'react';
import Header from './components/Header';
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen flex justify-center items-center'>
      <Header />
    </div>
  )
}

export default App
