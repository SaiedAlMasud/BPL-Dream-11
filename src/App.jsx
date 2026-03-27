import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Homepage/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Player from './components/players/Player'
import { ToastContainer } from 'react-toastify'

const fetchPlayers = async () => {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {
  const [coin, setCoin] = useState(50000);
  const playerPromise = fetchPlayers();
  //console.log(playerPromise);
  return (

    <div className="max-w-11/12 m-auto">
      <Navbar coin={coin} />
      <Banner />
      <Suspense fallback={<div>Loading...</div>}>
        <Player playerPromise={playerPromise} setCoin={setCoin} coin={coin} />
      </Suspense>
      <ToastContainer/>
    </div>
  )

}

export default App
