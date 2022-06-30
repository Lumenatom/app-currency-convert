import React from "react";


const CurrencyEUR = (props) => {
    const EUR = props.currencyEur.toFixed(2)
    return (
        <div >
            <h2>1€ = {EUR} ₴</h2>
        </div>
    );
}

export default CurrencyEUR;