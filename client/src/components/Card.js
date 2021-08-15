import React, { useEffect } from 'react'
import card from '../images/NatWest-Biometric-Credit-Card.jpg'
import '../Styles/Card.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
const Card=()=>{
    useEffect(()=>{
        Aos.init({duration:1000});
    },[])
    return(
      <div className="container">
          <div className="container-inner">
          <div className='text-item' data-aos="fade-right">
              <p>It offers a wide range of banking products and financial services for
        corporate and retail in the areas of investment banking, life,
        non-life insurance, venture capital and asset management also it has
        a low interest in loans and also a finance feature at a very low EMI. The bank has a
        network of 100+ branches and 1000+ ATMs across India .HcFF Bank is one of the Big banks of India.</p>
          </div>
              <img className="cardImg" data-aos="fade-left"src={card} alt=''/>
         
          </div>
      </div>
    )
}

export default Card;