import purpleCircle from '/PurpleCircle.svg'
import Hero from './hero'
import NavBar from './navbar'
export default function App() {
  return (
    <div className='flex flex-col justify-center items-center w-screen'>
      <NavBar/>
    <div className="absolute -z-10 top-0 overflow-hidden h-screen">
      <img src={purpleCircle} alt="" srcset="" />
    </div>
    <Hero/>
    </div >

  )
}