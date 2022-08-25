
// 1․ ստեղծում եք 2 հատ դիվ, տարբեր գույների, ու tocuhEvent-ով էնպես եք անում, որ նախ դիվերը հնարավոր լինի տեղաշարժել, ու բացի
//  տեղաշարժելուց, երբ որ դիվերը կպնեն իրար թեկուզ 1պիքսելով պետք ա գույները փոխվեն, այսինքն առաջին դիվի գույնը գնա երկրորդ դիվին, 
//  երկրորդ դիվի գույնը առաջին դիվին

const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");
const round = document.querySelector("#round");
const div = document.querySelector("#globalDiv");

box1.style.background = "#006262";
box2.style.background = "#EB4C42";

div.addEventListener("touchmove", e =>{
    box1.addEventListener("touchmove", e =>{
        const x = e.touches[0].clientX;
        const y = e.touches[0].clientY;
        e.target.style.cssText = `transform : translateX(${x}px) translateY(${y}px)`;
    });


    box2.addEventListener("touchmove", e =>{
        const x = e.touches[0].clientX;
        const y = e.touches[0].clientY;
        e.target.style.cssText = `transform : translateX(${x}px) translateY(${y}px)`;
    });

        if(box1.clientX  === box2.clientX && box1.clientY === box2.clientY){
            box1.style.cssText += `background: #EB4C42`;
            box2.style.cssText += `background: #006262`;
        }    
});

    


// 2․ ստեղծում եք առանձին դիվ, որը պետք ա կլոր լինի, ու բրաուզերի իվենթների միջոցով (drag) որոնք չենք անցել, պետք է անեք այնպես որ
//  կլորը կարողանաք տեղափոխել ու ձեր դրած տեղը դնել 


round.addEventListener("dragend", e =>{
  function roundMove(pageX, pageY) {
    e.target.style.left = `${pageX - e.target.offsetWidth}px`;
    e.target.style.top = `${pageY - e.target.offsetHeight}px`;
  }
  roundMove(e.pageX, e.pageY);
});