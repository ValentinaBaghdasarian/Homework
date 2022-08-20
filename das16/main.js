debugger
let numberOfFilms = +prompt("Քանի՞ ֆիլմ եք դիտել այսօր", "");
while(numberOfFilms == null  || numberOfFilms < 0 || numberOfFilms != numberOfFilms){
    console.log("Տեղի է ունեցել խնդիր, ըստ երևույթի դուք թիվ չեք նշել");
    numberOfFilms = +prompt("Քանի՞ ֆիլմ եք դիտել այսօր", "");
} if (numberOfFilms < 10) {
    console.log("Դուք նայել եք բավականին քիչ ֆիլմեր");
} else if (numberOfFilms < 30) {
    console.log("Դուք ֆիլմի սիրահար եք");
} else if (numberOfFilms >= 30) {
    console.log("Դուք կինոման եք !!!");
} 


const personalMovieDB = {
	count: numberOfFilms >= 1 ? numberOfFilms : 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
    showMyDB(val){
         (val !== false)? console.log(personalMovieDB): console.log("error");
    },
    yourFavoriteGenres(){
        for(let i = 0; i <= 2; i++){
           const geners = prompt(` Ձեր նախընտրելի ժանրը ${i + 1}`, "");
            (geners != null && geners != "" && +geners != +geners && geners.length <=20) ? personalMovieDB.genres.push(`${i + 1} ժանր՝ ${geners}`): i-- ; 
        }
        return personalMovieDB.genres 
    }
};

console.log(personalMovieDB.showMyDB(personalMovieDB.privat))
console.log(personalMovieDB.yourFavoriteGenres())

for (let i = 0; i < 2; i++) {
	const a = prompt("Ո՞ր ֆիլմն եք վերջերս դիտել", "");
	const b = prompt("Ինչքա՞ն այդ ֆիլմը կգնահատեիք", "");

	if (a != null && b != null && a != "" && b != "" && a.length < 50 &&  +a !== +a && +b === +b && 0 <= +b && +b <= 10) {
		personalMovieDB.movies[a.trim()] = b.trim();
		console.log("DONE");
	} else {
		console.log("ERROR");
		i--;
	}
}

