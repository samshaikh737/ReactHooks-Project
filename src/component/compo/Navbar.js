import React from 'react';

function Navbar({filterFunction , allCategory}) {

    return (
        <nav className="navbar">
            <div className="btn-group">
                <button className="btn-group__item" onClick={ ()=> filterFunction("All")}>All</button>
                {
                    allCategory.map((d)=>{
                        return <button className="btn-group__item" onClick={ ()=> filterFunction(d)}>{d}</button>
                    })
                }
            </div>
        </nav>
    )
}

export default Navbar;
