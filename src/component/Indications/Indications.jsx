import React, {useEffect, useState} from 'react';
import cl from './Indications.module.css'
import api from "../../services/api";
import {useFetching} from "../../hooks/useFetching";
import { Chart } from "react-google-charts";
const Indications = (props) => {
    const [fetchPosts, isPostsLoading, postError] = useFetching(async (data) => {
        const { data: loginData} = await api.auth.getIndications(data.post.number,data.post.address);
        console.log(loginData)
    })
    const close = (e) => {
        e.preventDefault()
        props.setModal(false)
    }
    useEffect(() => {
        fetchPosts(props)
    }, [])


    const  data = [
        [
            "Дни",
            "Вода"
        ],
        [1, 37.8],
        [2, 30.9],
        [3, 25.4],
        [4, 11.7],
        [5, 11.9],
        [6, 8.8],
        [7, 7.6],
        [8, 12.3],
        [9, 16.9],
        [10, 12.8],
        [11, 5.3],
        [12, 6.6],
        [13, 4.8],
        [14, 4.2],
    ];

    const options = {
        chart: {
            title: "Показания счётчика",

        },
    };

    return (
        <div>
            <form className={cl.decor}>
                <div className={cl.form_inner}>
                    <Chart
                        chartType="Line"
                        width="100%"
                        height="100%"
                        data={data}
                        options={options}
                    />
                    <button className={cl.jk_form_but} onClick={close}>Закрыть</button>
                </div>
            </form>
        </div>
    );
};

export default Indications;