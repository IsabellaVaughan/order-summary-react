/*import logo from './logo.svg';*/
import React, { useState } from 'react';
import './App.css';
import './index.css';
import SelectPlanTitle from './components/SelectPlanTitle';
import SelectPlan from './components/SelectPlan';
import Button1 from './components/Button1';
import PlanContainer from './components/PlanContainer';
import OrderSummary from './components/OrderSummary';

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


  return (
    <div>
      <SelectPlanTitle />
      <OrderSummary />
      {filteredPlans.map(plan => <SelectPlan onChoosePlan={addSelectPlanHandler} key={plan.id} title={plan.title} price={plan.price} frequency={plan.frequency} />)}
      <Button1 />
    </div>
  )
}

export default App;
export { SelectPlan };