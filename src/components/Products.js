import React from 'react'
import Shoes from './shoes.json'
import './../App.css'
import {Link} from 'react-router-dom'

export const Products = () => {

    return (
        <div>
            <h1>Products</h1>
            <div className="productContainer">
            {Object.keys(Shoes).map(key=>{
                return(
                    <Link key={key} className="link" to={`products/${key}`}>
                        <h3>{Shoes[key].name}</h3>
                        <br/>
                        <img src={Shoes[key].img} height={100} alt=""/>
                    </Link>    
                )
            })}
           </div>
        </div>
    )
}
