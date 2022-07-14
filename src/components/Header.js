import React, {useEffect, useState} from 'react';
import { Link, useLocation } from "react-router-dom";
import '../index.css';

const Header = () => {
    const [ activeTab, setActiveTab ] = useState("user");

    const location = useLocation();
    useEffect(() => {
        if(location.pathname ==="/users"){
            setActiveTab("Home")
        } else if(location.pathname ==="/"){
            setActiveTab("Pots")
        }else if(location.pathname ==="/photos"){
            setActiveTab("Photos")
        }

    },[location])

  return (
    <div className='header'>
        <p className='logo'>Prueba</p>
        <div className='header-right'>
            <Link to="/users">
                <p className={`${activeTab === "Home" ? "active" : ""}`} 
                    onClick={() => setActiveTab("Home")}
                >user</p>
            </Link>

            <Link to="/">
                <p className={`${activeTab === "Pots" ? "active" : ""}`} 
                    onClick={() => setActiveTab("Pots")}
                >Post</p>
            </Link>

            <Link to="/photos">
                <p className={`${activeTab === "Photos" ? "active" : ""}`} 
                    onClick={() => setActiveTab("photos")}
                >photos</p>
            </Link>

        </div>
    </div>
  )
}

export default Header