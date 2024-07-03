import { FaFacebook, FaInstagram, FaLinkedin, } from 'react-icons/fa';
import hero from '../assets/hero_img.png'
import {  FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className="overflow-hidden p-12">
            {/* Hero section */}

            <div className="h-full w-1/3 bg-[#c471ed] absolute blur-3xl rounded-full m-auto left-0 right-0 top-0 bottom-0 opacity-15 -z-20 "></div>

            {/* <div className=" h-full w-1/3 bg-[#f64f59] absolute blur-3xl rounded-full left-50 right-0 top-0 bottom-0 opacity-15 -z-20 ">

            </div> */}
            <div className='flex'>
              <div>
                <div>
                    <h3 className='text-[#FF6D5A] text-xl font-semibold px-8 py-4 shadow-lg shadow-[#f64f59] rounded-r-full'><li>Frontend Developer</li> <br />
                    <span className='text-white text-xl'>With Quality Experience</span></h3>
                </div>
                <div className='mt-20'>
                    <h3 className='text-[#FF6D5A] text-xl font-semibold px-8 py-4 shadow-lg shadow-[#f64f59] rounded-r-full'><li>Say Hello to</li><br/><span className='text-white text-xl'>mdmusfiquepatwary@gmail.com</span></h3>
                    
                </div>
                <div className="flex mt-20 gap-6">
                <Link to={'facebook.com'}>
                <FaFacebook className='text-2xl text-[#f64f59] cursor-pointer'/>
                </Link>
                <Link> <FaLinkedin className='text-2xl text-[#f64f59] cursor-pointer'/>
                </Link>
               <Link><FaInstagram className='text-2xl text-[#f64f59] cursor-pointer'/>
               </Link>
                <Link><FaXTwitter className='text-2xl text-[#f64f59] cursor-pointer'/>
                </Link>
                </div>
              </div>
              <div className='flex justify-center relative items-center flex-col'>
                <img src={hero} alt="profile" className='w-[385px] h-[522px] mx-auto'/>
                <div className='bg-[#c471ed] absolute top-96 w-40 h-52 blur-3xl rounded-full opacity-25 z-30'>
                </div>
                <h3 className="text-7xl font-extrabold -mt-8
                 text-[#F6E3E9] z-30 opacity-80">Musfique Patwary</h3>
              </div>
              <div>
                <div className='border-b border-gray-300 py-5'>
                    <h3 className='text-[#f64f59] font-semibold text-3xl'>
                        1+ <br /> <span className='text-base text-white opacity-60'>YEARS  OF <br /> EXPERIENCE</span>
                    </h3>
                </div>
                <div className='border-b border-gray-300 py-5 mt-5'>
                    <h3 className='text-[#f64f59] font-semibold text-3xl'>
                        13+ <br /> <span className='text-base text-white opacity-60'>Project Completed</span>
                    </h3>
                </div>
              </div>
            </div>
            {/* Hero section ends*/}

            
        </div>
    );
};

export default Home;