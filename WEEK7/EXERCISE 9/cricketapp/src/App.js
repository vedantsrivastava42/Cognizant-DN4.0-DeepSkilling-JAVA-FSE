import './App.css';
import ListofPlayers from './ListofPlayers';
import Scorebelow70 from './Scorebelow70';
import IndianTeam from './IndianPlayers';
import { OddPlayers, EvenPlayers } from './PlayerUtils';
import { IndianPlayers } from './IndianPlayers';

function App() {
  // Array of 11 players with names and scores
  const players = [
    { name: 'Jack', score: 50 },
    { name: 'Michael', score: 70 },
    { name: 'John', score: 40 },
    { name: 'Ann', score: 61 },
    { name: 'Elizabeth', score: 61 },
    { name: 'Sachin', score: 95 },
    { name: 'Dhoni', score: 100 },
    { name: 'Virat', score: 84 },
    { name: 'Jadeja', score: 64 },
    { name: 'Raina', score: 75 },
    { name: 'Rohit', score: 80 }
  ];

 
  const [first, second, third, fourth, fifth, sixth] = IndianPlayers;

  let flag = false;

  if (flag === true) {
    return (
      <div>
        <h1>List of Players</h1>
        <ListofPlayers players={players} />
        <hr />
        <h1>List of Players having Scores Less than 70</h1>
        <Scorebelow70 players={players} />
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <h1>Indian Team</h1>
          <h1>Odd Players</h1>
          <ul>
            {OddPlayers(`${first}1`, `${third}3`, `${fifth}5`)}
          </ul>
          <hr />
          <h1>Even Players</h1>
          <ul>
            {EvenPlayers(`${second}2`, `${fourth}4`, `${sixth}6`)}
          </ul>
        </div>
        <hr />
        <div>
          <h1>List of Indian Players Merged:</h1>
          <ul>
            {IndianPlayers.map((player, index) => (
              <li key={index}>Mr. {player}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
