import React from 'react'
import Shoes from './shoes.json'
import './../App.css'

export const Products = () => {

    return (
        <div>
            <h1>Products</h1>
            <div className="productContainer">
            {Object.keys(Shoes).map(key=>{
                return(
                    <div key={key}>
                        <h3>{Shoes[key].name}</h3>
                        <br/>
                        <img src={Shoes[key].img} height={400} alt=""/>
                    </div>    
                )
            })}
           </div>
        </div>
    )
}
