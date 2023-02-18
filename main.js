function calcularPeso(){
    var inName = document.getElementById("inName").value;
    var inFeminino = document.getElementById("inFeminino").checked;
    var inMasculino = document.getElementById("inMasculino").checked;
    var inAltura = Number(document.getElementById("inAltura").value);
    var outRespMin = document.getElementById("outRespMin")
    var outRespMed = document.getElementById("outRespMed")
    var outRespMax = document.getElementById("outRespMax")
    
    //verificação de valores

    if(inName == "" || (inMasculino == false && inFeminino == false)) {
        alert("Por favor, informe o nome e selecione o sexo... ");
        inName.focus();
        return;

    } if (inAltura == 0 || isNaN(inAltura)) {
        alert("Por favor, informe a altura corretamente...");
        inAltura.focus();
        return;

    } if (inMasculino) {
        //masculino
        var pesoMin = 20 * Math.pow(inAltura, 2)
        var pesoMed = 22.5 * Math.pow(inAltura, 2);
        var pesoMax = 25 * Math.pow(inAltura, 2);
    } else {
        //Femino
        // mininmo = 18 
        // maximo = 25
        var pesoMin = 19 * Math.pow(inAltura, 2);
        var pesoMed = 21.5 * Math.pow(inAltura, 2);
        var pesoMax = 24 * Math.pow(inAltura, 2);
    }

    //apresenta a resposta
    outRespMin.textContent = `${inName} seu peso mínimo ${pesoMin.toFixed(2)} kg`;
    outRespMed.textContent = `${inName} seu peso ideal é ${pesoMed.toFixed(2)} kg`;
    outRespMax.textContent = `${inName} seu peso máximo é ${pesoMax.toFixed(2)} kg`;
}
    var btCalcular = document.getElementById("btCalcular");
    btCalcular.addEventListener("click", calcularPeso);


function limparCampo(){
    inName = document.getElementById("inName").value = "";
    inFeminino = document.getElementById("inFeminino").checked = false;
    inMasculino = document.getElementById("inMasculino").checked = false;
    inAltura = Number(document.getElementById("inAltura").value = "");
    outRespMin = document.getElementById("outRespMin").textContent = "";
    outRespMed = document.getElementById("outRespMed").textContent = "";
    outRespMax = document.getElementById("outRespMax").textContent = "";

    //joga o foco no elemento inName
    document.getElementById("inName").focus();
}
var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparCampo);
