import React from "react";
import art from '../art/romanticism/francisco_goya/saturn_devouring_his_son.jpeg';

function Home(){
    return (
        <div>
            <h1> Home Page</h1>
            <img src={art}/>
        </div>
    );
}

export default Home;

