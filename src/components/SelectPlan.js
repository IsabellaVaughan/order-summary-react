// Displays several types of plans to select from, currently with placeholders
import React, { useState } from 'react';
import { getByTitle } from '@testing-library/dom';
import App from '../App';
import './SelectPlan.css';

function SelectPlan(props) {
    const [title, setTitle] = useState(props.title);
    console.log("SelectPlan evaluated by react");
    // Event handler upon clicking Select for a plan option; grabs the title, price and
    // frequency values of the plan to be used later.
    function clickHandler() {
        setTitle("Plan Selected!");
        const selectedPlan = {
            title: props.title,
            price: props.price,
            frequency: props.frequency
        };
        {/*return (
            <div>
                {selectedPlan.map(plan => <SelectPlan title={plan.title} price={plan.price} frequency={plan.frequency} />)}
            </div>
        )*/}
        console.log(selectedPlan.title + " $" + selectedPlan.price + selectedPlan.frequency);
        console.log(selectedPlan.title);
        console.log(selectedPlan.price);
        console.log(selectedPlan.frequency);
    }

    return (
        <div>
            <div className="plan">
                {/*<img src="%PUBLIC_URL%/icon-music.svg" alt="music>"> </img>*/}
                <div className="details">
                    <h2>{title}</h2>
                    <p className="price">${props.price}{props.frequency}</p>
                </div>
                <a className="change" onClick={clickHandler}>Select</a>
            </div>
        </div>
    )
}

export default SelectPlan;