let number = 0;
let number2 = 0;
let result = 0;

document.getElementById("add").onclick = function () {
    number++;
    document.getElementById("num").innerHTML = number;
};

document.getElementById("reset").onclick = function () {
    number = 0;
    document.getElementById("num").innerHTML = number;
};

document.getElementById("sub").onclick = function () {
    number--;
    document.getElementById("num").innerHTML = number < 0 ? "Error" : number;
    if (number < 0) number = 0;
};

document.getElementById("add2").onclick = function () {
    number2++;
    document.getElementById("num2").innerHTML = number2;
};

document.getElementById("reset2").onclick = function () {
    number2 = 0;
    document.getElementById("num2").innerHTML = number2;
};

document.getElementById("sub2").onclick = function () {
    number2--;
    document.getElementById("num2").innerHTML = number2 < 0 ? "Error" : number2;
    if (number2 < 0) number2 = 0;
};

document.getElementById("result4").onclick = function () {
    const checkbox = document.getElementById("inp");
    const checkbox2 = document.getElementById("inp2");
    const checkbox3 = document.getElementById("inp3");
    const checkbox4 = document.getElementById("inp4");

    if (checkbox.checked) {
        result = number + number2;
    } else if (checkbox2.checked) {
        result = number - number2;
    } else if (checkbox3.checked) {
        result = number * number2;
    } else if (checkbox4.checked) {
        result = number2 === 0 ? "Error" : (number / number2).toFixed(2);
    } else {
        result = "Error";
    }
    document.getElementById("num3").innerHTML = result;
};
