import React from 'react';
import { FaFacebook, FaFontAwesomeFlag, FaGamepad, FaHome, FaSistrix, FaUsers, FaVideo, FaFacebookMessenger, FaBell, FaCaretDown, FaUserCircle, } from "react-icons/fa";
import { useStateValue } from './StateProvider'


const Header = () => {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="Header">
            <div className="header__left">
            <a className="hleftlogo" href="Header.js"><FaFacebook className="hlogo"/></a> 
            <div className="header__input">
            <FaSistrix />
            <input placeholder="Search Facebook" type="text" />
          </div>
            </div>
            <div className="header__middle">
          <div className="header__option header__option--active">
            <FaHome fontSize="25px" />
          </div>
          <div className="header__option">
            <FaFontAwesomeFlag fontSize="25px" />
          </div>
          <div className="header__option">
            <FaVideo fontSize="25px" />
          </div>
          <div className="header__option">
            <FaUsers fontSize="25px" />
          </div>
          <div className="header__option">
            <FaGamepad fontSize="25px" />
          </div>
        </div>
            <div className="header__right">
                <a className="header__option" ><FaUserCircle fontSize="25px"/></a>
                <a className="header__option" ><FaBell fontSize="25px"/></a>
                <a className="header__option" ><FaFacebookMessenger fontSize="25px"/></a>
                <a className="header__option" ><FaCaretDown fontSize="25px"/></a>
            </div>
        </div>
    )
}

export default Header;