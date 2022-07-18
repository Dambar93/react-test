import React from "react";
import { Button } from "react-bootstrap";


const Home = () => {
    return (
        <div>
            <div style={{position: "relative"}}>
                <img src="_PND6100.jpg" alt="" className="img-fluid"/>
                <Button variant="secondary" style={{position: "absolute", top: "50%", left: "40%", right: "40%"}}><a href="/list" style={{color: "white"}}>Let's go for adventure?</a></Button>
            </div>
        </div>


            

        
    )
        }

export default Home;