import React from 'react';
import './Home.css';
import {CgShapeCircle} from 'react-icons/cg';
import {BsSearch} from 'react-icons/bs';
import DateRangeIcon from '@material-ui/icons/DateRange';
import AirlineSeatReclineNormalRoundedIcon from '@material-ui/icons/AirlineSeatReclineNormalRounded';
import Mostvisted from './Mostvisited';
import SwapHome from './SwapHome';
import BenefitsHome from './BenefitsHome';
import Footer from './Footer';
import { Link,Redirect} from 'react-router-dom';

function Home() {
    return (
        <div className="home">
            <div className="banner">
                <span>Coronavirus et pass sanitaire : retrouvez les dernières infos sur notre <strong>Centre aide</strong></span>
            </div>
            <div className="research">
                <span className="title">Un vaste choix de trajets à petits prix</span>
                <form action="#" className="form">
                    <div className="forms">
                        <div className="depart">
                            <button className="sh departButton">
                                <span className="iconH"><CgShapeCircle></CgShapeCircle></span>
                                <span className="bt">Départ</span>
                            </button>
                        </div>
                        <hr className="line"></hr>
                        <div className="destination">
                            <button className="sh destinationButton" type="text">
                                <span className="iconH"><CgShapeCircle></CgShapeCircle></span>
                                <span className="bt">Destination</span>
                            </button>
                        </div>
                        <hr className="line"></hr>
                        <div className="calendar">
                            <button className="sh calendarButton">
                                <span><DateRangeIcon className="iconH"></DateRangeIcon></span>
                                <span className="bt">Aujourd'hui</span>
                            </button>
                            <button className="sh passagerButton">
                                <span><AirlineSeatReclineNormalRoundedIcon className="iconH"></AirlineSeatReclineNormalRoundedIcon></span>
                                <span className="bt">1 passager</span>
                            </button>
                        </div>
                        <div className="searchH">
                            <button className="searchButton">
                                <span><Link to="/search"><BsSearch className="searchIcon"></BsSearch></Link></span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div>
                <BenefitsHome></BenefitsHome>
            <div>
                <SwapHome></SwapHome>
            </div>
            <div>
                <Mostvisted></Mostvisted>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
        </div>
    )
}

export default Home;
