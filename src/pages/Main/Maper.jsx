import React, {useEffect, useState} from 'react';
import {YMaps, Map, Placemark} from "react-yandex-maps";
import cl from './Maper.module.css'
import {useFetching} from "../../hooks/useFetching";
import api from "../../services/api";
const Maper = () => {

    const krasnodarCords = [45.0360, 38.9746]
    const mapData = {
        center: krasnodarCords,
        zoom: 12,

    };
    const [posts, setPosts] = useState([]);
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const { data: loginData } = await api.auth.getResidential();
        setPosts([...posts, ...loginData])
    })

    useEffect(() => {
        fetchPosts()
    }, [])
    let residentialComplexes = posts

    return (
        <div className={cl.map_background}>
            <YMaps>
                <Map className={cl.map_background} defaultState={mapData}>
                    {residentialComplexes.map(el => <Placemark geometry={[el.cords.lat, el.cords.lon]} properties={{balloonContent: `<div class='${cl.map_container}'><strong>ЖК ${el.name}</strong> <img class='${cl.map_image}' src='${el.image}'/></div>`}} modules= {
                        ['geoObject.addon.balloon', 'geoObject.addon.hint']
                    }/>)}
                </Map>
            </YMaps>
        </div>

    );
};

export default Maper;