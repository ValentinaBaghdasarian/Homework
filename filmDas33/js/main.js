
const poster = document.querySelector("header img");
const advs = document.querySelectorAll("#main_promo .mp");
const filmsBlock = document.getElementById("films");
const form = document.querySelector("#add");
const signInModalBtn = document.querySelector("[data-in]");
const signInModal = document.querySelector("[data-in-modal]");

const _DB = {
  movies: [
    "Logan", "Spider-Man", "The Seven Samurai",
    "Bonnie and Clyde", "Reservoir Dogs", "Crid",
    "Doctor Zhivago", "The Deer Hunter", "Rocky"
  ]
};
const favoriteFilms = [];

function init() {
  advs.forEach(adv => adv.remove());
  poster.src = "img/bg2.jpg";
  if (poster.src.slice(31) === "bg1.jpg") {
    poster.alt = "GEMINI MAN";
  } else {
    poster.alt = "Hitman's wife's bodyguard";
  }
  document.title = poster.alt;
}
init();



form.addEventListener("submit", (e) => {
  e.preventDefault();
  let val = e.target.firstElementChild.value.trim();
  val = val[0].toUpperCase() + val.slice(1).toLowerCase();
  const check = document.querySelector("input[name='favorite']");
  if (val !== "" && val !== "<" && val !== ">" && val !== "/" && val !== "?") {
    if (check.checked) {
      favoriteFilms.push(val);
      console.log(`This film <${val}> added to favorite`);
    }
    _DB.movies.push(val);
  }

  setSort(_DB.movies);
  createFilmsList(_DB.movies, filmsBlock);
  e.target.reset();
});


function setSort(arr) {
  arr.sort();
}


function create(arr, parent) {
  arr.forEach((film, index) => {
    if (index < 20) {
      if (favoriteFilms.indexOf(film) !== -1) {
        parent.innerHTML += `
						<p style="color:blue"> 
						  ${index + 1}. ${film.length >= 21 ? `${film.slice(0, 21)}...` : film}
							<span data-rm>&#128465;</span>
						</p>
					`;
      } else {
        parent.innerHTML += `
						<p> 
						  ${index + 1}. ${film.length >= 21 ? `${film.slice(0, 21)}...` : film}
							<span data-rm>&#128465;</span>
						</p>
					`;
      }
    }
  });
}


function createFilmsList(filmsArr, parent) {
  parent.innerHTML = "";
  setSort(filmsArr);
  filmsArr.forEach((film, index) => {
     if (parent.children.length < 20) {
      if(favoriteFilms.indexOf(film) !== -1){
         parent.innerHTML += `
			  <p style="color:blue">
				  ${index + 1}. ${film.length >= 21 ? film.slice(0, 21) + '...' : film}
          <span data-rm>&#128465</span>
			</p>
		`;
      }else{
        parent.innerHTML += `
			    <p> 
			    ${index + 1}. ${film.length >= 21 ? `${film.slice(0, 21)}...` : film}
				  <span data-rm>&#128465;</span>
			    </p>
		`;
      }
     }else{
       let random = function (arr) {
         let arr2;
         for (let i = 20; i > 0; i--) {
           let current = arr[i];
           let rand = Math.floor(Math.random() * (i + 1));
           arr[i] = arr[rand];
           arr[rand] = current;
           arr2 = arr;
         }
         create(arr2, filmsBlock);
       };
       random(_DB.movies);
     }
     
  });
  removeFilmFromList('[data-rm]');

}


function removeFilmFromList(selector) {
  setSort(_DB.movies);
  document.querySelectorAll(selector).forEach((btn, index) => {
    btn.addEventListener("click", () => {
      btn.parentElement.remove();
      _DB.movies.splice(index, 1);
      createFilmsList(_DB.movies, filmsBlock);
    });
  });
}

createFilmsList(_DB.movies, filmsBlock);


// my code

signInModalBtn.addEventListener("click", e =>{
    e.preventDefault();
    // e.stopImmediatePropagation();
    e.cancelBubble = true;
    signInModal.classList.add("modal_wrapper-active");
});


window.addEventListener("click", e => {
  if(e.target && !e.target.matches("h3, input, form")){
   signInModal.classList.remove("modal_wrapper-active");
  }
});



const iconMenu = document.querySelector(".icon1");
const menu = document.querySelector("#menu");


iconMenu.addEventListener("click",e =>{
  if(menu.style.display === "flex"){
    menu.style.display = "none";
  }else{
    menu.style.display = "flex";
  }
});




