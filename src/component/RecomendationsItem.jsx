import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import imag from "./1.png";
import {Carousel} from "react-bootstrap";
import MyModal from "./UI/MyModal/MyModal";
import FormForBuy from "./FormForBuy";
import ModalSuccess from "./UI/ModalSuccess/ModalSuccess";
const RecomendationsItem = (props) => {
    const [modal, setModal] = useState(false);
    const [success, setSuccess] = useState(false);
    const router = useNavigate();
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    let cost=props.post.total_cost.toLocaleString('ru-RU')
    let cost_meter=parseInt(props.post.cost_per_square_meter).toLocaleString('ru-RU')
    return (
        <div className="products">
            <MyModal visible={modal} setVisible={setModal} >
                <FormForBuy
                success={success}
                setSuccess={setSuccess}
                setModal={setModal}
                post={props.post}
                />
            </MyModal>
            <ModalSuccess success={success} setSuccess={setSuccess}>
                Заявка успешно принята!
            </ModalSuccess>
            <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
                <Carousel.Item >
                    <div className="products_image">
                        <picture>
                            <img
                                className="d-block w-100"
                                src={imag}
                                alt="First slide"
                            />
                        </picture>
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="products_image">
                        <picture>
                            <img
                                className="d-block w-100"
                                src={imag}
                                alt="Second slide"
                            />
                        </picture>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="products_image">
                        <picture>
                            <img
                                className="d-block w-100"
                                src={imag}
                                alt="Third slide"
                            />
                        </picture>
                    </div>
                </Carousel.Item>
            </Carousel>
            <div className="description">
                <div className="name_flat"><h3>{props.post.rooms_number}-комн. кв., {props.post.total_area} м², {props.post.floor} этаж</h3></div>
                <div className="address"><span>{props.post.address}</span></div>
                <div className="cost_flat"><h3>{cost} рублей</h3></div>
                <div className="address"><span>Цена за кв. м.: {cost_meter} рублей</span></div>
                <div>
                    <button className="jk_info_but" onClick={()=>router(`/recomendation/${props.post.residential_complex}`)}>ЖК {props.post.residential_complex}</button>
                    <button className="jk_info_but" onClick={() => setModal(true)}>Оставить заявку</button>
                </div>
                <div className="all_description">
                    <span>Фото соответствуют, собственник!
                    Новый элитный дом в историческом центре города, Вся транспортная развязка в любом направлении.
                    Площадь квартиры составляет 55 кв. м, большая прихожая, балкон,
                    вид из окна красивый, нет шума. Ремонт новый, современная отделка, </span>
                </div>

            </div>
        </div>

    );
};

export default RecomendationsItem;
