import React, {useState} from "react";
import cl from './Slider3.module.css'
import Vivaldi from '../images/Vivaldi.png'
import checkMark from '../images/checkMark.png'
import slid1 from "../images/slid1.jpg";
import slid2 from "../images/slid2.jpg";
import slid3 from "../images/slid3.jpg";
import {Carousel} from "react-bootstrap";
import classes from "./Slider.module.css";
const Slider3 = () => {
   const [index, setIndex] = useState(0);

   const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
   };
   return (
      <div className={cl.container}>
         <div className={cl.left__block}>
            <div className={cl.logo}>
               <img src={Vivaldi} className={cl.logo__image} alt="LOGO" />
            </div>

            <div className={cl.register}>
               <p className={cl.register__p}>Региcтрация партнера</p>
            </div>

            <div className={cl.success}>
               <div className={cl.tick}><img src={checkMark} className={cl.checkMark} alt="galochka" /></div>
               <div className={cl.success__text}>
                  <p className={cl.success__text__p}>Уcпешно</p>
               </div>

            </div>
            <div className={cl.thanks__register}>
               <p className={cl.thanks__register__p}>Спасибо за регистрацию! <p className={cl.thanks__register__p}>Теперь вы можете авторизоваться</p>  в Личном Кабинете Партнёра</p >
            </div>
         </div>

         <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
            <Carousel.Item >
               <img
                   className={classes.right__block}
                   src={slid1}
                   alt="First slide"
               />
            </Carousel.Item>
            <Carousel.Item >
               <img
                   className={classes.right__block}
                   src={slid2}
                   alt="Second slide"
               />
            </Carousel.Item>
            <Carousel.Item>

               <img
                   className={classes.right__block}
                   src={slid3}
                   alt="Third slide"
               />
            </Carousel.Item>
         </Carousel>


      </div >
   )
}



export default Slider3;