// Displays several types of plans to select from, currently with placeholders
import React, { useState } from 'react';
import { getByTitle } from '@testing-library/dom';
import './SelectPlan.css';

function SelectPlan(props) {
    const [title, setTitle] = useState(props.title);
    const [price, setPrice] = useState(props.price);
    const [frequency, setFrequency] = useState(props.frequency);
    const [change, toggleChange] = useState("Select");
    console.log("SelectPlan evaluated by react");
    // Event handler upon clicking Select for a plan option; grabs the title, price and
    // frequency values of the plan to be used later.
    function clickHandler() {
        const selectedPlan = {
            title: props.title,
            price: props.price,
            frequency: props.frequency,
        };
        console.log("Test" + selectedPlan.price);
        var summaryDisplay = document.getElementById("summary");
        var orderTitle = document.getElementById("title");
        var btnPay = document.getElementById("btnPay");
        var changeBtn = document.getElementById("change");
        var planDisplay = document.getElementById("plan");
        if (change === "Select") {
            summaryDisplay.style.display = "block"
            orderTitle.style.display = "none";
            btnPay.style.display = "inline-block";
            toggleChange("Change");
            props.onChoosePlan(selectedPlan.title);
            // if (props.title === selectedPlan.title) {
            //     console.log(props.title + "ok");
            //     planDisplay.style.display = "flex";
            // } else {
            //     console.log(props.title + "Ok");
            //     planDisplay.style.display = "none";
            // }

        } else {
            summaryDisplay.style.display = "none"
            orderTitle.style.display = "block";
            btnPay.style.display = "none";
            toggleChange("Select");
            props.onChoosePlan("none");
        }
        // return selectedPlan;

        {/*return (
            <div>
                {selectedPlan.map(plan => <SelectPlan title={plan.title} price={plan.price} frequency={plan.frequency} />)}
            </div>
        )*/}
        console.log(selectedPlan.title + " $" + selectedPlan.price + selectedPlan.frequency);
    }

    return (
        <div id="planHolder">
            <div className="plan" id="plan">
                {/*<img src="%PUBLIC_URL%/icon-music.svg" alt="music>"> </img>*/}
                <div className="details">
                    <h2>{title}</h2>
                    <p className="price">${props.price}{props.frequency}</p>
                </div>
                <a className="change" id="change" onClick={clickHandler}>{change}</a>
            </div>
        </div>
    )
}

export default SelectPlan;