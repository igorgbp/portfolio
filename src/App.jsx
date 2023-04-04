import { useState } from 'react'
import './App.css'
import Content from './screens/content'
import Leftbar from './screens/Leftbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      {/* <p>açsdklfj</p> */}
      <div className='left'>
      <Leftbar />
      </div>
      <div>
        <Content/>
      </div>
      
    </div>
  )
}

export default App
