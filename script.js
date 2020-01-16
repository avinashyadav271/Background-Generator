

let colorButton1= document.querySelector("#colorButton1");
let colorButton2= document.querySelector("#colorButton2");

console.log(colorButton2.value);


function colorChange(){

    // document.querySelector("#body").style.background="linear-gradient(to right,"+color1.value +","+color2.value+")";
    document.getElementById("bodyColor").style.background="linear-gradient(to right,"+colorButton1.value +","+colorButton2.value+")";
}

function backgroundColor(){
    document.getElementById("bodyColor").style.background= "linear-gradient(to right, "+colorButton1.value+", "+colorButton2.value+")";

console.log(colorButton1.value);

}





colorButton1.addEventListener("input", backgroundColor);
colorButton2.addEventListener("input",backgroundColor);
