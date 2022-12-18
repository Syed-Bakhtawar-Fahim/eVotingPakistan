import React from "react";
import './Problems.css'
import './Home.css'
import AllProblems from './AllProblems'
import Change from "./Change";

function Problems() {
    return (

        <React.Fragment>
            
             <AllProblems
                proheading= 'Why we need your Vote?'
                protext="Pakistan is a Third World developing country so we have to take step towards technology. Government can never know which problem should be resolved first. Through this app the government can know the priorities of the citizens and the problem that needs to be solved first. This app can help in a lot of ways in so many reasons to improve the surrounding and environment real quick. Will contain a daily news report about their respective districts like who won the elections or what's new in country etc."
                proBtn='Start Voting'
                provisit='votingPage'
                web='https://firebasestorage.googleapis.com/v0/b/reactaideveloper.appspot.com/o/problem-removebg-preview.png?alt=media&token=5716e6d3-f855-40e0-a86b-aa91982e018d'
            />

            <Change
                proheading='Street Crime'
                protext="In 2020, 525 motorbikes were stanched and 7,414 were stolen, showing a growth in the criminal trend at a staggering pace. Similarly, 5,982 cell phones were snatched in different parts of the city during the first three months of 2021, breaking the record of the last year’s first quarter when 5,105 people lost their mobile phones to armed robbers"
                proBtn='Vote On Street Crime'
                provisit='votingPage'
                web='https://firebasestorage.googleapis.com/v0/b/reactaideveloper.appspot.com/o/cirme.png?alt=media&token=d93a9d0b-565b-4405-9e51-776535bbc482'
            />
            <AllProblems
                proheading='Water Crisis'
                protext="Pakistan’s big — arguably, biggest — problem is water scarcity. The country faces acute water scarcity by 2025, and will be the most water-stressed country in South Asia within two decades. Almost 30 million Pakistanis have no access to clean water. But you may not know this because we have yet to articulate a compelling narrative about the water crisis."
                proBtn='Vote On Water Crisis'
                provisit='votingPage'
                web='https://firebasestorage.googleapis.com/v0/b/reactaideveloper.appspot.com/o/pkwater.png?alt=media&token=f34456a2-e17e-4a49-a8b9-5736d906fa61'
            />
            <Change
                proheading='Road Traffic Accident'
                protext="According to the latest WHO data published in 2018 Road Traffic Accidents Deaths in Pakistan reached 30,046 or 2.42% of total deaths. The age adjusted Death Rate is 17.12 per 100,000 of population ranks Pakistan #95 in the world."
                proBtn='Vote On Traffic Accident'
                provisit='votingPage'
                web='https://firebasestorage.googleapis.com/v0/b/reactaideveloper.appspot.com/o/traffic2-removebg-preview.png?alt=media&token=cb8f6ec4-3484-4af6-ac22-377b6db4d0ae'
            />
            <AllProblems
                proheading='Broken Road'
                protext="Broken roads September 18, 2020 Karachi is the largest city of the country and has the worst infrastructure. Broken roads across the city have made it extremely difficult for the people to travel. Overflowing sewers, pothole-ridden streets, etc., show the failure and incompetence of the relevant authorities. The material used in roads’ repair work is usually of low-quality. After a month or two, commuters start facing the same problems. It has been decades since we last had a comfortable and smooth ride on the city’s streets. The recent monsoon season also contributed greatly to the destruction of roads. It is a fundamental right of citizens to have a better road network. The current road conditions are the main reason for vehicles’ damage and an increase in road accidents. The authorities concerned must look into the matter and take necessary actions to overcome the problem."
                proBtn='Vote On Broken Road'
                provisit='votingPage'
                web='./Images/road.svg'
            /> 
        </React.Fragment>
    )
}

export default Problems