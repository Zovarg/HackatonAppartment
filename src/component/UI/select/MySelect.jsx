import React from 'react';
import {Container} from "react-bootstrap";
import cl from './MySelect.module.css'
const MySelect = ({options, defaultValue, value, onChange}) => {
    return (

            <div>
                <select
                    className={cl.select_box}
                    value={value}
                    onChange={event=>onChange(event.target.value)}
                >
                    <option value="">{defaultValue}</option>
                    {options.map(option=>
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                    )}
                </select>
            </div>

    );
};

export default MySelect;