import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import cl from './FormForBuy.module.css'
import MySelect from "./UI/select/MySelect";
import SelectFormBuy from "./UI/selectFormBuy/SelectFormBuy";
import api from "../services/api";
import {useFetching} from "../hooks/useFetching";
import {useNavigate} from "react-router-dom";
const FormForBuy = (props) => {
    const [info, setInfo] = useState({residential_complex: `${props.post.residential_complex}`,apartment_number: `${props.post.number}`, phone: '', contacts: 'Позвонить',datetime_to_feedback:''})
    const typeContacts =(sort)=>{
        setInfo({...info, contacts: sort})
    }
    const [fetchPosts, isPostsLoading, postError] = useFetching(async (data) => {
        const { data: idJK } = await api.auth.getIdJK(data.residential_complex);
        data.residential_complex=idJK.id;
        const { data: loginData } = await api.auth.formBuy(data);
        props.setModal(false)
        props.setSuccess(true)
    })
    const nav = useNavigate();
    const addContact = (e) => {
        e.preventDefault()
        fetchPosts(info)
        setInfo({...info,phone: '', contacts: 'Позвонить',datetime_to_feedback:''})

    }

    return (
        <div>
            <form className={cl.decor}>
                <div className={cl.form_inner}>
                    <div className={cl.textFrom}>Квартира:</div>
                    <MyInput
                        readOnly
                        value={info.residential_complex+` — `+info.apartment_number}
                        type="text"
                        placeholder="Квартира"
                    />
                    <div className={cl.textFrom}>Телефон:</div>
                    <MyInput
                        value={info.phone}
                        onChange={e => setInfo({...info, phone: e.target.value})}
                        type="text"
                        placeholder="Телефон для связи"
                    />
                    <div className={cl.textFrom}>Как с вами связаться?:</div>
                    <SelectFormBuy
                        value={info.contacts}
                        onChange={typeContacts}
                        options={[
                            {value:'Позвонить', name:'Позвонить'},
                            {value:'WhatsApp', name:'WhatsApp'},
                        ]}
                    />
                    <div className={cl.textFrom}>Когда с вами связаться?:</div>
                    <input
                        value={info.datetime_to_feedback}
                        onChange={e => setInfo({...info, datetime_to_feedback: e.target.value})}
                        type="datetime-local"
                    />
                    <button className={cl.jk_form_but} onClick={addContact}>Подтвердить заявку</button>
                </div>
            </form>
        </div>
    );
};

export default FormForBuy;