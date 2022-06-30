import React from "react";
import style from "./CurrencyUSD.module.css"

const CurrencyUSD = (props) => {
    const USD = props.currencyUsd.toFixed(2)

    return (
        <div >
            <h2 className={style.h2}>1$ = {USD} ₴ </h2>
        </div>
    );
}

export default CurrencyUSD;