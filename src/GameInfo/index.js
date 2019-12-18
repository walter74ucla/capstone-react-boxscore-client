import React from 'react';
import { Table } from 'semantic-ui-react';


// passing props from boxscore container
function GameInfo (props) {
	console.log(props)
	//map needs to be passed an array, not an object.
	const selectedGames = props.selectedGames.map(game => {
		const byGameTotalsGame = props.byGameTotals.find(totalsGame => totalsGame.api.statistics[0].gameId === game.gameId);
		return (
			<li key={game.gameId}>
			    {game.vTeam.shortName} versus {game.hTeam.shortName}
				    <Table celled>
					    <Table.Header>
					      <Table.Row>
					        <Table.HeaderCell>{game.vTeam.fullName}</Table.HeaderCell>
					      </Table.Row>
					    </Table.Header>
					    <Table.Header>
					      <Table.Row>
					        <Table.HeaderCell>Visitor's Totals:</Table.HeaderCell>
					        <Table.HeaderCell>{byGameTotalsGame.api.statistics[0].points}</Table.HeaderCell>
					      </Table.Row>
					    </Table.Header>
				    </Table>
			</li>
	
		)})

	const byGameTotals = props.byGameTotals.map(game => (
		<li key={game.api.statistics[0].gameId}>

			<Table celled>
			    <Table.Header>
			      <Table.Row>
			        <Table.HeaderCell>Visitor's Totals:</Table.HeaderCell>
			        <Table.HeaderCell>{game.api.statistics[0].points}</Table.HeaderCell>
			      </Table.Row>
			    </Table.Header>
			</Table>
	    </li>
	))


	return(
	    <React.Fragment>
	      <h4>Game Info</h4>
	      <ul>
	        {selectedGames}
	        {byGameTotals}
	      </ul>
	      {/*<Table celled striped>
		    <Table.Header>
		      <Table.Row>
		        <Table.HeaderCell>Header</Table.HeaderCell>
		        <Table.HeaderCell>Header</Table.HeaderCell>
		        <Table.HeaderCell>Header</Table.HeaderCell>
		      </Table.Row>
		    </Table.Header>

		    <Table.Body>
		      <Table.Row>
		        <Table.Cell>Cell</Table.Cell>
		        <Table.Cell>Cell</Table.Cell>
		        <Table.Cell>Cell</Table.Cell>
		      </Table.Row>
		      <Table.Row>
		        <Table.Cell>Cell</Table.Cell>
		        <Table.Cell>Cell</Table.Cell>
		        <Table.Cell>Cell</Table.Cell>
		      </Table.Row>
		      <Table.Row>
		        <Table.Cell>Cell</Table.Cell>
		        <Table.Cell>Cell</Table.Cell>
		        <Table.Cell>Cell</Table.Cell>
		      </Table.Row>
		    </Table.Body>
		  </Table>*/}
	    </React.Fragment>
    )		

}


export default GameInfo;