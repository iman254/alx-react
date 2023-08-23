import React from "react";
import './Notifications.css';
import { getLatestNotification } from "../utils/utils";
import closeIcon from "../assets/close-icon.png";


export const Notifications = () => {
    return (
        
        <div className="Notifications">
            <button style={{display:"inline-block",  color: "#3a3a3a", fontWeight: "bold", background: "none", border: "none", fontSize: "15px", position: "absolute", right: "15px", top: "15px", cursor: "pointer" }} type='button' aria-label='Close'
            onClick={console.log("Close button has been clicked")} 
            >
                <img src= {closeIcon} width="15px" alt="close-icon"></img>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority='default'>New course available</li>
                <li data-priority='urgent'>New resume available</li>
                <li data-priority='urgent'>
                    <div dangerouslySetInnerHTML={{ __html: `${getLatestNotification()}` }}></div>
                </li>

            </ul>
            
        </div>
    );

}

export default Notifications;