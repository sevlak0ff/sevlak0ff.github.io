let myImage = document.querySelector('img');
let myText = document.querySelector('p');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    
    if(mySrc === 'images/makima.jpeg') {
        myImage.setAttribute ('src','images/alita.jpeg');
        myText.innerText = "Gunnm: Battle Angel também é um mangá maravilhoso, com uma protagonista que me deixa sempre sem fôlego. Ver como a inocência e força que ela possui se desdobra durante o mangá é um dos pontos altos dele. As lutas e o drama também tem seu lugar no mangá, em peso."
      } else {
        myImage.setAttribute ('src','images/makima.jpeg');
        myText.innerText = "Chainsaw Man é um mangá criado por Tatsuki Fujimoto. É um mangá do caralho e eu acho que todo mundo deveria ler. Foi um dos mangás que comecei por causa de Fire Punch (que também é outro mangá do caralho!!) e não me arrependo. Ele conta a história de Denji, um menino abandonado, e seu cachorro Pochita, um... demônio. Essa da foto é a best girl do mangá e minha waifu: Makima!"
      }
}

let myButton = document.querySelector('button');
let myHeader = document.querySelector('h1');

function defineUsername(){
    let myName = prompt("Por favor, digite seu nome.");
    if(!myName || myName === null){
        defineUsername;
    }else{
        localStorage.setItem('name', myName);
        myHeader.textContent = "Isso são mangás, " + myName;
    }
}

if(!localStorage.getItem('name')) {
    defineUsername();
  } else {
    let nomeGuardado = localStorage.getItem('name');
    myHeader.textContent = 'Mozilla é legal, ' + nomeGuardado;
  }

  myButton.onclick = function() { 
      defineUsername();
  }