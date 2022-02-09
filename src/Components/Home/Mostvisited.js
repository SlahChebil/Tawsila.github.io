import React from 'react';
import './Mostvisited.css';
import {BsArrowRight} from 'react-icons/bs';
import {IoIosArrowForward} from 'react-icons/io';


function Mostvisited() {
    return (
        <div className="most">
            <div className="mostVisited">
                <div className="titleMost">
                    <h2 className="heading">Le top des destinations en bus</h2>
                </div>
                <div className="lis">
                    <ul className="unlist">
                        <li className="dest">
                            <div className="text">
                                <span>Bourdeux</span>
                                <BsArrowRight className="arrow"></BsArrowRight>
                                <span>Toulouse</span>
                            </div>
                            <span>
                                <IoIosArrowForward className="arrowSmall"></IoIosArrowForward>
                            </span>
                        </li>
                        <li className="dest">
                            <div className="text">
                                <span>Nantes</span>
                                <BsArrowRight className="arrow"></BsArrowRight>
                                <span>Rennes</span>
                            </div>
                            <span>
                                <IoIosArrowForward className="arrowSmall"></IoIosArrowForward>
                            </span>
                        </li>
                        <li className="dest">
                            <div className="text">
                                <span>Paris</span>
                                <BsArrowRight className="arrow"></BsArrowRight>
                                <span>Lyon</span>
                            </div>
                            <span>
                                <IoIosArrowForward className="arrowSmall"></IoIosArrowForward>
                            </span>
                        </li>
                    </ul>
                </div>     
                <div className="showMore">
                    <span>En voir plus</span>
                </div>  
            </div>
        </div>
    )
}

export default Mostvisited
