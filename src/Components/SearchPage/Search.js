import React from 'react';
import {BsSearch} from 'react-icons/bs';
import {BsArrowRight} from 'react-icons/bs';
import './Search.css';
import {CgShapeCircle} from 'react-icons/cg';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';



function Search() {
    return (
        <div className="search">
            <div className="searching">
                <div className="inputs">
                    <span><BsSearch></BsSearch></span>
                    <div className="texts">
                        <div className="fouqq">
                            <h1 className="Mnin">Paris, centre-ville</h1>
                            <BsArrowRight className="shh"/>
                            <h1 className="Mnin">Toulouse,centre-ville</h1>
                        </div>
                        <span>Demain,1 passager</span>
                    </div>
                </div>
            </div>
            <div className="moinsCher">
                <div className="card">
                    <div className="details">
                        <div className="time">
                            <div className="times">
                                <span className="start">17:00</span>
                                <span className="duration">7h20</span>
                                <span className="finsih">00:20</span>
                            </div>
                            <div className="startDestination">
                                <span className="start">Paris</span>
                                <span className="destination">Toulouse</span>
                            </div>
                        </div>
                        <span className="price">44.54$</span>
                    </div>
                    <div className="account">
                        <AccountCircleIcon className="profile"></AccountCircleIcon>
                        <span>Hakim</span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Search;
