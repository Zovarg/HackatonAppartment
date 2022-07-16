import React from 'react';
import {Container} from "react-bootstrap";
import CompanyItem from "./CompanyItem";
import classes from "./CompanyList.module.css"

const CompanyList = ({posts}) => {

    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>

            </h1>
        )
    }

    return (

        <div className="box">
            {posts.map((post, index) =>
                <CompanyItem number={index + 1} post={post}/>
            )}
        </div>
    );
};

export default CompanyList;
