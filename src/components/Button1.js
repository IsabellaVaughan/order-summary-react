// Button for confirming your plan selection
import './Button1.css';

function Button1(props) {
    function clickHandler() {
        props.onProceed(true);
    }
    return (
        <p><button className="button1" id="btnPay" onClick={clickHandler}>Proceed to Payment</button></p>
    )
}

export default Button1;