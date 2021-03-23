import React from 'react';
import "./Header.css";
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {Link, useHistory} from 'react-router-dom';

function Header({backButton}) {
    // useHistory hook is use to get the history/session
    // to swith back and forth
    // Here it is used to go back when we click the back button
    // and the backButton variable that stores the url we need to
    // is passed as a parameter

    const history = useHistory();
    return (
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize="large" className="header__icon" />
                </IconButton>
            )   :   (
                <IconButton>
                    <PersonIcon fontSize="large" className="header__icon" />
                </IconButton>
            )}
            

            <Link to="/">
                <img
                    className="header__logo"
                    src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo-768x432.png"
                    alt=""
                />
            </Link>
            

            <Link to="/chat">
                <IconButton>
                    <ForumIcon fontSize="large" className="header__icon" />
                </IconButton>
            </Link>
            
        </div>
    );
}

export default Header;
