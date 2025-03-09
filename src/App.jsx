import './App.css'
import SideNavigation from './components/SideNavigation'

function App() {


  return (
    <div className='font-display'>
      <div className='absolute w-full h-full z-10 backdrop-blur-md'>
        <img src='/logo3.svg' className='w-90 mx-auto mt-40'/>
        <div className='mx-auto mt-10'>
          <h1 className='md:text-2xl text-center'>The website is under development,<br/>but you can still get in touch with us.</h1>
          <div className='flex flex-col justify-center mt-6'>
            
            <div className='text-center mt-6'>
              <a className='text-lg text-white bg-primary px-4 py-2 my-2 rounded-sm hover:bg-[#3f7870] inline-block' href="https://api.whatsapp.com/send?phone=923317733331">Contact us on Whatsapp</a>
              <p>For Whatsapp +92 331 7733331</p>
            </div>
            <div className='text-center mt-6'>
              <h2 className='text-lg text-primary'>enquiries@mindmuscles.net</h2>
              <p>For general enquiries</p>
            </div>
            <div className='text-center mt-6'>
              <h2 className='text-lg text-primary'>student.coordinator@mindmuscles.net</h2>
              <p>For enrolling in Mind Muscles Academy</p>
            </div>
            <div className='text-center mt-6'>
              <h2 className='text-lg text-primary'>student.counsellor@mindmuscles.net</h2>
              <p>For counselling</p>
            </div>
          </div>
        </div>
        
      </div>
      <div className={'h-5 w-full bg-primary'}></div>
      <SideNavigation />
    </div>
  )
}

export default App
