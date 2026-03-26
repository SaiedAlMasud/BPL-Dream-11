import { Suspense } from 'react'
import './App.css'
import Banner from './components/Homepage/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Player from './components/players/Player'
import AvailablePlayers from './components/players/PlayerBtn'

const fetchPlayers = async () => {
  const res = await fetch("/data.json");
  return res;
}

function App() {
  const playerPromise = fetchPlayers();
  //console.log(playerPromise);
  return (

    <div className="max-w-11/12 m-auto">
      <Navbar />
      <Banner />
      <AvailablePlayers />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        <Suspense fallback={<div>Loading...</div>}>
          <Player playerPromise={playerPromise} />
        </Suspense>
      </div>
    </div>
  )

}

export default App
