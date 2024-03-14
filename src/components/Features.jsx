
import feature_logo from '../assets/undraw_road.png'

function Features() {
  return (
    <div className='max-w-screen-2xl mx-auto md:px-14 px-4 py-24'>
        <div className='flex flex-col lg:flex-row justify-center items-start gap-10'>
              <div className='lg:w-1/4'> 
                  <h2 className='text-5xl text-primary mb-2'>Why we are better than others?</h2>
                  <p className='leading-relaxed text-secondary text-xl tracking-widest'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione atque eveniet, nesciunt quo id animi nobis non vel assumenda enim!</p>
              </div>
        
              <div className='w-full lg:w-3/4'>
              <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8'>
                        <div className='bg-white rounded-[35px] h-80 shadow-md p-4 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-default'>
                            <div className=''>
                              <img src={feature_logo} alt="" />
                              <h3 className='text-2xl font-bold text-primary px-5 text-left mt-5'>Conventient study schedule</h3>
                            </div>
                        </div>
                        <div className='bg-white rounded-[35px] h-80 shadow-md p-4 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16'>
                            <div className=''>
                              <img src={feature_logo} alt="" />
                              <h3 className='text-2xl font-bold text-primary px-5 text-left mt-5'>Conventient study schedule</h3>
                            </div>
                        </div>
                        <div className='bg-white rounded-[35px] h-80 shadow-md p-4 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
                            <div className=''>
                              <img src={feature_logo} alt="" />
                              <h3 className='text-2xl font-bold text-primary px-5 text-left mt-5'>Conventient study schedule</h3>
                            </div>
                        </div>
              </div>
              </div>  
        </div>
    </div>
  )
}

export default Features
