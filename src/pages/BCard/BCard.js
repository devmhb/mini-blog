import React from 'react'
import './BCard.css'
import { useParams } from 'react-router-dom'
import datas from '../../data'


const BCard = () => {
    let {id} = useParams();
    const sData = datas.find((item) => item.id == id)
   
    return (
        <div className="Bcards-container">
            <div className="BCard">
            <h1>Id: {sData.id}</h1>
            <h1>Title: {sData.title}</h1>
            <img src={sData.img} alt="" />
            <p> <b>Des:</b> {sData.desc}</p>
            </div>
        </div>
    )
}

export default BCard
