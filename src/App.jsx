import Companies from './companies'
import Hero from './hero'
import NavBar from './navbar'
export default function App() {
  return (
    <div className='flex flex-col justify-center items-center w-screen'>
      <NavBar/>
  
    <Hero/>
    <div class="my-10 h-[1px] w-full bg-white opacity-20 md:my-[7rem] md:w-[40%] md:h-[1px] lg:mx-10 "></div>
    
    <Companies/>
    
    <div class="my-10 h-[1px] w-full bg-white opacity-20 md:my-[7rem] md:w-[40%] md:h-[1px] lg:mx-10 "></div>
    </div >

  )
}