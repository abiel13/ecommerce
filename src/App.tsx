import Header from "./components/Header"
import './App.css'
import banner from './assets/headphone2 (2).jpg'
import Navbar from "./components/Navbar"
import Popular from "./components/Popular"

function App() {

  return (
    <div className="bg-gray-900 w-screen min-h-screen overflow-x-hidden flex flex-col items-center">
    <Navbar />
     <Header image={banner }>
      Join <span className="text-gray-500 italic">Asales</span> Today And Get 10% Discount On Every Purchase For The Next One Week
      </Header> 
      <div className="text-white text-4xl font-bold mt-[2rem]"> Popular Choices  </div> 
      <Popular /> 
    </div> 
  )
}

export default App
