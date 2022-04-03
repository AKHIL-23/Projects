import React from 'react'


const About = () => {
    return (
        <>
            <section>
                <div className='mt-12 relative'>
                    <div className=' absolute top-12 left-3 sm:top-36 2xl:left-6'>
                        <h1 className='text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-blue-500 uppercase '>Together  </h1>
                        <p className='mt-3 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl text-blue-700 '>we will win !</p>
                    </div>

                    <img src="/assets/img/aboutUsPage/aboutusbanner.svg" alt="" />
                </div>

            </section>

            <div className='' style={{ backgroundColor: "#e8f2ff" }} >
                <div className='container mx-auto  p-6 ' >

                    <h1 className="text-xl text-center m-2 lg:text-2xl xl:text-3xl 2xl:text-4xl text-blue-500">About ZN Infotech</h1>
                    <p className='text-justify text-xs sm:text-sm 2xl:text-base'>Z.N.Infotech Pvt.Ltd aims at empowering the students of today to face the challenges of the marketplace of tomorrow. Many companies are recruiting fresher trainers who know the technology.We have designed various courses based on the industry requirements. For this, we offer JSP, J2EE ASP.NET, VB.NET, Java, HTML, C/C++, PHP , Sun Certification & Microsoft Certification preparation and Web Designing courses with attracting prices.We offer services in Professional Project Training, Customized Software Development, Web Designing and various course curriculums based on the industry requirements and Technical Interview oriented.ZN Infotech is registered as a pvt. ltd. Company under the Companies Act 1956 and approved by Ministry of Corporate Affairs (MCA), Govt. of India.</p>

                </div>
                <div className='bg-white relative pt-24 sm:pt-40 lg:pt-56 xl:pt-64 2xl:pt-96'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='absolute top-0 left-0 '><path fill="#e8f2ff" fill-opacity="1" d="M0,224L24,186.7C48,149,96,75,144,85.3C192,96,240,192,288,213.3C336,235,384,181,432,186.7C480,192,528,256,576,245.3C624,235,672,149,720,144C768,139,816,213,864,213.3C912,213,960,139,1008,96C1056,53,1104,43,1152,58.7C1200,75,1248,117,1296,122.7C1344,128,1392,96,1416,80L1440,64L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg>
                    <h1>heading</h1>

                </div>


            </div>



        </>

    )
}

export default About