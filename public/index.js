window.onload = function() {
	if(!window.location.hash) {
		window.location = window.location + '#loaded';
		window.location.reload();
	} 
} 

// -----------------Text Effects:--------------------

// text 1-----
var text1 = document.querySelector("#text1");
var ctx = text1.getContext("2d");
var firstNameGradient = ctx.createLinearGradient(6,38,6,70);
firstNameGradient.addColorStop(0, 'yellow'); 
firstNameGradient.addColorStop(1, 'red');
ctx.fillStyle = firstNameGradient; 
ctx.font = "bold 40px Bebas Neue";  
ctx.textAlign = "center";
ctx.fillText("Sample Text", text1.width / 2, text1.height / 2);

// text 2-----
var text2 = document.querySelector("#text2");
var ctx = text2.getContext("2d"); 
ctx.font = "40px Licorice";
ctx.textAlign = "center"; 
ctx.fillStyle = "white";
ctx.fillText("Sample Text", text2.width / 2, text2.height / 2);
// ctx.strokeText("Sample Text", text2.width / 2, text2.height / 2);

// text 3-----
var text3 = document.querySelector("#text3"); 
var ctx = text3.getContext("2d"); 
ctx.font = "40px Shizuru";
ctx.textAlign = "center";
ctx.fillStyle = "red";
ctx.fillText("Sample Text", text3.width / 2.02, text3.height / 2);

// text 4-----
var text4 = document.querySelector("#text4"); 
var ctx = text4.getContext("2d");
ctx.font = "40px Ole";
ctx.textAlign = "center";
ctx.fillStyle = "blue";
ctx.fillText("Sample Text", text4.width / 2, text4.height / 2);

// text 5-----
var text5 = document.querySelector("#text5"); 
var ctx = text5.getContext("2d");
ctx.font = "40px Londrina Outline";
ctx.textAlign = "center";
ctx.fillStyle = "yellow"; 
ctx.fillText("Sample Text", text5.width / 2, text5.height / 2);

// text 6-----
var text6 = document.querySelector("#text6");
var ctx = text6.getContext("2d");
var firstNameGradient = ctx.createLinearGradient(18,1,10,20);
firstNameGradient.addColorStop(0, 'black'); 
firstNameGradient.addColorStop(1, 'white');
ctx.fillStyle = firstNameGradient; 
ctx.font = "40px Bebas Neue";  
ctx.textAlign = "center";
ctx.fillText("Sample Text", text6.width / 2, text6.height / 2);

// text 7-----
var text7 = document.querySelector("#text7");
var ctx = text7.getContext("2d");
var firstNameGradient = ctx.createLinearGradient(6,64,6,70);
firstNameGradient.addColorStop(0, 'black'); 
firstNameGradient.addColorStop(1, 'white');
ctx.fillStyle = firstNameGradient; 
ctx.font = "30px Kumar One Outline";  
ctx.textAlign = "center";
ctx.fillText("Sample Text", text7.width / 2, text7.height / 2);


// -----------------:Text Effect ends--------------------



const effectcontroller = document.querySelectorAll(".effectcontroller");
const text = document.querySelectorAll(".text");
const text1input = document.querySelectorAll(".text1input");
const btn1 = document.querySelectorAll(".btn1");
const btn2 = document.querySelectorAll(".btn2");

btn1.forEach((e) => {
    e.addEventListener("click", () => {
        var targetCanvas = e.parentElement.parentElement.children[1];
        // const color = e.parentElement.children[1].children[1].value;
        var context = targetCanvas.getContext("2d");
        var input = e.parentElement.children[0].value;

        if(input != ""){
            context.clearRect(0, 0, targetCanvas.width,targetCanvas.height);
            // context.fillStyle = color;
            context.fillText(input, targetCanvas.width / 2,targetCanvas.height / 2);
            // context.strokeText(input, text2.width / 2, text2.height / 2);
        }
       

        const download1 = e.parentElement.children[2];
        const download2 = e.parentElement.children[3];
        const item1 = targetCanvas.toDataURL("image/png",1)
        const item2 = targetCanvas.toDataURL("image/jpeg",1)
        download1.href = item1;
        download2.href = item2;

    });
});
