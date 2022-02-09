import React from 'react';
import insurance from './insurance.png';
import './SwapHome.css';

function SwapHome() {
    return (
        <div className="Swap">
            <div className="swapHome">
                <div className="sectionONe">
                    <img className="image" src={insurance}/>
                    <div className="parg">
                        <h1 className="titleS">Covoiturez au quotidien avec BlaBlaCar Daily !</h1>
                        <p className="parg">Découvrez BlaBlaCar Daily, l’application de covoiturage domicile-travail qui permet d’économiser au quotidien.
                        <br/>Essayez-la en septembre et bénéficiez de 30 € d’essence* offerts pour votre premier covoiturage en tant que conducteur.<br/><br/>Téléchargez l’application et rejoignez la communauté !</p>
                        <button className="buttonS">Découvrir Tawsila Daily</button>
                    </div>
                </div>
                <div className="sectionTwo">
                    <div className="parg rightp">
                        <h1 className="titleS right">Un produit d'dsfsdfassurance auto pensé pour vous</h1>
                        <p className="parg rights">Assurez votre dsfsdfvéhicule avec BlaBlaCar Assurance par L’olivier et économisez en moyenne 263€* !</p>
                        <button className="buttonS rights">Découvrerdsfsdf notre offre</button>
                    </div>
                    <img className="image" src={insurance}/>
                </div>
            </div>
        </div>
    )
}

export default SwapHome;
