import React from 'react';
import './Header.css';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import {BsSearch} from 'react-icons/bs';
import { Link } from 'react-router-dom';


function Header() {
    let show = () =>{
        let drop = document.querySelector('.dropdown');
        if(drop.style.display==='block'){
            drop.style.display='none';
        }
        else{
            drop.style.display='block';
        }
    }
    return (
        <div className="header">
            <div className="hamburger" onClick={()=>show()}>
                <MenuRoundedIcon></MenuRoundedIcon>
            </div>
            <div className="left">
                <Link to="/"><span className="logo">Tawsila</span></Link>
                <span className="opt">Covoiturage</span>
                <span className="opt">Bus</span>
                <span className="opt">Covoiturage du quotidien</span>
            </div>
            <div className="right">
                <div className="search">
                    <span className="ss"><BsSearch className="icon" style={{fontSize: 35, color: '#00AFF5', paddingRight: 6}}></BsSearch></span>
                    <span className="button">Rechercher</span>
                </div>
                <div className="publier">
                    <span className="ss"><AddCircleOutlineRoundedIcon className="icon" style={{fontSize: 35 , color: '#00AFF5', paddingRight: 7 }}></AddCircleOutlineRoundedIcon></span>
                    <span className="button">Publier un trajet</span>
                </div>
                <div className="profile">
                    <div className="bb" onClick={()=>show()}>
                        <span className="ss"><AccountCircleIcon className="icon" style={{fontSize: 65, color: '#EDEDED'}}></AccountCircleIcon></span>
                        <span className="ss"><ExpandMoreRoundedIcon className="icon" style={{fontSize: 45, color: 'grey', fontWeight: 100}}></ExpandMoreRoundedIcon></span>
                    </div>
                    <ul className="dropdown">
                        <li className="list">Connexion<ArrowForwardIosRoundedIcon></ArrowForwardIosRoundedIcon></li>
                        <li className="list">Inscription<ArrowForwardIosRoundedIcon></ArrowForwardIosRoundedIcon></li>
                        <ul className="mobileDrop">
                            <span>Voyagez en...</span>
                            <li className="list">Covoiturage<ArrowForwardIosRoundedIcon></ArrowForwardIosRoundedIcon></li>
                            <li className="list">Bus<ArrowForwardIosRoundedIcon></ArrowForwardIosRoundedIcon></li>
                            <li className="list">Covoiturage du quotidien<ArrowForwardIosRoundedIcon></ArrowForwardIosRoundedIcon></li>
                        </ul>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;
