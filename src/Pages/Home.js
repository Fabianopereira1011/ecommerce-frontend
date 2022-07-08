import React from 'react'
import "./Home.css"
//import Product from '../components/Product'
//import { fakeData } from '../fakeData'
import Nuven from './Nuven'

function Home() {
    return (
        <div className="home">
            {/* <div className="home__image">
                <img
                src="Alexa-musica-Banner.jpg"
                alt=""
                width="100%"
                />
            </div> */}
            <div className="home__image">
                <Nuven/>
            </div>

            <div className="titulo">    
                <h1>Under development</h1>
                <h2>by Fabiano</h2> 

                <div className="proj__image">
                    <img
                    src="project-overview.png"
                    alt=""
                    width="80%"
                    />
                </div>
                

            </div>
                

        </div>
    )
}

export default Home
