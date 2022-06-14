import React from "react";
import '../Portfolio.css'
 
const TabContent = ({id, activeTab, children}) => {
 return (
   activeTab === id ? <div className="content">{ children }</div>: null
   )
};
 
export default TabContent;