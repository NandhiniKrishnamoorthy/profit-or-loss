// JavaScript source code
var initialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#stock-quantity");
var currentPrice = document.querySelector("#current-price");
var calculateButton = document.querySelector("#calculate");
var outputMessage = document.querySelector("#output-message");

calculateButton.addEventListener("click", function calculate() {
    var initial = Number(initialPrice.value);
    var quantity = Number(stockQuantity.value);
    var current = Number(currentPrice.value);

    calculateProfitLoss(initial, quantity, current);
});

function calculateProfitLoss(ip, qty, cp) {
    if (ip && qty && cp) {
        if (ip > 0 && qty > 0 && cp > 0) {
            if (ip > cp) {
                var loss = (ip - cp) * qty;
                var lossPercentage = (loss / ip) * 100;

                showMessage(`Hey, the loss is ${loss} and the percent is ${lossPercentage}%`);
            }
            else if (cp > ip) {
                var profit = (cp - ip) * qty;
                var profitPercentage = (profit / ip) * 100;

                showMessage(`Hey, the profit is ${profit} and the percent is ${profitPercentage}%`);
            }
            else {
                showMessage(`No pain No gain`);
            }
        }
        else {
            showMessage("Please enter positive values");
        }
        
    }
    else {
        showMessage("Please enter values in fields");
    }
}

function showMessage(msg) {
    outputMessage.innerText = msg;
}