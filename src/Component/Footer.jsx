import React from 'react';
import styled from 'styled-components';

const DevLinks = styled.p`
    position: absolute;
    left: 20px;
    bottom: 10px;
    a {
        background-color: transparent;
    }
    .fa {
        margin: 0 5px;
        font-size: 22px;
    }
    .fa-github {
        color: #000;
    }
    .fa-github:hover {
        color: rgb(51, 42, 218);
    }
    .fa-facebook-official {
        color: #3B579D;
    }
    .fa-facebook-official:hover {
        color: rgb(20, 239, 255);
    }
    .fa-linkedin-square {
        color: #007BB6;
        font-size: 23px;
    }
    > .fa-linkedin-square:hover {
        color: rgb(16, 57, 145);
    }
`;

const DevAuthor = styled.p`
    position: absolute;
    right: 20px;
    bottom: 10px;
    color: white;
    > .fa-paw {
        color: rgb(111, 0, 255);
    }
`;

const MobileTextBreaker = styled.span`
    @media (max-width: 600px) {
        display: block;
    }
`;

const Footer = () => {
    return(
        <>
            <DevLinks>
                <a href="https://github.com/praveenkumar62"><i className="fa fa-github"></i></a>
                <a href="http://facebook.com/praveen.cruzerz"><i className="fa fa-facebook-official"></i></a>
                <a href="https://www.linkedin.com/in/praveen-kumar-309334159"><i className="fa fa-linkedin-square"></i></a>
            </DevLinks>
            <DevAuthor>
                <MobileTextBreaker>Developed by </MobileTextBreaker>
                <span>Praveen Cruzerz </span> <i className="fa fa-paw"></i>
            </DevAuthor>
        </>
    )
}

export default Footer;