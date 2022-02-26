import React from "react";
import Common from "./Common";

function About()
{
    return(
        <React.Fragment>
             <Common
                web = 'https://firebasestorage.googleapis.com/v0/b/reactaideveloper.appspot.com/o/about.svg?alt=media&token=0f8c7586-35f6-457d-9605-562ac320e3c1'
                heading = 'eVoting Pakistan'
                title = 'How it Works?'
                para = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia'       
                btnName = 'Start Voting'
                visit = 'votingPage'       
            />
        </React.Fragment>
    )
}

export default About