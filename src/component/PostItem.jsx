import React, {useState} from 'react';
import {Carousel} from "react-bootstrap";
import imag from './1.png'
import {useNavigate} from "react-router-dom";
import Indications from "./Indications/Indications";
import {useFetching} from "../hooks/useFetching";
import api from "../services/api";
import ModalStats from "./UI/ModalStats/ModalStats";
const PostItem = (props) => {
    const [dat, setDat] = useState([]);
    const [fetchPosts, isPostsLoading, postError] = useFetching(async (inf) => {
        const { data: loginData} = await api.auth.getIndications({'address':`${inf.post.address}`,'number':`${inf.post.number}`});
        setDat([...dat, ...loginData])


    })
    const [modal, setModal] = useState(false);
    const [index, setIndex] = useState(0);
    const router = useNavigate();
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    const open = (e) => {
        e.preventDefault()
        setModal(true)
        fetchPosts(props)
    }
    return (

        <div className="products">
            <ModalStats visible={modal} setVisible={setModal}>
                <Indications
                    setModal={setModal}
                    post={dat}
                />
            </ModalStats>
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
                    <button className="jk_info_but" onClick={open}>Показания</button>
                </div>
            </div>
        </div>
    );
};

export default PostItem;
