import React from "react";
import '../styles/Developer.css';

const DeveloperCard = ({name, role, image}) => {
    return (
        <div className="developer-card">
            <img src={image} alt={`{name}`} className="dev-img"/>
            <h3>{name}</h3>
            <p>{role}</p>
        </div>
    );
}

export default DeveloperCard;
