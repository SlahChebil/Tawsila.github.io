import React from 'react';
import {FaFacebook} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footers">
                <section className="link">
                    <ul className="links">
                        <li>Comment ca marche</li>
                        <li>Assurance et covoiturage</li>
                        <li>Covoiturage du quotidien</li>
                        <li>Voyagez en bus avec BlaBlaCar</li>
                        <li>Tous les trajets desservis en bus</li>
                        <li>Qui sommes-nous ?</li>
                        <li>Centre d'aide</li>
                        <li>Transparence des platformes</li>
                        <li>Information légale</li>
                        <li>Presse</li>
                        <li>Nous recrutent</li>
                        <li>Paramétre</li>
                    </ul>
                </section>
                <section >
                    <ul className="social">
                        <li><FaFacebook></FaFacebook></li>
                        <li><FaInstagram></FaInstagram></li>
                        <li><FaTwitter></FaTwitter></li>
                        <li><FaYoutube></FaYoutube></li>
                    </ul>
                </section>
            </div>
            

            
        </div>
    )
}

export default Footer;
