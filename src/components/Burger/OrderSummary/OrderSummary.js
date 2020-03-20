import React, { Component } from 'react';
import Auxillary from '../../../hoc/Auxillary/Auxillary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    //This can be a functional Component

    render() {
        const ingredients = this.props.ingredients;
        const list = Object.keys(ingredients)
        .map(igKey => {
            return (
            <li key={igKey}>
                <span style={{textTransform : 'capitalize'}}>{igKey}</span>: {ingredients[igKey]}
            </li>);
        });

        return (
            <Auxillary>
                <h3>Your Order</h3>
                <p>A Delicious Burger with the following ingredients: </p>
                <ul>
                    {list}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
            </Auxillary>
        );

    }
    
   
}

export default OrderSummary;