import React , { useState } from 'react';
import './ImageBlock.css'
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function Image() {
    const [color , setColor] = useState(true);
    const changeClick = () => {
        setColor(!color)
            
    }
    const randomColor = color ? "black-heart" : "red-heart";
    return(
        <div className='img-block'>
            <FontAwesomeIcon icon={faHeart} className={randomColor} onClick = {changeClick}/>
            <img className="img" onDoubleClick = {changeClick} src="https://images.unsplash.com/photo-1599412181680-9bf26745b358?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"/>
        </div>
    )
}

export default Image
