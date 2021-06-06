import '../app.css';

const Header = () => {
    return (
        <div className="cards-section">
            <div className="card">
                <div className="card-details">
                    <h3 >GOOGLE</h3>
                    <img src={'./assets/GOOGL.png'}/>
                </div>
                <h1 className="card-stock-price" >1515 USD</h1>
            </div>

            <div className="card">
                <div className="card-details">
                    <h3 >FACEBOOK</h3>
                    <img src={'./assets/FB.png'}/>
                </div>
                <h1 className="card-stock-price" >266 USD</h1>
            </div>

            <div className="card">
                <div className="card-details">
                    <h3 >AMAZON</h3>
                    <img src={'./assets/AMZN.svg'}/>
                </div>
                <h1 className="card-stock-price" >3116 USD</h1>
            </div>
            

        </div>
    )
}

export default Header;