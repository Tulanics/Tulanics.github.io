


/* No index.html linha 185 e script.js linha 4 estão sendo cumpridos os requisitos Jquery;
    No contato.html linha 144 e  script.js linha 26 estão sendo cumpridos os requisitos javascript;
    No style.css linha 72 estão sendo cumpridos os requisitos CSS;
    No sobre.html linha 183 estão sendo cumpridos o requisito HTML <article> e no contato.html linha 225 está sendo cumprido o requisito HTML <aside> */
/* ------------------------------------------------------------- */
/* --------------------REQUISITO JQUERY------------------------- */
/* ------------------------------------------------------------- */
function surgeBtn() {
    console.log("entrou");
    if ($(window).scrollTop() >  400) {
        console.log("funcionou o fadeIn");
        $("#botao-topo").fadeIn();
    } else {
        console.log("funcionou o fadeout")
        $("#botao-topo").fadeOut();
    }
};
$(function () {
    $(window).scroll(() => surgeBtn());
});
/* ------------------------------------------------------------- */
/* ---------------------/ REQUISITO JQUERY---------------------- */
/* ------------------------------------------------------------- */



/* ----------------------------------------------------------------- */
/* --------------------REQUISITO JAVASCRIPT------------------------- */
/* ----------------------------------------------------------------- */
function validaCNPJeCPF(){
    let re = /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/
    let inputValue = document.getElementById("cnpj-cpf")
    console.log(inputValue.value);
    cnpjCPF = inputValue.value
    /* elimina string vazia */
    if(cnpjCPF == ''){
        document.getElementById("retorno").innerHTML= "CPF/CNPJ Inválido, digite no formato:  11.222.333/4444-55 para CNPJ ou no formato 111.222.333-45 para CPF";
        document.getElementById("retorno").style.color="red";
    }
    /* elimina strings diferentes de 18 caracteres */
    if (cnpjCPF.length >14){
        document.getElementById("retorno").innerHTML= "CPF/CNPJ Inválido, digite no formato:  11.222.333/4444-55 para CNPJ ou no formato 111.222.333-45 para CPF";
        document.getElementById("retorno").style.color="red";
    }

    // Elimina CNPJs invalidos conhecidos
    if (cnpjCPF == "00.000.000/0000-00" || 
        cnpjCPF == "11.111.111/1111-11" || 
        cnpjCPF == "22.222.222/2222-22" || 
        cnpjCPF == "33.333.333/3333-33" || 
        cnpjCPF == "44.444.444/4444-44" || 
        cnpjCPF == "55.555.555/5555-55" || 
        cnpjCPF == "66.666.666/6666-66" || 
        cnpjCPF == "77.777.777/7777-77" || 
        cnpjCPF == "88.888.888.8888-88" ||
        cnpjCPF == "99.999.999.9999-99" ||
        cnpjCPF == "111.111.111-11" ||
        cnpjCPF == "222.222.222-22" ||
        cnpjCPF == "222.222.222-22" ||
        cnpjCPF == "333.333.333-33" ||
        cnpjCPF == "444.444.444-44" ||
        cnpjCPF == "555.555.555-55" ||
        cnpjCPF == "666.666.666-66" ||
        cnpjCPF == "777.777.777-77" ||
        cnpjCPF == "888.888.888-88" ||
        cnpjCPF == "999.999.999-99"){

            document.getElementById("retorno").innerHTML= "CPF/CNPJ Inválido: digite no formato:  11.222.333/4444-55 para CNPJ ou no formato 111.222.333-45 para CPF";
            document.getElementById("retorno").style.color="red"
    }
           
    if(re.test(cnpjCPF)){   
        document.getElementById("retorno").innerHTML = "CPF/CNPJ Válido";
        document.getElementById("retorno").style.color="green"
    } else {
        document.getElementById("retorno").innerHTML= "CPF/CNPJ Inválido: digite no formato:  11.222.333/4444-55 para CNPJ ou no formato 111.222.333-45 para CPF";
        document.getElementById("retorno").style.color="red"
    } 
    
}
/* ----------------------------------------------------------------- */    
/* --------------------/ REQUISITO JAVASCRIPT----------------------- */
/* ----------------------------------------------------------------- */