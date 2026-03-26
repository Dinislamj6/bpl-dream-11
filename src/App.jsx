
import { Suspense, useState } from 'react'
import './App.css'
import Bannner from './Components/navbar/HomePage/Banner/Bannner'
import Players from './Components/navbar/HomePage/players/Players'
import Navbar from './Components/navbar/Navbar'
import { ToastContainer } from 'react-toastify'
const fetchPlayer = async () => {
  const res = await fetch("/data.json")
  return res.json()
}
function App() {
  const playersPromise = fetchPlayer()
  const [coin, setCoin] = useState(500000)

  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Bannner></Bannner>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Players playersPromise={playersPromise} setCoin={setCoin} coin={coin}></Players>
      </Suspense>

      {/* tost component */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        
      />
    </>
  )
}

export default App
