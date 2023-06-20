import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirtData = useLoaderData();
    console.log(tshirtData)
    return (
        <div>
            <h1>this is Home page: {tshirtData.length}</h1>
        </div>
    );
};

export default Home;