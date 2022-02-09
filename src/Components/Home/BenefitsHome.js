import React from 'react';
import './BenefitsHome.css';
import {FaCoins} from 'react-icons/fa';
function BenefitsHome() {
    return (
        <div className="benefitsHome">
            <div className="benefits">
                <div className="1">
                    <span><FaCoins className="coins"></FaCoins></span>
                    <h1>Vos trajets préférés à petits prix</h1>
                    <p>Où que vous alliez, en bus ou en covoiturage, trouvez le trajet idéal parmi notre large choix de destinations à petits prix.</p>
                </div>
                <div className="2">
                    <span><FaCoins className="coins"></FaCoins></span>
                    <h1>Voyagez en toute confiance</h1>
                    <p>Nous prenons le temps qu’il faut pour connaître nos membres et nos compagnies de bus partenaires. Nous vérifions les avis, les profils et les pièces d’identité. Vous savez donc avec qui vous allez voyager pour réserver en toute confiance sur notre plateforme sécurisée.</p>
                </div>
                <div className="3">
                    <span><FaCoins className="coins"></FaCoins></span>
                    <h1>Recherchez, cliquez et réservez !</h1>
                    <p>Réserver un trajet n’a jamais été aussi facile ! Simple d’utilisation et dotée de technologies performantes, notre appli vous permet de réserver en quelques minutes.</p>
                </div> 
            </div>
        </div>
    )
}

export default BenefitsHome;
