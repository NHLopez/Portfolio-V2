import React from "react";
import '../Portfolio.css'

const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {

    const handleClick = () => {
        setActiveTab(id);
    };
    return (
        <li onClick={handleClick} className={'tabs__nav--list-items ' + (activeTab === id ? "active" : "")}>{title}</li>
    );
};
export default TabNavItem;