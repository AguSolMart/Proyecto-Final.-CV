let ocu_btn = document.getElementById("ocu_btn");

let ocu = document.getElementById("ocu");

ocu_btn.addEventListener("click", toggleText);

function toggleText(){
    ocu.classList.toggle("sss");

    if(ocu.classList.contains("sss")) {
        ocu_btn.innerHTML = "Leer Menos";
    }
    else {
        ocu_btn.innerHTML = "Leer Más";
    }
}
