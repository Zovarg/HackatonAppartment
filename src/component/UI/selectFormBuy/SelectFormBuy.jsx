import React from 'react';
import cl from './SelectFormBuy.module.css'
const SelectFormBuy = ({options, defaultValue, value, onChange}) => {
    return (

            <div>
                <select
                    className={cl.select_box}
                    value={value}
                    onChange={event=>onChange(event.target.value)}
                >
                    {options.map(option=>
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                    )}
                </select>
            </div>

    );
};

export default SelectFormBuy;