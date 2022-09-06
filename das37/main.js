const body = document.body;
const btn = document.querySelector("#btn");


function bodyColor(){
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
};

document.addEventListener("scroll", (e) =>{
    console.log(window.scrollY);
    if(window.scrollY % 100 === 0){ //e.target.scrollTop
        body.style.background = `${bodyColor()}`; 
    }
    if(window.scrollY >= 6494) btn.style.display = "block"; 
});

btn.addEventListener("click", e =>{
    window.scrollTo(0,0);
    // body.style.background = "black"
});



