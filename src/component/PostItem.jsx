import React, {useState} from 'react';
import {Carousel} from "react-bootstrap";
import imag from './1.jpg'
import {useNavigate} from "react-router-dom";
import MyModal from "./UI/MyModal/MyModal";
import Indications from "./Indications/Indications";
const PostItem = (props) => {
    const [modal, setModal] = useState(false);
    const [index, setIndex] = useState(0);
    const router = useNavigate();
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (

        <div className="products">
            <MyModal visible={modal} setVisible={setModal}>
                <Indications
                    setModal={setModal}
                    post={props.post}
                />
            </MyModal>
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
                <div className="cost_flat"><h3>Тип апартаментов: {props.post.apartment_type}</h3></div>
                <div className="status_flat"><span>Статус: {props.post.status}</span></div>
                <div>
                    <button className="jk_info_but" onClick={()=>router(`/recomendation/${props.post.residential_complex}`)}>ЖК {props.post.residential_complex}</button>
                    <button className="jk_info_but" onClick={() => setModal(true)}>Показания</button>
                </div>
            </div>
        </div>
    );
};

export default PostItem;
