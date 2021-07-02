import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'

const Card = (props) => {
   
    return (
        
        <div className="card-container">
        <Link to={`/blog/${props.id}`}>
         <h1 className="title">Title : {props.title}</h1>
         <img src={props.img} alt=""  className="img"/>
         <div className="btn-container">
             <button>CLick for more!</button>
         </div>
        </Link>
        </div>
        
    )
}

export default Card
