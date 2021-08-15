import React, { useEffect } from 'react'
import Card from './Card';
import '../Styles/Home.css';
import Aos from "aos";
import 'aos/dist/aos.css';
const Home = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[]);
  return (
    <>
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-item" data-aos="fade-right">
    <h5 className="Text" data-aos="fade-up">HcFF Bank</h5>
    <p className="text">Where banking is easy</p>
</div>
</div>
<Card/>
</>
  )
}
export default Home
