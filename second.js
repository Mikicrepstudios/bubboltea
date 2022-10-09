body = document.getElementById("placewhereheart");
div = document.getElementById("creditcard");
div2 = document.getElementById("creditcard2");
confirma = document.getElementById("confirm");

function robperson() {
    console.log("Start");

    c1 = document.getElementById("c1").value;
    c2 = document.getElementById("c2").value;
    c3 = document.getElementById("c3").value;
    c4 = document.getElementById("c4").value;
    c5 = document.getElementById("c5").value;

    body.removeChild(document.getElementById("givmoney"));

    div.classList.add('creditcard');
    div.classList.remove('hidden');
    div2.classList.add('creditcard');
    div2.classList.remove('hidden');
    confirma.classList.remove('hidden');

    document.getElementById("numba").innerHTML = c1;
    document.getElementById("holda").innerHTML = c3;
    document.getElementById("cvc").innerHTML = c2;
    document.getElementById("adres").innerHTML = c4 + " " + c5;

    console.log("End");
}

function go() {
    numbaaaaa = Math.floor(Math.random() * 2);
    if(numbaaaaa == 1) {
        window.location.href = "paymentdone.html";
    }
    else {
        window.location.href = "paymentfail.html";
    }
}

function refresh() {
    location.reload();
}