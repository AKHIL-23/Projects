import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

function Slider() {
    return (
        <div className='relative'>

            <OwlCarousel
                className="owl-theme relative  w-screen lg:-mt-5 mt-16"
                loop={true}
                autoplay={true}
                dots={false}
                items={1}
                touchDrag={true}
                lazyLoad={true}
                animateOut={'fadeOut'}
                animateIn={'flipInX'}
            // nav

            >
                <div className='item pb-20  '>
                    <img src='/assets/img/slider/slideImg1.png' alt='Live Projects Training' />
                    <div className=' p-4  text-left absolute bottom-1/3 w-2/3 h-fit md:w-1/2 md:bottom-96  xl:bottom-2/3  2xl:bottom-3/4 
                space-y-2 ml-1 lg:ml-20'>
                        <h1 className='text-lg sm:text-3xl xl:text-4xl font-bold text-blue-500 animate-bounce' >Live Projects Training</h1>
                        <p className='text-sm sm:text-xl xl:text-2xl  text-gray-500'>ZN Infotech provides live project training to all students</p>
                    </div>
                </div>
                <div className='item pb-20 '>
                    <img src='/assets/img/slider/s1.png' alt='Embedded System & Robotics' />
                    <div className=' p-4  text-center md:text-left absolute bottom-0 w-full h-fit md:w-1/2 md:bottom-2/3  xl:bottom-2/3  2xl:bottom-3/4 
                space-y-2 ml-1 lg:ml-20'>
                        <h1 className='text-lg sm:text-3xl xl:text-4xl font-bold text-blue-500 animate-bounce' >Embedded System & Robotics</h1>
                        <p className='text-sm sm:text-xl xl:text-2xl  text-gray-500'>ZN Infotech provides a training on Embedded Systems and Robotics</p>
                    </div>
                </div>


                <div className='item pb-20'>
                    <img src='/assets/img/slider/s2.png' alt='Live Projects Training' />
                    <div className=' p-4  text-center absolute bottom-0 w-full h-fit md:w-1/2 md:bottom-96 md:right-0 xl:bottom-2/3  2xl:bottom-3/4 space-y-2'>
                        <h1 className='text-lg sm:text-3xl xl:text-4xl font-bold text-blue-500 animate-bounce'>Live Projects Training</h1>
                        <p className='text-sm sm:text-xl xl:text-2xl text-gray-500 '>ZN Infotech provides live project training to all students</p>
                    </div>
                </div>



            </OwlCarousel >
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0">
                <path
                    fill="#09f"
                    d="M0 224l34.3-21.3C68.6 181 137 139 206 101.3 274.3 64 343 32 411 48c69 16 138 80 206 133.3 68.7 53.7 137 95.7 206 85.4 68.4-10.7 137-74.7 206-117.4 68.1-42.3 137-64.3 205-48 68.9 15.7 137 69.7 172 96l34 26.7v96H0z"
                ></path>
            </svg> */}

        </div>
    );
}

export default Slider