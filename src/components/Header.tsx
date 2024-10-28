
import React from 'react';
import logo from '../img/logo.png'; 

const Header: React.FC = () => {
    return (
        <div className="header">
            <img src={logo} alt="Plane Icon" className="plane-icon" />
            <h1>Поиск авиабилетов</h1>
        </div>
    );
};

export default Header;
