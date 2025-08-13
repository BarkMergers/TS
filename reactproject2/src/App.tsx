import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
<div className="m-2" data-theme="dark">
    <button className="btn btn-primary">Dark Themed Button</button>
</div>
<div className="m-2" data-theme="light">
    <button className="btn btn-primary">Light Themed Button</button>
</div>
      </>
  )
}

export default App
