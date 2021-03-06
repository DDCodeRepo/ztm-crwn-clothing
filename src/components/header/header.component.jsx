import React from "react";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { createStructuredSelector } from "reselect";

import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors'

import {ReactComponent as Logo} from "../../assets/crown.svg";

import {HeaderContianer, LogoContainer, OptionsContainer, OptionLink} from './header.styles';

const Header = ({currentUser, hidden}) => (
    <HeaderContianer>
        <LogoContainer to="/">
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/shop'>CONTACT</OptionLink>
            {
                console.log("MMM", currentUser),
                currentUser ? 
                <OptionLink as='div' onClick={()=>auth.signOut()}>SIGN OUT</OptionLink> 
                : 
                <OptionLink to='/signin'>SIGN IN</OptionLink>
            }
            <CartIcon/>
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown/>
        }
    </HeaderContianer>
);

const mapStateToProps = (state) => createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
