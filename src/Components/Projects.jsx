import game from '../assets/game.png';
import realEstate from '../assets/real-estate.png';
import library from '../assets/library.png';
import microWork from '../assets/micro-work.png';
import furniture from '../assets/furniture.png';
import { useState } from 'react';
import tailwind from '../assets/tailwind.png';
import react from '../assets/react.png';
import express from '../assets/express.png';
import html from '../assets/html.png';
import js from '../assets/js.png';
import mongo from '../assets/mongo.png';
import firebase from '../assets/firebase.png';
import { Link } from 'react-router-dom';
const Projects = () => {
    const [hover,setHover] = useState(false);
    const [id,setId] = useState(0);
    

    
    return ( 
        <div id='projects' className='px-5 lg:px-12'>
             <h2 className="text-white opacity-80 text-xl w-fit mx-auto px-8 py-2 bg-[rgba(255,255,255,0.05)] rounded-full border-4 border-[rgb(32,32,32)] border-spacing-4 my-12"> Recent Projects</h2>
            <div className='grid grid-cols-3 grid-rows-3 gap-6 '>

                <div onMouseOver={() => {setId(1);setHover(true)}} onMouseLeave={() => setHover(false)}  className={` col-span-3 furniture lg:row-span-1 h-full w-full relative ease-in-out delay-1000 cursor-pointer lg:col-span-2`}>
                   <img src={furniture}  alt="" className=' h-full w-full object-cover'/>
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    {  hover && id === 1 &&
                        <div className='w-full bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))] absolute m-auto top-0 right-0 left-0 bottom-0 z-20 h-full transition-all'>
                            <button className="btn bg-[#FF6D5A] hover:bg-[#FF6D5A] text-white font-semibold absolute border-none m-auto left-0 right-0 top-0 bottom-0 w-fit" onClick={()=>document.getElementById('my_modal_3').showModal()}>View Details</button>
                        </div>
                    }
                    <dialog id="my_modal_3" className="modal">
                    <div className='w-2/3 p-5 bg-black modal-box overflow-y-auto'>
                        <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-20 text-white bg-black hover:bg-black">✕</button>
                        </form>
                        <img src={furniture} alt="furniture" className=''/>
                        <h3 className="font-semibold text-white text-center text-lg mt-5">Arts & Craft Website</h3>
                        <h3 className='text-white font-semibold text-center mt-5'>Technology Used</h3>
                        <div className="flex flex-wrap gap-10 justify-center items-center mt-5 lg:flex-row">
                            <img src={react} alt="" className='h-14 w-14'/>
                            <img src={express} alt="" className='h-14 w-14'/>
                            <img src={tailwind} alt="" className='h-14 w-14 object-contain'/>
                            <img src={mongo} alt="" className='h-14 w-14'/>
                            <img src={firebase} alt="" className='h-14 w-14 object-contain'/>
                        </div>
                        <div className='text-white'>
                            <h3 className='text-white font-semibold text-center mt-5'>Features of the website</h3>
                            <ul className='text-center mt-5 space-y-5 opacity-60'>
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


                <div onMouseOver={() => {setId(2);setHover(true)}} onMouseLeave={() => setHover(false)} className={`col-span-3 furniture lg:row-span-2 h-full w-full relative ease-in-out delay-1000 cursor-pointer lg:col-span-1`}>
                   <img src={realEstate} alt="" className='-z-10 h-full w-full object-cover'/>
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    {  hover && id === 2 &&
                        <div className='w-full bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))] absolute m-auto top-0 right-0 left-0 bottom-0 z-20 h-full transition-all'>
                            <button className="btn bg-[#FF6D5A] hover:bg-[#FF6D5A] text-white font-semibold absolute border-none m-auto left-0 right-0 top-0 bottom-0 w-fit" onClick={()=>document.getElementById('my_modal_4').showModal()}>View Details</button>
                        </div>
                    }
                    <dialog id="my_modal_4" className="modal">
                    <div className='w-2/3 p-5 bg-black modal-box overflow-y-auto'>
                        <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-20 text-white bg-black hover:bg-black">✕</button>
                        </form>
                        <img src={realEstate} alt="furniture" className=''/>
                        <h3 className="font-semibold text-white text-center text-lg mt-5">Real Estate Website</h3>
                        <h3 className='text-white font-semibold text-center mt-5'>Technology Used</h3>
                        <div className="flex flex-wrap gap-10 justify-center items-center mt-5 lg:flex-row">
                            <img src={react} alt="" className='h-14 w-14'/>
                           
                            <img src={tailwind} alt="" className='h-14 w-14 object-contain'/>
                            
                            <img src={firebase} alt="" className='h-14 w-14 object-contain'/>
                        </div>
                        <div className='text-white'>
                            <h3 className='text-white font-semibold text-center mt-5'>Features of the website</h3>
                            <ul className='text-center mt-5 space-y-5 opacity-60'>
                                <li>1. Google, Github Secure Login</li>
                                <li>2. Custom registration</li>
                                <li>3. Save Favorite Estates</li>
                                <li>4. Eye catching slider for properties</li>
                                <li>5. Maps for individual estates</li>
                            </ul>
                            <div className='flex justify-between mt-5'>
                            <Link to={'https://real-estate-e912d.firebaseapp.com/'} target='_'><button className='text-white bg-[#FF6D5A] px-4 py-2 rounded-lg '>Website Visit</button></Link>
                            <Link to={'https://github.com/Musfique55/Real-Estate?tab=readme-ov-file'} target='_'><button className='text-white bg-[#FF6D5A] px-4 py-2 rounded-lg '>Github Visit</button></Link>
                            </div>
                        </div>
                    </div>
                    </dialog>
                </div>


                <div onMouseOver={() => {setId(3);setHover(true)}} onMouseLeave={() => setHover(false)} className={`col-span-3 furniture lg:row-span-1 h-full w-full relative ease-in-out delay-1000 cursor-pointer lg:col-span-2`}>
                   <img src={game} alt="" className='-z-10 h-full w-full object-cover'/>
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    {  hover && id === 3 &&
                        <div className='w-full bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))] absolute m-auto top-0 right-0 left-0 bottom-0 z-20 h-full transition-all'>
                            <button className="btn bg-[#FF6D5A] hover:bg-[#FF6D5A] text-white font-semibold absolute border-none m-auto left-0 right-0 top-0 bottom-0 w-fit" onClick={()=>document.getElementById('my_modal_5').showModal()}>View Details</button>
                        </div>
                    }
                    <dialog id="my_modal_5" className="modal">
                    <div className='w-2/3 p-5 bg-black modal-box overflow-y-auto'>
                        <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-20 text-white bg-black hover:bg-black">✕</button>
                        </form>
                        <img src={game} alt="furniture" className=''/>
                        <h3 className="font-semibold text-white text-center text-lg mt-5">Kung Foo & Keyboard</h3>
                        <h3 className='text-white font-semibold text-center mt-5'>Technology Used</h3>
                        <div className="flex flex-wrap gap-10 justify-center items-center mt-5 lg:flex-row">
                            <img src={html} alt="" className='h-14 w-14'/>
                            <img src={tailwind} alt="" className='h-14 w-14 object-contain'/>
                            <img src={js} alt="" className='h-14 w-14'/>
                            
                        </div>
                        <div className='text-white'>
                            <h3 className='text-white font-semibold text-center mt-5'>Features of the website</h3>
                            <ul className='text-center mt-5 space-y-5 opacity-60'>
                                <li>1.Master Your Keyboard Skills</li>
                                <li>2. Score</li>
                                <li>3. Lives</li>
                            </ul>
                            <div className='flex justify-between mt-5'>
                            <Link to={'https://celadon-sprite-b7e890.netlify.app/'} target='_'><button className='text-white bg-[#FF6D5A] px-4 py-2 rounded-lg '>Website Visit</button></Link>
                            <Link to={'https://github.com/Musfique55/alpha-clash-pro?tab=readme-ov-file'} target='_'><button className='text-white bg-[#FF6D5A] px-4 py-2 rounded-lg '>Github Visit</button></Link>
                            </div>
                        </div>
                    </div>
                    </dialog>
                </div>


                <div onMouseOver={() => {setId(4);setHover(true)}} onMouseLeave={() => setHover(false)} className={`col-span-3 lg:row-span-1 h-full w-full relative ease-in-out delay-1000 cursor-pointer lg:col-span-1`}>
                   <img src={library} alt="" className='-z-10 h-full w-full'/>
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    {  hover && id === 4 &&
                        <div className='w-full bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))] absolute m-auto top-0 right-0 left-0 bottom-0 z-20 h-full transition-all'>
                            <button className="btn bg-[#FF6D5A] hover:bg-[#FF6D5A] text-white font-semibold absolute border-none m-auto left-0 right-0 top-0 bottom-0 w-fit" onClick={()=>document.getElementById('my_modal_6').showModal()}>View Details</button>
                        </div>
                    }
                    <dialog id="my_modal_6" className="modal">
                    <div className='w-2/3 p-5 bg-black modal-box overflow-y-auto'>
                        <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-20 text-white bg-black hover:bg-black">✕</button>
                        </form>
                        <img src={library} alt="library" className=''/>
                        <h3 className="font-semibold text-white text-center text-lg mt-5">Open Library Website</h3>
                        <h3 className='text-white font-semibold text-center mt-5'>Technology Used</h3>
                        <div className="flex flex-wrap gap-10 justify-center items-center mt-5 lg:flex-row">
                            <img src={react} alt="" className='h-14 w-14'/>
                            <img src={express} alt="" className='h-14 w-14'/>
                            <img src={tailwind} alt="" className='h-14 w-14 object-contain'/>
                            <img src={mongo} alt="" className='h-14 w-14'/>
                            <img src={firebase} alt="" className='h-14 w-14 object-contain'/>
                        </div>
                        <div className='text-white'>
                            <h3 className='text-white font-semibold text-center mt-5'>Features of the website</h3>
                            <ul className='text-center mt-5 space-y-5 opacity-60'>
                                <li>1. Custom & Google & Github Login System</li>
                                <li>2. Logout Options</li>
                                <li>3. Dark mode feature</li>
                                <li>4. Book adding features</li>
                                <li>5. Book Update & Delete Options</li>
                                <li>6. Favorite Book Options</li>
                            </ul>
                            <div className='flex justify-between mt-5'>
                            <Link to={'https://library-management-clien-7a81f.web.app'} target='_'><button className='text-white bg-[#FF6D5A] px-4 py-2 rounded-lg '>Website Visit</button></Link>
                            <Link to={'https://github.com/Musfique55/library-management'} target='_'><button className='text-white bg-[#FF6D5A] px-4 py-2 rounded-lg '>Github Visit</button></Link>
                            </div>
                        </div>
                    </div>
                    </dialog>
                </div>


                <div onMouseOver={() => {setId(5);setHover(true)}} onMouseLeave={() => setHover(false)} className={`col-span-3 lg:row-span-1 h-full w-full relative ease-in-out delay-1000 cursor-pointer lg:col-span-2`}>
                   <img src={microWork} alt="" className='-z-10 h-full w-full object-cover'/>
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    {  hover && id === 5 &&
                        <div className='w-full bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))] absolute m-auto top-0 right-0 left-0 bottom-0 z-20 h-full transition-all'>
                            <button className="btn bg-[#FF6D5A] hover:bg-[#FF6D5A] text-white font-semibold absolute border-none m-auto left-0 right-0 top-0 bottom-0 w-fit" onClick={()=>document.getElementById('my_modal_7').showModal()}>View Details</button>
                        </div>
                    }
                    <dialog id="my_modal_7" className="modal">
                    <div className='w-2/3 p-5 bg-black modal-box overflow-y-auto'>
                        <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-20 text-white bg-black hover:bg-black">✕</button>
                        </form>
                        <img src={microWork} alt="micro-work-website" className=''/>
                        <h3 className="font-semibold text-white text-center text-lg mt-5">Micro Worker Website</h3>
                        <h3 className='text-white font-semibold text-center mt-5'>Technology Used</h3>
                        <div className="flex flex-wrap gap-10 justify-center mt-5 lg:flex-row items-center">
                            <img src={react} alt="" className='h-14 w-14'/>
                            <img src={express} alt="" className='h-14 w-14'/>
                            <img src={tailwind} alt="" className='h-14 w-14 object-contain'/>
                            <img src={mongo} alt="" className='h-14 w-14'/>
                            <img src={firebase} alt="" className='h-14 w-14 object-contain'/>
                        </div>
                        <div className='text-white'>
                            <h3 className='text-white font-semibold text-center mt-5'>Features of the website</h3>
                            <ul className='text-center mt-5 space-y-5 opacity-60'>
                                <li>1. Role-Based Access Control: Users are assigned roles: Worker, Task-Creator, or Admin. Different dashboards and functionalities based on user roles.</li>
                                <li>2. Responsive Design: The platform is responsive for mobile, tablet, and desktop views. Dashboard is also made responsive.</li>
                                <li>3. User Authentication: Secure user registration and login using JWT. Email and Google login options.</li>
                                <li>4.Navbar and Footer: Navbar with dynamic navigation options based on user login status. Footer with website logo and clickable social media icons.</li>
                                <li>5. Home Page: Hero section with a slider. Features section highlighting key platform features. How It Works section with steps to use the platform. Top Earners section showing top workers. Testimonial section with user feedback in a slider format.</li>
                                <li>6. Task Management for Workers: View available tasks with detailed descriptions. Submit completed tasks for review. Withdraw coins earned by completing tasks. Receive notifications about earnings and withdrawals.</li>
                                <li>7. Task Management for Task-Creators: Create tasks with specific instructions, deadlines, and reward amounts. Review task submissions and approve or reject them. Pay workers for completed tasks using platform coins. Purchase coins to facilitate task payments. Report workers to Admin for issues.</li>
                                <li>8. Admin Dashboard: Modify user roles and address reported issues. Manage platform integrity by deleting tasks and users. View and handle withdrawal requests from users.</li>
                                <li>9. Payment and Withdrawal System: Workers can withdraw coins for real money. Task-Creators can purchase coins using Stripe. Payment history tracking for Task-Creators.</li>
                                <li>10. Notification System: Users receive notifications for various actions (e.g., task approval, earnings). Notifications are stored and displayed in descending order based on time.</li>
                            </ul>
                            <div className='flex justify-between mt-5'>
                            <Link to={'https://work-scout-3a179.web.app'} target='_'><button className='text-white bg-[#FF6D5A] px-4 py-2 rounded-lg '>Website Visit</button></Link>
                            <Link to={'https://github.com/Musfique55/Work-Scout-Micro-Workers'} target='_'><button className='text-white bg-[#FF6D5A] px-4 py-2 rounded-lg '>Github Visit</button></Link>
                            </div>
                        </div>
                    </div>
                    </dialog>
                </div>


                
            </div>
        </div>
    );
};

export default Projects;