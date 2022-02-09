/*import logo from './logo.svg';*/
import React, { useState } from 'react';
import './App.css';
import './index.css';
import SelectPlanTitle from './components/SelectPlanTitle';
import SelectPlan from './components/SelectPlan';
import Button1 from './components/Button1';
import PlanContainer from './components/PlanContainer';
import OrderSummary from './components/OrderSummary';
import PaymentForm from './components/PaymentForm';
import ConfirmPayment from './components/ConfirmPayment';
import PaymentConfirmed from './components/PaymentConfirmed';

function App(props) {
  const plans = [
    { id: 1, title: 'Monthly Plan', price: 5.99, frequency: '/month' },
    { id: 2, title: 'Annual Plan', price: 59.99, frequency: '/year' },
    { id: 3, title: 'One-Time Payment', price: 159.99, frequency: '' },
  ];

  // Filter functions to display only the selected plans, or all plans if none selected
  const [filteredPlans, onUpdatePlan] = useState(plans);

  let selectedPlan2;
  const addSelectPlanHandler = selectedPlan => {
    console.log("in app.js" + selectedPlan);
    selectedPlan2 = selectedPlan;

    console.log(selectedPlan2 + "callPlan");
    const filteredPlans = plans.filter(plan => {
      if (selectedPlan2 === plan.title) {
        return plan.title === selectedPlan2;
      } else {
        if (selectedPlan2 === "none") {
          // Runs through each plan and displays them if none selected
          return plan;
        }
      }
    });
    // Update the filteredPlans mapping to show changes made
    onUpdatePlan(filteredPlans);
  }
  const proceedPlanHandler = proceedPlan => {
    console.log(proceedPlan);
    var planDisplay = document.getElementById("planHolder");
    var planSummary = document.getElementById("summary");
    var formDisplay = document.getElementById("form__pay");
    var proceedBtn = document.getElementById("btnPay");
    planDisplay.style.display = "none";
    planSummary.style.display = "none";
    formDisplay.style.display = "block";
    proceedBtn.style.display = "none";

  }

  const submitHandler = submitPlan => {
    console.log(submitPlan);
    var loadingDisplay = document.getElementById("loading");
    var cancelBtn = document.getElementById("cancelButton");
    loadingDisplay.style.display = "block";
    cancelBtn.style.display = "none";
    var formDisplay = document.getElementById("form__pay");
    formDisplay.style.display = "none";
    var confirmPay = document.getElementById("confirmation");
    confirmPay.style.visibility = "hidden";
    confirmPay.style.opacity = "0";
    window.setTimeout(loadingSpinner, 4500);
  }

  function loadingSpinner() {
    var loadingDisplay = document.getElementById("loading");
    loadingDisplay.style.visibility = "hidden";
    var confirmPay = document.getElementById("confirmation");
    confirmPay.style.display = "block";
    confirmPay.style.visibility = "visible";
    confirmPay.style.opacity = "1";
  }


  return (
    <div>
      <PaymentConfirmed />
      <ConfirmPayment />
      <PaymentForm onSubmit={submitHandler} />
      <SelectPlanTitle />
      <OrderSummary />
      {filteredPlans.map(plan => <SelectPlan onChoosePlan={addSelectPlanHandler} key={plan.id} title={plan.title} price={plan.price} frequency={plan.frequency} />)}
      <Button1 onProceed={proceedPlanHandler} />
    </div>
  )
}

export default App;
export { SelectPlan };