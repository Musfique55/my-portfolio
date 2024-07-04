import { FaFacebook, FaGithub, FaLinkedin, } from 'react-icons/fa';
import html from '../assets/html.png';
import css from '../assets/csss.png';
import js from '../assets/js.png';
import tailwind from '../assets/tailwind.png';
import react from '../assets/react.png';
import express from '../assets/express.png';
import mongo from '../assets/mongo.png';
import firebase from '../assets/firebase.png';
import bootstrap from '../assets/bootstrap.png';
import hero from '../assets/hero_img.png';
import {  FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Marquee from 'react-fast-marquee';
import ParallaxText from '../Components/Velocity';
import Footer from '../Components/Footer';
import Contact from '../Components/Contact';
import Projects from '../Components/Projects';
const Home = () => {
    return (
        <div className="overflow-hidden ">
            <Navbar></Navbar>

            {/* Hero section */}

            <div className="h-full w-1/3 bg-[#c471ed] absolute blur-3xl rounded-full m-auto left-0 right-0 top-0 bottom-0 opacity-15 -z-20 "></div>

            {/* <div className=" h-full w-1/3 bg-[#f64f59] absolute blur-3xl rounded-full left-50 right-0 top-0 bottom-0 opacity-15 -z-20 ">

            </div> */}
            <div id='home' className='flex p-12 mt-24'>
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
               <Link><FaGithub className='text-2xl text-[#f64f59] cursor-pointer'/>
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
            
            {/* about section */}
            <div id="about" className='h-screen text-white'>
                   this is about 
            </div>
            {/* about section ends */}

            {/* my skills  */}
            <div id='skills' className='h-screen relative'>
            <h2 className="text-white opacity-80 text-xl w-fit mx-auto px-8 py-2 bg-[rgba(255,255,255,0.05)] rounded-full border-4 border-[rgb(32,32,32)] border-spacing-4 my-12">Skiils & Knowledges</h2>
            <div className='text-white text-7xl text-nowrap font-mono font-bold mb-20'>
                <ParallaxText className="text-white" baseVelocity={-10}>The Langauge</ParallaxText>
                <ParallaxText  baseVelocity={10}>& Technologies</ParallaxText>
            </div>
            <div className=" h-full w-1/3 bg-[#c471ed] absolute blur-3xl rounded-full m-auto left-0 right-0 top-0 bottom-0 opacity-15 -z-20 ">

            </div>
            <Marquee gradient={true} gradientColor='black'>
                
                <img src={html} alt="html" className='h-44 mr-20 '/>
                <img src={css} alt="css" className='h-44 mr-20'/>
                <img src={tailwind} alt="css" className='h-32 mr-20'/>
                <img src={bootstrap} alt="css" className='h-44 mr-20'/>
                <img src={js} alt="css" className='h-44 mr-20'/>
                <img src={react} alt="css" className='h-44 mr-20'/>
                <img src={express} alt="css" className='h-44 mr-20'/>
                <img src={mongo} alt="css" className='h-44 mr-20'/>
                <img src={firebase} alt="css" className='h-44 mr-20'/>
            </Marquee>
            </div>
            {/* my skills ends */}

            {/* projects */}

            <Projects></Projects>

            {/* contact */}
            <Contact></Contact>

            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default Home;