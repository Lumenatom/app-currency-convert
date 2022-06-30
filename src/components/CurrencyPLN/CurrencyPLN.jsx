import React from "react";


const CurrencyPLN = (props) => {
    const PLN = props.currencyPln.toFixed(2)
    return (
        <div >
            <h2>1zł = {PLN} ₴</h2>
        </div>
    );
}

export default CurrencyPLN;