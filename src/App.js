import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import CurrencyEUR from "./components/CurrencyEUR/CurrencyEUR";
import CurrencyPLN from "./components/CurrencyPLN/CurrencyPLN";
import CurrencyUSD from "./components/CurrencyUSD/CurrencyUSD";
import Navbar from "./components/Navbar/Navbar";
import style from "./App.module.css"


function App() {

  const [currencyUsd, setCurrencyUsd] = useState("")
  const [currencyEur, setCurrencyEur] = useState("")
  const [currencyPln, setCurrencyPln] = useState("")

  const fetchRequestUSD = async () => {
    try {
      const response = await fetch("https://api.exchangerate.host/convert?from=USD&to=UAH")
      const data = await response.json()
      const result = await data.result;
      setCurrencyUsd(result)
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    fetchRequestUSD()
  }, [])

  const fetchRequestEUR = async () => {
    try {
      const response = await fetch("https://api.exchangerate.host/convert?from=EUR&to=UAH")
      const data = await response.json()
      const result = await data.result;
      setCurrencyEur(result)
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    fetchRequestEUR()
  }, [])

  const fetchRequestPLN = async () => {
    try {
      const response = await fetch("https://api.exchangerate.host/convert?from=PLN&to=UAH")
      const data = await response.json()
      const result = await data.result;
      setCurrencyPln(result)
    } catch (e) {
      console.log(e)
    }

  }
  useEffect(() => {
    fetchRequestPLN()
  }, [])

  return (
    <div className={style.app}>
      <Navbar />
      <Routes>
        <Route path='/usd' element={<CurrencyUSD currencyUsd={currencyUsd} />} />
        <Route path='/eur' element={<CurrencyEUR currencyEur={currencyEur} />} />
        <Route path='/pln' element={<CurrencyPLN currencyPln={currencyPln} />} />
      </Routes>
    </div>
  );
}

export default App;
