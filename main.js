const initialPrice = document.querySelector("#initial-price")
const quantity = document.querySelector("#quntity")
const currentPrice = document.querySelector("#current-price")
const submitbtn = document.querySelector("#submit-btn")
const output = document.querySelector("#output-message")

submitbtn.addEventListener("click", function plcalculator(){
    let priceChange = Number(currentPrice.value) - Number(initialPrice.value);
    let pfl = priceChange * 100 / Number(initialPrice.value);
    if(pfl > 0){
        output.innerHTML = `the profit is ${pfl.toFixed(2)}% and total profits is ${(pfl * Number(quantity.value)).toFixed(2)}`;
        output.style.color = "rgb(44, 177, 44)"
    }else if(pfl < 0){
        output.innerHTML = `the loss % is ${-pfl.toFixed(2)} and total Losses is ${(-priceChange * Number(quantity.value)).toFixed(2)}`;
        output.style.color = "rgb(216, 52, 52)"
    }else{
        output.innerHTML = `No profit no Loss`;
        output.style.color = "yellow"
    }
})