import game from '../assets/game.png';
import realEstate from '../assets/real-estate.png';
import library from '../assets/library.png';
import microWork from '../assets/micro-work.png';
import furniture from '../assets/furniture.png';
import { useState } from 'react';
import tailwind from '../assets/tailwind.png';
import react from '../assets/react.png';
import express from '../assets/express.png';
import mongo from '../assets/mongo.png';
import firebase from '../assets/firebase.png';
import { Link } from 'react-router-dom';
const Projects = () => {
    const [modal,setModal] = useState(false);
    const [hover,setHover] = useState(false);
    return ( 
        <div className='px-12'>
            <h2 className='text-white text-2xl'>Projects</h2>
            <div className='grid grid-cols-3 grid-rows-3 gap-6 '>
                <div className='col-span-2 row-span-1 relative'>
                    <img src={furniture} alt="" className='w-full h-full object-cover'/>
                   
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn bg-[#FF6D5A] hover:bg-[#FF6D5A] text-white font-semibold absolute border-none m-auto left-0 right-0 top-0 bottom-0 w-fit" onClick={()=>document.getElementById('my_modal_3').showModal()}>View Details</button>
                    <dialog id="my_modal_3" className="modal">
                    <div className='w-2/3 p-5 bg-black modal-box overflow-y-auto'>
                        <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-20 text-white bg-black hover:bg-black">✕</button>
                        </form>
                        <img src={furniture} alt="furniture" className=''/>
                        <h3 className="font-semibold text-white text-center text-lg mt-5">Art & Craft Website</h3>
                        <h3 className='text-white font-semibold text-center mt-5'>Technology Used</h3>
                        <div className="flex gap-10 justify-center mt-5">
                            <img src={react} alt="" className='h-14 w-14'/>
                            <img src={express} alt="" className='h-14 w-14'/>
                            <img src={tailwind} alt="" className='h-14 w-14 object-contain'/>
                            <img src={mongo} alt="" className='h-14 w-14'/>
                            <img src={firebase} alt="" className='h-14 w-14 object-contain'/>
                        </div>
                        <div className='text-white'>
                            <h3 className='text-white font-semibold text-center mt-5'>Features of the website</h3>
                            <ul className='text-center mt-5'>
                                <li>1. Custom & Google & Github Login System</li>
                                <li>2. Logout Options</li>
                                <li>3. Dark mode feature</li>
                                <li>4. Product adding features</li>
                                <li>5. Product Update & Delete Options</li>
                            </ul>
                            <div className='flex justify-between mt-5'>
                            <Link to={'https://art-craft-store-bb965.web.app/'} target='_'><button className='text-white bg-[#FF6D5A] px-4 py-2 rounded-lg '>Website Visit</button></Link>
                            <Link to={'https://github.com/Musfique55/Art-Craft-Store'} target='_'><button className='text-white bg-[#FF6D5A] px-4 py-2 rounded-lg '>Github Visit</button></Link>
                            </div>
                        </div>
                    </div>
                    </dialog>
                </div>
                <div className='col-span-1 row-span-2'>
                    <img src={realEstate} alt="" className='w-full h-full object-cover'/>
                </div>
                <div className='col-span-2 row-span-1'>
                    <img src={game} alt="" className='object-cover h-full w-full'/>
                </div>
                <div className='col-span-1 row-span-1'>
                    <img src={library} alt="" className='object-cover h-full w-full'/>
                </div>
                <div className='col-span-2 row-span-1'>
                    <img src={microWork} alt="" className='object-cover h-full w-full'/>
                </div>
            </div>
        </div>
    );
};

export default Projects;