import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import logo from '../../images/craftophile-logo.jfif'

const Header = () => {

    const activeStyle = {
        // alignItems: 'bottom',
        backgroundColor: '#FA690F',
    }

    const inactiveStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',

    }

    const history = useHistory();

    const handleClickOnLogo = () => {
        history.push('/home')
    }

    return (
        <div className="grid grid-cols-2 gap-4 bg-yellow-500 h-32 p-5">
            {/* <NavLink to="/home"> */}
                <img onClick={handleClickOnLogo} className="object-contain h-20 w-full" src={logo} alt="craftophile-logo" />
            {/* </NavLink> */}
            
            <div className="font-semibold text-2xl grid grid-cols-4 gap-4 text-center text-white">
                <NavLink className="hover:bg-yellow-400" style={inactiveStyle} activeStyle={activeStyle} to='/home'><span>Home</span></NavLink>
                <NavLink className="hover:bg-yellow-400"  style={inactiveStyle} activeStyle={activeStyle} to='/services'><span>Services</span></NavLink>
                <NavLink className="hover:bg-yellow-400"  style={inactiveStyle} activeStyle={activeStyle} to='/tutorials'><span>Tutorials</span></NavLink>
                <NavLink className="hover:bg-yellow-400"  style={inactiveStyle} activeStyle={activeStyle} to='/about'><span>About Us</span></NavLink>

            </div>
        </div>
    );
};

export default Header;