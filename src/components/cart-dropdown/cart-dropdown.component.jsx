import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selector'

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
                :
                <span className="empty-message">Your cart is empty</span>
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

// const mapStateToProps = (state) => ({
//     cartItems: state.cart.cartItems
// })

//essentially, the same code as above, only destructured
// const mapStateToProps = ({ cart: {cartItems} }) => ({
//     cartItems
// })

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})


export default connect(mapStateToProps)(CartDropdown);