import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from "@material-ui/core/IconButton"
import { Link, useHistory } from 'react-router-dom';
import { ArrowBackIos } from '@material-ui/icons';

function Header({backButton}) {

    const history=useHistory();

    return (
        <div className="header">
            {backButton?(
                <IconButton onClick={()=>history.replace(backButton)}>
                    <ArrowBackIos fontSize="large" className="header__icon" />
                </IconButton>
            ):
            (
                <IconButton>
                    <PersonIcon className="header__icon" fontSize="large"/>
                </IconButton>

            )}
            
            <Link to="/">
                <img 
                className="header__logo"
                src="https://www.1min30.com/logo/wp-content/uploads/2018/04/logo-Tinder-500x281.png" alt="tinderlogo"  />
            </Link>
            <Link to="/chats">
                <IconButton>
                    <ForumIcon className="header__icon" fontSize="large"/>
                </IconButton>
            </Link>
        </div>
    )
}

export default Header
