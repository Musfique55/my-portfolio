import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="flex justify-between py-8 border-t border-[rgba(56,57,60,1)] items-center px-12">
           <h3 className="text-white opacity-80 font-medium text-xl">© 2024 All rights reserved</h3> 
           <div className="flex  gap-6">
                <Link to={'facebook.com'}>
                <FaFacebook className='text-xl text-[#f64f59] cursor-pointer'/>
                </Link>
                <Link> <FaLinkedin className='text-xl text-[#f64f59] cursor-pointer'/>
                </Link>
               <Link><FaGithub className='text-xl text-[#f64f59] cursor-pointer'/>
               </Link>
                <Link><FaXTwitter className='text-xl text-[#f64f59] cursor-pointer'/>
                </Link>
                </div>
            </div>
    );
};

export default Footer;