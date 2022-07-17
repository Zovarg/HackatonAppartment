import React, {useEffect, useState} from 'react';
import cl from './Indications.module.css'
import api from "../../services/api";
import {useFetching} from "../../hooks/useFetching";
import { Chart } from "react-google-charts";
const Indications = (props) => {
    const [posts, setPosts] = useState([...props.post]);

    const close = (e) => {
        e.preventDefault()
        props.setModal(false)
    }



    const  data = [
        [
            "Дата",
            "Показатель"
        ],
            ...props.post.map((pos, index) =>
                [pos.date,Number(pos.value)]
                ),

    ];

    const options = {
        chart: {
            title: "Показания счётчика",

        },
    };

    return (
        <div>

                    <Chart
                        chartType="Line"
                        width="1600px"
                        height="500px"
                        data={data}
                        options={options}
                    />
                    <button className={cl.jk_form_but} onClick={close}>Загрузить показания</button>
                    <button className={cl.jk_form_but} onClick={close}>Закрыть</button>


        </div>
    );
};

export default Indications;