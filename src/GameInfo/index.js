// https://www.w3schools.com/react/react_events.asp
import React, { Component } from 'react';
import { Table, Header, Image, Grid, Visibility } from 'semantic-ui-react';
import './style.css';


const teamLogos = [
		    	{teamId: "1", logo: "https://i.imgur.com/Kq7BbKr.png", fullName: "Atlanta Hawks"},
		    	{teamId: "2", logo: "https://i.imgur.com/ZllxvAh.png", fullName: "Boston Celtics"},
		    	{teamId: "4", logo: "https://i.imgur.com/dYRpuUv.png", fullName: "Brooklyn Nets"},
		    	{teamId: "5", logo: "https://i.imgur.com/PfpXC35.png", fullName: "Charlotte Hornets"},
		    	{teamId: "6", logo: "https://i.imgur.com/uDPZD27.png", fullName: "Chicago Bulls"},
		    	{teamId: "7", logo: "https://i.imgur.com/4pYMk58.png", fullName: "Cleveland Cavaliers"},
		    	{teamId: "8", logo: "https://i.imgur.com/XXeM6G7.png", fullName: "Dallas Mavericks"},
		    	{teamId: "9", logo: "https://i.imgur.com/0A7zhXs.png", fullName: "Denver Nuggets"},
		    	{teamId: "10", logo: "https://i.imgur.com/LEN2Uzh.png", fullName: "Detroit Pistons"},
		    	{teamId: "11", logo: "https://i.imgur.com/dsW68hf.png", fullName: "Golden State Warriors"},
		    	{teamId: "14", logo: "https://i.imgur.com/DXzHlmE.png", fullName: "Houston Rockets"},
		    	{teamId: "15", logo: "https://i.imgur.com/WFMfKNm.png", fullName: "Indiana Pacers"},
		    	{teamId: "16", logo: "https://i.imgur.com/e9B9ivY.png", fullName: "LA Clippers"},
		    	{teamId: "17", logo: "https://i.imgur.com/idShkvb.png", fullName: "Los Angeles Lakers"},
		    	{teamId: "19", logo: "https://i.imgur.com/AepoT1u.png", fullName: "Memphis Grizzlies"},
		    	{teamId: "20", logo: "https://i.imgur.com/tjwoBkp.gif", fullName: "Miami Heat"},
		    	{teamId: "21", logo: "https://i.imgur.com/58aufKB.png", fullName: "Milwaukee Bucks"},
		    	{teamId: "22", logo: "https://i.imgur.com/l2mjOHW.png", fullName: "Minnesota Timberwolves"},
		    	{teamId: "23", logo: "https://i.imgur.com/Nck6QZe.png", fullName: "New Orleans Pelicans"},
		    	{teamId: "24", logo: "https://i.imgur.com/9xJE809.gif", fullName: "New York Knicks"},
		    	{teamId: "25", logo: "https://i.imgur.com/x9dp5Ms.png", fullName: "Oklahoma City Thunder"},
		    	{teamId: "26", logo: "https://i.imgur.com/cpuQ0MH.gif", fullName: "Orlando Magic"},
		    	{teamId: "27", logo: "https://i.imgur.com/XOkEq0U.png", fullName: "Philadelphia 76ers"},
		    	{teamId: "28", logo: "https://i.imgur.com/Abf9NDQ.png", fullName: "Phoenix Suns"},
		    	{teamId: "29", logo: "https://i.imgur.com/2hGMgQw.png", fullName: "Portland Trail Blazers"},
		    	{teamId: "30", logo: "https://i.imgur.com/hfVnJcc.png", fullName: "Sacramento Kings"},
		    	{teamId: "31", logo: "https://i.imgur.com/HJjSNa4.png", fullName: "San Antonio Spurs"},
		    	{teamId: "38", logo: "https://i.imgur.com/HEVWO0q.png", fullName: "Toronto Raptors"},
	    		{teamId: "40", logo: "https://i.imgur.com/BpzstID.png", fullName: "Utah Jazz"},
	    		{teamId: "41", logo: "https://i.imgur.com/8LCV448.png", fullName: "Washington Wizards"},
	    		{teamId: "42", logo: "https://i.imgur.com/KpeyZaK.jpg", fullName: "Team World"},
	    		{teamId: "39", logo: "https://i.imgur.com/qqEMMzE.jpg", fullName: "Team USA"},
	    		{teamId: "35", logo: "https://i.imgur.com/usvyIbK.jpg", fullName: "Team LeBron"},
	    		{teamId: "34", logo: "https://i.imgur.com/22rfEKr.jpg", fullName: "Team Giannis"},
		    ]

const gameInfoListStyle = {
	listStyleType: 'none', 
	margin: 0,
	padding: 0,
}

// const gameScoreTableStyle = {
// 	border: '2px solid gold',
// 	backgroundColor: 'lightblue',
// }

// const visitorNameTableStyle = {
// 	border: '2px solid blue',
// 	backgroundColor: 'grey',
// }

// const visitorStatsDivStyle = {
// 	border: '2px solid silver',
// 	backgroundColor: 'black',
// 	height: 'calc(100vh - 155px)', // 50?? width: calc(100% - 100px);
// 	width: '100vw',
// 	overflow: 'auto',
// }

// const visitorStatsTableStyle = {
// 	border: '2px solid brown',
// 	// backgroundColor: 'yellow',
// 	// marginLeft: 15,
// }

// const blankRowTableStyle = {
// 	border: '2px solid purple',
// 	backgroundColor: 'red',
// }

// const homeNameTableStyle = {
// 	border: '2px solid red',
// 	backgroundColor: 'white',
// }

// const homeStatsTableStyle = {
// 	border: '2px solid olive',
// 	// backgroundColor: 'aqua',
// }

const footerStyleVHTot = { // puts the top border on the visitors and home totals
  // backgroundColor: 'purple',
  // color: 'white',
  borderTop: '1px solid black',
}

// passing props from boxscore container
class GameInfo extends Component {
	constructor() {
		super();
		this.state = {
			gSTablesObj: [], // game score tables HTML Collection object
			gSTArray: [], // game score table array
			// gameScoreTableFixed: false,
			// visitorNameTableFixed: false,
			// visitorStatsDivFixed: false,
			// visitorStatsFixedHeader: false,
			// visitorStatsFixed: false,
			// blankRowRel: false,
			// homeNameFixed: false,
			// homeStatsFixed: false,
			// gameScoreTableStyleFixed: {
			// 	...gameScoreTableStyle,
			// 	border: '',
			// 	backgroundColor: '',
			// 	position: '',
			// 	top: 0,
			// 	// left: 0, 
			// 	// right: 0,
			// 	zIndex: 0,
			// },
			// visitorNameTableStyleFixed: {
			// 	...visitorNameTableStyle,
			// 	border: '',
			// 	backgroundColor: '',
			// 	position: '',
			// 	position: '',
			// 	top: 0, 
			// 	// left: 0, 
			// 	// right: 0,
			// 	zIndex: 0,
			// },
			// visitorStatsDivStyleFixed: {
			// 	border: '',
			// 	backgroundColor: '',
			// 	position: '',
			// 	position: '',
			// 	top: 0, 
			// 	zIndex: 0,
			// },
			// visitorStatsHeaderStyleFixed: {
			// 	border: '',
			// 	backgroundColor: '',
			// 	position: '',
			// 	position: '',
			// 	top: 0, 
			// 	zIndex: 0,
			// },
			// visitorStatsTableStyleFixed: {
			// 	...visitorStatsTableStyle,
			// 	border: '',
			// 	backgroundColor: '',
			// 	position: '',
			// 	position: '',
			// 	top: 0, 
			// 	// left: 0, 
			// 	// right: 0,
			// 	zIndex: 0,
			// 	// overflow: '',
			// },
			// blankRowTableStyleRel: {// works for vertical scroll, not horizonal scroll, yet
			// 	...blankRowTableStyle,
			// 	border: '',
			// 	backgroundColor: '',
			// 	position: '',
			// 	position: '',
			// 	top: 0, 
			// 	// left: 0, 
			// 	// right: 0,
			// 	zIndex: 0,
			// },
			// homeNameTableStyleFixed: {// works for vertical scroll, not horizonal scroll, yet
			// 	...homeNameTableStyle,
			// 	border: '',
			// 	backgroundColor: '',
			// 	position: '',
			// 	position: '',
			// 	top: 0, // height of game score table element
			// 	// left: 0, 
			// 	// right: 0,
			// 	zIndex: 0,
			// },
			// homeStatsTableStyleFixed: {// works for vertical scroll, not horizonal scroll, yet
			// 	...homeStatsTableStyle,
			// 	border: '',
			// 	backgroundColor: '',
			// 	position: '',
			// 	position: '',
			// 	top: 0, // height of game score and home name table elements
			// 	// left: 0, 
			// 	// right: 0,
			// 	zIndex: 0,
			// },
		}
	}


	// Adds an event listener when the component is mount.
	componentDidMount(){
    	window.addEventListener("scroll", this.handleScroll);
  	}

  	// Remove the event listener when the component is unmount.
	componentWillUnmount() {
		window.removeEventListener("scroll", this.handleScroll);
	}
	
	handleScroll = (e) => { // this works on the window
    	const leftScrollPos = window.pageXOffset;
    	const topScrollPos = window.pageYOffset;
    	console.log('leftScrollPos: ', leftScrollPos);
    	console.log('topScrollPos: ', topScrollPos);
    	const viewportHeight = window.innerHeight;
    	console.log('viewportHeight: ', viewportHeight);

    	const element = e.target;
    	console.log('e: ', e);
    	console.log('element: ', element);

    	// need list array index(s) to match up with the correct game in the list
    	const gameListIndexObject = this.getListObjectIndex(); 
    	console.log('gameListIndexObject: ', gameListIndexObject);

    	const gameScoreTables = document.getElementsByClassName("game-score");
    	console.log('gameScoreTables: ', gameScoreTables);
    	// console.log('gameScoreTables.item(0): ', gameScoreTables.item(0);//Failed to compile
    	// console.log('gameScoreTables.item(0): ', gameScoreTables.item(0).style.border = "2px solid brown";//Failed to compile

    	const gameScoreTableArray = [];
    	const gameScoreTablePosTop = [];
    	const gameScoreTablePosHeight = [];
    	
    	const visitorNameTableArray = [];
    	const visitorNameTablePosTop = [];
    	const visitorNameTablePosHeight = [];

    	const visitorStatsDivArray = [];
    	const visitorStatsDivPosTop = [];
    	const visitorStatsDivPosHeight = [];
    	
    	const visitorStatsTableArray = [];
    	const visitorStatsTablePosTop = [];
    	const visitorStatsTablePosHeight = [];

    	const homeNameTableArray = [];
    	const homeNamePosTop = [];
    	const homeNamePosHeight = [];

    	const height1Array = [];
    	const height2Array = [];


    	for(let i=0; i<gameListIndexObject.object.length; i++){
    		console.log('I love Christy: ', i);
    		

    		const gameScoreTable = document.getElementsByClassName("game-score")[i];
	    	console.log('gameScoreTable: ', gameScoreTable);
	    	const gSTObjPos = this.getElementPosition(gameScoreTable); // game score table element object position
	    	console.log('gSTObjPos: ', gSTObjPos);
	    	const leftSPGST = gSTObjPos.left; // left scroll position game score table element
	    	const topSPGST = gSTObjPos.top; // top scroll position game score table element
	    	console.log('leftSPGST: ', leftSPGST);
	    	console.log('topSPGST: ', topSPGST);
	    	const gameScoreTableHeight = gSTObjPos.height; // height of game score table element
	    	console.log('gameScoreTableHeight: ', gameScoreTableHeight);
	    	gameScoreTableArray.push(gameScoreTable);
	    	gameScoreTablePosTop.push(topSPGST);
	    	gameScoreTablePosHeight.push(gameScoreTableHeight);

	    	if(gameScoreTables.item(0) === gameScoreTable){
	    		console.log('Heck Yes! gameScoreTables.item(0) === gameScoreTable');
	    	} else if(gameScoreTables.item(0) !== gameScoreTable){
	    		console.log('Heck No! gameScoreTables.item(0) !== gameScoreTable');
	    	}

	    	// const visitorNameTable = document.getElementsByClassName("visitor-name")[i];
	    	// console.log('visitorNameTable: ', visitorNameTable);
	    	// const vNTObjPos = this.getElementPosition(visitorNameTable); // visitor name table element object position
	    	// console.log('vNTObjPos: ', vNTObjPos);
	    	// const leftSPVNT = vNTObjPos.left; // left scroll position visitor name table element
	    	// const topSPVNT = vNTObjPos.top; // top scroll position visitor name table element
	    	// console.log('leftSPVNT: ', leftSPVNT);
	    	// console.log('topSPVNT: ', topSPVNT);
	    	// const visitorNameTableHeight = vNTObjPos.height; // height of visitor name table element
	    	// console.log('visitorNameTableHeight: ', visitorNameTableHeight);
	    	// visitorNameTableArray.push(visitorNameTable);
	    	// visitorNameTablePosTop.push(topSPVNT);
	    	// visitorNameTablePosHeight.push(visitorNameTableHeight);

	    	// const visitorStatsDiv = document.getElementById("visitor-stats-container");
	    	// console.log('visitorStatsDiv: ', visitorStatsDiv);
	    	// const vSDObjPos = this.getElementPosition(visitorStatsDiv); // visitor stats div element object position
	    	// console.log('vSDObjPos: ', vSDObjPos);
	    	// const leftSPVSD = vSDObjPos.left; // left scroll position visitor stats div element
	    	// const topSPVSD = vSDObjPos.top; // top scroll position visitor stats div element
	    	// console.log('leftSPVST: ', leftSPVSD);
	    	// console.log('topSPVST: ', topSPVSD);
	    	// const visitorStatsDivHeight = vSDObjPos.height; // height of visitor stats div element
	    	// console.log('visitorStatsDivHeight: ', visitorStatsDivHeight);
	    	// visitorStatsDivArray.push(visitorStatsDiv);
	    	// visitorStatsDivPosTop.push(topSPVSD);
	    	// visitorStatsDivPosHeight.push(visitorStatsDivHeight);

	    	const visitorStatsTable = document.getElementsByClassName("visitor-stats")[i];
	    	console.log('visitorStatsTable: ', visitorStatsTable);
	    	const vSTObjPos = this.getElementPosition(visitorStatsTable); // visitor stats table element object position
	    	console.log('vSTObjPos: ', vSTObjPos);
	    	const leftSPVST = vSTObjPos.left; // left scroll position visitor stats table element
	    	const topSPVST = vSTObjPos.top; // top scroll position visitor stats table element
	    	console.log('leftSPVST: ', leftSPVST);
	    	console.log('topSPVST: ', topSPVST);
	    	const visitorStatsTableHeight = vSTObjPos.height; // height of visitor stats table element
	    	console.log('visitorStatsTableHeight: ', visitorStatsTableHeight);
	    	visitorStatsTableArray.push(visitorStatsTable);
	    	visitorStatsTablePosTop.push(topSPVST);
	    	visitorStatsTablePosHeight.push(visitorStatsTableHeight);

	    	// const blankRowTable = document.getElementsByClassName("blank-row")[i];
	    	// console.log('blankRowTable: ', blankRowTable);
	    	// const bRTObjPos = this.getElementPosition(blankRowTable); // blank row table element object position
	    	// console.log('bRTObjPos: ', bRTObjPos);
	    	// const leftSPBRT = bRTObjPos.left; // left scroll position blank row table element
	    	// const topSPBRT = bRTObjPos.top; // top scroll position blank row table element
	    	// console.log('leftSPBRT: ', leftSPBRT);
	    	// console.log('topSPBRT: ', topSPBRT);
	    	// const blankRowHeight = bRTObjPos.height; // height of blank row table element
	    	// console.log('blankRowHeight: ', blankRowHeight);

	    	// const homeNameTable = document.getElementsByClassName("home-name")[i];
	    	// console.log('homeNameTable: ', homeNameTable);
	    	// const hNTObjPos = this.getElementPosition(homeNameTable); // home name table element object position
	    	// console.log('hNTObjPos: ', hNTObjPos);
	    	// const leftSPHNT = hNTObjPos.left; // left scroll position home name table element
	    	// const topSPHNT = hNTObjPos.top; // top scroll position home name table element
	    	// console.log('leftSPHNT: ', leftSPHNT);
	    	// console.log('topSPHNT: ', topSPHNT);
	    	// const homeNameHeight = hNTObjPos.height; // height of home name table element
	    	// console.log('homeNameHeight: ', homeNameHeight);
	    	// homeNameTableArray.push(homeNameTable);
	    	// homeNamePosTop.push(topSPHNT);
	    	// homeNamePosHeight.push(homeNameHeight);

	    	const homeStatsTable = document.getElementsByClassName("home-stats")[i];
	    	console.log('homeStatsTable: ', homeStatsTable);
	    	const hSTObjPos = this.getElementPosition(homeStatsTable); // home stats table element object position
	    	console.log('hSTObjPos: ', hSTObjPos);
	    	const leftSPHST = hSTObjPos.left; // left scroll position home stats table element
	    	const topSPHST = hSTObjPos.top; // top scroll position home stats table element
	    	console.log('leftSPHST: ', leftSPHST);
	    	console.log('topSPHST: ', topSPHST);
	    	const homeStatsHeight = hSTObjPos.height; // height of home stats table element
	    	console.log('homeStatsHeight: ', homeStatsHeight);

	    	const height1 = gameScoreTableHeight;
	    	height1Array.push(height1);
	    	// const height2 = height1 + visitorNameTableHeight;
	    	// height2Array.push(height2);
	    	// const height3 = height2 + visitorStatsDivHeight;
	    	// const height4 = height3 + blankRowHeight;
	    	// const height5 = height4 + homeNameHeight;
	    	// const height6 = height5 + homeStatsHeight;
	    	// const height7 = gameScoreTableHeight + homeNameHeight;


	    	console.log('gameScoreTablePosTop: ', gameScoreTablePosTop);
	    	console.log('gameScoreTablePosTop[i]: ', gameScoreTablePosTop[i]);

	    	console.log('gameListIndexObject.array[i]: ', gameListIndexObject.array[i]);

	    	console.log('height1Array: ', height1Array);
	    	console.log('height1Array[i]: ', height1Array[i]);	    	

			console.log('height2Array: ', height2Array);
	    	console.log('height2Array[i]: ', height2Array[i]);	    	

	    	this.setState({
    			gSTablesObj: gameScoreTables, //HTMLCollection Object
    			gSTArray: gameScoreTableArray,
    		})
	    
	    	this.setState({
	    		// gameScoreTableFixed: (gameScoreTablePosTop[0] <= 0) ? true : false,
	    		// visitorNameTableFixed: (visitorNameTablePosTop[0] <= height1Array[0]) ? true : false,
	    		// visitorStatsDivFixed: (visitorStatsDivPosTop[0] <= height2Array[0]) ? true : false,
				// visitorStatsFixedHeader: (visitorStatsPosTop[0] <= height2Array[0]) ? true : false,
				// visitorStatsTableFixed: (visitorStatsTablePosTop[0] <= height2Array[0]) ? true : false,
				// blankRowFixed: (topSPBRT <= height3) ? true : false,
				// homeNameFixed: (homeNamePosTop[0] <= height1Array[0]) ? true : false,
	    		// homeStatsFixed: (topSPHST <= height6) ? true : false,
	    	})

		    	this.setState({
		   			// gameScoreTableStyleFixed: 
					// 	// (gameScorePosTop[0] <= 0) && (gameScoreTables.item(0) === gameScoreTableArray[0])
					// 	// ?
					// 	{...gameScoreTableStyle,
					// 	border: '2px solid purple',
					// 	backgroundColor: 'silver',
					// 	// position: 'fixed',
					// 	top: 0,
					// 	// left: 0, 
					// 	// right: 0,
					// 	zIndex: 50,
					// 	position: '-webkit-sticky',
					// 	position: 'sticky'}
					// 	// :
					// 	// {...gameScoreTableStyle}
					// ,
					// visitorNameTableStyleFixed: {
					// 	...visitorNameTableStyle,
					// 	border: '2px solid green',
					// 	backgroundColor: 'gold',
					// 	// position: 'fixed',
					// 	top: height1Array[0], // height of game score table element
					// 	// left: 0, 
					// 	// right: 0,
					// 	zIndex: 40,
					// 	position: '-webkit-sticky',
					// 	position: 'sticky',
					// },
					// visitorStatsDivStyleFixed: {
					// 	...visitorStatsDivStyle,
					// 	border: '2px solid lime',
					// 	// backgroundColor: 'teal',
					// 	// position: 'relative',
					// 	top: height2Array[0], // height of game score and visitor name table elements
					// 	zIndex: 35, // mess with this
					// 	position: '-webkit-sticky',
					// 	position: 'sticky',
					// },
					// visitorStatsHeaderStyleFixed: {
					// 	border: '2px solid navy',
					// 	backgroundColor: 'olive',
					// 	position: '-webkit-sticky',
					// 	position: 'sticky',
					// 	top: height2Array[0], // height of game score and visitor name table elements
					// 	zIndex: 35,
					// },
					// visitorStatsTableStyleFixed: {
					// 	...visitorStatsTableStyle,
					// 	border: '2px solid orange',
					// 	// backgroundColor: 'teal',
					// 	// position: 'relative',
					// 	top: height2Array[0], // height of game score and visitor name table elements
					// 	// left: 0, 
					// 	// right: 0,
					// 	zIndex: 35,
					// 	position: '-webkit-sticky',
					// 	position: 'sticky',
					// 	// overflow: 'auto',
					// },
					// blankRowTableStyleRel: {
					// 	...blankRowTableStyle,
					// 	border: '2px solid silver',
					// 	backgroundColor: 'teal',
					// 	// position: 'fixed',
					// 	top: height3, // height of game score, visitor name, and visitor stats table elements
					// 	// left: 0, 
					// 	// right: 0,
					// 	zIndex: 1,
					// 	position: '-webkit-sticky',
					// 	position: 'sticky',
					// },
					// homeNameTableStyleFixed: {
					// 	...homeNameTableStyle,
					// 	border: '2px solid fuchsia',
					// 	backgroundColor: 'lime',
					// 	// position: 'fixed',
					// 	top: height1Array[0], // height of game score table element
					// 	// left: 0, 
					// 	// right: 0,
					// 	zIndex: 45,
					// 	// (i > 0 && viewportHeight - homeNamePosTop[i] > 0) ? -10 : 45,
					// 	position: '-webkit-sticky',
					// 	position: 'sticky',
					// },
					// homeStatsTableStyleFixed: {
					// 	...homeStatsTableStyle,
					// 	border: '2px solid maroon',
					// 	// backgroundColor: 'navy',
					// 	// position: 'relative',
					// 	//*** top: height7, // height of game score and home name table elements
					// 	// left: 0, 
					// 	// right: 0,
					// 	zIndex: 0,
					// 	position: '-webkit-sticky',
					// 	position: 'sticky',
					// },
		    	})

	    }	
    	
    }

    
    // https://plainjs.com/javascript/styles/get-the-position-of-an-element-relative-to-the-document-24/
    // https://www.w3adda.com/react-js-tutorial/reactjs-refs
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    getElementPosition = (element) => {
		console.log('element: ', element);
    	let rect = element.getBoundingClientRect(),
    	scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    	scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    	
    	console.log('rect: ', rect);
    	// return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    	return rect;
    }

    getListObjectIndex = () => { // HTMLCollection Object
    	const listObj = document.getElementById("game-info").getElementsByTagName("LI");
    	// console.log(listObj);
    	let listObjArrayIndex = [];
    	for(let i=0; i<listObj.length; i++){
    		// console.log('i: ', i);
    		listObjArrayIndex.push(i);
    	}
    	// console.log('listObjArrayIndex: ', listObjArrayIndex);
    	return {object: listObj, array: listObjArrayIndex};
    }


	render() {
		console.log(this.props);
		// console.log(this.props.byGamePlayerInfoName[0][0].api.players[0].playerId);
		console.log('gSTablesObj: ', this.state.gSTablesObj);
		console.log('gSTArray: ', this.state.gSTArray);
		// console.log('gameScoreTableFixed: ', this.state.gameScoreTableFixed);
		// console.log('visitorNameTableFixed: ', this.state.visitorNameTableFixed);
		// console.log('visitorStatsDivFixed: ', this.state.visitorStatsDivFixed);
		// console.log('visitorStatsFixedHeader: ', this.state.visitorStatsFixedHeader);
		// console.log('visitorStatsTableFixed: ', this.state.visitorStatsTableFixed);
		// console.log('blankRowFixed: ', this.state.blankRowFixed);
		// console.log('homeNameFixed: ', this.state.homeNameFixed);
		// console.log('homeStatsFixed: ', this.state.homeStatsFixed);
		

		if (this.props.byGameTotals[0].api.statistics.length === 0) {
			return null
		}

		let counter = 0;// this counts the number of games in the this.props.byGamePlayerInfoName array
	
		//map needs to be passed an array, not an object.
		const selectedGames = this.props.selectedGames.map((game, gameIndex) => {
			// add a return statement to this function block and define new variables
			// so the sections will display next to each other
			// shout out to John Cothran of edj sports
			// console.log('gameIndex: ', gameIndex);
			const byGameTotalsGameV = this.props.byGameTotals
				.find(totalsGame => totalsGame.api.statistics[0].gameId === game.gameId);
			const byGamePlayerInfoGameV = this.props.byGamePlayerInfo
				.find(totalsPlayer => totalsPlayer.api.statistics[0].gameId === game.gameId);
				// console.log(byGamePlayerInfoGameV);//this is an object
				
				// need to loop through statistics array to get each player's stats
				const playerRowV = byGamePlayerInfoGameV.api.statistics
					.filter(visitor => visitor.teamId === game.vTeam.teamId)
					// console.log(playerRowV);
					.map((player, i) => (
						<Table.Row key={player.playerId}>
							{/*<Table.Cell>{player.playerId}</Table.Cell>*/}
							<Table.Cell>
							{/*find the player based on playerId, then get the first and last names*/}
								{
								this.props.byGamePlayerInfoName[gameIndex]
								.find(playerInfo => playerInfo.api.players[0].playerId === player.playerId)
								.api.players[0].lastName
								+ ", " + 
								this.props.byGamePlayerInfoName[gameIndex]
								.find(playerInfo => playerInfo.api.players[0].playerId === player.playerId)
								.api.players[0].firstName
								}
							</Table.Cell>
						    <Table.Cell>{player.min}</Table.Cell>
						    <Table.Cell>{player.points}</Table.Cell>
						    <Table.Cell>{player.totReb}</Table.Cell>
						    <Table.Cell>{player.assists}</Table.Cell>
						    <Table.Cell>{player.pFouls}</Table.Cell>
						    <Table.Cell>{player.steals}</Table.Cell>
						    <Table.Cell>{player.turnovers}</Table.Cell>
						    <Table.Cell>{player.blocks}</Table.Cell>
					    </Table.Row>
					));

			const byGameTotalsGameH = this.props.byGameTotals
				.find(totalsGame => totalsGame.api.statistics[1].gameId === game.gameId);
			const byGamePlayerInfoGameH = this.props.byGamePlayerInfo
				.find(totalsPlayer => totalsPlayer.api.statistics[1].gameId === game.gameId);
				// console.log(byGamePlayerInfoGameH);//this is an object
				
				// need to loop through statistics array to get each player's stats
				const playerRowH = byGamePlayerInfoGameH.api.statistics
					.filter(home => home.teamId === game.hTeam.teamId)
					// console.log(playerRowH);
					.map((player, i) => (
						<Table.Row key={player.playerId}>
							{/*<Table.Cell>{player.playerId}</Table.Cell>*/}
							<Table.Cell>
							{/*find the player based on playerId, then get the first and last names*/}
								{
								this.props.byGamePlayerInfoName[gameIndex]
								.find(playerInfo => playerInfo.api.players[0].playerId === player.playerId)
								.api.players[0].lastName
								+ ", " + 
								this.props.byGamePlayerInfoName[gameIndex]
								.find(playerInfo => playerInfo.api.players[0].playerId === player.playerId)
								.api.players[0].firstName
								}
							</Table.Cell>
						    <Table.Cell>{player.min}</Table.Cell>
						    <Table.Cell>{player.points}</Table.Cell>
						    <Table.Cell>{player.totReb}</Table.Cell>
						    <Table.Cell>{player.assists}</Table.Cell>
						    <Table.Cell>{player.pFouls}</Table.Cell>
						    <Table.Cell>{player.steals}</Table.Cell>
						    <Table.Cell>{player.turnovers}</Table.Cell>
						    <Table.Cell>{player.blocks}</Table.Cell>
					    </Table.Row>
					));	

		// console.log('counter: ', counter);
		counter+=1

		return(
			game.startTimeUTC.length === 10
				?	null
				: 	
			<li key={game.gameId}> {/*make this a List Item*/}

				{/*<div 
		       		// START HERE!!!!
		       		style={vSHOverlayFixed ? vSHOverlayStyleFixed : vSHOverlayStyle}
		       	>
	               	<Button 
	                	content='Back to Top'
	                  	color='blue'
	                  	style={overlayFixed ? fixedOverlayButtonStyle : overlayButtonStyle}
	                  	onClick={() => this.scrollToTop()}
	                />
		        </div>*/}
			  	
			  	<div id='game-score-container'>
			  		<div id='game-score-inside-container'>
					    <Table
					    	// https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity
					    	className='game-score'
					    	unstackable 
					    	attached='top'
					    	// textAlign='center'
					    	// style={(this.state.gameScoreTableFixed) 
					    			// ? this.state.gameScoreTableStyleFixed : gameScoreTableStyle}
					    >
					    	<Table.Header>
						      	<Table.Row textAlign='center'>
						        	<Table.HeaderCell style={{}}>	
					        			<Header as='h4'>
		            						{game.vTeam.shortName}
								        </Header>
						        	</Table.HeaderCell>
						        	<Table.HeaderCell style={{}}>
						        		<Header as='h4'>
		            						{game.vTeam.score.points}
								        </Header>
						        	</Table.HeaderCell>
						        	<Table.HeaderCell style={{}}>
					        			<Header as='h4'>
		            						{game.currentPeriod !== "" ? "FINAL" : null}
								        </Header>
						        	</Table.HeaderCell>
						        	<Table.HeaderCell style={{}}>
					       				<Header as='h4'>
		            						{game.hTeam.score.points}
								        </Header>
						        	</Table.HeaderCell>
						        	<Table.HeaderCell style={{}}>
					        			<Header as='h4'>
		            						{game.hTeam.shortName}
								        </Header>
						        	</Table.HeaderCell>
						      	</Table.Row>
						      	<Table.Row textAlign='center'>
						      		<Table.HeaderCell>
						        		<Header as='h4' image>
						        			<Image src={teamLogos.find(teamLogo => 
						        				teamLogo.teamId === game.vTeam.teamId).logo} size='mini' />
						        		</Header>
						        	</Table.HeaderCell>
						        	<Table.HeaderCell></Table.HeaderCell>
						        	<Table.HeaderCell>
					        			<Header as='h4'>
		            						{game.currentPeriod === "5/4" ? "OT" 
		            							: game.currentPeriod === "6/4" ? "2OT"
		            							: game.currentPeriod === "7/4" ? "3OT"
		            							: game.currentPeriod === "8/4" ? "4OT"
		            							: game.currentPeriod === "9/4" ? "5OT"
		            							: null
		            						}
								        </Header>
						        	</Table.HeaderCell>
						        	<Table.HeaderCell></Table.HeaderCell>
						        	<Table.HeaderCell>
						        		<Header as='h4' image>
						        			<Image src={teamLogos.find(teamLogo => 
						        				teamLogo.teamId === game.hTeam.teamId).logo} size='mini' />
						        		</Header>
						        	</Table.HeaderCell>
						      	</Table.Row>
							</Table.Header>						      		
					    </Table>
					</div>
				</div>
					<Table
						className='visitor-stats'
				    	celled
				    	striped
				    	unstackable 
				    	attached
				    >
						<Table.Header id='visitor-name'>
							<Table.Row>
						        <Table.HeaderCell colSpan='4'>{game.vTeam.fullName}</Table.HeaderCell>
						        <Table.HeaderCell colSpan='5'></Table.HeaderCell>
						    </Table.Row>
					      	<Table.Row>
						        {/*<Table.HeaderCell>Player ID</Table.HeaderCell>*/}
						        <Table.HeaderCell>Player</Table.HeaderCell>
						        <Table.HeaderCell>MIN</Table.HeaderCell>
						        <Table.HeaderCell>PTS</Table.HeaderCell>
						        <Table.HeaderCell>REB</Table.HeaderCell>
						        <Table.HeaderCell>AST</Table.HeaderCell>
						        <Table.HeaderCell>F</Table.HeaderCell>
						        <Table.HeaderCell>STL</Table.HeaderCell>
						        <Table.HeaderCell>TO</Table.HeaderCell>
						        <Table.HeaderCell>BLK</Table.HeaderCell>
					      	</Table.Row>
						</Table.Header>
						<Table.Body id='visitor-individual-stats'>
					    	{playerRowV}
					    </Table.Body>
					    <Table.Footer id='visitor-total-stats'>
					      <Table.Row>
					        <Table.HeaderCell style={footerStyleVHTot}>Visitor Totals:</Table.HeaderCell>
					        <Table.HeaderCell style={footerStyleVHTot}>{byGameTotalsGameV.api.statistics[0].min}</Table.HeaderCell>
					        <Table.HeaderCell style={footerStyleVHTot}>{byGameTotalsGameV.api.statistics[0].points}</Table.HeaderCell>
					        <Table.HeaderCell style={footerStyleVHTot}>{byGameTotalsGameV.api.statistics[0].totReb}</Table.HeaderCell>
					        <Table.HeaderCell style={footerStyleVHTot}>{byGameTotalsGameV.api.statistics[0].assists}</Table.HeaderCell>
					        <Table.HeaderCell style={footerStyleVHTot}>{byGameTotalsGameV.api.statistics[0].pFouls}</Table.HeaderCell>
					        <Table.HeaderCell style={footerStyleVHTot}>{byGameTotalsGameV.api.statistics[0].steals}</Table.HeaderCell>
					        <Table.HeaderCell style={footerStyleVHTot}>{byGameTotalsGameV.api.statistics[0].turnovers}</Table.HeaderCell>
					        <Table.HeaderCell style={footerStyleVHTot}>{byGameTotalsGameV.api.statistics[0].blocks}</Table.HeaderCell>
					      </Table.Row>
					    </Table.Footer>
				    </Table>
				    <Table id='blank-row' unstackable attached>
				    	<Table.Body>
					    	<Table.Row>
					    		<Table.Cell></Table.Cell>
				    		</Table.Row>
			    		</Table.Body>
				    </Table>
				    <Table 
				    	className='home-stats' 
				    	celled
				    	striped
				    	unstackable 
				    	attached='bottom'
				    >
					    <Table.Header id='home-name'>
							<Table.Row>
						        <Table.HeaderCell colSpan='4'>{game.hTeam.fullName}</Table.HeaderCell>
						        <Table.HeaderCell colSpan='5'></Table.HeaderCell>
						    </Table.Row>
					      	<Table.Row>
						        {/*<Table.HeaderCell>Player ID</Table.HeaderCell>*/}
						        <Table.HeaderCell>Player</Table.HeaderCell>
						        <Table.HeaderCell>MIN</Table.HeaderCell>
						        <Table.HeaderCell>PTS</Table.HeaderCell>
						        <Table.HeaderCell>REB</Table.HeaderCell>
						        <Table.HeaderCell>AST</Table.HeaderCell>
						        <Table.HeaderCell>F</Table.HeaderCell>
						        <Table.HeaderCell>STL</Table.HeaderCell>
						        <Table.HeaderCell>TO</Table.HeaderCell>
						        <Table.HeaderCell>BLK</Table.HeaderCell>
					      	</Table.Row>
						</Table.Header>
						<Table.Body id='home-individual-stats'>
					    	{playerRowH}
					    </Table.Body>
					    <Table.Footer id='home-total-stats'>
							<Table.Row>
								<Table.HeaderCell style={footerStyleVHTot}>Home Totals:</Table.HeaderCell>
								<Table.HeaderCell style={footerStyleVHTot}>{byGameTotalsGameH.api.statistics[1].min}</Table.HeaderCell>
								<Table.HeaderCell style={footerStyleVHTot}>{byGameTotalsGameH.api.statistics[1].points}</Table.HeaderCell>
								<Table.HeaderCell style={footerStyleVHTot}>{byGameTotalsGameH.api.statistics[1].totReb}</Table.HeaderCell>
								<Table.HeaderCell style={footerStyleVHTot}>{byGameTotalsGameH.api.statistics[1].assists}</Table.HeaderCell>
								<Table.HeaderCell style={footerStyleVHTot}>{byGameTotalsGameH.api.statistics[1].pFouls}</Table.HeaderCell>
								<Table.HeaderCell style={footerStyleVHTot}>{byGameTotalsGameH.api.statistics[1].steals}</Table.HeaderCell>
								<Table.HeaderCell style={footerStyleVHTot}>{byGameTotalsGameH.api.statistics[1].turnovers}</Table.HeaderCell>
								<Table.HeaderCell style={footerStyleVHTot}>{byGameTotalsGameH.api.statistics[1].blocks}</Table.HeaderCell>
							</Table.Row>
					    </Table.Footer>
					</Table>
			<br/>
			<br/>
			</li>

		)})
		// this.getListObjectIndex() // breaks the app
		// {console.log('listObjArrayIndex: ', listObjArrayIndex)} // yields an empty array

		return(
		    <React.Fragment>
				<div id='game-info'>
				  	{/*<div className='game-info-scroll'>*/}
					  	<h4>Game Info</h4>
						<ul style={gameInfoListStyle}>
						{selectedGames}
						</ul>
					{/*</div>*/}
			  	</div>
		    </React.Fragment>
	    )
	}
}


export default GameInfo;


// https://www.w3schools.com/jsref/prop_element_scrollleft.asp
// This works with an outer div and an inner div.
// It helps to include overflow-x: scroll and overflow-y: scroll or overflow: auto in the  outer div css.
// The GameInfo component did not push the components above it off the screen. The components above the
// flow of GameInfo had to be manually scrolled to get off the viewport.


