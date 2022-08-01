import React from 'react';
import './whyusMessageBox.css';
import $ from 'jquery'
import { useEffect } from 'react';

const WhyusMessageBox = () => {
   useEffect(()=>{
        $(function(){  
            $(".fa-caret-down").click(function(){  
                $(".messageBoxinnerContent").slideToggle(1000);  
            });  
        });
   },[])
  return (
    <>

        <section className='messageBoxWrapper'>
                <div className='messageBoxinnerItems'>
                <i class="fa-solid fa-chess-king"></i>
                <i class="fa-solid fa-caret-down"></i>
                </div>
                <div className='messageBoxinnerContent'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At sequi animi beatae neque cumque tempore praesentium! Asperiores, nisi quidem consequuntur quisquam, nostrum aspernatur velit nesciunt laborum architecto qui maxime! Odio?
                    </p>
                </div>

        </section>    
    </>
  )
}

export default WhyusMessageBox

