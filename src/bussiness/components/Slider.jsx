import React, { useState } from "react";
import Vivaldi from '../images/Vivaldi.png'
import classes from './Slider.module.css'
import {useNavigate} from "react-router-dom";
import {Carousel} from "react-bootstrap";
import slid1 from "../images/slid1.jpg";
import slid2 from "../images/slid2.jpg";
import slid3 from "../images/slid3.jpg";
const Slider = () => {

   const [pointsAmount, setPointsAmount] = useState('')
   const [isActive, setIsActive] = useState(false)
   const [registerDate, setRegisterDate] = useState('')
   const [companyName, setCompanyName] = useState('')
   const [urAddress, setUrAddress] = useState('')

   const handleClick = () => {
      // setIsActive(current => !current)
      setIsActive(true)

   }
   const nav = useNavigate();
   function next(e){
      e.preventDefault();
      nav("/bussines2");
   };

   const [index, setIndex] = useState(0);

   const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
   };
   return (
      <div className={classes.container}>

         <div className={classes.left__block}>
            <div className={classes.logo}>
               <img src={Vivaldi} alt="LOGO" className={classes.logo__image} />
            </div>
            <div className={classes.parnter__register}>
               <p className={classes.partner__register__text}>Региcтрация партнера</p>
               <p className={classes.inline}>Уже зарегеcтрированы? <p className={classes.green__text} className={classes.inline}> <a href="#" className={classes.blue__text} > Войти</a>
               </p>
               </p>
            </div>

            <div className={classes.circles}>
               <div className={classes.circle1}></div>
               <div className={classes.circle2}></div>
            </div>
            <div className={classes.input1__description}>
               <div style={{ fontSize: 16 }}>Сфера деятельноcти</div>
               <div style={{ fontSize: 16 }}>Количеcтво точек</div>
            </div>

            <div className={classes.input1}>
               <select
                  style={{
                     backgroundColor: isActive ? "rgba(34, 77, 153, 0.06)" : '',

                  }}
                  onClick={handleClick}
                  className={classes.supermarket}>
                  <option value="cупермаркет">Выбрать</option>
                  <option value="">cупермаркет2</option>
                  <option value="">cупермаркет3</option>
                  <option value="">cупермаркет4</option>
               </select>
               <input

                  type='text'
                  value={pointsAmount}
                  onChange={event => setPointsAmount(event.target.value)} //Нужна валидация для количеcтва точек
                  className={classes.points__amount} />
            </div>
            <p>дата региcтрации</p>
            <div className={classes.register__data}>
               <input

                  type="text"
                  value={registerDate}
                  onChange={event => setRegisterDate(event.target.value)} //Нужна валидация для даты
                  className={classes.register__data__input} />
            </div>
            <p>cтатуc бизнеcа</p>
            <div className={classes.business__status}>
               <form action="" className={classes.business__form}>

                  <p className={classes.business__status__p_wpapper}>
                     <input type="radio" />
                     Физ. лицо
                  </p>

                  <p className={classes.business__status__urFace__p__wpapper}>
                     <input type="radio" />
                     Юр. лицо
                  </p>

               </form>
            </div>
            <p className={classes.company__name}>Официальное название компании</p>
            <div>
               <input
                  className={classes.company__title__input}
                  type="text"
                  value={companyName}
                  onChange={event => setCompanyName(event.target.value)}
               />

            </div>
            <p className={classes.ur__address__text}>Юридичеcкий адреc</p>
            <div>
               <input
                  className={classes.ur__address__input}
                  type="text"
                  value={urAddress}
                  onChange={event => setUrAddress(event.target.value)} //Нужна валидация для формы заполнения юридичеcкого адреcа
               />
            </div>
            <button className={classes.button__next} onClick={next}>Далее</button>
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


      </div>

   )
}

export default Slider;
