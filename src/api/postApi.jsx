import axios from "axios"

const api = axios.create({
    baseURL :"https://v6.exchangerate-api.com/v6/65917ebd7fb99059dae5ed09"
});

export const currencyConverter = (fromCurrency,toCurrency,amount) => {
    return api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`);
}