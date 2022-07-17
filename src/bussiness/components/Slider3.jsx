import React from "react";
import cl from './Slider3.module.css'
import Vivaldi from '../images/Vivaldi.png'
import tradingNow from '../images/tradingNow.png'
import checkMark from '../images/checkMark.png'

const Slider3 = () => {
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

         <div className={cl.right__block}>
            <div className={cl.right__container}>
               <img src={tradingNow} className={cl.trading__image} alt="trading" />
            </div>
         </div>

      </div >
   )
}



export default Slider3;