//Functions

const anglePlayer = function() {
    Math
}

/************************/

//DOM Elements

const gameScreen = document.querySelector("#game")

//Variables & Lists

const mousepos = {x:0,y:0}

/************************/

//Event Listeners

window.addEventListener("resize", ()=>{
    if (window.innerWidth<1306 || window.innerHeight<736) {
        document.querySelector("#windowsizealertmessageheader").textContent = `Your browser viewport must be at least 736 pixels tall and 1306 pixels wide to be able to play this game. Current viewport size: ${window.innerWidth}, ${window.innerHeight}`
        gameScreen.style.visibility = "hidden"
        document.querySelector("#windowsizealertmessageheader").style.display = "block"
    }
})

gameScreen.addEventListener("mousemove", (e)=>{
    mousepos.x = e.clientY-((window.innerWidth-1280)/2);
    mousepos.y = e.clientY - 8;
});

if (window.innerWidth<1306 || window.innerHeight<736) {
    gameScreen.style.visibility = "hidden"
    document.querySelector("#windowsizealertmessageheader").style.display = "block"
}