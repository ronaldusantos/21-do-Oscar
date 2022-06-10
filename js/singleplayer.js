let appElement = document.getElementById("app"); //app é a div que relaciona o javascript com o HTML
let j1Element = document.getElementById("j1"); 
let j2Element = document.getElementById("j2"); 
let placarElement = document.getElementById("placar"); 
let rankingElement = document.getElementById("ranking"); 

let jogador1 = 0;
let vez = 0;
let valor;
let score = 0;
let vitoria1 = 0;
let vitoria2 = 0;
let derrota1 = 0;
let derrota2 = 0;

let boxElement = document.createElement('div'); //criação do placar
boxElement.innerText = score;
placarElement.appendChild(boxElement);

let box2Element = document.createElement('div'); //criação do ranking
box2Element.innerText = score;
rankingElement.appendChild(box2Element);

function getRandom(max) { //Funçao que gera um valor aleatório entre 1 e 3
    return Math.floor(Math.random() * max + 1)
}

function setScore(e) {

    valor = 0; //Para garantir que não haja lixo em valor
    
    if (score<=21){
        if (e.name.includes('b1') && ( vez == 'b2' ||  vez == '0' )) { //função que executa na vez do jogador 1
        valor = jogador1 =  parseInt(e.value); //pega o value do botão que esta no html
        vez = e.name.substr(0, 2); //pega os 2 primeiros caracteres
        }
        else if (e.name.includes('b2') && ( vez == 'b1' ||  vez == '0' )) { //função que executa na vez do computador
            valor = getRandom(3); //pega o valor aleatório gerado pela função
            vez = e.name.substr(0, 2); //pega os 2 primeiros caracteres
            }
    else {
        return alert("Agora é a vez do outro jogador"); //impede que o mesmo jogador jogue duas vezes seguidas
    }

    score = score + valor;
    boxElement.innerText = score;

    console.log(score);

    if (score ==21 && vez == 'b1') {
        alert('Acabou! Você é o vencedor');
        score=0; vitoria1=vitoria1+1; derrota2=derrota2+1; 
    }
    else {
        if (score ==21 && vez == 'b2') {
            alert('Acabou! Você perdeu para o computador :('); 
            score=0; vitoria2=vitoria2+1; derrota1=derrota1+1; 
        }
    }
    } 
    else 
    {alert('Passou de 21 pontos! Não teve vencedor :('); score=0;}

    box2Element.innerText = "Você: " + vitoria1 + " vitorias " + "e " + derrota1 + " derrotas \n" +
                            "Computador: " + vitoria2 + " vitorias " + "e " + derrota2 + " derrotas"; //escrita do texto no ranking
}
