function validate() {
    var valX = validateX();
    var valY = validateY();
    var valR = validateR();
    return valX && valY && valR;
}

function validateX() {
    let x = document.getElementById('X').value;
    if (!isNumeric(x)) {
        document.getElementById('errorX').textContent = "Введите число!";
        return false;
    }
    if (!(parseFloat(x) >= -3 && parseFloat(x) <= 5)) {
        document.getElementById('errorX').textContent = "Число должно лежать в диапазоне от -3 до 5!";
        return false;
    }
    document.getElementById('errorX').textContent = "";
    return true;
}

function validateY() {
    var y = document.getElementById('Y').value;
    if (!isNumeric(y)) {
        document.getElementById('errorY').textContent = "Введите число!";
        return false;
    }
    if (!(parseFloat(y) >= -3 && parseFloat(y) <= 3)) {
        document.getElementById('errorY').textContent = "Число должно лежать в диапазоне от -3 до 3!";
        return false;
    }
    document.getElementById('errorY').textContent = "";
    return true;
}
function validateR() {
    let r = document.getElementById('r_select');
    if(r.value === ""){
        document.getElementById('errorR').textContent = "Выберите радиус!";
        return false;
    }
    document.getElementById('errorR').textContent = "";
    return true;
}
function setRadius(radius){
    let button = document.getElementById("r_" + radius);
    let r = document.getElementById('r_select');
    if (!button.classList.contains("selected")) {
        r.value = radius;
        setBackground(radius)
        let oldSelectedButton = document.querySelector(".selected");
        if (oldSelectedButton !== null)
            oldSelectedButton.classList.remove("selected");
        button.classList.add("selected");
    } else {
        r.value = "";
        setBackground('0')
        button.classList.remove("selected");
    }
}
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}