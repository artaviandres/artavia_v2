import React from 'react';
import FaGithub from 'react-icons/lib/fa/github';
import FaFacebook from 'react-icons/lib/fa/facebook-square';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaTwitter from 'react-icons/lib/fa/twitter-square';

export default class Social extends React.Component {
    render() {
        return(
            <div className="social__container">
                <center>
                    <a href="https://github.com/artaviandres" target="_blank" className="margin" rel="noopener noreferrer">
                        <FaGithub size={28} />
                    </a>
                    <a href="https://facebook.com/iAndrezx" target="_blank" className="margin" rel="noopener noreferrer">
                        <FaFacebook size={27} />
                    </a>
                    <a href="https://instagram.com/artaviandres" target="_blank" className="margin" rel="noopener noreferrer">
                        <FaInstagram size={27} />
                    </a>
                    <a href="https://twitter.com/artvavia" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={27} />
                    </a>
                </center>
                <style jsx>{`
                    a {
                        cursor: pointer;
                        text-decoration: none;
                        color: black;
                    }
                    .social__container {
                        background-color: #F8F8F8;
                        position: absolute;
                        width: 55%;
                        bottom: 0;
                        height: 50px;
                        line-height: 50px;
                    }
                    .margin {
                        margin-right: 10%;
                    }
                `}</style>
            </div>
        );
    }
}