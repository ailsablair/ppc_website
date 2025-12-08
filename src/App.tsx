import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-root">
      <h1>Design System Icons</h1>
      <p>Edit <code>src/App.tsx</code> or open the “Atoms/Icons” stories in Storybook to explore the icon set.</p>
    </div>
  )
}

export default App
