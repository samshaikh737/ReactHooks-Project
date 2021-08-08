import React, { useState } from 'react';

//component
import Menu from "../db/databaseApi"
import Card from './Card';
import Navbar from "./Navbar";

//css
import "../css/style.css"

function Resturant() {
    const [menuData, setmenuData] = useState(Menu);
    
    const uniqueList = [...new Set(Menu.map((d)=> d.category))];
    
    const filterFunction = (category)=>{
        const updateData = Menu.filter((d)=>{
            return d.category == category
        })
        if (category == "All") return setmenuData(Menu)
        setmenuData(updateData)
    }

    return (
        <>

        <Navbar filterFunction={filterFunction} allCategory={uniqueList} />        

        <section className="main-card--cointainer" style={{padding:"15px"}}>
            {
                menuData.map((d) => {
                    return <Card name={d.name} category={d.category} image={d.image} id={d.id} price={d.price} desc={d.description} key={d.id} />
                })
            }
        </section>
        </>
    )
}

export default Resturant;
