// Displays payment form upon confirming plan choice

import '../App.css';
import './PaymentForm.css';

function PaymentForm(props) {
    // Find year value to automatically update selection for exp date for card
    const date = new Date();
    let year = date.getFullYear() - 2000;

    const SubmitHandler = SubmitEvent => {
        SubmitEvent.preventDefault();
        validateInput(document.payment_form.cardname, document.payment_form.visa_card, document.payment_form.security_code);
    }
    function validateInput(cname, cardinput, scode) {
        // Starting value true, remains true if it passes validation checks
        var isValid = true;

        // Checks pattern of input
        // Length is 13 or 16, starts with 4, and only contains numerical values
        var cardnum = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
        // Checks security code only contains numbers
        var security = /^[0-9]*$/;

        // Validate name on card - refuses null input
        if (cname.value.trim().length === 0) {
            document.getElementById("empty_name").style.display = "block";
            isValid = false;
        } else {
            document.getElementById("empty_name").style.display = "none";
        }

        // Validate security code input - refuses null input, non-numeric
        // input, and input that doesn't contain 3 characters
        if (scode.value.trim().length === 0) {
            document.getElementById("empty_scode").style.display = "block";
            document.getElementById("invalid_scode").style.display = "none";
            isValid = false;
        } else {
            document.getElementById("empty_scode").style.display = "none";
            if (scode.value.trim().length === 3 && scode.value.match(security)) {
                document.getElementById("invalid_scode").style.display = "none";
            } else {
                document.getElementById("invalid_scode").style.display = "block";
                isValid = false;
            }
        }

        // Validate the card number input - checks if it matches the defined
        // pattern, and if not, checks which kind of mistake has been made
        // (either an empty input, or something else)
        if (cardinput.value.match(cardnum)) {
            document.getElementById("invalid_visa").style.display = "none";
            document.getElementById("empty_visa").style.display = "none";
        } else {
            if (cardinput.value.trim().length === 0) {
                document.getElementById("empty_visa").style.display = "block";
                document.getElementById("invalid_visa").style.display = "none";
                isValid = false;
            } else {
                document.getElementById("invalid_visa").style.display = "block";
                document.getElementById("empty_visa").style.display = "none";
                isValid = false;
            }
        }
        // Returns true if inputs pass all checks, otherwise returns false
        props.onSubmit(isValid);
    }

    return (
        <div id="form__pay">
            <form name="payment_form" action="">
                <h1>Payment</h1>
                <div>
                    <label htmlFor="cardname" id="cardname">Name on card</label>
                    <input type="text" maxLength="32" name="cardname"></input>
                    <p id="empty_name">Field cannot be left blank.</p>
                </div><div>
                    <label htmlFor="cardnum" id="cardnum">Visa Credit Card Number</label>
                    <input type="text" name="visa_card" maxLength="16"></input>
                    <p id="invalid_visa">Card number invalid.</p>
                    <p id="empty_visa">Field cannot be left blank.</p>
                </div><div>
                    <label htmlFor="expyear" id="expyear">Expiration Year</label>
                    <select name="expyearselect" id="expyearselect">
                        <option value={year}>{year}</option>
                        <option value={year + 1}>{year + 1}</option>
                        <option value={year + 2}>{year + 2}</option>
                        <option value={year + 3}>{year + 3}</option>
                        <option value={year + 4}>{year + 4}</option>
                        <option value={year + 5}>{year + 5}</option>
                    </select>
                </div><div>
                    <label htmlFor="scode" id="scode">Security Code</label>
                    <input type="tel" maxLength="3" id="securitycode" name="security_code"></input>
                    <p id="empty_scode">Field cannot be left blank.</p>
                    <p id="invalid_scode">Security code invalid.</p>
                </div>
                <button type="submit" id="payBtn" onClick={SubmitHandler}>Submit Details</button>
            </form>
        </div>
    )
}

export default PaymentForm;