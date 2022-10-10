import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quizes = () => {
    const quizes = useLoaderData().data
    const {name,total}=quizes
    return (
        <div>
            this is quiz page {quizes.total}
            <h2>{name} quiz part</h2>
            <h3>total quiz :{total}</h3>
        </div>
    );
};

export default Quizes;