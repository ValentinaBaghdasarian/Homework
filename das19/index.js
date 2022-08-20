const personalMovieDB = {
	count: "",
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	myNumberOfFilms(numberOfFilms){
		
		while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms) || numberOfFilms < -1) {
			if (numberOfFilms === 0) {
				break;
			}
			numberOfFilms = parseInt(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", ""));
		}
		personalMovieDB.count = +personalMovieDB.count + numberOfFilms;
		return numberOfFilms;
	},

	rememberMyFilms () {
		for (let i = 0; i < 2; i++) {
			const filmName = prompt("Ո՞ր ֆիլմն եք վերջերս դիտել", "");
			if(filmName != null &&  filmName.trim() != "" && filmName.length < 50){
				for(let j = 1; j < 2 ;j ++){
					const rating = prompt("Ինչքա՞ն այդ ֆիլմը կգնահատեիք", "");		
					if (!isNaN(rating) &&  rating != null && rating.trim() != "" &&  rating >= 0 && rating <= 10){
						personalMovieDB.movies[filmName] = rating;
						console.log(`Դուք ${filmName} ֆիլմի համար տվել եք ${rating} գնահատականը`);
					}else{
						console.log("Խնդրում ենք գնահատել ֆիլմը");
						j--;
					}
				}
			}else {
				console.log("Խնդրում ենք մուտքագրել ֆիլմի անվանումը");
				i--;
			}
		}
	},

	detectUserPersonalLevel (numberOfFilms) {
		if (numberOfFilms < 10) {
			console.log("Դուք նայել եք բավականին քիչ ֆիլմեր");
		} else if (numberOfFilms < 30) {
			console.log("Դուք ֆիլմի սիրահար եք");
		} else if (numberOfFilms >= 30) {
			console.log("Դուք կինոման եք !!!");
		} else {
			console.log("Տեղի է ունեցել խնդիր, ըստ երևույթի դուք թիվ չեք նշել");
		}
	},

	showMyDB() {
		 (personalMovieDB.privat) ? console.log(personalMovieDB): console.log("Մեր տվյալների բազան փակ է");
	},

	isVisibleMyDB(){
		(personalMovieDB.privat) ? personalMovieDB.privat = !personalMovieDB.privat : personalMovieDB.privat = !personalMovieDB.privat;
	},
	
	yourFavoriteGenres(){
        for(let i = 0; i <= 2; i++){
           const geners = prompt(` Ձեր նախընտրելի ժանրը ${i + 1}`, "");
            (geners != null && geners != "" && +geners != +geners && geners.length <=20) ? personalMovieDB.genres.push(geners): i-- ; 
        }

		personalMovieDB.genres.forEach((item,i) => console.log(`${i + 1} ժանր՝ ${item}`))
    }

};

const {myNumberOfFilms, rememberMyFilms, detectUserPersonalLevel, showMyDB, yourFavoriteGenres, isVisibleMyDB} = personalMovieDB;
myNumberOfFilms(parseInt(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", "")));
detectUserPersonalLevel(personalMovieDB.count);
rememberMyFilms();
isVisibleMyDB();
showMyDB();
yourFavoriteGenres();





