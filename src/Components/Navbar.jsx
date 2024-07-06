import { useEffect, useState } from "react";

import {  BiMenuAltRight } from "react-icons/bi";
import { FaDownload } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
const Navbar = () => {
    const [scroll,setScroll] = useState(0);
    const [mobileMenu,setMobileMenu] = useState(false);
    const [id,setId] = useState(1);

    useEffect(() => {
        window.addEventListener('scroll',() => {
            setScroll(scrollY)
        })
    },[scroll])
    
    
    
    return (
        <div className="z-[99]">
            {/* desktop menu */}
            <div className={`hidden lg:flex justify-between border-b px-12 py-8 items-center fixed w-full z-50  border-[rgba(56,57,60,1)] ${scroll > 30 ? "bg-[rgba(0,0,0,0.8)]" : ''}`}>
            <h2 className="text-white text-2xl font-semibold">Logo</h2>
            <ul className="text-white flex gap-6 blur-0">
                <li onClick={() => setId(1)} className={id === 1 && 'font-extrabold'}><HashLink smooth to="/#home">Home</HashLink></li>
                <li onClick={() => setId(2)} className={id === 2 && 'font-extrabold'}><HashLink smooth to="/#about">About</HashLink></li>
                <li onClick={() => setId(3)} className={id === 3 && 'font-extrabold'}><HashLink smooth to="/#skills">Skills</HashLink></li>
                <li onClick={() => setId(4)} className={id === 4 && 'font-extrabold'}><HashLink smooth to="/#projects">Projects</HashLink></li> 
                <li onClick={() => setId(5)} className={id === 5 && 'font-extrabold'}><HashLink smooth to="/#education">Education</HashLink></li>
                <li onClick={() => setId(6)} className={id === 6 && 'font-extrabold'}><HashLink smooth to="/#contact">Contact</HashLink></li> 
            </ul>
            <a href="/src/assets/Beige Brown Warm Classic Project Manager CV.pdf" className="text-white blur-0 flex items-center gap-2 bg-[#FF6D5A] font-semibold px-4 py-2 rounded-xl" download="Musfique-Patwary's CV"><FaDownload></FaDownload> Download CV</a>
           
            </div>
            {/* mobile menu */}
            <div className={`lg:hidden flex justify-between border-b px-12 py-8 items-center fixed w-full z-50  border-[rgba(56,57,60,1)] ${scroll > 30 ? "bg-[rgba(0,0,0,0.8)]" : ''}`}>
            <h3 className="text-4xl text-white">Logo</h3>
            <ul   className={`text-white flex-col  gap-6 absolute top-28  p-10  w-full transition-all ease-linear   border-y bg-[rgba(0,0,0,0.8)] ${mobileMenu? 'flex left-0' : 'left-96'}`}>
                <li onClick={() => {setMobileMenu(false);setId(1)}} className={id === 1 && 'font-extrabold'}><HashLink smooth to="/#home">Home</HashLink></li>
                <li onClick={() => {setMobileMenu(false);setId(2)}} className={id === 2 && 'font-extrabold'}><HashLink smooth to="/#about">About</HashLink></li>
                <li onClick={() => {setMobileMenu(false);setId(3)}} className={id === 3 && 'font-extrabold'}><HashLink smooth to="/#skills">Skills</HashLink></li>
                <li onClick={() => {setMobileMenu(false);setId(4)}} className={id === 4 && 'font-extrabold'}><HashLink smooth to="/#projects">Projects</HashLink></li> 
                <li onClick={() => {setMobileMenu(false);setId(5)}} className={id === 5 && 'font-extrabold'}><HashLink smooth to="/#contact">Contact</HashLink></li> 
                
            </ul>
            <BiMenuAltRight onClick={() => setMobileMenu(!mobileMenu)} className="text-white text-3xl"/>
            
            </div>
        </div>
    );
};

export default Navbar;