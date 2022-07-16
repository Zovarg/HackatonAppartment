import React, { useState } from "react";
import cl from './Slider2.module.css'
import Vivaldi from '../images/Vivaldi.png'
import tradingNow from '../images/tradingNow.png'

const Slider2 = () => {
   const [isActive, setIsActive] = useState(false)

   const handleClick = () => {
      // setIsActive(current => !current)
      setIsActive(true)

   }

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
            <button className={cl.button__register}>Региcтрация</button>
            <div className={cl.user__agreement}>Региcтрируяcь вы cоглашаетеcь c нашими
               <div><a href="#">Уcловиями пользования </a>и <a href="#">Политикой конфиденциальноcти</a></div></div>
         </div>

         <div className={cl.right__block}>
            <div className={cl.right__container}>
               <div className={cl.image}>
                  <img src={tradingNow} className={cl.trading__image} alt="trading" />
               </div>
               <div className={cl.text__content}>
                  <p className={cl.text__under__photo}>Размещение на платформе</p>
                  <p className={cl.main__text__under__photo}>
                     Ваш магазин (точка) будет отображаться на странице доступных магазинов нашего сервиса. По мере совершения покупок, Ваши клиенты будут получать возможность оценивать работу копании. Исходя из полученных данных, будет формироваться рейтинг и рекомендации Вас покупателям
                  </p>
               </div>
            </div>

         </div>

      </div >
   )
}

export default Slider2