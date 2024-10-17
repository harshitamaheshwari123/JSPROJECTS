

function checkPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

document.getElementById("submitid").addEventListener("click", function () {
    let num = document.getElementById("inputid").value;
    let result = checkPrime(num);
    if (result) {
        document.getElementById("paraid").innerHTML = num + " is a prime number";
    } else {
        document.getElementById("paraid").innerHTML = num + " is not a  prime number";
    }
});

document.getElementById("clearid").addEventListener("click", () => {
    document.getElementById("inputid").value = "";
    document.getElementById("paraid").innerHTML = "result";
})