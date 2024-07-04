import { IoMdCheckmark } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";

const Contact = () => {
    return (
        <div id="contact" className="h-screen relative px-12">
            <div className="h-full w-1/3 bg-[#c471ed] absolute blur-3xl rounded-full  left-0 right-0 top-0 bottom-0 opacity-15 -z-20 "></div>
            <div className=" h-full w-1/3 bg-[#f64f59] absolute blur-3xl rounded-full left-50 right-0 top-0 bottom-0 opacity-15 -z-20 "></div>
            <h2 className="text-white opacity-80 text-xl w-fit mx-auto px-8 py-2 bg-[rgba(255,255,255,0.05)] rounded-full border-4 border-[rgb(32,32,32)] border-spacing-4 my-12">Contact Us</h2>
           <div className="flex gap-10 items-center">
                <div className=" text-white">
                <div>
                    <h3 className=" flex items-center gap-3 text-5xl font-semibold">Reach Out <MdArrowOutward className="text-5xl"/></h3>
                    <p className="opacity-80 mt-5">Have a Project or Need Assistance?</p>
                    <div className="space-y-2 mt-10">
                    <p className="flex gap-4 text-lg items-center"><IoMdCheckmark className="border p-3 text-5xl rounded-full bg-[#131313]"/>Personalized Assistance</p>
                    <p className="flex gap-4 text-lg items-center"><IoMdCheckmark className="border p-3 text-5xl rounded-full bg-[#131313]"/>Timely Response</p>
                    <p className="flex gap-4 text-lg items-center"><IoMdCheckmark className="border p-3 text-5xl rounded-full bg-[#131313]"/>Compherehensive Support</p>
                    </div>
                </div>
                </div>
                <form className="flex-1 grid grid-cols-2 gap-3 border p-5 rounded-2xl">
                    <input type="text" placeholder="Name" className="px-3 col-span-1 py-2 placeholder:bg-[#242424] focus:bg-[#242424] bg-[#242424] outline-none border-none text-white rounded-2xl mb-8"/>
                    <input type="email" placeholder="Email" className="px-3 col-span-1 py-2 placeholder:bg-[#242424] focus:bg-[#242424] bg-[#242424] outline-none border-none text-white rounded-2xl mb-8"/>
                    <textarea placeholder="Message" className="px-3 col-span-2 py-2 placeholder:bg-[#242424] focus:bg-[#242424] bg-[#242424] outline-none border-none text-white rounded-2xl h-44"></textarea>
                    <button type="submit" className="bg-white w-full mt-5 py-2 font-semibold col-span-2 rounded-full">Submit</button>
                </form>
           </div>
        </div>
    );
};

export default Contact;