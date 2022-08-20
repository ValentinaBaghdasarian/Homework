"use strict"

const poster = document.querySelector("header img");
const title = document.querySelector("title");
const advs = document.querySelectorAll("#main_promo .mp");
const films = document.getElementById("films");

const _DB = {
	movies: [
		"Logan", "Spider-Man", "The Seven Samurai",
		"Bonnie and Clyde","Reservoir Dogs", "Crid",
		"Doctor Zhivago", "The Deer Hunter", "Rocky"
	]
};

advs.forEach(adv => adv.remove());
poster.src = "img/bg2.jpg";

if (poster.src.slice(31) === "bg1.jpg") {
	poster.alt = "GEMINI MAN";
} else {
	poster.alt = "Hitman's wife's bodyguard";
}

title.textContent = poster.alt;



_DB.movies.forEach((film, index) => {
	films.innerHTML += `
		<p>
			${index + 1}. ${film}
			<span data-rm>&#128465</span>
		</p>
	`;
	document.querySelectorAll("[data-rm]")
	.forEach(rmBtn =>{
		rmBtn.addEventListener("click", (e) =>{
			e.target.parentElement.remove();
		});
	})
});

const mainPromo = document.querySelector("#main_promo");
const h1 = document.createElement("h1");
mainPromo.append(h1);
const input = document.querySelector("#add input");

input.addEventListener("input", e =>{
	h1.textContent = e.target.value;
})