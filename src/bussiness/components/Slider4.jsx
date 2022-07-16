import React from "react"
import cla from './Slider4.module.css'
import Vivaldi from '../images/Vivaldi.png'
import tradingNow from '../images/tradingNow.png'

const Slider4 = () => {
   return (
      <div className={cla.container}>
         <div className={cla.left__block}>
            <div className={cla.logo}>
               <img src={Vivaldi} className={cla.logo__image} alt="LOGO" />
            </div>
            <div className={cla.parnter__register}>
               <p className={cla.partner__register__text}>Региcтрация партнера</p>
               <p className={cla.inline}>Уже зарегеcтрированы? <p className={cla.green__text} className={cla.inline}> <a href="#" className={cla.blue__text} > Войти</a>
               </p>
               </p>
            </div>

            <div className={cla.circles}>
               <div className={cla.circle2}></div>
               <div className={cla.circle1}></div>
            </div>

            <div className={cla.Email}>
               <div className={cla.Email__input__text}>Email</div>
               <div className>
                  <input
                     type='text'
                     className={cla.Email__input} />
               </div>
            </div>

            <p className={cla.contact__number}>Контактный телефон</p>
            <div className={cla.register__data}>
               <input
                  type="text"
                  className={cla.register__data__input}
               />
            </div>
            <div className={cla.INN__KPP}>
               <p className={cla.INN}>ИНН</p>
               <p className={cla.KPP}>КПП</p>
            </div>

            <div className={cla.password}>
               <form action="" className={cla.KPP_INN_form}>

                  <input type="text" value='ИНН' className={cla.INN__input} />

                  <input type="text" value="КПП" className={cla.KPP_input} />

               </form>
            </div>
            <p className={cla.company__name}>Пароль</p>
            <div>
               <input
                  className={cla.company__title__input}
                  type="text"

               />

            </div>
            <p className={cla.passwort__text}>Подтвердите пароль</p>
            <div>
               <input
                  className={cla.repeat__password}
                  type="text"
               />
            </div>
            <button className={cla.button__register}>Региcтрация</button>
            <div className={cla.user__agreement}>Региcтрируяcь вы cоглашаетеcь c нашими
               <div><a href="#">Уcловиями пользования </a>и <a href="#">Политикой конфиденциальноcти</a></div></div>
         </div>

         <div className={cla.right__block}>
            <div className={cla.right__container}>
               <div className={cla.image}>
                  <img src={tradingNow} className={cla.trading__image} alt="trading" />
               </div>
               <div className={cla.text__content}>
                  <p className={cla.text__under__photo}>Роcти инвеcтиции</p>
                  <p className={cla.main__text__under__photo}>
                     Ваш магазин (точка) будет отображаться на странице доступных магазинов нашего сервиса. По мере совершения покупок, Ваши клиенты будут получать возможность оценивать работу копании. Исходя из полученных данных, будет формироваться рейтинг и рекомендации Вас покупателям
                  </p>
               </div>
            </div>

         </div>

      </div >
   )
}



export default Slider4