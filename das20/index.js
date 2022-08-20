const art = {
	descriptionOfArt: "Վերածննդի առաջին հետքերը ի հայտ են գալիս Իտալիայում դեռ 13-րդ դարի վերջին, մասնավորապես Դանթեի գրական ստեղծագործություններում և Ջոտտոյի նկարներում",
	branchesOfArt: [],
	artFamousArtist: [],
	landOfArt: function(country){
		if(country === "Italia"){
			for(let i = 0; i < 1; i++){
				const yourAswerForArtist = prompt("Նշեք Իտալացի հայտնի նկարիչների անուններ", "");
				if(yourAswerForArtist != null && yourAswerForArtist.trim() != "" && +yourAswerForArtist != yourAswerForArtist){
					art.artfamousArtist.push(yourAswerForArtist.split(", ",25).sort().toLowerCase());
				}else { console.log("Խնդրում ենք հետևել կանոններին");
				 i--;
				}
			}
			art.artFamousArtist.forEach(item => console.log(`Ձեր նշած իտալացի հայտնի նկարիչներն են՝$ ${item}`));
		}
	},
	artBranches: function(){
		for(let i = 0; i < 1; i++){
			const yourAswer = prompt("Արվեստի ի՞նչ ճյուղեր գիտեք, խնդրում ենք նշել մի քանիսը և առանձնացնել իրարից ստորակետներով", "");
			if(yourAswer != null && yourAswer.trim() != "" && +yourAswer != yourAswer){
				art.branchesOfArt.push(yourAswer.split(", ",25).sort().toLowerCase());
			}else { console.log("Խնդրում ենք հետևել կանոններին"); i--;}
		}
	},
	
};
