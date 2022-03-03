
const tipcalcy = () => {
    let amount = document.getElementById('bill_amount').value;
    let perc = document.getElementById('tip_perc').value;
    let NumofPeople = document.getElementById('Num_of_people').value;


    //CALCULATIONS
    let tip = amount * (perc / 100);
    let tipPerPerson = tip / NumofPeople;
    let TPP = tipPerPerson.toFixed(2);
    let total = tip + Number(amount);
    let totalperPerson = total / NumofPeople;
    let ToPP = totalperPerson.toFixed(2);



    document.getElementById('tip_total').value = TPP;
    document.getElementById('total_billed').value = ToPP;
}

function addValue(inputField) {
    if (inputField.value === "" || inputField.value.length == 0)
        inputField.value = 1;
    else
        inputField.value = parseInt(inputField.value) + 1;
    mark(inputField, "green");
    document.getElementById("calculate").disabled = false
}

function minusValue(inputField) {
    if (inputField.value === "" || inputField.value.length == 0)
        inputField.value = 1;
    else if (parseInt(inputField.value) >1)
        inputField.value = parseInt(inputField.value) - 1;
    mark(inputField, "green");
    document.getElementById("calculate").disabled = false
}

function validate(valueInField) {
    if (valueInField.value === "" || valueInField.value.trim().length == 0) {
        alert("Please provide value in " + valueInField.name);
        mark(valueInField, "red")
        document.getElementById("calculate").disabled = true
    }       
    else
        mark(valueInField, "green")
        document.getElementById("calculate").disabled = false
}

function mark(element, color) {
    element.style.border = "1px solid " + color;
}