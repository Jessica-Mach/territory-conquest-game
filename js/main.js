/*---------- TERRITORY OBJECT ----------*/
// Function creates a territory object
let makeTerritory = function(playerName, playerColor, position){
	let territory = {};
	territory.position = position;
	territory.moveToPos = 0;
	territory.color = playerColor;
	territory.owner = playerName;
	territory.defense = 1;
	territory.buildPenalty = 0;
	territory.attack = 1;
	territory.unit = 1;
	territory.turnType = 0; // 0: defend, 1: attack, 2: build, 3: support

	return territory;
};

let makePlayer = function(playerName, playerColor){
	let player = {};
	player.name = playerName;
	player.color = playerColor;
	player.totalUnits = 0;
	player.totalTerritories = 0;

	return player;
}

function generateMap(numOfPlayers) {
	// Get location of row 1 elements
	let numPlayers = numOfPlayers;

	for (let num = 0; num < numPlayers; num = num + 1){

		// Store row 1 elements
		let row1 = document.getElementById("game-row-1");
		let row1First = document.getElementById("top-row-left");
		let row1Insertion = document.getElementById("top-row-right");
		let row1ToAdd = document.createElement("div");
		let row1mid = document.getElementById("top-mid");

		// Store row 3 elements
		let row3 = document.getElementById("game-row-3");
		let row3First = document.getElementById("three-row-left");
		let row3Insertion = document.getElementById("three-row-right");
		let row3ToAdd = document.createElement("div");
		let row3mid = document.getElementById("three-mid");

		// Store row 5 elements
		let row5 = document.getElementById("game-row-5");
		let row5First = document.getElementById("five-row-left");
		let row5Insertion = document.getElementById("five-row-right");
		let row5ToAdd = document.createElement("div");
		let row5mid = document.getElementById("five-mid");

		// Store width and width string (differing width for even and odd rows)
		let widthOdd = 1;
		let widthStringOdd = "width string";

		// Update the width of the new div based on number of divs to be added
		if((numPlayers >= 2) && (numPlayers <= 8)){
		
			// Determine width of odd rows based on # of players
			widthOdd = (100 / (numPlayers + 2));
			widthStringOdd = "" + widthOdd + "%";
			
			// Update width of row 1 elements
			row1ToAdd.style.width = widthStringOdd;
			row1First.style.width = widthStringOdd;
			row1Insertion.style.width = widthStringOdd;
			row1mid.style.width = widthStringOdd;


			// Update width of row 3 elements
			row3ToAdd.style.width = widthStringOdd;
			row3First.style.width = widthStringOdd;
			row3Insertion.style.width = widthStringOdd;
			row3mid.style.width = widthStringOdd;

			// Update width of row 5 elements
			row5ToAdd.style.width = widthStringOdd;
			row5First.style.width = widthStringOdd;
			row5Insertion.style.width = widthStringOdd;
			row5mid.style.width = widthStringOdd;
			
			// Add class styles to new divs
			row1ToAdd.className = "top-row-mid";
			row3ToAdd.className = "territory-mid";
			row5ToAdd.className = "territory-mid";

			// Insert new divs
			row1.insertBefore(row1ToAdd, row1Insertion);
			row3.insertBefore(row3ToAdd, row3Insertion);
			row5.insertBefore(row5ToAdd, row5Insertion);
		

		}
	}

	for (let num = 0; num < numPlayers; num = num + 1){

		// Store row 2 elements
		let row2 = document.getElementById("game-row-2");
		let row2First = document.getElementById("two-row-left");
		let row2Insertion = document.getElementById("two-row-right");
		let row2ToAdd = document.createElement("div");
		let row2mid = document.getElementById("two-mid");

		// Store row 4 elements
		let row4 = document.getElementById("game-row-4");
		let row4First = document.getElementById("four-row-left");
		let row4Insertion = document.getElementById("four-row-right");
		let row4ToAdd = document.createElement("div");
		let row4mid = document.getElementById("four-mid");

		// Store row 6 elements
		let row6 = document.getElementById("game-row-6");
		let row6First = document.getElementById("bottom-row-left");
		let row6Insertion = document.getElementById("bottom-row-right");
		let row6ToAdd = document.createElement("div");
		let row6mid = document.getElementById("bottom-row-mid");

		// Store width and width string (differing width for even rows)
		let widthEven = 1;
		let widthStringEven = "width string";

		// Update the width of the new div based on number of divs to be added
		if((numPlayers >= 2) && (numPlayers <= 8)){
		
			// Determine width of odd rows based on # of players
			widthEven = (100 / (numPlayers + 2));
			widthStringEven = "" + widthEven + "%";

			// Update width of row 2 elements
			row2ToAdd.style.width = widthStringEven;
			row2First.style.width = widthStringEven;
			row2Insertion.style.width = widthStringEven;
			row2mid.style.width = widthStringEven;

			// Update width of row 4 elements
			row4ToAdd.style.width = widthStringEven;
			row4First.style.width = widthStringEven;
			row4Insertion.style.width = widthStringEven;
			row4mid.style.width = widthStringEven;


			// Update width of row 6 elements
			row6ToAdd.style.width = widthStringEven;
			row6First.style.width = widthStringEven;
			row6Insertion.style.width = widthStringEven;
			row6mid.style.width = widthStringEven;
			
			// Add class styles to new divs
			row2ToAdd.className = "territory-mid";
			row4ToAdd.className = "territory-mid";
			row6ToAdd.className = "bottom-row-mid";

			// Insert new divs
			row2.insertBefore(row2ToAdd, row2Insertion);
			row4.insertBefore(row4ToAdd, row4Insertion);
			row6.insertBefore(row6ToAdd, row6Insertion);
		}
	}
};

function assignPos(){
	let elements = document.getElementsByTagName('div');
	return elements;
};

let player1 = makePlayer("Francesca", "sienna");
let player2 = makePlayer("Luis", "gold");
let player3 = makePlayer("Howie", "purple");
let player4 = makePlayer("Sophie", "mediumseagreen");
let player5 = makePlayer("Rosa", "deepskyblue");
let player6 = makePlayer("Greta", "orange");

// Create map with # of players between and including 2 and 8
generateMap(8);

// Store array of territory positions on map
let posArr = assignPos();

// Store array of assigned territories
let terrArr = [];

terrArr.push(makeTerritory(player1.name, player1.color, posArr[0]));
terrArr.push(makeTerritory(player2.name, player2.color, posArr[1]));
terrArr.push(makeTerritory(player3.name, player3.color, posArr[2]));
terrArr.push(makeTerritory(player4.name, player4.color, posArr[3]));
terrArr.push(makeTerritory(player5.name, player5.color, posArr[32]));
terrArr.push(makeTerritory(player6.name, player6.color, posArr[65]));

function colorMap(posArr, terrArr){
	let positionArray = posArr;
	let territoryArray = terrArr;

	for(let i = 0; i < positionArray.length; i++){
		for(let j = 0; j < territoryArray.length; j++){
			if(positionArray[i] === territoryArray[j].position){
				positionArray[i].style.backgroundColor = territoryArray[j].color;
			}
		}
	}
};

colorMap(posArr, terrArr);



