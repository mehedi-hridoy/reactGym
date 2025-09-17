import './App.css'

// import DaisyNav from './assets/components/DaisyNav/DaisyNav'
import Navbar from './assets/components/Navbar/Navbar'

import PriceOptions from './assets/components/PriceOptions/PriceOptions'

import LineChart from './assets/components/LineChart/LineChart'

function App() {
  

  return (
    <>
      {/* <DaisyNav></DaisyNav> */}
      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    </>
  )
}

export default App
