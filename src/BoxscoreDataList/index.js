import React from 'react';


// passing props from boxscore container
function BoxscoreDataList (props) {
	
	//map needs to be passed an array, not an object.
	let selectedGamesGameTotals
	// console.log(props.selectedGames);
	if (props.selectedGames.length === 0) {
		return null
	} else {
		Promise.all(props.selectedGames.map(game => {
		// console.log('Fetching:', game.gameId)
		let gameTotals = props.getGameTotals(game.gameId);
		return gameTotals;
		})).then(values => {
			let selectedGamesGameTotals = values;
			console.log('selectedGamesGameTotals in promiseall:', selectedGamesGameTotals)
		})
		// console.log(selectedGamesGameTotals)
	}
	
	let selectedGamesPlayerInfo
	// console.log(props.selectedGames);
	if (props.selectedGames.length === 0) {
		return null
	} else {
		Promise.all(props.selectedGames.map(game => {
		// console.log('Fetching:', game.gameId)
		let playerInfo = props.getPlayerInfoByGame(game.gameId);
		return playerInfo;
		})).then(values => {
			let selectedGamesPlayerInfo = values;
			console.log('selectedGamesPlayerInfo in promiseall:', selectedGamesPlayerInfo)
		})
		// console.log(selectedGamesGameTotals)
	}

	return(
	    <React.Fragment>
	      <h4>Game Totals List</h4>
	      <ul>
	        {}
	      </ul>
	    </React.Fragment>
    )

}


export default BoxscoreDataList;