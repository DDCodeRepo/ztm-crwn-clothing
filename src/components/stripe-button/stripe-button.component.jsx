import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51I6qEGC59wRtGv8JkDTQZSkdfQMqzD2jzNJUYpwr9c5lTF0OekhFVrHEX170WiiS7NqAAt03OJ9ztfNt9z5Iymhn00IH8WdS8j';

    const onToken = token =>{
        console.log(token);
        alert('Payement Successful');
    }

    return(
        <StripeCheckout label='Pay Now'
        name='CRWN Clothing'
        billingAddress
        shippingAddress
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}/>
    );
};

export default StripeCheckoutButton;