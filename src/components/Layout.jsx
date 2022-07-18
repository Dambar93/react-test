import React from "react";
import Container from 'react-bootstrap/Container';
import NavBar from "./RickAndMorty/NavBar";




const Layout = ({children}) => {
    var d = Date(Date.now());
    var a = d.toString()
    return (
        <div className="container">

            <header>
                <NavBar/>
            </header>
            <body>
                {children}
            </body>

            <footer style={{textAlign: "center"}}>
                <p><b>All rights reserved</b> </p> 
                 {a}
            </footer>
        </div>
    )
}

export default Layout;