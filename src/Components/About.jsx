import img from '../assets/about_img_1.png';
const About = () => {
    return (
        <div id='about' className='px-5 lg:px-12 relative lg:my-20'>
            <h2 className="text-white opacity-80 text-xl w-fit mx-auto px-8 py-2 bg-[rgba(255,255,255,0.05)] rounded-full border-4 border-[rgb(32,32,32)] border-spacing-4 my-12">About</h2>
            <div className=" h-[400px] w-1/3 hidden bg-[#f64f59] absolute blur-3xl rounded-full  right-96 top-40 bottom-0 opacity-15 lg:flex"></div>
            <div className="flex flex-col lg:flex-row">
                <img src={img} className='w-[546px] mb-10 lg:mb-0'/>
                <div >
                    <h3 className='text-white font-semibold opacity-75 leading-[1.2em] text-5xl wor'>Why you <span className='text-[#FF6D5A] '>hire me</span> <br /> for your next <br /> project?</h3>
                    <p className='my-6 font-medium text-white opacity-80 '>I am a web developer skilled in HTML, CSS, JavaScript, and React. Also proficient in creating web applications using Express and MongoDB, focusing on CRUD operations.</p>
                    <ul className='space-y-3  list-inside list-disc marker:text-[#F66E70] text-white opacity-75'>
                            <li ><span className='font-bold'>Increased Efficiency:</span> Streamlined development process with a focus on core functionalities, reducing time-to-market.
                            </li>
                            <li><span className='font-bold'>Scalability:</span> Robust backend and database management ensure applications can scale with growing business needs.
                            </li>
                            <li>
                            <span className='font-bold'>Enhanced User Experience:</span> Visually appealing and interactive web applications lead to higher user retention and satisfaction.
                            </li>
                            <li>
                            <span className='font-bold'>Cost-Effective Solutions:</span> Proficient in full-stack development, Musfique can handle both frontend and backend tasks, reducing the need for multiple developers.
                            </li>
                        </ul>
                </div>
            </div>
        </div>
    );
};

export default About;