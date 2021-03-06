import React, { Component } from 'react';
import GameListToday from '../GameListToday';
import GameListSelectedDate from '../GameListSelectedDate';
import GameInfo from '../GameInfo';
import SelectedDateSummary from '../SelectedDateSummary';
import NoGamesScheduled from '../NoGamesScheduled';
// import DropdownExampleControlled from '../DateInputFormV1';
import DateInput from '../DatePicker';
import { Grid, Segment, Dimmer, Loader, Button, Visibility } from 'semantic-ui-react';


// https://react.semantic-ui.com/layouts/sticky/
// https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/src/layouts/StickyLayout.js
// https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
const overlayStyle = {
  // float: 'left',
  // margin: '0em 3em 1em 0em',
  float: 'right',
  margin: '1em 1em 1em 1em',
}

const fixedOverlayStyle = {
  ...overlayStyle,
  position: 'fixed', // Fixed/sticky position
  // top: '80px',
  zIndex: 60,
  bottom: '0px', // Place the button 0px from the bottom of the page 
  right: '0px', // Place the button 0px from the right
}

const overlayButtonStyle = {
  position: 'relative',
  // left: 0,
  transition: 'left 0.5s ease',
  padding: '1em 3em', // Controls the size of the button
  margin: '0em',
  display: 'none', // Hidden by default
}

const fixedOverlayButtonStyle = {
  ...overlayButtonStyle,
  // left: '800px',
  display: 'block', // Show it
}


class BoxscoreContainer extends Component {
	constructor() {
		super();
		// this is the initial "state" of our boxscore object
	 	// this is mimicking the structure of our API information. 
	    this.state = {
	    	todaysGames: [], //added this to dry the code
	      	selectedGames: [], //added this to dry the code
	      	gamesFinished: [], //want to have an array of finished games
	      	gameTotalsByGame: [], //receiving fetched data from the Promise.all
	      	playerInfoByGame: [], //receiving fetched data from the Promise.all
	      	playerInfoByGameName: [], //receiving fetched data from the Promise.all
	      	selectedDay: null, //added this here to get the selectedDay from the calendar
	      	isLoading: false, //need this to display loading alert
	      	today: {// need to define all key-value pairs (properties) if you want to lift state
		      	api: {
		      		filters: [],
		      		games: [],
		      		message: "",
		      		results: 0,
		      		status: 0
		      	}
	      	},
	      	todayPlusOne: {// need to define all key-value pairs (properties) if you want to lift state
		      	api: {
		      		filters: [],
		      		games: [],
		      		message: "",
		      		results: 0,
		      		status: 0
		      	}
		    },
		    selectedDate: {// need to define all key-value pairs (properties) if you want to lift state
		      	api: {
		      		filters: [],
		      		games: [],
		      		message: "",
		      		results: 0,
		      		status: 0
		      	}
		    },
		    selectedDatePlusOne: {// need to define all key-value pairs (properties) if you want to lift state
		      	api: {
		      		filters: [],
		      		games: [],
		      		message: "",
		      		results: 0,
		      		status: 0
		      	}
		    },
		    overlayFixed: false,
		    isHorScroll: false, // checks if element is scrolled horizontally
		    gameScoreFixed: false,
		}
	}
	
	// this function converts a date string to YYYY-MM-DD
	convertDateStr = (dateString) => {
		let inputDateYear = dateString.getFullYear();//Get the year as a four digit number (yyyy)
		// console.log(inputDateYear);
		
		let inputDateMonth = dateString.getMonth() + 1;//Get the month as a number (0-11)
		// console.log(typeof inputDateMonth);//number
		let iDMStr = inputDateMonth.toString();
		// console.log(iDMStr.length);
		if(iDMStr.length === 1){
			inputDateMonth = "0" + iDMStr
			// console.log(inputDateMonth)
		} else {
			inputDateMonth = iDMStr
			// console.log(inputDateMonth)
		}

		let inputDateDay = dateString.getDate();//Get the day as a number (1-31)
		let iDDStr = inputDateDay.toString();
		if(iDDStr.length === 1){
			inputDateDay = "0" + iDDStr
			// console.log(inputDateDay)
		} else {
			inputDateDay = iDDStr
			// console.log(inputDateDay)
		}

		let inputDate = inputDateYear + "-" + inputDateMonth + "-" + inputDateDay
		// console.log(inputDate);

		return inputDate
		
	};

	// This function gives us the correct day's information due to the strange UTC time stuff
	// correctDayFilter = (game, filterDateString, expectEqual) => {
	// 	let dateStringStartTime = new Date(game.startTimeUTC);
	// 	// console.log(dateStringStartTime);
	// 	let localeDateStringStartTime = dateStringStartTime.toLocaleDateString();
	// 	// console.log(localeDateStringStartTime);

	// 	let dateStringSelectedDay = new Date(filterDateString);
	// 	// console.log(dateStringSelectedDay);
	// 	let localeDateStringSelectedDay = dateStringSelectedDay.toLocaleDateString();
	// 	// console.log(localeDateStringSelectedDay);		

	// 	if (expectEqual) {
	// 		return localeDateStringStartTime === localeDateStringSelectedDay
	// 	} else {
	// 		return localeDateStringStartTime !== localeDateStringSelectedDay
	// 	}
		
	// }

	getSelectedDateGameData = async (day, today=false) => {
		// page defaults to today's date
		// when another date is selected update API call
		console.log('SELECTEDDDDDDDAY', day);
		this.setState({
	      	selectedGames: [],
	      	gameTotalsByGame: [],
	      	playerInfoByGame: [],
	      	playerInfoByGameName: [],
	      	isLoading: true,
	    })

		let dateStringAPI;
		if (today) {
			dateStringAPI = new Date();//today
		} else {
			dateStringAPI = new Date(day);//selected day
		}

		let dSAPIConverted = this.convertDateStr(dateStringAPI);
		// console.log(dSAPIConverted);

		// Add 1 day to dateStringAPI
		let time = dateStringAPI.getTime(); //Get the time (milliseconds since January 1, 1970)
		// console.log(time);
		let oneDay = 1000*60*60*24; //1000 milliseconds times 60 seconds times 60 minutes times 24 hours 
		// console.log(oneDay);
		let timePlusOne = time + oneDay;
		// console.log(timePlusOne);
		let dateStringAPIPlusOne = new Date(timePlusOne);
		// console.log(dateStringAPIPlusOne);
		let dSAPIPOConverted = this.convertDateStr(dateStringAPIPlusOne);
		// console.log(dSAPIPOConverted);
		

		try {
	      	const selectedDate = await 
	      		fetch(`https://api-nba-v1.p.rapidapi.com/games/date/${dSAPIConverted}`, {
					"method": "GET",
					"headers": {
						"x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
						"x-rapidapi-key": "d6b3a2676dmsh79d3be25f7311bfp17de4ejsn779b55e60866"
					}
				})

			const selectedDatePlusOne = await 
				fetch(`https://api-nba-v1.p.rapidapi.com/games/date/${dSAPIPOConverted}`, {
					"method": "GET",
					"headers": {
						"x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
						"x-rapidapi-key": "d6b3a2676dmsh79d3be25f7311bfp17de4ejsn779b55e60866"
					}
				})

	      	const parsedSelectedDate = await selectedDate.json();
	      	const parsedSelectedDatePlusOne = await selectedDatePlusOne.json();
	      	// console.log(parsedSelectedDate);
			// console.log(parsedSelectedDatePlusOne);
	      	
			// // This creates a selected games array
	      	// const selectedGames = parsedSelectedDate.api.games.filter((game) => {
	      	//	// Filter for select dates games return games corrected for timezone 
			// 	return this.correctDayFilter(game, dateStringAPI, true);
			// }).concat(parsedSelectedDatePlusOne.api.games.filter((game) => {
			// 	// Filter for selected date by correcting timezone of day plus one
			// 	return this.correctDayFilter(game, dateStringAPIPlusOne, false);
			// }));

			// console.log('Selected Day Games: ', selectedGames);

			// Update after March 11, 2020 Postponements due to coronavirus
			// This creates an updated selected games array
			const sDPlusSDPOArr = parsedSelectedDate.api.games
				.concat(parsedSelectedDatePlusOne.api.games);
			// console.log(sDPlusSDPOArr);

			const updatedSelectedGames = sDPlusSDPOArr.filter((game) => {
				// console.log(dateStringAPI);
				const date = new Date(dateStringAPI); // comparison date
				// console.log(date);
				// console.log(date.toLocaleDateString()); // M/D/YYYY
				const startTimeUTC = game.startTimeUTC;
				// console.log(startTimeUTC);
				// console.log(startTimeUTC.length);
				const startTimeUTCTLDS = new Date(startTimeUTC).toLocaleDateString();
				// console.log(startTimeUTCTLDS); // M/D/YYYY
				const timeSTUTC = new Date(startTimeUTC).getTime();
				// console.log(timeSTUTC);
				const timeSTUTCPlusOne = timeSTUTC + oneDay;
				// console.log(timeSTUTCPlusOne);
				const timeSTUTCPlusOneTLDS = new Date(timeSTUTCPlusOne).toLocaleDateString();
				// console.log(timeSTUTCPlusOneTLDS);
			
				return (startTimeUTC.length === 10
						?	timeSTUTCPlusOneTLDS === date.toLocaleDateString()
						: 	startTimeUTCTLDS === date.toLocaleDateString()
				)
			});
			console.log('Updated Selected Games: ', updatedSelectedGames);

			// Check to see if the updatedSelectedGames array is valid here
			// seasonYear cannot be 0 and league must equal standard
			// this fixes an occasional bug in the API provided data, see Notes.txt
			let selectedGamesAdj = updatedSelectedGames.filter((game) => {
				return (
					game.seasonYear !== 0 &&
					game.league === "standard")
			})

			console.log('Selected Games Adjusted: ', selectedGamesAdj);

			let gamesFinished = selectedGamesAdj.filter((game) => {
				return game.statusGame === "Finished";
			})		
			console.log('Games Finished: ', gamesFinished);
			this.setState({
				gamesFinished: gamesFinished,
			})

			//Fill the gameTotalsByGame array here
			let selectedGamesGameTotals
			await Promise.all(selectedGamesAdj.map(game => {
				// console.log('Fetching:', game.gameId)
				let gameTotals = this.getGameTotalsDataForOneGame(game.gameId);
				return gameTotals;
				})).then(values => {
					let selectedGamesGameTotals = values;
					this.setState({
				      gameTotalsByGame: selectedGamesGameTotals,
				    })
					// console.log('selectedGamesGameTotals in promiseall:', selectedGamesGameTotals);
					// console.log(selectedGamesGameTotals[0].api.statistics[0].assists);	
				})
			
			//Fill the playerInfoByGame array here
			let selectedGamesPlayerInfo
			await Promise.all(selectedGamesAdj.map(game => {
				// console.log('Fetching:', game.gameId)
				let playerInfo = this.getPlayerInfoForOneGame(game.gameId);
				return playerInfo;
				})).then(values => {
					let selectedGamesPlayerInfo = values;
					this.setState({
				      playerInfoByGame: selectedGamesPlayerInfo,
				    })
					// console.log('selectedGamesPlayerInfo in promiseall:', selectedGamesPlayerInfo);
					// console.log(selectedGamesPlayerInfo[0].api.statistics.length);
				})

			// Fill the playerInfoByGameName array here
			// console.log(this.state.playerInfoByGame);
			// want the game to be finished before getting player name
			// console.log(selectedGames[0].vTeam.score.points);

			// ***Think about showing In Progress Boxscores***
			
			if (gamesFinished.length > 0 
				&& gamesFinished[0].vTeam.score.points > 0){
				let multipleGames = [];
				// console.log(this.state.playerInfoByGame.length);
				// console.log(gamesFinished.length);
					for (let i=0; i<gamesFinished.length; i++){
						let playerNamesForOneGame
							await Promise.all(this.state.playerInfoByGame[i].api.statistics.map(player => {
							// console.log('Player is: ', player);
							// console.log('Fetching:', player.playerId)
							let playerName = this.getPlayerName(player.playerId);
							return playerName;
							})).then(values => {
								let playerNamesForOneGame = values;
								this.setState({
							      playerInfoByGameName: playerNamesForOneGame,
							    })	
								// console.log('playerNamesForOneGame in promiseall:', playerNamesForOneGame);
								console.log(playerNamesForOneGame[0].api.players[0].lastName);		
							})
							
							multipleGames[i] = this.state.playerInfoByGameName;
							this.setState({
							      playerInfoByGameName: multipleGames,
							    })
							// console.log('multiple games: ', multipleGames);
					}
			}
		

			if (today) {
				this.setState({
					todaysGames: selectedGamesAdj,
					today: parsedSelectedDate,
					todayPlusOne: parsedSelectedDatePlusOne,
					tInputDate: dateStringAPI,
					tInputDatePlusOne: dateStringAPIPlusOne,
					isLoading: false,
				})
			} else {
                this.setState({
                	selectedGames: selectedGamesAdj, // maybe selectedGamesAdj OR gamesFinished
				    selectedDate: parsedSelectedDate,
				    selectedDatePlusOne: parsedSelectedDatePlusOne,
				    sInputDate: dateStringAPI,
				    sInputDatePlusOne: dateStringAPIPlusOne,
				    isLoading: false,
			 	})
			}
			
			console.log(this.state);
		} catch(err){
			console.log(err);
		}
		
	}	

	getGameTotalsDataForOneGame = async (gameId) => {
		// console.log('GameID: ', gameId);

		try {														
			const gameTotals = await fetch('https://api-nba-v1.p.rapidapi.com/statistics/games/gameId/' + gameId, {
				"method": "GET",
				"headers": {
					"x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
					"x-rapidapi-key": "d6b3a2676dmsh79d3be25f7311bfp17de4ejsn779b55e60866"
				}
			})

		const parsedGameTotals = await gameTotals.json();
		// console.log(parsedGameTotals);	
		return parsedGameTotals;

		} catch(err) {
			console.log(err);
		}

	}

	getPlayerInfoForOneGame = async (gameId) => {
		// console.log('GameID: ', gameId);

		try {														
			const playersByGame = await fetch('https://api-nba-v1.p.rapidapi.com/statistics/players/gameId/' + gameId, {
				"method": "GET",
				"headers": {
					"x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
					"x-rapidapi-key": "d6b3a2676dmsh79d3be25f7311bfp17de4ejsn779b55e60866"
				}
			})

		const parsedPlayersByGame = await playersByGame.json();
		// console.log(parsedPlayersByGame);	
		return parsedPlayersByGame;

		} catch(err) {
			console.log(err);
		}

	}

	getPlayerName = async (playerId) => {
		// console.log('PlayerID: ', playerId);

		try {														
			const playerName = await fetch('https://api-nba-v1.p.rapidapi.com/players/playerId/' + playerId, {
				"method": "GET",
				"headers": {
					"x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
					"x-rapidapi-key": "d6b3a2676dmsh79d3be25f7311bfp17de4ejsn779b55e60866"
				}
			})

		const parsedPlayerName = await playerName.json();
		// console.log(parsedPlayerName);
		return parsedPlayerName;

		} catch(err) {
			console.log(err);
		}

	}

	componentDidMount(){
    // get called once, after the initial render
    // is the component on the dom? ComponentDidMount
    // any calls to an external data source that we want connected
    // as soon as our app is loaded we call it in componentDidMount
    	this.getSelectedDateGameData(null, true);
    	// window.addEventListener("scroll", this.getElementPosition);

  	}

  	// Remove the event listener when the component is unmount.
	componentWillUnmount() {
		// window.removeEventListener("scroll", this.getElementPosition);
	}

  	getInputDate = (day, selected) => {
	    // e.preventDefault();
	    // console.log('Lifted day', day)
    	 this.setState({
	      selectedDay: selected ? undefined : day,
	    });
    	this.getSelectedDateGameData(day, false)
    }

    stickOverlay = () => this.setState({ overlayFixed: true });
    unStickOverlay = () => this.setState({ overlayFixed: false });

    scrollToTop = () => {
    	document.documentElement.scrollTop = 0;
    }

    // stickGameScore = () => this.setState({ gameScoreFixed: true });
    // unstickGameScore = () => this.setState({ gameScoreFixed: false });

    //See if this works with the ref
    handleScrollE = (e) => { // this works on an element inside a container with scrollbars
    	let element = e.target;
    	const leftScrollPos = element.scrollLeft;
    	const topScrollPos = element.scrollTop;
    	const tagName = element.tagName;
    	console.log('e: ', e);
    	console.log('element: ', element);
    	console.log('leftScrollPos: ', leftScrollPos);
    	console.log('topScrollPos: ', topScrollPos);
    	console.log('tagName: ', tagName);	

    	this.setState({
    		isHorScroll: leftScrollPos !== 0 ? true : false
    	})	
    }


    // https://plainjs.com/javascript/styles/get-the-position-of-an-element-relative-to-the-document-24/
    // https://www.w3adda.com/react-js-tutorial/reactjs-refs
    getElementPosition = (e) => {// works with a ref, but get TypeError: e.getBoundingClientRect is not a function when added to the componentdidmount/willunmount eventlisteners
    	let rect = e.getBoundingClientRect(),
    	scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    	scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    	console.log('e: ', e);
    	console.log('rect: ', rect);
    	return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

  	render() {
	  	let today = new Date();
	  	// console.log(today);
	  	// console.log(this.state.selectedDay);
	  	// console.log(this.state.selectedGames.length);
	  	const { overlayFixed } = this.state;

	  	

	  	return(
	  		<React.Fragment>
      		{/*<div className='boxscore-container' onScroll={(e) => this.handleScrollE(e)}>*/}
      		{/*<div className='boxscore-container-scroll'>*/}
      			<Grid columns={3} stackable>
				    <Grid.Row stretched>
				      	<Grid.Column>
				        	<Segment>
				        		<GameListToday 
				        			todaysGames={this.state.todaysGames}
				        			isLoading={this.state.isLoading}
				        		/>
      						</Segment>
				      	</Grid.Column>
					   	<Grid.Column>
					        <Segment>
					        	<DateInput 
					        		selectedDay={this.state.selectedDay}
      								inputDate={this.getInputDate}
      							/>
					        </Segment>
					  	</Grid.Column>
				      	<Grid.Column>
				        	<Segment>
				        		{(this.state.selectedDay &&
				        			this.state.selectedDay.toLocaleDateString() === 
				        			today.toLocaleDateString() || 
				        			this.state.selectedDay > today)
				        			? 	<GameListSelectedDate
				      						selectedDay={this.state.selectedDay}
				      						selectedGames={this.state.selectedGames}
				      						isLoading={this.state.isLoading}
				      					/>
				      				: 	(this.state.selectedDay &&
				      						this.state.selectedDay.toLocaleDateString() !== 
				        					today.toLocaleDateString() &&  
				      						this.state.selectedGames.length &&
				      						this.state.selectedDay < today)
				      				? 	<SelectedDateSummary
						        			selectedDay={this.state.selectedDay}
						        			selectedGames={this.state.selectedGames}
						        			byGameTotals={this.state.gameTotalsByGame}
						        			gamesFinished={this.state.gamesFinished}
						        			isLoading={this.state.isLoading}
						        		/>
      								: 	(this.state.selectedGames.length === 0)
      								?	<NoGamesScheduled
      										selectedDay={this.state.selectedDay}
      										isLoading={this.state.isLoading}
      									/>
      								: null
      							}		
				        	</Segment>
				      	</Grid.Column>
				    </Grid.Row>
				</Grid>
      					
      			<Visibility
		            offset={80}
		            once={false}
		            onTopPassed={this.stickOverlay}
		            onTopVisible={this.unStickOverlay}
		            style={overlayFixed ? { ...overlayStyle } : {}}
		        />

		       	<div 
		       		// ref={this.handleOverlayRef}
		       		style={overlayFixed ? fixedOverlayStyle : overlayStyle}
		       	>
	               	<Button 
	                	content='Back to Top'
	                  	color='blue'
	                  	style={overlayFixed ? fixedOverlayButtonStyle : overlayButtonStyle}
	                  	onClick={() => this.scrollToTop()}
	                />
		        </div>

      			{this.state.selectedDay && this.state.isLoading === true
      				?	<Segment>
      						<Dimmer active inverted>
	        					<Loader inverted content='Loading' />
	      					</Dimmer>
	      				</Segment>
	      			: 	(this.state.selectedDay &&
	      					this.state.selectedDay.toLocaleDateString() !== 
				        	today.toLocaleDateString() &&
      						this.state.selectedGames.length &&
      						this.state.selectedDay < today)
      				?	<GameInfo
		      				selectedGames={this.state.selectedGames}
		      				byGameTotals={this.state.gameTotalsByGame}
		      				byGamePlayerInfo={this.state.playerInfoByGame}
		      				byGamePlayerInfoName={this.state.playerInfoByGameName}
		      				
		      				stickGameScore={this.stickGameScore}
		      				unstickGameScore={this.unstickGameScore}
		      				gameScoreFixed={this.state.gameScoreFixed}

		      				handleScrollE={this.handleScrollE}
		      				isHorScroll={this.state.isHorScroll}
		      				getElementPosition={this.getElementPosition}
		      			/>
		      		: null	
			    }
			{/*</div>*/}
			{/*</div>*/}   
    		</React.Fragment>
    			
  		)
// let element = document.querySelector(".game-score-container");
// console.log(element);
// let elementPosition = this.getElementPosition(element);
// console.log(elementPosition.left, elementPosition.top);
  	}

}

export default BoxscoreContainer;
