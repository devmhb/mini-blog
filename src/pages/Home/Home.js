import React from 'react'
import "./Home.css"
import Card from "../../component/Card"
import datas from "../../data"

const Home = () => {






    return (
        <>
        <h1 className="cHeading">Dynamic Routing</h1>
        <div className="cards-container">
         {
              datas.map((data,i) => <Card key={i} id={data.id} title={data.title} img={data.img} desc={data.desc} />)
          }
        </div>
        </>
    )
}

export default Home
