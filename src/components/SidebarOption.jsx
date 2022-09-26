import React from 'react';
import './SidebarOption.css'

const Sidebaroption = ({ active, text, icon }) => {
    return (
        <div className={`sidebar__option ${active && 'sidebar__option--active'}`}>
            {icon}
            <h2>{text}</h2>
        </div>
    );
}

export default Sidebaroption;
