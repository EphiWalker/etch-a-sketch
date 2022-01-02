const container=document.createElement('div');
container.style.cssText = "justify-content: center; display: grid; grid-template-columns: repeat(16,20px); grid-template-rows: repeat(16,20px)";
document.body.appendChild(container);
for(i=0;i<256;i++) {
 let newDiv = document.createElement('div');
    container.appendChild(newDiv);

}

let div = document.querySelectorAll('div');
for(i=0;i<div.length;i++) {
div[i].classList.add('hoverMouse');
}

container.classList.remove('hoverMouse');

function randomValue() {
    const rgbArray = [];
    for (i=0;i<3;i++) {
    rgbArray[i] = Math.floor(Math.random()*256);
    }

    return rgbArray;
}

//let randomRgb = randomValue();
const divs = document.querySelectorAll('.hoverMouse');
divs.forEach(div => div.addEventListener('mouseover', (e)=>{  //Here, I've attached event listener to 'container'. I need to stop bubbling here.
   //e.fromElement.addEventListener('mouseover', (e)=> { 
    let randomRgb = randomValue();
    let rgb1 = randomRgb[0], rgb2 = randomRgb[1], rgb3 = randomRgb[2];

    e.fromElement.style.backgroundColor = `rgb(${rgb1},${rgb2},${rgb3})`;
    console.log(this.Element);
   //});
}));

//newDiv.onmouseover = ()=> {
  //  randomRgb = randomValue();
    //   newDiv.style.backgroundColor="rgb(randomRgb[0],randomRgb[1],randomRgb[2])";
   //};
//const divv = document.querySelector ('div');
//divv.classList.add('hoverEffect');
//const styleDiv = document.querySelectorAll('.hoverEffect');
//styleDiv.style.backgroundColor = "blue";

/*styleDiv.innerHTML0 = ".cssClass{color: red}";
container.onmouseover = ()=> {
container.appendChild(styleDiv);
container.className = 'cssClass';
};
function randomValue() {
    const rgbArray = [];
    for (i=0;i<3;i++) {
    rgbArray[i] = Math.floor(Math.random()*256);
    }

    return rgbArray;
}

console.log(randomValue());

function createDiv() {
    let randomRgb;
    for (i=0;i<256;i++) {
       let newDiv = document.createElement('div');
       newDiv.onmouseover = ()=> {
        randomRgb = randomValue();
           newDiv.style.backgroundColor="rgb(randomRgb[0],randomRgb[1],randomRgb[2])";
       };
       container.appendChild(newDiv);
    }
    console.log(randomRgb);
}

createDiv();*/