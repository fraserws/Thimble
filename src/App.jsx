import { useEffect, useState } from 'react'
import Thimble from './components/Thimble'

function App() {
  const [solution, setSolution] = useState(null)
  
  useEffect(() => {
    fetch('http://localhost:3001/solutions')
      .then(res => res.json())
      .then(json => {
        // random int between 0 & 14
        const randomSolution = json[Math.floor(Math.random()*json.length)]
        setSolution(randomSolution.word)
      })
  }, [setSolution])

  return (
    <div className="App">
      <h1>Thimble</h1>
      {solution && <Thimble solution={solution} />}
    </div>
  )
}

export default App