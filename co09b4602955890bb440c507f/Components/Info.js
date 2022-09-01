import React from 'react';

export default function Info(){
    return (
        <header className="info">
            <img className="info-img" src="../profile-pic.jpg" />
            <h1 className="info-title"> Abdellah elaajjouri </h1>
            <h3 className="info-sous-title"> Frontend Developer </h3>
            <p className="info-text"> https://github.com/abdellahelaajjouri </p>
            <div className="info-buttons">  
                <a href="https://mail.google.com/mail/u/?authuser=abdellah.elaajjouri@gmail.com"> <button className="email"><i className="fa-solid fa-envelope"></i> Email</button> </a>
                <a href="https://www.linkedin.com/in/abdellah-elaajjouri-890583230/"> <button className="linkedin"><i className="fa-brands fa-linkedin"></i> linkedin</button> </a>
            </div>
        </header>
    )
}