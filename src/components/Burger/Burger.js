import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';

const Burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
    .map(ingredient => {

        return [...Array(props.ingredients[ingredient])].map((_,i) => {
            return <BurgerIngredient type={ingredient} key={ingredient+i}/>
        });
        // let num = props.ingredients[ingredient];
        // const arr = [];
        // for (let index = 0; index < num; index++) {
        //     arr.push(<BurgerIngredient type={ingredient} /> )         
        // }
        // return arr;
    })
    .reduce((arr,el) => {
        return arr.concat(el);
    },[]);

    if(transformedIngredients.length===0)
    {
        transformedIngredients = <p>Please start adding ingredients!</p>    
    }

    return (
        <div className={classes.Burger}>
        <BurgerIngredient type="bread-top"/>
        {transformedIngredients}
        <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default Burger;