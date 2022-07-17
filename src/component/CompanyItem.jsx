import React, {useEffect, useState} from 'react';
import classes from "./CompanyList.module.css"
import {Carousel,Container} from "react-bootstrap";
import imag from "./1.png";
import {useNavigate, useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import api from "../services/api";
import CompanyPartners from "./CompanyPartners";
const CompanyItem = (props) => {
    const [posts, setPosts] = useState([])
    const params=useParams() //Получаем текущий айдишник для запроса
    const [fetchPosts, isPostsLoading, postError] = useFetching(async (id) => {
        const { data: loginData } = await api.auth.getPartners(id);
        console.log(loginData)
        setPosts([...posts, ...loginData])
    })

    useEffect(() => {
        fetchPosts(params.id)
    }, [])

    return (
        <div className={classes.jk_background}>
            <div className={classes.item}>
                <img
                    src={props.post.image}
                    alt="Picture"
                />
                <h3  className={classes.title_name}>ЖК {props.post.name}</h3>
            </div>

            <div className={classes.about}>
                <div className={classes.about__head}>Один из лучших ЖК!</div>
                <div className={classes.about__main_text}>
                    {props.post.description}
                </div>
            </div>
            <h3  className={classes.title_partner}>Услуги</h3>
            <Container className="box">
                <div className="list">
                    {posts.map((post, index) =>
                        <CompanyPartners number={index + 1} post={post} />
                    )}
                </div>
            </Container>
        </div>


    );
};

export default CompanyItem;
