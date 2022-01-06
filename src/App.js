/*import logo from './logo.svg';*/
import './App.css';
import './index.css';
import SelectPlanTitle from './components/SelectPlanTitle';
import SelectPlan from './components/SelectPlan';
import Button1 from './components/Button1';
import PlanContainer from './components/PlanContainer';
import OrderSummary from './components/OrderSummary';

function App() {
  const plans = [
    { title: 'Monthly Plan', price: 5.99, frequency: '/month' },
    { title: 'Annual Plan', price: 59.99, frequency: '/year' },
    { title: 'One-Time Payment', price: 159.99, frequency: '' },
  ];
  return (
    <div>
      <SelectPlanTitle />
      {plans.map(plan => <SelectPlan title={plan.title} price={plan.price} frequency={plan.frequency} />)}
      <Button1 />
    </div>
  )
}

export default App;
