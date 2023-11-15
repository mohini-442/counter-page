let addbutton = document.querySelector('#addbutton');
let savebutton = document.querySelector('#savebutton');
let counterdisplay = document.querySelector('#counterdisplay');
let Savednumber = document.querySelector("#Savednumber");
let ResetBtn = document.querySelector("#ResetBtn")


addbutton.addEventListener("click", function () {
    counterdisplay.innerHTML = +counterdisplay.innerHTML + 1;
    savebutton.classList.remove("button-2-disabled");
})
savebutton.addEventListener("click", function () {
    if (counterdisplay.innerHTML == 0) {
        savebutton.classList.add("button-2-disabled");
    }
    else {
        if (Savednumber.innerHTML == 0) {
            Savednumber.innerHTML = counterdisplay.innerHTML;
        }

        else {
            Savednumber.innerHTML = Savednumber.innerHTML + ', ' + counterdisplay.innerHTML;
        }
    }
})
ResetBtn.addEventListener("click", function () {
    counterdisplay.innerHTML = 0;
    Savednumber.innerHTML = 0;
})