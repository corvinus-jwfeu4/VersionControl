
var kérdések;
var kérdésSzáma;

function letöltés() {
    fetch('/questions.json')
        .then(response => response.json())
        .then(data => letöltésbefejeződött(data));

}

var kérdésMegjelenítés = function (kérdés) {
    let kérdés_szöveg = document.getElementById("kérdés_szöveg");
    let kép = document.getElementById("kép1");
    let válasz1 = document.getElementById("válasz1");
    let válasz2 = document.getElementById("válasz2");
    let válasz3 = document.getElementById("válasz3");

    kérdés_szöveg.innerHTML = kérdések[kérdés].questionText;
    kép.src = "https://szoft1.comeback.hu/hajo/" + kérdések[kérdés].image
    válasz1.innerText = kérdések[kérdés].answer1
    válasz2.innerText = kérdések[kérdés].answer2
    válasz3.innerText = kérdések[kérdés].answer3
}

window.onload = () => {
    letöltés();
}

function letöltésbefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d;
}


function előre() {
    kérdésSzáma++;
    if (kérdésSzáma == kérdések.length) {
        kérdésSzáma = 0;
    }
    kérdésMegjelenítés(kérdésSzáma)
}
function vissza() {
    if (kérdésSzáma > 0) {
        kérdésSzáma = kérdésSzáma-1;

    }
    else {
        kérdésSzáma = kérdések.length-1;
    }

    kérdésMegjelentítés(kérdésSzáma)
}
