
		var villians = ["catwoman","penguin","harley","riddler","clayface","deadshot"];

		var word = "";

		var wrongs = 0;

		// -- storage of answers -- //
		var answerArray = [];

		function init(){
			
			// -- function to pick random words -- //
			word = villians[Math.floor(Math.random() * villians.length)];

			// -- set up the answers
			answerArray = [];
			for (var i = 0; i < word.length; i++) {
			  answerArray[i] = "_";
			}

		    document.getElementById("answer").innerHTML = answerArray.join("");
			document.getElementById("message").innerHTML = "...or press QUIT to give up.";
		}
		// -- guessing
		init(guessOne);

		function guessOne() {
			// -- get a guess from the player
			var guess = document.getElementById("guess").value;

			var showThisMessage = "";

			// -- limit characters to 1
		    if (guess.length !== 1) {
				showThisMessage = "Please enter a letter, just one!";

			} else {
				
				var i=0; // -- looing into the villian array for letters 
				for (var i = 0; i < word.length; i++) {
					// -- update the game with the guess
					if (word[i] === guess) {
						answerArray[i] = guess;
						showThisMessage = "KAPOW! - " + guess + " - is in the answer!";
					}
				}

				var remaining_letters = 0;

				// recount the remaining letters
				for (i = 0; i < word.length; i++) {

					if (answerArray[i] === "_") {
					    remaining_letters += 1;
					}
				}
				// -- guessed correctly
				if (remaining_letters == 0) {
					showThisMessage = "BOOM! You guessed the word";
				}
				// -- wrong guess : lose point/life
				if (showThisMessage === "") {
					showThisMessage = "Try again, there's no - " + guess;
					wrongs ++;
					// -- GAME OVER!
					if(wrongs == 6) {
					alert("YOU LOSE! The Villians have taken Gotham!");
					document.location.reload();
					}

				// -- update guess board
					// document.getElementById("#lives").innerHTML = wrongs.join(" ");
					console.log(wrongs);
				}
				
				document.getElementById("answer").innerHTML = answerArray.join(" ");
				
				// -- clear last guess
				document.getElementById("guess").value = "";
			}
			document.getElementById("message").innerHTML = showThisMessage;
		}
		// -- quitting the game : show the answer
		function quit() {
			document.getElementById("message").innerHTML = "The word was "+word;
			for (var j = 0; j < word.length; j++) {
				answerArray[j] = word[j];
			}
			// -- solve word
			document.getElementById("answer").innerHTML = answerArray.join(" ");
		}