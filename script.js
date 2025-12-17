let car = document.getElementById("car");
let value = true;
function handleClick() {
    value = !value;

    if (value) {
        car.style = "width: 535px;opacity: 1;background-color:red;"
    }
    else {
        car.style = "width:0px;opacity: 0;background-color:red;"
    }
}