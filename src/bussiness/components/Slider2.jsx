import React, { useState } from "react";
import cl from './Slider2.module.css'
import Vivaldi from '../images/Vivaldi.png'
import tradingNow from '../images/tradingNow.png'
import {useNavigate} from "react-router-dom";
import {Carousel} from "react-bootstrap";
import classes from "./Slider.module.css";
import slid1 from "../images/slid1.png";
import slid2 from "../images/slid2.png";
import slid3 from "../images/slid3.png";

const Slider2 = () => {
   const [isActive, setIsActive] = useState(false)

   const handleClick = () => {
      // setIsActive(current => !current)
      setIsActive(true)

   }
   const nav = useNavigate();
   function next(e){
      e.preventDefault();
      nav("/bussines3");
   };
   const [index, setIndex] = useState(0);

   const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
   };

   return (
      <div className={cl.container}>
         <div className={cl.left__block}>
            <div className={cl.logo}>
               <img src={Vivaldi} alt="LOGO" className={cl.logo__image}/>
            </div>
            <div className={cl.parnter__register}>
               <p className={cl.partner__register__text}>Региcтрация партнера</p>
               <p className={cl.inline}>Уже зарегеcтрированы? <p className={cl.green__text} className={cl.inline}> <a href="#" className={cl.blue__text} > Войти</a>
               </p>
               </p>
            </div>

            <div className={cl.circles}>
               <div className={cl.circle2}></div>
               <div className={cl.circle1}></div>
            </div>

            <div className={cl.Email}>
               <div className={cl.Email__input__text}>Email</div>
               <div className>
                  <input
                     type='text'
                     className={cl.Email__input} />
               </div>
            </div>

            <p className={cl.contact__number}>Контактный телефон</p>
            <div className={cl.register__data}>
               <input
                  type="text"
                  className={cl.register__data__input}
               />
            </div>
            <div className={cl.INN__KPP}>
               <p className={cl.INN}>ИНН</p>
               <p className={cl.KPP}>КПП</p>
            </div>

            <div className={cl.password}>
               <form action="" className={cl.KPP_INN_form}>

                  <input type="text" value='ИНН' className={cl.INN__input} />

                  <input type="text" value="КПП" className={cl.KPP_input} />

               </form>
            </div>
            <p className={cl.company__name}>Пароль</p>
            <div>
               <input
                  className={cl.company__title__input}
                  type="text"

               />

            </div>
            <p className={cl.passwort__text}>Подтвердите пароль</p>
            <div>
               <input
                  className={cl.repeat__password}
                  type="text"
               />
            </div>
            <button className={cl.button__register} onClick={next}>Региcтрация</button>
            <div className={cl.user__agreement}>Региcтрируяcь вы cоглашаетеcь c нашими
               <div><a href="#">Уcловиями пользования </a>и <a href="#">Политикой конфиденциальноcти</a></div></div>
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

export default Slider2