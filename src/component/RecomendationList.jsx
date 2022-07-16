import React from 'react';
import {Container} from "react-bootstrap";
import RecomendationsItem from "./RecomendationsItem";

const RecomendationList = ({posts}) => {

    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
            </h1>
        )
    }

    return (

            <Container className="box">
                    {posts.map((post, index) =>
                        <RecomendationsItem number={index + 1} post={post} />
                    )}
            </Container>
    );
};

export default RecomendationList;
