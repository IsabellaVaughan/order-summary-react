import '../App.css';

function PlanContainer() {
    {/* Currently with placeholder values */ }
    const planSelection = 'Annual Plan';
    const planPrice = 59.99;
    return (
        <div className="plan">
            {/*<img src="%PUBLIC_URL%/icon-music.svg" alt="music>"> </img> Possibly remove from plan selection screen to declutter*/}
            <div className="details">
                <h2>{planSelection}</h2>
                <p className="price">${planPrice}/year</p>
            </div>
            <a className="change" href="#">Change</a>
        </div>
    )
}

export default PlanContainer;