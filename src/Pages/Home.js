import React from 'react'
import "./Home.css"
import Product from '../components/Product'
import { fakeData } from '../fakeData'
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
                <h1>E-commerce sendo desenvolvido</h1>
                <h2>by Fabiano</h2> 
            </div>
                    <div className="home-prod-list">
                                {fakeData.map(prod=> (
                                    
                                            <Product 
                                            id={prod.id}
                                            title={prod.title}
                                            image={prod.image}
                                            rating={prod.rating}
                                            price={prod.price}
                                            />
                                    
                                ))}
                    </div> 

        </div>
    )
}

export default Home
