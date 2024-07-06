import { Controls, Player } from "@lottiefiles/react-lottie-player";
import { FaGraduationCap } from "react-icons/fa";
const Education = () => {
    return (
        <div id="education" className="relative h-screen mt-20 hidden lg:block">
            <h2 className="text-white opacity-80 text-xl w-fit mx-auto px-8 py-2 bg-[rgba(255,255,255,0.05)] rounded-full border-4 border-[rgb(32,32,32)] border-spacing-4 my-12">Education</h2>
            <Player
            autoplay
            loop
            src="https://lottie.host/7ad64c42-49db-45ff-9f84-1d62f54c5761/zoa0MtAia6.json"
            style={{ height: '800px', width: '800px', position:'absolute', top:'0',right:'0',left : '0',bottom:'0',margin:'auto' }}
            >
            <Controls  buttons={[ 'repeat', ]} />
            </Player>
            <div style={{background : '../assets/iconbox_bg_3.svg'}} className="flex justify-center items-center gap-3 absolute top-28 left-[44rem]">
                <FaGraduationCap  className="text-[#FF6D5A] text-3xl "/>
                <div className="text-white">
                    <h3 >Primeasia University</h3>
                    <h3 className="text-2xl font-semibold">BBA in ITHM</h3>
                </div>
            </div>
            <div style={{background : '../assets/iconbox_bg_3.svg'}} className="flex flex-row-reverse justify-center items-center gap-3 absolute top-[14.5rem] left-[25.5rem]">
                <FaGraduationCap  className="text-[#FF6D5A] text-3xl "/>
                <div className="text-white">
                    <h3 >Baf Shaheen College Dhaka</h3>
                    <h3 className="text-2xl font-semibold">Business Studies</h3>
                </div>
            </div>
            <div style={{background : '../assets/iconbox_bg_3.svg'}} className="flex justify-center items-center gap-3 absolute top-[22rem] left-[44rem]">
                <FaGraduationCap  className="text-[#FF6D5A] text-3xl "/>
                <div className="text-white">
                    <h3 >Civil Aviation High School</h3>
                    <h3 className="text-2xl font-semibold">Science</h3>
                </div>
            </div>
            <div className="h-40 z-10 bg-black w-52 absolute top-[24.5rem] left-[30rem]">
                
            </div>
        </div>
    );
};

export default Education;