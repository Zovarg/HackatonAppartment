import React, {useEffect, useMemo, useState} from 'react';
import {useFetching} from "../../hooks/useFetching";
import Loader from "../../component/UI/Loader/Loader";
import MyInput from "../../component/UI/input/MyInput";
import Navbar from "../../component/UI/Navbar/Navbar";
import CompanyList from "../../component/CompanyList";
import api from "../../services/api";
import {useParams} from "react-router-dom";

    function Company() {
        const [posts, setPosts] = useState([])
        const params=useParams() //Получаем текущий айдишник для запроса
        const [fetchPosts, isPostsLoading, postError] = useFetching(async (id) => {
            const { data: loginData } = await api.auth.getResidential();
            const jk=loginData.filter(post=>post.name.toLowerCase().includes(id.toLowerCase()))
            setPosts([...posts, ...jk])
        })

        useEffect(() => {
            fetchPosts(params.id)
        }, [])



        return (
            <div>
                <div className="App">

                    {postError &&
                        <h1>Произошла ошибка ${postError}</h1>
                    }
                    <CompanyList posts={posts} title=""/>
                    {isPostsLoading &&
                        <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
                    }
                </div>
            </div>

);
};

export default Company;