import React from 'react';
const CompanyPartners = (props) => {

    return (

        <div className="partners">
            <div className="partner">
                <picture>
                    <img src={props.post.image} />
                </picture>
                <span className="price"></span>
                <h3>{props.post.name}</h3>
            </div>
        </div>

    );
};

export default CompanyPartners;
