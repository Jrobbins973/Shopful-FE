import { useState } from 'react'
import ItemContainer from './components/ItemContainer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <h1 className='site-title'>Shopful</h1>
      <ItemContainer />
    
    </div>
  )
}

export default App
