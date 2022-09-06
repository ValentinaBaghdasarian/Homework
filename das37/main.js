const p = document.querySelector("#text");
const btn = document.querySelector("#btn");


function bodyColor(){
    return Math.floor(Math.random()*16777215).toString(16);
};

window.addEventListener("scroll", (e) =>{
   let i = 100;
    if(e.target.scrollTop === i){
        document.body.style.background = bodyColor(); 
        i += 100   
    }
    if(e.target.scrollTop === 1000) btn.style.display = "block"; 
});

btn.addEventListener("click", e =>{
    window.scrollTo(0,0);
});
