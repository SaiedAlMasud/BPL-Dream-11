import { Suspense } from 'react'
import './App.css'
import Banner from './components/Homepage/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Player from './components/players/Player'
import PlayerBtn from './components/players/PlayerBtn'

const fetchPlayers = async () => {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {
  const playerPromise = fetchPlayers();
  //console.log(playerPromise);
  return (

    <div className="max-w-11/12 m-auto">
      <Navbar />
      <Banner />
      <PlayerBtn />
      <Suspense fallback={<div>Loading...</div>}>
        <Player playerPromise={playerPromise} />
      </Suspense>
    </div>
  )

}

export default App
