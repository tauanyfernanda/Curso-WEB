let carro="volvo";
let A=10;
let b=5;
alert(A+b);
alert("AlÔ mundo!");

function clicou(){
    alert("voce clicou em um botao");
}

let cliques=0;

function ContarCliques(){
    cliques++;
    document.getElementById("Resultado").innerHTML="O Contator está com: <mark>"+cliques+"</mark> cliques";
}
function resetarCliques(){
    cliques=0;
    document.getElementById("Resultado").innerHTML="";
}
let media;

function mediaDoAluno(){
    let nota01 = prompt("digite sua primeira nota");
    let nota02 = prompt("digite sua segunda nota");
    let media = (nota01+nota02)/2;
    
}