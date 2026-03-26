import './App.css'
import Banner from './components/Homepage/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Player from './components/players/Player'

function App() {

  return (
    <>
      <div className="max-w-11/12 m-auto">
        <Navbar />
        <Banner />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
          <Player />
          <Player />
          <Player />
        </div>
        

      </div>
    </>

  )

}

export default App
