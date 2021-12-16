const container=document.createElement('div');
container.style.cssText = "justify-content: center; display: grid; grid-template-columns: repeat(16,20px); grid-template-rows: repeat(16,20px)";
document.body.appendChild(container);


function randomValue() {
    const rgbArray = [];
    for (i=0;i<3;i++) {
    rgbArray[i] = Math.floor(Math.random()*256);
    }

    return rgbArray;
}

console.log(randomValue());

function createDiv() {
    let rgbValue;
    for (i=0;i<256;i++) {
        rgbValue = randomValue();
       let newDiv = document.createElement('div');
       newDiv.onmouseover = ()=> {
           newDiv.style.backgroundColor=`rgb${(rgbValue[0],rgbValue[1],rgbValue[2])}`;
       };
       container.appendChild(newDiv);
    }
}

createDiv();  