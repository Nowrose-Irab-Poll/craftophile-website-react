import { faFacebook, faInstagram, faPinterest, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {

    return (
        <div className="bg-yellow-500 mt-14 p-24  text-white">
            <h2 className="text-2xl">© Craftophile</h2>
            <div  className="text-3xl">
                <a href="https://www.facebook.com/saymasrabonty" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className="m-8" icon={faFacebook}></FontAwesomeIcon>
                </a>
                <a href="https://www.youtube.com/c/Craftophile" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className="m-8" icon={faYoutube}></FontAwesomeIcon>
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/_craftophile_/">
                    <FontAwesomeIcon className="m-8" icon={faInstagram}></FontAwesomeIcon>
                </a>
                <a href="https://www.pinterest.com/craftophile/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className="m-8" icon={faPinterest}></FontAwesomeIcon>
                </a>

            </div>
        </div>
    );
};

export default Footer;