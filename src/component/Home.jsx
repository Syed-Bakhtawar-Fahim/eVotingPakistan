import React from "react";
import Common from "./Common";
import './Home.css'

function Home() {
    return (
        <React.Fragment>
            <Common
                web = 'https://firebasestorage.googleapis.com/v0/b/reactaideveloper.appspot.com/o/home2.svg?alt=media&token=70058c35-6d05-4937-bb23-aefd86178caa'
                heading = 'eVoting Pakistan'
                title = 'Vote for future'
                para = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia'       
                btnName = 'Get Started' 
                visit = 'about'      
            />
        </React.Fragment>
    )
}
export default Home