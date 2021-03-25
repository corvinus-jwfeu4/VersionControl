using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HajosTeszt.wwwroot
{
    public class hetedik
    {
      
    }
    

}
var kerdesek;
var kédésSzáma;

window.onload = function letöltés() {
    fetch('/questions.json')
        .then(respone => response.json())
        .then(data => letöltésbefejeződött(data));

}

function letöltésbefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d;
    kérdésMegjelenítés(0);
}

var kérdésMegjelentítés = function (kérdésSzáma) {
    let kérdés_szöveg = document.getElementById("kérdés_szöveg");
    let kép = document.getElementById("kép1");
    let válasz1 = document.getElementById("válasz1");
    let válasz2 = document.getElementById("válasz2");
    let válasz3 = document.getElementById("válasz3");

    kérdés_szöveg.innerHTML = kérdések[kérdésSzáma].questionText
    kép.src = "https://szoft1.comeback.hu/hajo/" + kérdések[kérdésSzáma].image
    válasz1.innerText = kérdések[kérdésSzáma].answer1
    válasz2.innerText = kérdések[kérdésSzáma].answer2
    válasz3.innerText = kérdések[kérdésSzáma].answer3
}

function előre() {
    kérdésSzáma++;
    if (kérdésSzáma == kerdesek.length) {
        kérdésSzáma = 0;
    }
    kerdesmegjelenites(kérdésSzáma)
}
function vissza() {
    if (kérdésSzáma > 0) {
        kérdésSzáma = kérdésSzáma - 1;

    }
    else {
        kérdésSzáma = kerdesek.length - 1;
    }

    kérdésMegjelentítés(kérdés)
}
