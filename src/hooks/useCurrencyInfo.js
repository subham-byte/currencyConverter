/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency])) // we can't use res.currency because then it will look for the currency property which is not there so instead now it looks for res[inr].
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;