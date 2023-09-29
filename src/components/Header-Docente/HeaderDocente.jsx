import React, { useEffect, useState } from 'react';
import Logo from '../icons/logo.png'
import './HeaderDocente.css'
import {AiOutlineHome} from 'react-icons/ai'
export default function Header() {

    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const date = new Date();
        setCurrentDate(date.toLocaleDateString());
    }, []);


    return (
        <div className="containerHeader">
            <div className='data-docente'>
                <img className='logo' src={Logo} ></img>
                <h1 className='h1-docente'>Área do Docente</h1>
                <button className='home-docente' type='submit' a="" ><AiOutlineHome /></button>
                {/* <p className='clock'>{currentDate}</p> */}
            </div>

           

        </div>
    )
}