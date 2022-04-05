function Adicao () {
    var n1 = 0;
    var n2 = 0;

    n1 = parseFloat(document.getElementById("adicao-n1").value);
    n2 = parseFloat(document.getElementById("adicao-n2").value);

    var resp = n1 + n2;

    document.getElementById("adicao-resp").innerHTML = resp;
}

function Subtracao () {
    var n1 = 0;
    var n2 = 0;

    n1 = parseFloat(document.getElementById("subtracao-n1").value);
    n2 = parseFloat(document.getElementById("subtracao-n2").value);

    var resp = n1 - n2;

    document.getElementById("subtracao-resp").innerHTML = resp;
}

function Multiplicacao () {
    var n1 = 0;
    var n2 = 0;

    n1 = parseFloat(document.getElementById("multiplicacao-n1").value);
    n2 = parseFloat(document.getElementById("multiplicacao-n2").value);

    var resp = n1 * n2;

    document.getElementById("multiplicacao-resp").innerHTML = resp;
}

function Divisao () {
    var n1 = 0;
    var n2 = 0;

    n1 = parseFloat(document.getElementById("divisao-n1").value);
    n2 = parseFloat(document.getElementById("divisao-n2").value);

    var resp = n1 / n2;

    document.getElementById("divisao-resp").innerHTML = resp;
}