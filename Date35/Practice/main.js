const date = document.querySelector(".Date");

function time(days,month){

    let finish = new Date(`2022-${month}-${days}`);  
    let remainingTime = finish.getTime() - new Date();
    // 1000 * 60 * 60 * 24 = 86-400-000
    const myInterval = setInterval(()=>{
        
        let day = remainingTime % 86400000;
        date.textContent = "";          
        date.textContent = `${(remainingTime - day) / 86400000} day ${Math.floor(day / 3600000)}:${Math.floor(day / 60000) % 60}:${Math.floor(day / 1000) % 60}`;
        remainingTime -= 1000;
        if(remainingTime <= 0) clearInterval(myInterval);
      },1000);
}
console.log(time(31, 12));
