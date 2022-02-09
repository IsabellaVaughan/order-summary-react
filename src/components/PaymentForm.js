// Displays payment form upon confirming plan choice

import '../App.css';
import './PaymentForm.css';
import ConfirmPayment from './ConfirmPayment';

function PaymentForm(props) {
    const SubmitHandler = SubmitEvent => {
        SubmitEvent.preventDefault();
        props.onSubmit(true);
    }

    return (
        <div id="form__pay">
            <form action="">
                <h1>Payment</h1>
                <div>
                    <label for="cardname" id="cardname">Name on card</label>
                    <input type="text" maxlength="32"></input>
                </div><div>
                    <label for="cardnum" id="cardnum">Credit Card Number</label>
                    <input type="tel" maxlength="16"></input>
                </div><div>
                    <label for="expyear" id="expyear">Expiration Year</label>
                    <input type="tel" maxlength="4"></input>
                </div><div>
                    <label for="scode" id="scode">Security Code</label>
                    <input type="tel" maxlength="3" id="securitycode"></input>
                </div>
                <button type="submit" id="payBtn" onClick={SubmitHandler}>Submit Details</button>
            </form>
        </div>
    )
}

export default PaymentForm;